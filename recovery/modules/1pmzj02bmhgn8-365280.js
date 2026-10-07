// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 365280.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  let t = new Set(),
    i = {
      anchor: null,
      scrub: 0,
      playerVisible: !1,
      get pageVisible() {
        let e = i.anchor;
        if (!e) return !0;
        return e.width < window.innerWidth || e.height < window.innerHeight;
      },
      setScrub(e) {
        e !== i.scrub && (i.scrub = e, t.forEach(t => {
          t(e);
        }));
      },
      onScrub: e => (t.add(e), e(i.scrub), () => {
        t.delete(e);
      }),
      reset() {
        i.anchor = null, i.playerVisible = !1, i.setScrub(0);
      }
    };
  e.s(["storiesStore", 0, i]);
};
