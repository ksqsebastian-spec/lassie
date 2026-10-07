// Recovered from 0204cjc529000.js. Runtime module IDs: 893661.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  e.s(["FilterEffect", 0, class {
    constructor() {
      this.pipe = "filter", this.priority = 1;
    }
    destroy() {
      for (let e = 0; e < this.filters.length; e++) this.filters[e].destroy();
      this.filters = null, this.filterArea = null;
    }
  }]);
};
