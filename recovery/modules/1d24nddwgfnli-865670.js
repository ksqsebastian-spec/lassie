// Recovered from 1d24nddwgfnli.js. Runtime module IDs: 865670.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(817255),
    r = e.i(177791);
  e.s(["EMAIL_PATTERN", 0, "[a-zA-Z0-9](\\.?[a-zA-Z0-9_%+\\-]+)*@[a-zA-Z0-9\\-]+(\\.[a-zA-Z]{2,})+", "submitMarketingEmailForm", 0, function ({
    email: e,
    forwardUrl: i,
    navigate: a
  }) {
    t.tracker.identify({
      email: e
    });
    let n = (0, r.getSplashAttributionPath)(window.location.pathname),
      l = new URL(window.location.href).searchParams.get("rep"),
      s = new URL(`https://lassie.ai${i}`);
    s.searchParams.set("email", e), s.searchParams.set("splash", n), s.searchParams.set("source", "www"), l && s.searchParams.set("rep", l), a(s.toString());
  }]);
};
