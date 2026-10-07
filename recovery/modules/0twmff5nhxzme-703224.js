// Recovered from 0twmff5nhxzme.js. Runtime module IDs: 703224.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(570215),
    n = e.i(679978),
    r = e.i(513679);
  let i = (0, r.createContext)({
    isNative: !0,
    open: function (e, t) {
      if (e instanceof HTMLAnchorElement) s(e, t);else if (e.hasAttribute("data-href")) {
        let n = document.createElement("a");
        n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), s(n, t), e.removeChild(n);
      }
    },
    useHref: e => e
  });
  function o() {
    return (0, r.useContext)(i);
  }
  function s(e, r, i = !0) {
    let {
      metaKey: o,
      ctrlKey: u,
      altKey: a,
      shiftKey: l
    } = r;
    (0, n.isFirefox)() && window.event?.type?.startsWith("key") && "_blank" === e.target && ((0, n.isMac)() ? o = !0 : u = !0);
    let c = (0, n.isWebKit)() && (0, n.isMac)() && !(0, n.isIPad)() && 1 ? new KeyboardEvent("keydown", {
      keyIdentifier: "Enter",
      metaKey: o,
      ctrlKey: u,
      altKey: a,
      shiftKey: l
    }) : new MouseEvent("click", {
      metaKey: o,
      ctrlKey: u,
      altKey: a,
      shiftKey: l,
      detail: 1,
      bubbles: !0,
      cancelable: !0
    });
    s.isOpening = i, (0, t.focusWithoutScrolling)(e), e.dispatchEvent(c), s.isOpening = !1;
  }
  s.isOpening = !1, e.s(["handleLinkClick", 0, function (e, t, n, r) {
    var i;
    let o;
    !(!t.isNative && e.currentTarget instanceof HTMLAnchorElement) || !e.currentTarget.href || e.isDefaultPrevented() || (i = e.currentTarget, (o = i.getAttribute("target")) && "_self" !== o || i.origin !== location.origin || i.hasAttribute("download") || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) || !n || (e.preventDefault(), t.open(e.currentTarget, e, n, r));
  }, "openLink", 0, s, "useLinkProps", 0, function (e) {
    let t = o().useHref(e?.href ?? ""),
      n = {};
    if (e) for (let r of ["href", "target", "rel", "download", "ping", "referrerPolicy"]) r in e && (n[r] = "href" === r ? t : e[r]);
    return n;
  }, "useRouter", 0, o]);
};
