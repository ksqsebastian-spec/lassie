// Recovered from 1b3087i23rk3-.js. Runtime module IDs: 816027.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(809393),
    n = e.i(300778),
    a = e.i(513679),
    i = e.i(817255),
    s = e.i(279206),
    o = e.i(177791);
  e.s(["SignUp", 0, function ({
    className: e
  }) {
    let l = (0, n.useRouter)(),
      [d, u] = (0, a.useState)(!1);
    return (0, t.jsxs)("form", {
      onSubmit: function (e) {
        e.preventDefault();
        let t = new FormData(e.currentTarget).get("email");
        i.tracker.identify({
          email: t
        });
        let r = new URL(window.location.href).searchParams.get("rep"),
          n = (0, o.getSplashAttributionPath)(window.location.pathname),
          a = new URL("https://lassie.ai/qualify/intake");
        a.searchParams.set("email", t), a.searchParams.set("splash", n), a.searchParams.set("source", "www"), r && a.searchParams.set("rep", r), l.push(a.toString());
      },
      className: (0, r.default)("flex items-center justify-between", "px-[0.6rem] py-[0.6rem]", "border-[1px] border-[rgba(255,255,255,0.1)] border-solid bg-blur", "w-[27.5rem]", "transition-[width] duration-300 ease-out", "tablet:focus-within:w-[36rem]", d && "tablet:w-[36rem] w-[33rem]", e),
      children: [(0, t.jsx)("input", {
        type: "email",
        "data-1p-ignore": !0,
        autoComplete: "email",
        name: "email",
        required: !0,
        placeholder: "Your email",
        onChange: e => u(e.currentTarget.value.length > 0),
        className: (0, r.default)("w-full min-w-0 flex-1", "px-[8px]", "text-[1.6rem] placeholder:text-[1.6rem]", "box-border border-none bg-transparent outline-hidden", "text-text-white placeholder:text-[rgba(255,255,255,0.8)]", "tablet:px-[16px]", "autofill-transparent")
      }), (0, t.jsx)(s.ButtonPrimary, {
        type: "submit",
        className: (0, r.default)("h-full shrink-0 py-[0]"),
        withIcon: !1,
        children: "Get started"
      })]
    });
  }]);
};
