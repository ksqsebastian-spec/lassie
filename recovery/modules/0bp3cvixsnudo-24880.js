// Recovered from 0bp3cvixsnudo.js. Runtime module IDs: 24880.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(78278),
    s = e.i(317765);
  class r extends s.TextureSource {
    constructor(e) {
      super(e), this.uploadMethodId = "image", this.autoGarbageCollect = !0;
    }
    static test(e) {
      return globalThis.HTMLImageElement && e instanceof HTMLImageElement || "u" > typeof ImageBitmap && e instanceof ImageBitmap || globalThis.VideoFrame && e instanceof VideoFrame;
    }
  }
  r.extension = t.ExtensionType.TextureSource, e.s(["ImageSource", 0, r]);
};
