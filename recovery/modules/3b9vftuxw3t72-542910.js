// Recovered from 3b9vftuxw3t72.js. Runtime module IDs: 542910.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n,
    a = {
      PrefetchHint: function () {
        return u;
      },
      StaticPrefetchDisabled: function () {
        return i;
      },
      SubtreePrefetchHints: function () {
        return o;
      },
      propagateSubtreeBits: function () {
        return c;
      }
    };
  for (var l in a) Object.defineProperty(r, l, {
    enumerable: !0,
    get: a[l]
  });
  var u = ((n = {})[n.SubtreeHasPartialPrefetching = 2] = "SubtreeHasPartialPrefetching", n[n.SegmentHasLoadingBoundary = 4] = "SegmentHasLoadingBoundary", n[n.SubtreeHasLoadingBoundary = 8] = "SubtreeHasLoadingBoundary", n[n.IsRootLayoutOrAbove = 16] = "IsRootLayoutOrAbove", n[n.ParentInlinedIntoSelf = 32] = "ParentInlinedIntoSelf", n[n.InlinedIntoChild = 64] = "InlinedIntoChild", n[n.HeadInlinedIntoSelf = 128] = "HeadInlinedIntoSelf", n[n.HeadOutlined = 256] = "HeadOutlined", n[n.InliningHintsStale = 512] = "InliningHintsStale", n[n.PrefetchDisabled = 1024] = "PrefetchDisabled", n[n.SubtreeHasEagerPrefetch = 4096] = "SubtreeHasEagerPrefetch", n[n.SubtreeHasInstantFalse = 8192] = "SubtreeHasInstantFalse", n[n.ShouldAttemptStaticPrefetch = 16384] = "ShouldAttemptStaticPrefetch", n);
  let i = 1024,
    o = 12298;
  function c(e, t) {
    return 2 & t && (e |= 2), 12 & t && (e |= 8), 4096 & t && (e |= 4096), 8192 & t && (e |= 8192), e;
  }
};
