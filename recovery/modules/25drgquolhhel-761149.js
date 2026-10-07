// Recovered from 25drgquolhhel.js. Runtime module IDs: 761149.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  var e = t.i(263524),
    i = t.i(733705),
    s = t.i(550645),
    r = t.i(175444),
    n = t.i(818011),
    a = t.i(162450),
    h = t.i(153594);
  class o extends e.default {
    constructor(t) {
      super(), this.uid = (0, i.uid)("shader"), this._uniformBindMap = Object.create(null), this._ownedBindGroups = [], this._destroyed = !1;
      let {
        gpuProgram: e,
        glProgram: s,
        groups: n,
        resources: o,
        compatibleRenderers: u,
        groupMap: l
      } = t;
      this.gpuProgram = e, this.glProgram = s, void 0 === u && (u = 0, e && (u |= a.RendererType.WEBGPU), s && (u |= a.RendererType.WEBGL)), this.compatibleRenderers = u;
      const d = {};
      if (o || n || (o = {}), o && n) throw Error("[Shader] Cannot have both resources and groups");
      if (e || !n || l) {
        if (!e && n && l) for (const t in l) for (const e in l[t]) {
          const i = l[t][e];
          d[i] = {
            group: t,
            binding: e,
            name: i
          };
        } else if (e && n && !l) {
          const t = e.structsAndGroups.groups;
          l = {}, t.forEach(t => {
            l[t.group] = l[t.group] || {}, l[t.group][t.binding] = t.name, d[t.name] = t;
          });
        } else if (o) {
          n = {}, l = {}, e && e.structsAndGroups.groups.forEach(t => {
            l[t.group] = l[t.group] || {}, l[t.group][t.binding] = t.name, d[t.name] = t;
          });
          let t = 0;
          for (const e in o) !d[e] && (n[99] || (n[99] = new r.BindGroup(), this._ownedBindGroups.push(n[99])), d[e] = {
            group: 99,
            binding: t,
            name: e
          }, l[99] = l[99] || {}, l[99][t] = e, t++);
          for (const t in o) {
            let e = o[t];
            e.source || e._resourceType || (e = new h.UniformGroup(e));
            const i = d[t];
            i && (n[i.group] || (n[i.group] = new r.BindGroup(), this._ownedBindGroups.push(n[i.group])), n[i.group].setResource(e, i.binding));
          }
        }
      } else throw Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");
      this.groups = n, this._uniformBindMap = l, this.resources = this._buildResourceAccessor(n, d);
    }
    addResource(t, e, i) {
      var s, n;
      (s = this._uniformBindMap)[e] || (s[e] = {}), (n = this._uniformBindMap[e])[i] || (n[i] = t), this.groups[e] || (this.groups[e] = new r.BindGroup(), this._ownedBindGroups.push(this.groups[e]));
    }
    _buildResourceAccessor(t, e) {
      let i = {};
      for (let s in e) {
        let r = e[s];
        Object.defineProperty(i, r.name, {
          get: () => t[r.group].getResource(r.binding),
          set(e) {
            t[r.group].setResource(e, r.binding);
          }
        });
      }
      return i;
    }
    destroy(t = !1) {
      this._destroyed || (this._destroyed = !0, this.emit("destroy", this), t && (this.gpuProgram?.destroy(), this.glProgram?.destroy()), this.gpuProgram = null, this.glProgram = null, this.removeAllListeners(), this._uniformBindMap = null, this._ownedBindGroups.forEach(t => {
        t.destroy();
      }), this._ownedBindGroups = null, this.resources = null, this.groups = null);
    }
    static from(t) {
      let e,
        i,
        {
          gpu: r,
          gl: a,
          ...h
        } = t;
      return r && (e = n.GpuProgram.from(r)), a && (i = s.GlProgram.from(a)), new o({
        gpuProgram: e,
        glProgram: i,
        ...h
      });
    }
  }
  t.s(["Shader", 0, o]);
};
