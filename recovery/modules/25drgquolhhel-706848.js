// Recovered from 25drgquolhhel.js. Runtime module IDs: 706848.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(733705);
  t.s(["InstructionSet", 0, class {
    constructor() {
      this.uid = (0, e.uid)("instructionSet"), this.instructions = [], this.instructionSize = 0, this.renderables = [], this.gcTick = 0;
    }
    reset() {
      this.instructionSize = 0;
    }
    destroy() {
      this.instructions.length = 0, this.renderables.length = 0, this.renderPipes = null, this.gcTick = 0;
    }
    add(t) {
      this.instructions[this.instructionSize++] = t;
    }
    log() {
      this.instructions.length = this.instructionSize, console.table(this.instructions, ["type", "action"]);
    }
  }]);
};
