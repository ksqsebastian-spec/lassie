// Recovered from 25drgquolhhel.js. Runtime module IDs: 609932.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  let e = {
    _registeredResources: new Set(),
    register(t) {
      this._registeredResources.add(t);
    },
    unregister(t) {
      this._registeredResources.delete(t);
    },
    release() {
      this._registeredResources.forEach(t => t.clear());
    },
    get registeredCount() {
      return this._registeredResources.size;
    },
    isRegistered(t) {
      return this._registeredResources.has(t);
    },
    reset() {
      this._registeredResources.clear();
    }
  };
  t.s(["GlobalResourceRegistry", 0, e]);
};
