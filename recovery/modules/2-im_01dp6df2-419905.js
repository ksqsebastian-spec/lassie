// Recovered from 2-im_01dp6df2.js. Runtime module IDs: 419905.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(222735),
    i = t.i(787653),
    r = t.i(389474),
    s = t.i(24880),
    n = t.i(337654),
    a = t.i(733705),
    l = t.i(727905),
    h = t.i(317624);
  let o = [{
      offset: 0,
      color: "white"
    }, {
      offset: 1,
      color: "black"
    }],
    u = class t {
      constructor(...e) {
        this.uid = (0, a.uid)("fillGradient"), this._tick = 0, this.type = "linear", this.colorStops = [];
        let i = function (t) {
          let e = t[0] ?? {};
          return ("number" == typeof e || t[1]) && ((0, l.deprecation)("8.5.2", "use options object instead"), e = {
            type: "linear",
            start: {
              x: t[0],
              y: t[1]
            },
            end: {
              x: t[2],
              y: t[3]
            },
            textureSpace: t[4],
            textureSize: t[5] ?? u.defaultLinearOptions.textureSize
          }), e;
        }(e);
        i = {
          ...("radial" === i.type ? t.defaultRadialOptions : t.defaultLinearOptions),
          ...(0, h.definedProps)(i)
        }, this._textureSize = i.textureSize, this._wrapMode = i.wrapMode, "radial" === i.type ? (this.center = i.center, this.outerCenter = i.outerCenter ?? this.center, this.innerRadius = i.innerRadius, this.outerRadius = i.outerRadius, this.scale = i.scale, this.rotation = i.rotation) : (this.start = i.start, this.end = i.end), this.textureSpace = i.textureSpace, this.type = i.type, i.colorStops.forEach(t => {
          this.addColorStop(t.offset, t.color);
        });
      }
      addColorStop(t, i) {
        return this.colorStops.push({
          offset: t,
          color: e.Color.shared.setValue(i).toHexa()
        }), this;
      }
      buildLinearGradient() {
        if (this.texture) return;
        let {
            x: t,
            y: e
          } = this.start,
          {
            x: i,
            y: a
          } = this.end,
          l = i - t,
          h = a - e,
          u = l < 0 || h < 0;
        if ("clamp-to-edge" === this._wrapMode) {
          if (l < 0) {
            let e = t;
            t = i, i = e, l *= -1;
          }
          if (h < 0) {
            let t = e;
            e = a, a = t, h *= -1;
          }
        }
        let f = this.colorStops.length ? this.colorStops : o,
          p = this._textureSize,
          {
            canvas: x,
            context: y
          } = d(p, 1),
          g = u ? y.createLinearGradient(this._textureSize, 0, 0, 0) : y.createLinearGradient(0, 0, this._textureSize, 0);
        c(g, f), y.fillStyle = g, y.fillRect(0, 0, p, 1), this.texture = new n.Texture({
          source: new s.ImageSource({
            resource: x,
            addressMode: this._wrapMode
          })
        });
        let m = Math.sqrt(l * l + h * h),
          b = Math.atan2(h, l),
          _ = new r.Matrix();
        _.scale(m / p, 1), _.rotate(b), _.translate(t, e), "local" === this.textureSpace && _.scale(p, p), this.transform = _;
      }
      buildGradient() {
        !this.texture && this._tick++, "linear" === this.type ? this.buildLinearGradient() : this.buildRadialGradient();
      }
      buildRadialGradient() {
        if (this.texture) return;
        let t = this.colorStops.length ? this.colorStops : o,
          e = this._textureSize,
          {
            canvas: i,
            context: a
          } = d(e, e),
          {
            x: l,
            y: h
          } = this.center,
          {
            x: u,
            y: f
          } = this.outerCenter,
          p = this.innerRadius,
          x = this.outerRadius,
          y = u - x,
          g = f - x,
          m = e / (2 * x),
          b = (l - y) * m,
          _ = (h - g) * m,
          P = a.createRadialGradient(b, _, p * m, (u - y) * m, (f - g) * m, x * m);
        c(P, t), a.fillStyle = t[t.length - 1].color, a.fillRect(0, 0, e, e), a.fillStyle = P, a.translate(b, _), a.rotate(this.rotation), a.scale(1, this.scale), a.translate(-b, -_), a.fillRect(0, 0, e, e), this.texture = new n.Texture({
          source: new s.ImageSource({
            resource: i,
            addressMode: this._wrapMode
          })
        });
        let v = new r.Matrix();
        "local" === this.textureSpace ? v.scale(2 * x, 2 * x) : v.scale(1 / m, 1 / m), v.translate(y, g), this.transform = v;
      }
      destroy() {
        this.texture?.destroy(!0), this.texture = null, this.transform = null, this.colorStops = [], this.start = null, this.end = null, this.center = null, this.outerCenter = null;
      }
      get styleKey() {
        return `fill-gradient-${this.uid}-${this._tick}`;
      }
    };
  function c(t, e) {
    for (let i = 0; i < e.length; i++) {
      let r = e[i];
      t.addColorStop(r.offset, r.color);
    }
  }
  function d(t, e) {
    let r = i.DOMAdapter.get().createCanvas(t, e),
      s = r.getContext("2d");
    return {
      canvas: r,
      context: s
    };
  }
  u.defaultLinearOptions = {
    start: {
      x: 0,
      y: 0
    },
    end: {
      x: 0,
      y: 1
    },
    colorStops: [],
    textureSpace: "local",
    type: "linear",
    textureSize: 256,
    wrapMode: "clamp-to-edge"
  }, u.defaultRadialOptions = {
    center: {
      x: .5,
      y: .5
    },
    innerRadius: 0,
    outerRadius: .5,
    colorStops: [],
    scale: 1,
    rotation: 0,
    textureSpace: "local",
    type: "radial",
    textureSize: 256,
    wrapMode: "clamp-to-edge"
  }, t.s(["FillGradient", 0, u]);
};
