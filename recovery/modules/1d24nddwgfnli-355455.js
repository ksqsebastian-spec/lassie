// Recovered from 1d24nddwgfnli.js. Runtime module IDs: 355455.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(300778),
    i = e.i(513679),
    a = e.i(865670),
    n = e.i(628974);
  e.s(["PaidAdsEmailForm", 0, function ({
    className: e,
    forwardUrl: l = "/qualify/intake",
    placeholder: s,
    submitLabel: o,
    variant: d = "default"
  }) {
    let u = (0, r.useRouter)(),
      c = (0, i.useId)(),
      [m, f] = (0, i.useState)(""),
      p = "compact" === d,
      h = !!o;
    return (0, t.jsx)("form", {
      className: (0, n.cn)("w-full", p ? "max-w-[18rem]" : "max-w-[44.1rem]", e),
      onSubmit: e => {
        if (e.preventDefault(), !m) {
          let e = document.getElementById(c);
          e?.reportValidity();
          return;
        }
        (0, a.submitMarketingEmailForm)({
          email: m,
          forwardUrl: l,
          navigate: e => u.push(e)
        });
      },
      children: (0, t.jsxs)("div", {
        className: (0, n.cn)("flex border border-[rgba(112,131,111,0.2)]", "bg-[rgba(255,255,255,0.8)] backdrop-blur-[12px]", p ? "h-[4.8rem] flex-row items-center gap-[0.4rem] rounded-[1.2rem] p-[0.4rem]" : "h-auto flex-col items-stretch gap-[1rem] rounded-[1.6rem] p-[0.8rem] tablet:h-[6.6rem] tablet:flex-row tablet:items-center"),
        children: [(0, t.jsx)("input", {
          id: c,
          type: "email",
          title: "Please enter a valid email address",
          pattern: a.EMAIL_PATTERN,
          placeholder: s ?? (p ? "Email" : "What's your email?"),
          "data-1p-ignore": "true",
          "data-form-type": "other",
          "data-lpignore": "true",
          autoComplete: "email",
          autoCapitalize: "none",
          inputMode: "email",
          value: m,
          onChange: e => f(e.target.value),
          className: (0, n.cn)("min-w-0 bg-transparent text-text-primary outline-none placeholder:text-text-secondary", p ? "h-full flex-1 px-[1rem] text-[16px] leading-[1.2] tablet:text-[1.3rem]" : "flex-none px-[1.6rem] py-[1.4rem] text-[16px] leading-[1.3] tablet:h-auto tablet:flex-1 tablet:py-0 tablet:text-[1.4rem]")
        }), (0, t.jsx)("button", {
          type: "submit",
          "aria-label": p && !h ? "Get started" : void 0,
          className: (0, n.cn)("flex shrink-0 items-center justify-center", "bg-[radial-gradient(247.11%_182.23%_at_50.13%_152.31%,#FF740A_30%,#FF8C00_85%)]", "text-[1.4rem] leading-[1.3] text-white transition hover:brightness-105", p ? (0, n.cn)("h-[4rem] rounded-[0.9rem] px-[0.8rem] text-[1.3rem]", h ? "w-auto min-w-[10.4rem]" : "w-[5.2rem]") : "w-full rounded-[1.2rem] px-[1.4rem] py-[1.6rem] tablet:h-[5rem] tablet:w-[18rem] tablet:py-0"),
          children: o ?? (p ? "Go" : "Get started")
        })]
      })
    });
  }]);
};
