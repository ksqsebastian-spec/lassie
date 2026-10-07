// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 808761.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    i = e.i(775859),
    r = e.i(628974),
    o = e.i(998304);
  let n = {
    solid: (0, r.cn)("bg-surface-quaternary text-surface-tertiary transition-colors", "supports-hover:hover:bg-surface-button-secondary supports-hover:hover:text-black-900"),
    frosted: "frosted-interactive text-text-white"
  };
  e.s(["StoryCloseButton", 0, function ({
    variant: e = "solid",
    className: s
  } = {}) {
    let {
      closeStory: l
    } = (0, o.useStories)();
    return (0, t.jsx)("div", {
      className: (0, r.cn)("fixed tablet:top-[3rem] top-0 right-0 tablet:right-[3rem] z-10 flex items-center", "pt-(--chrome-pad) pr-(--chrome-pad)", s),
      children: (0, t.jsx)("button", {
        type: "button",
        "aria-label": "Close story",
        onClick: l,
        className: (0, r.cn)("flex size-12.5 cursor-pointer items-center justify-center rounded-ctas-button px-2 outline-hidden", "border-2 border-transparent focus-visible:border-blue-500 focus-visible:shadow-[0_0_0_3px_rgba(66,181,220,0.30)]", n[e]),
        children: (0, t.jsx)(i.CloseIcon, {
          className: "size-5 -rotate-90"
        })
      })
    });
  }]);
};
