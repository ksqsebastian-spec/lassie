# Lassie source recovery QA

final result: passed

## Comparison target and evidence

- Source: https://www.lassie.ai, captured October 7, 2026.
- Implementation: http://localhost:4173, built from the deployed frontend documents and runtime.
- Source visual truth: `verification/home-1440-source-paired.jpg` and `verification/home-390-source-paired.jpg`.
- Implementation captures: `verification/home-1440-restored-paired.jpg`, `verification/home-390-restored-paired.jpg`, and `verification/story-restored-full-player.jpg`.
- Combined comparison inputs: `verification/home-1440-comparison.png`, `verification/home-390-comparison.png`, `verification/company-1440-comparison.png`, and `verification/get-started-1440-comparison.png`.
- Lower-page comparison inputs: `verification/home-scroll-1400-comparison.png`, `verification/home-scroll-4900-comparison.png`, `verification/home-scroll-7700-comparison.png`, `verification/home-scroll-12600-comparison.png`, `verification/home-scroll-14000-comparison.png`, and `verification/home-scroll-15400-comparison.png`.
- Viewports: desktop 1440 × 900, tablet 768 × 1024, mobile 390 × 844 CSS pixels. Source and implementation screenshots use equal pixel dimensions at density 1. Combined desktop comparison images are 2880 × 900; combined mobile images are 780 × 844. No density normalization was required for measurement. Display resizing does not change the saved evidence.
- State: same route, unfilled forms, fonts ready, top-of-page scroll position. Hero videos were paused at three seconds for paired top captures. Rotating activity lines and autonomous scroll animations were assessed as dynamic states, without claiming synchronized animation phase.
- Measurements: `verification/paired-verification.json` records matching heading text, rectangles, font family, size, line height, color, form rectangles, and background colors for four routes at all three viewports: twelve matched route/viewport comparisons.

## Fidelity surfaces

- Fonts and typography: original ABC Marist, DM Sans, and DM Mono files preserved. Heading families, sizes, wrapping, bounds, line heights, and colors match all twelve measured comparisons. Display italics and original brand SVG lettering remain intact.
- Spacing and layout rhythm: original compiled CSS and markup retained. Matched hero/form bounds, navigation, radii, feature cards, FAQ rows, footer spacing, and desktop/mobile composition. Eighteen core route/viewport checks found no horizontal overflow or broken images.
- Colors and tokens: original stylesheet tokens retained. The source and restored body backgrounds and measured heading colors are equal. Side-by-side views show matching hero overlay, neutral surfaces, orange signup controls, pale feature cards, and focus/control styling.
- Images, vectors, and animation: original photos, videos, SVG cards/icons/logos, flower animation, sprite sheet, WebAssembly animation engine, story posters, dotted map, and captions preserved locally. No handcrafted replacements were used for visible artwork. Two large story videos are streamed from lossless file chunks; byte-range checks crossing chunk boundaries returned exactly the original bytes.
- Copy and content: visible site copy comes from captured documents and the original client code. Both story articles and their captions are preserved. The public careers list uses the captured read-only response, explicitly documented as an archive.

## Focused comparison

`verification/pixel-comparison.json` records pixelmatch comparisons at threshold 0.1, excluding antialiasing differences. These static regions have zero differing pixels:

- Company desktop content: 1440 × 600 pixels, starting at y=80.
- Company mobile content: 390 × 600 pixels, starting at y=80.
- Get-started desktop heading, copy, email form, and benefit row: 730 × 470 pixels, starting at (180,100).

These are region-level results, not a claim that every animated frame across the entire site has a zero-pixel difference.

## Interactions and runtime

- Mobile menu opens and closes.
- All seven FAQ questions expand and collapse.
- The review control opens the original review state.
- Original feature/background videos load from local assets.
- Full story playback works with original video bytes. Closing the story returns to `/stories`; evidence is in `verification/story-close-verification.json`.
- Story article content, player controls, caption files, and map asset are included.
- Core route checks have no runtime exceptions, failed requests, or remote asset/telemetry requests after repairs; see `verification/verification.json`.
- No lead was submitted. Login and lead qualification retain their original external destinations. Private product/backend functionality is outside recovered evidence.
- Original semantic controls, alt text, email validation, focus styles, and responsive CSS are retained. This is fidelity QA, not a claim of exhaustive cross-browser or WCAG certification.

## Comparison history and repairs

1. [P1] Initial hydration mismatch and missing flower/sprite assets. Restored the source noscript structure and downloaded the original Lottie, sprite JSON/PNG, and WebAssembly runtime. Subsequent core checks have no hydration or animation-loading errors.
2. [P1] Company careers list invoked an unavailable private server action. Captured the original public read-only `getJobs` response and bound only that action ID and request body to the archived response. Company desktop/mobile checks then passed without exceptions or failed requests.
3. [P1] Story navigation revealed two additional full-story routes and a lazy player chunk. Added both original documents, React Flight payloads, player dependencies, captions, posters, and dotted map. Full playback and close-to-carousel behavior were verified after repair.
4. [P2] Captured marketing scripts sent telemetry to the source accounts. Disabled tracker components in packaged output and routed the source GTM bootstrap to a local no-op script; original captured files remain preserved. Subsequent checks found no remote requests.
5. [P3] Four source device-icon URLs return 404. The packaged archive serves the original source favicon at those icon aliases. No visible page artwork was substituted.

6. [P1] Live Cloudflare asset bindings returned complete chunks despite requested byte ranges. Added explicit stream slicing, tested both range-aware and full-file bindings, and verified two live cross-chunk requests returned exactly 64 expected original bytes. Evidence: `verification/live-range-verification.json`.

7. [P1] A navigation chunk loaded after initial rendering. Recovered the complete referenced lazy-import graph (19 additional chunks), bringing the archive to 67 chunks and 669 factories. The final live player loaded, sought to 80 seconds with readyState 4, and closed to `/stories` without errors; see `verification/live-story-verification.json`.

## Live publication

- URL: https://lassie.ksqsebastian.workers.dev
- Worker deployment ID: `8e0583ef169d458abddba407b1c2242e`.
- `verification/live-verification.json`: twelve routes at desktop/mobile sizes (24 checks), no runtime exceptions, failed requests, remote asset/telemetry requests, or horizontal overflow. Menu, seven FAQ items, and reviews interaction passed.
- `verification/live-range-verification.json`: byte-identical 64-byte requests spanning the 20 MiB storage boundary for both full story videos.
- `verification/live-story-verification.json`: full playback, seeking to 80 seconds, and closing back to the carousel passed without runtime errors.
- GitHub repository: https://github.com/ksqsebastian-spec/lassie.

## Remaining boundaries

- Original TypeScript, erased identifier names/comments, unpublished source maps, private backend code, and original build configuration are not recoverable from these public artifacts. UnmapJS found zero exposed maps across 38 discovered chunks.
- Normal document navigation is used for cross-page links. Story transitions continue through the original client runtime and captured route payloads.
- Dynamic animation timing can differ between independent browser loads.
- The preserved source image endpoint serves captured original images; it does not reproduce the original private image-optimization service.

## Implementation checklist

- [x] Preserve and package the source assets and deployed client runtime.
- [x] Compare desktop, tablet, and mobile typography and layout.
- [x] Compare static focused regions and lower-page scroll states.
- [x] Verify menu, FAQs, reviews, stories, media byte ranges, and runtime errors.
- [x] Fix all identified P0/P1/P2 issues.
- [x] Document source-recovery and backend boundaries.
- [x] Complete and verify Cloudflare publication.
