// Recovered from 2c93oa6mp7tcw.js. Runtime module IDs: 224774.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var n = {
    MetadataBoundary: function () {
      return a;
    },
    OutletBoundary: function () {
      return s;
    },
    RootLayoutBoundary: function () {
      return c;
    },
    ViewportBoundary: function () {
      return l;
    }
  };
  for (var o in n) Object.defineProperty(r, o, {
    enumerable: !0,
    get: n[o]
  });
  let u = e.r(716869),
    i = {
      [u.METADATA_BOUNDARY_NAME]: function ({
        children: e
      }) {
        return e;
      },
      [u.VIEWPORT_BOUNDARY_NAME]: function ({
        children: e
      }) {
        return e;
      },
      [u.OUTLET_BOUNDARY_NAME]: function ({
        children: e
      }) {
        return e;
      },
      [u.ROOT_LAYOUT_BOUNDARY_NAME]: function ({
        children: e
      }) {
        return e;
      }
    },
    a = i[u.METADATA_BOUNDARY_NAME.slice(0)],
    l = i[u.VIEWPORT_BOUNDARY_NAME.slice(0)],
    s = i[u.OUTLET_BOUNDARY_NAME.slice(0)],
    c = i[u.ROOT_LAYOUT_BOUNDARY_NAME.slice(0)];
};
