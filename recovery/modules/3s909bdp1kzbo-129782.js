// Recovered from 3s909bdp1kzbo.js. Runtime module IDs: 129782.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t, r, n, i, a, o, s, l, u, c, d, h;
  e.i(18545);
  var p,
    f,
    m,
    g,
    b,
    _,
    x,
    T,
    y = e.i(657810),
    S = e.i(695668),
    v = e.i(78278),
    R = e.i(277877),
    E = e.i(933525),
    A = e.i(550645),
    M = e.i(818011),
    C = e.i(153594),
    G = e.i(337654),
    w = e.i(705038),
    D = "\nin vec2 vTextureCoord;\nin vec4 vColor;\n\nout vec4 finalColor;\n\nuniform float uBlend;\n\nuniform sampler2D uTexture;\nuniform sampler2D uBackTexture;\n\n{FUNCTIONS}\n\nvoid main()\n{ \n    vec4 back = texture(uBackTexture, vTextureCoord);\n    vec4 front = texture(uTexture, vTextureCoord);\n    float blendedAlpha = front.a + back.a * (1.0 - front.a);\n    \n    {MAIN}\n}\n",
    P = "in vec2 aPosition;\nout vec2 vTextureCoord;\nout vec2 backgroundUv;\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
    O = "\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct BlendUniforms {\n  uBlend:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n@group(0) @binding(3) var uBackTexture: texture_2d<f32>;\n\n@group(1) @binding(0) var<uniform> blendUniforms : BlendUniforms;\n\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\n{FUNCTIONS}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>\n) -> @location(0) vec4<f32> {\n\n\n   var back =  textureSample(uBackTexture, uSampler, uv);\n   var front = textureSample(uTexture, uSampler, uv);\n   var blendedAlpha = front.a + back.a * (1.0 - front.a);\n   \n   var out = vec4<f32>(0.0,0.0,0.0,0.0);\n\n   {MAIN}\n\n   return out;\n}";
  class B extends w.Filter {
    constructor(e) {
      const t = F({
          source: O,
          ...e.gpu
        }),
        r = M.GpuProgram.from({
          vertex: {
            source: t,
            entryPoint: "mainVertex"
          },
          fragment: {
            source: t,
            entryPoint: "mainFragment"
          }
        }),
        n = F({
          source: D,
          ...e.gl
        });
      super({
        gpuProgram: r,
        glProgram: A.GlProgram.from({
          vertex: P,
          fragment: n
        }),
        blendRequired: !0,
        resources: {
          blendUniforms: new C.UniformGroup({
            uBlend: {
              value: 1,
              type: "f32"
            }
          }),
          uBackTexture: G.Texture.EMPTY
        }
      });
    }
  }
  function F(e) {
    let {
      source: t,
      functions: r,
      main: n
    } = e;
    return t.replace("{FUNCTIONS}", r).replace("{MAIN}", n);
  }
  let I = `
	float getLuminosity(vec3 c) {
		return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
	}

	vec3 setLuminosity(vec3 c, float lum) {
		float modLum = lum - getLuminosity(c);
		vec3 color = c.rgb + vec3(modLum);

		// clip back into legal range
		modLum = getLuminosity(color);
		vec3 modLumVec = vec3(modLum);

		float cMin = min(color.r, min(color.g, color.b));
		float cMax = max(color.r, max(color.g, color.b));

		if(cMin < 0.0) {
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0) {
			color = mix(modLumVec, color, (1.0 - modLum) / (cMax - modLum));
		}

		return color;
	}

	float getSaturation(vec3 c) {
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	vec3 setSaturationMinMidMax(vec3 cSorted, float s) {
		vec3 colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x) {
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else {
			colorSorted.y = 0.0;
			colorSorted.z = 0.0;
		}

		colorSorted.x = 0.0;

		return colorSorted;
	}

	vec3 setSaturation(vec3 c, float s) {
		vec3 color = c;

		if(color.r <= color.g && color.r <= color.b) {
			if(color.g <= color.b) {
				color = setSaturationMinMidMax(color.rgb, s).rgb;
			}
			else {
				color = setSaturationMinMidMax(color.rbg, s).rbg;
			}
		}
		else if(color.g <= color.r && color.g <= color.b) {
			if(color.r <= color.b) {
				color = setSaturationMinMidMax(color.grb, s).grb;
			}
			else {
				color = setSaturationMinMidMax(color.gbr, s).gbr;
			}
		}
		else {
			// Using bgr for both fixes part of hue
			if(color.r <= color.g) {
				color = setSaturationMinMidMax(color.brg, s).brg;
			}
			else {
				color = setSaturationMinMidMax(color.bgr, s).bgr;
			}
		}

		return color;
	}
    `,
    U = `
	fn getLuminosity(c: vec3<f32>) -> f32
	{
		return 0.3*c.r + 0.59*c.g + 0.11*c.b;
	}

	fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32>
	{
		var modLum: f32 = lum - getLuminosity(c);
		var color: vec3<f32> = c.rgb + modLum;

		// clip back into legal range
		modLum = getLuminosity(color);
		let modLumVec = vec3<f32>(modLum);

		let cMin: f32 = min(color.r, min(color.g, color.b));
		let cMax: f32 = max(color.r, max(color.g, color.b));

		if(cMin < 0.0)
		{
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0)
		{
			color = mix(modLumVec, color, (1 - modLum) / (cMax - modLum));
		}

		return color;
	}

	fn getSaturation(c: vec3<f32>) -> f32
	{
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32>
	{
		var colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x)
		{
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else
		{
			colorSorted.y = 0;
			colorSorted.z = 0;
		}

		colorSorted.x = 0;

		return colorSorted;
	}

	fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32>
	{
		var color = c;

		if (color.r <= color.g && color.r <= color.b)
		{
			if (color.g <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rgb, s)).rgb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rbg, s)).rbg;
			}
		}
		else if (color.g <= color.r && color.g <= color.b)
		{
			if (color.r <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.grb, s)).grb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.gbr, s)).gbr;
			}
		}
		else
		{
			// Using bgr for both fixes part of hue
			if (color.r <= color.g)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.brg, s)).brg;
			}
			else
			{
				color  = vec3<f32>(setSaturationMinMidMax(color.bgr, s)).bgr;
			}
		}

		return color;
	}
	`;
  class L extends B {
    constructor() {
      super({
        gl: {
          functions: `
                ${I}

                vec3 blendColor(vec3 base, vec3 blend,  float opacity)
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendColor(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                ${U}

                fn blendColorOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                out = vec4<f32>(blendColorOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
        }
      });
    }
  }
  L.extension = {
    name: "color",
    type: v.ExtensionType.BlendMode
  };
  class N extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float colorBurn(float base, float blend)
                {
                    return max((1.0 - ((1.0 - base) / blend)), 0.0);
                }

                vec3 blendColorBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                finalColor = vec4(blendColorBurn(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
        },
        gpu: {
          functions: `
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn blendColorBurn(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                out = vec4<f32>(blendColorBurn(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
        }
      });
    }
  }
  N.extension = {
    name: "color-burn",
    type: v.ExtensionType.BlendMode
  };
  class X extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float colorDodge(float base, float blend)
                {
                    return base / (1.0 - blend);
                }

                vec3 blendColorDodge(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendColorDodge(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return base / (1.0 - blend);
                }

                fn blendColorDodge(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                    out = vec4<f32>(blendColorDodge(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
        }
      });
    }
  }
  X.extension = {
    name: "color-dodge",
    type: v.ExtensionType.BlendMode
  };
  class k extends B {
    constructor() {
      super({
        gl: {
          functions: `
                vec3 blendDarken(vec3 base, vec3 blend, float opacity)
                {
                    return (min(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendDarken(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn blendDarken(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (min(blend,base) * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                out = vec4<f32>(blendDarken(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
        }
      });
    }
  }
  k.extension = {
    name: "darken",
    type: v.ExtensionType.BlendMode
  };
  class H extends B {
    constructor() {
      super({
        gl: {
          functions: `
                vec3 blendDifference(vec3 base, vec3 blend,  float opacity)
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                finalColor = vec4(blendDifference(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
        },
        gpu: {
          functions: `
                fn blendDifference(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                out = vec4<f32>(blendDifference(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
        }
      });
    }
  }
  H.extension = {
    name: "difference",
    type: v.ExtensionType.BlendMode
  };
  class V extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float divide(float base, float blend)
                {
                    return (blend > 0.0) ? clamp(base / blend, 0.0, 1.0) : 1.0;
                }

                vec3 blendDivide(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendDivide(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn divide(base: f32, blend: f32) -> f32
                {
                    return select(1.0, clamp(base / blend, 0.0, 1.0), blend > 0.0);
                }

                fn blendDivide(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                out = vec4<f32>(blendDivide(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
        }
      });
    }
  }
  V.extension = {
    name: "divide",
    type: v.ExtensionType.BlendMode
  };
  class $ extends B {
    constructor() {
      super({
        gl: {
          functions: `
                vec3 exclusion(vec3 base, vec3 blend)
                {
                    return base + blend - 2.0 * base * blend;
                }

                vec3 blendExclusion(vec3 base, vec3 blend, float opacity)
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendExclusion(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn exclusion(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return base+blend-2.0*base*blend;
                }

                fn blendExclusion(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                out = vec4<f32>(blendExclusion(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
        }
      });
    }
  }
  $.extension = {
    name: "exclusion",
    type: v.ExtensionType.BlendMode
  };
  class q extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float hardLight(float base, float blend)
                {
                    return (blend < 0.5) ? 2.0 * base * blend : 1.0 - 2.0 * (1.0 - base) * (1.0 - blend);
                }

                vec3 blendHardLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                finalColor = vec4(blendHardLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
        },
        gpu: {
          functions: `
                fn hardLight(base: f32, blend: f32) -> f32
                {
                    return select(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, blend < 0.5);
                }

                fn blendHardLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                out = vec4<f32>(blendHardLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
        }
      });
    }
  }
  q.extension = {
    name: "hard-light",
    type: v.ExtensionType.BlendMode
  };
  class z extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float hardMix(float base, float blend)
                {
                    return (base + blend >= 1.0) ? 1.0 : 0.0;
                }

                vec3 blendHardMix(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blended = vec3(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                finalColor = vec4(blendHardMix(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
        },
        gpu: {
          functions: `
                fn hardMix(base: f32, blend: f32) -> f32
                {
                    return select(0.0, 1.0, base + blend >= 1.0);
                }

                fn blendHardMix(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                out = vec4<f32>(blendHardMix(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
        }
      });
    }
  }
  z.extension = {
    name: "hard-mix",
    type: v.ExtensionType.BlendMode
  };
  class W extends B {
    constructor() {
      super({
        gl: {
          functions: `
                vec3 blendLighten(vec3 base, vec3 blend, float opacity)
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendLighten(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn blendLighten(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                out = vec4<f32>(blendLighten(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
        }
      });
    }
  }
  W.extension = {
    name: "lighten",
    type: v.ExtensionType.BlendMode
  };
  class Y extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float linearBurn(float base, float blend)
                {
                    return max(0.0, base + blend - 1.0);
                }

                vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendLinearBurn(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn blendLinearBurn(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                out = vec4<f32>(blendLinearBurn(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
        }
      });
    }
  }
  Y.extension = {
    name: "linear-burn",
    type: v.ExtensionType.BlendMode
  };
  class j extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendLinearDodge(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1, base + blend);
                }

                fn blendLinearDodge(base:vec3<f32>, blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                out = vec4<f32>(blendLinearDodge(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
        }
      });
    }
  }
  j.extension = {
    name: "linear-dodge",
    type: v.ExtensionType.BlendMode
  };
  class K extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float linearBurn(float base, float blend) {
                    return max(0.0, base + blend - 1.0);
                }

                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                float linearLight(float base, float blend) {
                    return (blend <= 0.5) ? linearBurn(base,2.0*blend) : linearBurn(base,2.0*(blend-0.5));
                }

                vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                finalColor = vec4(blendLinearLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base + blend);
                }

                fn linearLight(base: f32, blend: f32) -> f32
                {
                    return select(linearBurn(base,2.0*(blend-0.5)), linearBurn(base,2.0*blend), blend <= 0.5);
                }

                fn blendLinearLightOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                out = vec4<f32>(blendLinearLightOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
        }
      });
    }
  }
  K.extension = {
    name: "linear-light",
    type: v.ExtensionType.BlendMode
  };
  class Q extends B {
    constructor() {
      super({
        gl: {
          functions: `
                ${I}

                vec3 blendLuminosity(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendLuminosity = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendLuminosity(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                ${U}

                fn blendLuminosity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendLuminosity: vec3<f32> = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                out = vec4<f32>(blendLuminosity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
        }
      });
    }
  }
  Q.extension = {
    name: "luminosity",
    type: v.ExtensionType.BlendMode
  };
  class Z extends B {
    constructor() {
      super({
        gl: {
          functions: `
                vec3 negation(vec3 base, vec3 blend)
                {
                    return 1.0-abs(1.0-base-blend);
                }

                vec3 blendNegation(vec3 base, vec3 blend, float opacity)
                {
                    return (negation(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendNegation(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn blendNegation(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return 1.0-abs(1.0-base-blend);
                }

                fn blendNegationOpacity(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (blendNegation(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                out = vec4<f32>(blendNegationOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
        }
      });
    }
  }
  Z.extension = {
    name: "negation",
    type: v.ExtensionType.BlendMode
  };
  class J extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float overlay(float base, float blend)
                {
                    return (base < 0.5) ? (2.0*base*blend) : (1.0-2.0*(1.0-base)*(1.0-blend));
                }

                vec3 blendOverlay(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendOverlay(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn overlay(base: f32, blend: f32) -> f32
                {
                    return select((1.0-2.0*(1.0-base)*(1.0-blend)), (2.0*base*blend), base < 0.5);
                }

                fn blendOverlay(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                out = vec4<f32>(blendOverlay(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
        }
      });
    }
  }
  J.extension = {
    name: "overlay",
    type: v.ExtensionType.BlendMode
  };
  class ee extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float pinLight(float base, float blend)
                {
                    return (blend <= 0.5) ? min(base, 2.0 * blend) : max(base, 2.0 * (blend - 0.5));
                }

                vec3 blendPinLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                finalColor = vec4(blendPinLight(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn pinLight(base: f32, blend: f32) -> f32
                {
                    return select(max(base,2.0*(blend-0.5)), min(base,2.0*blend), blend <= 0.5);
                }

                fn blendPinLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                out = vec4<f32>(blendPinLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
        }
      });
    }
  }
  ee.extension = {
    name: "pin-light",
    type: v.ExtensionType.BlendMode
  };
  class et extends B {
    constructor() {
      super({
        gl: {
          functions: `
                ${I}

                vec3 blendSaturation(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                finalColor = vec4(blendSaturation(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
            `
        },
        gpu: {
          functions: `
                ${U}

                fn blendSaturation(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                out = vec4<f32>(blendSaturation(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
        }
      });
    }
  }
  et.extension = {
    name: "saturation",
    type: v.ExtensionType.BlendMode
  };
  class er extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float softLight(float base, float blend)
                {
                    return (blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend));
                }

                vec3 blendSoftLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendSoftLight(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn softLight(base: f32, blend: f32) -> f32
                {
                    return select(2.0 * base * blend + base * base * (1.0 - 2.0 * blend), sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), blend < 0.5);
                }

                fn blendSoftLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                out = vec4<f32>(blendSoftLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
        }
      });
    }
  }
  er.extension = {
    name: "soft-light",
    type: v.ExtensionType.BlendMode
  };
  class en extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float subtract(float base, float blend)
                {
                    return max(0.0, base - blend);
                }

                vec3 blendSubtract(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                finalColor = vec4(blendSubtract(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `
        },
        gpu: {
          functions: `
                fn subtract(base: f32, blend: f32) -> f32
                {
                    return max(0, base - blend);
                }

                fn blendSubtract(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                out = vec4<f32>(blendSubtract(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
        }
      });
    }
  }
  en.extension = {
    name: "subtract",
    type: v.ExtensionType.BlendMode
  };
  class ei extends B {
    constructor() {
      super({
        gl: {
          functions: `
                float colorBurn(float base, float blend)
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                float colorDodge(float base, float blend)
                {
                    return min(1.0, base / (1.0-blend));
                }

                float vividLight(float base, float blend)
                {
                    return (blend < 0.5) ? colorBurn(base,(2.0*blend)) : colorDodge(base,(2.0*(blend-0.5)));
                }

                vec3 blendVividLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
          main: `
                finalColor = vec4(blendVividLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
        },
        gpu: {
          functions: `
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base / (1.0-blend));
                }

                fn vividLight(base: f32, blend: f32) -> f32
                {
                    return select(colorDodge(base,(2.0*(blend-0.5))), colorBurn(base,(2.0*blend)), blend<0.5);
                }

                fn blendVividLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
          main: `
                out = vec4<f32>(blendVividLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
        }
      });
    }
  }
  ei.extension = {
    name: "vivid-light",
    type: v.ExtensionType.BlendMode
  };
  var ea = e.i(449386),
    eo = e.i(643211),
    es = e.i(203722),
    el = e.i(557305),
    eu = e.i(544920),
    ec = e.i(3165),
    ed = e.i(553527),
    eh = e.i(597023),
    ep = e.i(501522),
    ef = e.i(954198),
    em = e.i(743829),
    eg = e.i(549140),
    eb = e.i(288111),
    e_ = e.i(784710),
    ex = e.i(993),
    eT = e.i(63416),
    ey = e.i(35585),
    eS = e.i(126853),
    ev = e.i(152519),
    eR = e.i(10264),
    eE = e.i(918655),
    eA = e.i(368818),
    eM = e.i(212218),
    eC = e.i(151032),
    eG = e.i(508160),
    ew = e.i(317365),
    eD = e.i(167993),
    eP = e.i(438323),
    eO = e.i(427315),
    eB = e.i(840383),
    eF = e.i(848790),
    eI = e.i(402247),
    eU = e.i(997322),
    eL = e.i(297801),
    eN = e.i(222735),
    eX = e.i(591777),
    ek = e.i(39739);
  let eH = {
    extension: {
      type: v.ExtensionType.DetectionParser,
      priority: 3
    },
    test: async () => !!((await (0, ek.isWebGPUSupported)()) || (0, eX.isWebGLSupported)()),
    add: async e => [...e, "basis"],
    remove: async e => e.filter(e => "basis" !== e)
  };
  var eV = e.i(317765);
  class e$ extends eV.TextureSource {
    constructor(e) {
      super({
        ...e,
        mipLevelCount: e.resource.length
      }), this.uploadMethodId = "compressed";
    }
  }
  var eq = e.i(787653);
  function ez() {
    if (t) return t;
    let e = eq.DOMAdapter.get().createCanvas(1, 1).getContext("webgl");
    return e ? t = [...(e.getExtension("EXT_texture_compression_bptc") ? ["bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb"] : []), ...(e.getExtension("WEBGL_compressed_texture_s3tc") ? ["bc1-rgba-unorm", "bc2-rgba-unorm", "bc3-rgba-unorm"] : []), ...(e.getExtension("WEBGL_compressed_texture_s3tc_srgb") ? ["bc1-rgba-unorm-srgb", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm-srgb"] : []), ...(e.getExtension("EXT_texture_compression_rgtc") ? ["bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm"] : []), ...(e.getExtension("WEBGL_compressed_texture_etc") ? ["etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "eac-r11unorm", "eac-rg11unorm"] : []), ...(e.getExtension("WEBGL_compressed_texture_astc") ? ["astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"] : [])] : [];
  }
  async function eW() {
    if (r) return r;
    let e = await eq.DOMAdapter.get().getNavigator().gpu.requestAdapter();
    return r = [...(e.features.has("texture-compression-bc") ? ["bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb"] : []), ...(e.features.has("texture-compression-etc2") ? ["etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm"] : []), ...(e.features.has("texture-compression-astc") ? ["astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"] : [])];
  }
  async function eY() {
    return void 0 !== n ? n : n = await (async () => {
      let e = await (0, ek.isWebGPUSupported)(),
        t = (0, eX.isWebGLSupported)();
      if (e && t) {
        let e = await eW(),
          t = ez();
        return e.filter(e => t.includes(e));
      }
      return e ? await eW() : t ? ez() : [];
    })();
  }
  let ej = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8"];
  async function eK() {
    return void 0 !== i ? i : i = [...ej, ...(await eY())];
  }
  var eQ = e.i(86716);
  let eZ = null;
  class eJ {
    constructor() {
      eZ || (eZ = URL.createObjectURL(new Blob(['(function () {\n    \'use strict\';\n\n    function createLevelBuffers(basisTexture, basisTranscoderFormat) {\n      const images = basisTexture.getNumImages();\n      const levels = basisTexture.getNumLevels(0);\n      const success = basisTexture.startTranscoding();\n      if (!success) {\n        throw new Error("startTranscoding failed");\n      }\n      const levelBuffers = [];\n      for (let levelIndex = 0; levelIndex < levels; ++levelIndex) {\n        for (let sliceIndex = 0; sliceIndex < images; ++sliceIndex) {\n          const transcodeSize = basisTexture.getImageTranscodedSizeInBytes(sliceIndex, levelIndex, basisTranscoderFormat);\n          const levelBuffer = new Uint8Array(transcodeSize);\n          const success2 = basisTexture.transcodeImage(levelBuffer, sliceIndex, levelIndex, basisTranscoderFormat, 1, 0);\n          if (!success2) {\n            throw new Error("transcodeImage failed");\n          }\n          levelBuffers.push(levelBuffer);\n        }\n      }\n      return levelBuffers;\n    }\n\n    const gpuFormatToBasisTranscoderFormatMap = {\n      "bc3-rgba-unorm": 3,\n      // cTFBC3_RGBA\n      "bc7-rgba-unorm": 6,\n      // cTFBC7_RGBA,\n      "etc2-rgba8unorm": 1,\n      // cTFETC2_RGBA,\n      "astc-4x4-unorm": 10,\n      // cTFASTC_4x4_RGBA,\n      // Uncompressed\n      rgba8unorm: 13,\n      // cTFRGBA32,\n      rgba4unorm: 16\n      // cTFRGBA4444,\n    };\n    function gpuFormatToBasisTranscoderFormat(transcoderFormat) {\n      const format = gpuFormatToBasisTranscoderFormatMap[transcoderFormat];\n      if (format) {\n        return format;\n      }\n      throw new Error(`Unsupported transcoderFormat: ${transcoderFormat}`);\n    }\n\n    const settings = {\n      jsUrl: "basis/basis_transcoder.js",\n      wasmUrl: "basis/basis_transcoder.wasm"\n    };\n    let basisTranscoderFormat;\n    let basisTranscodedTextureFormat;\n    let basisPromise;\n    async function getBasis() {\n      if (!basisPromise) {\n        const absoluteJsUrl = new URL(settings.jsUrl, location.origin).href;\n        const absoluteWasmUrl = new URL(settings.wasmUrl, location.origin).href;\n        importScripts(absoluteJsUrl);\n        basisPromise = new Promise((resolve) => {\n          BASIS({\n            locateFile: (_file) => absoluteWasmUrl\n          }).then((module) => {\n            module.initializeBasis();\n            resolve(module.BasisFile);\n          });\n        });\n      }\n      return basisPromise;\n    }\n    async function fetchBasisTexture(url, BasisTexture) {\n      const basisResponse = await fetch(url);\n      if (basisResponse.ok) {\n        const basisArrayBuffer = await basisResponse.arrayBuffer();\n        return new BasisTexture(new Uint8Array(basisArrayBuffer));\n      }\n      throw new Error(`Failed to load Basis texture: ${url}`);\n    }\n    const preferredTranscodedFormat = [\n      "bc7-rgba-unorm",\n      "astc-4x4-unorm",\n      "etc2-rgba8unorm",\n      "bc3-rgba-unorm",\n      "rgba8unorm"\n    ];\n    async function load(url) {\n      const BasisTexture = await getBasis();\n      const basisTexture = await fetchBasisTexture(url, BasisTexture);\n      const levelBuffers = createLevelBuffers(basisTexture, basisTranscoderFormat);\n      return {\n        width: basisTexture.getImageWidth(0, 0),\n        height: basisTexture.getImageHeight(0, 0),\n        format: basisTranscodedTextureFormat,\n        resource: levelBuffers,\n        alphaMode: "no-premultiply-alpha"\n      };\n    }\n    async function init(jsUrl, wasmUrl, supportedTextures) {\n      if (jsUrl) settings.jsUrl = jsUrl;\n      if (wasmUrl) settings.wasmUrl = wasmUrl;\n      basisTranscodedTextureFormat = preferredTranscodedFormat.filter((format) => supportedTextures.includes(format))[0];\n      basisTranscoderFormat = gpuFormatToBasisTranscoderFormat(basisTranscodedTextureFormat);\n      await getBasis();\n    }\n    const messageHandlers = {\n      init: async (data) => {\n        const { jsUrl, wasmUrl, supportedTextures } = data;\n        await init(jsUrl, wasmUrl, supportedTextures);\n      },\n      load: async (data) => {\n        try {\n          const textureOptions = await load(data.url);\n          return {\n            type: "load",\n            url: data.url,\n            success: true,\n            textureOptions,\n            transferables: textureOptions.resource?.map((arr) => arr.buffer)\n          };\n        } catch (e) {\n          throw e;\n        }\n      }\n    };\n    self.onmessage = (async (messageEvent) => {\n      const message = messageEvent.data;\n      const response = await messageHandlers[message.type](message);\n      if (response) {\n        self.postMessage(response, response.transferables);\n      }\n    });\n\n})();\n'], {
        type: "application/javascript"
      }))), this.worker = new Worker(eZ);
    }
  }
  eJ.revokeObjectURL = function () {
    eZ && (URL.revokeObjectURL(eZ), eZ = null);
  };
  let e0 = {
      jsUrl: "https://cdn.jsdelivr.net/npm/pixi.js/transcoders/basis/basis_transcoder.js",
      wasmUrl: "https://cdn.jsdelivr.net/npm/pixi.js/transcoders/basis/basis_transcoder.wasm"
    },
    e3 = {};
  function e2(e, t) {
    let r = (a || ((a = new eJ().worker).onmessage = e => {
      let {
        success: t,
        url: r,
        textureOptions: n
      } = e.data;
      t || console.warn("Failed to load Basis texture", r), e3[r](n);
    }, a.postMessage({
      type: "init",
      jsUrl: e0.jsUrl,
      wasmUrl: e0.wasmUrl,
      supportedTextures: t
    })), a);
    return new Promise(t => {
      e3[e] = t, r.postMessage({
        type: "load",
        url: e
      });
    });
  }
  let e1 = {
      extension: {
        type: v.ExtensionType.LoadParser,
        priority: ey.LoaderParserPriority.High,
        name: "loadBasis"
      },
      name: "loadBasis",
      id: "basis",
      test: e => (0, eB.checkExtension)(e, [".basis"]),
      async load(e, t, r) {
        let n = await eK(),
          i = new e$({
            ...(await e2(e, n)),
            resolution: t.data?.resolution || (0, eQ.getResolutionOfUrl)(e)
          });
        return (0, eC.createTexture)(i, r, e);
      },
      unload(e) {
        Array.isArray(e) ? e.forEach(e => e.destroy(!0)) : e.destroy(!0);
      }
    },
    e8 = {
      "bc3-rgba-unorm": 3,
      "bc7-rgba-unorm": 6,
      "etc2-rgba8unorm": 1,
      "astc-4x4-unorm": 10,
      rgba8unorm: 13,
      rgba4unorm: 16
    };
  var e4 = ((p = e4 || {})[p.DXGI_FORMAT_UNKNOWN = 0] = "DXGI_FORMAT_UNKNOWN", p[p.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1] = "DXGI_FORMAT_R32G32B32A32_TYPELESS", p[p.DXGI_FORMAT_R32G32B32A32_FLOAT = 2] = "DXGI_FORMAT_R32G32B32A32_FLOAT", p[p.DXGI_FORMAT_R32G32B32A32_UINT = 3] = "DXGI_FORMAT_R32G32B32A32_UINT", p[p.DXGI_FORMAT_R32G32B32A32_SINT = 4] = "DXGI_FORMAT_R32G32B32A32_SINT", p[p.DXGI_FORMAT_R32G32B32_TYPELESS = 5] = "DXGI_FORMAT_R32G32B32_TYPELESS", p[p.DXGI_FORMAT_R32G32B32_FLOAT = 6] = "DXGI_FORMAT_R32G32B32_FLOAT", p[p.DXGI_FORMAT_R32G32B32_UINT = 7] = "DXGI_FORMAT_R32G32B32_UINT", p[p.DXGI_FORMAT_R32G32B32_SINT = 8] = "DXGI_FORMAT_R32G32B32_SINT", p[p.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9] = "DXGI_FORMAT_R16G16B16A16_TYPELESS", p[p.DXGI_FORMAT_R16G16B16A16_FLOAT = 10] = "DXGI_FORMAT_R16G16B16A16_FLOAT", p[p.DXGI_FORMAT_R16G16B16A16_UNORM = 11] = "DXGI_FORMAT_R16G16B16A16_UNORM", p[p.DXGI_FORMAT_R16G16B16A16_UINT = 12] = "DXGI_FORMAT_R16G16B16A16_UINT", p[p.DXGI_FORMAT_R16G16B16A16_SNORM = 13] = "DXGI_FORMAT_R16G16B16A16_SNORM", p[p.DXGI_FORMAT_R16G16B16A16_SINT = 14] = "DXGI_FORMAT_R16G16B16A16_SINT", p[p.DXGI_FORMAT_R32G32_TYPELESS = 15] = "DXGI_FORMAT_R32G32_TYPELESS", p[p.DXGI_FORMAT_R32G32_FLOAT = 16] = "DXGI_FORMAT_R32G32_FLOAT", p[p.DXGI_FORMAT_R32G32_UINT = 17] = "DXGI_FORMAT_R32G32_UINT", p[p.DXGI_FORMAT_R32G32_SINT = 18] = "DXGI_FORMAT_R32G32_SINT", p[p.DXGI_FORMAT_R32G8X24_TYPELESS = 19] = "DXGI_FORMAT_R32G8X24_TYPELESS", p[p.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20] = "DXGI_FORMAT_D32_FLOAT_S8X24_UINT", p[p.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21] = "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS", p[p.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22] = "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT", p[p.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23] = "DXGI_FORMAT_R10G10B10A2_TYPELESS", p[p.DXGI_FORMAT_R10G10B10A2_UNORM = 24] = "DXGI_FORMAT_R10G10B10A2_UNORM", p[p.DXGI_FORMAT_R10G10B10A2_UINT = 25] = "DXGI_FORMAT_R10G10B10A2_UINT", p[p.DXGI_FORMAT_R11G11B10_FLOAT = 26] = "DXGI_FORMAT_R11G11B10_FLOAT", p[p.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27] = "DXGI_FORMAT_R8G8B8A8_TYPELESS", p[p.DXGI_FORMAT_R8G8B8A8_UNORM = 28] = "DXGI_FORMAT_R8G8B8A8_UNORM", p[p.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29] = "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB", p[p.DXGI_FORMAT_R8G8B8A8_UINT = 30] = "DXGI_FORMAT_R8G8B8A8_UINT", p[p.DXGI_FORMAT_R8G8B8A8_SNORM = 31] = "DXGI_FORMAT_R8G8B8A8_SNORM", p[p.DXGI_FORMAT_R8G8B8A8_SINT = 32] = "DXGI_FORMAT_R8G8B8A8_SINT", p[p.DXGI_FORMAT_R16G16_TYPELESS = 33] = "DXGI_FORMAT_R16G16_TYPELESS", p[p.DXGI_FORMAT_R16G16_FLOAT = 34] = "DXGI_FORMAT_R16G16_FLOAT", p[p.DXGI_FORMAT_R16G16_UNORM = 35] = "DXGI_FORMAT_R16G16_UNORM", p[p.DXGI_FORMAT_R16G16_UINT = 36] = "DXGI_FORMAT_R16G16_UINT", p[p.DXGI_FORMAT_R16G16_SNORM = 37] = "DXGI_FORMAT_R16G16_SNORM", p[p.DXGI_FORMAT_R16G16_SINT = 38] = "DXGI_FORMAT_R16G16_SINT", p[p.DXGI_FORMAT_R32_TYPELESS = 39] = "DXGI_FORMAT_R32_TYPELESS", p[p.DXGI_FORMAT_D32_FLOAT = 40] = "DXGI_FORMAT_D32_FLOAT", p[p.DXGI_FORMAT_R32_FLOAT = 41] = "DXGI_FORMAT_R32_FLOAT", p[p.DXGI_FORMAT_R32_UINT = 42] = "DXGI_FORMAT_R32_UINT", p[p.DXGI_FORMAT_R32_SINT = 43] = "DXGI_FORMAT_R32_SINT", p[p.DXGI_FORMAT_R24G8_TYPELESS = 44] = "DXGI_FORMAT_R24G8_TYPELESS", p[p.DXGI_FORMAT_D24_UNORM_S8_UINT = 45] = "DXGI_FORMAT_D24_UNORM_S8_UINT", p[p.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46] = "DXGI_FORMAT_R24_UNORM_X8_TYPELESS", p[p.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47] = "DXGI_FORMAT_X24_TYPELESS_G8_UINT", p[p.DXGI_FORMAT_R8G8_TYPELESS = 48] = "DXGI_FORMAT_R8G8_TYPELESS", p[p.DXGI_FORMAT_R8G8_UNORM = 49] = "DXGI_FORMAT_R8G8_UNORM", p[p.DXGI_FORMAT_R8G8_UINT = 50] = "DXGI_FORMAT_R8G8_UINT", p[p.DXGI_FORMAT_R8G8_SNORM = 51] = "DXGI_FORMAT_R8G8_SNORM", p[p.DXGI_FORMAT_R8G8_SINT = 52] = "DXGI_FORMAT_R8G8_SINT", p[p.DXGI_FORMAT_R16_TYPELESS = 53] = "DXGI_FORMAT_R16_TYPELESS", p[p.DXGI_FORMAT_R16_FLOAT = 54] = "DXGI_FORMAT_R16_FLOAT", p[p.DXGI_FORMAT_D16_UNORM = 55] = "DXGI_FORMAT_D16_UNORM", p[p.DXGI_FORMAT_R16_UNORM = 56] = "DXGI_FORMAT_R16_UNORM", p[p.DXGI_FORMAT_R16_UINT = 57] = "DXGI_FORMAT_R16_UINT", p[p.DXGI_FORMAT_R16_SNORM = 58] = "DXGI_FORMAT_R16_SNORM", p[p.DXGI_FORMAT_R16_SINT = 59] = "DXGI_FORMAT_R16_SINT", p[p.DXGI_FORMAT_R8_TYPELESS = 60] = "DXGI_FORMAT_R8_TYPELESS", p[p.DXGI_FORMAT_R8_UNORM = 61] = "DXGI_FORMAT_R8_UNORM", p[p.DXGI_FORMAT_R8_UINT = 62] = "DXGI_FORMAT_R8_UINT", p[p.DXGI_FORMAT_R8_SNORM = 63] = "DXGI_FORMAT_R8_SNORM", p[p.DXGI_FORMAT_R8_SINT = 64] = "DXGI_FORMAT_R8_SINT", p[p.DXGI_FORMAT_A8_UNORM = 65] = "DXGI_FORMAT_A8_UNORM", p[p.DXGI_FORMAT_R1_UNORM = 66] = "DXGI_FORMAT_R1_UNORM", p[p.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67] = "DXGI_FORMAT_R9G9B9E5_SHAREDEXP", p[p.DXGI_FORMAT_R8G8_B8G8_UNORM = 68] = "DXGI_FORMAT_R8G8_B8G8_UNORM", p[p.DXGI_FORMAT_G8R8_G8B8_UNORM = 69] = "DXGI_FORMAT_G8R8_G8B8_UNORM", p[p.DXGI_FORMAT_BC1_TYPELESS = 70] = "DXGI_FORMAT_BC1_TYPELESS", p[p.DXGI_FORMAT_BC1_UNORM = 71] = "DXGI_FORMAT_BC1_UNORM", p[p.DXGI_FORMAT_BC1_UNORM_SRGB = 72] = "DXGI_FORMAT_BC1_UNORM_SRGB", p[p.DXGI_FORMAT_BC2_TYPELESS = 73] = "DXGI_FORMAT_BC2_TYPELESS", p[p.DXGI_FORMAT_BC2_UNORM = 74] = "DXGI_FORMAT_BC2_UNORM", p[p.DXGI_FORMAT_BC2_UNORM_SRGB = 75] = "DXGI_FORMAT_BC2_UNORM_SRGB", p[p.DXGI_FORMAT_BC3_TYPELESS = 76] = "DXGI_FORMAT_BC3_TYPELESS", p[p.DXGI_FORMAT_BC3_UNORM = 77] = "DXGI_FORMAT_BC3_UNORM", p[p.DXGI_FORMAT_BC3_UNORM_SRGB = 78] = "DXGI_FORMAT_BC3_UNORM_SRGB", p[p.DXGI_FORMAT_BC4_TYPELESS = 79] = "DXGI_FORMAT_BC4_TYPELESS", p[p.DXGI_FORMAT_BC4_UNORM = 80] = "DXGI_FORMAT_BC4_UNORM", p[p.DXGI_FORMAT_BC4_SNORM = 81] = "DXGI_FORMAT_BC4_SNORM", p[p.DXGI_FORMAT_BC5_TYPELESS = 82] = "DXGI_FORMAT_BC5_TYPELESS", p[p.DXGI_FORMAT_BC5_UNORM = 83] = "DXGI_FORMAT_BC5_UNORM", p[p.DXGI_FORMAT_BC5_SNORM = 84] = "DXGI_FORMAT_BC5_SNORM", p[p.DXGI_FORMAT_B5G6R5_UNORM = 85] = "DXGI_FORMAT_B5G6R5_UNORM", p[p.DXGI_FORMAT_B5G5R5A1_UNORM = 86] = "DXGI_FORMAT_B5G5R5A1_UNORM", p[p.DXGI_FORMAT_B8G8R8A8_UNORM = 87] = "DXGI_FORMAT_B8G8R8A8_UNORM", p[p.DXGI_FORMAT_B8G8R8X8_UNORM = 88] = "DXGI_FORMAT_B8G8R8X8_UNORM", p[p.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89] = "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM", p[p.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90] = "DXGI_FORMAT_B8G8R8A8_TYPELESS", p[p.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91] = "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB", p[p.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92] = "DXGI_FORMAT_B8G8R8X8_TYPELESS", p[p.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93] = "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB", p[p.DXGI_FORMAT_BC6H_TYPELESS = 94] = "DXGI_FORMAT_BC6H_TYPELESS", p[p.DXGI_FORMAT_BC6H_UF16 = 95] = "DXGI_FORMAT_BC6H_UF16", p[p.DXGI_FORMAT_BC6H_SF16 = 96] = "DXGI_FORMAT_BC6H_SF16", p[p.DXGI_FORMAT_BC7_TYPELESS = 97] = "DXGI_FORMAT_BC7_TYPELESS", p[p.DXGI_FORMAT_BC7_UNORM = 98] = "DXGI_FORMAT_BC7_UNORM", p[p.DXGI_FORMAT_BC7_UNORM_SRGB = 99] = "DXGI_FORMAT_BC7_UNORM_SRGB", p[p.DXGI_FORMAT_AYUV = 100] = "DXGI_FORMAT_AYUV", p[p.DXGI_FORMAT_Y410 = 101] = "DXGI_FORMAT_Y410", p[p.DXGI_FORMAT_Y416 = 102] = "DXGI_FORMAT_Y416", p[p.DXGI_FORMAT_NV12 = 103] = "DXGI_FORMAT_NV12", p[p.DXGI_FORMAT_P010 = 104] = "DXGI_FORMAT_P010", p[p.DXGI_FORMAT_P016 = 105] = "DXGI_FORMAT_P016", p[p.DXGI_FORMAT_420_OPAQUE = 106] = "DXGI_FORMAT_420_OPAQUE", p[p.DXGI_FORMAT_YUY2 = 107] = "DXGI_FORMAT_YUY2", p[p.DXGI_FORMAT_Y210 = 108] = "DXGI_FORMAT_Y210", p[p.DXGI_FORMAT_Y216 = 109] = "DXGI_FORMAT_Y216", p[p.DXGI_FORMAT_NV11 = 110] = "DXGI_FORMAT_NV11", p[p.DXGI_FORMAT_AI44 = 111] = "DXGI_FORMAT_AI44", p[p.DXGI_FORMAT_IA44 = 112] = "DXGI_FORMAT_IA44", p[p.DXGI_FORMAT_P8 = 113] = "DXGI_FORMAT_P8", p[p.DXGI_FORMAT_A8P8 = 114] = "DXGI_FORMAT_A8P8", p[p.DXGI_FORMAT_B4G4R4A4_UNORM = 115] = "DXGI_FORMAT_B4G4R4A4_UNORM", p[p.DXGI_FORMAT_P208 = 116] = "DXGI_FORMAT_P208", p[p.DXGI_FORMAT_V208 = 117] = "DXGI_FORMAT_V208", p[p.DXGI_FORMAT_V408 = 118] = "DXGI_FORMAT_V408", p[p.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE", p[p.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE", p[p.DXGI_FORMAT_FORCE_UINT = 121] = "DXGI_FORMAT_FORCE_UINT", p),
    e6 = ((f = e6 || {})[f.DDS_DIMENSION_TEXTURE1D = 2] = "DDS_DIMENSION_TEXTURE1D", f[f.DDS_DIMENSION_TEXTURE2D = 3] = "DDS_DIMENSION_TEXTURE2D", f[f.DDS_DIMENSION_TEXTURE3D = 6] = "DDS_DIMENSION_TEXTURE3D", f);
  function e5(e) {
    return e.charCodeAt(0) + (e.charCodeAt(1) << 8) + (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24);
  }
  var e7 = ((m = e7 || {})[m.UNKNOWN = 0] = "UNKNOWN", m[m.R8G8B8 = 20] = "R8G8B8", m[m.A8R8G8B8 = 21] = "A8R8G8B8", m[m.X8R8G8B8 = 22] = "X8R8G8B8", m[m.R5G6B5 = 23] = "R5G6B5", m[m.X1R5G5B5 = 24] = "X1R5G5B5", m[m.A1R5G5B5 = 25] = "A1R5G5B5", m[m.A4R4G4B4 = 26] = "A4R4G4B4", m[m.R3G3B2 = 27] = "R3G3B2", m[m.A8 = 28] = "A8", m[m.A8R3G3B2 = 29] = "A8R3G3B2", m[m.X4R4G4B4 = 30] = "X4R4G4B4", m[m.A2B10G10R10 = 31] = "A2B10G10R10", m[m.A8B8G8R8 = 32] = "A8B8G8R8", m[m.X8B8G8R8 = 33] = "X8B8G8R8", m[m.G16R16 = 34] = "G16R16", m[m.A2R10G10B10 = 35] = "A2R10G10B10", m[m.A16B16G16R16 = 36] = "A16B16G16R16", m[m.A8P8 = 40] = "A8P8", m[m.P8 = 41] = "P8", m[m.L8 = 50] = "L8", m[m.A8L8 = 51] = "A8L8", m[m.A4L4 = 52] = "A4L4", m[m.V8U8 = 60] = "V8U8", m[m.L6V5U5 = 61] = "L6V5U5", m[m.X8L8V8U8 = 62] = "X8L8V8U8", m[m.Q8W8V8U8 = 63] = "Q8W8V8U8", m[m.V16U16 = 64] = "V16U16", m[m.A2W10V10U10 = 67] = "A2W10V10U10", m[m.Q16W16V16U16 = 110] = "Q16W16V16U16", m[m.R16F = 111] = "R16F", m[m.G16R16F = 112] = "G16R16F", m[m.A16B16G16R16F = 113] = "A16B16G16R16F", m[m.R32F = 114] = "R32F", m[m.G32R32F = 115] = "G32R32F", m[m.A32B32G32R32F = 116] = "A32B32G32R32F", m[m.UYVY = e5("UYVY")] = "UYVY", m[m.R8G8_B8G8 = e5("RGBG")] = "R8G8_B8G8", m[m.YUY2 = e5("YUY2")] = "YUY2", m[m.D3DFMT_G8R8_G8B8 = e5("GRGB")] = "D3DFMT_G8R8_G8B8", m[m.DXT1 = e5("DXT1")] = "DXT1", m[m.DXT2 = e5("DXT2")] = "DXT2", m[m.DXT3 = e5("DXT3")] = "DXT3", m[m.DXT4 = e5("DXT4")] = "DXT4", m[m.DXT5 = e5("DXT5")] = "DXT5", m[m.ATI1 = e5("ATI1")] = "ATI1", m[m.AT1N = e5("AT1N")] = "AT1N", m[m.ATI2 = e5("ATI2")] = "ATI2", m[m.AT2N = e5("AT2N")] = "AT2N", m[m.BC4U = e5("BC4U")] = "BC4U", m[m.BC4S = e5("BC4S")] = "BC4S", m[m.BC5U = e5("BC5U")] = "BC5U", m[m.BC5S = e5("BC5S")] = "BC5S", m[m.DX10 = e5("DX10")] = "DX10", m);
  let e9 = {
      [e7.DXT1]: "bc1-rgba-unorm",
      [e7.DXT2]: "bc2-rgba-unorm",
      [e7.DXT3]: "bc2-rgba-unorm",
      [e7.DXT4]: "bc3-rgba-unorm",
      [e7.DXT5]: "bc3-rgba-unorm",
      [e7.ATI1]: "bc4-r-unorm",
      [e7.BC4U]: "bc4-r-unorm",
      [e7.BC4S]: "bc4-r-snorm",
      [e7.ATI2]: "bc5-rg-unorm",
      [e7.BC5U]: "bc5-rg-unorm",
      [e7.BC5S]: "bc5-rg-snorm",
      36: "rgba16uint",
      110: "rgba16sint",
      111: "r16float",
      112: "rg16float",
      113: "rgba16float",
      114: "r32float",
      115: "rg32float",
      116: "rgba32float"
    },
    te = {
      70: "bc1-rgba-unorm",
      71: "bc1-rgba-unorm",
      72: "bc1-rgba-unorm-srgb",
      73: "bc2-rgba-unorm",
      74: "bc2-rgba-unorm",
      75: "bc2-rgba-unorm-srgb",
      76: "bc3-rgba-unorm",
      77: "bc3-rgba-unorm",
      78: "bc3-rgba-unorm-srgb",
      79: "bc4-r-unorm",
      80: "bc4-r-unorm",
      81: "bc4-r-snorm",
      82: "bc5-rg-unorm",
      83: "bc5-rg-unorm",
      84: "bc5-rg-snorm",
      94: "bc6h-rgb-ufloat",
      95: "bc6h-rgb-ufloat",
      96: "bc6h-rgb-float",
      97: "bc7-rgba-unorm",
      98: "bc7-rgba-unorm",
      99: "bc7-rgba-unorm-srgb",
      28: "rgba8unorm",
      29: "rgba8unorm-srgb",
      87: "bgra8unorm",
      91: "bgra8unorm-srgb",
      41: "r32float",
      49: "rg8unorm",
      56: "r16uint",
      61: "r8unorm",
      24: "rgb10a2unorm",
      11: "rgba16uint",
      13: "rgba16sint",
      10: "rgba16float",
      54: "r16float",
      34: "rg16float",
      16: "rg32float",
      2: "rgba32float"
    },
    tt = {
      MAGIC_VALUE: 0x20534444,
      MAGIC_SIZE: 4,
      HEADER_SIZE: 124,
      HEADER_DX10_SIZE: 20,
      PIXEL_FORMAT_FLAGS: {
        ALPHAPIXELS: 1,
        ALPHA: 2,
        FOURCC: 4,
        RGB: 64,
        RGBA: 65,
        YUV: 512,
        LUMINANCE: 131072,
        LUMINANCEA: 131073
      },
      RESOURCE_MISC_TEXTURECUBE: 4,
      HEADER_FIELDS: {
        MAGIC: 0,
        SIZE: 1,
        FLAGS: 2,
        HEIGHT: 3,
        WIDTH: 4,
        MIPMAP_COUNT: 7,
        PIXEL_FORMAT: 19,
        PF_FLAGS: 20,
        FOURCC: 21,
        RGB_BITCOUNT: 22,
        R_BIT_MASK: 23,
        G_BIT_MASK: 24,
        B_BIT_MASK: 25,
        A_BIT_MASK: 26
      },
      HEADER_DX10_FIELDS: {
        DXGI_FORMAT: 0,
        RESOURCE_DIMENSION: 1,
        MISC_FLAG: 2,
        ARRAY_SIZE: 3,
        MISC_FLAGS2: 4
      },
      DXGI_FORMAT: e4,
      D3D10_RESOURCE_DIMENSION: e6,
      D3DFMT: e7
    },
    tr = {
      "bc1-rgba-unorm": 8,
      "bc1-rgba-unorm-srgb": 8,
      "bc2-rgba-unorm": 16,
      "bc2-rgba-unorm-srgb": 16,
      "bc3-rgba-unorm": 16,
      "bc3-rgba-unorm-srgb": 16,
      "bc4-r-unorm": 8,
      "bc4-r-snorm": 8,
      "bc5-rg-unorm": 16,
      "bc5-rg-snorm": 16,
      "bc6h-rgb-ufloat": 16,
      "bc6h-rgb-float": 16,
      "bc7-rgba-unorm": 16,
      "bc7-rgba-unorm-srgb": 16
    };
  function tn(e, t) {
    let {
      format: r,
      fourCC: n,
      width: i,
      height: a,
      dataOffset: o,
      mipmapCount: s
    } = function (e) {
      let t = new Uint32Array(e, 0, tt.HEADER_SIZE / Uint32Array.BYTES_PER_ELEMENT);
      if (t[tt.HEADER_FIELDS.MAGIC] !== tt.MAGIC_VALUE) throw Error("Invalid magic number in DDS header");
      let r = t[tt.HEADER_FIELDS.HEIGHT],
        n = t[tt.HEADER_FIELDS.WIDTH],
        i = Math.max(1, t[tt.HEADER_FIELDS.MIPMAP_COUNT]),
        a = t[tt.HEADER_FIELDS.PF_FLAGS],
        o = t[tt.HEADER_FIELDS.FOURCC],
        s = function (e, t, r, n) {
          if (t & tt.PIXEL_FORMAT_FLAGS.FOURCC) {
            if (r === tt.D3DFMT.DX10) {
              let e = new Uint32Array(n, tt.MAGIC_SIZE + tt.HEADER_SIZE, tt.HEADER_DX10_SIZE / Uint32Array.BYTES_PER_ELEMENT);
              if (e[tt.HEADER_DX10_FIELDS.MISC_FLAG] === tt.RESOURCE_MISC_TEXTURECUBE) throw Error("DDSParser does not support cubemap textures");
              if (e[tt.HEADER_DX10_FIELDS.RESOURCE_DIMENSION] === tt.D3D10_RESOURCE_DIMENSION.DDS_DIMENSION_TEXTURE3D) throw Error("DDSParser does not supported 3D texture data");
              let t = e[tt.HEADER_DX10_FIELDS.DXGI_FORMAT];
              if (t in te) return te[t];
              throw Error(`DDSParser cannot parse texture data with DXGI format ${t}`);
            }
            if (r in e9) return e9[r];
            throw Error(`DDSParser cannot parse texture data with fourCC format ${r}`);
          }
          if (t & tt.PIXEL_FORMAT_FLAGS.RGB || t & tt.PIXEL_FORMAT_FLAGS.RGBA) return function (e) {
            let t = e[tt.HEADER_FIELDS.RGB_BITCOUNT],
              r = e[tt.HEADER_FIELDS.R_BIT_MASK],
              n = e[tt.HEADER_FIELDS.G_BIT_MASK],
              i = e[tt.HEADER_FIELDS.B_BIT_MASK],
              a = e[tt.HEADER_FIELDS.A_BIT_MASK];
            switch (t) {
              case 32:
                if (255 === r && 65280 === n && 0xff0000 === i && 0xff000000 === a) return te[tt.DXGI_FORMAT.DXGI_FORMAT_R8G8B8A8_UNORM];
                if (0xff0000 === r && 65280 === n && 255 === i && 0xff000000 === a) return te[tt.DXGI_FORMAT.DXGI_FORMAT_B8G8R8A8_UNORM];
                if (0x3ff00000 === r && 1047552 === n && 1023 === i && 0xc0000000 === a) return te[tt.DXGI_FORMAT.DXGI_FORMAT_R10G10B10A2_UNORM];
                if (65535 === r && 0xffff0000 === n && 0 === i && 0 === a) return te[tt.DXGI_FORMAT.DXGI_FORMAT_R16G16_UNORM];
                if (0xffffffff === r && 0 === n && 0 === i && 0 === a) return te[tt.DXGI_FORMAT.DXGI_FORMAT_R32_FLOAT];
                break;
              case 24:
                break;
              case 16:
                if (31744 === r && 992 === n && 31 === i && 32768 === a) return te[tt.DXGI_FORMAT.DXGI_FORMAT_B5G5R5A1_UNORM];
                if (63488 === r && 2016 === n && 31 === i && 0 === a) return te[tt.DXGI_FORMAT.DXGI_FORMAT_B5G6R5_UNORM];
                if (3840 === r && 240 === n && 15 === i && 61440 === a) return te[tt.DXGI_FORMAT.DXGI_FORMAT_B4G4R4A4_UNORM];
                if (255 === r && 0 === n && 0 === i && 65280 === a) return te[tt.DXGI_FORMAT.DXGI_FORMAT_R8G8_UNORM];
                if (65535 === r && 0 === n && 0 === i && 0 === a) return te[tt.DXGI_FORMAT.DXGI_FORMAT_R16_UNORM];
                break;
              case 8:
                if (255 === r && 0 === n && 0 === i && 0 === a) return te[tt.DXGI_FORMAT.DXGI_FORMAT_R8_UNORM];
            }
            throw Error(`DDSParser does not support uncompressed texture with configuration:
                bitCount = ${t}, rBitMask = ${r}, gBitMask = ${n}, aBitMask = ${a}`);
          }(e);
          if (t & tt.PIXEL_FORMAT_FLAGS.YUV) throw Error("DDSParser does not supported YUV uncompressed texture data.");
          if (t & tt.PIXEL_FORMAT_FLAGS.LUMINANCE || t & tt.PIXEL_FORMAT_FLAGS.LUMINANCEA) throw Error("DDSParser does not support single-channel (lumninance) texture data!");
          if (t & tt.PIXEL_FORMAT_FLAGS.ALPHA || t & tt.PIXEL_FORMAT_FLAGS.ALPHAPIXELS) throw Error("DDSParser does not support single-channel (alpha) texture data!");
          throw Error("DDSParser failed to load a texture file due to an unknown reason!");
        }(t, a, o, e),
        l = tt.MAGIC_SIZE + tt.HEADER_SIZE + (o === tt.D3DFMT.DX10 ? tt.HEADER_DX10_SIZE : 0);
      return {
        format: s,
        fourCC: o,
        width: n,
        height: r,
        dataOffset: l,
        mipmapCount: i
      };
    }(e);
    if (!t.includes(r)) throw Error(`Unsupported texture format: ${n} ${r}, supported: ${t}`);
    if (s <= 1) return {
      format: r,
      width: i,
      height: a,
      resource: [new Uint8Array(e, o)],
      alphaMode: "no-premultiply-alpha"
    };
    let l = function (e, t, r, n, i, a) {
      let o = [],
        s = tr[e],
        l = t,
        u = r,
        c = n;
      for (let e = 0; e < i; ++e) {
        let e = 4 * Math.ceil(Math.max(4, l) / 4),
          t = 4 * Math.ceil(Math.max(4, u) / 4),
          r = s ? e / 4 * t / 4 * s : l * u * 4,
          n = new Uint8Array(a, c, r);
        o.push(n), c += r, l = Math.max(l >> 1, 1), u = Math.max(u >> 1, 1);
      }
      return o;
    }(r, i, a, o, s, e);
    return {
      format: r,
      width: i,
      height: a,
      resource: l,
      alphaMode: "no-premultiply-alpha"
    };
  }
  let ti = {
    extension: {
      type: v.ExtensionType.LoadParser,
      priority: ey.LoaderParserPriority.High,
      name: "loadDDS"
    },
    name: "loadDDS",
    id: "dds",
    test: e => (0, eB.checkExtension)(e, [".dds"]),
    async load(e, t, r) {
      let n = await eK(),
        i = await fetch(e),
        a = new e$({
          ...tn(await i.arrayBuffer(), n),
          resolution: t.data?.resolution || (0, eQ.getResolutionOfUrl)(e)
        });
      return (0, eC.createTexture)(a, r, e);
    },
    unload(e) {
      Array.isArray(e) ? e.forEach(e => e.destroy(!0)) : e.destroy(!0);
    }
  };
  var ta = ((g = ta || {})[g.RGBA8_SNORM = 36759] = "RGBA8_SNORM", g[g.RGBA = 6408] = "RGBA", g[g.RGBA8UI = 36220] = "RGBA8UI", g[g.SRGB8_ALPHA8 = 35907] = "SRGB8_ALPHA8", g[g.RGBA8I = 36238] = "RGBA8I", g[g.RGBA8 = 32856] = "RGBA8", g[g.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", g[g.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", g[g.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", g[g.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", g[g.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", g[g.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", g[g.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", g[g.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", g[g.COMPRESSED_RED_RGTC1_EXT = 36283] = "COMPRESSED_RED_RGTC1_EXT", g[g.COMPRESSED_SIGNED_RED_RGTC1_EXT = 36284] = "COMPRESSED_SIGNED_RED_RGTC1_EXT", g[g.COMPRESSED_RED_GREEN_RGTC2_EXT = 36285] = "COMPRESSED_RED_GREEN_RGTC2_EXT", g[g.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT = 36286] = "COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT", g[g.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", g[g.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", g[g.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", g[g.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", g[g.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", g[g.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", g[g.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", g[g.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", g[g.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", g[g.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", g[g.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR", g[g.COMPRESSED_RGBA_ASTC_5x4_KHR = 37809] = "COMPRESSED_RGBA_ASTC_5x4_KHR", g[g.COMPRESSED_RGBA_ASTC_5x5_KHR = 37810] = "COMPRESSED_RGBA_ASTC_5x5_KHR", g[g.COMPRESSED_RGBA_ASTC_6x5_KHR = 37811] = "COMPRESSED_RGBA_ASTC_6x5_KHR", g[g.COMPRESSED_RGBA_ASTC_6x6_KHR = 37812] = "COMPRESSED_RGBA_ASTC_6x6_KHR", g[g.COMPRESSED_RGBA_ASTC_8x5_KHR = 37813] = "COMPRESSED_RGBA_ASTC_8x5_KHR", g[g.COMPRESSED_RGBA_ASTC_8x6_KHR = 37814] = "COMPRESSED_RGBA_ASTC_8x6_KHR", g[g.COMPRESSED_RGBA_ASTC_8x8_KHR = 37815] = "COMPRESSED_RGBA_ASTC_8x8_KHR", g[g.COMPRESSED_RGBA_ASTC_10x5_KHR = 37816] = "COMPRESSED_RGBA_ASTC_10x5_KHR", g[g.COMPRESSED_RGBA_ASTC_10x6_KHR = 37817] = "COMPRESSED_RGBA_ASTC_10x6_KHR", g[g.COMPRESSED_RGBA_ASTC_10x8_KHR = 37818] = "COMPRESSED_RGBA_ASTC_10x8_KHR", g[g.COMPRESSED_RGBA_ASTC_10x10_KHR = 37819] = "COMPRESSED_RGBA_ASTC_10x10_KHR", g[g.COMPRESSED_RGBA_ASTC_12x10_KHR = 37820] = "COMPRESSED_RGBA_ASTC_12x10_KHR", g[g.COMPRESSED_RGBA_ASTC_12x12_KHR = 37821] = "COMPRESSED_RGBA_ASTC_12x12_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840] = "COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR", g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR", g[g.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", g[g.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = 36493] = "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT", g[g.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT = 36494] = "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", g[g.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT = 36495] = "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", g),
    to = ((b = to || {})[b.RGBA = 6408] = "RGBA", b[b.RGB = 6407] = "RGB", b[b.RG = 33319] = "RG", b[b.RED = 6403] = "RED", b[b.RGBA_INTEGER = 36249] = "RGBA_INTEGER", b[b.RGB_INTEGER = 36248] = "RGB_INTEGER", b[b.RG_INTEGER = 33320] = "RG_INTEGER", b[b.RED_INTEGER = 36244] = "RED_INTEGER", b[b.ALPHA = 6406] = "ALPHA", b[b.LUMINANCE = 6409] = "LUMINANCE", b[b.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", b[b.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", b[b.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", b),
    ts = ((_ = ts || {})[_.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", _[_.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", _[_.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", _[_.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", _[_.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", _[_.UNSIGNED_INT = 5125] = "UNSIGNED_INT", _[_.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", _[_.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", _[_.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", _[_.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", _[_.BYTE = 5120] = "BYTE", _[_.SHORT = 5122] = "SHORT", _[_.INT = 5124] = "INT", _[_.FLOAT = 5126] = "FLOAT", _[_.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", _[_.HALF_FLOAT = 36193] = "HALF_FLOAT", _);
  let tl = {
    FILE_HEADER_SIZE: 64,
    FILE_IDENTIFIER: [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
    FORMATS_TO_COMPONENTS: {
      6408: 4,
      6407: 3,
      33319: 2,
      6403: 1,
      6409: 1,
      6410: 2,
      6406: 1
    },
    INTERNAL_FORMAT_TO_BYTES_PER_PIXEL: {
      33776: .5,
      33777: .5,
      33778: 1,
      33779: 1,
      35916: .5,
      35917: .5,
      35918: 1,
      35919: 1,
      36283: .5,
      36284: .5,
      36285: 1,
      36286: 1,
      37488: .5,
      37489: .5,
      37490: 1,
      37491: 1,
      37492: .5,
      37496: 1,
      37493: .5,
      37497: 1,
      37494: .5,
      37495: .5,
      37808: 1,
      37840: 1,
      37809: .8,
      37841: .8,
      37810: .64,
      37842: .64,
      37811: .53375,
      37843: .53375,
      37812: .445,
      37844: .445,
      37813: .4,
      37845: .4,
      37814: .33375,
      37846: .33375,
      37815: .25,
      37847: .25,
      37816: .32,
      37848: .32,
      37817: .26625,
      37849: .26625,
      37818: .2,
      37850: .2,
      37819: .16,
      37851: .16,
      37820: .13375,
      37852: .13375,
      37821: .11125,
      37853: .11125,
      36492: 1,
      36493: 1,
      36494: 1,
      36495: 1
    },
    INTERNAL_FORMAT_TO_TEXTURE_FORMATS: {
      33776: "bc1-rgba-unorm",
      33777: "bc1-rgba-unorm",
      33778: "bc2-rgba-unorm",
      33779: "bc3-rgba-unorm",
      35916: "bc1-rgba-unorm-srgb",
      35917: "bc1-rgba-unorm-srgb",
      35918: "bc2-rgba-unorm-srgb",
      35919: "bc3-rgba-unorm-srgb",
      36283: "bc4-r-unorm",
      36284: "bc4-r-snorm",
      36285: "bc5-rg-unorm",
      36286: "bc5-rg-snorm",
      37488: "eac-r11unorm",
      37490: "eac-rg11snorm",
      37492: "etc2-rgb8unorm",
      37496: "etc2-rgba8unorm",
      37493: "etc2-rgb8unorm-srgb",
      37497: "etc2-rgba8unorm-srgb",
      37494: "etc2-rgb8a1unorm",
      37495: "etc2-rgb8a1unorm-srgb",
      37808: "astc-4x4-unorm",
      37840: "astc-4x4-unorm-srgb",
      37809: "astc-5x4-unorm",
      37841: "astc-5x4-unorm-srgb",
      37810: "astc-5x5-unorm",
      37842: "astc-5x5-unorm-srgb",
      37811: "astc-6x5-unorm",
      37843: "astc-6x5-unorm-srgb",
      37812: "astc-6x6-unorm",
      37844: "astc-6x6-unorm-srgb",
      37813: "astc-8x5-unorm",
      37845: "astc-8x5-unorm-srgb",
      37814: "astc-8x6-unorm",
      37846: "astc-8x6-unorm-srgb",
      37815: "astc-8x8-unorm",
      37847: "astc-8x8-unorm-srgb",
      37816: "astc-10x5-unorm",
      37848: "astc-10x5-unorm-srgb",
      37817: "astc-10x6-unorm",
      37849: "astc-10x6-unorm-srgb",
      37818: "astc-10x8-unorm",
      37850: "astc-10x8-unorm-srgb",
      37819: "astc-10x10-unorm",
      37851: "astc-10x10-unorm-srgb",
      37820: "astc-12x10-unorm",
      37852: "astc-12x10-unorm-srgb",
      37821: "astc-12x12-unorm",
      37853: "astc-12x12-unorm-srgb",
      36492: "bc7-rgba-unorm",
      36493: "bc7-rgba-unorm-srgb",
      36494: "bc6h-rgb-float",
      36495: "bc6h-rgb-ufloat",
      35907: "rgba8unorm-srgb",
      36759: "rgba8snorm",
      36220: "rgba8uint",
      36238: "rgba8sint",
      6408: "rgba8unorm"
    },
    FIELDS: {
      FILE_IDENTIFIER: 0,
      ENDIANNESS: 12,
      GL_TYPE: 16,
      GL_TYPE_SIZE: 20,
      GL_FORMAT: 24,
      GL_INTERNAL_FORMAT: 28,
      GL_BASE_INTERNAL_FORMAT: 32,
      PIXEL_WIDTH: 36,
      PIXEL_HEIGHT: 40,
      PIXEL_DEPTH: 44,
      NUMBER_OF_ARRAY_ELEMENTS: 48,
      NUMBER_OF_FACES: 52,
      NUMBER_OF_MIPMAP_LEVELS: 56,
      BYTES_OF_KEY_VALUE_DATA: 60
    },
    TYPES_TO_BYTES_PER_COMPONENT: {
      5121: 1,
      5123: 2,
      5124: 4,
      5125: 4,
      5126: 4,
      36193: 8
    },
    TYPES_TO_BYTES_PER_PIXEL: {
      32819: 2,
      32820: 2,
      33635: 2
    },
    ENDIANNESS: 0x4030201
  };
  function tu(e, t) {
    let r = new DataView(e);
    if (!function (e) {
      for (let t = 0; t < tl.FILE_IDENTIFIER.length; t++) if (e.getUint8(t) !== tl.FILE_IDENTIFIER[t]) return !1;
      return !0;
    }(r)) throw Error("Invalid KTX identifier in header");
    let {
        littleEndian: n,
        glType: i,
        glFormat: a,
        glInternalFormat: o,
        pixelWidth: s,
        pixelHeight: l,
        numberOfMipmapLevels: u,
        offset: c
      } = function (e) {
        let t = e.getUint32(tl.FIELDS.ENDIANNESS, !0) === tl.ENDIANNESS,
          r = e.getUint32(tl.FIELDS.GL_TYPE, t),
          n = e.getUint32(tl.FIELDS.GL_FORMAT, t),
          i = e.getUint32(tl.FIELDS.GL_INTERNAL_FORMAT, t),
          a = e.getUint32(tl.FIELDS.PIXEL_WIDTH, t),
          o = e.getUint32(tl.FIELDS.PIXEL_HEIGHT, t) || 1,
          s = e.getUint32(tl.FIELDS.PIXEL_DEPTH, t) || 1,
          l = e.getUint32(tl.FIELDS.NUMBER_OF_ARRAY_ELEMENTS, t) || 1,
          u = e.getUint32(tl.FIELDS.NUMBER_OF_FACES, t),
          c = e.getUint32(tl.FIELDS.NUMBER_OF_MIPMAP_LEVELS, t),
          d = e.getUint32(tl.FIELDS.BYTES_OF_KEY_VALUE_DATA, t);
        if (0 === o || 1 !== s) throw Error("Only 2D textures are supported");
        if (1 !== u) throw Error("CubeTextures are not supported by KTXLoader yet!");
        if (1 !== l) throw Error("WebGL does not support array textures");
        return {
          littleEndian: t,
          glType: r,
          glFormat: n,
          glInternalFormat: i,
          pixelWidth: a,
          pixelHeight: o,
          numberOfMipmapLevels: c,
          offset: tl.FILE_HEADER_SIZE + d
        };
      }(r),
      d = tl.INTERNAL_FORMAT_TO_TEXTURE_FORMATS[o];
    if (!d) throw Error(`Unknown texture format ${o}`);
    if (!t.includes(d)) throw Error(`Unsupported texture format: ${d}, supportedFormats: ${t}`);
    let h = function (e, t, r) {
        let n = tl.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[r];
        if (0 !== e && (n = tl.TYPES_TO_BYTES_PER_COMPONENT[e] ? tl.TYPES_TO_BYTES_PER_COMPONENT[e] * tl.FORMATS_TO_COMPONENTS[t] : tl.TYPES_TO_BYTES_PER_PIXEL[e]), void 0 === n) throw Error("Unable to resolve the pixel format stored in the *.ktx file!");
        return n;
      }(i, a, o),
      p = function (e, t, r, n, i, a, o, s) {
        let l = n + 3 & -4,
          u = i + 3 & -4,
          c = n * i;
        0 === t && (c = l * u);
        let d = c * r,
          h = n,
          p = i,
          f = a,
          m = Array(o);
        for (let t = 0; t < o; t++) {
          let n = e.getUint32(f, s),
            i = f + 4;
          m[t] = new Uint8Array(e.buffer, i, d), i += d, f += n + 4, f = f % 4 != 0 ? f + 4 - f % 4 : f, d = ((h = h >> 1 || 1) + 4 - 1 & -4) * ((p = p >> 1 || 1) + 4 - 1 & -4) * r;
        }
        return m;
      }(r, i, h, s, l, c, u, n);
    return {
      format: d,
      width: s,
      height: l,
      resource: p,
      alphaMode: "no-premultiply-alpha"
    };
  }
  let tc = {
      extension: {
        type: v.ExtensionType.LoadParser,
        priority: ey.LoaderParserPriority.High,
        name: "loadKTX"
      },
      name: "loadKTX",
      id: "ktx",
      test: e => (0, eB.checkExtension)(e, ".ktx"),
      async load(e, t, r) {
        let n = await eK(),
          i = await fetch(e),
          a = new e$({
            ...tu(await i.arrayBuffer(), n),
            resolution: t.data?.resolution || (0, eQ.getResolutionOfUrl)(e)
          });
        return (0, eC.createTexture)(a, r, e);
      },
      unload(e) {
        Array.isArray(e) ? e.forEach(e => e.destroy(!0)) : e.destroy(!0);
      }
    },
    td = null;
  class th {
    constructor() {
      td || (td = URL.createObjectURL(new Blob(['(function () {\n    \'use strict\';\n\n    const converters = {\n      rgb8unorm: {\n        convertedFormat: "rgba8unorm",\n        convertFunction: convertRGBtoRGBA\n      },\n      "rgb8unorm-srgb": {\n        convertedFormat: "rgba8unorm-srgb",\n        convertFunction: convertRGBtoRGBA\n      }\n    };\n    function convertFormatIfRequired(textureOptions) {\n      const format = textureOptions.format;\n      if (converters[format]) {\n        const convertFunction = converters[format].convertFunction;\n        const levelBuffers = textureOptions.resource;\n        for (let i = 0; i < levelBuffers.length; i++) {\n          levelBuffers[i] = convertFunction(levelBuffers[i]);\n        }\n        textureOptions.format = converters[format].convertedFormat;\n      }\n    }\n    function convertRGBtoRGBA(levelBuffer) {\n      const pixelCount = levelBuffer.byteLength / 3;\n      const levelBufferWithAlpha = new Uint32Array(pixelCount);\n      for (let i = 0; i < pixelCount; ++i) {\n        levelBufferWithAlpha[i] = levelBuffer[i * 3] + (levelBuffer[i * 3 + 1] << 8) + (levelBuffer[i * 3 + 2] << 16) + 4278190080;\n      }\n      return new Uint8Array(levelBufferWithAlpha.buffer);\n    }\n\n    function createLevelBuffersFromKTX(ktxTexture) {\n      const levelBuffers = [];\n      for (let i = 0; i < ktxTexture.numLevels; i++) {\n        const imageData = ktxTexture.getImageData(i, 0, 0);\n        const levelBuffer = new Uint8Array(imageData.byteLength);\n        levelBuffer.set(imageData);\n        levelBuffers.push(levelBuffer);\n      }\n      return levelBuffers;\n    }\n\n    const glFormatToGPUFormatMap = {\n      6408: "rgba8unorm",\n      32856: "bgra8unorm",\n      //\n      32857: "rgb10a2unorm",\n      33189: "depth16unorm",\n      33190: "depth24plus",\n      33321: "r8unorm",\n      33323: "rg8unorm",\n      33325: "r16float",\n      33326: "r32float",\n      33327: "rg16float",\n      33328: "rg32float",\n      33329: "r8sint",\n      33330: "r8uint",\n      33331: "r16sint",\n      33332: "r16uint",\n      33333: "r32sint",\n      33334: "r32uint",\n      33335: "rg8sint",\n      33336: "rg8uint",\n      33337: "rg16sint",\n      33338: "rg16uint",\n      33339: "rg32sint",\n      33340: "rg32uint",\n      33778: "bc2-rgba-unorm",\n      33779: "bc3-rgba-unorm",\n      34836: "rgba32float",\n      34842: "rgba16float",\n      35056: "depth24plus-stencil8",\n      35898: "rg11b10ufloat",\n      35901: "rgb9e5ufloat",\n      35907: "rgba8unorm-srgb",\n      // bgra8unorm-srgb\n      36012: "depth32float",\n      36013: "depth32float-stencil8",\n      36168: "stencil8",\n      36208: "rgba32uint",\n      36214: "rgba16uint",\n      36220: "rgba8uint",\n      36226: "rgba32sint",\n      36232: "rgba16sint",\n      36238: "rgba8sint",\n      36492: "bc7-rgba-unorm",\n      36756: "r8snorm",\n      36757: "rg8snorm",\n      36759: "rgba8snorm",\n      37496: "etc2-rgba8unorm",\n      37808: "astc-4x4-unorm"\n    };\n    function glFormatToGPUFormat(glInternalFormat) {\n      const format = glFormatToGPUFormatMap[glInternalFormat];\n      if (format) {\n        return format;\n      }\n      throw new Error(`Unsupported glInternalFormat: ${glInternalFormat}`);\n    }\n\n    const vkFormatToGPUFormatMap = {\n      23: "rgb8unorm",\n      // VK_FORMAT_R8G8B8_UNORM\n      37: "rgba8unorm",\n      // VK_FORMAT_R8G8B8A8_UNORM\n      43: "rgba8unorm-srgb"\n      // VK_FORMAT_R8G8B8A8_SRGB\n      // TODO add more!\n    };\n    function vkFormatToGPUFormat(vkFormat) {\n      const format = vkFormatToGPUFormatMap[vkFormat];\n      if (format) {\n        return format;\n      }\n      throw new Error(`Unsupported VkFormat: ${vkFormat}`);\n    }\n\n    function getTextureFormatFromKTXTexture(ktxTexture) {\n      if (ktxTexture.classId === 2) {\n        return vkFormatToGPUFormat(ktxTexture.vkFormat);\n      }\n      return glFormatToGPUFormat(ktxTexture.glInternalformat);\n    }\n\n    const gpuFormatToBasisTranscoderFormatMap = {\n      "bc3-rgba-unorm": "BC3_RGBA",\n      "bc7-rgba-unorm": "BC7_M5_RGBA",\n      "etc2-rgba8unorm": "ETC2_RGBA",\n      "astc-4x4-unorm": "ASTC_4x4_RGBA",\n      // Uncompressed\n      rgba8unorm: "RGBA32",\n      rg11b10ufloat: "R11F_G11F_B10F"\n    };\n    function gpuFormatToKTXBasisTranscoderFormat(transcoderFormat) {\n      const format = gpuFormatToBasisTranscoderFormatMap[transcoderFormat];\n      if (format) {\n        return format;\n      }\n      throw new Error(`Unsupported transcoderFormat: ${transcoderFormat}`);\n    }\n\n    const settings = {\n      jsUrl: "",\n      wasmUrl: ""\n    };\n    let basisTranscoderFormat;\n    let basisTranscodedTextureFormat;\n    let ktxPromise;\n    async function getKTX() {\n      if (!ktxPromise) {\n        const absoluteJsUrl = new URL(settings.jsUrl, location.origin).href;\n        const absoluteWasmUrl = new URL(settings.wasmUrl, location.origin).href;\n        importScripts(absoluteJsUrl);\n        ktxPromise = new Promise((resolve) => {\n          LIBKTX({\n            locateFile: (_file) => absoluteWasmUrl\n          }).then((libktx) => {\n            resolve(libktx);\n          });\n        });\n      }\n      return ktxPromise;\n    }\n    async function fetchKTXTexture(url, ktx) {\n      const ktx2Response = await fetch(url);\n      if (ktx2Response.ok) {\n        const ktx2ArrayBuffer = await ktx2Response.arrayBuffer();\n        return new ktx.ktxTexture(new Uint8Array(ktx2ArrayBuffer));\n      }\n      throw new Error(`Failed to load KTX(2) texture: ${url}`);\n    }\n    const preferredTranscodedFormat = [\n      "bc7-rgba-unorm",\n      "astc-4x4-unorm",\n      "etc2-rgba8unorm",\n      "bc3-rgba-unorm",\n      "rgba8unorm"\n    ];\n    async function load(url) {\n      const ktx = await getKTX();\n      const ktxTexture = await fetchKTXTexture(url, ktx);\n      let format;\n      if (ktxTexture.needsTranscoding) {\n        format = basisTranscodedTextureFormat;\n        const transcodeFormat = ktx.TranscodeTarget[basisTranscoderFormat];\n        const result = ktxTexture.transcodeBasis(transcodeFormat, 0);\n        if (result !== ktx.ErrorCode.SUCCESS) {\n          throw new Error("Unable to transcode basis texture.");\n        }\n      } else {\n        format = getTextureFormatFromKTXTexture(ktxTexture);\n      }\n      const levelBuffers = createLevelBuffersFromKTX(ktxTexture);\n      const textureOptions = {\n        width: ktxTexture.baseWidth,\n        height: ktxTexture.baseHeight,\n        format,\n        mipLevelCount: ktxTexture.numLevels,\n        resource: levelBuffers,\n        alphaMode: "no-premultiply-alpha"\n      };\n      convertFormatIfRequired(textureOptions);\n      return textureOptions;\n    }\n    async function init(jsUrl, wasmUrl, supportedTextures) {\n      if (jsUrl) settings.jsUrl = jsUrl;\n      if (wasmUrl) settings.wasmUrl = wasmUrl;\n      basisTranscodedTextureFormat = preferredTranscodedFormat.filter((format) => supportedTextures.includes(format))[0];\n      basisTranscoderFormat = gpuFormatToKTXBasisTranscoderFormat(basisTranscodedTextureFormat);\n      await getKTX();\n    }\n    const messageHandlers = {\n      init: async (data) => {\n        const { jsUrl, wasmUrl, supportedTextures } = data;\n        await init(jsUrl, wasmUrl, supportedTextures);\n      },\n      load: async (data) => {\n        try {\n          const textureOptions = await load(data.url);\n          return {\n            type: "load",\n            url: data.url,\n            success: true,\n            textureOptions,\n            transferables: textureOptions.resource?.map((arr) => arr.buffer)\n          };\n        } catch (e) {\n          throw e;\n        }\n      }\n    };\n    self.onmessage = (async (messageEvent) => {\n      const message = messageEvent.data;\n      try {\n        const response = await messageHandlers[message.type]?.(message);\n        if (response) {\n          self.postMessage(response, response.transferables);\n        }\n      } catch (err) {\n        self.postMessage({\n          type: "error",\n          err,\n          url: message.url\n        });\n      }\n    });\n\n})();\n'], {
        type: "application/javascript"
      }))), this.worker = new Worker(td);
    }
  }
  th.revokeObjectURL = function () {
    td && (URL.revokeObjectURL(td), td = null);
  };
  let tp = {
      jsUrl: "https://cdn.jsdelivr.net/npm/pixi.js/transcoders/ktx/libktx.js",
      wasmUrl: "https://cdn.jsdelivr.net/npm/pixi.js/transcoders/ktx/libktx.wasm"
    },
    tf = {},
    tm = {};
  function tg(e, t) {
    let r = (o || ((o = new th().worker).onmessage = e => {
      let {
        err: t,
        success: r,
        url: n,
        textureOptions: i
      } = e.data;
      t ? tm[n](t) : (r || console.warn("Failed to load KTX texture", n), tf[n](i));
    }, o.postMessage({
      type: "init",
      jsUrl: tp.jsUrl,
      wasmUrl: tp.wasmUrl,
      supportedTextures: t
    })), o);
    return new Promise((t, n) => {
      tf[e] = t, tm[e] = n, r.postMessage({
        type: "load",
        url: e
      });
    });
  }
  let tb = {
      extension: {
        type: v.ExtensionType.LoadParser,
        priority: ey.LoaderParserPriority.High,
        name: "loadKTX2"
      },
      name: "loadKTX2",
      id: "ktx2",
      test: e => (0, eB.checkExtension)(e, ".ktx2"),
      async load(e, t, r) {
        let n = await eK(),
          i = new e$({
            ...(await tg(e, n)),
            resolution: t.data?.resolution || (0, eQ.getResolutionOfUrl)(e)
          });
        return (0, eC.createTexture)(i, r, e);
      },
      async unload(e) {
        Array.isArray(e) ? e.forEach(e => e.destroy(!0)) : e.destroy(!0);
      }
    },
    t_ = {
      rgb8unorm: {
        convertedFormat: "rgba8unorm",
        convertFunction: tx
      },
      "rgb8unorm-srgb": {
        convertedFormat: "rgba8unorm-srgb",
        convertFunction: tx
      }
    };
  function tx(e) {
    let t = e.byteLength / 3,
      r = new Uint32Array(t);
    for (let n = 0; n < t; ++n) r[n] = e[3 * n] + (e[3 * n + 1] << 8) + (e[3 * n + 2] << 16) + 0xff000000;
    return new Uint8Array(r.buffer);
  }
  let tT = {
    6408: "rgba8unorm",
    32856: "bgra8unorm",
    32857: "rgb10a2unorm",
    33189: "depth16unorm",
    33190: "depth24plus",
    33321: "r8unorm",
    33323: "rg8unorm",
    33325: "r16float",
    33326: "r32float",
    33327: "rg16float",
    33328: "rg32float",
    33329: "r8sint",
    33330: "r8uint",
    33331: "r16sint",
    33332: "r16uint",
    33333: "r32sint",
    33334: "r32uint",
    33335: "rg8sint",
    33336: "rg8uint",
    33337: "rg16sint",
    33338: "rg16uint",
    33339: "rg32sint",
    33340: "rg32uint",
    33778: "bc2-rgba-unorm",
    33779: "bc3-rgba-unorm",
    34836: "rgba32float",
    34842: "rgba16float",
    35056: "depth24plus-stencil8",
    35898: "rg11b10ufloat",
    35901: "rgb9e5ufloat",
    35907: "rgba8unorm-srgb",
    36012: "depth32float",
    36013: "depth32float-stencil8",
    36168: "stencil8",
    36208: "rgba32uint",
    36214: "rgba16uint",
    36220: "rgba8uint",
    36226: "rgba32sint",
    36232: "rgba16sint",
    36238: "rgba8sint",
    36492: "bc7-rgba-unorm",
    36756: "r8snorm",
    36757: "rg8snorm",
    36759: "rgba8snorm",
    37496: "etc2-rgba8unorm",
    37808: "astc-4x4-unorm"
  };
  function ty(e) {
    let t = tT[e];
    if (t) return t;
    throw Error(`Unsupported glInternalFormat: ${e}`);
  }
  let tS = {
    23: "rgb8unorm",
    37: "rgba8unorm",
    43: "rgba8unorm-srgb"
  };
  function tv(e) {
    let t = tS[e];
    if (t) return t;
    throw Error(`Unsupported VkFormat: ${e}`);
  }
  let tR = {
      "bc3-rgba-unorm": "BC3_RGBA",
      "bc7-rgba-unorm": "BC7_M5_RGBA",
      "etc2-rgba8unorm": "ETC2_RGBA",
      "astc-4x4-unorm": "ASTC_4x4_RGBA",
      rgba8unorm: "RGBA32",
      rg11b10ufloat: "R11F_G11F_B10F"
    },
    tE = ["basis", "bc7", "bc6h", "astc", "etc2", "bc5", "bc4", "bc3", "bc2", "bc1", "eac"],
    tA = {
      extension: v.ExtensionType.ResolveParser,
      test: e => (0, eB.checkExtension)(e, [".ktx", ".ktx2", ".dds"]),
      parse: e => {
        let t,
          r = e.split(".");
        if (r.length > 2) {
          let e = r[r.length - 2];
          tE.includes(e) && (t = e);
        } else t = r[r.length - 1];
        return {
          resolution: parseFloat(eP.Resolver.RETINA_PREFIX.exec(e)?.[1] ?? "1"),
          format: t,
          src: e
        };
      }
    },
    tM = {
      extension: {
        type: v.ExtensionType.DetectionParser,
        priority: 2
      },
      test: async () => !!((await (0, ek.isWebGPUSupported)()) || (0, eX.isWebGLSupported)()),
      add: async e => {
        var t;
        let r, n;
        return [...(t = await eY(), r = ["basis"], n = {}, t.forEach(e => {
          let t = e.split("-")[0];
          t && !n[t] && (n[t] = !0, r.push(t));
        }), r.sort((e, t) => {
          let r = tE.indexOf(e),
            n = tE.indexOf(t);
          return -1 === r ? 1 : -1 === n ? -1 : r - n;
        }), s = r), ...e];
      },
      remove: async e => s ? e.filter(e => !(e in s)) : e
    };
  var tC = e.i(389474),
    tG = e.i(539088),
    tw = e.i(453549),
    tD = e.i(512583);
  let tP = new tw.Bounds(),
    tO = new tC.Matrix(),
    tB = new tG.Rectangle(),
    tF = class {
      cull(e, t, r = !0) {
        this._cullRecursive(e, t, r);
      }
      _cullRecursive(e, t, r = !0) {
        if (e.cullable && e.measurable && e.includeInBuild) {
          if (e.cullArea) {
            tB.x = t.x, tB.y = t.y, tB.width = t.width, tB.height = t.height;
            let n = r ? e.worldTransform : e.getGlobalTransform(tO, r);
            e.culled = !tB.intersects(e.cullArea, n);
          } else {
            let n = (0, tD.getGlobalBounds)(e, r, tP);
            e.culled = n.x >= t.x + t.width || n.y >= t.y + t.height || n.x + n.width <= t.x || n.y + n.height <= t.y;
          }
        } else e.culled = !1;
        if (e.cullableChildren && !e.culled && e.renderable && e.measurable && e.includeInBuild) for (let n = 0; n < e.children.length; n++) this._cullRecursive(e.children[n], t, r);
      }
    };
  tF.shared = new tF();
  class tI {
    static init(e) {
      this._renderRef = this.render.bind(this), this.render = () => {
        let t = e?.culler?.updateTransform !== !0;
        tF.shared.cull(this.stage, this.renderer.screen, t), this.renderer.render({
          container: this.stage
        });
      };
    }
    static destroy() {
      this.render = this._renderRef;
    }
  }
  tI.extension = {
    priority: 10,
    type: v.ExtensionType.Application,
    name: "culler"
  };
  var tU = e.i(811468),
    tL = e.i(620044),
    tN = e.i(37554),
    tX = e.i(441327);
  class tk extends tX.ViewContainer {
    constructor(e = {}) {
      const {
        element: t,
        anchor: r,
        ...n
      } = e;
      super({
        label: "DOMContainer",
        ...n
      }), this.renderPipeId = "dom", this.batched = !1, this._anchor = new tN.Point(0, 0), r && (this.anchor = r), this.element = e.element || document.createElement("div");
    }
    get anchor() {
      return this._anchor;
    }
    set anchor(e) {
      "number" == typeof e ? this._anchor.set(e) : this._anchor.copyFrom(e);
    }
    set element(e) {
      this._element !== e && (this._element = e, this.onViewUpdate());
    }
    get element() {
      return this._element;
    }
    updateBounds() {
      let e = this._bounds,
        t = this._element;
      if (!t) {
        e.minX = 0, e.minY = 0, e.maxX = 0, e.maxY = 0;
        return;
      }
      let {
        offsetWidth: r,
        offsetHeight: n
      } = t;
      e.minX = 0, e.maxX = r, e.minY = 0, e.maxY = n;
    }
    destroy(e = !1) {
      super.destroy(e), this._element?.parentNode?.removeChild(this._element), this._element = null, this._anchor = null;
    }
  }
  var tH = e.i(67516),
    tV = e.i(694427),
    t$ = e.i(344520),
    tq = e.i(243627),
    tz = e.i(391845),
    tW = e.i(390976),
    tY = e.i(28028),
    tj = e.i(651412),
    tK = e.i(652218),
    tQ = e.i(578078),
    tZ = e.i(977598),
    tJ = e.i(510574),
    t0 = "\nin vec2 vTextureCoord;\n\nout vec4 finalColor;\n\nuniform float uAlpha;\nuniform sampler2D uTexture;\n\nvoid main()\n{\n    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;\n}\n",
    t3 = "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct AlphaUniforms {\n  uAlpha:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n \n    var sample = textureSample(uTexture, uSampler, uv);\n    \n    return sample * alphaUniforms.uAlpha;\n}",
    t2 = "\n\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct BlurUniforms {\n  uStrength:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;\n\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    %blur-struct%\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);\n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>,\n) -> VSOutput {\n\n  let filteredCord = filterTextureCoord(aPosition);\n\n  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;\n\n  return VSOutput(\n   filterVertexPosition(aPosition),\n    %blur-vertex-out%\n  );\n}\n\n@fragment\nfn mainFragment(\n  @builtin(position) position: vec4<f32>,\n  %blur-fragment-in%\n) -> @location(0) vec4<f32> {\n\n    var   finalColor = vec4(0.0);\n\n    %blur-sampling%\n\n    return finalColor;\n}\n",
    t1 = "\nin vec2 vTextureCoord;\nin vec4 vColor;\n\nout vec4 finalColor;\n\nuniform float uColorMatrix[20];\nuniform float uAlpha;\n\nuniform sampler2D uTexture;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture(uTexture, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * 0.2);\n    float diff = (randomValue - 0.5) *  0.5;\n\n    if (uAlpha == 0.0) {\n        finalColor = color;\n        return;\n    }\n\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    vec4 result;\n\n    result.r = (uColorMatrix[0] * color.r);\n        result.r += (uColorMatrix[1] * color.g);\n        result.r += (uColorMatrix[2] * color.b);\n        result.r += (uColorMatrix[3] * color.a);\n        result.r += uColorMatrix[4];\n\n    result.g = (uColorMatrix[5] * color.r);\n        result.g += (uColorMatrix[6] * color.g);\n        result.g += (uColorMatrix[7] * color.b);\n        result.g += (uColorMatrix[8] * color.a);\n        result.g += uColorMatrix[9];\n\n    result.b = (uColorMatrix[10] * color.r);\n       result.b += (uColorMatrix[11] * color.g);\n       result.b += (uColorMatrix[12] * color.b);\n       result.b += (uColorMatrix[13] * color.a);\n       result.b += uColorMatrix[14];\n\n    result.a = (uColorMatrix[15] * color.r);\n       result.a += (uColorMatrix[16] * color.g);\n       result.a += (uColorMatrix[17] * color.b);\n       result.a += (uColorMatrix[18] * color.a);\n       result.a += uColorMatrix[19];\n\n    vec3 rgb = mix(color.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    finalColor = vec4(rgb, result.a);\n}\n",
    t8 = "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct ColorMatrixUniforms {\n  uColorMatrix:array<vec4<f32>, 5>,\n  uAlpha:f32,\n};\n\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n@group(1) @binding(0) var<uniform> colorMatrixUniforms : ColorMatrixUniforms;\n\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n  };\n  \nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n  );\n}\n\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n) -> @location(0) vec4<f32> {\n\n\n  var c = textureSample(uTexture, uSampler, uv);\n  \n  if (colorMatrixUniforms.uAlpha == 0.0) {\n    return c;\n  }\n\n \n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.r /= c.a;\n      c.g /= c.a;\n      c.b /= c.a;\n    }\n\n    var cm = colorMatrixUniforms.uColorMatrix;\n\n\n    var result = vec4<f32>(0.);\n\n    result.r = (cm[0][0] * c.r);\n    result.r += (cm[0][1] * c.g);\n    result.r += (cm[0][2] * c.b);\n    result.r += (cm[0][3] * c.a);\n    result.r += cm[1][0];\n\n    result.g = (cm[1][1] * c.r);\n    result.g += (cm[1][2] * c.g);\n    result.g += (cm[1][3] * c.b);\n    result.g += (cm[2][0] * c.a);\n    result.g += cm[2][1];\n\n    result.b = (cm[2][2] * c.r);\n    result.b += (cm[2][3] * c.g);\n    result.b += (cm[3][0] * c.b);\n    result.b += (cm[3][1] * c.a);\n    result.b += cm[3][2];\n\n    result.a = (cm[3][3] * c.r);\n    result.a += (cm[4][0] * c.g);\n    result.a += (cm[4][1] * c.b);\n    result.a += (cm[4][2] * c.a);\n    result.a += cm[4][3];\n\n    var rgb = mix(c.rgb, result.rgb, colorMatrixUniforms.uAlpha);\n\n    rgb.r *= result.a;\n    rgb.g *= result.a;\n    rgb.b *= result.a;\n\n    return vec4(rgb, result.a);\n}",
    t4 = e.i(738599),
    t6 = "\nin vec2 vTextureCoord;\nin vec2 vFilterUv;\n\nout vec4 finalColor;\n\nuniform sampler2D uTexture;\nuniform sampler2D uMapTexture;\n\nuniform vec4 uInputClamp;\nuniform highp vec4 uInputSize;\nuniform mat2 uRotation;\nuniform vec2 uScale;\n\nvoid main()\n{\n    vec4 map = texture(uMapTexture, vFilterUv);\n    \n    vec2 offset = uInputSize.zw * (uRotation * (map.xy - 0.5)) * uScale; \n\n    finalColor = texture(uTexture, clamp(vTextureCoord + offset, uInputClamp.xy, uInputClamp.zw));\n}\n",
    t5 = "in vec2 aPosition;\nout vec2 vTextureCoord;\nout vec2 vFilterUv;\n\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nuniform mat3 uFilterMatrix;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvec2 getFilterCoord( void )\n{\n  return ( uFilterMatrix * vec3( filterTextureCoord(), 1.0)  ).xy;\n}\n\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n    vFilterUv = getFilterCoord();\n}\n",
    t7 = "\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct DisplacementUniforms {\n  uFilterMatrix:mat3x3<f32>,\n  uScale:vec2<f32>,\n  uRotation:mat2x2<f32>\n};\n\n\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> filterUniforms : DisplacementUniforms;\n@group(1) @binding(1) var uMapTexture: texture_2d<f32>;\n@group(1) @binding(2) var uMapSampler : sampler;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) filterUv : vec2<f32>,\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n\nfn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}\n\nfn getSize() -> vec2<f32>\n{\n\n  \n  return gfu.uGlobalFrame.zw;\n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n   getFilterCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) filterUv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var map = textureSample(uMapTexture, uMapSampler, filterUv);\n\n    var offset =  gfu.uInputSize.zw * (filterUniforms.uRotation * (map.xy - 0.5)) * filterUniforms.uScale; \n   \n    return textureSample(uTexture, uSampler, clamp(uv + offset, gfu.uInputClamp.xy, gfu.uInputClamp.zw));\n}",
    t9 = "\nin vec2 vTextureCoord;\nin vec4 vColor;\n\nout vec4 finalColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uTexture;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture(uTexture, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) *  uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    finalColor = color;\n}\n",
    re = "\n\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct NoiseUniforms {\n  uNoise:f32,\n  uSeed:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> noiseUniforms : NoiseUniforms;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\nfn rand(co:vec2<f32>) -> f32\n{\n  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\n\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var pixelPosition =  globalTextureCoord(position.xy);// / (getSize());//-  gfu.uOutputFrame.xy);\n  \n    \n    var sample = textureSample(uTexture, uSampler, uv);\n    var randomValue =  rand(pixelPosition.xy * noiseUniforms.uSeed);\n    var diff = (randomValue - 0.5) * noiseUniforms.uNoise;\n  \n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (sample.a > 0.0) {\n      sample.r /= sample.a;\n      sample.g /= sample.a;\n      sample.b /= sample.a;\n    }\n\n    sample.r += diff;\n    sample.g += diff;\n    sample.b += diff;\n\n    // Premultiply alpha again.\n    sample.r *= sample.a;\n    sample.g *= sample.a;\n    sample.b *= sample.a;\n    \n    return sample;\n}",
    rt = e.i(664683),
    rr = e.i(906994),
    rn = e.i(265902),
    ri = e.i(226825),
    ra = e.i(655565),
    ro = e.i(50190),
    rs = w;
  let rl = class e extends rs.Filter {
    constructor(t) {
      t = {
        ...e.defaultOptions,
        ...t
      };
      const r = M.GpuProgram.from({
          vertex: {
            source: t3,
            entryPoint: "mainVertex"
          },
          fragment: {
            source: t3,
            entryPoint: "mainFragment"
          }
        }),
        n = A.GlProgram.from({
          vertex: t4.default,
          fragment: t0,
          name: "alpha-filter"
        }),
        {
          alpha: i,
          ...a
        } = t,
        o = new C.UniformGroup({
          uAlpha: {
            value: i,
            type: "f32"
          }
        });
      super({
        ...a,
        gpuProgram: r,
        glProgram: n,
        resources: {
          alphaUniforms: o
        }
      });
    }
    get alpha() {
      return this.resources.alphaUniforms.uniforms.uAlpha;
    }
    set alpha(e) {
      this.resources.alphaUniforms.uniforms.uAlpha = e;
    }
  };
  rl.defaultOptions = {
    alpha: 1
  };
  var ru = e.i(901548),
    rc = e.i(162450),
    rd = e.i(727905),
    rh = w,
    rp = w;
  let rf = {
    5: [.153388, .221461, .250301],
    7: [.071303, .131514, .189879, .214607],
    9: [.028532, .067234, .124009, .179044, .20236],
    11: [.0093, .028002, .065984, .121703, .175713, .198596],
    13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
    15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
  };
  function rm(e) {
    let t = rf[e],
      r = t.length,
      n = "";
    for (let i = 0; i < e; i++) {
      let a = 0 === i ? "finalColor = " : "    + ",
        o = i < r ? i : e - i - 1,
        s = "texture(uTexture, vBlurTexCoords[%index%]) * %value%".replace("%index%", i.toString()).replace("%value%", t[o].toString());
      n += `${a}${s}
`;
    }
    return "in vec2 vBlurTexCoords[%size%];\nuniform sampler2D uTexture;\nout vec4 finalColor;\nvoid main(void)\n{\n    %blur%\n}".replace("%blur%", `${n};`).replace("%size%", e.toString());
  }
  let rg = `
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
  function rb(e, t) {
    let r,
      n = Math.ceil(e / 2),
      i = rg,
      a = "";
    r = t ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";
    for (let t = 0; t < e; t++) {
      let e = r.replace("%index%", t.toString());
      a += e = e.replace("%sampleIndex%", `${t - (n - 1)}.0`), a += "\n";
    }
    return (i = (i = i.replace("%blur%", a)).replace("%size%", e.toString())).replace("%dimension%", t ? "z" : "w");
  }
  function r_(e, t) {
    let r = rb(t, e),
      n = rm(t);
    return A.GlProgram.from({
      vertex: r,
      fragment: n,
      name: `blur-${e ? "horizontal" : "vertical"}-pass-filter`
    });
  }
  function rx(e, t) {
    let r = rf[t],
      n = r.length,
      i = [],
      a = [],
      o = [];
    for (let s = 0; s < t; s++) {
      i[s] = `@location(${s}) offset${s}: vec2<f32>,`, e ? a[s] = `filteredCord + vec2(${s - n + 1} * pixelStrength, 0.0),` : a[s] = `filteredCord + vec2(0.0, ${s - n + 1} * pixelStrength),`;
      let l = r[s < n ? s : t - s - 1].toString();
      o[s] = `finalColor += textureSample(uTexture, uSampler, offset${s}) * ${l};`;
    }
    let s = i.join("\n"),
      l = a.join("\n"),
      u = o.join("\n"),
      c = t2.replace("%blur-struct%", s).replace("%blur-vertex-out%", l).replace("%blur-fragment-in%", s).replace("%blur-sampling%", u).replace("%dimension%", e ? "z" : "w");
    return M.GpuProgram.from({
      vertex: {
        source: c,
        entryPoint: "mainVertex"
      },
      fragment: {
        source: c,
        entryPoint: "mainFragment"
      }
    });
  }
  let rT = class e extends rp.Filter {
    constructor(t) {
      super({
        glProgram: r_((t = {
          ...e.defaultOptions,
          ...t
        }).horizontal, t.kernelSize),
        gpuProgram: rx(t.horizontal, t.kernelSize),
        resources: {
          blurUniforms: {
            uStrength: {
              value: 0,
              type: "f32"
            }
          }
        },
        ...t
      }), this.horizontal = t.horizontal, this.legacy = t.legacy ?? !1, this._quality = 0, this.quality = t.quality, this.blur = t.strength, this._blurUniforms = this.resources.blurUniforms, this._uniforms = this._blurUniforms.uniforms;
    }
    apply(e, t, r, n) {
      this.legacy ? this._applyLegacy(e, t, r, n) : this._applyOptimized(e, t, r, n);
    }
    _applyLegacy(e, t, r, n) {
      if (this._uniforms.uStrength = this.strength / this.passes, 1 === this.passes) e.applyFilter(this, t, r, n);else {
        let i = ru.TexturePool.getSameSizeTexture(t),
          a = t,
          o = i;
        this._state.blend = !1;
        let s = e.renderer.type === rc.RendererType.WEBGPU;
        for (let t = 0; t < this.passes - 1; t++) {
          e.applyFilter(this, a, o, 0 === t || s);
          let r = o;
          o = a, a = r;
        }
        this._state.blend = !0, e.applyFilter(this, a, r, n), ru.TexturePool.returnTexture(i);
      }
    }
    _applyOptimized(e, t, r, n) {
      if (this._uniforms.uStrength = this._calculateInitialStrength(), 1 === this.passes) e.applyFilter(this, t, r, n);else {
        let i = ru.TexturePool.getSameSizeTexture(t),
          a = t,
          o = i;
        this._state.blend = !1;
        let s = e.renderer,
          l = s.type === rc.RendererType.WEBGPU,
          u = l ? s.renderPipes.uniformBatch : null;
        for (let t = 0; t < this.passes - 1; t++) {
          u && this.groups[1].setResource(u.getUboResource(this._blurUniforms), 0), e.applyFilter(this, a, o, l);
          let t = o;
          o = a, a = t, this._uniforms.uStrength *= .5;
        }
        u && this.groups[1].setResource(u.getUboResource(this._blurUniforms), 0), this._state.blend = !0, e.applyFilter(this, a, r, n), ru.TexturePool.returnTexture(i);
      }
    }
    _calculateInitialStrength() {
      let e = 1,
        t = .5;
      for (let r = 1; r < this.passes; r++) e += t * t, t *= .5;
      return this.strength / Math.sqrt(e);
    }
    get blur() {
      return this.strength;
    }
    set blur(e) {
      this.padding = 1 + 2 * Math.abs(e), this.strength = e;
    }
    get quality() {
      return this._quality;
    }
    set quality(e) {
      this._quality = e, this.passes = e;
    }
  };
  rT.defaultOptions = {
    strength: 8,
    quality: 4,
    kernelSize: 5,
    legacy: !1
  };
  class ry extends rh.Filter {
    constructor(...e) {
      let t = e[0] ?? {};
      "number" == typeof t && ((0, rd.deprecation)(rd.v8_0_0, "BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }"), t = {
        strength: t
      }, void 0 !== e[1] && (t.quality = e[1]), void 0 !== e[2] && (t.resolution = e[2] || "inherit"), void 0 !== e[3] && (t.kernelSize = e[3]));
      const {
        strength: r,
        strengthX: n,
        strengthY: i,
        quality: a,
        ...o
      } = t = {
        ...rT.defaultOptions,
        ...t
      };
      super({
        ...o,
        compatibleRenderers: rc.RendererType.BOTH,
        resources: {}
      }), this._repeatEdgePixels = !1, this.blurXFilter = new rT({
        horizontal: !0,
        ...t
      }), this.blurYFilter = new rT({
        horizontal: !1,
        ...t
      }), this.quality = a, this.strengthX = n ?? r, this.strengthY = i ?? r, this.repeatEdgePixels = !1;
    }
    apply(e, t, r, n) {
      let i = Math.abs(this.blurXFilter.strength),
        a = Math.abs(this.blurYFilter.strength);
      if (i && a) {
        let i = ru.TexturePool.getSameSizeTexture(t);
        this.blurXFilter.blendMode = "normal", this.blurXFilter.apply(e, t, i, !0), this.blurYFilter.blendMode = this.blendMode, this.blurYFilter.apply(e, i, r, n), ru.TexturePool.returnTexture(i);
      } else a ? (this.blurYFilter.blendMode = this.blendMode, this.blurYFilter.apply(e, t, r, n)) : (this.blurXFilter.blendMode = this.blendMode, this.blurXFilter.apply(e, t, r, n));
    }
    updatePadding() {
      this._repeatEdgePixels ? this.padding = 0 : this.padding = 2 * Math.max(Math.abs(this.blurXFilter.blur), Math.abs(this.blurYFilter.blur));
    }
    get strength() {
      if (this.strengthX !== this.strengthY) throw Error("BlurFilter's strengthX and strengthY are different");
      return this.strengthX;
    }
    set strength(e) {
      this.blurXFilter.blur = this.blurYFilter.blur = e, this.updatePadding();
    }
    get quality() {
      return this.blurXFilter.quality;
    }
    set quality(e) {
      this.blurXFilter.quality = this.blurYFilter.quality = e;
    }
    get strengthX() {
      return this.blurXFilter.blur;
    }
    set strengthX(e) {
      this.blurXFilter.blur = e, this.updatePadding();
    }
    get strengthY() {
      return this.blurYFilter.blur;
    }
    set strengthY(e) {
      this.blurYFilter.blur = e, this.updatePadding();
    }
    get blur() {
      return (0, rd.deprecation)("8.3.0", "BlurFilter.blur is deprecated, please use BlurFilter.strength instead."), this.strength;
    }
    set blur(e) {
      (0, rd.deprecation)("8.3.0", "BlurFilter.blur is deprecated, please use BlurFilter.strength instead."), this.strength = e;
    }
    get blurX() {
      return (0, rd.deprecation)("8.3.0", "BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."), this.strengthX;
    }
    set blurX(e) {
      (0, rd.deprecation)("8.3.0", "BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."), this.strengthX = e;
    }
    get blurY() {
      return (0, rd.deprecation)("8.3.0", "BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."), this.strengthY;
    }
    set blurY(e) {
      (0, rd.deprecation)("8.3.0", "BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."), this.strengthY = e;
    }
    get repeatEdgePixels() {
      return this._repeatEdgePixels;
    }
    set repeatEdgePixels(e) {
      this._repeatEdgePixels = e, this.updatePadding();
    }
  }
  ry.defaultOptions = {
    strength: 8,
    quality: 4,
    kernelSize: 5,
    legacy: !1
  };
  var rS = w;
  class rv extends rS.Filter {
    constructor(e = {}) {
      const t = new C.UniformGroup({
          uColorMatrix: {
            value: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            type: "f32",
            size: 20
          },
          uAlpha: {
            value: 1,
            type: "f32"
          }
        }),
        r = M.GpuProgram.from({
          vertex: {
            source: t8,
            entryPoint: "mainVertex"
          },
          fragment: {
            source: t8,
            entryPoint: "mainFragment"
          }
        }),
        n = A.GlProgram.from({
          vertex: t4.default,
          fragment: t1,
          name: "color-matrix-filter"
        });
      super({
        ...e,
        gpuProgram: r,
        glProgram: n,
        resources: {
          colorMatrixUniforms: t
        }
      }), this.alpha = 1;
    }
    _loadMatrix(e, t = !1) {
      if (t) {
        let t = [...e];
        this._multiply(t, this.matrix, e), this.resources.colorMatrixUniforms.uniforms.uColorMatrix = t;
      } else this.resources.colorMatrixUniforms.uniforms.uColorMatrix = e;
      this.resources.colorMatrixUniforms.update();
    }
    _multiply(e, t, r) {
      return e[0] = t[0] * r[0] + t[1] * r[5] + t[2] * r[10] + t[3] * r[15], e[1] = t[0] * r[1] + t[1] * r[6] + t[2] * r[11] + t[3] * r[16], e[2] = t[0] * r[2] + t[1] * r[7] + t[2] * r[12] + t[3] * r[17], e[3] = t[0] * r[3] + t[1] * r[8] + t[2] * r[13] + t[3] * r[18], e[4] = t[0] * r[4] + t[1] * r[9] + t[2] * r[14] + t[3] * r[19] + t[4], e[5] = t[5] * r[0] + t[6] * r[5] + t[7] * r[10] + t[8] * r[15], e[6] = t[5] * r[1] + t[6] * r[6] + t[7] * r[11] + t[8] * r[16], e[7] = t[5] * r[2] + t[6] * r[7] + t[7] * r[12] + t[8] * r[17], e[8] = t[5] * r[3] + t[6] * r[8] + t[7] * r[13] + t[8] * r[18], e[9] = t[5] * r[4] + t[6] * r[9] + t[7] * r[14] + t[8] * r[19] + t[9], e[10] = t[10] * r[0] + t[11] * r[5] + t[12] * r[10] + t[13] * r[15], e[11] = t[10] * r[1] + t[11] * r[6] + t[12] * r[11] + t[13] * r[16], e[12] = t[10] * r[2] + t[11] * r[7] + t[12] * r[12] + t[13] * r[17], e[13] = t[10] * r[3] + t[11] * r[8] + t[12] * r[13] + t[13] * r[18], e[14] = t[10] * r[4] + t[11] * r[9] + t[12] * r[14] + t[13] * r[19] + t[14], e[15] = t[15] * r[0] + t[16] * r[5] + t[17] * r[10] + t[18] * r[15], e[16] = t[15] * r[1] + t[16] * r[6] + t[17] * r[11] + t[18] * r[16], e[17] = t[15] * r[2] + t[16] * r[7] + t[17] * r[12] + t[18] * r[17], e[18] = t[15] * r[3] + t[16] * r[8] + t[17] * r[13] + t[18] * r[18], e[19] = t[15] * r[4] + t[16] * r[9] + t[17] * r[14] + t[18] * r[19] + t[19], e;
    }
    brightness(e, t) {
      this._loadMatrix([e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 1, 0], t);
    }
    tint(e, t) {
      let [r, n, i] = eN.Color.shared.setValue(e).toArray();
      this._loadMatrix([r, 0, 0, 0, 0, 0, n, 0, 0, 0, 0, 0, i, 0, 0, 0, 0, 0, 1, 0], t);
    }
    greyscale(e, t) {
      this._loadMatrix([e, e, e, 0, 0, e, e, e, 0, 0, e, e, e, 0, 0, 0, 0, 0, 1, 0], t);
    }
    grayscale(e, t) {
      this.greyscale(e, t);
    }
    blackAndWhite(e) {
      this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], e);
    }
    hue(e, t) {
      let r = Math.cos(e = (e || 0) / 180 * Math.PI),
        n = Math.sin(e),
        i = 1 / 3,
        a = (0, Math.sqrt)(1 / 3);
      this._loadMatrix([r + (1 - r) * i, i * (1 - r) - a * n, i * (1 - r) + a * n, 0, 0, i * (1 - r) + a * n, r + i * (1 - r), i * (1 - r) - a * n, 0, 0, i * (1 - r) - a * n, i * (1 - r) + a * n, r + i * (1 - r), 0, 0, 0, 0, 0, 1, 0], t);
    }
    contrast(e, t) {
      let r = (e || 0) + 1,
        n = -.5 * (r - 1);
      this._loadMatrix([r, 0, 0, 0, n, 0, r, 0, 0, n, 0, 0, r, 0, n, 0, 0, 0, 1, 0], t);
    }
    saturate(e = 0, t) {
      let r = 2 * e / 3 + 1,
        n = -((r - 1) * .5);
      this._loadMatrix([r, n, n, 0, 0, n, r, n, 0, 0, n, n, r, 0, 0, 0, 0, 0, 1, 0], t);
    }
    desaturate() {
      this.saturate(-1);
    }
    negative(e) {
      this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], e);
    }
    sepia(e) {
      this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], e);
    }
    technicolor(e) {
      this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, .046249425232852304, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -.2758903984886823, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, .12137623870388682, 0, 0, 0, 1, 0], e);
    }
    polaroid(e) {
      this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], e);
    }
    toBGR(e) {
      this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], e);
    }
    kodachrome(e) {
      this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, .24991995145868634, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, .09698983488904393, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, .13972481597886063, 0, 0, 0, 1, 0], e);
    }
    browni(e) {
      this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, .1860075629647401, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -.14497417640467167, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -.029655197167024642, 0, 0, 0, 1, 0], e);
    }
    vintage(e) {
      this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, .037848179746251466, .02578397704808868, .6441188644374771, .03259127616149294, 0, .029265996770472907, .0466055556782719, -.0851232987247891, .5241648018700465, 0, .020232119953863904, 0, 0, 0, 1, 0], e);
    }
    colorTone(e, t, r, n, i) {
      e || (e = .2), t || (t = .15), r || (r = 0xffe580), n || (n = 3375104);
      let a = eN.Color.shared,
        [o, s, l] = a.setValue(r).toArray(),
        [u, c, d] = a.setValue(n).toArray(),
        h = [.3, .59, .11, 0, 0, o, s, l, e, 0, u, c, d, t, 0, o - u, s - c, l - d, 0, 0];
      this._loadMatrix(h, i);
    }
    night(e, t) {
      e || (e = .1);
      let r = [-2 * e, -e, 0, 0, 0, -e, 0, e, 0, 0, 0, e, 2 * e, 0, 0, 0, 0, 0, 1, 0];
      this._loadMatrix(r, t);
    }
    predator(e, t) {
      this._loadMatrix([11.224130630493164 * e, -4.794486999511719 * e, -2.8746118545532227 * e, 0 * e, .40342438220977783 * e, -3.6330697536468506 * e, 9.193157196044922 * e, -2.951810836791992 * e, 0 * e, -1.316135048866272 * e, -3.2184197902679443 * e, -4.2375030517578125 * e, 7.476448059082031 * e, 0 * e, .8044459223747253 * e, 0, 0, 0, 1, 0], t);
    }
    lsd(e) {
      this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], e);
    }
    reset() {
      this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1);
    }
    get matrix() {
      return this.resources.colorMatrixUniforms.uniforms.uColorMatrix;
    }
    set matrix(e) {
      this.resources.colorMatrixUniforms.uniforms.uColorMatrix = e;
    }
    get alpha() {
      return this.resources.colorMatrixUniforms.uniforms.uAlpha;
    }
    set alpha(e) {
      this.resources.colorMatrixUniforms.uniforms.uAlpha = e;
    }
  }
  var rR = e.i(465816),
    rE = w;
  class rA extends rE.Filter {
    constructor(...e) {
      let t = e[0];
      t instanceof rR.Sprite && (e[1] && (0, rd.deprecation)(rd.v8_0_0, "DisplacementFilter now uses options object instead of params. {sprite, scale}"), t = {
        sprite: t,
        scale: e[1]
      });
      const {
        sprite: r,
        scale: n,
        ...i
      } = t;
      let a = n ?? 20;
      "number" == typeof a && (a = new tN.Point(a, a));
      const o = new C.UniformGroup({
          uFilterMatrix: {
            value: new tC.Matrix(),
            type: "mat3x3<f32>"
          },
          uScale: {
            value: a,
            type: "vec2<f32>"
          },
          uRotation: {
            value: new Float32Array([0, 0, 0, 0]),
            type: "mat2x2<f32>"
          }
        }),
        s = A.GlProgram.from({
          vertex: t5,
          fragment: t6,
          name: "displacement-filter"
        }),
        l = M.GpuProgram.from({
          vertex: {
            source: t7,
            entryPoint: "mainVertex"
          },
          fragment: {
            source: t7,
            entryPoint: "mainFragment"
          }
        }),
        u = r.texture.source;
      super({
        ...i,
        gpuProgram: l,
        glProgram: s,
        resources: {
          filterUniforms: o,
          uMapTexture: u,
          uMapSampler: u.style
        }
      }), this._sprite = t.sprite, this._sprite.renderable = !1;
    }
    apply(e, t, r, n) {
      let i = this.resources.filterUniforms.uniforms;
      e.calculateSpriteMatrix(i.uFilterMatrix, this._sprite);
      let a = this._sprite.worldTransform,
        o = Math.sqrt(a.a * a.a + a.b * a.b),
        s = Math.sqrt(a.c * a.c + a.d * a.d);
      0 !== o && 0 !== s && (i.uRotation[0] = a.a / o, i.uRotation[1] = a.b / o, i.uRotation[2] = a.c / s, i.uRotation[3] = a.d / s), this.resources.uMapTexture = this._sprite.texture.source, e.applyFilter(this, t, r, n);
    }
    get scale() {
      return this.resources.filterUniforms.uniforms.uScale;
    }
  }
  var rM = w;
  let rC = class e extends rM.Filter {
    constructor(t = {}) {
      t = {
        ...e.defaultOptions,
        ...t
      };
      const r = M.GpuProgram.from({
          vertex: {
            source: re,
            entryPoint: "mainVertex"
          },
          fragment: {
            source: re,
            entryPoint: "mainFragment"
          }
        }),
        n = A.GlProgram.from({
          vertex: t4.default,
          fragment: t9,
          name: "noise-filter"
        }),
        {
          noise: i,
          seed: a,
          ...o
        } = t;
      super({
        ...o,
        gpuProgram: r,
        glProgram: n,
        resources: {
          noiseUniforms: new C.UniformGroup({
            uNoise: {
              value: 1,
              type: "f32"
            },
            uSeed: {
              value: 1,
              type: "f32"
            }
          })
        }
      }), this.noise = i, this.seed = a ?? Math.random();
    }
    get noise() {
      return this.resources.noiseUniforms.uniforms.uNoise;
    }
    set noise(e) {
      this.resources.noiseUniforms.uniforms.uNoise = e;
    }
    get seed() {
      return this.resources.noiseUniforms.uniforms.uSeed;
    }
    set seed(e) {
      this.resources.noiseUniforms.uniforms.uSeed = e;
    }
  };
  rC.defaultOptions = {
    noise: .5
  };
  var rG = e.i(785667),
    rw = e.i(893661),
    rD = e.i(873604),
    rP = e.i(197380),
    rO = e.i(758139),
    rB = e.i(164811),
    rF = e.i(42515),
    rI = e.i(356566),
    rU = e.i(866836),
    rL = e.i(490249);
  function rN(e, t, r, n, i, a, o, s) {
    let l = o - r,
      u = s - n,
      c = i - r,
      d = a - n,
      h = e - r,
      p = t - n,
      f = l * l + u * u,
      m = l * c + u * d,
      g = l * h + u * p,
      b = c * c + d * d,
      _ = c * h + d * p,
      x = 1 / (f * b - m * m),
      T = (b * g - m * _) * x,
      y = (f * _ - m * g) * x;
    return T >= 0 && y >= 0 && T + y < 1;
  }
  var rX = e.i(547416),
    rk = e.i(547417),
    rH = e.i(163062),
    rV = e.i(140427),
    r$ = e.i(275576),
    rq = e.i(143072),
    rz = e.i(989031);
  let rW = class e {
    constructor(t) {
      this._tick = () => {
        this._destroyed || (this.timeout = setTimeout(this._processQueue, 0));
      }, this._processQueue = () => {
        if (this._destroyed) return;
        let {
            queue: t
          } = this,
          r = 0;
        for (; t.length && r < e.uploadsPerFrame;) {
          let e = t.shift();
          this.uploadQueueItem(e), r++;
        }
        t.length ? rz.Ticker.system.addOnce(this._tick, this, rq.UPDATE_PRIORITY.UTILITY) : this._resolve();
      }, this.renderer = t, this.queue = [], this.resolves = [];
    }
    getQueue() {
      return [...this.queue];
    }
    add(e) {
      for (let t of Array.isArray(e) ? e : [e]) t instanceof r$.Container ? this._addContainer(t) : this.resolveQueueItem(t, this.queue);
      return this;
    }
    _addContainer(e) {
      for (let t of (this.resolveQueueItem(e, this.queue), e.children)) this._addContainer(t);
    }
    upload(e) {
      return e && this.add(e), new Promise(e => {
        this.queue.length ? (this.resolves.push(e), this.dedupeQueue(), rz.Ticker.system.addOnce(this._tick, this, rq.UPDATE_PRIORITY.UTILITY)) : e();
      });
    }
    dedupeQueue() {
      let e = Object.create(null),
        t = 0;
      for (let r = 0; r < this.queue.length; r++) {
        let n = this.queue[r];
        e[n.uid] || (e[n.uid] = !0, this.queue[t++] = n);
      }
      this.queue.length = t;
    }
    destroy() {
      this._destroyed = !0, clearTimeout(this.timeout);
    }
    _resolve() {
      let {
          resolves: e
        } = this,
        t = e.slice(0);
      for (let r of (e.length = 0, t)) r();
    }
  };
  rW.uploadsPerFrame = 4;
  let rY = rW;
  var rj = e.i(86958),
    rK = e.i(558001),
    rQ = e.i(719885),
    rZ = e.i(688761),
    rJ = tX,
    r0 = e.i(55585),
    r3 = e.i(294212),
    r2 = rQ;
  let r1 = class e extends r2.Geometry {
    constructor(...t) {
      let r = t[0] ?? {};
      r instanceof Float32Array && ((0, rd.deprecation)(rd.v8_0_0, "use new MeshGeometry({ positions, uvs, indices }) instead"), r = {
        positions: r,
        uvs: t[1],
        indices: t[2]
      });
      const n = (r = {
        ...e.defaultOptions,
        ...r
      }).positions || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
      let i = r.uvs;
      i || (i = new Float32Array(r.positions ? n.length : [0, 0, 1, 0, 1, 1, 0, 1]));
      const a = r.indices || new Uint32Array([0, 1, 2, 0, 2, 3]),
        o = r.shrinkBuffersToFit,
        s = new r0.Buffer({
          data: n,
          label: "attribute-mesh-positions",
          shrinkToFit: o,
          usage: r3.BufferUsage.VERTEX | r3.BufferUsage.COPY_DST
        });
      super({
        attributes: {
          aPosition: {
            buffer: s,
            format: "float32x2",
            stride: 8,
            offset: 0
          },
          aUV: {
            buffer: new r0.Buffer({
              data: i,
              label: "attribute-mesh-uvs",
              shrinkToFit: o,
              usage: r3.BufferUsage.VERTEX | r3.BufferUsage.COPY_DST
            }),
            format: "float32x2",
            stride: 8,
            offset: 0
          }
        },
        indexBuffer: new r0.Buffer({
          data: a,
          label: "index-mesh-buffer",
          shrinkToFit: o,
          usage: r3.BufferUsage.INDEX | r3.BufferUsage.COPY_DST
        }),
        topology: r.topology
      }), this.batchMode = "auto";
    }
    get positions() {
      return this.attributes.aPosition.buffer.data;
    }
    set positions(e) {
      this.attributes.aPosition.buffer.data = e;
    }
    get uvs() {
      return this.attributes.aUV.buffer.data;
    }
    set uvs(e) {
      this.attributes.aUV.buffer.data = e;
    }
    get indices() {
      return this.indexBuffer.data;
    }
    set indices(e) {
      this.indexBuffer.data = e;
    }
  };
  r1.defaultOptions = {
    topology: "triangle-list",
    shrinkBuffersToFit: !1
  };
  let r8 = r1;
  var r4 = e.i(175444),
    r6 = e.i(443122),
    r5 = e.i(149034);
  class r7 {
    constructor() {
      this.batcherName = "default", this.packAsQuad = !1, this.indexOffset = 0, this.attributeOffset = 0, this.roundPixels = 0, this._batcher = null, this._batch = null, this._textureMatrixUpdateId = -1, this._uvUpdateId = -1;
    }
    get blendMode() {
      return this.renderable.groupBlendMode;
    }
    get topology() {
      return this._topology || this.geometry.topology;
    }
    set topology(e) {
      this._topology = e;
    }
    reset() {
      this.renderable = null, this.texture = null, this._batcher = null, this._batch = null, this.geometry = null, this._uvUpdateId = -1, this._textureMatrixUpdateId = -1;
    }
    setTexture(e) {
      this.texture !== e && (this.texture = e, this._textureMatrixUpdateId = -1);
    }
    get uvs() {
      let e = this.geometry.getBuffer("aUV"),
        t = e.data,
        r = t,
        n = this.texture.textureMatrix;
      return n.isSimple || (r = this._transformedUvs, (this._textureMatrixUpdateId !== n._updateID || this._uvUpdateId !== e._updateID) && ((!r || r.length < t.length) && (r = this._transformedUvs = new Float32Array(t.length)), this._textureMatrixUpdateId = n._updateID, this._uvUpdateId = e._updateID, n.multiplyUvs(t, r))), r;
    }
    get positions() {
      return this.geometry.positions;
    }
    get indices() {
      return this.geometry.indices;
    }
    get color() {
      return this.renderable.groupColorAlpha;
    }
    get groupTransform() {
      return this.renderable.groupTransform;
    }
    get attributeSize() {
      return this.geometry.positions.length / 2;
    }
    get indexSize() {
      return this.geometry.indices.length;
    }
  }
  class r9 {
    destroy() {}
  }
  class ne {
    constructor(e, t) {
      this.localUniforms = new C.UniformGroup({
        uTransformMatrix: {
          value: new tC.Matrix(),
          type: "mat3x3<f32>"
        },
        uColor: {
          value: new Float32Array([1, 1, 1, 1]),
          type: "vec4<f32>"
        },
        uRound: {
          value: 0,
          type: "f32"
        }
      }), this.localUniformsBindGroup = new r4.BindGroup({
        0: this.localUniforms
      }), this.renderer = e, this._adaptor = t, this._adaptor.init();
    }
    validateRenderable(e) {
      let t = this._getMeshData(e),
        r = t.batched,
        n = e.batched;
      if (t.batched = n, r !== n) return !0;
      if (n) {
        let r = e._geometry;
        if (r.indices.length !== t.indexSize || r.positions.length !== t.vertexSize) return t.indexSize = r.indices.length, t.vertexSize = r.positions.length, !0;
        let n = this._getBatchableMesh(e);
        return n.texture.uid !== e._texture.uid && (n._textureMatrixUpdateId = -1), !n._batcher.checkAndUpdateTexture(n, e._texture);
      }
      return !1;
    }
    addRenderable(e, t) {
      let r = this.renderer.renderPipes.batch,
        n = this._getMeshData(e);
      if (e.didViewUpdate && (n.indexSize = e._geometry.indices?.length, n.vertexSize = e._geometry.positions?.length), n.batched) {
        let n = this._getBatchableMesh(e);
        n.setTexture(e._texture), n.geometry = e._geometry, r.addToBatch(n, t);
      } else r.break(t), t.add(e);
    }
    updateRenderable(e) {
      if (e.batched) {
        let t = this._getBatchableMesh(e);
        t.setTexture(e._texture), t.geometry = e._geometry, t._batcher.updateElement(t);
      }
    }
    execute(e) {
      if (!e.isRenderable) return;
      e.state.blendMode = (0, r6.getAdjustedBlendModeBlend)(e.groupBlendMode, e.texture._source);
      let t = this.localUniforms;
      t.uniforms.uTransformMatrix = e.groupTransform, t.uniforms.uRound = this.renderer._roundPixels | e._roundPixels, t.update(), (0, r5.color32BitToUniform)(e.groupColorAlpha, t.uniforms.uColor, 0), this._adaptor.execute(this, e);
    }
    _getMeshData(e) {
      var t, r;
      return (t = e._gpuData)[r = this.renderer.uid] || (t[r] = new r9()), e._gpuData[this.renderer.uid].meshData || this._initMeshData(e);
    }
    _initMeshData(e) {
      return e._gpuData[this.renderer.uid].meshData = {
        batched: e.batched,
        indexSize: 0,
        vertexSize: 0
      }, e._gpuData[this.renderer.uid].meshData;
    }
    _getBatchableMesh(e) {
      var t, r;
      return (t = e._gpuData)[r = this.renderer.uid] || (t[r] = new r9()), e._gpuData[this.renderer.uid].batchableMesh || this._initBatchableMesh(e);
    }
    _initBatchableMesh(e) {
      let t = new r7();
      return t.renderable = e, t.setTexture(e._texture), t.transform = e.groupTransform, t.roundPixels = this.renderer._roundPixels | e._roundPixels, e._gpuData[this.renderer.uid].batchableMesh = t, t;
    }
    destroy() {
      this.localUniforms = null, this.localUniformsBindGroup = null, this._adaptor.destroy(), this._adaptor = null, this.renderer = null;
    }
  }
  ne.extension = {
    type: [v.ExtensionType.WebGLPipes, v.ExtensionType.WebGPUPipes],
    name: "mesh"
  }, v.extensions.add(ne);
  class nt extends rJ.ViewContainer {
    constructor(...e) {
      let t = e[0];
      t instanceof rQ.Geometry && ((0, rd.deprecation)(rd.v8_0_0, "Mesh: use new Mesh({ geometry, shader }) instead"), t = {
        geometry: t,
        shader: e[1]
      }, e[3] && ((0, rd.deprecation)(rd.v8_0_0, "Mesh: drawMode argument has been removed, use geometry.topology instead"), t.geometry.topology = e[3]));
      const {
        geometry: r,
        shader: n,
        texture: i,
        roundPixels: a,
        state: o,
        ...s
      } = t;
      super({
        label: "Mesh",
        ...s
      }), this.renderPipeId = "mesh", this._shader = null, this.allowChildren = !1, this.shader = n ?? null, this.texture = i ?? n?.texture ?? G.Texture.WHITE, this.state = o ?? rZ.State.for2d(), this._geometry = r, this._geometry.on("update", this.onViewUpdate, this), this.roundPixels = a ?? !1;
    }
    get material() {
      return (0, rd.deprecation)(rd.v8_0_0, "mesh.material property has been removed, use mesh.shader instead"), this._shader;
    }
    set shader(e) {
      this._shader !== e && (this._shader = e, this.onViewUpdate());
    }
    get shader() {
      return this._shader;
    }
    set geometry(e) {
      this._geometry !== e && (this._geometry?.off("update", this.onViewUpdate, this), e.on("update", this.onViewUpdate, this), this._geometry = e, this.onViewUpdate());
    }
    get geometry() {
      return this._geometry;
    }
    set texture(e) {
      e || (e = G.Texture.EMPTY);
      let t = this._texture;
      t !== e && (t && t.dynamic && t.off("update", this.onViewUpdate, this), e.dynamic && e.on("update", this.onViewUpdate, this), this.shader && (this.shader.texture = e), this._texture = e, this.onViewUpdate());
    }
    get texture() {
      return this._texture;
    }
    get batched() {
      return !this._shader && (12 & this.state.data) == 0 && this._geometry instanceof r8 && ("auto" === this._geometry.batchMode ? this._geometry.positions.length / 2 <= 100 : "batch" === this._geometry.batchMode);
    }
    get bounds() {
      return this._geometry.bounds;
    }
    updateBounds() {
      this._bounds = this._geometry.bounds;
    }
    containsPoint(e) {
      let {
        x: t,
        y: r
      } = e;
      if (!this.bounds.containsPoint(t, r)) return !1;
      let n = this.geometry.getBuffer("aPosition").data,
        i = "triangle-strip" === this.geometry.topology ? 3 : 1;
      if (this.geometry.getIndex()) {
        let e = this.geometry.getIndex().data,
          a = e.length;
        for (let o = 0; o + 2 < a; o += i) {
          let i = 2 * e[o],
            a = 2 * e[o + 1],
            s = 2 * e[o + 2];
          if (rN(t, r, n[i], n[i + 1], n[a], n[a + 1], n[s], n[s + 1])) return !0;
        }
      } else {
        let e = n.length / 2;
        for (let a = 0; a + 2 < e; a += i) {
          let e = 2 * a,
            i = (a + 1) * 2,
            o = (a + 2) * 2;
          if (rN(t, r, n[e], n[e + 1], n[i], n[i + 1], n[o], n[o + 1])) return !0;
        }
      }
      return !1;
    }
    destroy(e) {
      if (super.destroy(e), "boolean" == typeof e ? e : e?.texture) {
        let t = "boolean" == typeof e ? e : e?.textureSource;
        this._texture.destroy(t);
      }
      this._geometry?.off("update", this.onViewUpdate, this), this._texture = null, this._geometry = null, this._shader = null;
    }
  }
  var nr = e.i(96207);
  class nn {
    constructor({
      matrix: e,
      observer: t
    } = {}) {
      this.dirty = !0, this._matrix = e ?? new tC.Matrix(), this.observer = t, this.position = new rL.ObservablePoint(this, 0, 0), this.scale = new rL.ObservablePoint(this, 1, 1), this.pivot = new rL.ObservablePoint(this, 0, 0), this.skew = new rL.ObservablePoint(this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1;
    }
    get matrix() {
      let e = this._matrix;
      return this.dirty && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this.dirty = !1), e;
    }
    _onUpdate(e) {
      this.dirty = !0, e === this.skew && this.updateSkew(), this.observer?._onUpdate(this);
    }
    updateSkew() {
      this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this.dirty = !0;
    }
    toString() {
      return `[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
    }
    setFromMatrix(e) {
      e.decompose(this), this.dirty = !0;
    }
    get rotation() {
      return this._rotation;
    }
    set rotation(e) {
      this._rotation !== e && (this._rotation = e, this._onUpdate(this.skew));
    }
  }
  var ni = tX,
    na = e.i(449752),
    no = e.i(997125),
    ns = e.i(414205);
  let nl = new tC.Matrix(),
    nu = new tC.Matrix(),
    nc = [new tN.Point(), new tN.Point(), new tN.Point(), new tN.Point()];
  class nd {
    constructor(e) {
      this._renderer = e;
    }
    validateRenderable(e) {
      return !1;
    }
    addRenderable(e, t) {
      this._renderer.renderPipes.batch.break(t), t.add(e);
    }
    updateRenderable(e) {}
    execute(e) {
      let t = this._renderer,
        r = t.canvasContext,
        n = r.activeContext;
      n.save(), r.setBlendMode(e.groupBlendMode);
      let i = t.globalUniforms.globalUniformData?.worldColor ?? 0xffffffff,
        a = e.groupColorAlpha,
        o = (i >>> 24 & 255) / 255 * ((a >>> 24 & 255) / 255) * (t.filter?.alphaMultiplier ?? 1);
      if (o <= 0) return void n.restore();
      n.globalAlpha = o;
      let s = (0, no.bgr2rgb)((0, ns.multiplyHexColors)(0xffffff & a, 0xffffff & i)),
        l = e.texture,
        u = na.canvasUtils.getTintedPattern(l, s),
        c = e.width,
        d = e.height,
        h = e.groupTransform,
        p = l.source._resolution ?? l.source.resolution ?? 1;
      nu.copyFrom(e._tileTransform.matrix), e.applyAnchorToTexture || nu.translate(-e.anchor.x * c, -e.anchor.y * d);
      let f = nu.tx,
        m = nu.ty;
      nu.scale(1 / p, 1 / p), nu.tx = f, nu.ty = m, nl.identity(), nl.prepend(nu), nl.prepend(h);
      let g = t._roundPixels | e._roundPixels;
      r.setContextTransform(nl, 1 === g), n.fillStyle = u;
      let b = -(e.anchor.x * c),
        _ = -(e.anchor.y * d);
      nc[0].set(b, _), nc[1].set(b + c, _), nc[2].set(b + c, _ + d), nc[3].set(b, _ + d);
      for (let e = 0; e < 4; e++) nu.applyInverse(nc[e], nc[e]);
      n.beginPath(), n.moveTo(nc[0].x, nc[0].y);
      for (let e = 1; e < 4; e++) n.lineTo(nc[e].x, nc[e].y);
      n.closePath(), n.fill(), n.restore();
    }
    destroy() {
      this._renderer = null;
    }
  }
  nd.extension = {
    type: [v.ExtensionType.CanvasPipes],
    name: "tilingSprite"
  };
  var nh = e.i(217055),
    np = e.i(959684),
    nf = e.i(418668),
    nm = e.i(188578),
    ng = e.i(761149);
  let nb = {
      name: "tiling-bit",
      vertex: {
        header: `
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,
        main: `
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `
      },
      fragment: {
        header: `
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,
        main: `

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            }

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `
      }
    },
    n_ = {
      name: "tiling-bit",
      vertex: {
        header: `
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;

        `,
        main: `
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `
      },
      fragment: {
        header: `
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,
        main: `

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0

        `
      }
    };
  class nx extends ng.Shader {
    constructor() {
      l ?? (l = (0, np.compileHighShaderGpuProgram)({
        name: "tiling-sprite-shader",
        bits: [nf.localUniformBit, nb, nm.roundPixelsBit]
      })), u ?? (u = (0, np.compileHighShaderGlProgram)({
        name: "tiling-sprite-shader",
        bits: [nf.localUniformBitGl, n_, nm.roundPixelsBitGl]
      }));
      const e = new C.UniformGroup({
        uMapCoord: {
          value: new tC.Matrix(),
          type: "mat3x3<f32>"
        },
        uClampFrame: {
          value: new Float32Array([0, 0, 1, 1]),
          type: "vec4<f32>"
        },
        uClampOffset: {
          value: new Float32Array([0, 0]),
          type: "vec2<f32>"
        },
        uTextureTransform: {
          value: new tC.Matrix(),
          type: "mat3x3<f32>"
        },
        uSizeAnchor: {
          value: new Float32Array([100, 100, .5, .5]),
          type: "vec4<f32>"
        }
      });
      super({
        glProgram: u,
        gpuProgram: l,
        resources: {
          localUniforms: new C.UniformGroup({
            uTransformMatrix: {
              value: new tC.Matrix(),
              type: "mat3x3<f32>"
            },
            uColor: {
              value: new Float32Array([1, 1, 1, 1]),
              type: "vec4<f32>"
            },
            uRound: {
              value: 0,
              type: "f32"
            }
          }),
          tilingUniforms: e,
          uTexture: G.Texture.EMPTY.source,
          uSampler: G.Texture.EMPTY.source.style
        }
      });
    }
    updateUniforms(e, t, r, n, i, a) {
      let o = this.resources.tilingUniforms,
        s = a.width,
        l = a.height,
        u = a.textureMatrix,
        c = o.uniforms.uTextureTransform;
      c.set(r.a * s / e, r.b * s / t, r.c * l / e, r.d * l / t, r.tx / e, r.ty / t), c.invert(), o.uniforms.uMapCoord = u.mapCoord, o.uniforms.uClampFrame = u.uClampFrame, o.uniforms.uClampOffset = u.uClampOffset, o.uniforms.uTextureTransform = c, o.uniforms.uSizeAnchor[0] = e, o.uniforms.uSizeAnchor[1] = t, o.uniforms.uSizeAnchor[2] = n, o.uniforms.uSizeAnchor[3] = i, a && (this.resources.uTexture = a.source, this.resources.uSampler = a.source.style);
    }
  }
  class nT extends r8 {
    constructor() {
      super({
        positions: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
        uvs: new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
        indices: new Uint32Array([0, 1, 2, 0, 2, 3])
      });
    }
  }
  function ny(e, t) {
    let r = e.anchor.x,
      n = e.anchor.y;
    t[0] = -r * e.width, t[1] = -n * e.height, t[2] = (1 - r) * e.width, t[3] = -n * e.height, t[4] = (1 - r) * e.width, t[5] = (1 - n) * e.height, t[6] = -r * e.width, t[7] = (1 - n) * e.height;
  }
  function nS(e, t, r, n) {
    let i = 0,
      a = e.length / (t || 2),
      o = n.a,
      s = n.b,
      l = n.c,
      u = n.d,
      c = n.tx,
      d = n.ty;
    for (r *= t; i < a;) {
      let n = e[r],
        a = e[r + 1];
      e[r] = o * n + l * a + c, e[r + 1] = s * n + u * a + d, r += t, i++;
    }
  }
  function nv(e, t) {
    let r = e.texture,
      n = r.frame.width,
      i = r.frame.height,
      a = 0,
      o = 0;
    e.applyAnchorToTexture && (a = e.anchor.x, o = e.anchor.y), t[0] = t[6] = -a, t[2] = t[4] = 1 - a, t[1] = t[3] = -o, t[5] = t[7] = 1 - o;
    let s = e._tileTransform.matrix,
      l = tC.Matrix.shared;
    l.set(s.a * n / e.width, s.b * n / e.height, s.c * i / e.width, s.d * i / e.height, s.tx / e.width, s.ty / e.height), l.invert(), nS(t, 2, 0, l);
  }
  let nR = new nT();
  class nE {
    constructor() {
      this.canBatch = !0, this.geometry = new r8({
        indices: nR.indices.slice(),
        positions: nR.positions.slice(),
        uvs: nR.uvs.slice()
      });
    }
    destroy() {
      this.geometry.destroy(), this.shader?.destroy();
    }
  }
  class nA {
    constructor(e) {
      this._state = rZ.State.default2d, this._renderer = e, this._managedTilingSprites = new nh.GCManagedHash({
        renderer: e,
        type: "renderable",
        name: "tilingSprite"
      });
    }
    validateRenderable(e) {
      let t = this._getTilingSpriteData(e),
        r = t.canBatch;
      this._updateCanBatch(e);
      let n = t.canBatch;
      if (n && n === r) {
        let {
          batchableMesh: r
        } = t;
        return !r._batcher.checkAndUpdateTexture(r, e.texture);
      }
      return r !== n;
    }
    addRenderable(e, t) {
      let r = this._renderer.renderPipes.batch;
      this._updateCanBatch(e);
      let n = this._getTilingSpriteData(e),
        {
          geometry: i,
          canBatch: a
        } = n;
      if (a) {
        n.batchableMesh || (n.batchableMesh = new r7());
        let a = n.batchableMesh;
        e.didViewUpdate && (this._updateBatchableMesh(e), a.geometry = i, a.renderable = e, a.transform = e.groupTransform, a.setTexture(e._texture)), a.roundPixels = this._renderer._roundPixels | e._roundPixels, r.addToBatch(a, t);
      } else r.break(t), n.shader || (n.shader = new nx()), this.updateRenderable(e), t.add(e);
    }
    execute(e) {
      let t = this._renderer,
        {
          shader: r
        } = this._getTilingSpriteData(e);
      r.groups[0] = t.globalUniforms.bindGroup;
      let n = r.resources.localUniforms.uniforms;
      n.uTransformMatrix = e.groupTransform, n.uRound = t._roundPixels | e._roundPixels, (0, r5.color32BitToUniform)(e.groupColorAlpha, n.uColor, 0), this._state.blendMode = (0, r6.getAdjustedBlendModeBlend)(e.groupBlendMode, e.texture._source), t.encoder.draw({
        geometry: nR,
        shader: r,
        state: this._state
      });
    }
    updateRenderable(e) {
      let t = this._getTilingSpriteData(e),
        {
          canBatch: r
        } = t;
      if (r) {
        let {
          batchableMesh: r
        } = t;
        e.didViewUpdate && this._updateBatchableMesh(e), r._batcher.updateElement(r);
      } else if (e.didViewUpdate) {
        let {
          shader: r
        } = t;
        r.updateUniforms(e.width, e.height, e._tileTransform.matrix, e.anchor.x, e.anchor.y, e.texture);
      }
    }
    _getTilingSpriteData(e) {
      return e._gpuData[this._renderer.uid] || this._initTilingSpriteData(e);
    }
    _initTilingSpriteData(e) {
      let t = new nE();
      return t.renderable = e, e._gpuData[this._renderer.uid] = t, this._managedTilingSprites.add(e), t;
    }
    _updateBatchableMesh(e) {
      let {
          geometry: t
        } = this._getTilingSpriteData(e),
        r = e.texture.source.style;
      "repeat" !== r.addressMode && (r.addressMode = "repeat", r.update()), nv(e, t.uvs), ny(e, t.positions);
    }
    destroy() {
      this._managedTilingSprites.destroy(), this._renderer = null;
    }
    _updateCanBatch(e) {
      let t = this._getTilingSpriteData(e),
        r = e.texture,
        n = !0;
      return this._renderer.type === rc.RendererType.WEBGL && (n = this._renderer.context.supports.nonPowOf2wrapping), t.canBatch = r.textureMatrix.isSimple && (n || r.source.isPowerOfTwo), t.canBatch;
    }
  }
  nA.extension = {
    type: [v.ExtensionType.WebGLPipes, v.ExtensionType.WebGPUPipes],
    name: "tilingSprite"
  }, v.extensions.add(nd), v.extensions.add(nA);
  let nM = class e extends ni.ViewContainer {
    constructor(...t) {
      let r = t[0] || {};
      r instanceof G.Texture && (r = {
        texture: r
      }), t.length > 1 && ((0, rd.deprecation)(rd.v8_0_0, "use new TilingSprite({ texture, width:100, height:100 }) instead"), r.width = t[1], r.height = t[2]);
      const {
        texture: n,
        anchor: i,
        tilePosition: a,
        tileScale: o,
        tileRotation: s,
        width: l,
        height: u,
        applyAnchorToTexture: c,
        roundPixels: d,
        ...h
      } = (r = {
        ...e.defaultOptions,
        ...r
      }) ?? {};
      super({
        label: "TilingSprite",
        ...h
      }), this.renderPipeId = "tilingSprite", this.batched = !0, this.allowChildren = !1, this._anchor = new rL.ObservablePoint({
        _onUpdate: () => {
          this.onViewUpdate();
        }
      }), this.applyAnchorToTexture = c, this.texture = n, this._width = l ?? n.width, this._height = u ?? n.height, this._tileTransform = new nn({
        observer: {
          _onUpdate: () => this.onViewUpdate()
        }
      }), i && (this.anchor = i), this.tilePosition = a, this.tileScale = o, this.tileRotation = s, this.roundPixels = d ?? !1;
    }
    static from(t, r = {}) {
      return new e("string" == typeof t ? {
        texture: ec.Cache.get(t),
        ...r
      } : {
        texture: t,
        ...r
      });
    }
    get uvRespectAnchor() {
      return (0, rd.deprecation)(rd.v8_0_0, "uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"), this.applyAnchorToTexture;
    }
    set uvRespectAnchor(e) {
      (0, rd.deprecation)(rd.v8_0_0, "uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"), this.applyAnchorToTexture = e;
    }
    get clampMargin() {
      return this._texture.textureMatrix.clampMargin;
    }
    set clampMargin(e) {
      this._texture.textureMatrix.clampMargin = e;
    }
    get anchor() {
      return this._anchor;
    }
    set anchor(e) {
      "number" == typeof e ? this._anchor.set(e) : this._anchor.copyFrom(e);
    }
    get tilePosition() {
      return this._tileTransform.position;
    }
    set tilePosition(e) {
      this._tileTransform.position.copyFrom(e);
    }
    get tileScale() {
      return this._tileTransform.scale;
    }
    set tileScale(e) {
      "number" == typeof e ? this._tileTransform.scale.set(e) : this._tileTransform.scale.copyFrom(e);
    }
    set tileRotation(e) {
      this._tileTransform.rotation = e;
    }
    get tileRotation() {
      return this._tileTransform.rotation;
    }
    get tileTransform() {
      return this._tileTransform;
    }
    set texture(e) {
      e || (e = G.Texture.EMPTY);
      let t = this._texture;
      t !== e && (t && t.dynamic && t.off("update", this.onViewUpdate, this), e.dynamic && e.on("update", this.onViewUpdate, this), this._texture = e, this.onViewUpdate());
    }
    get texture() {
      return this._texture;
    }
    set width(e) {
      this._width = e, this.onViewUpdate();
    }
    get width() {
      return this._width;
    }
    set height(e) {
      this._height = e, this.onViewUpdate();
    }
    get height() {
      return this._height;
    }
    setSize(e, t) {
      "object" == typeof e && (t = e.height ?? e.width, e = e.width), this._width = e, this._height = t ?? e, this.onViewUpdate();
    }
    getSize(e) {
      return e || (e = {}), e.width = this._width, e.height = this._height, e;
    }
    updateBounds() {
      let e = this._bounds,
        t = this._anchor,
        r = this._width,
        n = this._height;
      e.minX = -t._x * r, e.maxX = e.minX + r, e.minY = -t._y * n, e.maxY = e.minY + n;
    }
    containsPoint(e) {
      let t = this._width,
        r = this._height,
        n = -t * this._anchor._x,
        i = 0;
      return !!(e.x >= n) && !!(e.x <= n + t) && (i = -r * this._anchor._y, !!(e.y >= i) && !!(e.y <= i + r)) || !1;
    }
    destroy(e = !1) {
      if (super.destroy(e), this._anchor = null, this._tileTransform = null, this._bounds = null, "boolean" == typeof e ? e : e?.texture) {
        let t = "boolean" == typeof e ? e : e?.textureSource;
        this._texture.destroy(t);
      }
      this._texture = null;
    }
  };
  nM.defaultOptions = {
    texture: G.Texture.EMPTY,
    anchor: {
      x: 0,
      y: 0
    },
    tilePosition: {
      x: 0,
      y: 0
    },
    tileScale: {
      x: 1,
      y: 1
    },
    tileRotation: 0,
    applyAnchorToTexture: !1
  };
  var nC = e.i(602699),
    nG = tX;
  class nw extends nG.ViewContainer {
    constructor(e, t) {
      const {
        text: r,
        resolution: n,
        style: i,
        anchor: a,
        width: o,
        height: s,
        roundPixels: l,
        ...u
      } = e;
      super({
        ...u
      }), this.batched = !0, this._resolution = null, this._autoResolution = !0, this._didTextUpdate = !0, this._styleClass = t, this.text = r ?? "", this.style = i, this.resolution = n ?? null, this.allowChildren = !1, this._anchor = new rL.ObservablePoint({
        _onUpdate: () => {
          this.onViewUpdate();
        }
      }), a && (this.anchor = a), this.roundPixels = l ?? !1, void 0 !== o && (this.width = o), void 0 !== s && (this.height = s);
    }
    get anchor() {
      return this._anchor;
    }
    set anchor(e) {
      "number" == typeof e ? this._anchor.set(e) : this._anchor.copyFrom(e);
    }
    set text(e) {
      e = e.toString(), this._text !== e && (this._text = e, this.onViewUpdate());
    }
    get text() {
      return this._text;
    }
    set resolution(e) {
      this._autoResolution = null === e, this._resolution = e, this.onViewUpdate();
    }
    get resolution() {
      return this._resolution;
    }
    get style() {
      return this._style;
    }
    set style(e) {
      e || (e = {}), this._style?.off("update", this.onViewUpdate, this), e instanceof this._styleClass ? this._style = e : this._style = new this._styleClass(e), this._style.on("update", this.onViewUpdate, this), this.onViewUpdate();
    }
    get width() {
      return Math.abs(this.scale.x) * this.bounds.width;
    }
    set width(e) {
      this._setWidth(e, this.bounds.width);
    }
    get height() {
      return Math.abs(this.scale.y) * this.bounds.height;
    }
    set height(e) {
      this._setHeight(e, this.bounds.height);
    }
    getSize(e) {
      return e || (e = {}), e.width = Math.abs(this.scale.x) * this.bounds.width, e.height = Math.abs(this.scale.y) * this.bounds.height, e;
    }
    setSize(e, t) {
      "object" == typeof e ? (t = e.height ?? e.width, e = e.width) : t ?? (t = e), void 0 !== e && this._setWidth(e, this.bounds.width), void 0 !== t && this._setHeight(t, this.bounds.height);
    }
    containsPoint(e) {
      let t = this.bounds.width,
        r = this.bounds.height,
        n = -t * this.anchor.x,
        i = 0;
      return !!(e.x >= n) && !!(e.x <= n + t) && (i = -r * this.anchor.y, !!(e.y >= i) && !!(e.y <= i + r)) || !1;
    }
    onViewUpdate() {
      this.didViewUpdate || (this._didTextUpdate = !0), super.onViewUpdate();
    }
    destroy(e = !1) {
      super.destroy(e), this.owner = null, this._bounds = null, this._anchor = null, ("boolean" == typeof e ? e : e?.style) && this._style.destroy(e), this._style = null, this._text = null;
    }
    get styleKey() {
      return `${this._text}:${this._style.styleKey}:${this._resolution}`;
    }
  }
  function nD(e, t) {
    let r = e[0] ?? {};
    return ("string" == typeof r || e[1]) && ((0, rd.deprecation)(rd.v8_0_0, `use new ${t}({ text: "hi!", style }) instead`), r = {
      text: r,
      style: e[1]
    }), r;
  }
  var nP = e.i(963345);
  let nO = null,
    nB = null;
  function nF(e, t, r) {
    for (let n = 0, i = 4 * r * t; n < t; ++n, i += 4) if (0 !== e[i + 3]) return !1;
    return !0;
  }
  function nI(e, t, r, n, i) {
    let a = 4 * t;
    for (let t = n, o = n * a + 4 * r; t <= i; ++t, o += a) if (0 !== e[o + 3]) return !1;
    return !0;
  }
  function nU(...e) {
    let t = e[0];
    t.canvas || (t = {
      canvas: e[0],
      resolution: e[1]
    });
    let {
        canvas: r
      } = t,
      n = Math.min(t.resolution ?? 1, 1),
      i = t.width ?? r.width,
      a = t.height ?? r.height,
      o = t.output;
    if (nO || ((nB = (nO = eq.DOMAdapter.get().createCanvas(256, 128)).getContext("2d", {
      willReadFrequently: !0
    })).globalCompositeOperation = "copy", nB.globalAlpha = 1), (nO.width < i || nO.height < a) && (nO.width = (0, rI.nextPow2)(i), nO.height = (0, rI.nextPow2)(a)), !nB) throw TypeError("Failed to get canvas 2D context");
    nB.drawImage(r, 0, 0, i, a, 0, 0, i * n, a * n);
    let s = nB.getImageData(0, 0, i, a).data,
      l = 0,
      u = 0,
      c = i - 1,
      d = a - 1;
    for (; u < a && nF(s, i, u);) ++u;
    if (u === a) return tG.Rectangle.EMPTY;
    for (; nF(s, i, d);) --d;
    for (; nI(s, i, l, u, d);) ++l;
    for (; nI(s, i, c, u, d);) --c;
    return ++c, ++d, nB.globalCompositeOperation = "source-over", nB.strokeRect(l, u, c - l, d - u), nB.globalCompositeOperation = "copy", o ?? (o = new tG.Rectangle()), o.set(l / n, u / n, (c - l) / n, (d - u) / n), o;
  }
  var nL = e.i(556700),
    nN = e.i(974543),
    nX = e.i(110477);
  let nk = new tG.Rectangle();
  function nH(e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) 32 === e.charCodeAt(r) && t++;
    return t;
  }
  let nV = new class {
    getCanvasAndContext(e) {
      let {
          text: t,
          style: r,
          resolution: n = 1
        } = e,
        i = r._getFinalPadding(),
        a = nL.CanvasTextMetrics.measureText(t || " ", r),
        o = Math.ceil(Math.ceil(Math.max(1, a.width) + 2 * i) * n),
        s = Math.ceil(Math.ceil(Math.max(1, a.height) + 2 * i) * n),
        l = nP.CanvasPool.getOptimalCanvasAndContext(o, s);
      this._renderTextToCanvas(r, i, n, l, a);
      let u = r.trim ? nU({
        canvas: l.canvas,
        width: o,
        height: s,
        resolution: 1,
        output: nk
      }) : nk.set(0, 0, o, s);
      return {
        canvasAndContext: l,
        frame: u
      };
    }
    returnCanvasAndContext(e) {
      nP.CanvasPool.returnCanvasAndContext(e);
    }
    _renderTextToCanvas(e, t, r, n, i) {
      let a, o;
      if (i.runsByLine && i.runsByLine.length > 0) return void this._renderTaggedTextToCanvas(i, e, t, r, n);
      let {
          canvas: s,
          context: l
        } = n,
        u = (0, nN.fontStringFromTextStyle)(e),
        c = i.lines,
        d = i.lineHeight,
        h = i.lineWidths,
        p = i.maxLineWidth,
        f = i.fontProperties,
        m = s.height;
      if (l.resetTransform(), l.scale(r, r), l.textBaseline = e.textBaseline, e._stroke?.width) {
        let t = e._stroke;
        l.lineWidth = t.width, l.miterLimit = t.miterLimit, l.lineJoin = t.join, l.lineCap = t.cap;
      }
      l.font = u;
      let g = e.dropShadow ? 2 : 1,
        b = (e._stroke?.width ?? 0) / 2,
        _ = (d - f.fontSize) / 2;
      d - f.fontSize < 0 && (_ = 0);
      for (let s = 0; s < g; ++s) {
        let u = e.dropShadow && 0 === s,
          g = u ? Math.ceil(Math.max(1, m) + 2 * t) : 0,
          x = g * r;
        if (u) this._setupDropShadow(l, e, r, x);else {
          let r = e._gradientBounds,
            n = e._gradientOffset;
          if (r) {
            let a = {
              width: r.width,
              height: r.height,
              lineHeight: r.height,
              lines: i.lines
            };
            this._setFillAndStrokeStyles(l, e, a, t, b, n?.x ?? 0, n?.y ?? 0);
          } else n ? this._setFillAndStrokeStyles(l, e, i, t, b, n.x, n.y) : this._setFillAndStrokeStyles(l, e, i, t, b);
          l.shadowColor = "rgba(0,0,0,0)";
        }
        for (let r = 0; r < c.length; r++) {
          a = b, o = b + r * d + f.ascent + _, a += this._getAlignmentOffset(h[r], p, e.align);
          let i = 0;
          if ("justify" === e.align && e.wordWrap && r < c.length - 1) {
            let e = nH(c[r]);
            e > 0 && (i = (p - h[r]) / e);
          }
          e._stroke?.width && this._drawLetterSpacing(c[r], e, n, a + t, o + t - g, !0, i), void 0 !== e._fill && this._drawLetterSpacing(c[r], e, n, a + t, o + t - g, !1, i);
        }
      }
    }
    _renderTaggedTextToCanvas(e, t, r, n, i) {
      let {
          canvas: a,
          context: o
        } = i,
        {
          runsByLine: s,
          lineWidths: l,
          maxLineWidth: u,
          lineAscents: c,
          lineHeights: d,
          hasDropShadow: h
        } = e,
        p = a.height;
      o.resetTransform(), o.scale(n, n), o.textBaseline = t.textBaseline;
      let f = h ? 2 : 1,
        m = t._stroke?.width ?? 0;
      for (let e of s) for (let t of e) {
        let e = t.style._stroke?.width ?? 0;
        e > m && (m = e);
      }
      let g = m / 2,
        b = [];
      for (let e = 0; e < s.length; e++) {
        let t = s[e],
          r = [];
        for (let e of t) {
          let t = (0, nN.fontStringFromTextStyle)(e.style);
          o.font = t, r.push({
            width: nL.CanvasTextMetrics._measureText(e.text, e.style.letterSpacing, o),
            font: t
          });
        }
        b.push(r);
      }
      for (let e = 0; e < f; ++e) {
        let a = h && 0 === e,
          f = a ? Math.ceil(Math.max(1, p) + 2 * r) : 0,
          m = f * n;
        a || (o.shadowColor = "rgba(0,0,0,0)");
        let _ = g;
        for (let e = 0; e < s.length; e++) {
          let h = s[e],
            p = l[e],
            x = c[e],
            T = d[e],
            y = b[e],
            S = g;
          S += this._getAlignmentOffset(p, u, t.align);
          let v = 0;
          if ("justify" === t.align && t.wordWrap && e < s.length - 1) {
            let e = 0;
            for (let t of h) e += nH(t.text);
            e > 0 && (v = (u - p) / e);
          }
          let R = _ + x,
            E = S + r;
          for (let e = 0; e < h.length; e++) {
            let t = h[e],
              {
                width: s,
                font: l
              } = y[e];
            if (o.font = l, o.textBaseline = t.style.textBaseline, t.style._stroke?.width) {
              let e = t.style._stroke;
              if (o.lineWidth = e.width, o.miterLimit = e.miterLimit, o.lineJoin = e.join, o.lineCap = e.cap, a) {
                if (t.style.dropShadow) this._setupDropShadow(o, t.style, n, m);else {
                  E += s + nH(t.text) * v;
                  continue;
                }
              } else {
                let n = nL.CanvasTextMetrics.measureFont(l),
                  i = t.style.lineHeight || n.fontSize,
                  a = {
                    width: s,
                    height: i,
                    lineHeight: i,
                    lines: [t.text]
                  };
                o.strokeStyle = (0, nX.getCanvasFillStyle)(e, o, a, 2 * r, E - r, _);
              }
              this._drawLetterSpacing(t.text, t.style, i, E, R + r - f, !0, v);
            }
            E += s + nH(t.text) * v;
          }
          E = S + r;
          for (let e = 0; e < h.length; e++) {
            let t = h[e],
              {
                width: s,
                font: l
              } = y[e];
            if (o.font = l, o.textBaseline = t.style.textBaseline, void 0 !== t.style._fill) {
              if (a) {
                if (t.style.dropShadow) this._setupDropShadow(o, t.style, n, m);else {
                  E += s + nH(t.text) * v;
                  continue;
                }
              } else {
                let e = nL.CanvasTextMetrics.measureFont(l),
                  n = t.style.lineHeight || e.fontSize,
                  i = {
                    width: s,
                    height: n,
                    lineHeight: n,
                    lines: [t.text]
                  };
                o.fillStyle = (0, nX.getCanvasFillStyle)(t.style._fill, o, i, 2 * r, E - r, _);
              }
              this._drawLetterSpacing(t.text, t.style, i, E, R + r - f, !1, v);
            }
            E += s + nH(t.text) * v;
          }
          _ += T;
        }
      }
    }
    _setFillAndStrokeStyles(e, t, r, n, i, a = 0, o = 0) {
      e.fillStyle = t._fill ? (0, nX.getCanvasFillStyle)(t._fill, e, r, 2 * n, a, o) : null, t._stroke?.width && (e.strokeStyle = (0, nX.getCanvasFillStyle)(t._stroke, e, r, i + 2 * n, a, o));
    }
    _setupDropShadow(e, t, r, n) {
      e.fillStyle = "black", e.strokeStyle = "black";
      let i = t.dropShadow,
        a = i.color,
        o = i.alpha;
      e.shadowColor = eN.Color.shared.setValue(a).setAlpha(o).toRgbaString();
      let s = i.blur * r,
        l = i.distance * r;
      e.shadowBlur = s, e.shadowOffsetX = Math.cos(i.angle) * l, e.shadowOffsetY = Math.sin(i.angle) * l + n;
    }
    _getAlignmentOffset(e, t, r) {
      return "right" === r ? t - e : "center" === r ? (t - e) / 2 : 0;
    }
    _drawLetterSpacing(e, t, r, n, i, a = !1, o = 0) {
      let {
          context: s
        } = r,
        l = t.letterSpacing,
        u = !1;
      if (nL.CanvasTextMetrics.experimentalLetterSpacingSupported && (nL.CanvasTextMetrics.experimentalLetterSpacing ? (s.letterSpacing = `${l}px`, s.textLetterSpacing = `${l}px`, u = !0) : (s.letterSpacing = "0px", s.textLetterSpacing = "0px")), (0 === l || u) && 0 === o) return void (a ? s.strokeText(e, n, i) : s.fillText(e, n, i));
      if (0 !== o && (0 === l || u)) {
        let t = e.split(" "),
          r = n,
          l = s.measureText(" ").width;
        for (let e = 0; e < t.length; e++) a ? s.strokeText(t[e], r, i) : s.fillText(t[e], r, i), r += s.measureText(t[e]).width + l + o;
        return;
      }
      let c = n,
        d = nL.CanvasTextMetrics.graphemeSegmenter(e),
        h = s.measureText(e).width,
        p = 0;
      for (let e = 0; e < d.length; ++e) {
        let t = d[e];
        a ? s.strokeText(t, c, i) : s.fillText(t, c, i);
        let r = "";
        for (let t = e + 1; t < d.length; ++t) r += d[t];
        c += h - (p = s.measureText(r).width) + l, " " === t && (c += o), h = p;
      }
    }
  }();
  var n$ = e.i(56292),
    nq = e.i(372370);
  function nz(e, t) {
    let {
        texture: r,
        bounds: n
      } = e,
      i = t._style._getFinalPadding();
    (0, nq.updateQuadBounds)(n, t._anchor, r);
    let a = t._anchor._x * i * 2,
      o = t._anchor._y * i * 2;
    n.minX -= i - a, n.minY -= i - o, n.maxX -= i - a, n.maxY -= i - o;
  }
  var nW = e.i(267827);
  class nY extends nW.BatchableSprite {}
  class nj {
    constructor(e) {
      this._renderer = e, e.runners.resolutionChange.add(this), this._managedTexts = new nh.GCManagedHash({
        renderer: e,
        type: "renderable",
        onUnload: this.onTextUnload.bind(this),
        name: "canvasText"
      });
    }
    resolutionChange() {
      for (let e in this._managedTexts.items) {
        let t = this._managedTexts.items[e];
        t?._autoResolution && t.onViewUpdate();
      }
    }
    validateRenderable(e) {
      let t = this._getGpuText(e),
        r = e.styleKey;
      return t.currentKey !== r || e._didTextUpdate;
    }
    addRenderable(e, t) {
      let r = this._getGpuText(e);
      if (e._didTextUpdate) {
        let t = e._autoResolution ? this._renderer.resolution : e.resolution;
        (r.currentKey !== e.styleKey || e._resolution !== t) && this._updateGpuText(e), e._didTextUpdate = !1, nz(r, e);
      }
      this._renderer.renderPipes.batch.addToBatch(r, t);
    }
    updateRenderable(e) {
      let t = this._getGpuText(e);
      t._batcher.updateElement(t);
    }
    _updateGpuText(e) {
      let t = this._getGpuText(e);
      t.texture && this._renderer.canvasText.decreaseReferenceCount(t.currentKey), e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution, t.texture = this._renderer.canvasText.getManagedTexture(e), t.currentKey = e.styleKey;
    }
    _getGpuText(e) {
      return e._gpuData[this._renderer.uid] || this.initGpuText(e);
    }
    initGpuText(e) {
      let t = new nY();
      return t.currentKey = "--", t.renderable = e, t.transform = e.groupTransform, t.bounds = {
        minX: 0,
        maxX: 1,
        minY: 0,
        maxY: 0
      }, t.roundPixels = this._renderer._roundPixels | e._roundPixels, e._gpuData[this._renderer.uid] = t, this._managedTexts.add(e), t;
    }
    onTextUnload(e) {
      let t = e._gpuData[this._renderer.uid];
      if (!t) return;
      let {
        canvasText: r
      } = this._renderer;
      r.getReferenceCount(t.currentKey) > 0 ? r.decreaseReferenceCount(t.currentKey) : t.texture && r.returnTexture(t.texture);
    }
    destroy() {
      this._managedTexts.destroy(), this._renderer = null;
    }
  }
  nj.extension = {
    type: [v.ExtensionType.WebGLPipes, v.ExtensionType.WebGPUPipes, v.ExtensionType.CanvasPipes],
    name: "text"
  };
  var nK = e.i(294780);
  class nQ {
    constructor(e, t) {
      this._activeTextures = {}, this._renderer = e, this._retainCanvasContext = t;
    }
    getTexture(e, t, r, n) {
      "string" == typeof e && ((0, rd.deprecation)("8.0.0", "CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"), e = {
        text: e,
        style: r,
        resolution: t
      }), e.style instanceof n$.TextStyle || (e.style = new n$.TextStyle(e.style)), e.textureStyle instanceof nC.TextureStyle || (e.textureStyle = new nC.TextureStyle(e.textureStyle)), "string" != typeof e.text && (e.text = e.text.toString());
      let {
          text: i,
          style: a,
          textureStyle: o,
          autoGenerateMipmaps: s
        } = e,
        l = e.resolution ?? this._renderer.resolution,
        {
          frame: u,
          canvasAndContext: c
        } = nV.getCanvasAndContext({
          text: i,
          style: a,
          resolution: l
        }),
        d = (0, nK.getPo2TextureFromSource)(c.canvas, u.width, u.height, l, s);
      if (o && (d.source.style = o), a.trim && (u.pad(a.padding), d.frame.copyFrom(u), d.frame.scale(1 / l), d.updateUvs()), a.filters) {
        let e = this._applyFilters(d, a.filters);
        return this.returnTexture(d), nV.returnCanvasAndContext(c), e;
      }
      return this._renderer.texture.initSource(d._source), this._retainCanvasContext || nV.returnCanvasAndContext(c), d;
    }
    returnTexture(e) {
      let t = e.source,
        r = t.resource;
      if (this._retainCanvasContext && r?.getContext) {
        let e = r.getContext("2d");
        e && nV.returnCanvasAndContext({
          canvas: r,
          context: e
        });
      }
      t.resource = null, t.uploadMethodId = "unknown", t.alphaMode = "no-premultiply-alpha", ru.TexturePool.returnTexture(e, !0);
    }
    renderTextToCanvas() {
      (0, rd.deprecation)("8.10.0", "CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead");
    }
    getManagedTexture(e) {
      e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution;
      let t = e.styleKey;
      if (this._activeTextures[t]) return this._increaseReferenceCount(t), this._activeTextures[t].texture;
      let r = this.getTexture({
        text: e.text,
        style: e.style,
        resolution: e._resolution,
        textureStyle: e.textureStyle,
        autoGenerateMipmaps: e.autoGenerateMipmaps
      });
      return this._activeTextures[t] = {
        texture: r,
        usageCount: 1
      }, r;
    }
    decreaseReferenceCount(e) {
      let t = this._activeTextures[e];
      t && (t.usageCount--, 0 === t.usageCount && (this.returnTexture(t.texture), this._activeTextures[e] = null));
    }
    getReferenceCount(e) {
      return this._activeTextures[e]?.usageCount ?? 0;
    }
    _increaseReferenceCount(e) {
      this._activeTextures[e].usageCount++;
    }
    _applyFilters(e, t) {
      let r = this._renderer.renderTarget.renderTarget,
        n = this._renderer.filter.generateFilteredTexture({
          texture: e,
          filters: t
        });
      return this._renderer.renderTarget.bind(r, !1), n;
    }
    destroy() {
      for (let e in this._renderer = null, this._activeTextures) this._activeTextures[e] && this.returnTexture(this._activeTextures[e].texture);
      this._activeTextures = null;
    }
  }
  class nZ extends nQ {
    constructor(e) {
      super(e, !0);
    }
  }
  nZ.extension = {
    type: [v.ExtensionType.CanvasSystem],
    name: "canvasText"
  };
  class nJ extends nQ {
    constructor(e) {
      super(e, !1);
    }
  }
  nJ.extension = {
    type: [v.ExtensionType.WebGLSystem, v.ExtensionType.WebGPUSystem],
    name: "canvasText"
  }, v.extensions.add(nZ), v.extensions.add(nJ), v.extensions.add(nj);
  class n0 extends nw {
    constructor(...e) {
      const t = nD(e, "Text");
      super(t, n$.TextStyle), this.renderPipeId = "text", t.textureStyle && (this.textureStyle = t.textureStyle instanceof nC.TextureStyle ? t.textureStyle : new nC.TextureStyle(t.textureStyle)), this.autoGenerateMipmaps = t.autoGenerateMipmaps ?? eV.TextureSource.defaultOptions.autoGenerateMipmaps;
    }
    updateBounds() {
      let e = this._bounds,
        t = this._anchor,
        r = 0,
        n = 0;
      if (this._style.trim) {
        let {
          frame: e,
          canvasAndContext: t
        } = nV.getCanvasAndContext({
          text: this.text,
          style: this._style,
          resolution: 1
        });
        nV.returnCanvasAndContext(t), r = e.width, n = e.height;
      } else {
        let e = nL.CanvasTextMetrics.measureText(this._text, this._style);
        r = e.width, n = e.height;
      }
      e.minX = -t._x * r, e.maxX = e.minX + r, e.minY = -t._y * n, e.maxY = e.minY + n;
    }
  }
  class n3 extends rY {
    resolveQueueItem(e, t) {
      return e instanceof r$.Container ? this.resolveContainerQueueItem(e, t) : e instanceof eV.TextureSource || e instanceof G.Texture ? t.push(e.source) : e instanceof rK.GraphicsContext && t.push(e), null;
    }
    resolveContainerQueueItem(e, t) {
      e instanceof rR.Sprite || e instanceof nM || e instanceof nt ? t.push(e.texture.source) : e instanceof n0 ? t.push(e) : e instanceof rj.Graphics ? t.push(e.context) : e instanceof nr.AnimatedSprite && e.textures.forEach(e => {
        e.source ? t.push(e.source) : t.push(e.texture.source);
      });
    }
    resolveGraphicsContextQueueItem(e) {
      this.renderer.graphicsContext.getGpuContext(e);
      let {
        instructions: t
      } = e;
      for (let e of t) if ("texture" === e.action) {
        let {
          image: t
        } = e.data;
        return t.source;
      } else if ("fill" === e.action) {
        let {
          texture: t
        } = e.data.style;
        return t.source;
      }
      return null;
    }
  }
  var n2 = e.i(562140),
    n1 = e.i(791526),
    n8 = rj,
    n4 = e.i(471272);
  class n6 extends n8.Graphics {
    destroy() {
      this.context.customShader && this.context.customShader.destroy(), super.destroy();
    }
  }
  class n5 {
    constructor(e) {
      this._renderer = e, this._managedBitmapTexts = new nh.GCManagedHash({
        renderer: e,
        type: "renderable",
        priority: -2,
        name: "bitmapText"
      });
    }
    validateRenderable(e) {
      let t = this._getGpuBitmapText(e);
      return this._renderer.renderPipes.graphics.validateRenderable(t);
    }
    addRenderable(e, t) {
      let r = this._getGpuBitmapText(e);
      n7(e, r), e._didTextUpdate && (e._didTextUpdate = !1, this._updateContext(e, r)), this._renderer.renderPipes.graphics.addRenderable(r, t), r.context.customShader && this._updateDistanceField(e);
    }
    updateRenderable(e) {
      let t = this._getGpuBitmapText(e);
      n7(e, t), this._renderer.renderPipes.graphics.updateRenderable(t), t.context.customShader && this._updateDistanceField(e);
    }
    _updateContext(e, t) {
      let {
          context: r
        } = t,
        n = n1.BitmapFontManager.getFont(e.text, e._style);
      if (r.clear(), "none" !== n.distanceField.type) {
        let e = this.getSdfShader();
        e && !r.customShader && (r.customShader = e);
      }
      let i = nL.CanvasTextMetrics.graphemeSegmenter(e.text),
        a = e._style,
        o = n.baseLineOffset,
        s = (0, n4.getBitmapTextLayout)(i, a, n, !0),
        l = a.padding,
        u = s.scale,
        c = s.width,
        d = s.height + s.offsetY;
      a._stroke && (c += a._stroke.width / u, d += a._stroke.width / u), r.translate(-e._anchor._x * c - l, -e._anchor._y * d - l).scale(u, u);
      let h = n.applyFillAsTint ? a._fill.color : 0xffffff,
        p = n.fontMetrics.fontSize,
        f = n.lineHeight;
      a.lineHeight && (p = a.fontSize / u, f = a.lineHeight / u);
      let m = (f - p) / 2;
      m - n.baseLineOffset < 0 && (m = 0);
      for (let e = 0; e < s.lines.length; e++) {
        let t = s.lines[e];
        for (let e = 0; e < t.charPositions.length; e++) {
          let i = t.chars[e],
            a = n.chars[i];
          if (a?.texture) {
            let n = a.texture;
            r.texture(n, h, Math.round(t.charPositions[e] + a.xOffset), Math.round(o + a.yOffset + m), n.orig.width, n.orig.height);
          }
        }
        o += f;
      }
    }
    _getGpuBitmapText(e) {
      return e._gpuData[this._renderer.uid] || this.initGpuText(e);
    }
    initGpuText(e) {
      let t = new n6();
      return e._gpuData[this._renderer.uid] = t, this._updateContext(e, t), this._managedBitmapTexts.add(e), t;
    }
    _updateDistanceField(e) {
      let t = this._getGpuBitmapText(e).context,
        r = e._style.fontFamily,
        n = ec.Cache.get(`${r}-bitmap`),
        {
          a: i,
          b: a,
          c: o,
          d: s
        } = e.groupTransform,
        l = (Math.abs(Math.sqrt(i * i + a * a)) + Math.abs(Math.sqrt(o * o + s * s))) / 2,
        u = n.baseRenderedFontSize / e._style.fontSize,
        c = l * n.distanceField.range * (1 / u);
      t.customShader.resources.localUniforms.uniforms.uDistance = c;
    }
    destroy() {
      this._managedBitmapTexts.destroy(), this._renderer = null, this._managedBitmapTexts = null;
    }
  }
  function n7(e, t) {
    t.groupTransform = e.groupTransform, t.groupColorAlpha = e.groupColorAlpha, t.groupColor = e.groupColor, t.groupBlendMode = e.groupBlendMode, t.globalDisplayStatus = e.globalDisplayStatus, t.groupTransform = e.groupTransform, t.localDisplayStatus = e.localDisplayStatus, t.groupAlpha = e.groupAlpha, t._roundPixels = e._roundPixels;
  }
  class n9 extends n5 {
    getSdfShader() {
      return null;
    }
  }
  n9.extension = {
    type: [v.ExtensionType.CanvasPipes],
    name: "bitmapText"
  };
  var ie = e.i(815343),
    it = e.i(229972),
    ir = e.i(403976),
    ii = ng;
  let ia = {
      name: "local-uniform-msdf-bit",
      vertex: {
        header: `
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,
        main: `
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,
        end: `
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `
      },
      fragment: {
        header: `
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,
        main: `
            outColor = vec4<f32>(calculateMSDFAlpha(outColor, vColor, localUniforms.uDistance));
        `
      }
    },
    io = {
      name: "local-uniform-msdf-bit",
      vertex: {
        header: `
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,
        main: `
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `,
        end: `
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `
      },
      fragment: {
        header: `
            uniform float uDistance;
         `,
        main: `
            outColor = vec4(calculateMSDFAlpha(outColor, vColor, uDistance));
        `
      }
    },
    is = {
      name: "msdf-bit",
      fragment: {
        header: `
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, shapeColor:vec4<f32>, distance:f32) -> f32 {

                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));

                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                var luma: f32 = dot(shapeColor.rgb, vec3<f32>(0.299, 0.587, 0.114));
                var gamma: f32 = mix(1.0, 1.0 / 2.2, luma);
                var coverage: f32 = pow(shapeColor.a * alpha, gamma);

                return coverage;

            }
        `
      }
    },
    il = {
      name: "msdf-bit",
      fragment: {
        header: `
            float calculateMSDFAlpha(vec4 msdfColor, vec4 shapeColor, float distance) {

                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));

                // SDF
                median = min(median, msdfColor.a);

                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);

                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                float luma = dot(shapeColor.rgb, vec3(0.299, 0.587, 0.114));
                float gamma = mix(1.0, 1.0 / 2.2, luma);
                float coverage = pow(shapeColor.a * alpha, gamma);

                return coverage;
            }
        `
      }
    };
  class iu extends ii.Shader {
    constructor(e) {
      const t = new C.UniformGroup({
        uColor: {
          value: new Float32Array([1, 1, 1, 1]),
          type: "vec4<f32>"
        },
        uTransformMatrix: {
          value: new tC.Matrix(),
          type: "mat3x3<f32>"
        },
        uDistance: {
          value: 4,
          type: "f32"
        },
        uRound: {
          value: 0,
          type: "f32"
        }
      });
      c ?? (c = (0, np.compileHighShaderGpuProgram)({
        name: "sdf-shader",
        bits: [ie.colorBit, (0, it.generateTextureBatchBit)(e), ia, is, nm.roundPixelsBit]
      })), d ?? (d = (0, np.compileHighShaderGlProgram)({
        name: "sdf-shader",
        bits: [ie.colorBitGl, (0, it.generateTextureBatchBitGl)(e), io, il, nm.roundPixelsBitGl]
      })), super({
        glProgram: d,
        gpuProgram: c,
        resources: {
          localUniforms: t,
          batchSamplers: (0, ir.getBatchSamplersUniformGroup)(e)
        }
      });
    }
  }
  class ic extends n5 {
    getSdfShader() {
      return new iu(this._renderer.limits.maxBatchableTextures);
    }
  }
  ic.extension = {
    type: [v.ExtensionType.WebGLPipes, v.ExtensionType.WebGPUPipes],
    name: "bitmapText"
  }, v.extensions.add(n9), v.extensions.add(ic);
  class id extends nw {
    constructor(...e) {
      var t;
      const r = nD(e, "BitmapText");
      r.style ?? (r.style = r.style || {}), (t = r.style).fill ?? (t.fill = 0xffffff), super(r, n$.TextStyle), this.renderPipeId = "bitmapText";
    }
    _onTouch(e) {
      for (let t in this._gcLastUsed = e, this._gpuData) this._gpuData[t]?._onTouch(e);
    }
    updateBounds() {
      let e = this._bounds,
        t = this._anchor,
        r = n1.BitmapFontManager.measureText(this.text, this._style),
        n = r.scale,
        i = r.offsetY * n,
        a = r.width * n,
        o = r.height * n,
        s = this._style._stroke;
      s && (a += s.width, o += s.width), e.minX = -t._x * a, e.maxX = e.minX + a, e.minY = -t._y * (o + i), e.maxY = e.minY + o;
    }
    set resolution(e) {
      null !== e && (0, n2.warn)("[BitmapText] dynamically updating the resolution is not supported. Resolution should be managed by the BitmapFont.");
    }
    get resolution() {
      return this._resolution;
    }
  }
  var ih = n$;
  function ip(e) {
    let t = e._stroke,
      r = e._fill,
      n = eN.Color.shared.setValue(r.color).setAlpha(r.alpha ?? 1).toHexa(),
      i = [`color: ${n}`, `font-size: ${e.fontSize}px`, `font-family: ${e.fontFamily}`, `font-weight: ${e.fontWeight}`, `font-style: ${e.fontStyle}`, `font-variant: ${e.fontVariant}`, `letter-spacing: ${e.letterSpacing}px`, `text-align: ${e.align}`, `padding: ${e.padding}px`, `white-space: ${"pre" === e.whiteSpace && e.wordWrap ? "pre-wrap" : e.whiteSpace}`, ...(e.lineHeight ? [`line-height: ${e.lineHeight}px`] : []), ...(e.wordWrap ? [`word-break: ${e.breakWords ? "break-word" : "normal"}`, `max-width: ${e.wordWrapWidth}px`] : []), ...(t ? [ig(t)] : []), ...(e.dropShadow ? [im(e.dropShadow)] : []), ...e.cssOverrides].join(";"),
      a = [`div { ${i} }`];
    return function (e, t) {
      for (let r in e) {
        let n = e[r],
          i = [];
        for (let e in n) i_[e] ? i.push(i_[e](n[e])) : ib[e] && i.push(ib[e].replace("{{VALUE}}", n[e]));
        t.push(`${r} { ${i.join(";")} }`);
      }
    }(e.tagStyles, a), a.join(" ");
  }
  function im(e) {
    let t = {
        ...e
      },
      r = eN.Color.shared.setValue(t.color).setAlpha(t.alpha ?? 1).toHexa(),
      n = Math.round(Math.cos(t.angle) * t.distance),
      i = Math.round(Math.sin(t.angle) * t.distance),
      a = `${n}px ${i}px`;
    return t.blur > 0 ? `text-shadow: ${a} ${t.blur}px ${r}` : `text-shadow: ${a} ${r}`;
  }
  function ig(e) {
    let t = eN.Color.shared.setValue(e.color).setAlpha(e.alpha ?? 1).toHexa();
    return `-webkit-text-stroke-width: ${e.width}px;-webkit-text-stroke-color: ${t};text-stroke-width: ${e.width}px;text-stroke-color: ${t};paint-order: stroke`;
  }
  let ib = {
      fontSize: "font-size: {{VALUE}}px",
      fontFamily: "font-family: {{VALUE}}",
      fontWeight: "font-weight: {{VALUE}}",
      fontStyle: "font-style: {{VALUE}}",
      fontVariant: "font-variant: {{VALUE}}",
      letterSpacing: "letter-spacing: {{VALUE}}px",
      align: "text-align: {{VALUE}}",
      padding: "padding: {{VALUE}}px",
      whiteSpace: "white-space: {{VALUE}}",
      lineHeight: "line-height: {{VALUE}}px",
      wordWrapWidth: "max-width: {{VALUE}}px"
    },
    i_ = {
      fill: e => `color: ${eN.Color.shared.setValue(e).toHexa()}`,
      breakWords: e => `word-break: ${e ? "break-all" : "normal"}`,
      stroke: ig,
      dropShadow: e => !0 === e ? im(n$.TextStyle.defaultDropShadow) : e && "object" == typeof e ? im({
        ...n$.TextStyle.defaultDropShadow,
        ...e
      }) : ""
    };
  class ix extends ih.TextStyle {
    constructor(e = {}) {
      super(e), this._cssOverrides = [], this.cssOverrides = e.cssOverrides ?? [], this.tagStyles = e.tagStyles ?? {};
    }
    get tagStyles() {
      return this._tagStyles;
    }
    set tagStyles(e) {
      this._tagStyles !== e && (this._tagStyles = e ?? {}, this.update());
    }
    set cssOverrides(e) {
      this._cssOverrides = e instanceof Array ? e : [e], this.update();
    }
    get cssOverrides() {
      return this._cssOverrides;
    }
    update() {
      this._cssStyle = null, super.update();
    }
    clone() {
      return new ix({
        align: this.align,
        breakWords: this.breakWords,
        dropShadow: this.dropShadow ? {
          ...this.dropShadow
        } : null,
        fill: this._fill,
        fontFamily: this.fontFamily,
        fontSize: this.fontSize,
        fontStyle: this.fontStyle,
        fontVariant: this.fontVariant,
        fontWeight: this.fontWeight,
        letterSpacing: this.letterSpacing,
        lineHeight: this.lineHeight,
        padding: this.padding,
        stroke: this._stroke,
        whiteSpace: this.whiteSpace,
        wordWrap: this.wordWrap,
        wordWrapWidth: this.wordWrapWidth,
        cssOverrides: this.cssOverrides,
        tagStyles: {
          ...this.tagStyles
        }
      });
    }
    get cssStyle() {
      return this._cssStyle || (this._cssStyle = ip(this)), this._cssStyle;
    }
    addOverride(...e) {
      let t = e.filter(e => !this.cssOverrides.includes(e));
      t.length > 0 && (this.cssOverrides.push(...t), this.update());
    }
    removeOverride(...e) {
      let t = e.filter(e => this.cssOverrides.includes(e));
      t.length > 0 && (this.cssOverrides = this.cssOverrides.filter(e => !t.includes(e)), this.update());
    }
    set fill(e) {
      "string" != typeof e && "number" != typeof e && (0, n2.warn)("[HTMLTextStyle] only color fill is not supported by HTMLText"), super.fill = e;
    }
    set stroke(e) {
      e && "string" != typeof e && "number" != typeof e && (0, n2.warn)("[HTMLTextStyle] only color stroke is not supported by HTMLText"), super.stroke = e;
    }
  }
  let iT = "http://www.w3.org/2000/svg",
    iy = "http://www.w3.org/1999/xhtml";
  class iS {
    constructor() {
      this.svgRoot = document.createElementNS(iT, "svg"), this.foreignObject = document.createElementNS(iT, "foreignObject"), this.domElement = document.createElementNS(iy, "div"), this.styleElement = document.createElementNS(iy, "style");
      const {
        foreignObject: e,
        svgRoot: t,
        styleElement: r,
        domElement: n
      } = this;
      e.setAttribute("width", "10000"), e.setAttribute("height", "10000"), e.style.overflow = "hidden", t.appendChild(e), e.appendChild(r), e.appendChild(n), this.image = eq.DOMAdapter.get().createImage();
    }
    destroy() {
      this.svgRoot.remove(), this.foreignObject.remove(), this.styleElement.remove(), this.domElement.remove(), this.image.src = "", this.image.remove(), this.svgRoot = null, this.foreignObject = null, this.styleElement = null, this.domElement = null, this.image = null, this.canvasAndContext = null;
    }
  }
  function iv(e, t, r, n) {
    n || (n = h || (h = new iS()));
    let {
      domElement: i,
      styleElement: a,
      svgRoot: o
    } = n;
    i.innerHTML = `<style>${t.cssStyle};</style><div style='padding:0'>${e}</div>`, i.setAttribute("style", "transform-origin: top left; display: inline-block"), r && (a.textContent = r), document.body.appendChild(o);
    let s = i.scrollWidth,
      l = i.scrollHeight;
    if (o.remove(), t.dropShadow) {
      let {
          distance: e,
          angle: r,
          blur: n
        } = t.dropShadow,
        i = Math.abs(Math.round(Math.cos(r) * e)),
        a = Math.abs(Math.round(Math.sin(r) * e));
      s += i + n, l += a + n;
    }
    let u = 2 * t.padding;
    return {
      width: s - u,
      height: l - u
    };
  }
  var iR = nW;
  class iE extends iR.BatchableSprite {
    constructor() {
      super(...arguments), this.generatingTexture = !1, this.currentKey = "--";
    }
    destroy() {
      this.texturePromise = null, this.generatingTexture = !1, this.currentKey = "--", super.destroy();
    }
  }
  class iA {
    constructor(e) {
      this._renderer = e, e.runners.resolutionChange.add(this), this._managedTexts = new nh.GCManagedHash({
        renderer: e,
        type: "renderable",
        onUnload: this.onTextUnload.bind(this),
        name: "htmlText"
      });
    }
    resolutionChange() {
      for (let e in this._managedTexts.items) {
        let t = this._managedTexts.items[e];
        t?._autoResolution && t.onViewUpdate();
      }
    }
    validateRenderable(e) {
      let t = this._getGpuText(e),
        r = e.styleKey;
      return t.currentKey !== r;
    }
    addRenderable(e, t) {
      let r = this._getGpuText(e);
      if (e._didTextUpdate) {
        let t = e._autoResolution ? this._renderer.resolution : e.resolution;
        (r.currentKey !== e.styleKey || e.resolution !== t) && this._updateGpuText(e).catch(e => {
          console.error(e);
        }), e._didTextUpdate = !1, nz(r, e);
      }
      this._renderer.renderPipes.batch.addToBatch(r, t);
    }
    updateRenderable(e) {
      let t = this._getGpuText(e);
      t._batcher.updateElement(t);
    }
    async _updateGpuText(e) {
      e._didTextUpdate = !1;
      let t = this._getGpuText(e);
      if (t.generatingTexture) return;
      let r = t.texturePromise;
      t.texturePromise = null, t.generatingTexture = !0, e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution;
      let n = this._renderer.htmlText.getTexturePromise(e);
      r && (n = n.finally(() => {
        this._renderer.htmlText.decreaseReferenceCount(t.currentKey), this._renderer.htmlText.returnTexturePromise(r);
      })), t.texturePromise = n, t.currentKey = e.styleKey, t.texture = await n;
      let i = e.renderGroup || e.parentRenderGroup;
      i && (i.structureDidChange = !0), t.generatingTexture = !1, nz(t, e);
    }
    _getGpuText(e) {
      return e._gpuData[this._renderer.uid] || this.initGpuText(e);
    }
    initGpuText(e) {
      let t = new iE();
      return t.renderable = e, t.transform = e.groupTransform, t.texture = G.Texture.EMPTY, t.bounds = {
        minX: 0,
        maxX: 1,
        minY: 0,
        maxY: 0
      }, t.roundPixels = this._renderer._roundPixels | e._roundPixels, e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution, e._gpuData[this._renderer.uid] = t, this._managedTexts.add(e), t;
    }
    onTextUnload(e) {
      let t = e._gpuData[this._renderer.uid];
      if (!t) return;
      let {
        htmlText: r
      } = this._renderer;
      null === r.getReferenceCount(t.currentKey) ? r.returnTexturePromise(t.texturePromise) : r.decreaseReferenceCount(t.currentKey);
    }
    destroy() {
      this._managedTexts.destroy(), this._renderer = null;
    }
  }
  iA.extension = {
    type: [v.ExtensionType.WebGLPipes, v.ExtensionType.WebGPUPipes, v.ExtensionType.CanvasPipes],
    name: "htmlText"
  };
  var iM = e.i(849609),
    iC = e.i(765480);
  function iG(e, t) {
    let r = t.fontFamily,
      n = [],
      i = {},
      a = e.match(/font-family:([^;"\s]+)/g);
    function o(e) {
      i[e] || (n.push(e), i[e] = !0);
    }
    if (Array.isArray(r)) for (let e = 0; e < r.length; e++) o(r[e]);else o(r);
    for (let e in a && a.forEach(e => {
      o(e.split(":")[1].trim());
    }), t.tagStyles) o(t.tagStyles[e].fontFamily);
    return n;
  }
  async function iw(e) {
    let t = await eq.DOMAdapter.get().fetch(e),
      r = await t.blob(),
      n = new FileReader();
    return await new Promise((e, t) => {
      n.onloadend = () => e(n.result), n.onerror = t, n.readAsDataURL(r);
    });
  }
  async function iD(e, t) {
    let r = await iw(t);
    return `@font-face {
        font-family: "${e.fontFamily}";
        font-weight: ${e.fontWeight};
        font-style: ${e.fontStyle};
        src: url('${r}');
    }`;
  }
  let iP = new Map();
  async function iO(e) {
    let t = e.filter(e => ec.Cache.has(`${e}-and-url`)).map(e => {
      if (!iP.has(e)) {
        let {
            entries: t
          } = ec.Cache.get(`${e}-and-url`),
          r = [];
        t.forEach(t => {
          let n = t.url,
            i = t.faces.map(e => ({
              weight: e.weight,
              style: e.style
            }));
          r.push(...i.map(t => iD({
            fontWeight: t.weight,
            fontStyle: t.style,
            fontFamily: e
          }, n)));
        }), iP.set(e, Promise.all(r).then(e => e.join("\n")));
      }
      return iP.get(e);
    });
    return (await Promise.all(t)).join("\n");
  }
  function iB(e, t, r, n, i) {
    let {
      domElement: a,
      styleElement: o,
      svgRoot: s
    } = i;
    a.innerHTML = `<style>${t.cssStyle}</style><div style='padding:0;'>${e}</div>`, a.setAttribute("style", `transform: scale(${r});transform-origin: top left; display: inline-block`), o.textContent = n;
    let {
      width: l,
      height: u
    } = i.image;
    return s.setAttribute("width", l.toString()), s.setAttribute("height", u.toString()), new XMLSerializer().serializeToString(s);
  }
  function iF(e, t) {
    let r = nP.CanvasPool.getOptimalCanvasAndContext(e.width, e.height, t),
      {
        context: n
      } = r;
    return n.clearRect(0, 0, e.width, e.height), n.drawImage(e, 0, 0), r;
  }
  function iI(e, t, r) {
    return new Promise(async n => {
      r && (await new Promise(e => setTimeout(e, 100))), e.onload = () => {
        n();
      }, e.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(t)}`, e.crossOrigin = "anonymous";
    });
  }
  class iU {
    constructor(e) {
      this._activeTextures = {}, this._renderer = e, this._createCanvas = e.type === rc.RendererType.WEBGPU;
    }
    getTexture(e) {
      return this.getTexturePromise(e);
    }
    getManagedTexture(e) {
      let t = e.styleKey;
      if (this._activeTextures[t]) return this._increaseReferenceCount(t), this._activeTextures[t].promise;
      let r = this._buildTexturePromise(e).then(e => (this._activeTextures[t].texture = e, e));
      return this._activeTextures[t] = {
        texture: null,
        promise: r,
        usageCount: 1
      }, r;
    }
    getReferenceCount(e) {
      return this._activeTextures[e]?.usageCount ?? null;
    }
    _increaseReferenceCount(e) {
      this._activeTextures[e].usageCount++;
    }
    decreaseReferenceCount(e) {
      let t = this._activeTextures[e];
      t && (t.usageCount--, 0 === t.usageCount && (t.texture ? this._cleanUp(t.texture) : t.promise.then(e => {
        t.texture = e, this._cleanUp(t.texture);
      }).catch(() => {
        (0, n2.warn)("HTMLTextSystem: Failed to clean texture");
      }), this._activeTextures[e] = null));
    }
    getTexturePromise(e) {
      return this._buildTexturePromise(e);
    }
    async _buildTexturePromise(e) {
      let t,
        {
          text: r,
          style: n,
          resolution: i,
          textureStyle: a,
          autoGenerateMipmaps: o
        } = e,
        s = iC.BigPool.get(iS),
        l = iG(r, n),
        u = await iO(l),
        c = iv(r, n, u, s),
        d = Math.ceil(Math.ceil(Math.max(1, c.width) + 2 * n.padding) * i),
        h = Math.ceil(Math.ceil(Math.max(1, c.height) + 2 * n.padding) * i),
        p = s.image;
      p.width = (0 | d) + 2, p.height = (0 | h) + 2;
      let f = iB(r, n, i, u, s);
      await iI(p, f, (0, iM.isSafari)() && l.length > 0), this._createCanvas && (t = iF(p, i));
      let m = (0, nK.getPo2TextureFromSource)(t ? t.canvas : p, p.width - 2, p.height - 2, i, o);
      return a && (m.source.style = a), this._createCanvas && (this._renderer.texture.initSource(m.source), nP.CanvasPool.returnCanvasAndContext(t)), iC.BigPool.return(s), m;
    }
    returnTexturePromise(e) {
      e.then(e => {
        this._cleanUp(e);
      }).catch(() => {
        (0, n2.warn)("HTMLTextSystem: Failed to clean texture");
      });
    }
    _cleanUp(e) {
      ru.TexturePool.returnTexture(e, !0), e.source.resource = null, e.source.uploadMethodId = "unknown";
    }
    destroy() {
      for (let e in this._renderer = null, this._activeTextures) this._activeTextures[e] && this.returnTexturePromise(this._activeTextures[e].promise);
      this._activeTextures = null;
    }
  }
  iU.extension = {
    type: [v.ExtensionType.WebGLSystem, v.ExtensionType.WebGPUSystem, v.ExtensionType.CanvasSystem],
    name: "htmlText"
  }, v.extensions.add(iU), v.extensions.add(iA);
  class iL extends nw {
    constructor(...e) {
      const t = nD(e, "HtmlText");
      super(t, ix), this.renderPipeId = "htmlText", t.textureStyle && (this.textureStyle = t.textureStyle instanceof nC.TextureStyle ? t.textureStyle : new nC.TextureStyle(t.textureStyle)), this.autoGenerateMipmaps = t.autoGenerateMipmaps ?? eV.TextureSource.defaultOptions.autoGenerateMipmaps;
    }
    updateBounds() {
      let e = this._bounds,
        t = this._anchor,
        {
          width: r,
          height: n
        } = iv(this.text, this._style);
      e.minX = -t._x * r, e.maxX = e.minX + r, e.minY = -t._y * n, e.maxY = e.minY + n;
    }
    get text() {
      return this._text;
    }
    set text(e) {
      let t = this._sanitiseText(e.toString());
      super.text = t;
    }
    _sanitiseText(e) {
      return this._removeInvalidHtmlTags(e.replace(/<br>/gi, "<br/>").replace(/<hr>/gi, "<hr/>").replace(/&nbsp;/gi, "&#160;"));
    }
    _removeInvalidHtmlTags(e) {
      return e.replace(/<[^>]*?(?=<|$)/g, "");
    }
  }
  class iN extends n3 {
    uploadQueueItem(e) {
      e instanceof eV.TextureSource ? this.uploadTextureSource(e) : e instanceof n0 ? this.uploadText(e) : e instanceof iL ? this.uploadHTMLText(e) : e instanceof id ? this.uploadBitmapText(e) : e instanceof rK.GraphicsContext && this.uploadGraphicsContext(e);
    }
    uploadTextureSource(e) {
      this.renderer.texture.initSource(e);
    }
    uploadText(e) {
      this.renderer.renderPipes.text.initGpuText(e);
    }
    uploadBitmapText(e) {
      this.renderer.renderPipes.bitmapText.initGpuText(e);
    }
    uploadHTMLText(e) {
      this.renderer.renderPipes.htmlText.initGpuText(e);
    }
    uploadGraphicsContext(e) {
      this.renderer.graphicsContext.getGpuContext(e);
      let {
        instructions: t
      } = e;
      for (let e of t) if ("texture" === e.action) {
        let {
          image: t
        } = e.data;
        this.uploadTextureSource(t.source);
      } else if ("fill" === e.action) {
        let {
          texture: t
        } = e.data.style;
        this.uploadTextureSource(t.source);
      }
      return null;
    }
  }
  class iX extends iN {
    destroy() {
      super.destroy(), clearTimeout(this.timeout), this.renderer = null, this.queue = null, this.resolves = null;
    }
  }
  iX.extension = {
    type: [v.ExtensionType.WebGLSystem, v.ExtensionType.WebGPUSystem],
    name: "prepare"
  };
  var ik = e.i(275957),
    iH = e.i(740905),
    iV = e.i(272589),
    i$ = e.i(387862),
    iq = e.i(666258),
    iz = e.i(754287),
    iW = e.i(550027),
    iY = e.i(497256),
    ij = e.i(430160),
    iK = e.i(50644),
    iQ = e.i(933261),
    iZ = e.i(310828),
    iJ = e.i(751360),
    i0 = e.i(204528),
    i3 = e.i(223349),
    i2 = e.i(948180),
    i1 = e.i(232391),
    i8 = e.i(560370),
    i4 = e.i(843822),
    i6 = e.i(210677),
    i5 = e.i(949998),
    i7 = e.i(674636),
    i9 = e.i(375564),
    ae = e.i(542553),
    at = e.i(475105),
    ar = e.i(638209),
    an = e.i(64645),
    ai = e.i(304767),
    aa = e.i(872502),
    ao = e.i(198418),
    as = e.i(489496),
    al = e.i(232376),
    au = e.i(564816),
    ac = e.i(149566),
    ad = e.i(735741),
    ah = e.i(638082),
    ap = e.i(16354),
    af = e.i(215393),
    am = e.i(84327),
    ag = e.i(207841),
    ab = e.i(110323),
    a_ = e.i(296853),
    ax = e.i(700631),
    aT = e.i(63146),
    ay = e.i(220892),
    aS = e.i(204126),
    av = e.i(768339),
    aR = e.i(6948),
    aE = e.i(871602),
    aA = e.i(262609),
    aM = e.i(270143),
    aC = e.i(945168),
    aG = e.i(489405),
    aw = e.i(403204),
    aD = e.i(322183),
    aP = e.i(915907),
    aO = e.i(529002),
    aB = e.i(435573),
    aF = e.i(459980),
    aI = e.i(962768),
    aU = e.i(739983),
    aL = e.i(235523),
    aN = e.i(428993),
    aX = e.i(261095),
    ak = e.i(794604),
    aH = e.i(510091),
    aV = e.i(178375),
    a$ = e.i(426832),
    aq = e.i(788987),
    az = e.i(293592),
    aW = e.i(135617);
  let aY = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    int: 1,
    ivec2: 2,
    ivec3: 3,
    ivec4: 4,
    uint: 1,
    uvec2: 2,
    uvec3: 3,
    uvec4: 4,
    bool: 1,
    bvec2: 2,
    bvec3: 3,
    bvec4: 4,
    mat2: 4,
    mat3: 9,
    mat4: 16,
    sampler2D: 1
  };
  var aj = e.i(196932),
    aK = e.i(398250),
    aQ = e.i(994564),
    aZ = e.i(840976),
    aJ = e.i(640338),
    a0 = e.i(420640),
    a3 = e.i(879238),
    a2 = e.i(448197),
    a1 = e.i(109636),
    a8 = e.i(200815),
    a4 = e.i(163281),
    a6 = e.i(444533),
    a5 = e.i(485552),
    a7 = e.i(500378),
    a9 = e.i(61003),
    oe = e.i(701993),
    ot = e.i(378977),
    or = e.i(800477),
    on = e.i(629057),
    oi = e.i(657280),
    oa = e.i(534501),
    oo = e.i(570966),
    os = e.i(883926),
    ol = e.i(999885),
    ou = e.i(408321),
    oc = e.i(111456),
    od = e.i(923217),
    oh = e.i(29542),
    op = e.i(633840),
    of = e.i(454710),
    om = e.i(910120),
    og = e.i(245665),
    ob = e.i(29400),
    o_ = e.i(23295),
    ox = e.i(602250),
    oT = e.i(564115),
    oy = e.i(470227),
    oS = e.i(630739),
    ov = e.i(952222),
    oR = e.i(301177),
    oE = e.i(771690),
    oA = e.i(942816),
    oM = e.i(216248),
    oC = e.i(500030),
    oG = e.i(989776),
    ow = e.i(465806),
    oD = e.i(13472),
    oP = e.i(411454),
    oO = e.i(187925),
    oB = e.i(637531),
    oF = e.i(107465),
    oI = e.i(714427),
    oU = e.i(905072),
    oL = e.i(71203),
    oN = e.i(324086),
    oX = e.i(349139),
    ok = e.i(221845),
    oH = e.i(649308),
    oV = e.i(908565),
    o$ = e.i(67473),
    oq = e.i(333962),
    oz = e.i(955419),
    oW = e.i(594908),
    oY = e.i(192897),
    oj = e.i(507938),
    oK = e.i(693398),
    oQ = e.i(563541),
    oZ = e.i(661226),
    oJ = e.i(282313),
    o0 = e.i(548306);
  let o3 = {
      POINTS: "point-list",
      LINES: "line-list",
      LINE_STRIP: "line-strip",
      TRIANGLES: "triangle-list",
      TRIANGLE_STRIP: "triangle-strip"
    },
    o2 = new Proxy(o3, {
      get: (e, t) => ((0, rd.deprecation)(rd.v8_0_0, `DRAW_MODES.${t} is deprecated, use '${o3[t]}' instead`), e[t])
    });
  var o1 = e.i(81846),
    o8 = e.i(398013),
    o4 = e.i(434367),
    o6 = e.i(72131),
    o5 = e.i(955424),
    o7 = e.i(706848),
    o9 = e.i(60064),
    se = e.i(593642),
    st = e.i(638095),
    sr = e.i(798299),
    sn = e.i(257445),
    si = e.i(722909),
    sa = e.i(189530),
    so = e.i(627760),
    ss = e.i(902504),
    sl = e.i(609506),
    su = e.i(422537),
    sc = e.i(643781),
    sd = e.i(165255),
    sh = e.i(589627),
    sp = e.i(164868),
    sf = e.i(497544),
    sm = e.i(896704),
    sg = ((x = sg || {}).CLAMP = "clamp-to-edge", x.REPEAT = "repeat", x.MIRRORED_REPEAT = "mirror-repeat", x);
  let sb = new Proxy(sg, {
    get: (e, t) => ((0, rd.deprecation)(rd.v8_0_0, `DRAW_MODES.${t} is deprecated, use '${sg[t]}' instead`), e[t])
  });
  var s_ = ((T = s_ || {}).NEAREST = "nearest", T.LINEAR = "linear", T);
  let sx = new Proxy(s_, {
    get: (e, t) => ((0, rd.deprecation)(rd.v8_0_0, `DRAW_MODES.${t} is deprecated, use '${s_[t]}' instead`), e[t])
  });
  var sT = e.i(263524),
    sy = e.i(733705),
    sS = eV;
  class sv extends sS.TextureSource {
    constructor(e) {
      const {
        faces: t,
        ...r
      } = e;
      sv._validateFaces(t);
      const n = t.right,
        i = n.resolution,
        a = n.format,
        o = n.alphaMode,
        s = ["resolution", "format", "alphaMode", "dimensions", "viewDimension"].filter(e => void 0 !== r[e]);
      for (const e of (s.length && (0, n2.warn)(`[CubeTextureSource] Ignoring option(s) [${s.join(", ")}]; these are derived from face sources.`), super({
        ...r,
        resource: t,
        width: n.width,
        height: n.height,
        dimensions: "2d",
        viewDimension: "cube",
        arrayLayerCount: 6,
        resolution: i,
        format: a,
        alphaMode: o
      }), this.uploadMethodId = "cube", this.faces = t, Object.keys(t))) {
        const r = t[e];
        r.on("update", this._onFaceUpdate, this), r.on("resize", this._onFaceResize, this), r.on("unload", this._onFaceUpdate, this);
      }
    }
    destroy() {
      let e = this.faces;
      if (e) for (let t of Object.keys(e)) {
        let r = e[t];
        r.off("update", this._onFaceUpdate, this), r.off("resize", this._onFaceResize, this), r.off("unload", this._onFaceUpdate, this);
      }
      super.destroy();
    }
    _onFaceUpdate() {
      this.emit("update", this);
    }
    _onFaceResize(e) {
      sv._validateFaces(this.faces), this.resize(e.width, e.height, e.resolution);
    }
    static _validateFaces(e) {
      if (!e.right || !e.left || !e.top || !e.bottom || !e.front || !e.back) throw Error("[CubeTextureSource] Requires { left, right, top, bottom, front, back } faces.");
      let t = e.right,
        r = t.pixelWidth,
        n = t.pixelHeight,
        i = t.format,
        a = t.alphaMode,
        o = t.resolution;
      for (let t of Object.keys(e)) {
        let s = e[t];
        if (s.pixelWidth !== r || s.pixelHeight !== n) throw Error(`[CubeTextureSource] Face '${String(t)}' has a different size. All faces must match.`);
        if (s.format !== i) throw Error(`[CubeTextureSource] Face '${String(t)}' has a different format. All faces must match.`);
        if (s.alphaMode !== a) throw Error(`[CubeTextureSource] Face '${String(t)}' has a different alphaMode. All faces must match.`);
        if (s.resolution !== o) throw Error(`[CubeTextureSource] Face '${String(t)}' has a different resolution. All faces must match.`);
      }
    }
  }
  let sR = ["left", "right", "top", "bottom", "front", "back"];
  class sE extends sT.default {
    constructor(e) {
      super(), this.uid = (0, sy.uid)("cubeTexture"), this.destroyed = !1;
      const {
        label: t,
        source: r
      } = e;
      this.label = t, this.source = r, this.source.label = this.label ?? this.source.label;
    }
    static from(e, t = !1) {
      if (e instanceof sv) return new sE({
        source: e
      });
      let {
          faces: r,
          ...n
        } = e,
        i = null,
        a = sR.every(e => "string" == typeof r[e]);
      if (!t && a) {
        let e, t, a, o;
        if (e = n ? {
          ...n
        } : {}, delete e.label, a = (t = Object.keys(e).sort()).length ? `|${t.map(t => `${t}=${String(e[t])}`).join("&")}` : "", o = sR.map(e => r[e]).join(","), i = `cube:${o}${a}`, ec.Cache.has(i)) return ec.Cache.get(i);
      }
      let o = e => e.isTexture ? e : G.Texture.from(e),
        s = {};
      for (let e of sR) s[e] = o(r[e]).source;
      let l = new sE({
        source: new sv({
          ...n,
          faces: s
        }),
        label: n.label
      });
      return i && (ec.Cache.set(i, l), l.once("destroy", () => {
        ec.Cache.has(i) && ec.Cache.remove(i);
      })), l;
    }
    destroy(e = !1) {
      this.destroyed || (this.destroyed = !0, e && this.source.destroy(), this.emit("destroy", this), this.removeAllListeners());
    }
  }
  var sA = e.i(662188),
    sM = e.i(292203),
    sC = e.i(338228),
    sG = e.i(173156),
    sw = eV;
  let sD = Object.create(null),
    sP = Object.create(null);
  class sO extends sw.TextureSource {
    constructor({
      resource: e,
      renderer: t,
      label: r,
      width: n,
      height: i
    }) {
      e || (e = function (e) {
        var t;
        if (e.type === rc.RendererType.WEBGPU) return sP[t = e.uid] || (sP[t] = e.gpu.device.createTexture({
          label: "ExternalSource placeholder",
          size: {
            width: 1,
            height: 1
          },
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        })), sP[e.uid];
        if (!sD[e.uid]) {
          let t = e.gl,
            r = t.createTexture();
          t.bindTexture(t.TEXTURE_2D, r), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null), sD[e.uid] = r;
        }
        return sD[e.uid];
      }(t)), n || (n = n ?? e?.width ?? 1), i || (i = i ?? e?.height ?? 1), super({
        resource: e,
        width: n,
        height: i,
        label: r,
        autoGarbageCollect: !1
      }), this._renderer = t, this._initGpuData(e);
    }
    static test(e) {
      return globalThis.GPUTexture && e instanceof GPUTexture || globalThis.WebGLTexture && e instanceof WebGLTexture;
    }
    _validateTexture(e) {
      let t = this._renderer,
        r = !!t.gpu,
        n = globalThis.GPUTexture && e instanceof GPUTexture,
        i = globalThis.WebGLTexture && e instanceof WebGLTexture;
      if (r && i) throw Error("Cannot use WebGLTexture with a WebGPU renderer");
      if (!r && n) throw Error("Cannot use GPUTexture with a WebGL renderer");
      if (!r) {
        let r = t.gl;
        if (r && !r.isTexture(e)) throw Error("WebGLTexture does not belong to this renderer's WebGL context");
      }
    }
    _initGpuData(e) {
      let t = this._renderer;
      this._validateTexture(e), t.gpu ? this._gpuData[t.uid] = new oX.GPUTextureGpuData(e) : this._gpuData[t.uid] = new a9.GlTexture(e);
    }
    updateGPUTexture(e, t, r) {
      let n = this._renderer,
        i = this._gpuData[n.uid];
      if (this.resource = e, n.gpu) {
        if (this._validateTexture(e), i.gpuTexture !== e) {
          i.gpuTexture = e, i.textureView = null;
          let t = n.texture;
          t?._bindGroupHash && (t._bindGroupHash[this.uid] = null);
        }
        let a = t ?? e.width,
          o = r ?? e.height;
        this.resize(a, o);
      } else this._validateTexture(e), i.texture = e, void 0 !== t && void 0 !== r && this.resize(t, r);
      this.emit("update", this);
    }
    destroy() {
      let e = this._renderer;
      delete this._gpuData[e.uid], super.destroy();
    }
  }
  var sB = e.i(24880),
    sF = e.i(613514),
    sI = e.i(947084),
    sU = e.i(818642),
    sL = e.i(251783),
    sN = e.i(379412),
    sX = e.i(235569),
    sk = e.i(777207),
    sH = "varying vec2 vUV;\nvarying vec4 vColor;\n\nuniform sampler2D uTexture;\n\nvoid main(void){\n    vec4 color = texture2D(uTexture, vUV) * vColor;\n    gl_FragColor = color;\n}",
    sV = "attribute vec2 aVertex;\nattribute vec2 aUV;\nattribute vec4 aColor;\n\nattribute vec2 aPosition;\nattribute float aRotation;\n\nuniform mat3 uTranslationMatrix;\nuniform float uRound;\nuniform vec2 uResolution;\nuniform vec4 uColor;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\n\nvec2 roundPixels(vec2 position, vec2 targetSize)\n{       \n    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n}\n\nvoid main(void){\n    float cosRotation = cos(aRotation);\n    float sinRotation = sin(aRotation);\n    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;\n    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;\n\n    vec2 v = vec2(x, y);\n    v = v + aPosition;\n\n    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    if(uRound == 1.0)\n    {\n        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n    }\n\n    vUV = aUV;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;\n}\n",
    s$ = "\nstruct ParticleUniforms {\n  uTranslationMatrix:mat3x3<f32>,\n  uColor:vec4<f32>,\n  uRound:f32,\n  uResolution:vec2<f32>,\n};\n\nfn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>\n{\n  return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n}\n\n@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;\n\n@group(1) @binding(0) var uTexture: texture_2d<f32>;\n@group(1) @binding(1) var uSampler : sampler;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) color : vec4<f32>,\n  };\n@vertex\nfn mainVertex(\n  @location(0) aVertex: vec2<f32>,\n  @location(1) aPosition: vec2<f32>,\n  @location(2) aUV: vec2<f32>,\n  @location(3) aColor: vec4<f32>,\n  @location(4) aRotation: f32,\n) -> VSOutput {\n  \n   let v = vec2(\n       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),\n       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)\n   ) + aPosition;\n\n   var position = vec4((uniforms.uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n   if(uniforms.uRound == 1.0) {\n       position = vec4(roundPixels(position.xy, uniforms.uResolution), position.zw);\n   }\n\n    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;\n\n  return VSOutput(\n   position,\n   aUV,\n   vColor,\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) color: vec4<f32>,\n  @builtin(position) position: vec4<f32>,\n) -> @location(0) vec4<f32> {\n\n    var sample = textureSample(uTexture, uSampler, uv) * color;\n   \n    return sample;\n}",
    sq = e.i(654713),
    sz = e.i(55742),
    sW = e.i(256924),
    sY = e.i(873469),
    sj = e.i(555925),
    sK = e.i(779427),
    sQ = e.i(710158),
    sZ = e.i(426307),
    sJ = e.i(786234),
    s0 = e.i(519821),
    s3 = e.i(316272),
    s2 = e.i(929953),
    s1 = e.i(247016),
    s8 = e.i(86245),
    s4 = tX;
  class s6 extends s4.ViewContainer {
    constructor(e) {
      "function" == typeof e && (e = {
        render: e
      });
      const {
        render: t,
        ...r
      } = e;
      super({
        label: "RenderContainer",
        ...r
      }), this.renderPipeId = "customRender", this.batched = !1, t && (this.render = t), this.containsPoint = e.containsPoint ?? (() => !1), this.addBounds = e.addBounds ?? (() => !1);
    }
    updateBounds() {
      this._bounds.clear(), this.addBounds(this._bounds);
    }
    render(e) {}
  }
  var s5 = e.i(629041),
    s7 = e.i(492884),
    s9 = e.i(292844),
    le = e.i(544996),
    lt = e.i(624539),
    lr = e.i(50946),
    ln = e.i(317624),
    li = e.i(729317),
    la = e.i(350585),
    lo = e.i(636892),
    ls = e.i(988559),
    ll = e.i(914316),
    lu = e.i(329936),
    lc = e.i(402936),
    ld = e.i(13814),
    lh = e.i(674130),
    lp = e.i(882825),
    lf = e.i(104312),
    lm = e.i(682581),
    lg = e.i(121570),
    lb = e.i(898006),
    l_ = e.i(225839),
    lx = e.i(930005),
    lT = e.i(625533),
    ly = e.i(53116),
    lS = e.i(912667),
    lv = e.i(816359),
    lR = e.i(769047),
    lE = e.i(455660),
    lA = e.i(419905),
    lM = e.i(336966),
    lC = e.i(234118),
    lG = e.i(815770),
    lw = e.i(115321),
    lD = e.i(551370),
    lP = e.i(121402);
  class lO {
    constructor() {
      this._gradients = [], this._nextId = 0;
    }
    addStyle(e) {
      if (!(e.fill instanceof lA.FillGradient)) return null;
      let t = `pixi-grad-${this._nextId++}`;
      return this._gradients.push({
        id: t,
        gradient: e.fill,
        textureSpace: e.textureSpace ?? "local"
      }), `url(#${t})`;
    }
    build() {
      if (0 === this._gradients.length) return "";
      let e = ["<defs>"];
      for (let {
        id: t,
        gradient: r,
        textureSpace: n
      } of this._gradients) {
        let i = "global" === n ? "userSpaceOnUse" : "objectBoundingBox",
          a = r.colorStops.map(e => {
            let t = eN.Color.shared.setValue(e.color).toHex();
            return `<stop offset="${e.offset}" stop-color="${t}"/>`;
          }).join("");
        if ("radial" === r.type) {
          let n = r.outerCenter?.x ?? .5,
            o = r.outerCenter?.y ?? .5,
            s = r.outerRadius ?? .5,
            l = r.center?.x ?? n,
            u = r.center?.y ?? o;
          e.push(`<radialGradient id="${t}" gradientUnits="${i}" cx="${n}" cy="${o}" r="${s}" fx="${l}" fy="${u}">`, a, "</radialGradient>");
        } else {
          let n = r.start?.x ?? 0,
            o = r.start?.y ?? 0,
            s = r.end?.x ?? 1,
            l = r.end?.y ?? 0;
          e.push(`<linearGradient id="${t}" gradientUnits="${i}" x1="${n}" y1="${o}" x2="${s}" y2="${l}">`, a, "</linearGradient>");
        }
      }
      return e.push("</defs>"), e.join("");
    }
  }
  let lB = 2 * Math.PI,
    lF = new Set(["regularPoly", "roundPoly", "roundShape", "filletRect", "chamferRect", "arcTo"]);
  function lI(e, t = 2, r = !1) {
    if (e.instructions.some(e => lF.has(e.action))) {
      var n,
        i,
        a,
        o,
        s = e,
        l = t,
        u = r;
      let c = s.shapePath.shapePrimitives,
        d = [];
      for (let e of c) {
        let t = e.shape,
          r = e.transform;
        switch (t.type) {
          case "polygon":
            d.push(lH(t.points, t.closePath, r, l));
            break;
          case "circle":
            d.push(lN(t.x, t.y, t.radius, t.radius, r, l, u));
            break;
          case "ellipse":
            d.push(lN(t.x, t.y, t.halfWidth, t.halfHeight, r, l, u));
            break;
          case "rectangle":
            d.push(lX(t.x, t.y, t.width, t.height, r, l));
            break;
          case "roundedRectangle":
            d.push(lk(t.x, t.y, t.width, t.height, t.radius, r, l, u));
        }
      }
      return d.join("");
    }
    let c = [],
      d = !1;
    for (let s = 0; s < e.instructions.length; s++) {
      let l = e.instructions[s],
        u = l.data;
      switch (l.action) {
        case "moveTo":
          c.push(`M${lL(u[0], u[1], null, t)}`), d = !0;
          break;
        case "lineTo":
          c.push(`L${lL(u[0], u[1], null, t)}`), d = !0;
          break;
        case "quadraticCurveTo":
          c.push(`Q${lL(u[0], u[1], null, t)} ${lL(u[2], u[3], null, t)}`), d = !0;
          break;
        case "bezierCurveTo":
          c.push(`C${lL(u[0], u[1], null, t)} ${lL(u[2], u[3], null, t)} ${lL(u[4], u[5], null, t)}`), d = !0;
          break;
        case "arcToSvg":
          c.push(`A${lU(u[0], t)} ${lU(u[1], t)} ${lU(u[2], t)} ${u[3]} ${u[4]} ${lL(u[5], u[6], null, t)}`), d = !0;
          break;
        case "closePath":
          c.push("Z"), d = !1;
          break;
        case "arc":
          c.push(function (e, t, r, n, i, a, o, s, l = !1) {
            let u = i - n;
            if (a ? u > 0 && (u -= lB) : u < 0 && (u += lB), Math.abs(u) >= lB - 1e-6) return lN(e, t, r, r, null, s, l);
            if (l) {
              let i = [];
              for (let a = 0; a <= 32; a++) {
                let l = n + a / 32 * u,
                  c = e + r * Math.cos(l),
                  d = t + r * Math.sin(l),
                  h = 0 === a ? o ? "L" : "M" : "L";
                i.push(`${h}${lU(c, s)} ${lU(d, s)}`);
              }
              return i.join("");
            }
            let c = e + r * Math.cos(n),
              d = t + r * Math.sin(n),
              h = e + r * Math.cos(i),
              p = t + r * Math.sin(i),
              f = +(Math.abs(u) > Math.PI);
            return `${o ? "L" : "M"}${lU(c, s)} ${lU(d, s)}A${lU(r, s)} ${lU(r, s)} 0 ${f} ${+!a} ${lU(h, s)} ${lU(p, s)}`;
          }(u[0], u[1], u[2], u[3], u[4], !!u[5], d, t, r)), d = !function (e, t, r) {
            let n = t - e;
            return r ? n > 0 && (n -= lB) : n < 0 && (n += lB), Math.abs(n) >= lB - 1e-6;
          }(u[3], u[4], !!u[5]);
          break;
        case "rect":
          c.push(lX(u[0], u[1], u[2], u[3], u[4], t)), d = !1;
          break;
        case "circle":
          c.push(lN(u[0], u[1], u[2], u[2], u[3], t, r)), d = !1;
          break;
        case "ellipse":
          c.push(lN(u[0], u[1], u[2], u[3], u[4], t, r)), d = !1;
          break;
        case "roundRect":
          c.push(lk(u[0], u[1], u[2], u[3], u[4] ?? 0, u[5], t, r)), d = !1;
          break;
        case "poly":
          c.push(lH(u[0], u[1] ?? !0, u[2], t)), d = !(u[1] ?? !0);
          break;
        case "addPath":
          c.push((n = u[0], i = u[1], a = t, o = r, !i || i.isIdentity() ? lI(n, a, o) : lI(n.clone(!0).transform(i), a, o))), d = !0;
      }
    }
    return c.join("");
  }
  function lU(e, t) {
    return parseFloat(e.toFixed(t)).toString();
  }
  function lL(e, t, r, n) {
    if (r && !r.isIdentity()) {
      let i = r.a * e + r.c * t + r.tx,
        a = r.b * e + r.d * t + r.ty;
      return `${lU(i, n)} ${lU(a, n)}`;
    }
    return `${lU(e, n)} ${lU(t, n)}`;
  }
  function lN(e, t, r, n, i, a, o = !1) {
    let s = i && !i.isIdentity() ? i : null;
    if (!s && !o) return `M${lU(e - r, a)} ${lU(t, a)}A${lU(r, a)} ${lU(n, a)} 0 1 1 ${lU(e + r, a)} ${lU(t, a)}A${lU(r, a)} ${lU(n, a)} 0 1 1 ${lU(e - r, a)} ${lU(t, a)}Z`;
    let l = [];
    for (let i = 0; i < 64; i++) {
      let o = i / 64 * lB,
        u = e + r * Math.cos(o),
        c = t + n * Math.sin(o);
      l.push(`${0 === i ? "M" : "L"}${lL(u, c, s, a)}`);
    }
    return l.push("Z"), l.join("");
  }
  function lX(e, t, r, n, i, a) {
    return `M${lL(e, t, i, a)}L${lL(e + r, t, i, a)}L${lL(e + r, t + n, i, a)}L${lL(e, t + n, i, a)}Z`;
  }
  function lk(e, t, r, n, i, a, o, s = !1) {
    let l = a && !a.isIdentity() ? a : null;
    if (i <= 0) return lX(e, t, r, n, l, o);
    if (i = Math.min(i, Math.min(r, n) / 2), l || s) {
      let a = [],
        s = [[e + r - i, t + i, -Math.PI / 2], [e + r - i, t + n - i, 0], [e + i, t + n - i, Math.PI / 2], [e + i, t + i, Math.PI]],
        u = !0;
      for (let e = 0; e < s.length; e++) {
        let [t, r, n] = s[e];
        for (let e = 0; e <= 8; e++) {
          let s = n + e / 8 * (Math.PI / 2),
            c = t + i * Math.cos(s),
            d = r + i * Math.sin(s);
          a.push(`${u ? "M" : "L"}${lL(c, d, l, o)}`), u = !1;
        }
      }
      return a.push("Z"), a.join("");
    }
    return `M${lU(e + i, o)} ${lU(t, o)}L${lU(e + r - i, o)} ${lU(t, o)}A${lU(i, o)} ${lU(i, o)} 0 0 1 ${lU(e + r, o)} ${lU(t + i, o)}L${lU(e + r, o)} ${lU(t + n - i, o)}A${lU(i, o)} ${lU(i, o)} 0 0 1 ${lU(e + r - i, o)} ${lU(t + n, o)}L${lU(e + i, o)} ${lU(t + n, o)}A${lU(i, o)} ${lU(i, o)} 0 0 1 ${lU(e, o)} ${lU(t + n - i, o)}L${lU(e, o)} ${lU(t + i, o)}A${lU(i, o)} ${lU(i, o)} 0 0 1 ${lU(e + i, o)} ${lU(t, o)}Z`;
  }
  function lH(e, t, r, n) {
    if (0 === e.length) return "";
    let i = [];
    if ("number" == typeof e[0]) {
      i.push(`M${lL(e[0], e[1], r, n)}`);
      for (let t = 2; t < e.length; t += 2) i.push(`L${lL(e[t], e[t + 1], r, n)}`);
    } else {
      i.push(`M${lL(e[0].x, e[0].y, r, n)}`);
      for (let t = 1; t < e.length; t++) i.push(`L${lL(e[t].x, e[t].y, r, n)}`);
    }
    return t && i.push("Z"), i.join("");
  }
  function lV(e, t) {
    let r = t.addStyle(e),
      n = [];
    return r ? n.push(`fill="${r}"`) : n.push(`fill="${eN.Color.shared.setValue(e.color).toHex()}"`), e.alpha < 1 && n.push(`fill-opacity="${e.alpha}"`), n.join(" ");
  }
  function l$(e, t) {
    let r = t.addStyle(e),
      n = [];
    return n.push('fill="none"'), r ? n.push(`stroke="${r}"`) : n.push(`stroke="${eN.Color.shared.setValue(e.color).toHex()}"`), n.push(`stroke-width="${e.width}"`), "butt" !== e.cap && n.push(`stroke-linecap="${e.cap}"`), "miter" !== e.join ? n.push(`stroke-linejoin="${e.join}"`) : 10 !== e.miterLimit && n.push(`stroke-miterlimit="${e.miterLimit}"`), e.alpha < 1 && n.push(`stroke-opacity="${e.alpha}"`), n.join(" ");
  }
  var lq = e.i(388850),
    lz = e.i(523994),
    lW = e.i(380762),
    lY = e.i(437324),
    lj = e.i(569176),
    lK = e.i(591069),
    lQ = e.i(898512),
    lZ = e.i(470618),
    lJ = e.i(967030),
    l0 = e.i(73517),
    l3 = e.i(12746),
    l2 = e.i(762562),
    l1 = e.i(728207),
    l8 = e.i(752046),
    l4 = r$;
  let l6 = class e extends l4.Container {
    constructor(t = {}) {
      t = {
        ...e.defaultOptions,
        ...t
      }, super(), this.renderLayerChildren = [], this.sortableChildren = t.sortableChildren, this.sortFunction = t.sortFunction;
    }
    attach(...e) {
      for (let t = 0; t < e.length; t++) {
        let r = e[t];
        if (r.parentRenderLayer) {
          if (r.parentRenderLayer === this) continue;
          r.parentRenderLayer.detach(r);
        }
        this.renderLayerChildren.push(r), r.parentRenderLayer = this;
        let n = this.renderGroup || this.parentRenderGroup;
        n && (n.structureDidChange = !0);
      }
      return e[0];
    }
    detach(...e) {
      for (let t = 0; t < e.length; t++) {
        let r = e[t],
          n = this.renderLayerChildren.indexOf(r);
        -1 !== n && this.renderLayerChildren.splice(n, 1), r.parentRenderLayer = null;
        let i = this.renderGroup || this.parentRenderGroup;
        i && (i.structureDidChange = !0);
      }
      return e[0];
    }
    detachAll() {
      let e = this.renderLayerChildren;
      for (let t = 0; t < e.length; t++) e[t].parentRenderLayer = null;
      this.renderLayerChildren.length = 0;
    }
    collectRenderables(e, t, r) {
      let n = this.renderLayerChildren,
        i = n.length;
      this.sortableChildren && this.sortRenderLayerChildren();
      for (let r = 0; r < i; r++) n[r].parent || (0, n2.warn)("Container must be added to both layer and scene graph. Layers only handle render order - the scene graph is required for transforms (addChild)", n[r]), n[r].collectRenderables(e, t, this);
    }
    sortRenderLayerChildren() {
      this.renderLayerChildren.sort(this.sortFunction);
    }
    _getGlobalBoundsRecursive(e, t, r) {
      if (!e) return;
      let n = this.renderLayerChildren;
      for (let e = 0; e < n.length; e++) n[e]._getGlobalBoundsRecursive(!0, t, this);
    }
    getFastGlobalBounds(e, t) {
      return super.getFastGlobalBounds(e, t);
    }
    addChild() {
      throw Error("RenderLayer.addChild() is not available. Please use RenderLayer.attach()");
    }
    removeChild() {
      throw Error("RenderLayer.removeChild() is not available. Please use RenderLayer.detach()");
    }
    removeChildren(e, t) {
      throw Error("RenderLayer.removeChildren() is not available. Please use RenderLayer.detach()");
    }
    removeChildAt(e) {
      throw Error("RenderLayer.removeChildAt() is not available");
    }
    getChildAt(e) {
      throw Error("RenderLayer.getChildAt() is not available");
    }
    setChildIndex(e, t) {
      throw Error("RenderLayer.setChildIndex() is not available");
    }
    getChildIndex(e) {
      throw Error("RenderLayer.getChildIndex() is not available");
    }
    addChildAt(e, t) {
      throw Error("RenderLayer.addChildAt() is not available");
    }
    swapChildren(e, t) {
      throw Error("RenderLayer.swapChildren() is not available");
    }
    reparentChild() {
      throw Error("RenderLayer.reparentChild() is not available with the render layer");
    }
    reparentChildAt(e, t) {
      throw Error("RenderLayer.reparentChildAt() is not available with the render layer");
    }
  };
  l6.defaultOptions = {
    sortableChildren: !1,
    sortFunction: (e, t) => e.zIndex - t.zIndex
  };
  let l5 = class e extends r8 {
    constructor(...e) {
      super({});
      let t = e[0] ?? {};
      "number" == typeof t && ((0, rd.deprecation)(rd.v8_0_0, "PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"), t = {
        width: t,
        height: e[1],
        verticesX: e[2],
        verticesY: e[3]
      }), this.build(t);
    }
    build(t) {
      t = {
        ...e.defaultOptions,
        ...t
      }, this.verticesX = this.verticesX ?? t.verticesX, this.verticesY = this.verticesY ?? t.verticesY, this.width = this.width ?? t.width, this.height = this.height ?? t.height;
      let r = this.verticesX * this.verticesY,
        n = [],
        i = [],
        a = [],
        o = this.verticesX - 1,
        s = this.verticesY - 1,
        l = this.width / o,
        u = this.height / s;
      for (let e = 0; e < r; e++) {
        let t = e % this.verticesX,
          r = e / this.verticesX | 0;
        n.push(t * l, r * u), i.push(t / o, r / s);
      }
      let c = o * s;
      for (let e = 0; e < c; e++) {
        let t = e % o,
          r = e / o | 0,
          n = r * this.verticesX + t,
          i = r * this.verticesX + t + 1,
          s = (r + 1) * this.verticesX + t,
          l = (r + 1) * this.verticesX + t + 1;
        a.push(n, i, s, i, l, s);
      }
      this.buffers[0].data = new Float32Array(n), this.buffers[1].data = new Float32Array(i), this.indexBuffer.data = new Uint32Array(a), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update();
    }
  };
  l5.defaultOptions = {
    width: 100,
    height: 100,
    verticesX: 10,
    verticesY: 10
  };
  let l7 = l5;
  function l9(e, t, r, n) {
    let i = r.buffers[0],
      a = i.data,
      {
        verticesX: o,
        verticesY: s
      } = r,
      l = e / (o - 1),
      u = t / (s - 1),
      c = 0,
      d = n[0],
      h = n[1],
      p = n[2],
      f = n[3],
      m = n[4],
      g = n[5],
      b = n[6],
      _ = n[7],
      x = n[8];
    for (let e = 0; e < a.length; e += 2) {
      let t = c % o * l,
        r = (c / o | 0) * u,
        n = d * t + h * r + p,
        i = f * t + m * r + g,
        s = b * t + _ * r + x;
      a[e] = n / s, a[e + 1] = i / s, c++;
    }
    i.update();
  }
  function ue(e, t) {
    let r = t[0],
      n = t[1],
      i = t[2],
      a = t[3],
      o = t[4],
      s = t[5],
      l = t[6],
      u = t[7],
      c = t[8];
    return e[0] = o * c - s * u, e[1] = i * u - n * c, e[2] = n * s - i * o, e[3] = s * l - a * c, e[4] = r * c - i * l, e[5] = i * a - r * s, e[6] = a * u - o * l, e[7] = n * l - r * u, e[8] = r * o - n * a, e;
  }
  function ut(e, t, r) {
    let n = t[0],
      i = t[1],
      a = t[2],
      o = t[3],
      s = t[4],
      l = t[5],
      u = t[6],
      c = t[7],
      d = t[8],
      h = r[0],
      p = r[1],
      f = r[2],
      m = r[3],
      g = r[4],
      b = r[5],
      _ = r[6],
      x = r[7],
      T = r[8];
    return e[0] = h * n + p * o + f * u, e[1] = h * i + p * s + f * c, e[2] = h * a + p * l + f * d, e[3] = m * n + g * o + b * u, e[4] = m * i + g * s + b * c, e[5] = m * a + g * l + b * d, e[6] = _ * n + x * o + T * u, e[7] = _ * i + x * s + T * c, e[8] = _ * a + x * l + T * d, e;
  }
  let ur = [0, 0, 0, 0, 0, 0, 0, 0, 0],
    un = [0, 0, 0],
    ui = [0, 0, 0];
  function ua(e, t, r, n, i, a, o, s, l) {
    let u, c, d;
    ur[0] = t, ur[1] = n, ur[2] = a, ur[3] = r, ur[4] = i, ur[5] = o, ur[6] = 1, ur[7] = 1, ur[8] = 1;
    let h = ue(e, ur);
    ui[0] = s, ui[1] = l, ui[2] = 1;
    let p = (u = ui[0], c = ui[1], d = ui[2], un[0] = h[0] * u + h[1] * c + h[2] * d, un[1] = h[3] * u + h[4] * c + h[5] * d, un[2] = h[6] * u + h[7] * c + h[8] * d, un);
    return e[0] = p[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = p[1], e[5] = 0, e[6] = 0, e[7] = 0, e[8] = p[2], ut(e, e, ur);
  }
  let uo = [0, 0, 0, 0, 0, 0, 0, 0, 0],
    us = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  function ul(e, t, r, n, i, a, o, s, l, u, c, d, h, p, f, m, g) {
    let b = ua(uo, t, r, a, o, u, c, p, f),
      _ = ua(us, n, i, s, l, d, h, m, g);
    return ut(e, ue(b, b), _);
  }
  class uu extends l7 {
    constructor(e) {
      super(e), this._projectionMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      const {
        width: t,
        height: r
      } = e;
      this.corners = [0, 0, t, 0, t, r, 0, r];
    }
    setCorners(e, t, r, n, i, a, o, s) {
      let l = this.corners;
      l[0] = e, l[1] = t, l[2] = r, l[3] = n, l[4] = i, l[5] = a, l[6] = o, l[7] = s, this.updateProjection();
    }
    updateProjection() {
      let {
          width: e,
          height: t
        } = this,
        r = this.corners,
        n = ul(this._projectionMatrix, 0, 0, r[0], r[1], e, 0, r[2], r[3], e, t, r[4], r[5], 0, t, r[6], r[7]);
      l9(e, t, this, n);
    }
  }
  let uc = class e extends nt {
    constructor(t) {
      const {
          texture: r,
          verticesX: n,
          verticesY: i,
          ...a
        } = t = {
          ...e.defaultOptions,
          ...t
        },
        o = new uu((0, ln.definedProps)({
          width: r.width,
          height: r.height,
          verticesX: n,
          verticesY: i
        }));
      super((0, ln.definedProps)({
        ...a,
        geometry: o
      })), this._texture = r, this.geometry.setCorners(t.x0, t.y0, t.x1, t.y1, t.x2, t.y2, t.x3, t.y3);
    }
    textureUpdated() {
      let e = this.geometry;
      if (!e) return;
      let {
        width: t,
        height: r
      } = this.texture;
      (e.width !== t || e.height !== r) && (e.width = t, e.height = r, e.updateProjection());
    }
    set texture(e) {
      this._texture !== e && (super.texture = e, this.textureUpdated());
    }
    get texture() {
      return this._texture;
    }
    setCorners(e, t, r, n, i, a, o, s) {
      this.geometry.setCorners(e, t, r, n, i, a, o, s);
    }
  };
  uc.defaultOptions = {
    texture: G.Texture.WHITE,
    verticesX: 10,
    verticesY: 10,
    x0: 0,
    y0: 0,
    x1: 100,
    y1: 0,
    x2: 100,
    y2: 100,
    x3: 0,
    y3: 100
  };
  let ud = class e extends r8 {
    constructor(t) {
      const {
        width: r,
        points: n,
        textureScale: i
      } = {
        ...e.defaultOptions,
        ...t
      };
      super({
        positions: new Float32Array(4 * n.length),
        uvs: new Float32Array(4 * n.length),
        indices: new Uint32Array((n.length - 1) * 6)
      }), this.points = n, this._width = r, this.textureScale = i, this._build();
    }
    get width() {
      return this._width;
    }
    _build() {
      let e = this.points;
      if (!e) return;
      let t = this.getBuffer("aPosition"),
        r = this.getBuffer("aUV"),
        n = this.getIndex();
      if (e.length < 1) return;
      t.data.length / 4 !== e.length && (t.data = new Float32Array(4 * e.length), r.data = new Float32Array(4 * e.length), n.data = new Uint16Array((e.length - 1) * 6));
      let i = r.data,
        a = n.data;
      i[0] = 0, i[1] = 0, i[2] = 0, i[3] = 1;
      let o = 0,
        s = e[0],
        l = this._width * this.textureScale,
        u = e.length;
      for (let t = 0; t < u; t++) {
        let r = 4 * t;
        if (this.textureScale > 0) {
          let r = s.x - e[t].x,
            n = s.y - e[t].y,
            i = Math.sqrt(r * r + n * n);
          s = e[t], o += i / l;
        } else o = t / (u - 1);
        i[r] = o, i[r + 1] = 0, i[r + 2] = o, i[r + 3] = 1;
      }
      let c = 0;
      for (let e = 0; e < u - 1; e++) {
        let t = 2 * e;
        a[c++] = t, a[c++] = t + 1, a[c++] = t + 2, a[c++] = t + 2, a[c++] = t + 1, a[c++] = t + 3;
      }
      r.update(), n.update(), this.updateVertices();
    }
    updateVertices() {
      let e,
        t = this.points;
      if (t.length < 1) return;
      let r = t[0],
        n = 0,
        i = 0,
        a = this.buffers[0].data,
        o = t.length,
        s = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
      for (let l = 0; l < o; l++) {
        let u = t[l],
          c = 4 * l;
        i = -((e = l < t.length - 1 ? t[l + 1] : u).x - r.x), n = e.y - r.y;
        let d = (1 - l / (o - 1)) * 10;
        d > 1 && (d = 1);
        let h = Math.sqrt(n * n + i * i);
        h < 1e-6 ? (n = 0, i = 0) : (n /= h, i /= h, n *= s, i *= s), a[c] = u.x + n, a[c + 1] = u.y + i, a[c + 2] = u.x - n, a[c + 3] = u.y - i, r = u;
      }
      this.buffers[0].update();
    }
    update() {
      this.textureScale > 0 ? this._build() : this.updateVertices();
    }
  };
  ud.defaultOptions = {
    width: 200,
    points: [],
    textureScale: 0
  };
  let uh = class e extends nt {
    constructor(t) {
      const {
          width: r,
          texture: n,
          points: i,
          textureScale: a,
          ...o
        } = {
          ...e.defaultOptions,
          ...t
        },
        s = new ud((0, ln.definedProps)({
          width: r ?? n.height,
          points: i,
          textureScale: a
        }));
      a > 0 && (n.source.style.addressMode = "repeat"), super((0, ln.definedProps)({
        ...o,
        texture: n,
        geometry: s
      })), this.autoUpdate = !0, this.onRender = this._render;
    }
    _render() {
      let e = this.geometry;
      (this.autoUpdate || e._width !== this.texture.height) && (e._width = this.texture.height, e.update());
    }
  };
  uh.defaultOptions = {
    textureScale: 0
  };
  var up = e.i(727453),
    uf = e.i(129249);
  class um {
    execute(e, t) {
      let r = e.renderer,
        n = r.canvasContext.activeContext,
        i = t.particleChildren,
        a = t.texture;
      n.save(), r.canvasContext.setContextTransform(t.worldTransform, t.roundPixels), r.canvasContext.setBlendMode(t.groupBlendMode);
      let o = (t.groupColorAlpha >>> 24 & 255) / 255 * (r.filter?.alphaMultiplier ?? 1);
      for (let e = 0; e < i.length; e++) {
        let t = i[e],
          r = t.texture || a;
        if (!r?.source?.resource) continue;
        let s = t.color,
          l = (s >>> 24 & 255) / 255 * o;
        if (l <= 0) continue;
        let u = 0xffffff & s,
          c = ((255 & u) << 16) + (65280 & u) + (u >> 16 & 255),
          d = r.source.resource;
        0xffffff !== c && (d = na.canvasUtils.getTintedCanvas({
          texture: r
        }, c));
        let h = r.frame,
          p = r.source.resolution,
          f = h.x * p,
          m = h.y * p,
          g = h.width * p,
          b = h.height * p;
        n.globalAlpha = l;
        let _ = -t.anchorX * h.width,
          x = -t.anchorY * h.height;
        0 !== t.rotation || 1 !== t.scaleX || 1 !== t.scaleY ? (n.save(), n.translate(t.x, t.y), n.rotate(t.rotation), n.scale(t.scaleX, t.scaleY), n.drawImage(d, f, m, g, b, _, x, h.width, h.height), n.restore()) : n.drawImage(d, f, m, g, b, t.x + _, t.y + x, h.width, h.height);
      }
      n.restore();
    }
  }
  var ug = e.i(565557);
  function ub(e, t = null) {
    let r = 6 * e;
    if (r > 65535 ? t || (t = new Uint32Array(r)) : t || (t = new Uint16Array(r)), t.length !== r) throw Error(`Out buffer length is incorrect, got ${t.length} and expected ${r}`);
    for (let e = 0, n = 0; e < r; e += 6, n += 4) t[e + 0] = n + 0, t[e + 1] = n + 1, t[e + 2] = n + 2, t[e + 3] = n + 0, t[e + 4] = n + 2, t[e + 5] = n + 3;
    return t;
  }
  function u_(e) {
    return {
      dynamicUpdate: ux(e, !0),
      staticUpdate: ux(e, !1)
    };
  }
  function ux(e, t) {
    let r = [];
    r.push(`

        var index = 0;

        for (let i = 0; i < ps.length; ++i)
        {
            const p = ps[i];

            `);
    let n = 0;
    for (let i in e) {
      let a = e[i];
      t === a.dynamic && (r.push(`offset = index + ${n}`), r.push(a.code), n += (0, o4.getAttributeInfoFromFormat)(a.format).stride / 4);
    }
    return r.push(`
            index += stride * 4;
        }
    `), r.unshift(`
        var stride = ${n};
    `), Function("ps", "f32v", "u32v", r.join("\n"));
  }
  class uT {
    constructor(e) {
      this._size = 0, this._generateParticleUpdateCache = {};
      const t = this._size = e.size ?? 1e3,
        r = e.properties;
      let n = 0,
        i = 0;
      for (const e in r) {
        const t = r[e],
          a = (0, o4.getAttributeInfoFromFormat)(t.format);
        t.dynamic ? i += a.stride : n += a.stride;
      }
      this._dynamicStride = i / 4, this._staticStride = n / 4, this.staticAttributeBuffer = new ug.ViewableBuffer(4 * t * n), this.dynamicAttributeBuffer = new ug.ViewableBuffer(4 * t * i), this.indexBuffer = ub(t);
      const a = new rQ.Geometry();
      let o = 0,
        s = 0;
      for (const e in this._staticBuffer = new r0.Buffer({
        data: new Float32Array(1),
        label: "static-particle-buffer",
        shrinkToFit: !1,
        usage: r3.BufferUsage.VERTEX | r3.BufferUsage.COPY_DST
      }), this._dynamicBuffer = new r0.Buffer({
        data: new Float32Array(1),
        label: "dynamic-particle-buffer",
        shrinkToFit: !1,
        usage: r3.BufferUsage.VERTEX | r3.BufferUsage.COPY_DST
      }), r) {
        const t = r[e],
          n = (0, o4.getAttributeInfoFromFormat)(t.format);
        t.dynamic ? (a.addAttribute(t.attributeName, {
          buffer: this._dynamicBuffer,
          stride: 4 * this._dynamicStride,
          offset: 4 * o,
          format: t.format
        }), o += n.size) : (a.addAttribute(t.attributeName, {
          buffer: this._staticBuffer,
          stride: 4 * this._staticStride,
          offset: 4 * s,
          format: t.format
        }), s += n.size);
      }
      a.addIndex(this.indexBuffer);
      const l = this.getParticleUpdate(r);
      this._dynamicUpload = l.dynamicUpdate, this._staticUpload = l.staticUpdate, this.geometry = a;
    }
    getParticleUpdate(e) {
      let t = function (e) {
        let t = [];
        for (let r in e) {
          let n = e[r];
          t.push(r, n.code, n.dynamic ? "d" : "s");
        }
        return t.join("_");
      }(e);
      return this._generateParticleUpdateCache[t] || (this._generateParticleUpdateCache[t] = this.generateParticleUpdate(e)), this._generateParticleUpdateCache[t];
    }
    generateParticleUpdate(e) {
      return u_(e);
    }
    update(e, t) {
      e.length > this._size && (t = !0, this._size = Math.max(e.length, 1.5 * this._size | 0), this.staticAttributeBuffer = new ug.ViewableBuffer(this._size * this._staticStride * 16), this.dynamicAttributeBuffer = new ug.ViewableBuffer(this._size * this._dynamicStride * 16), this.indexBuffer = ub(this._size), this.geometry.indexBuffer.setDataWithSize(this.indexBuffer, this.indexBuffer.byteLength, !0));
      let r = this.dynamicAttributeBuffer;
      if (this._dynamicUpload(e, r.float32View, r.uint32View), this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View, e.length * this._dynamicStride * 4, !0), t) {
        let t = this.staticAttributeBuffer;
        this._staticUpload(e, t.float32View, t.uint32View), this._staticBuffer.setDataWithSize(t.float32View, e.length * this._staticStride * 4, !0);
      }
    }
    destroy() {
      this._staticBuffer.destroy(), this._dynamicBuffer.destroy(), this.geometry.destroy();
    }
  }
  var uy = ng;
  class uS extends uy.Shader {
    constructor() {
      super({
        glProgram: A.GlProgram.from({
          vertex: sV,
          fragment: sH
        }),
        gpuProgram: M.GpuProgram.from({
          fragment: {
            source: s$,
            entryPoint: "mainFragment"
          },
          vertex: {
            source: s$,
            entryPoint: "mainVertex"
          }
        }),
        resources: {
          uTexture: G.Texture.WHITE.source,
          uSampler: new nC.TextureStyle({}),
          uniforms: {
            uTranslationMatrix: {
              value: new tC.Matrix(),
              type: "mat3x3<f32>"
            },
            uColor: {
              value: new eN.Color(0xffffff),
              type: "vec4<f32>"
            },
            uRound: {
              value: 1,
              type: "f32"
            },
            uResolution: {
              value: [0, 0],
              type: "vec2<f32>"
            }
          }
        }
      });
    }
  }
  class uv {
    constructor(e, t) {
      this.state = rZ.State.for2d(), this.localUniforms = new C.UniformGroup({
        uTranslationMatrix: {
          value: new tC.Matrix(),
          type: "mat3x3<f32>"
        },
        uColor: {
          value: new Float32Array(4),
          type: "vec4<f32>"
        },
        uRound: {
          value: 1,
          type: "f32"
        },
        uResolution: {
          value: [0, 0],
          type: "vec2<f32>"
        }
      }), this.renderer = e, this.adaptor = t, this.defaultShader = new uS(), this.state = rZ.State.for2d(), this._managedContainers = new nh.GCManagedHash({
        renderer: e,
        type: "renderable",
        name: "particleContainer"
      });
    }
    validateRenderable(e) {
      return !1;
    }
    addRenderable(e, t) {
      this.renderer.renderPipes.batch.break(t), t.add(e);
    }
    getBuffers(e) {
      return e._gpuData[this.renderer.uid] || this._initBuffer(e);
    }
    _initBuffer(e) {
      return e._gpuData[this.renderer.uid] = new uT({
        size: e.particleChildren.length,
        properties: e._properties
      }), this._managedContainers.add(e), e._gpuData[this.renderer.uid];
    }
    updateRenderable(e) {}
    execute(e) {
      let t = e.particleChildren;
      if (0 === t.length) return;
      let r = this.renderer,
        n = this.getBuffers(e);
      e.texture || (e.texture = t[0].texture);
      let i = this.state;
      n.update(t, e._childrenDirty), e._childrenDirty = !1, i.blendMode = (0, r6.getAdjustedBlendModeBlend)(e.groupBlendMode, e.texture._source);
      let a = this.localUniforms.uniforms,
        o = a.uTranslationMatrix;
      e.worldTransform.copyTo(o);
      let s = r.globalUniforms.globalUniformData;
      o.tx -= s.offset.x, o.ty -= s.offset.y, o.prepend(s.projectionMatrix), a.uResolution = s.resolution, a.uRound = r._roundPixels | e._roundPixels, (0, r5.color32BitToUniform)(e.groupColorAlpha, a.uColor, 0), this.adaptor.execute(this, e);
    }
    destroy() {
      this._managedContainers.destroy(), this.renderer = null, this.defaultShader && (this.defaultShader.destroy(), this.defaultShader = null);
    }
  }
  uv.extension = {
    type: [v.ExtensionType.CanvasPipes],
    name: "particle"
  };
  class uR extends uv {
    constructor(e) {
      super(e, new um());
    }
  }
  uR.extension = {
    type: [v.ExtensionType.CanvasPipes],
    name: "particle"
  };
  class uE {
    execute(e, t) {
      let r = e.state,
        n = e.renderer,
        i = t.shader || e.defaultShader;
      i.resources.uTexture = t.texture._source, i.resources.uniforms = e.localUniforms;
      let a = n.gl,
        o = e.getBuffers(t);
      n.shader.bind(i), n.state.set(r), n.geometry.bind(o.geometry, i.glProgram);
      let s = 2 === o.geometry.indexBuffer.data.BYTES_PER_ELEMENT ? a.UNSIGNED_SHORT : a.UNSIGNED_INT;
      a.drawElements(a.TRIANGLES, 6 * t.particleChildren.length, s, 0);
    }
  }
  class uA extends uv {
    constructor(e) {
      super(e, new uE());
    }
  }
  uA.extension = {
    type: [v.ExtensionType.WebGLPipes],
    name: "particle"
  };
  class uM {
    execute(e, t) {
      let r = e.renderer,
        n = t.shader || e.defaultShader;
      n.groups[0] = r.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms, !0), n.groups[1] = r.texture.getTextureBindGroup(t.texture);
      let i = e.state,
        a = e.getBuffers(t);
      r.encoder.draw({
        geometry: a.geometry,
        shader: t.shader || e.defaultShader,
        state: i,
        size: 6 * t.particleChildren.length
      });
    }
  }
  class uC extends uv {
    constructor(e) {
      super(e, new uM());
    }
  }
  uC.extension = {
    type: [v.ExtensionType.WebGPUPipes],
    name: "particle"
  };
  let uG = class e {
    constructor(t) {
      if (t instanceof G.Texture) this.texture = t, (0, le.assignWithIgnore)(this, e.defaultOptions, {});else {
        const r = {
          ...e.defaultOptions,
          ...t
        };
        (0, le.assignWithIgnore)(this, r, {});
      }
    }
    get alpha() {
      return this._alpha;
    }
    set alpha(e) {
      this._alpha = Math.min(Math.max(e, 0), 1), this._updateColor();
    }
    get tint() {
      return (0, no.bgr2rgb)(this._tint);
    }
    set tint(e) {
      this._tint = eN.Color.shared.setValue(e ?? 0xffffff).toBgrNumber(), this._updateColor();
    }
    _updateColor() {
      this.color = this._tint + (255 * this._alpha << 24);
    }
  };
  uG.defaultOptions = {
    anchorX: 0,
    anchorY: 0,
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    rotation: 0,
    tint: 0xffffff,
    alpha: 1
  };
  var uw = tX;
  let uD = {
    vertex: {
      attributeName: "aVertex",
      format: "float32x2",
      code: `
            const texture = p.texture;
            const sx = p.scaleX;
            const sy = p.scaleY;
            const ax = p.anchorX;
            const ay = p.anchorY;
            const trim = texture.trim;
            const orig = texture.orig;

            if (trim)
            {
                w1 = trim.x - (ax * orig.width);
                w0 = w1 + trim.width;

                h1 = trim.y - (ay * orig.height);
                h0 = h1 + trim.height;
            }
            else
            {
                w1 = -ax * (orig.width);
                w0 = w1 + orig.width;

                h1 = -ay * (orig.height);
                h0 = h1 + orig.height;
            }

            f32v[offset] = w1 * sx;
            f32v[offset + 1] = h1 * sy;

            f32v[offset + stride] = w0 * sx;
            f32v[offset + stride + 1] = h1 * sy;

            f32v[offset + (stride * 2)] = w0 * sx;
            f32v[offset + (stride * 2) + 1] = h0 * sy;

            f32v[offset + (stride * 3)] = w1 * sx;
            f32v[offset + (stride * 3) + 1] = h0 * sy;
        `,
      dynamic: !1
    },
    position: {
      attributeName: "aPosition",
      format: "float32x2",
      code: `
            var x = p.x;
            var y = p.y;

            f32v[offset] = x;
            f32v[offset + 1] = y;

            f32v[offset + stride] = x;
            f32v[offset + stride + 1] = y;

            f32v[offset + (stride * 2)] = x;
            f32v[offset + (stride * 2) + 1] = y;

            f32v[offset + (stride * 3)] = x;
            f32v[offset + (stride * 3) + 1] = y;
        `,
      dynamic: !0
    },
    rotation: {
      attributeName: "aRotation",
      format: "float32",
      code: `
            var rotation = p.rotation;

            f32v[offset] = rotation;
            f32v[offset + stride] = rotation;
            f32v[offset + (stride * 2)] = rotation;
            f32v[offset + (stride * 3)] = rotation;
        `,
      dynamic: !1
    },
    uvs: {
      attributeName: "aUV",
      format: "float32x2",
      code: `
            var uvs = p.texture.uvs;

            f32v[offset] = uvs.x0;
            f32v[offset + 1] = uvs.y0;

            f32v[offset + stride] = uvs.x1;
            f32v[offset + stride + 1] = uvs.y1;

            f32v[offset + (stride * 2)] = uvs.x2;
            f32v[offset + (stride * 2) + 1] = uvs.y2;

            f32v[offset + (stride * 3)] = uvs.x3;
            f32v[offset + (stride * 3) + 1] = uvs.y3;
        `,
      dynamic: !1
    },
    color: {
      attributeName: "aColor",
      format: "unorm8x4",
      code: `
            const c = p.color;

            u32v[offset] = c;
            u32v[offset + stride] = c;
            u32v[offset + (stride * 2)] = c;
            u32v[offset + (stride * 3)] = c;
        `,
      dynamic: !1
    }
  };
  v.extensions.add(uA), v.extensions.add(uC), v.extensions.add(uR);
  let uP = new tw.Bounds(0, 0, 0, 0),
    uO = class e extends uw.ViewContainer {
      constructor(t = {}) {
        const {
          dynamicProperties: r,
          shader: n,
          roundPixels: i,
          texture: a,
          particles: o,
          ...s
        } = t = {
          ...e.defaultOptions,
          ...t,
          dynamicProperties: {
            ...e.defaultOptions.dynamicProperties,
            ...t?.dynamicProperties
          }
        };
        for (const e in super({
          label: "ParticleContainer",
          ...s
        }), this.renderPipeId = "particle", this.batched = !1, this._childrenDirty = !1, this.texture = a || null, this.shader = n, this._properties = {}, uD) {
          const t = uD[e],
            n = r[e];
          this._properties[e] = {
            ...t,
            dynamic: n
          };
        }
        this.allowChildren = !0, this.roundPixels = i ?? !1, this.particleChildren = o ?? [];
      }
      addParticle(...e) {
        for (let t = 0; t < e.length; t++) this.particleChildren.push(e[t]);
        return this.onViewUpdate(), e[0];
      }
      removeParticle(...e) {
        let t = !1;
        for (let r = 0; r < e.length; r++) {
          let n = this.particleChildren.indexOf(e[r]);
          n > -1 && (this.particleChildren.splice(n, 1), t = !0);
        }
        return t && this.onViewUpdate(), e[0];
      }
      update() {
        this._childrenDirty = !0;
      }
      onViewUpdate() {
        this._childrenDirty = !0, super.onViewUpdate();
      }
      get bounds() {
        return uP;
      }
      updateBounds() {}
      destroy(e = !1) {
        if (super.destroy(e), "boolean" == typeof e ? e : e?.texture) {
          let t = "boolean" == typeof e ? e : e?.textureSource,
            r = this.texture ?? this.particleChildren[0]?.texture;
          r && r.destroy(t);
        }
        this.texture = null, this.shader?.destroy();
      }
      removeParticles(e, t) {
        e ?? (e = 0), t ?? (t = this.particleChildren.length);
        let r = this.particleChildren.splice(e, t - e);
        return this.onViewUpdate(), r;
      }
      removeParticleAt(e) {
        let t = this.particleChildren.splice(e, 1);
        return this.onViewUpdate(), t[0];
      }
      addParticleAt(e, t) {
        return this.particleChildren.splice(t, 0, e), this.onViewUpdate(), e;
      }
      addChild() {
        throw Error("ParticleContainer.addChild() is not available. Please use ParticleContainer.addParticle()");
      }
      removeChild() {
        throw Error("ParticleContainer.removeChild() is not available. Please use ParticleContainer.removeParticle()");
      }
      removeChildren(e, t) {
        throw Error("ParticleContainer.removeChildren() is not available. Please use ParticleContainer.removeParticles()");
      }
      removeChildAt(e) {
        throw Error("ParticleContainer.removeChildAt() is not available. Please use ParticleContainer.removeParticleAt()");
      }
      getChildAt(e) {
        throw Error("ParticleContainer.getChildAt() is not available. Please use ParticleContainer.getParticleAt()");
      }
      setChildIndex(e, t) {
        throw Error("ParticleContainer.setChildIndex() is not available. Please use ParticleContainer.setParticleIndex()");
      }
      getChildIndex(e) {
        throw Error("ParticleContainer.getChildIndex() is not available. Please use ParticleContainer.getParticleIndex()");
      }
      addChildAt(e, t) {
        throw Error("ParticleContainer.addChildAt() is not available. Please use ParticleContainer.addParticleAt()");
      }
      swapChildren(e, t) {
        throw Error("ParticleContainer.swapChildren() is not available. Please use ParticleContainer.swapParticles()");
      }
      reparentChild() {
        throw Error("ParticleContainer.reparentChild() is not available with the particle container");
      }
      reparentChildAt(e, t) {
        throw Error("ParticleContainer.reparentChildAt() is not available with the particle container");
      }
    };
  uO.defaultOptions = {
    dynamicProperties: {
      vertex: !1,
      position: !0,
      rotation: !1,
      uvs: !1,
      color: !1
    },
    roundPixels: !1
  };
  class uB {
    constructor(e) {
      this._renderer = e;
    }
    validateRenderable(e) {
      return !1;
    }
    addRenderable(e, t) {
      this._renderer.renderPipes.batch.break(t), t.add(e);
    }
    updateRenderable(e) {}
    execute(e) {
      let t = this._renderer,
        r = t.canvasContext,
        n = r.activeContext;
      n.save();
      let i = e.groupTransform,
        a = t._roundPixels | e._roundPixels;
      r.setContextTransform(i, 1 === a), r.setBlendMode(e.groupBlendMode);
      let o = t.globalUniforms.globalUniformData?.worldColor ?? 0xffffffff,
        s = e.groupColorAlpha,
        l = (o >>> 24 & 255) / 255 * ((s >>> 24 & 255) / 255) * (t.filter?.alphaMultiplier ?? 1);
      if (l <= 0) return void n.restore();
      n.globalAlpha = l;
      let u = (0, no.bgr2rgb)((0, ns.multiplyHexColors)(0xffffff & s, 0xffffff & o)),
        c = e.texture,
        d = na.canvasUtils.getCanvasSource(c);
      if (!d) return void n.restore();
      let h = r.smoothProperty,
        p = "nearest" !== c.source.style.scaleMode;
      n[h] !== p && (n[h] = p);
      let f = 0xffffff !== u || 0 !== c.rotate,
        m = f ? na.canvasUtils.getTintedCanvas({
          texture: c
        }, u) : d,
        {
          leftWidth: g,
          topHeight: b,
          rightWidth: _,
          bottomHeight: x,
          width: T,
          height: y
        } = e,
        S = g + _,
        v = b + x,
        R = Math.min(S > T ? T / S : 1, v > y ? y / v : 1, 1),
        E = g * R,
        A = _ * R,
        M = b * R,
        C = x * R,
        G = Math.max(0, T - E - A),
        w = Math.max(0, y - M - C),
        D = e.anchor,
        P = c.source._resolution ?? c.source.resolution ?? 1,
        O = c.frame.x * P,
        B = c.frame.y * P,
        F = -D.x * T,
        I = -D.y * y,
        U = g * P,
        L = b * P,
        N = _ * P,
        X = x * P,
        k = c.frame.width * P,
        H = c.frame.height * P;
      f && (O = 0, B = 0, k = m.width, H = m.height), n.drawImage(m, O, B, U, L, F, I, E, M), n.drawImage(m, O + U, B, k - U - N, L, F + E, I, G, M), n.drawImage(m, O + k - N, B, N, L, F + T - A, I, A, M), n.drawImage(m, O, B + L, U, H - L - X, F, I + M, E, w), n.drawImage(m, O + U, B + L, k - U - N, H - L - X, F + E, I + M, G, w), n.drawImage(m, O + k - N, B + L, N, H - L - X, F + T - A, I + M, A, w), n.drawImage(m, O, B + H - X, U, X, F, I + y - C, E, C), n.drawImage(m, O + U, B + H - X, k - U - N, X, F + E, I + y - C, G, C), n.drawImage(m, O + k - N, B + H - X, N, X, F + T - A, I + y - C, A, C), n.restore();
    }
    destroy() {
      this._renderer = null;
    }
  }
  uB.extension = {
    type: [v.ExtensionType.CanvasPipes],
    name: "nineSliceSprite"
  };
  let uF = class e extends l7 {
    constructor(t = {}) {
      super({
        width: (t = {
          ...e.defaultOptions,
          ...t
        }).width,
        height: t.height,
        verticesX: 4,
        verticesY: 4
      }), this._trimX = 0, this._trimY = 0, this._trimWidth = t.originalWidth ?? e.defaultOptions.originalWidth, this._trimHeight = t.originalHeight ?? e.defaultOptions.originalHeight, this.update(t);
    }
    update(e) {
      this.width = e.width ?? this.width, this.height = e.height ?? this.height, this._originalWidth = e.originalWidth ?? this._originalWidth, this._originalHeight = e.originalHeight ?? this._originalHeight, this._leftWidth = e.leftWidth ?? this._leftWidth, this._rightWidth = e.rightWidth ?? this._rightWidth, this._topHeight = e.topHeight ?? this._topHeight, this._bottomHeight = e.bottomHeight ?? this._bottomHeight, this._anchorX = e.anchor?.x, this._anchorY = e.anchor?.y, void 0 !== e.trim ? (this._trimX = e.trim?.x ?? 0, this._trimY = e.trim?.y ?? 0, this._trimWidth = e.trim?.width ?? this._originalWidth, this._trimHeight = e.trim?.height ?? this._originalHeight) : (this._trimWidth = this._originalWidth, this._trimHeight = this._originalHeight), this.updateUvs(), this.updatePositions();
    }
    updatePositions() {
      let e = this.positions,
        {
          width: t,
          height: r,
          _leftWidth: n,
          _rightWidth: i,
          _topHeight: a,
          _bottomHeight: o,
          _anchorX: s,
          _anchorY: l
        } = this,
        u = n + i,
        c = a + o,
        d = Math.min(t > u ? 1 : t / u, r > c ? 1 : r / c),
        h = s * t,
        p = l * r;
      e[0] = e[8] = e[16] = e[24] = -h, e[2] = e[10] = e[18] = e[26] = n * d - h, e[4] = e[12] = e[20] = e[28] = t - i * d - h, e[6] = e[14] = e[22] = e[30] = t - h, e[1] = e[3] = e[5] = e[7] = -p, e[9] = e[11] = e[13] = e[15] = a * d - p, e[17] = e[19] = e[21] = e[23] = r - o * d - p, e[25] = e[27] = e[29] = e[31] = r - p, this.getBuffer("aPosition").update();
    }
    updateUvs() {
      let e = this.uvs,
        t = this._originalWidth,
        r = this._originalHeight,
        n = this._trimX / t,
        i = this._trimY / r,
        a = (this._trimX + this._trimWidth) / t,
        o = (this._trimY + this._trimHeight) / r;
      e[0] = e[8] = e[16] = e[24] = n, e[1] = e[3] = e[5] = e[7] = i, e[6] = e[14] = e[22] = e[30] = a, e[25] = e[27] = e[29] = e[31] = o;
      let s = 1 / t,
        l = 1 / r;
      e[2] = e[10] = e[18] = e[26] = n + s * this._leftWidth, e[9] = e[11] = e[13] = e[15] = i + l * this._topHeight, e[4] = e[12] = e[20] = e[28] = a - s * this._rightWidth, e[17] = e[19] = e[21] = e[23] = o - l * this._bottomHeight, this.getBuffer("aUV").update();
    }
  };
  uF.defaultOptions = {
    width: 100,
    height: 100,
    leftWidth: 10,
    topHeight: 10,
    rightWidth: 10,
    bottomHeight: 10,
    originalWidth: 100,
    originalHeight: 100
  };
  var uI = tX;
  class uU extends r7 {
    constructor() {
      super(), this.geometry = new uF();
    }
    destroy() {
      this.geometry.destroy();
    }
  }
  class uL {
    constructor(e) {
      this._renderer = e, this._managedSprites = new nh.GCManagedHash({
        renderer: e,
        type: "renderable",
        name: "nineSliceSprite"
      });
    }
    addRenderable(e, t) {
      let r = this._getGpuSprite(e);
      e.didViewUpdate && this._updateBatchableSprite(e, r), this._renderer.renderPipes.batch.addToBatch(r, t);
    }
    updateRenderable(e) {
      let t = this._getGpuSprite(e);
      e.didViewUpdate && this._updateBatchableSprite(e, t), t._batcher.updateElement(t);
    }
    validateRenderable(e) {
      let t = this._getGpuSprite(e);
      return !t._batcher.checkAndUpdateTexture(t, e._texture);
    }
    _updateBatchableSprite(e, t) {
      t.geometry.update(e), t.setTexture(e._texture);
    }
    _getGpuSprite(e) {
      return e._gpuData[this._renderer.uid] || this._initGPUSprite(e);
    }
    _initGPUSprite(e) {
      let t = e._gpuData[this._renderer.uid] = new uU();
      return t.renderable = e, t.transform = e.groupTransform, t.texture = e._texture, t.roundPixels = this._renderer._roundPixels | e._roundPixels, this._managedSprites.add(e), e.didViewUpdate || this._updateBatchableSprite(e, t), t;
    }
    destroy() {
      this._managedSprites.destroy(), this._renderer = null;
    }
  }
  uL.extension = {
    type: [v.ExtensionType.WebGLPipes, v.ExtensionType.WebGPUPipes],
    name: "nineSliceSprite"
  }, v.extensions.add(uB), v.extensions.add(uL);
  let uN = class e extends uI.ViewContainer {
    constructor(t) {
      t instanceof G.Texture && (t = {
        texture: t
      });
      const {
        width: r,
        height: n,
        anchor: i,
        leftWidth: a,
        rightWidth: o,
        topHeight: s,
        bottomHeight: l,
        texture: u,
        roundPixels: c,
        ...d
      } = t;
      super({
        label: "NineSliceSprite",
        ...d
      }), this.renderPipeId = "nineSliceSprite", this.batched = !0, this._leftWidth = a ?? u?.defaultBorders?.left ?? uF.defaultOptions.leftWidth, this._topHeight = s ?? u?.defaultBorders?.top ?? uF.defaultOptions.topHeight, this._rightWidth = o ?? u?.defaultBorders?.right ?? uF.defaultOptions.rightWidth, this._bottomHeight = l ?? u?.defaultBorders?.bottom ?? uF.defaultOptions.bottomHeight, this._width = r ?? u.width ?? uF.defaultOptions.width, this._height = n ?? u.height ?? uF.defaultOptions.height, this.allowChildren = !1, this.texture = u ?? e.defaultOptions.texture, this.roundPixels = c ?? !1, this._anchor = new rL.ObservablePoint({
        _onUpdate: () => {
          this.onViewUpdate();
        }
      }), i ? this.anchor = i : this.texture.defaultAnchor && (this.anchor = this.texture.defaultAnchor);
    }
    get anchor() {
      return this._anchor;
    }
    set anchor(e) {
      "number" == typeof e ? this._anchor.set(e) : this._anchor.copyFrom(e);
    }
    get width() {
      return this._width;
    }
    set width(e) {
      this._width = e, this.onViewUpdate();
    }
    get height() {
      return this._height;
    }
    set height(e) {
      this._height = e, this.onViewUpdate();
    }
    setSize(e, t) {
      "object" == typeof e && (t = e.height ?? e.width, e = e.width), this._width = e, this._height = t ?? e, this.onViewUpdate();
    }
    getSize(e) {
      return e || (e = {}), e.width = this._width, e.height = this._height, e;
    }
    get leftWidth() {
      return this._leftWidth;
    }
    set leftWidth(e) {
      this._leftWidth = e, this.onViewUpdate();
    }
    get topHeight() {
      return this._topHeight;
    }
    set topHeight(e) {
      this._topHeight = e, this.onViewUpdate();
    }
    get rightWidth() {
      return this._rightWidth;
    }
    set rightWidth(e) {
      this._rightWidth = e, this.onViewUpdate();
    }
    get bottomHeight() {
      return this._bottomHeight;
    }
    set bottomHeight(e) {
      this._bottomHeight = e, this.onViewUpdate();
    }
    get texture() {
      return this._texture;
    }
    set texture(e) {
      e || (e = G.Texture.EMPTY);
      let t = this._texture;
      t !== e && (t && t.dynamic && t.off("update", this.onViewUpdate, this), e.dynamic && e.on("update", this.onViewUpdate, this), this._texture = e, this.onViewUpdate());
    }
    get originalWidth() {
      return this._texture.width;
    }
    get originalHeight() {
      return this._texture.height;
    }
    get trim() {
      return this._texture.trim ?? null;
    }
    destroy(e) {
      if (super.destroy(e), "boolean" == typeof e ? e : e?.texture) {
        let t = "boolean" == typeof e ? e : e?.textureSource;
        this._texture.destroy(t);
      }
      this._texture = null;
    }
    updateBounds() {
      let e = this._bounds,
        t = this._anchor,
        r = this._width,
        n = this._height;
      e.minX = -t._x * r, e.maxX = e.minX + r, e.minY = -t._y * n, e.maxY = e.minY + n;
    }
  };
  uN.defaultOptions = {
    texture: G.Texture.EMPTY
  };
  let uX = uN;
  var uk = e.i(751559),
    uH = e.i(383361),
    uV = e.i(847357),
    u$ = e.i(506758),
    uq = e.i(725794),
    uz = e.i(121658),
    uW = e.i(610606),
    uY = e.i(952196);
  function uj(e) {
    let {
        text: t,
        style: r,
        chars: n
      } = e,
      i = n1.BitmapFontManager.getFont(t, r),
      a = nL.CanvasTextMetrics.graphemeSegmenter(t),
      o = (0, n4.getBitmapTextLayout)(a, r, i, !0),
      s = o.scale,
      l = [],
      u = [],
      c = [],
      d = r.lineHeight ? r.lineHeight : i.lineHeight * s,
      h = 0;
    for (let e of o.lines) {
      if (0 === e.chars.length) continue;
      let t = new r$.Container({
        label: "line"
      });
      t.y = h, c.push(t);
      let a = new r$.Container({
          label: "word"
        }),
        o = 0;
      for (let c = 0; c < e.chars.length; c++) {
        let d,
          h = e.chars[c];
        if (!h || !i.chars[h]) continue;
        let p = " " === h,
          f = c === e.chars.length - 1;
        n.length > 0 ? ((d = n.shift()).text = h, d.style = r, d.label = `char-${h}`, d.x = e.charPositions[c] * s - e.charPositions[o] * s) : d = new id({
          text: h,
          style: r,
          label: `char-${h}`,
          x: e.charPositions[c] * s - e.charPositions[o] * s
        }), p || (l.push(d), a.addChild(d)), (p || f) && a.children.length > 0 && (a.x = e.charPositions[o] * s, u.push(a), t.addChild(a), a = new r$.Container({
          label: "word"
        }), o = c + 1);
      }
      h += d;
    }
    return {
      chars: l,
      lines: c,
      words: u
    };
  }
  var uK = e.i(624433),
    uQ = r$;
  class uZ extends uQ.Container {
    constructor(e) {
      const {
        text: t,
        style: r,
        autoSplit: n,
        lineAnchor: i,
        wordAnchor: a,
        charAnchor: o,
        ...s
      } = e;
      super(s), this._dirty = !1, this._canReuseChars = !1, this.chars = [], this.words = [], this.lines = [], this._originalText = t, this._autoSplit = n, this._lineAnchor = i, this._wordAnchor = a, this._charAnchor = o, this.style = r;
    }
    split() {
      let e = this.splitFn();
      this.chars = e.chars, this.words = e.words, this.lines = e.lines, this.addChild(...this.lines), this.charAnchor = this._charAnchor, this.wordAnchor = this._wordAnchor, this.lineAnchor = this._lineAnchor, this._dirty = !1, this._canReuseChars = !0;
    }
    get text() {
      return this._originalText;
    }
    set text(e) {
      this._originalText = e, this.lines.forEach(e => e.destroy({
        children: !0
      })), this.lines.length = 0, this.words.length = 0, this.chars.length = 0, this._canReuseChars = !1, this.onTextUpdate();
    }
    _setOrigin(e, t, r) {
      let n;
      n = "number" == typeof e ? {
        x: e,
        y: e
      } : {
        x: e.x,
        y: e.y
      }, t.forEach(e => {
        let t = e.getLocalBounds(),
          r = t.minX + t.width * n.x,
          i = t.minY + t.height * n.y;
        e.origin.set(r, i);
      }), this[r] = e;
    }
    get lineAnchor() {
      return this._lineAnchor;
    }
    set lineAnchor(e) {
      this._setOrigin(e, this.lines, "_lineAnchor");
    }
    get wordAnchor() {
      return this._wordAnchor;
    }
    set wordAnchor(e) {
      this._setOrigin(e, this.words, "_wordAnchor");
    }
    get charAnchor() {
      return this._charAnchor;
    }
    set charAnchor(e) {
      this._setOrigin(e, this.chars, "_charAnchor");
    }
    get style() {
      return this._style;
    }
    set style(e) {
      e || (e = {}), this._style = new n$.TextStyle(e), this.styleChanged();
    }
    styleChanged() {
      this.words.forEach(e => e.destroy()), this.words.length = 0, this.lines.forEach(e => e.destroy()), this.lines.length = 0, this._canReuseChars = !0, this.onTextUpdate();
    }
    onTextUpdate() {
      this._dirty = !0, this._autoSplit && this.split();
    }
    destroy(e) {
      super.destroy(e), this.chars = [], this.words = [], this.lines = [], ("boolean" == typeof e ? e : e?.style) && this._style.destroy(e), this._style = null, this._originalText = "";
    }
  }
  let uJ = class e extends uZ {
    constructor(t) {
      var r;
      const n = {
        ...e.defaultOptions,
        ...t
      };
      n.style ?? (n.style = {}), (r = n.style).fill ?? (r.fill = 0xffffff), super(n);
    }
    static from(t, r) {
      let n = {
        ...e.defaultOptions,
        ...r,
        text: t.text,
        style: new n$.TextStyle(t.style)
      };
      t.style.tagStyles && ((0, n2.warn)("[SplitBitmapText] Tag styles are not supported for SplitBitmapText. They will be ignored."), t.style._tagStyles = void 0);
      let i = new e({
          ...n
        }),
        a = t.anchor;
      return (0 !== a.x || 0 !== a.y) && i.pivot.set(i.width * a.x, i.height * a.y), i;
    }
    splitFn() {
      return uj({
        text: this._originalText,
        style: this._style,
        chars: this._canReuseChars ? this.chars : []
      });
    }
  };
  function u0(e, t, r) {
    switch (e) {
      case "center":
        return (r - t) / 2;
      case "right":
        return r - t;
      default:
        return 0;
    }
  }
  function u3(e) {
    return "\r" === e || "\n" === e || "\r\n" === e;
  }
  uJ.defaultOptions = {
    autoSplit: !0,
    lineAnchor: 0,
    wordAnchor: 0,
    charAnchor: 0
  };
  let u2 = /^\s*$/;
  function u1(e) {
    var t;
    let r,
      n,
      i,
      a,
      o,
      {
        text: s,
        style: l,
        chars: u
      } = e,
      c = nL.CanvasTextMetrics.measureText(s, l);
    if (c.runsByLine && c.runsByLine.length > 0) return function (e, t, r, n) {
      let {
          runsByLine: i
        } = e,
        a = t.align,
        o = e.lineWidths.reduce((e, t) => Math.max(e, t), 0),
        s = 0,
        l = 0;
      if (t.trim) {
        let {
          frame: e,
          canvasAndContext: r
        } = nV.getCanvasAndContext({
          text: n,
          style: t,
          resolution: 1
        });
        nV.returnCanvasAndContext(r), s = -e.x, l = -e.y;
      }
      let u = [],
        c = [],
        d = [],
        h = 0,
        p = 0;
      return i.forEach((n, f) => {
        let m = new r$.Container({
          label: `line-${f}`
        });
        m.y = h + l, c.push(m);
        let g = e.lineWidths[f],
          b = u0(a, g, o),
          _ = new r$.Container({
            label: "word"
          });
        for (let e of (_.x = b + s, n)) {
          let t = e.style,
            n = t._fill?.fill,
            i = t._stroke?.fill,
            a = n instanceof lA.FillGradient,
            o = i instanceof lA.FillGradient,
            l = a || o,
            c = a && "local" === n.textureSpace || o && "local" === i.textureSpace,
            h = nL.CanvasTextMetrics.graphemeSegmenter(e.text),
            f = t.clone();
          f.align = "left", f.wordWrap = !1, f.trim && (f.trim = !1), f.tagStyles = void 0, f._lineHeight = 0;
          let g = nL.CanvasTextMetrics._context;
          g.font = f._fontString, nL.CanvasTextMetrics.experimentalLetterSpacingSupported && (g.letterSpacing = "0px", g.textLetterSpacing = "0px");
          let x = e.text,
            T = g.measureText(x).width,
            y = b,
            S = T,
            v = nL.CanvasTextMetrics.measureFont(f._fontString),
            R = t.lineHeight || v.fontSize,
            E = c ? {
              width: S,
              height: R
            } : null;
          for (let e of h) {
            let n = (x = x.slice(e.length)).length > 0 ? g.measureText(x).width : 0,
              i = T - n;
            if ((T = n, !u3(e)) && 0 !== i) if (" " === e) _.children.length > 0 && (d.push(_), m.addChild(_)), b += i + t.letterSpacing, (_ = new r$.Container({
              label: "word"
            })).x = b + s;else {
              let n,
                a = f;
              l && (a = f.clone(), c ? (a._gradientOffset = {
                x: -(b - y),
                y: 0
              }, a._gradientBounds = E) : a._gradientOffset = {
                x: -(b - y),
                y: 0
              }), p < r.length ? ((n = r[p++]).text = e, n.style = a, n.setFromMatrix(tC.Matrix.IDENTITY), n.x = b - _.x + s) : n = new n0({
                text: e,
                style: a,
                x: b - _.x + s
              }), u.push(n), _.addChild(n), b += i + t.letterSpacing;
            }
          }
        }
        if (_.children.length > 0 && (d.push(_), m.addChild(_)), "justify" === a && t.wordWrap && f < i.length - 1) {
          let e = m.children,
            t = e.length - 1;
          if (t > 0) {
            let r = (o - g) / t;
            for (let t = 1; t < e.length; t++) e[t].x += t * r;
          }
        }
        let x = e.lineHeights?.[f] ?? e.lineHeight;
        h += x;
      }), {
        chars: u,
        lines: c,
        words: d
      };
    }(c, l, u, s);
    let d = (t = nL.CanvasTextMetrics.graphemeSegmenter(s), r = [], n = c.lines[0], i = "", a = [], o = 0, t.forEach(e => {
        let t = u2.test(e),
          s = u3(e),
          l = 0 === i.length && t;
        (!t || s || !l || n && n.startsWith(e)) && (s || (i += e), a.push(e), i.length >= n.length && (r.push({
          line: i,
          chars: a
        }), a = [], i = "", o++, n = c.lines[o]));
      }), r),
      h = l.align,
      p = c.lineWidths.reduce((e, t) => Math.max(e, t), 0),
      f = l._fill?.fill,
      m = l._stroke?.fill,
      g = f instanceof lA.FillGradient,
      b = m instanceof lA.FillGradient,
      _ = g || b,
      x = g && "local" === f.textureSpace || b && "local" === m.textureSpace,
      T = c.width,
      y = c.height,
      S = l.clone();
    S.align = "left";
    let v = 0,
      R = 0;
    if (S.trim) {
      let {
        frame: e,
        canvasAndContext: t
      } = nV.getCanvasAndContext({
        text: s,
        style: l,
        resolution: 1
      });
      nV.returnCanvasAndContext(t), v = -e.x, R = -e.y, S.trim = !1;
    }
    let E = [],
      A = [],
      M = [],
      C = 0,
      G = 0,
      w = x ? {
        width: T,
        height: y
      } : null;
    return d.forEach((e, t) => {
      let r = new r$.Container({
        label: `line-${t}`
      });
      r.y = C + R, A.push(r);
      let n = c.lineWidths[t],
        i = u0(h, n, p),
        a = new r$.Container({
          label: "word"
        });
      a.x = i + v;
      let o = nL.CanvasTextMetrics._context;
      o.font = S._fontString, nL.CanvasTextMetrics.experimentalLetterSpacingSupported && (o.letterSpacing = "0px", o.textLetterSpacing = "0px");
      let s = e.line,
        f = o.measureText(s).width;
      if (e.chars.forEach(e => {
        if (u3(e)) return;
        let t = (s = s.slice(e.length)).length > 0 ? o.measureText(s).width : 0,
          n = f - t;
        if (f = t, 0 !== n) if (" " === e) a.children.length > 0 && (M.push(a), r.addChild(a)), i += n + l.letterSpacing, (a = new r$.Container({
          label: "word"
        })).x = i + v;else {
          let t,
            r = S;
          _ && ((r = S.clone())._gradientOffset = {
            x: -i,
            y: -C
          }, w && (r._gradientBounds = w)), G < u.length ? ((t = u[G++]).text = e, t.style = r, t.setFromMatrix(tC.Matrix.IDENTITY), t.x = i - a.x + v) : t = new n0({
            text: e,
            style: r,
            x: i - a.x + v
          }), E.push(t), a.addChild(t), i += n + l.letterSpacing;
        }
      }), a.children.length > 0 && (M.push(a), r.addChild(a)), "justify" === h && l.wordWrap && t < d.length - 1) {
        let e = r.children,
          t = e.length - 1;
        if (t > 0) {
          let r = (p - n) / t;
          for (let t = 1; t < e.length; t++) e[t].x += t * r;
        }
      }
      C += c.lineHeight;
    }), {
      chars: E,
      lines: A,
      words: M
    };
  }
  let u8 = class e extends uZ {
    constructor(t) {
      super({
        ...e.defaultOptions,
        ...t
      });
    }
    static from(t, r) {
      let n = {
          ...e.defaultOptions,
          ...r,
          text: t.text,
          style: new n$.TextStyle(t.style)
        },
        i = new e({
          ...n
        }),
        a = t.anchor;
      return (0 !== a.x || 0 !== a.y) && i.pivot.set(i.width * a.x, i.height * a.y), i;
    }
    splitFn() {
      return u1({
        text: this._originalText,
        style: this._style,
        chars: this._canReuseChars ? this.chars : []
      });
    }
  };
  u8.defaultOptions = {
    autoSplit: !0,
    lineAnchor: 0,
    wordAnchor: 0,
    charAnchor: 0
  };
  var u4 = e.i(841940),
    u6 = e.i(473471),
    u5 = e.i(742495),
    u7 = e.i(926766);
  let u9 = ["align", "breakWords", "cssOverrides", "fontVariant", "fontWeight", "leading", "letterSpacing", "lineHeight", "padding", "textBaseline", "trim", "whiteSpace", "wordWrap", "wordWrapWidth", "fontFamily", "fontStyle", "fontSize"];
  function ce(e, t, r) {
    return e && (t[r++] = e.color, t[r++] = e.alpha, t[r++] = e.fill?.styleKey), r;
  }
  var ct = e.i(707676),
    cr = e.i(392695),
    cn = e.i(724923),
    ci = e.i(298948),
    ca = e.i(688073),
    co = e.i(737880),
    cs = e.i(176684),
    cl = e.i(287358),
    cu = e.i(113281),
    cc = e.i(463337);
  async function cd(e, t, r = 200) {
    let n = await t.extract.base64(e);
    t.type !== rc.RendererType.CANVAS && (await t.encoder.commandFinished), console.log(`logging texture ${e.source.width}px ${e.source.height}px`), console.log("%c ", `font-size: 1px; padding: ${r}px 300px; background: url(${n}) no-repeat; background-size: contain;`);
  }
  let ch = ["#000080", "#228B22", "#8B0000", "#4169E1", "#008080", "#800000", "#9400D3", "#FF8C00", "#556B2F", "#8B008B"],
    cp = 0;
  var cf = e.i(506721),
    cm = e.i(5321),
    cg = e.i(609932),
    cb = e.i(808662),
    c_ = e.i(800476),
    cx = e.i(456659);
  e.s(["AbstractBitmapFont", () => uH.AbstractBitmapFont, "AbstractBitmapTextPipe", 0, n5, "AbstractRenderer", () => sp.AbstractRenderer, "AbstractSplitText", 0, uZ, "AbstractText", 0, nw, "AbstractTextSystem", 0, nQ, "AccessibilitySystem", () => R.AccessibilitySystem, "AlphaFilter", 0, rl, "AlphaMask", () => i7.AlphaMask, "AlphaMaskPipe", () => i9.AlphaMaskPipe, "AnimatedSprite", () => nr.AnimatedSprite, "Application", () => ea.Application, "ApplicationInitHook", () => cc.ApplicationInitHook, "Assets", () => el.Assets, "AssetsClass", () => el.AssetsClass, "BLEND_TO_NPM", () => sh.BLEND_TO_NPM, "BREAKING_SPACES", () => u5.BREAKING_SPACES, "BREAKING_SPACES_SET", () => u5.BREAKING_SPACES_SET, "BREAK_AFTER_CHARS", () => u5.BREAK_AFTER_CHARS, "BREAK_AFTER_CHARS_SET", () => u5.BREAK_AFTER_CHARS_SET, "BUFFER_TYPE", () => a_.BUFFER_TYPE, "BackgroundLoader", () => eu.BackgroundLoader, "BackgroundSystem", () => oY.BackgroundSystem, "Batch", () => iW.Batch, "BatchGeometry", () => ij.BatchGeometry, "BatchTextureArray", () => iK.BatchTextureArray, "BatchableGraphics", () => lp.BatchableGraphics, "BatchableHTMLText", 0, iE, "BatchableMesh", 0, r7, "BatchableSprite", () => nW.BatchableSprite, "BatchableText", 0, nY, "Batcher", () => iW.Batcher, "BatcherPipe", () => iY.BatcherPipe, "BigPool", () => iC.BigPool, "BindGroup", () => r4.BindGroup, "BindGroupSystem", () => op.BindGroupSystem, "BitmapFont", () => uW.BitmapFont, "BitmapFontManager", () => n1.BitmapFontManager, "BitmapText", 0, id, "BitmapTextGraphics", 0, n6, "BitmapTextPipe", 0, ic, "BlendModeFilter", 0, B, "BlendModePipe", () => oj.BlendModePipe, "BlurFilter", 0, ry, "BlurFilterPass", 0, rT, "Bounds", () => tw.Bounds, "BrowserAdapter", () => t$.BrowserAdapter, "Buffer", () => r0.Buffer, "BufferImageSource", () => sC.BufferImageSource, "BufferResource", () => oK.BufferResource, "BufferUsage", () => r3.BufferUsage, "CLEAR", () => ay.CLEAR, "COLLAPSIBLE_SPACES", () => u5.COLLAPSIBLE_SPACES, "COLLAPSIBLE_SPACES_SET", () => u5.COLLAPSIBLE_SPACES_SET, "Cache", () => ec.Cache, "CanvasBatchAdaptor", () => ik.CanvasBatchAdaptor, "CanvasBitmapTextPipe", 0, n9, "CanvasColorMaskPipe", () => ae.CanvasColorMaskPipe, "CanvasContextSystem", () => ac.CanvasContextSystem, "CanvasFilterSystem", () => ro.CanvasFilterSystem, "CanvasGraphicsAdaptor", () => ll.CanvasGraphicsAdaptor, "CanvasGraphicsContextSystem", () => lu.CanvasGraphicsContextSystem, "CanvasGraphicsPipe", () => lc.CanvasGraphicsPipe, "CanvasLimitsSystem", () => ad.CanvasLimitsSystem, "CanvasNineSliceSpritePipe", 0, uB, "CanvasObserver", () => tL.CanvasObserver, "CanvasParticleContainerAdaptor", 0, um, "CanvasParticleContainerPipe", 0, uR, "CanvasPool", () => nP.CanvasPool, "CanvasPoolClass", () => nP.CanvasPoolClass, "CanvasRenderTargetAdaptor", () => ap.CanvasRenderTargetAdaptor, "CanvasRenderTargetSystem", () => af.CanvasRenderTargetSystem, "CanvasRenderer", () => ah.CanvasRenderer, "CanvasRendererTextSystem", 0, nZ, "CanvasSource", () => sG.CanvasSource, "CanvasStencilMaskPipe", () => ao.CanvasStencilMaskPipe, "CanvasTextGenerator", 0, nV, "CanvasTextMetrics", () => nL.CanvasTextMetrics, "CanvasTextPipe", 0, nj, "CanvasTextSystem", 0, nJ, "CanvasTextureSystem", () => am.CanvasTextureSystem, "CanvasTilingSpritePipe", 0, nd, "Circle", () => rX.Circle, "Color", () => eN.Color, "ColorBlend", 0, L, "ColorBurnBlend", 0, N, "ColorDodgeBlend", 0, X, "ColorMask", () => at.ColorMask, "ColorMaskPipe", () => ar.ColorMaskPipe, "ColorMatrixFilter", 0, rv, "CompressedSource", 0, e$, "Container", () => r$.Container, "CubeTexture", 0, sE, "CubeTextureSource", 0, sv, "Culler", 0, tF, "CullerPlugin", 0, tI, "CustomRenderPipe", () => s8.CustomRenderPipe, "D3D10_RESOURCE_DIMENSION", 0, e6, "D3DFMT", 0, e7, "DATA_URI", () => cs.DATA_URI, "DDS", 0, tt, "DEG_TO_RAD", () => rF.DEG_TO_RAD, "DEPRECATED_SCALE_MODES", 0, s_, "DEPRECATED_WRAP_MODES", 0, sg, "DOMAdapter", () => eq.DOMAdapter, "DOMContainer", 0, tk, "DOMPipe", () => tH.DOMPipe, "DRAW_MODES", 0, o2, "DXGI_FORMAT", 0, e4, "DXGI_TO_TEXTURE_FORMAT", 0, te, "DarkenBlend", 0, k, "DefaultBatcher", () => iQ.DefaultBatcher, "DefaultShader", () => iZ.DefaultShader, "DifferenceBlend", 0, H, "DisplacementFilter", 0, rA, "DivideBlend", 0, V, "DynamicBitmapFont", () => uY.DynamicBitmapFont, "Ellipse", () => rk.Ellipse, "EventBoundary", () => tz.EventBoundary, "EventEmitter", () => sT.default, "EventSystem", () => tW.EventSystem, "EventsTicker", () => tY.EventsTicker, "ExclusionBlend", 0, $, "ExtensionType", () => v.ExtensionType, "ExternalSource", 0, sO, "ExtractSystem", () => oZ.ExtractSystem, "FOURCC_TO_TEXTURE_FORMAT", 0, e9, "FederatedContainer", () => tK.FederatedContainer, "FederatedEvent", () => tj.FederatedEvent, "FederatedMouseEvent", () => tQ.FederatedMouseEvent, "FederatedPointerEvent", () => tZ.FederatedPointerEvent, "FederatedWheelEvent", () => tJ.FederatedWheelEvent, "FillGradient", () => lA.FillGradient, "FillPattern", () => lM.FillPattern, "Filter", () => w.Filter, "FilterEffect", () => rw.FilterEffect, "FilterPipe", () => rD.FilterPipe, "FilterSystem", () => rP.FilterSystem, "FontStylePromiseCache", 0, iP, "GAUSSIAN_VALUES", 0, rf, "GCManagedHash", () => nh.GCManagedHash, "GCSystem", () => o0.GCSystem, "GL_FORMATS", () => a7.GL_FORMATS, "GL_INTERNAL_FORMAT", 0, ta, "GL_TARGETS", () => a7.GL_TARGETS, "GL_TYPES", () => a7.GL_TYPES, "GL_WRAP_MODES", () => a7.GL_WRAP_MODES, "GPUTextureGpuData", () => oX.GPUTextureGpuData, "GenerateTextureSystem", () => oJ.GenerateTextureSystem, "Geometry", () => rQ.Geometry, "GlBackBufferSystem", () => aE.GlBackBufferSystem, "GlBatchAdaptor", () => iH.GlBatchAdaptor, "GlBuffer", () => ax.GlBuffer, "GlBufferSystem", () => aT.GlBufferSystem, "GlColorMaskSystem", () => aA.GlColorMaskSystem, "GlContextSystem", () => aS.GlContextSystem, "GlEncoderSystem", () => aM.GlEncoderSystem, "GlGeometryGpuData", () => av.GlGeometryGpuData, "GlGeometrySystem", () => av.GlGeometrySystem, "GlGraphicsAdaptor", () => ld.GlGraphicsAdaptor, "GlLimitsSystem", () => aC.GlLimitsSystem, "GlMeshAdaptor", () => up.GlMeshAdaptor, "GlParticleContainerAdaptor", 0, uE, "GlParticleContainerPipe", 0, uA, "GlProgram", () => A.GlProgram, "GlProgramData", () => aF.GlProgramData, "GlRenderTarget", () => aG.GlRenderTarget, "GlRenderTargetAdaptor", () => aP.GlRenderTargetAdaptor, "GlRenderTargetSystem", () => aO.GlRenderTargetSystem, "GlShaderSystem", () => aI.GlShaderSystem, "GlStateSystem", () => a6.GlStateSystem, "GlStencilSystem", () => aw.GlStencilSystem, "GlTexture", () => a9.GlTexture, "GlTextureSystem", () => oe.GlTextureSystem, "GlUboSystem", () => aD.GlUboSystem, "GlUniformGroupSystem", () => aU.GlUniformGroupSystem, "GlobalResourceRegistry", () => cg.GlobalResourceRegistry, "GlobalUniformSystem", () => o9.GlobalUniformSystem, "GpuBatchAdaptor", () => iz.GpuBatchAdaptor, "GpuBlendModesToPixi", () => oU.GpuBlendModesToPixi, "GpuBufferData", () => of.GpuBufferData, "GpuBufferSystem", () => of.GpuBufferSystem, "GpuColorMaskSystem", () => og.GpuColorMaskSystem, "GpuDeviceSystem", () => ob.GpuDeviceSystem, "GpuEncoderSystem", () => o_.GpuEncoderSystem, "GpuGraphicsAdaptor", () => lh.GpuGraphicsAdaptor, "GpuGraphicsContext", () => lC.GpuGraphicsContext, "GpuLimitsSystem", () => ox.GpuLimitsSystem, "GpuMeshAdapter", () => uf.GpuMeshAdapter, "GpuMipmapGenerator", () => oz.GpuMipmapGenerator, "GpuParticleContainerAdaptor", 0, uM, "GpuParticleContainerPipe", 0, uC, "GpuProgram", () => M.GpuProgram, "GpuRenderTarget", () => oE.GpuRenderTarget, "GpuRenderTargetAdaptor", () => oA.GpuRenderTargetAdaptor, "GpuRenderTargetSystem", () => oM.GpuRenderTargetSystem, "GpuShaderSystem", () => oC.GpuShaderSystem, "GpuStateSystem", () => oL.GpuStateSystem, "GpuStencilModesToPixi", () => oN.GpuStencilModesToPixi, "GpuStencilSystem", () => oT.GpuStencilSystem, "GpuTextureSystem", () => oX.GpuTextureSystem, "GpuUboSystem", () => oy.GpuUboSystem, "GpuUniformBatchPipe", () => oS.GpuUniformBatchPipe, "Graphics", () => rj.Graphics, "GraphicsContext", () => rK.GraphicsContext, "GraphicsContextRenderData", () => lC.GraphicsContextRenderData, "GraphicsContextSystem", () => lC.GraphicsContextSystem, "GraphicsGpuData", () => lG.GraphicsGpuData, "GraphicsPath", () => lw.GraphicsPath, "GraphicsPipe", () => lG.GraphicsPipe, "HTMLText", 0, iL, "HTMLTextPipe", 0, iA, "HTMLTextRenderData", 0, iS, "HTMLTextStyle", 0, ix, "HTMLTextSystem", 0, iU, "HardLightBlend", 0, q, "HardMixBlend", 0, z, "HelloSystem", () => sd.HelloSystem, "IGLUniformData", () => aF.IGLUniformData, "ImageSource", () => sB.ImageSource, "InstructionSet", () => o7.InstructionSet, "KTX", 0, tl, "LightenBlend", 0, W, "LinearBurnBlend", 0, Y, "LinearDodgeBlend", 0, j, "LinearLightBlend", 0, K, "Loader", () => eT.Loader, "LoaderParserPriority", () => ey.LoaderParserPriority, "LuminosityBlend", 0, Q, "MaskEffectManager", () => an.MaskEffectManager, "MaskEffectManagerClass", () => an.MaskEffectManagerClass, "MaskFilter", () => rO.MaskFilter, "Matrix", () => tC.Matrix, "Mesh", 0, nt, "MeshGeometry", 0, r8, "MeshGpuData", 0, r9, "MeshPipe", 0, ne, "MeshPlane", 0, class extends nt {
    constructor(e) {
      const {
          texture: t,
          verticesX: r,
          verticesY: n,
          ...i
        } = e,
        a = new l7((0, ln.definedProps)({
          width: t.width,
          height: t.height,
          verticesX: r,
          verticesY: n
        }));
      super((0, ln.definedProps)({
        ...i,
        geometry: a,
        texture: t
      })), this.texture = t, this.autoResize = !0;
    }
    textureUpdated() {
      let e = this.geometry,
        {
          width: t,
          height: r
        } = this.texture;
      this.autoResize && (e.width !== t || e.height !== r) && (e.width = t, e.height = r, e.build({}));
    }
    set texture(e) {
      this._texture?.off("update", this.textureUpdated, this), super.texture = e, e.on("update", this.textureUpdated, this), this.textureUpdated();
    }
    get texture() {
      return this._texture;
    }
    destroy(e) {
      this.texture.off("update", this.textureUpdated, this), super.destroy(e);
    }
  }, "MeshRope", 0, uh, "MeshSimple", 0, class extends nt {
    constructor(e) {
      const {
          texture: t,
          vertices: r,
          uvs: n,
          indices: i,
          topology: a,
          ...o
        } = e,
        s = new r8((0, ln.definedProps)({
          positions: r,
          uvs: n,
          indices: i,
          topology: a
        }));
      super((0, ln.definedProps)({
        ...o,
        texture: t,
        geometry: s
      })), this.autoUpdate = !0, this.onRender = this._render;
    }
    get vertices() {
      return this.geometry.getBuffer("aPosition").data;
    }
    set vertices(e) {
      this.geometry.getBuffer("aPosition").data = e;
    }
    _render() {
      this.autoUpdate && this.geometry.getBuffer("aPosition").update();
    }
  }, "NEWLINES", () => u5.NEWLINES, "NEWLINES_SET", () => u5.NEWLINES_SET, "NEWLINE_MATCH_REGEX", () => u5.NEWLINE_MATCH_REGEX, "NEWLINE_SPLIT_REGEX", () => u5.NEWLINE_SPLIT_REGEX, "NOOP", () => cf.NOOP, "NegationBlend", 0, Z, "NineSliceGeometry", 0, uF, "NineSlicePlane", 0, class extends uX {
    constructor(...e) {
      let t = e[0];
      t instanceof G.Texture && ((0, rd.deprecation)(rd.v8_0_0, "NineSlicePlane now uses the options object {texture, leftWidth, rightWidth, topHeight, bottomHeight}"), t = {
        texture: t,
        leftWidth: e[1],
        topHeight: e[2],
        rightWidth: e[3],
        bottomHeight: e[4]
      }), (0, rd.deprecation)(rd.v8_0_0, "NineSlicePlane is deprecated. Use NineSliceSprite instead."), super(t);
    }
  }, "NineSliceSprite", 0, uX, "NineSliceSpriteGpuData", 0, uU, "NineSliceSpritePipe", 0, uL, "NoiseFilter", 0, rC, "ObservablePoint", () => rL.ObservablePoint, "OverlayBlend", 0, J, "PI_2", () => rF.PI_2, "Particle", 0, uG, "ParticleBuffer", 0, uT, "ParticleContainer", 0, uO, "ParticleContainerPipe", 0, uv, "ParticleShader", 0, uS, "PassthroughFilter", () => rG.PassthroughFilter, "PerspectiveMesh", 0, uc, "PerspectivePlaneGeometry", 0, uu, "PinLightBlend", 0, ee, "PipelineSystem", () => ov.PipelineSystem, "PlaneGeometry", 0, l7, "Point", () => tN.Point, "Polygon", () => rH.Polygon, "Pool", () => cb.Pool, "PoolGroupClass", () => iC.PoolGroupClass, "PrepareBase", 0, rY, "PrepareQueue", 0, n3, "PrepareSystem", 0, iX, "PrepareUpload", 0, iN, "QuadGeometry", 0, nT, "RAD_TO_DEG", () => rF.RAD_TO_DEG, "Rectangle", () => tG.Rectangle, "RenderContainer", 0, s6, "RenderGroup", () => s5.RenderGroup, "RenderGroupPipe", () => s7.RenderGroupPipe, "RenderGroupSystem", () => s9.RenderGroupSystem, "RenderLayer", 0, l6, "RenderTarget", () => st.RenderTarget, "RenderTargetSystem", () => sr.RenderTargetSystem, "RenderTexture", () => sM.RenderTexture, "RenderableGCSystem", () => sA.RenderableGCSystem, "RendererInitHook", () => cc.RendererInitHook, "RendererType", () => rc.RendererType, "ResizePlugin", () => eo.ResizePlugin, "Resolver", () => eP.Resolver, "RopeGeometry", 0, ud, "RoundedRectangle", () => rV.RoundedRectangle, "SCALE_MODES", 0, sx, "STENCIL_MODES", () => sh.STENCIL_MODES, "SVGDefsCollector", 0, lO, "SVGParser", () => lj.SVGParser, "SaturationBlend", 0, et, "SchedulerSystem", () => sn.SchedulerSystem, "ScissorMask", 0, class {
    constructor(e) {
      this.priority = 0, this.pipe = "scissorMask", this.mask = e, this.mask.renderable = !1, this.mask.measurable = !1;
    }
    addBounds(e, t) {
      (0, ai.addMaskBounds)(this.mask, e, t);
    }
    addLocalBounds(e, t) {
      (0, aa.addMaskLocalBounds)(this.mask, e, t);
    }
    containsPoint(e, t) {
      return t(this.mask, e);
    }
    reset() {
      null !== this.mask && (this.mask.measurable = !0, this.mask = null);
    }
    destroy() {
      this.reset();
    }
  }, "SdfShader", 0, iu, "Shader", () => ng.Shader, "ShaderStage", () => si.ShaderStage, "ShapePath", () => lP.ShapePath, "SharedRenderPipes", () => sf.SharedRenderPipes, "SharedSystems", () => sf.SharedSystems, "SoftLightBlend", 0, er, "SplitBitmapText", 0, uJ, "SplitText", 0, u8, "Sprite", () => rR.Sprite, "SpritePipe", () => uk.SpritePipe, "Spritesheet", () => ct.Spritesheet, "State", () => rZ.State, "StencilMask", () => as.StencilMask, "StencilMaskPipe", () => al.StencilMaskPipe, "SubtractBlend", 0, en, "SystemRunner", () => sm.SystemRunner, "TEXTURE_FORMAT_BLOCK_SIZE", 0, tr, "Text", 0, n0, "TextStyle", () => n$.TextStyle, "Texture", () => G.Texture, "TextureGCSystem", () => sI.TextureGCSystem, "TextureMatrix", () => sU.TextureMatrix, "TexturePool", () => ru.TexturePool, "TexturePoolClass", () => ru.TexturePoolClass, "TextureSource", () => eV.TextureSource, "TextureStyle", () => nC.TextureStyle, "TextureUvs", 0, class {
    constructor() {
      this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8);
    }
    set(e, t, r) {
      let n = t.width,
        i = t.height;
      if (r) {
        let t = e.width / 2 / n,
          a = e.height / 2 / i,
          o = e.x / n + t,
          s = e.y / i + a;
        r = rB.groupD8.add(r, rB.groupD8.NW), this.x0 = o + t * rB.groupD8.uX(r), this.y0 = s + a * rB.groupD8.uY(r), r = rB.groupD8.add(r, 2), this.x1 = o + t * rB.groupD8.uX(r), this.y1 = s + a * rB.groupD8.uY(r), r = rB.groupD8.add(r, 2), this.x2 = o + t * rB.groupD8.uX(r), this.y2 = s + a * rB.groupD8.uY(r), r = rB.groupD8.add(r, 2), this.x3 = o + t * rB.groupD8.uX(r), this.y3 = s + a * rB.groupD8.uY(r);
      } else this.x0 = e.x / n, this.y0 = e.y / i, this.x1 = (e.x + e.width) / n, this.y1 = e.y / i, this.x2 = (e.x + e.width) / n, this.y2 = (e.y + e.height) / i, this.x3 = e.x / n, this.y3 = (e.y + e.height) / i;
      this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3;
    }
    toString() {
      return `[pixi.js/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
    }
  }, "Ticker", () => rz.Ticker, "TickerListener", () => cn.TickerListener, "TickerPlugin", () => es.TickerPlugin, "TilingSprite", 0, nM, "TilingSpriteGpuData", 0, nE, "TilingSpritePipe", 0, nA, "TilingSpriteShader", 0, nx, "Transform", 0, nn, "Triangle", 0, class e {
    constructor(e = 0, t = 0, r = 0, n = 0, i = 0, a = 0) {
      this.type = "triangle", this.x = e, this.y = t, this.x2 = r, this.y2 = n, this.x3 = i, this.y3 = a;
    }
    contains(e, t) {
      let r = (this.x - this.x3) * (t - this.y3) - (this.y - this.y3) * (e - this.x3),
        n = (this.x2 - this.x) * (t - this.y) - (this.y2 - this.y) * (e - this.x);
      if (r < 0 != n < 0 && 0 !== r && 0 !== n) return !1;
      let i = (this.x3 - this.x2) * (t - this.y2) - (this.y3 - this.y2) * (e - this.x2);
      return 0 === i || i < 0 == r + n <= 0;
    }
    strokeContains(e, t, r, n = .5) {
      let i = r / 2,
        a = i * i,
        {
          x: o,
          x2: s,
          x3: l,
          y: u,
          y2: c,
          y3: d
        } = this;
      return !!((0, rU.squaredDistanceToLineSegment)(e, t, o, u, s, d) <= a || (0, rU.squaredDistanceToLineSegment)(e, t, s, c, l, d) <= a || (0, rU.squaredDistanceToLineSegment)(e, t, l, d, o, u) <= a);
    }
    clone() {
      return new e(this.x, this.y, this.x2, this.y2, this.x3, this.y3);
    }
    copyFrom(e) {
      return this.x = e.x, this.y = e.y, this.x2 = e.x2, this.y2 = e.y2, this.x3 = e.x3, this.y3 = e.y3, this;
    }
    copyTo(e) {
      return e.copyFrom(this), e;
    }
    getBounds(e) {
      e || (e = new tG.Rectangle());
      let t = Math.min(this.x, this.x2, this.x3),
        r = Math.max(this.x, this.x2, this.x3),
        n = Math.min(this.y, this.y2, this.y3),
        i = Math.max(this.y, this.y2, this.y3);
      return e.x = t, e.y = n, e.width = r - t, e.height = i - n, e;
    }
  }, "UNIFORM_TO_ARRAY_SETTERS", () => a4.UNIFORM_TO_ARRAY_SETTERS, "UNIFORM_TO_SINGLE_SETTERS", () => a4.UNIFORM_TO_SINGLE_SETTERS, "UNIFORM_TYPES_MAP", () => sa.UNIFORM_TYPES_MAP, "UNIFORM_TYPES_VALUES", () => sa.UNIFORM_TYPES_VALUES, "UPDATE_BLEND", () => r$.UPDATE_BLEND, "UPDATE_COLOR", () => r$.UPDATE_COLOR, "UPDATE_PRIORITY", () => rq.UPDATE_PRIORITY, "UPDATE_TRANSFORM", () => r$.UPDATE_TRANSFORM, "UPDATE_VISIBLE", () => r$.UPDATE_VISIBLE, "UboBatch", () => om.UboBatch, "UboSystem", () => so.UboSystem, "UniformGroup", () => C.UniformGroup, "VERSION", () => cs.VERSION, "VideoSource", () => sF.VideoSource, "ViewContainer", () => tX.ViewContainer, "ViewSystem", () => sk.ViewSystem, "ViewableBuffer", () => ug.ViewableBuffer, "VividLightBlend", 0, ei, "WGSL_ALIGN_SIZE_DATA", () => oG.WGSL_ALIGN_SIZE_DATA, "WGSL_TO_STD40_SIZE", () => a3.WGSL_TO_STD40_SIZE, "WRAP_MODES", 0, sb, "WebGLRenderer", () => oh.WebGLRenderer, "WebGPURenderer", () => oW.WebGPURenderer, "WebWorkerAdapter", 0, {
    createCanvas: (e, t) => new OffscreenCanvas(e ?? 0, t ?? 0),
    createImage: () => new Image(),
    getCanvasRenderingContext2D: () => OffscreenCanvasRenderingContext2D,
    getWebGLRenderingContext: () => WebGLRenderingContext,
    getNavigator: () => navigator,
    getBaseUrl: () => globalThis.location.href,
    getFontFaceSet: () => globalThis.fonts,
    fetch: (e, t) => fetch(e, t),
    parseXML: e => new tq.DOMParser().parseFromString(e, "text/xml")
  }, "WorkerManager", () => eG.WorkerManager, "accessibilityTarget", () => E.accessibilityTarget, "addBits", () => i0.addBits, "addMaskBounds", () => ai.addMaskBounds, "addMaskLocalBounds", () => aa.addMaskLocalBounds, "addProgramDefines", () => aK.addProgramDefines, "alphaFrag", 0, t0, "alphaWgsl", 0, t3, "appendSVGPath", () => lZ.appendSVGPath, "applyMatrix", 0, nS, "applyProjectiveTransformationToPlane", 0, l9, "applyStyleParams", () => oo.applyStyleParams, "assignWithIgnore", () => le.assignWithIgnore, "autoDetectEnvironment", () => tV.autoDetectEnvironment, "autoDetectRenderer", () => au.autoDetectRenderer, "autoDetectSource", () => sN.autoDetectSource, "basisTranscoderUrls", 0, e0, "bgr2rgb", () => no.bgr2rgb, "bitmapFontCachePlugin", () => uz.bitmapFontCachePlugin, "bitmapFontTextParser", () => uV.bitmapFontTextParser, "bitmapFontXMLParser", () => u$.bitmapFontXMLParser, "bitmapFontXMLStringParser", () => uq.bitmapFontXMLStringParser, "bitmapTextSplit", 0, uj, "blendTemplateFrag", 0, D, "blendTemplateVert", 0, P, "blendTemplateWgsl", 0, O, "blockDataMap", () => oH.blockDataMap, "blurTemplateWgsl", 0, t2, "boundsPool", () => sW.boundsPool, "browserExt", () => y.browserExt, "buildAdaptiveBezier", () => lf.buildAdaptiveBezier, "buildAdaptiveQuadratic", () => lm.buildAdaptiveQuadratic, "buildArc", () => lg.buildArc, "buildArcTo", () => lb.buildArcTo, "buildArcToSvg", () => l_.buildArcToSvg, "buildCircle", () => lx.buildCircle, "buildContextBatches", () => lJ.buildContextBatches, "buildEllipse", () => lx.buildEllipse, "buildGeometryFromPath", 0, function (e) {
    e instanceof lw.GraphicsPath && (e = {
      path: e,
      textureMatrix: null,
      out: null
    });
    let t = [],
      r = [],
      n = [],
      i = e.path.shapePath,
      a = e.textureMatrix;
    i.shapePrimitives.forEach(({
      shape: e,
      transform: i
    }) => {
      let o = n.length,
        s = t.length / 2,
        l = [],
        u = lJ.shapeBuilders[e.type];
      u.build(e, l), i && (0, o5.transformVertices)(l, i), u.triangulate(l, t, 2, s, n, o);
      let c = r.length / 2;
      a ? (i && a.append(i.clone().invert()), (0, o1.buildUvs)(t, 2, s, r, c, 2, t.length / 2 - s, a)) : (0, o1.buildSimpleUvs)(r, c, 2, t.length / 2 - s);
    });
    let o = e.out;
    return o ? (o.positions = new Float32Array(t), o.uvs = new Float32Array(r), o.indices = new Uint32Array(n), o) : new r8({
      positions: new Float32Array(t),
      uvs: new Float32Array(r),
      indices: new Uint32Array(n)
    });
  }, "buildLine", () => lT.buildLine, "buildPixelLine", () => ly.buildPixelLine, "buildPolygon", () => lS.buildPolygon, "buildRectangle", () => lv.buildRectangle, "buildRoundedRectangle", () => lx.buildRoundedRectangle, "buildSVGFillAttributes", 0, lV, "buildSVGPath", 0, lI, "buildSVGStrokeAttributes", 0, l$, "buildSimpleUvs", () => o1.buildSimpleUvs, "buildTriangle", () => lR.buildTriangle, "buildUvs", () => o1.buildUvs, "cacheAsTextureMixin", () => sY.cacheAsTextureMixin, "cacheTextureArray", () => ed.cacheTextureArray, "calculatePathArea", () => lZ.calculatePathArea, "calculateProjection", () => oR.calculateProjection, "canUseNewCanvasBlendModes", () => ag.canUseNewCanvasBlendModes, "canvasTextSplit", 0, u1, "canvasUtils", () => na.canvasUtils, "checkChildrenDidChange", () => lt.checkChildrenDidChange, "checkDataUrl", () => eO.checkDataUrl, "checkExtension", () => eB.checkExtension, "checkForNestedPattern", () => lQ.checkForNestedPattern, "checkMaxIfStatementsInShader", () => iV.checkMaxIfStatementsInShader, "childrenHelperMixin", () => sj.childrenHelperMixin, "cleanArray", () => cl.cleanArray, "cleanHash", () => cl.cleanHash, "clearList", () => lr.clearList, "closePointEps", () => lE.closePointEps, "collapseNewlines", () => u5.collapseNewlines, "collapseSpaces", () => u5.collapseSpaces, "collectAllRenderables", 0, function (e, t, r) {
    (0, rd.deprecation)("8.7.0", "Please use container.collectRenderables instead.");
    let n = r.renderPipes ? r : r.batch.renderer;
    return e.collectRenderables(t, n, null);
  }, "collectRenderablesMixin", () => sK.collectRenderablesMixin, "color32BitToUniform", () => r5.color32BitToUniform, "colorBit", () => ie.colorBit, "colorBitGl", () => ie.colorBitGl, "colorMatrixFilterFrag", 0, t1, "colorMatrixFilterWgsl", 0, t8, "colorToUniform", () => r5.colorToUniform, "compareModeToGlCompare", () => od.compareModeToGlCompare, "compileHighShader", () => iJ.compileHighShader, "compileHighShaderGl", () => iJ.compileHighShaderGl, "compileHighShaderGlProgram", () => np.compileHighShaderGlProgram, "compileHighShaderGpuProgram", () => np.compileHighShaderGpuProgram, "compileHooks", () => i3.compileHooks, "compileInputs", () => i2.compileInputs, "compileOutputs", () => i1.compileOutputs, "compileShader", () => aL.compileShader, "compute2DProjection", 0, ul, "convertFormatIfRequired", 0, function (e) {
    let t = e.format;
    if (t_[t]) {
      let r = t_[t].convertFunction,
        n = e.resource;
      for (let e = 0; e < n.length; e++) n[e] = r(n[e]);
      e.format = t_[t].convertedFormat;
    }
  }, "convertToList", () => eF.convertToList, "copySearchParams", () => eI.copySearchParams, "createGlUploadCubeTextureResource", () => on.createGlUploadCubeTextureResource, "createGpuUploadCubeTextureResource", () => oV.createGpuUploadCubeTextureResource, "createIdFromString", () => sX.createIdFromString, "createIndicesForQuads", 0, ub, "createLevelBuffers", 0, function (e, t) {
    let r = e.getNumImages(),
      n = e.getNumLevels(0);
    if (!e.startTranscoding()) throw Error("startTranscoding failed");
    let i = [];
    for (let a = 0; a < n; ++a) for (let n = 0; n < r; ++n) {
      let r = new Uint8Array(e.getImageTranscodedSizeInBytes(n, a, t));
      if (!e.transcodeImage(r, n, a, t, 1, 0)) throw Error("transcodeImage failed");
      i.push(r);
    }
    return i;
  }, "createLevelBuffersFromKTX", 0, function (e) {
    let t = [];
    for (let r = 0; r < e.numLevels; r++) {
      let n = e.getImageData(r, 0, 0),
        i = new Uint8Array(n.byteLength);
      i.set(n), t.push(i);
    }
    return t;
  }, "createStringVariations", () => eU.createStringVariations, "createTexture", () => eC.createTexture, "createUboElementsSTD40", () => a3.createUboElementsSTD40, "createUboElementsWGSL", () => oG.createUboElementsWGSL, "createUboSyncFunction", () => ss.createUboSyncFunction, "createUboSyncFunctionSTD40", () => a2.createUboSyncFunctionSTD40, "createUboSyncFunctionWGSL", () => ow.createUboSyncFunctionWGSL, "crossOrigin", () => eM.crossOrigin, "cullingMixin", () => tU.cullingMixin, "curveEps", () => lE.curveEps, "defaultFilterVert", () => t4.default, "defaultValue", () => aN.defaultValue, "definedProps", () => ln.definedProps, "deprecation", () => rd.deprecation, "detectAvif", () => eh.detectAvif, "detectBasis", 0, eH, "detectCompressed", 0, tM, "detectDefaults", () => ep.detectDefaults, "detectMp4", () => ef.detectMp4, "detectOgv", () => em.detectOgv, "detectVideoAlphaMode", () => ci.detectVideoAlphaMode, "detectWebm", () => eg.detectWebm, "detectWebp", () => eb.detectWebp, "determineCrossOrigin", () => eM.determineCrossOrigin, "displacementFrag", 0, t6, "displacementVert", 0, t5, "displacementWgsl", 0, t7, "earcut", () => cx.earcut, "effectsMixin", () => sQ.effectsMixin, "ensureAttributes", () => aX.ensureAttributes, "ensureIsBuffer", () => o8.ensureIsBuffer, "ensurePrecision", () => aQ.ensurePrecision, "ensureTextOptions", 0, nD, "executeInstructions", () => li.executeInstructions, "extensions", () => v.extensions, "extractAttributesFromGlProgram", () => ak.extractAttributesFromGlProgram, "extractAttributesFromGpuProgram", () => oD.extractAttributesFromGpuProgram, "extractFontFamilies", 0, iG, "extractStructAndGroups", () => oP.extractStructAndGroups, "extractSubpaths", () => lZ.extractSubpaths, "extractSvgUrlId", () => lK.extractSvgUrlId, "fastCopy", () => oQ.fastCopy, "findMixin", () => sZ.findMixin, "fontStringFromTextStyle", () => nN.fontStringFromTextStyle, "formatShader", 0, function (e) {
    let t = e.split(/([\n{}])/g).map(e => e.trim()).filter(e => e.length),
      r = "";
    return t.map(e => {
      let t = r + e;
      return "{" === e ? r += "    " : "}" === e && (t = (r = r.substr(0, r.length - 4)) + e), t;
    }).join("\n");
  }, "fragmentGPUTemplate", () => i4.fragmentGPUTemplate, "fragmentGlTemplate", () => i4.fragmentGlTemplate, "generateArraySyncSTD40", () => a1.generateArraySyncSTD40, "generateArraySyncWGSL", () => oO.generateArraySyncWGSL, "generateBlurFragSource", 0, rm, "generateBlurGlProgram", 0, r_, "generateBlurProgram", 0, rx, "generateBlurVertSource", 0, rb, "generateGPULayout", 0, function (e) {
    let t = [],
      r = 0;
    for (let n = 0; n < e; n++) t[r] = {
      texture: {
        sampleType: "float",
        viewDimension: "2d",
        multisampled: !1
      },
      binding: r,
      visibility: GPUShaderStage.FRAGMENT
    }, t[++r] = {
      sampler: {
        type: "filtering"
      },
      binding: r,
      visibility: GPUShaderStage.FRAGMENT
    }, r++;
    return t;
  }, "generateGpuLayoutGroups", () => oB.generateGpuLayoutGroups, "generateLayout", 0, function (e) {
    let t = {},
      r = 0;
    for (let n = 0; n < e; n++) t[`textureSource${n + 1}`] = r++, t[`textureSampler${n + 1}`] = r++;
    return t;
  }, "generateLayoutHash", () => oF.generateLayoutHash, "generateParticleUpdateFunction", 0, u_, "generateProgram", () => aH.generateProgram, "generateShaderSyncCode", () => aB.generateShaderSyncCode, "generateTextStyleKey", 0, function (e) {
    var t, r, n, i, a, o;
    let s = [],
      l = 0;
    for (let t = 0; t < u9.length; t++) {
      let r = `_${u9[t]}`;
      s[l++] = e[r];
    }
    return l = ce(e._fill, s, l), t = e._stroke, r = s, n = l, t && (n = ce(t, r, n), r[n++] = t.width, r[n++] = t.alignment, r[n++] = t.cap, r[n++] = t.join, r[n++] = t.miterLimit), l = n, i = e.dropShadow, a = s, o = l, i && (a[o++] = i.alpha, a[o++] = i.angle, a[o++] = i.blur, a[o++] = i.distance, a[o++] = eN.Color.shared.setValue(i.color).toNumber()), l = o, l = function (e, t, r) {
      if (!e) return r;
      for (let n of e) t[r++] = n.uid;
      return r;
    }(e.filters, s, l), s.join("-");
  }, "generateTextureBatchBit", () => it.generateTextureBatchBit, "generateTextureBatchBitGl", () => it.generateTextureBatchBitGl, "generateTextureMatrix", () => l3.generateTextureMatrix, "generateUniformsSync", () => a8.generateUniformsSync, "getAdjustedBlendModeBlend", () => r6.getAdjustedBlendModeBlend, "getAttributeInfoFromFormat", () => o4.getAttributeInfoFromFormat, "getBatchSamplersUniformGroup", () => ir.getBatchSamplersUniformGroup, "getBitmapTextLayout", () => n4.getBitmapTextLayout, "getCanvasBoundingBox", 0, nU, "getCanvasFillStyle", () => nX.getCanvasFillStyle, "getCanvasTexture", () => sL.getCanvasTexture, "getCharacterGroups", () => u5.getCharacterGroups, "getDefaultUniformValue", () => sl.getDefaultUniformValue, "getFastGlobalBounds", 0, function (e, t) {
    return (0, rd.deprecation)("8.7.0", "Use container.getFastGlobalBounds() instead"), e.getFastGlobalBounds(!0, t);
  }, "getFastGlobalBoundsMixin", () => sJ.getFastGlobalBoundsMixin, "getFillInstructionData", () => lQ.getFillInstructionData, "getFontCss", 0, iO, "getFontFamilyName", () => eR.getFontFamilyName, "getGeometryBounds", () => o6.getGeometryBounds, "getGlTypeFromFormat", () => aR.getGlTypeFromFormat, "getGlobalBounds", () => tD.getGlobalBounds, "getGlobalMixin", () => no.getGlobalMixin, "getGlobalRenderableBounds", () => sz.getGlobalRenderableBounds, "getLocalBounds", () => sq.getLocalBounds, "getMaxFragmentPrecision", () => aV.getMaxFragmentPrecision, "getMaxMiterRatio", () => l2.getMaxMiterRatio, "getMaxTexturesPerBatch", () => i$.getMaxTexturesPerBatch, "getOrientationOfPoints", () => l1.getOrientationOfPoints, "getPlainText", () => u6.getPlainText, "getPo2TextureFromSource", () => nK.getPo2TextureFromSource, "getResolutionOfUrl", () => eQ.getResolutionOfUrl, "getSVGUrl", 0, iB, "getSupportedCompressedTextureFormats", 0, eY, "getSupportedGPUCompressedTextureFormats", 0, eW, "getSupportedGlCompressedTextureFormats", 0, ez, "getSupportedTextureFormats", 0, eK, "getTemporaryCanvasFromImage", 0, iF, "getTestContext", () => a$.getTestContext, "getTextureBatchBindGroup", () => iq.getTextureBatchBindGroup, "getTextureDefaultMatrix", 0, function (e, t) {
    let {
      width: r,
      height: n
    } = e.frame;
    return t.scale(1 / r, 1 / n), t;
  }, "getTextureFormatFromKTXTexture", 0, function (e) {
    return 2 === e.classId ? tv(e.vkFormat) : ty(e.glInternalformat);
  }, "getUboData", () => aq.getUboData, "getUniformData", () => az.getUniformData, "getUrlExtension", () => eP.getUrlExtension, "glFormatToGPUFormat", 0, ty, "glUploadBufferImageResource", () => ot.glUploadBufferImageResource, "glUploadCompressedTextureResource", () => or.glUploadCompressedTextureResource, "glUploadImageResource", () => oi.glUploadImageResource, "glUploadVideoResource", () => oa.glUploadVideoResource, "globalUniformsBit", () => i6.globalUniformsBit, "globalUniformsBitGl", () => i6.globalUniformsBitGl, "globalUniformsUBOBitGl", () => i6.globalUniformsUBOBitGl, "gpuFormatToBasisTranscoderFormat", 0, function (e) {
    let t = e8[e];
    if (t) return t;
    throw Error(`Unsupported transcoderFormat: ${e}`);
  }, "gpuFormatToKTXBasisTranscoderFormat", 0, function (e) {
    let t = tR[e];
    if (t) return t;
    throw Error(`Unsupported transcoderFormat: ${e}`);
  }, "gpuUploadBufferImageResource", () => ok.gpuUploadBufferImageResource, "gpuUploadCompressedTextureResource", () => oH.gpuUploadCompressedTextureResource, "gpuUploadImageResource", () => o$.gpuUploadImageResource, "gpuUploadVideoResource", () => oq.gpuUploadVideoResource, "graphicsContextToSvg", 0, function (e, t = 2) {
    let r = e instanceof rK.GraphicsContext ? e : e.context,
      n = new lO(),
      i = [],
      a = r.instructions,
      o = 0;
    for (; o < a.length;) {
      let e = a[o];
      switch (e.action) {
        case "fill":
          {
            let r = !!e.data.hole,
              a = r ? lI(e.data.path, t) + lI(e.data.hole, t, !0) : lI(e.data.path, t),
              o = lV(e.data.style, n),
              s = r ? ' fill-rule="evenodd"' : "";
            i.push(`<path d="${a}" ${o}${s}/>`);
            break;
          }
        case "stroke":
          {
            let r = lI(e.data.path, t);
            e.data.hole && (r += lI(e.data.hole, t, !0));
            let a = l$(e.data.style, n);
            i.push(`<path d="${r}" ${a}/>`);
          }
      }
      o++;
    }
    let s = r.bounds,
      l = parseFloat(s.minX.toFixed(t)),
      u = parseFloat(s.minY.toFixed(t)),
      c = parseFloat((s.maxX - s.minX).toFixed(t)),
      d = parseFloat((s.maxY - s.minY).toFixed(t)),
      h = n.build(),
      p = i.join("");
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${c}" height="${d}" viewBox="${l} ${u} ${c} ${d}">${h}${p}</svg>`;
  }, "groupD8", () => rB.groupD8, "hasCachedCanvasTexture", () => sL.hasCachedCanvasTexture, "hasTagMarkup", () => u6.hasTagMarkup, "hasTagStyles", () => u6.hasTagStyles, "hslWgsl", 0, "fn getLuminosity(c: vec3<f32>) -> f32 {\n  return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;\n}\n\nfn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32> {\n  let d: f32 = lum - getLuminosity(c);\n  let newColor: vec3<f32> = c.rgb + vec3<f32>(d, d, d);\n\n  // clip back into legal range\n  let newLum: f32 = getLuminosity(newColor);\n  let cMin: f32 = min(newColor.r, min(newColor.g, newColor.b));\n  let cMax: f32 = max(newColor.r, max(newColor.g, newColor.b));\n\n  let t1: f32 = newLum / (newLum - cMin);\n  let t2: f32 = (1.0 - newLum) / (cMax - newLum);\n\n  let finalColor = mix(vec3<f32>(newLum, newLum, newLum), newColor, select(select(1.0, t2, cMax > 1.0), t1, cMin < 0.0));\n\n  return finalColor;\n}\n\nfn getSaturation(c: vec3<f32>) -> f32 {\n  return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));\n}\n\n// Set saturation if color components are sorted in ascending order.\nfn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32> {\n  var result: vec3<f32>;\n  if (cSorted.z > cSorted.x) {\n    let newY = (((cSorted.y - cSorted.x) * s) / (cSorted.z - cSorted.x));\n    result = vec3<f32>(0.0, newY, s);\n  } else {\n    result = vec3<f32>(0.0, 0.0, 0.0);\n  }\n  return vec3<f32>(result.x, result.y, result.z);\n}\n\nfn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32> {\n    var result: vec3<f32> = c;\n\n    if (c.r <= c.g && c.r <= c.b) {\n        if (c.g <= c.b) {\n            result = setSaturationMinMidMax(result, s);\n        } else {\n            var temp: vec3<f32> = vec3<f32>(result.r, result.b, result.g);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.r, temp.b, temp.g);\n        }\n    } else if (c.g <= c.r && c.g <= c.b) {\n        if (c.r <= c.b) {\n            var temp: vec3<f32> = vec3<f32>(result.g, result.r, result.b);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.g, temp.r, temp.b);\n        } else {\n            var temp: vec3<f32> = vec3<f32>(result.g, result.b, result.r);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.g, temp.b, temp.r);\n        }\n    } else {\n        if (c.r <= c.g) {\n            var temp: vec3<f32> = vec3<f32>(result.b, result.r, result.g);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.b, temp.r, temp.g);\n        } else {\n            var temp: vec3<f32> = vec3<f32>(result.b, result.g, result.r);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.b, temp.g, temp.r);\n        }\n    }\n\n    return result;\n}", "hslgl", 0, I, "hslgpu", 0, U, "injectBits", () => i8.injectBits, "insertVersion", () => aZ.insertVersion, "isBreakAfterChar", () => u5.isBreakAfterChar, "isBreakingSpace", () => u5.isBreakingSpace, "isCanvasFilterCapable", () => ro.isCanvasFilterCapable, "isCollapsibleSpace", () => u5.isCollapsibleSpace, "isMobile", () => ca.isMobile, "isNewline", () => u5.isNewline, "isPow2", () => rI.isPow2, "isRenderingToScreen", () => se.isRenderingToScreen, "isSafari", () => iM.isSafari, "isSingleItem", () => eL.isSingleItem, "isWebGLSupported", () => eX.isWebGLSupported, "isWebGPUSupported", () => ek.isWebGPUSupported, "ktxTranscoderUrls", 0, tp, "loadBasis", 0, e1, "loadBasisOnWorker", 0, e2, "loadBitmapFont", () => uz.loadBitmapFont, "loadDDS", 0, ti, "loadEnvironmentExtensions", () => tV.loadEnvironmentExtensions, "loadFontAsBase64", 0, iw, "loadFontCSS", 0, iD, "loadImageBitmap", () => eA.loadImageBitmap, "loadJson", () => eS.loadJson, "loadKTX", 0, tc, "loadKTX2", 0, tb, "loadKTX2onWorker", 0, tg, "loadSVGImage", 0, iI, "loadSvg", () => eE.loadSvg, "loadTextures", () => eA.loadTextures, "loadTxt", () => ev.loadTxt, "loadVideoTextures", () => eM.loadVideoTextures, "loadWebFont", () => eR.loadWebFont, "localUniformBit", () => nf.localUniformBit, "localUniformBitGl", () => nf.localUniformBitGl, "localUniformBitGroup2", () => nf.localUniformBitGroup2, "localUniformMSDFBit", 0, ia, "localUniformMSDFBitGl", 0, io, "log2", () => rI.log2, "logDebugTexture", 0, cd, "logProgramError", () => aW.logProgramError, "logRenderGroupScene", 0, function e(t, r = 0, n = {
    index: 0,
    color: "#000000"
  }) {
    let i = "";
    for (let e = 0; e < r; e++) i += "    ";
    console.log(`%c ${i}- ${n.index}: ${t.root.label} worldX:${t.worldTransform.tx}`, `color:${n.color}; font-weight:bold;`), r++;
    for (let i = 0; i < t.renderGroupChildren.length; i++) e(t.renderGroupChildren[i], r, {
      ...n,
      index: i
    });
  }, "logScene", 0, function e(t, r = 0, n = {
    color: "#000000"
  }) {
    t.renderGroup && (n.color = ch[cp++]);
    let i = "";
    for (let e = 0; e < r; e++) i += "    ";
    let a = t.label;
    !a && t instanceof rR.Sprite && (a = `sprite:${t.texture.label}`);
    let o = `%c ${i}|- ${a} (worldX:${t.worldTransform.tx}, relativeRenderX:${t.relativeGroupTransform.tx}, renderX:${t.groupTransform.tx}, localX:${t.x})`;
    t.renderGroup && (o += " (RenderGroup)"), t.filters && (o += "(*filters)"), console.log(o, `color:${n.color}; font-weight:bold;`), r++;
    for (let i = 0; i < t.children.length; i++) e(t.children[i], r, {
      ...n
    });
  }, "mSDFBit", 0, is, "mSDFBitGl", 0, il, "mapCanvasBlendModesToPixi", () => ab.mapCanvasBlendModesToPixi, "mapFormatToGlFormat", () => os.mapFormatToGlFormat, "mapFormatToGlInternalFormat", () => ol.mapFormatToGlInternalFormat, "mapFormatToGlType", () => ou.mapFormatToGlType, "mapGlToVertexFormat", () => aj.mapGlToVertexFormat, "mapSize", 0, function (e) {
    return aY[e];
  }, "mapType", () => aj.mapType, "mapViewDimensionToGlTarget", () => oc.mapViewDimensionToGlTarget, "mapWebGLBlendModesToPixi", () => a5.mapWebGLBlendModesToPixi, "maskFrag", () => rn.default, "maskVert", () => ri.default, "maskWgsl", () => ra.default, "matrixPool", () => sW.matrixPool, "measureHtmlText", 0, iv, "measureMixin", () => s0.measureMixin, "measureTaggedText", () => u4.measureTaggedText, "migrateFragmentFromV7toV8", 0, function (e) {
    return e = e.replaceAll("texture2D", "texture").replaceAll("gl_FragColor", "finalColor").replaceAll("varying", "in"), e = `
        out vec4 finalColor;
    ${e}
    `;
  }, "mipmapScaleModeToGlFilter", () => od.mipmapScaleModeToGlFilter, "multiplyColors", () => la.multiplyColors, "multiplyHexColors", () => ns.multiplyHexColors, "nextPow2", () => rI.nextPow2, "noiseFrag", 0, t9, "noiseWgsl", 0, re, "nonCompressedFormats", 0, ej, "normalizeExtensionPriority", () => v.normalizeExtensionPriority, "onRenderMixin", () => s3.onRenderMixin, "parseDDS", 0, tn, "parseFunctionBody", 0, function (e) {
    let t = e.toString(),
      r = t.indexOf("{"),
      n = t.lastIndexOf("}");
    if (-1 === r || -1 === n) throw Error("getFunctionBody: No body found in function definition");
    return t.slice(r + 1, n).trim();
  }, "parseKTX", 0, tu, "parseSVGDefinitions", () => lq.parseSVGDefinitions, "parseSVGFloatAttribute", () => lz.parseSVGFloatAttribute, "parseSVGPath", () => lW.parseSVGPath, "parseSVGStyle", () => lY.parseSVGStyle, "parseTaggedText", () => u6.parseTaggedText, "particleData", 0, uD, "particlesFrag", 0, sH, "particlesVert", 0, sV, "particlesWgsl", 0, s$, "passthroughFrag", () => rt.default, "passthroughWgsl", () => rr.default, "path", () => cm.path, "pointInTriangle", 0, rN, "preloadVideo", () => eM.preloadVideo, "removeItems", () => cu.removeItems, "removeStructAndGroupDuplicates", () => oI.removeStructAndGroupDuplicates, "resetUids", () => sy.resetUids, "resolveCharacters", () => uK.resolveCharacters, "resolveCompressedTextureUrl", 0, tA, "resolveJsonUrl", () => ew.resolveJsonUrl, "resolveTextureUrl", () => eD.resolveTextureUrl, "resourceToTexture", () => sN.resourceToTexture, "roundPixelsBit", () => nm.roundPixelsBit, "roundPixelsBitGl", () => nm.roundPixelsBitGl, "roundedShapeArc", () => lD.roundedShapeArc, "roundedShapeQuadraticCurve", () => lD.roundedShapeQuadraticCurve, "sayHello", () => c_.sayHello, "scaleModeToGlFilter", () => od.scaleModeToGlFilter, "setBasisTranscoderPath", 0, function (e) {
    Object.assign(e0, e);
  }, "setKTXTranscoderPath", 0, function (e) {
    Object.assign(tp, e);
  }, "setPositions", 0, ny, "setProgramName", () => aJ.setProgramName, "setUvs", 0, nv, "shapeBuilders", () => lJ.shapeBuilders, "sortMixin", () => s2.sortMixin, "spritesheetAsset", () => cr.spritesheetAsset, "squaredDistanceToLineSegment", () => rU.squaredDistanceToLineSegment, "stripVersion", () => a0.stripVersion, "styleAttributes", () => lY.styleAttributes, "testImageFormat", () => e_.testImageFormat, "testVideoFormat", () => ex.testVideoFormat, "textStyleToCSS", 0, ip, "textureBit", () => i5.textureBit, "textureBitGl", () => i5.textureBitGl, "textureFrom", () => sN.textureFrom, "tilingBit", 0, nb, "tilingBitGl", 0, n_, "toFillStyle", () => l0.toFillStyle, "toLocalGlobalMixin", () => s1.toLocalGlobalMixin, "toStrokeStyle", () => l0.toStrokeStyle, "tokenize", () => u5.tokenize, "tokenizeTaggedRuns", () => u4.tokenizeTaggedRuns, "transformVertices", () => o5.transformVertices, "triangulateWithHoles", () => l8.triangulateWithHoles, "trimRight", () => u5.trimRight, "uboSyncFunctionsSTD40", () => su.uboSyncFunctionsSTD40, "uboSyncFunctionsWGSL", () => su.uboSyncFunctionsWGSL, "uid", () => sy.uid, "uniformParsers", () => sc.uniformParsers, "unpremultiplyAlpha", 0, function (e) {
    e instanceof Uint8ClampedArray && (e = new Uint8Array(e.buffer));
    let t = e.length;
    for (let r = 0; r < t; r += 4) {
      let t = e[r + 3];
      if (0 !== t) {
        let n = 255.001 / t;
        e[r] = e[r] * n + .5, e[r + 1] = e[r + 1] * n + .5, e[r + 2] = e[r + 2] * n + .5;
      }
    }
  }, "unsafeEvalSupported", () => co.unsafeEvalSupported, "updateLocalTransform", 0, function (e, t) {
    let r = t._scale,
      n = t._pivot,
      i = t._position,
      a = r._x,
      o = r._y,
      s = n._x,
      l = n._y;
    e.a = t._cx * a, e.b = t._sx * a, e.c = t._cy * o, e.d = t._sy * o, e.tx = i._x - (s * e.a + l * e.c), e.ty = i._y - (s * e.b + l * e.d);
  }, "updateQuadBounds", () => nq.updateQuadBounds, "updateRenderGroupTransform", () => lo.updateRenderGroupTransform, "updateRenderGroupTransforms", () => lo.updateRenderGroupTransforms, "updateTextBounds", 0, nz, "updateTransformAndChildren", () => lo.updateTransformAndChildren, "updateTransformBackwards", () => tD.updateTransformBackwards, "updateWorldTransform", 0, function (e, t, r) {
    let n = e.a,
      i = e.b,
      a = e.c,
      o = e.d,
      s = e.tx,
      l = e.ty,
      u = t.a,
      c = t.b,
      d = t.c,
      h = t.d;
    r.a = n * u + i * d, r.b = n * c + i * h, r.c = a * u + o * d, r.d = a * c + o * h, r.tx = s * u + l * d + t.tx, r.ty = s * c + l * h + t.ty;
  }, "v8_0_0", () => rd.v8_0_0, "v8_3_4", () => rd.v8_3_4, "validFormats", 0, tE, "validateRenderables", () => ls.validateRenderables, "vertexGPUTemplate", () => i4.vertexGPUTemplate, "vertexGlTemplate", () => i4.vertexGlTemplate, "vkFormatToGPUFormat", 0, tv, "warn", () => n2.warn, "webworkerExt", () => S.webworkerExt, "wordWrap", () => u7.wordWrap, "wordWrapTaggedLines", () => u4.wordWrapTaggedLines, "wrapModeToGlAddress", () => od.wrapModeToGlAddress], 129782);
};
