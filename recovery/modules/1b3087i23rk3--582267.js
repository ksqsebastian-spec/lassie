// Recovered from 1b3087i23rk3-.js. Runtime module IDs: 582267.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    r = e.i(809393),
    n = e.i(607198),
    a = e.i(513679),
    i = e.i(113329),
    s = e.i(509848),
    o = e.i(386465),
    l = e.i(999380),
    d = e.i(900907),
    u = e.i(514415),
    c = e.i(454881),
    f = e.i(345078),
    p = e.i(755118),
    m = e.i(120306),
    h = e.i(526296),
    g = e.i(691480),
    b = e.i(622030);
  let w = (0, a.createContext)(null),
    v = (0, a.forwardRef)(function (e, t) {
      let r = function (e) {
          let {
              allowsMultipleExpanded: t = !1,
              isDisabled: r = !1
            } = e,
            [n, i] = (0, p.useControlledState)((0, a.useMemo)(() => e.expandedKeys ? new Set(e.expandedKeys) : void 0, [e.expandedKeys]), (0, a.useMemo)(() => e.defaultExpandedKeys ? new Set(e.defaultExpandedKeys) : new Set(), [e.defaultExpandedKeys]), e.onExpandedChange);
          return (0, a.useEffect)(() => {
            if (!t && n.size > 1) {
              let e = n.values().next().value;
              null != e && i(new Set([e]));
            }
          }), {
            allowsMultipleExpanded: t,
            isDisabled: r,
            expandedKeys: n,
            setExpandedKeys: i,
            toggleKey(e) {
              let r;
              t ? (r = new Set(n)).has(e) ? r.delete(e) : r.add(e) : r = new Set(n.has(e) ? [] : [e]), i(r);
            }
          };
        }(e),
        n = (0, o.useRenderProps)({
          ...e,
          defaultClassName: "react-aria-DisclosureGroup",
          values: {
            isDisabled: r.isDisabled,
            state: r
          }
        }),
        i = (0, m.filterDOMProps)(e, {
          global: !0
        });
      return a.default.createElement(o.dom.div, {
        ...i,
        ...n,
        ref: t,
        "data-disabled": e.isDisabled || void 0
      }, a.default.createElement(w.Provider, {
        value: r
      }, n.children));
    }),
    x = (0, a.createContext)(null),
    y = (0, a.createContext)(null),
    S = (0, a.createContext)(null),
    E = (0, a.forwardRef)(function (e, t) {
      [e, t] = (0, o.useContextProps)(e, t, x);
      let r = (0, a.useContext)(w),
        {
          id: n,
          ...i
        } = e,
        g = (0, d.useId)();
      n ||= g;
      let v = r ? r.expandedKeys.has(n) : e.isExpanded,
        E = function (e) {
          let [t, r] = (0, p.useControlledState)(e.isExpanded, e.defaultExpanded || !1, e.onExpandedChange),
            n = (0, a.useCallback)(() => {
              r(!0);
            }, [r]),
            i = (0, a.useCallback)(() => {
              r(!1);
            }, [r]),
            s = (0, a.useCallback)(() => {
              r(!t);
            }, [r, t]);
          return {
            isExpanded: t,
            setExpanded: r,
            expand: n,
            collapse: i,
            toggle: s
          };
        }({
          ...e,
          isExpanded: v,
          onExpandedChange(t) {
            r && r.toggleKey(n), e.onExpandedChange?.(t);
          }
        }),
        P = a.default.useRef(null),
        R = e.isDisabled || r?.isDisabled || !1,
        {
          buttonProps: j,
          panelProps: k
        } = function (e, t, r) {
          let {
              isDisabled: n
            } = e,
            i = (0, d.useId)(),
            s = (0, d.useId)(),
            o = (0, u.useIsSSR)(),
            p = (0, a.useRef)(null),
            m = (0, a.useCallback)(() => {
              p.current = requestAnimationFrame(() => {
                r.current && r.current.setAttribute("hidden", "until-found");
              }), (0, f.flushSync)(() => {
                t.toggle();
              });
            }, [r, t]);
          (0, l.useEvent)(r, "beforematch", m);
          let h = (0, a.useRef)(null);
          return (0, c.useLayoutEffect)(() => {
            if (p.current && cancelAnimationFrame(p.current), r.current && !o) {
              let e = r.current;
              null == h.current || "function" != typeof e.getAnimations ? t.isExpanded ? (e.removeAttribute("hidden"), e.style.setProperty("--disclosure-panel-width", "auto"), e.style.setProperty("--disclosure-panel-height", "auto")) : (e.setAttribute("hidden", "until-found"), e.style.setProperty("--disclosure-panel-width", "0px"), e.style.setProperty("--disclosure-panel-height", "0px")) : t.isExpanded !== h.current && (t.isExpanded ? (e.removeAttribute("hidden"), e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"), e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"), Promise.all(e.getAnimations().map(e => e.finished)).then(() => {
                e.style.setProperty("--disclosure-panel-width", "auto"), e.style.setProperty("--disclosure-panel-height", "auto");
              }).catch(() => {})) : (e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"), e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"), window.getComputedStyle(e).height, e.style.setProperty("--disclosure-panel-width", "0px"), e.style.setProperty("--disclosure-panel-height", "0px"), Promise.all(e.getAnimations().map(e => e.finished)).then(() => e.setAttribute("hidden", "until-found")).catch(() => {}))), h.current = t.isExpanded;
            }
          }, [n, r, t.isExpanded, o]), (0, a.useEffect)(() => () => {
            p.current && cancelAnimationFrame(p.current);
          }, []), {
            buttonProps: {
              id: i,
              "aria-expanded": t.isExpanded,
              "aria-controls": s,
              onPress: e => {
                n || "keyboard" === e.pointerType || t.toggle();
              },
              isDisabled: n,
              onPressStart(e) {
                "keyboard" !== e.pointerType || n || t.toggle();
              }
            },
            panelProps: {
              id: s,
              role: "group",
              "aria-labelledby": i,
              "aria-hidden": !t.isExpanded,
              hidden: o ? !t.isExpanded : void 0
            }
          };
        }({
          ...e,
          isExpanded: v,
          isDisabled: R
        }, E, P),
        {
          isFocusVisible: T,
          focusProps: A
        } = (0, b.useFocusRing)({
          within: !0
        }),
        C = (0, o.useRenderProps)({
          ...e,
          id: void 0,
          defaultClassName: "react-aria-Disclosure",
          values: {
            isExpanded: E.isExpanded,
            isDisabled: R,
            isFocusVisibleWithin: T,
            state: E
          }
        }),
        N = (0, m.filterDOMProps)(i, {
          global: !0
        });
      return a.default.createElement(o.Provider, {
        values: [[s.ButtonContext, {
          slots: {
            [o.DEFAULT_SLOT]: {},
            trigger: j
          }
        }], [S, {
          panelProps: k,
          panelRef: P
        }], [y, E]]
      }, a.default.createElement(o.dom.div, {
        ...(0, h.mergeProps)(N, C, A),
        ref: t,
        "data-expanded": E.isExpanded || void 0,
        "data-disabled": R || void 0,
        "data-focus-visible-within": T || void 0
      }, C.children));
    }),
    P = (0, a.forwardRef)(function (e, t) {
      let {
          role: r = "group"
        } = e,
        {
          panelProps: n,
          panelRef: i
        } = (0, a.useContext)(S),
        {
          isFocusVisible: l,
          focusProps: d
        } = (0, b.useFocusRing)({
          within: !0
        }),
        u = (0, o.useRenderProps)({
          ...e,
          defaultClassName: "react-aria-DisclosurePanel",
          values: {
            isFocusVisibleWithin: l
          }
        }),
        c = (0, m.filterDOMProps)(e, {
          global: !0,
          labelable: !0
        });
      return a.default.createElement(o.dom.div, {
        ...(0, h.mergeProps)(c, u, n, d),
        ref: (0, g.mergeRefs)(t, i),
        role: r,
        "data-focus-visible-within": l || void 0
      }, a.default.createElement(o.Provider, {
        values: [[s.ButtonContext, null]]
      }, e.children));
    });
  function R({
    items: e,
    className: n
  }) {
    let i = (0, a.useRef)(null),
      [s, o] = (0, a.useState)(new Set([])),
      [l, d] = (0, a.useState)(0);
    return (0, a.useLayoutEffect)(() => {
      i.current && d(i.current.scrollHeight);
    }, []), (0, t.jsx)(v, {
      ref: i,
      expandedKeys: s,
      onExpandedChange: o,
      className: (0, r.default)("isolate", n),
      style: {
        minHeight: l + 80
      },
      children: e.map(e => (0, t.jsx)(j, {
        id: e.question,
        question: e.question,
        answer: e.answer,
        onToggle: () => {
          var t;
          return t = e.question, void o(e => {
            let r = new Set(e);
            return r.has(t) ? (r.delete(t), r) : new Set([t]);
          });
        }
      }, e.question))
    });
  }
  let j = ({
    question: e,
    answer: n,
    id: a,
    onToggle: o
  }) => {
    let {
      pressProps: l
    } = (0, i.usePress)({
      onPress: e => {
        e.target.closest("button") || o?.();
      }
    });
    return (0, t.jsxs)(E, {
      className: (0, r.default)("group relative flex w-full cursor-pointer items-start justify-between gap-[3.2rem]", "z-0 rounded-[16px] bg-surface-primary p-[1.6rem] tablet:p-[2.4rem]", "border-2 border-transparent data-[focus-visible-within=true]:z-10 data-[focus-visible-within=true]:border-blue-500 data-[focus-visible-within=true]:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]"),
      ...l,
      id: a,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsx)(s.Button, {
          slot: "trigger",
          className: (0, r.default)("relative z-[10] flex min-h-[3rem] w-full items-center justify-between desktop:gap-[3.2rem] gap-[1.6rem] outline-hidden", "border-[none] bg-none", "text-left text-body-md"),
          children: e
        }), (0, t.jsx)(P, {
          className: (0, r.default)("h-[var(--disclosure-panel-height)] overflow-clip", "transition-[height] duration-200 motion-reduce:transition-none"),
          children: (0, t.jsx)("div", {
            className: "desktop:pt-[0.8rem] pt-[0.4rem]",
            children: (0, t.jsx)("span", {
              className: "text-body-sm text-text-secondary",
              children: n
            })
          })
        })]
      }), (0, t.jsx)("div", {
        className: (0, r.default)("rounded-[1.8rem] transition-colors duration-200 ease-out", "group-hover:bg-surface-secondary", "group-data-[expanded=true]:bg-surface-secondary", "group-data-[focus-visible-within=true]:bg-background-tertiary", "shrink-0"),
        "aria-hidden": "true",
        children: (0, t.jsx)("svg", {
          viewBox: "0 0 42 34",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-[3.2rem] w-[4.2rem] rotate-180 transition-transform duration-200 ease-out group-data-[expanded]:rotate-0",
          role: "img",
          "aria-label": "Chevron Icon",
          children: (0, t.jsx)("path", {
            d: "M13.9424 19.759C16.5148 18.269 18.6686 16.1521 20.2028 13.6058L20.3714 13.3255C20.5042 13.1051 20.7433 12.9706 21.0007 12.9706C21.258 12.9706 21.4964 13.1052 21.6293 13.3255L21.7979 13.6058C23.332 16.1521 25.486 18.269 28.0583 19.759L27.3225 21.0294C24.7831 19.5585 22.6221 17.5224 21.0007 15.0855C19.3792 17.5224 17.2184 19.5585 14.6789 21.0294L13.9424 19.759Z",
            fill: "currentColor"
          })
        })
      })]
    });
  };
  e.i(428044);
  var k = e.i(276522);
  e.s(["FAQ", 0, function ({
    background: e
  }) {
    let {
      setBgTheme: i
    } = (0, k.useNav)();
    return (0, a.useEffect)(() => (n.ScrollTrigger.create({
      trigger: "#faq",
      start: "top top",
      end: "bottom",
      invalidateOnRefresh: !0,
      onToggle: e => {
        e.isActive && i("light");
      }
    }), () => {}), []), (0, t.jsxs)("section", {
      id: "faq",
      className: (0, r.default)("flex flex-col justify-center items-center", "w-screen px-[1.6rem] pt-[16rem] pb-[10rem] desktop:pb-[16rem]", "bg-background-primary", "tablet:px-0 desktop:pb-[16rem]"),
      children: [(0, t.jsx)("h2", {
        className: (0, r.default)("text-heading-lg !leading-none", "mb-[3.2rem]"),
        children: "FAQ"
      }), (0, t.jsx)(R, {
        className: (0, r.default)("w-full max-w-[68rem] tablet:max-w-none tablet:w-1/2 desktop:w-[30%] desktop:min-w-[54rem]"),
        items: [{
          question: "What can Lassie help me with?",
          answer: "Lassie automates the administrative work that keeps your practice moving, from enrollments and posting to reconciliation, appeals, reporting, and follow-up work."
        }, {
          question: "How do I get started?",
          answer: "Book a demo, and we’ll take a quick look at how your office runs today, then show you where Lassie can help."
        }, {
          question: "Do I need to change my existing systems?",
          answer: "No. Lassie is designed to work with the way your practice already runs. On the first call, we’ll confirm your current setup and what Lassie can automate."
        }, {
          question: "What does my team still handle?",
          answer: "Your team stays in control. Lassie takes on repetitive admin work and flags exceptions when something needs review."
        }, {
          question: "How long does onboarding take?",
          answer: "If you’re already on EFTs, we can usually get you up and running within one to two weeks. If your office still receives paper checks, full auto-posting setup can take up to about eight weeks."
        }, {
          question: "What does Lassie cost?",
          answer: "Lassie gets paid when it does work for your office. Once we understand your practice’s volume and workflows, we’ll show you what pricing would look like."
        }, {
          question: "Is Lassie secure?",
          answer: "Yes. Lassie is built for healthcare practices, enters into HIPAA business associate agreements, and follows standard healthcare data-handling expectations. We can share security details during the demo."
        }]
      })]
    });
  }], 582267);
};
