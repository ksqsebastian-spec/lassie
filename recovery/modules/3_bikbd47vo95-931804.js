// Recovered from 3_bikbd47vo95.js. Runtime module IDs: 931804.
// This factory requires the original Turbopack runtime context.
export default t => {
  "use strict";

  let e = {
    maxAgeDays: 30,
    domain: function (t) {
      let e = t.split(".");
      if (!(e.length < 2 || /^[\d.]+$/.test(t))) return `.${e.slice(-2).join(".")}`;
    }(window.location.hostname),
    path: "/",
    sameSite: "Lax",
    secure: !0
  };
  class r {
    set(t, r = {}) {
      let n = {
          ...e,
          ...this.options,
          ...r
        },
        i = [`${this.name}=${encodeURIComponent(this.serialize(t))}`, void 0 !== n.maxAgeDays && `max-age=${86400 * n.maxAgeDays}`, n.path && `path=${n.path}`, n.domain && `domain=${n.domain}`, n.sameSite && `SameSite=${n.sameSite}`, n.secure && "Secure"].filter(Boolean).join("; ");
      document.cookie = i;
    }
    get() {
      let t = `${this.name}=`,
        e = document.cookie.split(";").map(t => t.trim()).find(e => e.startsWith(t))?.slice(t.length);
      return e ? this.deserialize(decodeURIComponent(e)) : void 0;
    }
    delete() {
      this.set(this.emptyValue(), {
        maxAgeDays: 0
      });
    }
    serialize(t) {
      return JSON.stringify(t);
    }
    deserialize(t) {
      return JSON.parse(t);
    }
    emptyValue() {
      return "";
    }
  }
  class n extends r {
    name = "utm";
    options = {
      ...e,
      maxAgeDays: 30
    };
  }
  class i extends r {
    name = "google_click_ids";
    options = {
      ...e,
      maxAgeDays: 30
    };
  }
  class o extends r {
    name = "referral_code";
    options = {
      ...e,
      maxAgeDays: 15
    };
  }
  class s extends r {
    name = "blog-view";
    options = {
      ...e,
      maxAgeDays: 365
    };
    serialize(t) {
      return t;
    }
    deserialize(t) {
      return t;
    }
  }
  t.s(["BlogViewCookie", 0, s, "GoogleClickIdCookie", 0, i, "ReferralCodeCookie", 0, o, "UtmCookie", 0, n, "getIsLassieUser", 0, function () {
    let t = document.cookie.split("; ").find(t => t.startsWith("is_lassie_user="));
    return !!t && "true" === t.split("=")[1];
  }]);
};
