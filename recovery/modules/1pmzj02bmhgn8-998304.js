// Recovered from 1pmzj02bmhgn8.js. Runtime module IDs: 998304.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(281889),
    i = e.i(300778),
    r = e.i(513679);
  let o = (0, r.createContext)({
    stories: [],
    featuredStoryId: null,
    activeStoryId: null,
    openStory: () => {},
    closeStory: () => {},
    registerStories: () => {},
    getStories: () => null,
    registerArticle: () => {}
  });
  e.s(["StoriesProvider", 0, function ({
    stories: e,
    featuredStoryId: n = null,
    children: s
  }) {
    let l = (0, i.usePathname)(),
      a = (0, i.useRouter)(),
      u = (0, r.useRef)(null),
      c = (0, r.useRef)(null),
      h = l.startsWith("/stories/") && l.split("/")[2] || null,
      [d, p] = (0, r.useState)(h);
    (0, r.useEffect)(() => {
      p(h), h && a.prefetch("/stories");
    }, [h, a]);
    let f = (0, r.useCallback)(e => {
        u.current = e;
      }, []),
      m = (0, r.useCallback)(() => u.current, []),
      g = (0, r.useCallback)(e => {
        c.current = e;
      }, []),
      v = (0, r.useCallback)(e => {
        p(e);
        let t = `/stories/${e}`;
        window.location.pathname !== t && a.push(t);
      }, [a]),
      w = (0, r.useCallback)(async () => {
        (await c.current?.leave(), "/stories" === window.location.pathname) ? p(null) : a.push("/stories");
      }, [a]);
    return (0, t.jsx)(o, {
      value: {
        stories: e,
        featuredStoryId: n,
        activeStoryId: d,
        openStory: v,
        closeStory: w,
        registerStories: f,
        getStories: m,
        registerArticle: g
      },
      children: s
    });
  }, "useStories", 0, () => (0, r.useContext)(o)]);
};
