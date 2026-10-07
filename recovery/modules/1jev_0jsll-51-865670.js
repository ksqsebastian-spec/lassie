// Recovered from 1jev_0jsll-51.js. Runtime module IDs: 865670.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(817255),
    r = e.i(177791);
  e.s(["EMAIL_PATTERN", 0, "[a-zA-Z0-9](\\.?[a-zA-Z0-9_%+\\-]+)*@[a-zA-Z0-9\\-]+(\\.[a-zA-Z]{2,})+", "submitMarketingEmailForm", 0, function ({
    email: e,
    forwardUrl: i,
    navigate: n
  }) {
    t.tracker.identify({
      email: e
    });
    let a = (0, r.getSplashAttributionPath)(window.location.pathname),
      s = new URL(window.location.href).searchParams.get("rep"),
      o = new URL(`https://lassie.ai${i}`);
    o.searchParams.set("email", e), o.searchParams.set("splash", a), o.searchParams.set("source", "www"), s && o.searchParams.set("rep", s), n(o.toString());
  }]);
};
