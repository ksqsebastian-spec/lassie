// Recovered from 1-o9j6tu6n4mn.js. Runtime module IDs: 431683.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(464068),
    i = e.i(300778),
    n = e.i(628974);
  let o = [{
    href: "/legal/business-associate-agreement",
    label: "Business Associate Agreement"
  }, {
    href: "/legal/privacy",
    label: "Privacy Policy"
  }, {
    href: "/legal/referral-program",
    label: "Referral Program"
  }, {
    href: "/legal/services-agreement",
    label: "Services Agreement"
  }, {
    href: "/legal/terms-of-service",
    label: "Terms of Service"
  }];
  e.s(["LegalNav", 0, function () {
    let e = (0, i.usePathname)();
    return (0, t.jsx)("nav", {
      children: (0, t.jsx)("ul", {
        children: o.map(i => {
          let o = e === i.href;
          return (0, t.jsx)("li", {
            children: (0, t.jsx)(r.default, {
              href: i.href,
              className: (0, n.cn)("block rounded-[16px] px-[24px] py-[16px] transition-colors duration-150 hover:bg-surface-primary", o ? "bg-surface-primary text-text-primary" : "text-text-secondary"),
              children: i.label
            })
          }, i.href);
        })
      })
    });
  }]);
};
