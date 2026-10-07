// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 756928.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    createLinkPrefetchPartialError: function () {
      return u;
    },
    createUnrenderedSegmentError: function () {
      return l;
    }
  };
  for (var a in n) Object.defineProperty(r, a, {
    enumerable: !0,
    get: n[a]
  });
  function l(e, t) {
    let r = `Route "${e}": Could not validate that a segment in your UI has instant navigation.`;
    if (t.length > 0) {
      let e = 1 === t.length ? "Dropped segment" : "Dropped segments";
      r += `

This segment was dropped from rendering. Issues that would prevent instant navigation will go undetected.

${e}:
${t.map(e => `  ${e}`).join("\n")}

Ways to fix this:
  - [render] Render the dropped segment
  - [ignore] Set \`export const instant = false\` to opt the dropped segment out of instant-navigation validation

Learn more: https://nextjs.org/docs/messages/instant-unrendered-segment`;
    }
    return Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
      value: "E1286",
      enumerable: !1,
      configurable: !0
    });
  }
  function u(e) {
    return Object.defineProperty(Error(`Next.js encountered dynamic data during prefetching for "${e}".

This will lead to slower, more expensive prefetches.

Ways to fix this:
  - [upgrade] Opt into Partial Prefetching by exporting \`const prefetch = 'partial'\` from the page or layout, or by setting \`partialPrefetching: true\` in next.config to opt the whole app in
  - [disable] Remove \`prefetch={true}\` from the <Link> to use the default prefetch
  - [ignore] Set \`export const instant = false\` to opt the route out of instant-navigation validation

Learn more: https://nextjs.org/docs/messages/instant-link-prefetch-partial`), "__NEXT_ERROR_CODE", {
      value: "E1435",
      enumerable: !1,
      configurable: !0
    });
  }
};
