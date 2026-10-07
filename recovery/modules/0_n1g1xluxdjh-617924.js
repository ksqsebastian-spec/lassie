// Recovered from 0_n1g1xluxdjh.js. Runtime module IDs: 617924.
// This factory requires the original Turbopack runtime context.
export default (e, t, n) => {
  "use strict";

  Object.defineProperty(n, "__esModule", {
    value: !0
  });
  var r = {
    getSortedRouteObjects: function () {
      return l;
    },
    getSortedRoutes: function () {
      return o;
    }
  };
  for (var a in r) Object.defineProperty(n, a, {
    enumerable: !0,
    get: r[a]
  });
  class i {
    insert(e) {
      this._insert(e.split("/").filter(Boolean), [], !1);
    }
    smoosh() {
      return this._smoosh();
    }
    _smoosh(e = "/") {
      let t = [...this.children.keys()].sort();
      null !== this.slugName && t.splice(t.indexOf("[]"), 1), null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1), null !== this.optionalRestSlugName && t.splice(t.indexOf("[[...]]"), 1);
      let n = t.map(t => this.children.get(t)._smoosh(`${e}${t}/`)).reduce((e, t) => [...e, ...t], []);
      if (null !== this.slugName && n.push(...this.children.get("[]")._smoosh(`${e}[${this.slugName}]/`)), !this.placeholder) {
        let t = "/" === e ? "/" : e.slice(0, -1);
        if (null != this.optionalRestSlugName) throw Object.defineProperty(Error(`You cannot define a route with the same specificity as a optional catch-all route ("${t}" and "${t}[[...${this.optionalRestSlugName}]]").`), "__NEXT_ERROR_CODE", {
          value: "E458",
          enumerable: !1,
          configurable: !0
        });
        n.unshift(t);
      }
      return null !== this.restSlugName && n.push(...this.children.get("[...]")._smoosh(`${e}[...${this.restSlugName}]/`)), null !== this.optionalRestSlugName && n.push(...this.children.get("[[...]]")._smoosh(`${e}[[...${this.optionalRestSlugName}]]/`)), n;
    }
    _insert(e, t, n) {
      if (0 === e.length) {
        this.placeholder = !1;
        return;
      }
      if (n) throw Object.defineProperty(Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
        value: "E392",
        enumerable: !1,
        configurable: !0
      });
      let r = e[0];
      if (r.startsWith("[") && r.endsWith("]")) {
        let i = r.slice(1, -1),
          o = !1;
        if (i.startsWith("[") && i.endsWith("]") && (i = i.slice(1, -1), o = !0), i.startsWith("…")) throw Object.defineProperty(Error(`Detected a three-dot character ('…') at ('${i}'). Did you mean ('...')?`), "__NEXT_ERROR_CODE", {
          value: "E147",
          enumerable: !1,
          configurable: !0
        });
        if (i.startsWith("...") && (i = i.substring(3), n = !0), i.startsWith("[") || i.endsWith("]")) throw Object.defineProperty(Error(`Segment names may not start or end with extra brackets ('${i}').`), "__NEXT_ERROR_CODE", {
          value: "E421",
          enumerable: !1,
          configurable: !0
        });
        if (i.startsWith(".")) throw Object.defineProperty(Error(`Segment names may not start with erroneous periods ('${i}').`), "__NEXT_ERROR_CODE", {
          value: "E288",
          enumerable: !1,
          configurable: !0
        });
        function a(e, n) {
          if (null !== e && e !== n) throw Object.defineProperty(Error(`You cannot use different slug names for the same dynamic path ('${e}' !== '${n}').`), "__NEXT_ERROR_CODE", {
            value: "E337",
            enumerable: !1,
            configurable: !0
          });
          t.forEach(e => {
            if (e === n) throw Object.defineProperty(Error(`You cannot have the same slug name "${n}" repeat within a single dynamic path`), "__NEXT_ERROR_CODE", {
              value: "E247",
              enumerable: !1,
              configurable: !0
            });
            if (e.replace(/\W/g, "") === r.replace(/\W/g, "")) throw Object.defineProperty(Error(`You cannot have the slug names "${e}" and "${n}" differ only by non-word symbols within a single dynamic path`), "__NEXT_ERROR_CODE", {
              value: "E499",
              enumerable: !1,
              configurable: !0
            });
          }), t.push(n);
        }
        if (n) {
          if (o) {
            if (null != this.restSlugName) throw Object.defineProperty(Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${e[0]}" ).`), "__NEXT_ERROR_CODE", {
              value: "E299",
              enumerable: !1,
              configurable: !0
            });
            a(this.optionalRestSlugName, i), this.optionalRestSlugName = i, r = "[[...]]";
          } else {
            if (null != this.optionalRestSlugName) throw Object.defineProperty(Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${e[0]}").`), "__NEXT_ERROR_CODE", {
              value: "E300",
              enumerable: !1,
              configurable: !0
            });
            a(this.restSlugName, i), this.restSlugName = i, r = "[...]";
          }
        } else {
          if (o) throw Object.defineProperty(Error(`Optional route parameters are not yet supported ("${e[0]}").`), "__NEXT_ERROR_CODE", {
            value: "E435",
            enumerable: !1,
            configurable: !0
          });
          a(this.slugName, i), this.slugName = i, r = "[]";
        }
      }
      this.children.has(r) || this.children.set(r, new i()), this.children.get(r)._insert(e.slice(1), t, n);
    }
    constructor() {
      this.placeholder = !0, this.children = new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
    }
  }
  function o(e) {
    let t = new i();
    return e.forEach(e => t.insert(e)), t.smoosh();
  }
  function l(e, t) {
    let n = {},
      r = [];
    for (let a = 0; a < e.length; a++) {
      let i = t(e[a]);
      n[i] = a, r[a] = i;
    }
    return o(r).map(t => e[n[t]]);
  }
};
