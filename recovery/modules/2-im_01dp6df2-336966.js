// Recovered from 2-im_01dp6df2.js. Runtime module IDs: 336966.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(389474),
    i = t.i(733705);
  let r = {
    repeat: {
      addressModeU: "repeat",
      addressModeV: "repeat"
    },
    "repeat-x": {
      addressModeU: "repeat",
      addressModeV: "clamp-to-edge"
    },
    "repeat-y": {
      addressModeU: "clamp-to-edge",
      addressModeV: "repeat"
    },
    "no-repeat": {
      addressModeU: "clamp-to-edge",
      addressModeV: "clamp-to-edge"
    }
  };
  t.s(["FillPattern", 0, class {
    constructor(t, s) {
      this.uid = (0, i.uid)("fillPattern"), this._tick = 0, this.transform = new e.Matrix();
      const n = !function (t) {
        return void 0 !== t.texture;
      }(t) ? {
        texture: t,
        repetition: s
      } : t;
      this.texture = n.texture, this.textureSpace = n.textureSpace ?? "global";
      const a = n.repetition;
      a && (this.texture.source.style.addressModeU = r[a].addressModeU, this.texture.source.style.addressModeV = r[a].addressModeV);
    }
    setTransform(t) {
      if (t) {
        if (this.transform.equals(t)) return;
        this.transform.copyFrom(t);
      } else {
        if (this.transform.isIdentity()) return;
        this.transform.identity();
      }
      this._tick++;
    }
    get texture() {
      return this._texture;
    }
    set texture(t) {
      this._texture !== t && (this._texture = t, this._tick++);
    }
    get styleKey() {
      return `fill-pattern-${this.uid}-${this._tick}`;
    }
    destroy() {
      this.texture.destroy(!0), this.texture = null;
    }
  }]);
};
