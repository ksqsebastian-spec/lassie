// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 716869.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    METADATA_BOUNDARY_NAME: function () {
      return u;
    },
    OUTLET_BOUNDARY_NAME: function () {
      return a;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function () {
      return l;
    },
    VIEWPORT_BOUNDARY_NAME: function () {
      return i;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = "__next_metadata_boundary__",
    i = "__next_viewport_boundary__",
    a = "__next_outlet_boundary__",
    l = "__next_root_layout_boundary__";
};
