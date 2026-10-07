// Recovered from 1ni0iorr83hha.js. Runtime module IDs: 418668, 949998.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t = {
      name: "local-uniform-bit",
      vertex: {
        header: `

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
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
      }
    },
    r = {
      ...t,
      vertex: {
        ...t.vertex,
        header: t.vertex.header.replace("group(1)", "group(2)")
      }
    },
    i = {
      name: "local-uniform-bit",
      vertex: {
        header: `

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,
        main: `
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,
        end: `
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `
      }
    };
  e.s(["localUniformBit", 0, t, "localUniformBitGl", 0, i, "localUniformBitGroup2", 0, r], 418668);
  let a = {
      name: "texture-bit",
      vertex: {
        header: `

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `,
        main: `
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        `
      },
      fragment: {
        header: `
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;


        `,
        main: `
            outColor = textureSample(uTexture, uSampler, vUV);
        `
      }
    },
    n = {
      name: "texture-bit",
      vertex: {
        header: `
            uniform mat3 uTextureMatrix;
        `,
        main: `
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        `
      },
      fragment: {
        header: `
        uniform sampler2D uTexture;


        `,
        main: `
            outColor = texture(uTexture, vUV);
        `
      }
    };
  e.s(["textureBit", 0, a, "textureBitGl", 0, n], 949998);
};
