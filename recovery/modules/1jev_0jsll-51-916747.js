// Recovered from 1jev_0jsll-51.js. Runtime module IDs: 916747.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(865670),
    i = e.i(22493),
    n = e.i(628974),
    a = e.i(300778),
    s = e.i(513679);
  e.i(265121);
  var o = e.i(279206);
  e.s(["EmailForm", 0, function ({
    forwardUrl: e,
    className: l,
    placeholder: u = "Your email",
    autoFocus: d = !1,
    id: c,
    buttonText: f = "Get started",
    hideCustomerButton: m = !1
  }) {
    let p = (0, a.useRouter)(),
      h = (0, i.useIsCustomer)(),
      [g, b] = (0, s.useState)(() => new URL(window.location.href).searchParams.get("email") ?? ""),
      y = (0, s.useMemo)(() => g && null !== g.match(r.EMAIL_PATTERN), [g]),
      v = (0, s.useId)(),
      w = c ?? v;
    return h && !m ? (0, t.jsx)(o.ButtonPrimary, {
      theme: "secondary",
      as: "a",
      href: "https://app.lassie.ai",
      children: "Go to dashboard"
    }) : (0, t.jsxs)("form", {
      className: (0, n.cn)("group/form flex flex-col gap-[0.8rem]", l),
      onSubmit: t => {
        if (t.preventDefault(), !g) {
          let e = document.getElementById(w);
          if (e) {
            e.required = !0, e.reportValidity();
            let t = () => {
              e.required = !1, e.removeEventListener("focus", t), e.removeEventListener("blur", t), e.removeEventListener("input", t);
            };
            e.addEventListener("focus", t), e.addEventListener("blur", t), e.addEventListener("input", t);
          }
          return;
        }
        (0, r.submitMarketingEmailForm)({
          email: g,
          forwardUrl: e,
          navigate: e => p.push(e)
        });
      },
      children: [(0, t.jsxs)("div", {
        className: (0, n.cn)("relative flex flex-row items-center justify-center overflow-hidden rounded-[1.6rem] border-2 border-transparent bg-surface-primary lg:justify-start h-[5.6rem] py-[0.6rem] pr-[0.6rem] gap-[1.6rem] has-[:focus-visible]:border-blue-500 has-[:focus-visible]:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]", "has-[button:focus-visible]:border-transparent has-[button:focus-visible]:shadow-none"),
        children: [(0, t.jsx)("input", {
          id: w,
          type: "email",
          "data-1p-ignore": !0,
          title: "Please enter a valid email address",
          pattern: r.EMAIL_PATTERN,
          placeholder: u,
          autoComplete: "email",
          className: "h-full w-full flex-1 border-none bg-transparent pl-[1.6rem] font-body text-[16px] leading-[130%] text-text-primary outline-hidden placeholder:text-text-secondary group-hover/form:placeholder:text-text-primary tablet:text-[1.6rem] desktop:text-[1.7rem]",
          value: g,
          onChange: e => b(e.target.value),
          autoFocus: d
        }), (0, t.jsx)("label", {
          htmlFor: w,
          className: "sr-only",
          children: "Email"
        }), (0, t.jsx)("div", {
          className: "flex flex-shrink-0 items-center justify-center",
          children: (0, t.jsx)(o.ButtonPrimary, {
            theme: "secondary",
            type: "submit",
            className: "hidden sm:flex",
            disabled: !y,
            withIcon: !1,
            children: f
          })
        })]
      }), (0, t.jsx)(o.ButtonPrimary, {
        theme: "secondary",
        type: "submit",
        className: "flex sm:hidden justify-center",
        disabled: !y,
        withIcon: !1,
        children: f
      })]
    });
  }]);
};
