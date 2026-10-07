// Recovered from 25drgquolhhel.js. Runtime module IDs: 787653, 344520.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  let e = {
    createCanvas: (t, e) => {
      let i = document.createElement("canvas");
      return i.width = t, i.height = e, i;
    },
    createImage: () => new Image(),
    getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
    getWebGLRenderingContext: () => WebGLRenderingContext,
    getNavigator: () => navigator,
    getBaseUrl: () => document.baseURI ?? window.location.href,
    getFontFaceSet: () => document.fonts,
    fetch: (t, e) => fetch(t, e),
    parseXML: t => new DOMParser().parseFromString(t, "text/xml")
  };
  t.s(["BrowserAdapter", 0, e], 344520);
  let i = e;
  t.s(["DOMAdapter", 0, {
    get: () => i,
    set(t) {
      i = t;
    }
  }], 787653);
};
