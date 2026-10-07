# Lassie frontend recovery

Authorized recovery of the public frontend deployed at https://www.lassie.ai, captured on October 7, 2026.

Live recovery: https://lassie.ksqsebastian.workers.dev.

The runtime uses the site's deployed Next.js/Turbopack client bundles, rendered page documents, original CSS, fonts, images, animations, and video bytes. It does not recreate the design from screenshots.

## Run

```sh
npm ci
npm run build
npm run dev -- --port 4173
```

Open http://localhost:4173.

```sh
npm run decompile
npm run check
npm run deploy
```

Deployment targets the `lassie` Cloudflare Worker. `npm run deploy` uses your local Wrangler authentication. The checked-in Worker configuration includes the static-asset binding and byte-range streaming for videos larger than Cloudflare's per-file limit. Large videos are split into 20 MiB assets without re-encoding.

## Recovered material

- `recovery/pages/`: original server-rendered documents for twelve public routes.
- `public/`: unmodified downloaded code and assets.
- `recovery/readable-chunks/`: all 67 client chunks processed by Wakaru.
- `recovery/modules/`: 669 separately extracted Turbopack module factories.
- `recovery/module-index.json`: module IDs, source chunks, and original source offsets.
- `recovery/asset-manifest.json`: original URLs, local files, sizes, and content types.
- `scripts/build.mjs`: reproducible packaging and explicit deployment adaptations.
- `worker/index.mjs`: route, image, archived public careers response, and video-range serving.
- `design-qa.md`: visual comparison and verification results.

## Recovery boundaries

No public source maps were found by UnmapJS across 38 discovered chunks. The readable code is recovered production code, not the original TypeScript project: original comments, names removed by minification, build configuration, and private server code cannot be reconstructed exactly from this deployment.

The twelve routes include the homepage, stories and two full story articles, company, demo, get-started, and five legal pages. Login and lead qualification retain the original external destinations. No lead was submitted while verifying this recovery. The public careers listing is an archived response from the original read-only `getJobs` action; it is not a live hiring integration.

Navigation performs normal document loads because the original private routing service was not exported. Advertising and third-party telemetry are disabled in the packaged runtime; the original captured files remain preserved for inspection. The archive is marked `noindex`.

All original Lassie content and brand assets retain their owners' rights. The requestor confirmed permission to reproduce the site.

## Tools

- [Wakaru](https://github.com/pionxzh/wakaru): readable client code and JSX recovery.
- [UnmapJS](https://github.com/atiilla/unmapjs): source-map discovery.
- [webEmbedding](https://github.com/jongko54/webEmbedding): source inspection.
- Playwright: rendered capture and interaction verification.
- Babel parser/generator: exact Turbopack module extraction.
- Sharp and pixelmatch: normalized visual comparison.
- Cloudflare Workers Assets API / Wrangler: deployment.
