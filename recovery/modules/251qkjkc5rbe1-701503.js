// Recovered from 251qkjkc5rbe1.js. Runtime module IDs: 701503.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t,
    r = e.i(281889),
    n = e.i(513679);
  function a(e) {
    return "function" == typeof e;
  }
  function i(e) {
    return null === e;
  }
  function l(e) {
    return null !== e && "object" == typeof e;
  }
  function s(e, t) {
    if (a(e)) return e(t);
    null != e && (e.current = t);
  }
  function o(...e) {
    let t = e.flat();
    return e => {
      let r = t.map(t => s(t, e));
      if (r.some(a)) return () => {
        for (let e = 0; e < r.length; e++) {
          let n = r[e];
          a(n) ? n() : s(t[e], null);
        }
      };
    };
  }
  function u(...e) {
    return (0, n.useCallback)(o(...e), [...e]);
  }
  let c = Object.prototype.hasOwnProperty;
  function d(e, t) {
    if (Object.is(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let n of r) if (!c.call(t, n) || !Object.is(e[n], t[n])) return !1;
    return !0;
  }
  function p(e, t, r, a = d) {
    let i = (0, n.useRef)(void 0),
      l = () => {
        let e = r(t());
        return void 0 !== i.current && a(i.current, e) ? i.current : (i.current = e, e);
      };
    return (0, n.useSyncExternalStore)(e, l, l);
  }
  function f(e) {
    return e;
  }
  function m() {}
  let h = () => m;
  function g(e, t, r) {
    return p(t ? t => e.subscribe(t) : h, t ? () => e.state : () => e, t ?? f, r);
  }
  let b = (0, n.createContext)(null);
  function v({
    value: e,
    children: t
  }) {
    return (0, r.jsx)(b.Provider, {
      value: e,
      children: t
    });
  }
  function y() {
    let e = (0, n.useContext)(b);
    if (!e) throw Error("usePlayerContext must be used within a Player Provider");
    return e;
  }
  function w(e) {
    let {
      store: t
    } = y();
    return g(t, e);
  }
  let x = (0, n.forwardRef)(function ({
    children: e,
    tabIndex: t = 0,
    ...a
  }, i) {
    let l = (0, n.useContext)(b)?.setContainer,
      s = (0, n.useRef)(null),
      o = u(i, s);
    return (0, n.useEffect)(() => (l?.(s.current), () => l?.(null)), [l]), (0, r.jsx)("div", {
      ref: o,
      tabIndex: t,
      ...a,
      onPointerUp: e => {
        a.onPointerUp?.(e);
        let t = s.current;
        t && (t.contains(document.activeElement) && document.activeElement !== document.body || t.focus({
          preventScroll: !0
        }));
      },
      children: e
    });
  });
  function P(e) {
    let t = (0, n.useRef)(e);
    return t.current = e, t;
  }
  function k(e, t, r) {
    let a = (0, n.useRef)(null),
      i = P(t),
      l = P(r);
    (0, n.useEffect)(() => (null !== a.current ? (clearTimeout(a.current), a.current = null) : i.current?.(), () => {
      a.current = setTimeout(() => {
        l.current?.(), e.destroy();
      }, 0);
    }), [e]);
  }
  var S = class {
      #e = new AbortController();
      #t = new Map();
      get base() {
        return this.#e.signal;
      }
      clear() {
        for (let e of this.#t.values()) e.abort();
        this.#t.clear();
      }
      reset() {
        this.clear(), this.#e.abort(), this.#e = new AbortController();
      }
      supersede(e) {
        this.#t.get(e)?.abort();
        let t = new AbortController();
        this.#t.set(e, t);
        var r = [this.#e.signal, t.signal];
        if ("any" in AbortSignal) return AbortSignal.any(r);
        let n = new AbortController();
        for (let e of r) {
          if (e.aborted) {
            n.abort(e.reason);
            break;
          }
          e.addEventListener("abort", () => n.abort(e.reason), {
            signal: n.signal
          });
        }
        return n.signal;
      }
    },
    C = class extends Error {
      code;
      cause;
      constructor(e, t) {
        super(t?.message ?? e), this.name = "StoreError", this.code = e, this.cause = t?.cause;
      }
    };
  function A() {
    throw new C("NO_TARGET");
  }
  function M() {
    throw new C("DESTROYED");
  }
  let j = !1,
    E = new Set();
  function T() {
    for (let e of (j = !1, E)) e.flush();
    E.clear();
  }
  let L = Object.prototype.hasOwnProperty;
  var R = class {
    #r;
    #n = new Set();
    #a = !1;
    constructor(e) {
      this.#r = Object.freeze({
        ...e
      });
    }
    get current() {
      return this.#r;
    }
    patch(e) {
      let t = {
          ...this.#r
        },
        r = !1;
      for (let n in e) {
        if (!L.call(e, n)) continue;
        let a = e[n];
        Object.is(this.#r[n], a) || (t[n] = a, r = !0);
      }
      r && (this.#r = Object.freeze(t), this.#i());
    }
    subscribe(e, t) {
      let r = t?.signal;
      if (r?.aborted) return m;
      if (this.#n.add(e), !r) return () => this.#n.delete(e);
      let n = () => this.#n.delete(e);
      return r.addEventListener("abort", n, {
        once: !0
      }), () => {
        r.removeEventListener("abort", n), this.#n.delete(e);
      };
    }
    flush() {
      if (this.#a) for (let e of (this.#a = !1, this.#n)) e();
    }
    #i() {
      this.#a = !0, E.add(this), j || (j = !0, queueMicrotask(T));
    }
  };
  function N(e) {
    return new R(e);
  }
  let V = Symbol.for("@videojs/store");
  function F(e) {
    return l(e) && "paused" in e && "ended" in e && a(e.pause);
  }
  function D(e) {
    return l(e) && "currentTime" in e && "duration" in e && "seeking" in e;
  }
  function $(e) {
    return l(e) && "src" in e && "currentSrc" in e && "readyState" in e && a(e.load);
  }
  function O(e) {
    return l(e) && "volume" in e && "muted" in e;
  }
  function z(e) {
    return l(e) && "playbackRate" in e;
  }
  function B(e) {
    return l(e) && "buffered" in e && "seekable" in e;
  }
  function H(e) {
    return l(e) && "textTracks" in e;
  }
  function I(e) {
    return l(e) && "remote" in e && l(e.remote);
  }
  function q(e, t, r, n) {
    return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
  }
  function _(e) {
    let t = [];
    for (let r = 0; r < e.length; r++) t.push([e.start(r), e.end(r)]);
    return t;
  }
  let U = {
    name: "buffer",
    state: () => ({
      buffered: [],
      seekable: []
    }),
    attach({
      target: e,
      signal: t,
      set: r
    }) {
      let {
        media: n
      } = e;
      if (!B(n)) return;
      let a = () => r({
        buffered: _(n.buffered),
        seekable: _(n.seekable)
      });
      a(), q(n, "progress", a, {
        signal: t
      }), q(n, "emptied", a, {
        signal: t
      });
    }
  };
  function W(e, t, r) {
    return new Promise((n, a) => {
      let i = () => {
        a(r?.signal?.reason ?? "Aborted");
      };
      r?.signal?.aborted ? i() : (r?.signal?.addEventListener("abort", i, {
        once: !0
      }), e.addEventListener(t, e => {
        r?.signal?.removeEventListener("abort", i), n(e);
      }, {
        ...r,
        once: !0
      }));
    });
  }
  ["textarea", "select", "input:not([type])", ...["text", "search", "url", "tel", "email", "password", "number"].map(e => `input[type="${e}"]`), '[contenteditable]:not([contenteditable="false"])'].join(",");
  let K = new WeakMap();
  function Z(e) {
    if (l(e.remote) && "state" in e.remote && "prompt" in e.remote) return e.remote;
  }
  function G(e) {
    return Z(e)?.state === "connected";
  }
  async function X(e) {
    let t = Z(e);
    if (!t) throw new DOMException("Remote playback not supported", "NotSupportedError");
    return t.prompt();
  }
  let Y = {
      name: "controls",
      state: ({
        get: e,
        set: t
      }) => ({
        userActive: !0,
        controlsVisible: !0,
        toggleControls() {
          let r = !e().userActive;
          return t({
            userActive: r,
            controlsVisible: r
          }), r;
        }
      }),
      attach({
        target: e,
        signal: t,
        get: r,
        set: n
      }) {
        let a,
          {
            media: l,
            container: s
          } = e;
        if (!F(l) || i(s)) return;
        let o = e => e || l.paused || G(l) || Z(l)?.state === "connecting";
        function u() {
          clearTimeout(a), a = void 0;
        }
        function c() {
          u(), a = setTimeout(p, 2e3);
        }
        function d() {
          r().userActive || n({
            userActive: !0,
            controlsVisible: !0
          }), c();
        }
        function p() {
          u(), n({
            userActive: !1,
            controlsVisible: o(!1)
          });
        }
        n({
          toggleControls: () => (r().controlsVisible ? p() : d(), r().controlsVisible)
        });
        let f = 0,
          m = () => {
            let {
              userActive: e
            } = r();
            n({
              controlsVisible: o(e)
            }), !l.paused && e && c();
          };
        if (q(s, "pointermove", d, {
          signal: t
        }), q(s, "pointerdown", function () {
          f = Date.now();
        }, {
          signal: t
        }), q(s, "pointerup", function (e) {
          if ("touch" === e.pointerType && Date.now() - f < 250) {
            if (K.get(s)?.bindings.some(e => "tap" === e.type && "toggleControls" === e.action && (!e.pointer || "touch" === e.pointer))) return;
            let t = [l, s].includes(e.target);
            r().controlsVisible && t ? p() : d();
          } else d();
        }, {
          signal: t
        }), q(s, "keyup", d, {
          signal: t
        }), q(s, "focusin", d, {
          signal: t
        }), q(s, "mouseleave", p, {
          signal: t
        }), q(l, "play", m, {
          signal: t
        }), q(l, "pause", m, {
          signal: t
        }), q(l, "ended", m, {
          signal: t
        }), I(l)) {
          let e = () => {
            let {
              userActive: e
            } = r();
            n({
              controlsVisible: o(e)
            });
          };
          q(l.remote, "connect", e, {
            signal: t
          }), q(l.remote, "connecting", e, {
            signal: t
          }), q(l.remote, "disconnect", e, {
            signal: t
          });
        }
        t.addEventListener("abort", u, {
          once: !0
        }), c();
      }
    },
    J = {
      name: "error",
      state: ({
        set: e
      }) => ({
        error: null,
        dismissError() {
          e({
            error: null
          });
        }
      }),
      attach({
        target: e,
        signal: t,
        set: r
      }) {
        let {
          media: n
        } = e;
        l(n) && "error" in n && (q(n, "error", () => r({
          error: n.error
        }), {
          signal: t
        }), q(n, "emptied", () => r({
          error: null
        }), {
          signal: t
        }));
      }
    };
  function Q(e) {
    if (!(e instanceof Element)) return !1;
    try {
      return e.matches(":fullscreen");
    } catch {
      return !1;
    }
  }
  function ee(e, t) {
    let r;
    if ("fullscreen" === t.webkitPresentationMode) return !0;
    let n = (r = document).fullscreenElement ?? r.webkitFullscreenElement ?? null;
    return !!(n && (n === e || n === t) || Q(e) || Q(t)) || (t.isFullscreen ?? !1);
  }
  async function et(e, t) {
    let r = document;
    if (e && (r.fullscreenEnabled || r.webkitFullscreenEnabled)) {
      if (a(e.requestFullscreen)) return e.requestFullscreen();
      if (a(e.webkitRequestFullscreen)) return e.webkitRequestFullscreen();
    }
    return a(t.webkitSetPresentationMode) ? void t.webkitSetPresentationMode("fullscreen") : a(t.requestFullscreen) ? t.requestFullscreen() : void 0;
  }
  async function er(e) {
    let t = document;
    return "fullscreen" === e.webkitPresentationMode && a(e.webkitSetPresentationMode) ? void e.webkitSetPresentationMode("inline") : a(t.exitFullscreen) ? t.exitFullscreen() : a(t.webkitExitFullscreen) ? t.webkitExitFullscreen() : a(e.exitFullscreen) ? e.exitFullscreen() : void 0;
  }
  function en(e) {
    return "picture-in-picture" === e.webkitPresentationMode || document.pictureInPictureElement === e || (e.isPictureInPicture ?? !1);
  }
  async function ea(e) {
    return a(e.webkitSetPresentationMode) ? void e.webkitSetPresentationMode("picture-in-picture") : a(e.requestPictureInPicture) ? e.requestPictureInPicture() : void 0;
  }
  async function ei(e) {
    return "picture-in-picture" === e.webkitPresentationMode && a(e.webkitSetPresentationMode) ? void e.webkitSetPresentationMode("inline") : a(document.exitPictureInPicture) ? document.exitPictureInPicture() : a(e.exitPictureInPicture) ? e.exitPictureInPicture() : void 0;
  }
  let el = {
      name: "fullscreen",
      state: ({
        target: e
      }) => ({
        fullscreen: !1,
        fullscreenAvailability: "unavailable",
        async requestFullscreen() {
          let {
            media: t,
            container: r
          } = e();
          return en(t) && (await ei(t)), et(r, t);
        },
        async exitFullscreen() {
          let {
            media: t
          } = e();
          return er(t);
        },
        async toggleFullscreen() {
          let {
            media: t,
            container: r
          } = e();
          return ee(r, t) ? er(t) : (en(t) && (await ei(t)), et(r, t));
        }
      }),
      attach({
        target: e,
        signal: t,
        set: r
      }) {
        let n,
          {
            media: i,
            container: l
          } = e;
        r({
          fullscreenAvailability: (n = document).fullscreenEnabled || n.webkitFullscreenEnabled || a(document.createElement("video").webkitSetPresentationMode) ? "available" : "unsupported"
        });
        let s = () => r({
          fullscreen: ee(l, i)
        });
        s(), q(document, "fullscreenchange", s, {
          signal: t
        }), q(document, "webkitfullscreenchange", s, {
          signal: t
        }), "webkitPresentationMode" in i && q(i, "webkitpresentationmodechanged", s, {
          signal: t
        });
      }
    },
    es = {
      name: "pip",
      state: ({
        target: e
      }) => ({
        pip: !1,
        pipAvailability: "unavailable",
        async requestPictureInPicture() {
          let {
            media: t,
            container: r
          } = e();
          return ee(r, t) && (await er(t)), ea(t);
        },
        async exitPictureInPicture() {
          let {
            media: t
          } = e();
          return ei(t);
        },
        async togglePictureInPicture() {
          let {
            media: t,
            container: r
          } = e();
          return en(t) ? ei(t) : (ee(r, t) && (await er(t)), ea(t));
        }
      }),
      attach({
        target: e,
        signal: t,
        set: r
      }) {
        let {
          media: n
        } = e;
        r({
          pipAvailability: !function () {
            if (document.pictureInPictureEnabled) {
              let e = /.*Version\/.*Safari\/.*/.test(navigator.userAgent),
                t = "function" == typeof matchMedia && matchMedia("(display-mode: standalone)").matches;
              return !e || !t;
            }
            return a(document.createElement("video").webkitSetPresentationMode);
          }() ? "unsupported" : "available"
        });
        let i = () => r({
          pip: en(n)
        });
        i(), q(n, "enterpictureinpicture", i, {
          signal: t
        }), q(n, "leavepictureinpicture", i, {
          signal: t
        }), "webkitPresentationMode" in n && q(n, "webkitpresentationmodechanged", i, {
          signal: t
        });
      }
    },
    eo = {
      name: "playback",
      state: ({
        target: e
      }) => ({
        paused: !0,
        ended: !1,
        started: !1,
        waiting: !1,
        play: () => e().media.play(),
        pause() {
          let {
            media: t
          } = e();
          F(t) && t.pause();
        },
        togglePaused() {
          let t = e().media;
          return !!F(t) && (t.paused ? (t.play(), !0) : (t.pause(), !1));
        }
      }),
      attach({
        target: e,
        signal: t,
        set: r
      }) {
        let {
          media: n
        } = e;
        if (!F(n) || !D(n) || !$(n)) return;
        let a = () => r({
          paused: n.paused,
          ended: n.ended,
          started: !n.paused || n.currentTime > 0,
          waiting: n.readyState < HTMLMediaElement.HAVE_FUTURE_DATA && !n.paused
        });
        a(), q(n, "emptied", a, {
          signal: t
        }), q(n, "play", a, {
          signal: t
        }), q(n, "pause", a, {
          signal: t
        }), q(n, "ended", a, {
          signal: t
        }), q(n, "playing", a, {
          signal: t
        }), q(n, "waiting", a, {
          signal: t
        }), q(n, "seeked", a, {
          signal: t
        });
      }
    },
    eu = [.2, .5, .7, 1, 1.2, 1.5, 1.7, 2],
    ec = {
      name: "playbackRate",
      state: ({
        target: e
      }) => ({
        playbackRates: eu,
        playbackRate: 1,
        setPlaybackRate(t) {
          let {
            media: r
          } = e();
          z(r) && (r.playbackRate = t);
        }
      }),
      attach({
        target: e,
        signal: t,
        set: r
      }) {
        let {
          media: n
        } = e;
        if (!z(n)) return;
        let a = () => r({
          playbackRate: n.playbackRate
        });
        a(), q(n, "ratechange", a, {
          signal: t
        });
      }
    },
    ed = {
      name: "remotePlayback",
      state: ({
        target: e
      }) => ({
        remotePlaybackState: "disconnected",
        remotePlaybackAvailability: "unsupported",
        async toggleRemotePlayback() {
          let {
            media: t,
            container: r
          } = e();
          return G(t) || ee(r, t) && (await er(t)), X(t);
        }
      }),
      attach({
        target: e,
        signal: t,
        set: r
      }) {
        let {
          media: n
        } = e;
        if (!I(n)) return;
        let a = () => r({
          remotePlaybackState: n.remote.state
        });
        a(), q(n.remote, "connect", a, {
          signal: t
        }), q(n.remote, "connecting", a, {
          signal: t
        }), q(n.remote, "disconnect", a, {
          signal: t
        }), n.remote.watchAvailability(e => {
          r({
            remotePlaybackAvailability: e ? "available" : "unavailable"
          });
        }).catch(() => {
          r({
            remotePlaybackAvailability: "unsupported"
          });
        }), t.addEventListener("abort", () => {
          n.remote?.cancelWatchAvailability().catch(() => {});
        });
      }
    },
    ep = {
      name: "source",
      state: ({
        target: e,
        signals: t
      }) => ({
        source: null,
        canPlay: !1,
        loadSource(r) {
          t.clear();
          let {
            media: n
          } = e();
          return $(n) && (n.src = r, n.load()), r;
        }
      }),
      attach({
        target: e,
        signal: t,
        set: r
      }) {
        let {
          media: n
        } = e;
        if (!$(n)) return;
        let a = () => r({
          source: n.currentSrc || n.src || null,
          canPlay: n.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA
        });
        a(), q(n, "canplay", a, {
          signal: t
        }), q(n, "canplaythrough", a, {
          signal: t
        }), q(n, "loadstart", a, {
          signal: t
        }), q(n, "emptied", a, {
          signal: t
        });
      }
    };
  function ef(e, t) {
    return e.kind > t.kind ? 1 : e.kind < t.kind ? -1 : 0;
  }
  let em = {
      name: "textTrack",
      state: ({
        target: e
      }) => ({
        chaptersCues: [],
        thumbnailCues: [],
        thumbnailTrackSrc: null,
        textTrackList: [],
        subtitlesShowing: !1,
        toggleSubtitles(t) {
          var r;
          let {
            media: n
          } = e();
          if (!H(n)) return !1;
          let a = (r = e => "subtitles" === e.kind || "captions" === e.kind, n.textTracks ? Array.from(n.textTracks).filter(r).sort(ef) : []);
          if (!a.length) return !1;
          let i = a.some(e => "showing" === e.mode),
            l = t ?? !i;
          for (let e of a) e.mode = l ? "showing" : "disabled";
          return l;
        }
      }),
      attach({
        target: e,
        signal: t,
        set: r
      }) {
        let {
          media: n
        } = e;
        if (!H(n)) return;
        let i = null,
          s = () => {
            i?.abort(), i = new AbortController();
            let e = null,
              t = null,
              o = [],
              u = !1;
            for (let r = 0; r < n.textTracks.length; r++) {
              let a = n.textTracks[r];
              e || "chapters" !== a.kind || (e = a), t || "metadata" !== a.kind || "thumbnails" !== a.label || (t = a), o.push({
                kind: a.kind,
                label: a.label,
                language: a.language,
                mode: a.mode
              }), ("captions" === a.kind || "subtitles" === a.kind) && "showing" === a.mode && (u = !0);
            }
            let c = e?.cues ? Array.from(e.cues) : [],
              d = t?.cues ? Array.from(t.cues) : [],
              p = null;
            for (let e of (t && (p = function (e, t) {
              if (!(e instanceof HTMLElement)) return null;
              for (let r of e.querySelectorAll("track")) if (r.track === t) return r;
              return null;
            }(n, t)?.src ?? null), [...(l(n) && "querySelectorAll" in n && a(n.querySelectorAll) && n.querySelectorAll("track") || []), ...(n instanceof HTMLElement && n.shadowRoot?.querySelectorAll("track") || [])])) e.track?.cues?.length || q(e, "load", s, {
              signal: i.signal
            });
            r({
              chaptersCues: c,
              thumbnailCues: d,
              thumbnailTrackSrc: p,
              textTrackList: o,
              subtitlesShowing: u
            });
          };
        s();
        let o = n.textTracks;
        o instanceof EventTarget && (q(o, "addtrack", s, {
          signal: t
        }), q(o, "removetrack", s, {
          signal: t
        }), q(o, "change", s, {
          signal: t
        })), q(n, "loadstart", s, {
          signal: t
        }), t.addEventListener("abort", () => i?.abort(), {
          once: !0
        });
      }
    },
    eh = {
      seek: Symbol.for("@videojs/seek")
    },
    eg = {
      name: "time",
      state: ({
        target: e,
        signals: t,
        set: r
      }) => ({
        currentTime: 0,
        duration: 0,
        seeking: !1,
        async seek(n) {
          let {
              media: a
            } = e(),
            i = t.supersede(eh.seek);
          if (!D(a) || !$(a)) return 0;
          if (!(a.readyState >= 1) && !(await W(a, "loadedmetadata", {
            signal: i
          }).catch(() => !1))) return a.currentTime;
          let l = Math.max(0, Math.min(n, a.duration || 1 / 0));
          return r({
            currentTime: l,
            seeking: !0
          }), a.currentTime = l, await W(a, "seeked", {
            signal: i
          }).catch(m), a.currentTime;
        }
      }),
      attach({
        target: e,
        signal: t,
        set: r,
        get: n
      }) {
        let {
          media: a
        } = e;
        if (!D(a)) return;
        let i = () => r({
            currentTime: a.currentTime,
            duration: (() => {
              let {
                duration: e
              } = a;
              if (e === 1 / 0 && B(a)) {
                let {
                  seekable: e
                } = a;
                return e.length > 0 ? e.end(e.length - 1) : 0;
              }
              return Number.isFinite(e) ? e : 0;
            })(),
            seeking: a.seeking
          }),
          l = () => {
            n().seeking || i();
          };
        i(), q(a, "timeupdate", l, {
          signal: t
        }), q(a, "durationchange", i, {
          signal: t
        }), q(a, "seeking", i, {
          signal: t
        }), q(a, "seeked", i, {
          signal: t
        }), q(a, "loadedmetadata", i, {
          signal: t
        }), q(a, "emptied", i, {
          signal: t
        }), q(a, "progress", l, {
          signal: t
        });
      }
    },
    eb = {
      name: "volume",
      state: ({
        target: e
      }) => ({
        volume: 1,
        muted: !1,
        volumeAvailability: "unavailable",
        setVolume(t) {
          let {
            media: r
          } = e();
          if (!O(r)) return 0;
          let n = Math.max(0, Math.min(1, t));
          return n > 0 && r.muted && (r.muted = !1), r.volume = n, r.volume;
        },
        toggleMuted() {
          let {
            media: t
          } = e();
          return !!O(t) && (t.muted || 0 === t.volume ? (t.muted = !1, 0 === t.volume && (t.volume = .25)) : t.muted = !0, t.muted);
        }
      }),
      attach({
        target: e,
        signal: t,
        set: r
      }) {
        let {
          media: n
        } = e;
        if (!O(n)) return;
        r({
          volumeAvailability: function () {
            let e = document.createElement("video");
            try {
              return e.volume = .5, .5 === e.volume ? "available" : "unsupported";
            } catch {
              return "unsupported";
            }
          }()
        });
        let a = () => r({
          volume: n.volume,
          muted: n.muted
        });
        a(), q(n, "volumechange", a, {
          signal: t
        });
      }
    },
    ev = [eo, ec, eb, eg, ep, U, el, es, ed, Y, em, J],
    ey = (0, n.forwardRef)(function ({
      children: e,
      ...t
    }, a) {
      return (0, r.jsx)("video", {
        ref: u(a, (0, n.useContext)(b)?.setMedia),
        ...t,
        children: e
      });
    });
  function ew(...e) {
    let t = {};
    for (let r of e) t = function (e, t) {
      if (!t) return e;
      for (let a in t) {
        var r, n;
        let i = t[a];
        "className" === a ? (r = e.className, e.className = i && r ? `${i} ${r}` : i || r) : "style" === a ? (n = e.style, e.style = i ? n ? {
          ...n,
          ...i
        } : i : n) : !function (e, t) {
          return 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) && ("function" == typeof t || void 0 === t);
        }(a, i) ? e[a] = i : e[a] = function (e, t) {
          return t ? e ? r => {
            t(r), e(r);
          } : t : e;
        }(e[a], i);
      }
      return e;
    }(t, r);
    return t;
  }
  function ex(e, t, r) {
    let {
        className: i,
        style: l,
        render: s
      } = t,
      {
        state: u,
        ref: c,
        props: d,
        stateAttrMap: p
      } = r,
      f = a(i) ? i(u) : i,
      m = a(l) ? l(u) : l,
      h = ew(function (e, t) {
        let r = {};
        for (let a in e) {
          var n;
          if (t && !(a in t)) continue;
          let i = t?.[a] ?? (n = a, `data-${n.toLowerCase()}`),
            l = e[a];
          !0 === l ? r[i] = "" : l && (r[i] = String(l));
        }
        return r;
      }(u, p), ...(Array.isArray(d) ? d : d ? [d] : []));
    if (void 0 !== f && (h.className = h.className ? `${h.className} ${f}` : f), void 0 !== m && (h.style = h.style ? {
      ...h.style,
      ...m
    } : m), a(s)) {
      let e = o(c, h.ref);
      return s({
        ...h,
        ref: e
      }, u);
    }
    if ((0, n.isValidElement)(s)) {
      let e = s.ref ?? s.props?.ref,
        t = o(c, h.ref, e),
        r = ew(h, s.props);
      return r.ref = t, (0, n.cloneElement)(s, r);
    }
    return h.ref = o(c, h.ref), (0, n.createElement)(e, h);
  }
  let eP = new WeakMap(),
    ek = (0, n.createContext)(null);
  function eS(e) {
    let {
        displayName: t,
        core: r,
        stateAttrMap: a,
        selector: i,
        action: l,
        hotkeyAction: s
      } = e,
      o = new Set(Object.keys(r.defaultProps)),
      u = (0, n.forwardRef)(function (e, u) {
        let c,
          {
            render: d,
            className: p,
            style: f,
            ...m
          } = e,
          h = {},
          g = {};
        for (let e of Object.keys(m)) o.has(e) ? h[e] = m[e] : g[e] = m[e];
        let b = (0, n.useContext)(ek),
          v = w(i),
          x = (c = function () {
            let {
              container: e
            } = y();
            return e;
          }(), (0, n.useMemo)(() => {
            if (c && s) return eP.get(c)?.getAriaKeys(s);
          }, [c, s])),
          [P] = (0, n.useState)(() => new r());
        P.setProps(h);
        let {
          getButtonProps: k,
          buttonRef: S
        } = function (e) {
          let {
              displayName: t,
              onActivate: r,
              isDisabled: a
            } = e,
            i = (0, n.useCallback)(e => {}, [t]);
          return {
            getButtonProps: (0, n.useCallback)(e => ew(function (e) {
              let {
                onActivate: t,
                isDisabled: r
              } = e;
              return {
                role: "button",
                tabIndex: 0,
                onClick(e) {
                  r() ? e.preventDefault() : t();
                },
                onPointerDown(e) {
                  r() && e.preventDefault();
                },
                onMouseDown(e) {
                  r() && e.preventDefault();
                },
                onKeyDown(e) {
                  if (e.target === e.currentTarget) {
                    if (r()) {
                      "Tab" !== e.key && e.preventDefault();
                      return;
                    }
                    "Enter" === e.key ? (e.preventDefault(), t()) : " " === e.key && e.preventDefault();
                  }
                },
                onKeyUp(e) {
                  e.target !== e.currentTarget || r() || " " === e.key && t();
                }
              };
            }({
              onActivate: r,
              isDisabled: a
            }), e), [r, a]),
            buttonRef: i
          };
        }({
          displayName: t,
          onActivate: () => l(P, v),
          isDisabled: () => !!h.disabled || !v
        });
        v && P.setMedia(v);
        let C = v ? P.getState() : null,
          A = C ? P.getLabel(C) : void 0;
        if ((0, n.useLayoutEffect)(() => {
          if (b) return b.setContent(A), () => b.setContent(void 0);
        }, [b, A]), !v || !C) return null;
        let M = {
          ...P.getAttrs(C),
          "aria-keyshortcuts": x
        };
        return ex("button", {
          render: d,
          className: p,
          style: f
        }, {
          state: C,
          stateAttrMap: a,
          ref: [u, S],
          props: [M, g, k()]
        });
      });
    return u.displayName = t, u;
  }
  ek.Provider;
  let eC = "unknown",
    eA = {
      target: A,
      signals: new S(),
      get: A,
      set: A
    };
  function eM(e) {
    let t = Object.keys(e.state(eA)),
      r = t[0];
    return r ? Object.assign(e => {
      if (r in e) {
        let r = {};
        for (let n of t) Object.hasOwn(e, n) && (r[n] = e[n]);
        return r;
      }
    }, {
      displayName: e.name
    }) : Object.assign(() => void 0, {
      displayName: e.name
    });
  }
  let ej = eM(U),
    eE = eM(Y);
  eM(J);
  let eT = eM(el);
  eM({
    name: "live",
    state: () => ({
      liveEdgeStart: NaN,
      targetLiveWindow: NaN
    }),
    attach({
      target: e,
      signal: t,
      set: r
    }) {
      let {
        media: n
      } = e;
      if (!(l(n) && "liveEdgeStart" in n && "targetLiveWindow" in n)) return;
      let a = () => r({
        liveEdgeStart: n.liveEdgeStart,
        targetLiveWindow: n.targetLiveWindow
      });
      a(), q(n, "targetlivewindowchange", a, {
        signal: t
      }), q(n, "streamtypechange", a, {
        signal: t
      }), q(n, "loadedmetadata", a, {
        signal: t
      }), q(n, "canplay", a, {
        signal: t
      }), q(n, "progress", a, {
        signal: t
      }), q(n, "durationchange", a, {
        signal: t
      }), q(n, "timeupdate", a, {
        signal: t
      }), q(n, "emptied", a, {
        signal: t
      });
    }
  }), eM(es);
  let eL = eM(eo);
  eM(ec), eM(ed), eM(ep), eM({
    name: "streamType",
    state: () => ({
      streamType: eC
    }),
    attach({
      target: e,
      signal: t,
      set: r
    }) {
      let {
        media: n
      } = e;
      if (l(n) && "streamType" in n) {
        let e = () => r({
          streamType: n.streamType
        });
        e(), q(n, "streamtypechange", e, {
          signal: t
        });
        return;
      }
      if (!D(n)) return;
      let a = () => r({
        streamType: (() => {
          let {
            duration: e
          } = n;
          return e === 1 / 0 ? "live" : Number.isFinite(e) && e > 0 ? "on-demand" : eC;
        })()
      });
      a(), q(n, "durationchange", a, {
        signal: t
      }), q(n, "loadedmetadata", a, {
        signal: t
      }), q(n, "emptied", a, {
        signal: t
      }), B(n) && q(n, "progress", a, {
        signal: t
      });
    }
  });
  let eR = eM(em),
    eN = eM(eg),
    eV = eM(eb);
  function eF(e, t) {
    let r = {
      ...t
    };
    for (let t in e) void 0 !== e[t] && (r[t] = e[t]);
    return r;
  }
  let eD = eS({
    displayName: "CaptionsButton",
    core: class e {
      static defaultProps = {
        label: "",
        disabled: !1
      };
      state = N({
        subtitlesShowing: !1,
        availability: "unavailable",
        label: ""
      });
      #l = {
        ...e.defaultProps
      };
      #s = null;
      constructor(e) {
        e && this.setProps(e);
      }
      setProps(t) {
        this.#l = eF(t, e.defaultProps);
      }
      getLabel(e) {
        let {
          label: t
        } = this.#l;
        if (a(t)) {
          let r = t(e);
          if (r) return r;
        } else if (t) return t;
        return e.subtitlesShowing ? "Disable captions" : "Enable captions";
      }
      getAttrs(e) {
        return {
          "aria-label": this.getLabel(e),
          "aria-disabled": this.#l.disabled ? "true" : void 0
        };
      }
      setMedia(e) {
        this.#s = e;
      }
      getState() {
        let e = this.#s,
          t = e.textTrackList.some(e => "captions" === e.kind || "subtitles" === e.kind) ? "available" : "unavailable";
        return this.state.patch({
          subtitlesShowing: e.subtitlesShowing,
          availability: t
        }), this.state.patch({
          label: this.getLabel(this.state.current)
        }), this.state.current;
      }
      toggle(e) {
        this.#l.disabled || e.toggleSubtitles();
      }
    },
    stateAttrMap: {
      subtitlesShowing: "data-active",
      availability: "data-availability"
    },
    selector: eR,
    action: (e, t) => e.toggle(t),
    hotkeyAction: "toggleSubtitles"
  });
  var e$ = Object.defineProperty,
    eO = (e, t) => {
      let r = {};
      for (var n in e) e$(r, n, {
        get: e[n],
        enumerable: !0
      });
      return t || e$(r, Symbol.toStringTag, {
        value: "Module"
      }), r;
    };
  let ez = (0, n.createContext)(null),
    eB = ez.Provider,
    eH = (0, n.forwardRef)(function (e, t) {
      let {
          render: r,
          className: a,
          style: i,
          children: l,
          ...s
        } = e,
        {
          state: o,
          stateAttrMap: u
        } = function () {
          let e = (0, n.useContext)(ez);
          if (!e) throw Error("Controls compound components must be used within a Controls.Root");
          return e;
        }();
      return ex("div", {
        render: r,
        className: a,
        style: i
      }, {
        state: o,
        stateAttrMap: u,
        ref: [t],
        props: [{
          role: s["aria-label"] || s["aria-labelledby"] ? "group" : void 0,
          children: l
        }, s]
      });
    });
  var eI = class {
    #s = null;
    setMedia(e) {
      this.#s = e;
    }
    getState() {
      let e = this.#s;
      return {
        visible: e.controlsVisible,
        userActive: e.userActive
      };
    }
  };
  let eq = {
      visible: "data-visible",
      userActive: "data-user-active"
    },
    e_ = (0, n.forwardRef)(function (e, t) {
      let {
          render: a,
          className: i,
          style: l,
          children: s,
          ...o
        } = e,
        u = w(eE),
        [c] = (0, n.useState)(() => new eI());
      if (!u) return null;
      c.setMedia(u);
      let d = c.getState();
      return (0, r.jsx)(eB, {
        value: {
          state: d,
          stateAttrMap: eq
        },
        children: ex("div", {
          render: a,
          className: i,
          style: l
        }, {
          state: d,
          stateAttrMap: eq,
          ref: [t],
          props: [{
            children: s
          }, o]
        })
      });
    });
  var eU = eO({
    Group: () => eH,
    Root: () => e_
  });
  let eW = eS({
      displayName: "FullscreenButton",
      core: class e {
        static defaultProps = {
          label: "",
          disabled: !1
        };
        state = N({
          fullscreen: !1,
          availability: "available",
          label: ""
        });
        #l = {
          ...e.defaultProps
        };
        #s = null;
        constructor(e) {
          e && this.setProps(e);
        }
        setProps(t) {
          this.#l = eF(t, e.defaultProps);
        }
        getLabel(e) {
          let {
            label: t
          } = this.#l;
          if (a(t)) {
            let r = t(e);
            if (r) return r;
          } else if (t) return t;
          return e.fullscreen ? "Exit fullscreen" : "Enter fullscreen";
        }
        getAttrs(e) {
          return {
            "aria-label": this.getLabel(e),
            "aria-disabled": this.#l.disabled ? "true" : void 0
          };
        }
        setMedia(e) {
          this.#s = e;
        }
        getState() {
          let e = this.#s;
          return this.state.patch({
            fullscreen: e.fullscreen,
            availability: e.fullscreenAvailability
          }), this.state.patch({
            label: this.getLabel(this.state.current)
          }), this.state.current;
        }
        async toggle(e) {
          if (!this.#l.disabled && "available" === e.fullscreenAvailability) try {
            e.fullscreen ? await e.exitFullscreen() : await e.requestFullscreen();
          } catch {}
        }
      },
      stateAttrMap: {
        fullscreen: "data-fullscreen",
        availability: "data-availability"
      },
      selector: eT,
      action: (e, t) => e.toggle(t),
      hotkeyAction: "toggleFullscreen"
    }),
    eK = eS({
      displayName: "MuteButton",
      core: class e {
        static defaultProps = {
          label: "",
          disabled: !1
        };
        state = N({
          muted: !1,
          volumeLevel: "off",
          label: ""
        });
        #l = {
          ...e.defaultProps
        };
        #s = null;
        constructor(e) {
          e && this.setProps(e);
        }
        setProps(t) {
          this.#l = eF(t, e.defaultProps);
        }
        getLabel(e) {
          let {
            label: t
          } = this.#l;
          if (a(t)) {
            let r = t(e);
            if (r) return r;
          } else if (t) return t;
          return e.muted ? "Unmute" : "Mute";
        }
        getAttrs(e) {
          return {
            "aria-label": this.getLabel(e),
            "aria-disabled": this.#l.disabled ? "true" : void 0
          };
        }
        setMedia(e) {
          this.#s = e;
        }
        getState() {
          var e;
          let t = this.#s;
          return this.state.patch({
            muted: t.muted || 0 === t.volume,
            volumeLevel: (e = t).muted || 0 === e.volume ? "off" : e.volume < .5 ? "low" : e.volume < .75 ? "medium" : "high"
          }), this.state.patch({
            label: this.getLabel(this.state.current)
          }), this.state.current;
        }
        toggle(e) {
          this.#l.disabled || e.toggleMuted();
        }
      },
      stateAttrMap: {
        muted: "data-muted",
        volumeLevel: "data-volume-level"
      },
      selector: eV,
      action: (e, t) => e.toggle(t),
      hotkeyAction: "toggleMuted"
    }),
    eZ = eS({
      displayName: "PlayButton",
      core: class e {
        static defaultProps = {
          label: "",
          disabled: !1
        };
        state = N({
          paused: !0,
          ended: !1,
          started: !1,
          label: ""
        });
        #l = {
          ...e.defaultProps
        };
        #s = null;
        constructor(e) {
          e && this.setProps(e);
        }
        setProps(t) {
          this.#l = eF(t, e.defaultProps);
        }
        getLabel(e) {
          let {
            label: t
          } = this.#l;
          if (a(t)) {
            let r = t(e);
            if (r) return r;
          } else if (t) return t;
          return e.ended ? "Replay" : e.paused ? "Play" : "Pause";
        }
        getAttrs(e) {
          return {
            "aria-label": this.getLabel(e),
            "aria-disabled": this.#l.disabled ? "true" : void 0
          };
        }
        setMedia(e) {
          this.#s = e;
        }
        getState() {
          let e = this.#s;
          return this.state.patch({
            paused: e.paused,
            ended: e.ended,
            started: e.started
          }), this.state.patch({
            label: this.getLabel(this.state.current)
          }), this.state.current;
        }
        async toggle(e) {
          if (!this.#l.disabled) {
            if (e.paused || e.ended) return e.play();
            e.pause();
          }
        }
      },
      stateAttrMap: {
        paused: "data-paused",
        ended: "data-ended",
        started: "data-started"
      },
      selector: eL,
      action: (e, t) => e.toggle(t),
      hotkeyAction: "togglePaused"
    }),
    eG = (0, n.forwardRef)(function (e, t) {
      let {
        render: r,
        className: n,
        style: a,
        children: i,
        ...l
      } = e;
      return ex("span", {
        render: r,
        className: n,
        style: a
      }, {
        state: {},
        ref: [t],
        props: [{
          children: i
        }, l]
      });
    }),
    eX = (0, n.forwardRef)(function (e, t) {
      let {
        render: r,
        className: n,
        style: a,
        children: i = "/",
        ...l
      } = e;
      return ex("span", {
        render: r,
        className: n,
        style: a
      }, {
        state: {},
        ref: [t],
        props: [{
          "aria-hidden": "true",
          children: i
        }, l]
      });
    }),
    eY = [{
      singular: "hour",
      plural: "hours"
    }, {
      singular: "minute",
      plural: "minutes"
    }, {
      singular: "second",
      plural: "seconds"
    }];
  function eJ(e) {
    return "number" == typeof e && Number.isFinite(e);
  }
  function eQ(e, t) {
    return `${e} ${1 === e ? eY[t]?.singular : eY[t]?.plural}`;
  }
  function e0(e, t) {
    if (!eJ(e)) return "0:00";
    let r = e < 0,
      n = Math.abs(e),
      a = Math.floor(n / 3600),
      i = Math.floor(n / 60 % 60),
      l = Math.floor(n % 60),
      s = t ? Math.abs(t) : 0,
      o = Math.floor(s / 3600),
      u = Math.floor(s / 60 % 60),
      c = a > 0 || o > 0,
      d = c ? `${a}:` : "",
      p = `${(c || u >= 10) && i < 10 ? "0" : ""}${i}:`,
      f = l < 10 ? `0${l}` : `${l}`;
    return `${r ? "-" : ""}${d}${p}${f}`;
  }
  function e1(e) {
    if (!eJ(e)) return "";
    let t = e < 0,
      r = Math.abs(e),
      n = Math.floor(r / 3600),
      a = Math.floor(r / 60 % 60),
      i = Math.floor(r % 60);
    return 0 === r ? `${eQ(0, 2)}${t ? " remaining" : ""}` : `${[n, a, i].map((e, t) => e > 0 ? eQ(e, t) : null).filter(Boolean).join(", ")}${t ? " remaining" : ""}`;
  }
  let e2 = {
    current: "Current time",
    duration: "Duration",
    remaining: "Remaining"
  };
  var e3 = class e {
    static defaultProps = {
      type: "current",
      negativeSign: "-",
      label: ""
    };
    #l = {
      ...e.defaultProps
    };
    #s = null;
    constructor(e) {
      e && this.setProps(e);
    }
    setProps(t) {
      this.#l = eF(t, e.defaultProps);
    }
    setMedia(e) {
      this.#s = e;
    }
    #o() {
      let e = this.#s,
        {
          type: t
        } = this.#l;
      switch (t) {
        case "current":
          return e.currentTime;
        case "duration":
          return e.duration;
        case "remaining":
          return e.currentTime - e.duration;
        default:
          return 0;
      }
    }
    #u() {
      let e = this.#s;
      return e0(Math.abs(this.#o()), e.duration);
    }
    #c() {
      let {
          type: e
        } = this.#l,
        t = this.#o();
      return "remaining" === e ? e1(t < 0 ? t : -Math.abs(t)) : e1(t);
    }
    #d() {
      return function (e) {
        if (!eJ(e)) return "PT0S";
        let t = Math.abs(e),
          r = Math.floor(t / 3600),
          n = Math.floor(t / 60 % 60),
          a = Math.floor(t % 60),
          i = "PT";
        return r > 0 && (i += `${r}H`), n > 0 && (i += `${n}M`), (a > 0 || "PT" === i) && (i += `${a}S`), i;
      }(Math.abs(this.#o()));
    }
    getLabel(e) {
      let {
        label: t
      } = this.#l;
      if (a(t)) {
        let r = t(e);
        if (r) return r;
      } else if (t) return t;
      return e2[this.#l.type];
    }
    getAttrs(e) {
      return {
        "aria-label": this.getLabel(e),
        "aria-valuetext": e.phrase
      };
    }
    getState() {
      let e = this.#o();
      return {
        type: this.#l.type,
        seconds: e,
        negative: "remaining" === this.#l.type && e < 0,
        text: this.#u(),
        phrase: this.#c(),
        datetime: this.#d()
      };
    }
  };
  let e8 = {
      type: "data-type"
    },
    e5 = (0, n.forwardRef)(function (e, t) {
      let {
          render: a,
          className: i,
          style: l,
          type: s,
          negativeSign: o,
          label: u,
          ...c
        } = e,
        d = w(eN),
        [p] = (0, n.useState)(() => new e3());
      if (p.setProps({
        type: s,
        negativeSign: o,
        label: u
      }), !d) return null;
      p.setMedia(d);
      let f = p.getState(),
        m = f.negative ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("span", {
            "aria-hidden": "true",
            children: o ?? e3.defaultProps.negativeSign
          }), f.text]
        }) : f.text;
      return ex("time", {
        render: a,
        className: i,
        style: l
      }, {
        state: f,
        stateAttrMap: e8,
        ref: [t],
        props: [{
          dateTime: f.datetime,
          children: m,
          ...p.getAttrs(f)
        }, c]
      });
    });
  var e6 = eO({
    Group: () => eG,
    Separator: () => eX,
    Value: () => e5
  });
  function e7(e) {
    let {
        displayName: t,
        tag: r,
        useContext: a,
        staticProps: i,
        getProps: l
      } = e,
      s = (0, n.forwardRef)(function (e, t) {
        let {
            render: n,
            className: s,
            style: o,
            ...u
          } = e,
          c = a(),
          d = l?.(c.state);
        return ex(r, {
          render: n,
          className: s,
          style: o
        }, {
          state: c.state,
          stateAttrMap: c.stateAttrMap,
          ref: t,
          props: [i, d, u].filter(Boolean)
        });
      });
    return s.displayName = t, s;
  }
  let e4 = (0, n.createContext)(null);
  function e9({
    value: e,
    children: t
  }) {
    return (0, r.jsx)(e4.Provider, {
      value: e,
      children: t
    });
  }
  function te() {
    let e = (0, n.useContext)(e4);
    if (!e) throw Error("Slider compound components must be used within a Slider.Root");
    return e;
  }
  let tt = e7({
      displayName: "SliderBuffer",
      tag: "div",
      useContext: te
    }),
    tr = e7({
      displayName: "SliderFill",
      tag: "div",
      useContext: te
    }),
    tn = "--media-slider-pointer";
  function ta(e) {
    return {
      ...{
        "--media-slider-fill": `${e.fillPercent.toFixed(3)}%`,
        [tn]: `${e.pointerPercent.toFixed(3)}%`
      },
      "--media-slider-buffer": `${e.bufferPercent.toFixed(3)}%`
    };
  }
  let ti = (0, n.forwardRef)(function (e, t) {
      let r,
        {
          render: a,
          className: i,
          style: l,
          overflow: s = "clamp",
          ...o
        } = e,
        u = te(),
        {
          state: c
        } = u,
        d = (0, n.useRef)(null),
        [p, f] = (0, n.useState)(0);
      (0, n.useEffect)(() => {
        let e = d.current;
        if (!e) return;
        let t = new ResizeObserver(([e]) => {
          f(e.contentRect.width);
        });
        return t.observe(e), () => t.disconnect();
      }, []);
      let m = (r = p / 2, {
        position: "absolute",
        left: "visible" === s ? `calc(var(${tn}) - ${r}px)` : `min(max(0px, calc(var(${tn}) - ${r}px)), calc(100% - ${p}px))`,
        width: "max-content",
        pointerEvents: "none"
      });
      return ex("div", {
        render: a,
        className: i,
        style: l
      }, {
        state: c,
        stateAttrMap: u.stateAttrMap,
        ref: [t, d],
        props: [{
          style: m
        }, o]
      });
    }),
    tl = (0, n.forwardRef)(function (e, t) {
      let {
          render: r,
          className: n,
          style: a,
          ...i
        } = e,
        l = te(),
        {
          state: s,
          thumbRef: o,
          thumbProps: u,
          getAttrs: c
        } = l,
        d = c(s);
      return ex("div", {
        render: r,
        className: n,
        style: a
      }, {
        state: s,
        stateAttrMap: l.stateAttrMap,
        ref: [t, o],
        props: [d, u, i]
      });
    }),
    ts = e7({
      displayName: "SliderTrack",
      tag: "div",
      useContext: te
    }),
    to = (0, n.forwardRef)(function (e, t) {
      let {
          render: r,
          className: n,
          style: a,
          type: i = "current",
          format: l,
          ...s
        } = e,
        o = te(),
        {
          state: u,
          pointerValue: c,
          formatValue: d
        } = o,
        p = "pointer" === i ? c : u.value,
        f = l ? l(p) : d ? d(p, i) : String(Math.round(p));
      return ex("output", {
        render: r,
        className: n,
        style: a
      }, {
        state: u,
        stateAttrMap: o.stateAttrMap,
        ref: t,
        props: [{
          "aria-live": "off",
          children: f
        }, s]
      });
    });
  function tu(e, t, r) {
    return Math.max(t, Math.min(r, e));
  }
  function tc(e, t, r) {
    let n = Math.round((e - r) / t) * t + r,
      a = `${t}`.indexOf(".");
    return -1 === a ? n : Number(n.toFixed(`${t}`.length - a - 1));
  }
  function td(e, t, r, n) {
    let a;
    return Number.isFinite(a = "vertical" === r ? 1 - (e.clientY - t.top) / t.height : n ? (t.right - e.clientX) / t.width : (e.clientX - t.left) / t.width) ? tu(100 * a, 0, 100) : 0;
  }
  var tp = class e {
      static defaultProps = {
        label: "",
        step: 1,
        largeStep: 10,
        orientation: "horizontal",
        disabled: !1,
        thumbAlignment: "center",
        value: 0,
        min: 0,
        max: 100
      };
      static defaultInput = {
        pointerPercent: 0,
        dragPercent: 0,
        dragging: !1,
        pointing: !1,
        focused: !1
      };
      #l = {
        ...e.defaultProps
      };
      #p = {
        ...e.defaultInput
      };
      get props() {
        return this.#l;
      }
      get input() {
        return this.#p;
      }
      constructor(e) {
        e && this.setProps(e);
      }
      setProps(t) {
        this.#l = eF(t, e.defaultProps);
      }
      setInput(e) {
        this.#p = e;
      }
      getSliderState(e) {
        let {
            orientation: t,
            disabled: r,
            thumbAlignment: n
          } = this.#l,
          {
            pointerPercent: a,
            dragging: i,
            pointing: l,
            focused: s
          } = this.#p;
        return {
          value: e,
          fillPercent: this.percentFromValue(e),
          pointerPercent: a,
          dragging: i,
          pointing: l,
          interactive: i || l || s,
          orientation: t,
          disabled: r,
          thumbAlignment: n
        };
      }
      getLabel(e) {
        let {
          label: t
        } = this.#l;
        if (a(t)) {
          let r = t(e);
          if (r) return r;
        } else if (t) return t;
        return "";
      }
      getAttrs(e) {
        return {
          role: "slider",
          tabIndex: e.disabled ? -1 : 0,
          autoComplete: "off",
          "aria-label": this.getLabel(e),
          "aria-valuemin": this.#l.min,
          "aria-valuemax": this.#l.max,
          "aria-valuenow": e.value,
          "aria-orientation": e.orientation,
          "aria-disabled": e.disabled ? "true" : void 0
        };
      }
      valueFromPercent(e) {
        let {
          min: t,
          max: r,
          step: n
        } = this.#l;
        return tc(tu(t + e / 100 * (r - t), t, r), n, t);
      }
      rawValueFromPercent(e) {
        let {
          min: t,
          max: r
        } = this.#l;
        return tu(t + e / 100 * (r - t), t, r);
      }
      percentFromValue(e) {
        let {
          min: t,
          max: r
        } = this.#l;
        return r === t ? 0 : (e - t) / (r - t) * 100;
      }
      getStepPercent() {
        let {
            step: e,
            min: t,
            max: r
          } = this.#l,
          n = r - t;
        return n > 0 ? e / n * 100 : 0;
      }
      getLargeStepPercent() {
        let {
            largeStep: e,
            min: t,
            max: r
          } = this.#l,
          n = r - t;
        return n > 0 ? e / n * 100 : 0;
      }
      adjustPercentForAlignment(e, t, r) {
        if ("center" === this.#l.thumbAlignment || 0 === r) return e;
        let n = t / r * 100 / 2;
        return n + e / 100 * (100 - n - n);
      }
    },
    tf = class e extends tp {
      static defaultProps = {
        ...tp.defaultProps,
        label: "Seek",
        changeThrottle: 100
      };
      #l = {
        ...e.defaultProps
      };
      #s = null;
      constructor(e) {
        super(), e && this.setProps(e);
      }
      setProps(t) {
        this.#l = eF(t, e.defaultProps), super.setProps({
          ...t,
          min: 0
        });
      }
      setMedia(e) {
        this.#s = e;
      }
      getState() {
        let {
          duration: e,
          currentTime: t,
          seeking: r,
          buffered: n
        } = this.#s;
        super.setProps({
          ...this.#l,
          min: 0,
          max: e
        });
        let a = super.getSliderState(t),
          i = n.length > 0 ? n[n.length - 1][1] : 0,
          l = e > 0 ? i / e * 100 : 0;
        return {
          ...a,
          currentTime: t,
          duration: e,
          seeking: r,
          bufferPercent: l
        };
      }
      getLabel(e) {
        return super.getLabel(e) || "Seek";
      }
      getAttrs(e) {
        let t = super.getAttrs(e),
          r = e.dragging ? this.rawValueFromPercent(e.pointerPercent) : e.value,
          n = e1(r),
          a = e1(e.duration),
          i = a ? `${n} of ${a}` : n;
        return {
          ...t,
          "aria-valuenow": r,
          "aria-valuetext": i
        };
      }
    };
  let tm = {
      dragging: "data-dragging",
      pointing: "data-pointing",
      interactive: "data-interactive",
      orientation: "data-orientation",
      disabled: "data-disabled",
      seeking: "data-seeking"
    },
    th = () => Promise.resolve(0),
    tg = (0, n.forwardRef)(function (e, t) {
      let {
          render: a,
          className: l,
          style: s,
          label: o,
          changeThrottle: u = tf.defaultProps.changeThrottle,
          step: c = tf.defaultProps.step,
          largeStep: d = tf.defaultProps.largeStep,
          orientation: m,
          disabled: h,
          thumbAlignment: g,
          onDragStart: b,
          onDragEnd: v,
          ...y
        } = e,
        x = w(eN),
        S = w(ej),
        [C] = (0, n.useState)(() => new tf());
      C.setProps({
        label: o,
        step: c,
        largeStep: d,
        orientation: m,
        disabled: h,
        thumbAlignment: g
      });
      let A = P(x && S ? {
          ...x,
          ...S
        } : null),
        M = x?.duration ?? 0,
        {
          state: j,
          cssVars: E,
          rootRef: T,
          thumbRef: L,
          rootProps: R,
          rootStyle: V,
          thumbProps: F
        } = function (e) {
          var t;
          let r = P(e),
            a = (0, n.useRef)(null),
            l = (0, n.useRef)(null),
            s = function () {
              let [, e] = (0, n.useReducer)(e => e + 1, 0);
              return e;
            }(),
            [o] = (0, n.useState)(() => function (e) {
              var t, r;
              let n,
                a,
                l,
                s,
                o,
                u = N({
                  pointerPercent: 0,
                  dragPercent: 0,
                  dragging: !1,
                  pointing: !1,
                  focused: !1
                }),
                c = new AbortController(),
                d = e.changeThrottle ?? 0,
                p = !1,
                f = !1,
                m = null,
                h = null,
                g = 0,
                b = !1,
                v = d > 0 ? (t = t => e.onValueChange?.(t), r = {
                  leading: !0
                }, a = r?.leading ?? !1, l = null, s = !1, (o = (...e) => {
                  if (n = e, a) null === l ? (t(...n), function e() {
                    l = setTimeout(() => {
                      l = null, s && (s = !1, t(...n), e());
                    }, d);
                  }()) : s = !0;else {
                    if (null !== l) return;
                    l = setTimeout(() => {
                      l = null, t(...n);
                    }, d);
                  }
                }).cancel = () => {
                  null !== l && (clearTimeout(l), l = null), s = !1;
                }, o) : null;
              function y() {
                if (i(h)) return;
                let t = h;
                h = null;
                try {
                  e.getElement().releasePointerCapture(t);
                } catch {}
              }
              function w() {
                p ? (b || e.onValueCommit?.(g), p = !1, u.patch({
                  dragging: !1,
                  pointing: !1
                }), e.onDragEnd?.()) : u.patch({
                  pointing: !1
                }), b = !1, x();
              }
              function x() {
                v?.cancel(), h = null, m = null;
              }
              let P = null;
              return e.onResize && (P = new ResizeObserver(() => e.onResize())).observe(e.getElement()), {
                input: u,
                rootProps: {
                  onPointerDown(t) {
                    if (e.isDisabled()) return;
                    t.stopPropagation(), t.preventDefault();
                    let r = e.getElement();
                    m = r.getBoundingClientRect(), f = e.isRTL(), b = !1, y(), h = t.pointerId, r.setPointerCapture(t.pointerId);
                    let n = td(t, m, e.getOrientation(), f);
                    p = !0, g = n, u.patch({
                      pointing: !0,
                      dragging: !0,
                      pointerPercent: n,
                      dragPercent: n
                    }), e.onDragStart?.(), e.onValueChange?.(n), e.getThumbElement?.()?.focus({
                      preventScroll: !0,
                      focusVisible: !1
                    });
                  },
                  onPointerMove(t) {
                    if (e.isDisabled()) return;
                    if (!i(h)) {
                      if ("touch" !== t.pointerType && 0 === t.buttons) return void w();
                      let r = td(t, m, e.getOrientation(), f);
                      return g = r, u.patch({
                        dragPercent: r,
                        pointerPercent: r
                      }), void (v ? v(r) : e.onValueChange?.(r));
                    }
                    let r = td(t, e.getElement().getBoundingClientRect(), e.getOrientation(), e.isRTL());
                    u.patch({
                      pointing: !0,
                      pointerPercent: r
                    });
                  },
                  onPointerUp(t) {
                    if (e.isDisabled() || (t.stopPropagation(), i(h))) return;
                    let r = td(t, m, e.getOrientation(), f);
                    v?.cancel(), e.onValueChange?.(r), e.onValueCommit?.(r), b = !0;
                  },
                  onPointerLeave() {
                    i(h) && u.patch({
                      pointing: !1
                    });
                  },
                  onLostPointerCapture() {
                    w();
                  }
                },
                rootStyle: {
                  touchAction: "none",
                  userSelect: "none"
                },
                thumbProps: {
                  onKeyDown(t) {
                    if (e.isDisabled()) {
                      "Tab" !== t.key && t.preventDefault();
                      return;
                    }
                    let r = e.getStepPercent(),
                      n = e.getLargeStepPercent(),
                      a = tc(e.getPercent(), r, 0),
                      i = e.isRTL() ? -1 : 1,
                      l = t.shiftKey ? n : r,
                      s = null;
                    switch (t.key) {
                      case "ArrowRight":
                        s = a + l * i;
                        break;
                      case "ArrowLeft":
                        s = a - l * i;
                        break;
                      case "ArrowUp":
                        s = a + l;
                        break;
                      case "ArrowDown":
                        s = a - l;
                        break;
                      case "PageUp":
                        s = a + n;
                        break;
                      case "PageDown":
                        s = a - n;
                        break;
                      case "Home":
                        s = 0;
                        break;
                      case "End":
                        s = 100;
                        break;
                      default:
                        t.metaKey || t.ctrlKey || t.altKey || !(t.key >= "0") || !(t.key <= "9") || (s = 10 * Number(t.key));
                    }
                    null !== s && (t.preventDefault(), s = tu(s, 0, 100), u.patch({
                      pointerPercent: s,
                      dragPercent: s
                    }), e.onValueChange?.(s), e.onValueCommit?.(s));
                  },
                  onFocus() {
                    u.patch({
                      focused: !0
                    });
                  },
                  onBlur() {
                    u.patch({
                      focused: !1
                    });
                  }
                },
                adjustForAlignment: function (t) {
                  if (!e.adjustPercent || "edge" !== t.thumbAlignment) return t;
                  let r = e.getElement(),
                    n = e.getThumbElement?.();
                  if (!n) return t;
                  let a = "horizontal" === t.orientation,
                    i = a ? n.offsetWidth : n.offsetHeight,
                    l = a ? r.offsetWidth : r.offsetHeight;
                  return {
                    ...t,
                    fillPercent: e.adjustPercent(t.fillPercent, i, l),
                    pointerPercent: e.adjustPercent(t.pointerPercent, i, l)
                  };
                },
                destroy() {
                  c.signal.aborted || (c.abort(), P?.disconnect(), y(), x());
                }
              };
            }({
              getElement: () => a.current,
              getThumbElement: () => l.current,
              getOrientation: () => r.current.orientation ?? "horizontal",
              isRTL: () => {
                var e;
                let t;
                return !!a.current && (e = a.current, (t = e.closest("[dir]")?.getAttribute("dir")) ? "rtl" === t.toLowerCase() : "rtl" === getComputedStyle(e).direction);
              },
              isDisabled: () => r.current.disabled ?? !1,
              getPercent: () => r.current.getPercent(),
              getStepPercent: () => r.current.getStepPercent(),
              getLargeStepPercent: () => r.current.getLargeStepPercent(),
              changeThrottle: r.current.changeThrottle,
              adjustPercent: r.current.adjustPercent,
              onValueChange: e => r.current.onValueChange?.(e),
              onValueCommit: e => r.current.onValueCommit?.(e),
              onDragStart: () => r.current.onDragStart?.(),
              onDragEnd: () => r.current.onDragEnd?.()
            }));
          k(o);
          let u = (t = o.input, p(e => t.subscribe(e), () => t.current, void 0 ?? f, void 0)),
            c = e.computeState(u);
          return (0, n.useLayoutEffect)(() => {
            "edge" === c.thumbAlignment && a.current && l.current && s();
          }, [c.thumbAlignment]), {
            state: c,
            cssVars: e.getCSSVars(o.adjustForAlignment(c)),
            rootRef: (0, n.useCallback)(e => {
              a.current = e;
            }, []),
            thumbRef: (0, n.useCallback)(e => {
              l.current = e;
            }, []),
            rootProps: o.rootProps,
            rootStyle: o.rootStyle,
            thumbProps: o.thumbProps
          };
        }({
          computeState: e => (C.setInput(e), x && S ? C.setMedia({
            ...x,
            ...S
          }) : C.setMedia({
            currentTime: 0,
            duration: 0,
            seeking: !1,
            seek: th,
            buffered: [],
            seekable: []
          }), C.getState()),
          getPercent: () => M > 0 ? (x?.currentTime ?? 0) / M * 100 : 0,
          getStepPercent: () => C.getStepPercent(),
          getLargeStepPercent: () => C.getLargeStepPercent(),
          orientation: m,
          disabled: h,
          changeThrottle: u,
          adjustPercent: (e, t, r) => C.adjustPercentForAlignment(e, t, r),
          getCSSVars: ta,
          onValueCommit: e => {
            let t = A.current;
            t && t.seek(C.rawValueFromPercent(e));
          },
          onDragStart: b,
          onDragEnd: v
        });
      return x ? (0, r.jsx)(e9, {
        value: {
          state: j,
          pointerValue: C.valueFromPercent(j.pointerPercent),
          thumbRef: L,
          thumbProps: F,
          stateAttrMap: tm,
          getAttrs: e => C.getAttrs(e),
          formatValue: e => e0(e, M)
        },
        children: ex("div", {
          render: a,
          className: l,
          style: s
        }, {
          state: j,
          stateAttrMap: tm,
          ref: [t, T],
          props: [{
            style: {
              ...E,
              ...V
            }
          }, R, y]
        })
      }) : null;
    });
  var tb = eO({
    Buffer: () => tt,
    Fill: () => tr,
    Preview: () => ti,
    Root: () => tg,
    Thumb: () => tl,
    Track: () => ts,
    Value: () => to
  });
  function tv(e) {
    return (0, r.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      focusable: "false",
      "aria-hidden": "true",
      ...e,
      children: (0, r.jsx)("path", {
        d: "M6 17.5V12.3571H7.71429V15.7857H11.1429V17.5H6ZM16.2857 10.6429V7.21429H12.8571V5.5H18V10.6429H16.2857Z",
        fill: "currentColor"
      })
    });
  }
  function ty(e) {
    return (0, r.jsxs)("svg", {
      focusable: "false",
      "aria-hidden": "true",
      viewBox: "0 0 21 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [(0, r.jsx)("path", {
        d: "M6 4.03638L6 16.9634",
        stroke: "currentColor",
        strokeWidth: "2"
      }), (0, r.jsx)("path", {
        d: "M15 4.03638L15 16.9634",
        stroke: "currentColor",
        strokeWidth: "2"
      })]
    });
  }
  function tw(e) {
    return (0, r.jsx)("svg", {
      viewBox: "1.2331 0 21 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      focusable: "false",
      "aria-hidden": "true",
      ...e,
      children: (0, r.jsx)("path", {
        d: "M8.08845 2.07163C6.48742 1.03567 4.375 2.18488 4.375 4.09185V16.9083C4.375 18.8153 6.48742 19.9645 8.08845 18.9286L17.9921 12.5203C19.4575 11.5721 19.4575 9.42808 17.9921 8.47988L8.08845 2.07163Z",
        fill: "currentColor"
      })
    });
  }
  function tx(e) {
    return (0, r.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      focusable: "false",
      "aria-hidden": "true",
      ...e,
      children: (0, r.jsx)("path", {
        d: "M12 5V2.5L8.5 6 12 9.5V7a5.5 5.5 0 1 1-5.5 5.5H4.5A7.5 7.5 0 1 0 12 5Z",
        fill: "currentColor"
      })
    });
  }
  function tP(e) {
    return (0, r.jsxs)("svg", {
      viewBox: "0 0 21 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      focusable: "false",
      "aria-hidden": "true",
      ...e,
      children: [(0, r.jsx)("path", {
        d: "M11.375 4.22675C11.375 2.94279 9.88979 2.22896 8.88719 3.03105L5.31939 5.88528C5.12546 6.04043 4.88449 6.12495 4.63613 6.12495H3.28125C1.95231 6.12495 0.875 7.20227 0.875 8.5312V12.4687C0.875 13.7976 1.95231 14.875 3.28125 14.875H4.63613C4.88449 14.875 5.12546 14.9595 5.31939 15.1146L8.88719 17.9689C9.88979 18.7709 11.375 18.0571 11.375 16.7732V4.22675Z",
        fill: "currentColor"
      }), (0, r.jsx)("path", {
        d: "M16.3778 3.69383C16.6341 3.43755 17.0496 3.43755 17.3059 3.69383C19.0469 5.43489 20.125 7.84204 20.125 10.4997C20.125 13.1574 19.0469 15.5646 17.3059 17.3056C17.0496 17.5619 16.6341 17.5619 16.3778 17.3056C16.1215 17.0494 16.1215 16.6338 16.3778 16.3776C17.8828 14.8726 18.8125 12.7953 18.8125 10.4997C18.8125 8.20412 17.8828 6.12689 16.3778 4.62191C16.1215 4.36562 16.1215 3.95011 16.3778 3.69383Z",
        fill: "currentColor"
      }), (0, r.jsx)("path", {
        d: "M14.3671 6.63328C14.1108 6.377 13.6953 6.377 13.439 6.63328C13.1827 6.88956 13.1827 7.30508 13.439 7.56136C14.1918 8.31421 14.6563 9.35237 14.6563 10.5003C14.6563 11.6482 14.1918 12.6863 13.439 13.4392C13.1827 13.6955 13.1827 14.111 13.439 14.3673C13.6953 14.6235 14.1108 14.6235 14.3671 14.3673C15.356 13.3783 15.9688 12.0102 15.9688 10.5003C15.9688 8.9903 15.356 7.62221 14.3671 6.63328Z",
        fill: "currentColor"
      })]
    });
  }
  function tk(e) {
    return (0, r.jsxs)("svg", {
      viewBox: "0 0 21 21",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      focusable: "false",
      "aria-hidden": "true",
      ...e,
      children: [(0, r.jsx)("path", {
        d: "M18.1828 3.74529C18.4391 3.48901 18.4391 3.07349 18.1828 2.81721C17.9265 2.56093 17.511 2.56093 17.2547 2.81721L14.875 5.19692V4.22663C14.875 2.94267 13.3898 2.22884 12.3872 3.03092L8.81939 5.88516C8.62546 6.04031 8.38449 6.12483 8.13613 6.12483H6.78125C5.45231 6.12483 4.375 7.20215 4.375 8.53108V12.4686C4.375 13.3438 4.84227 14.1099 5.54095 14.531L2.81721 17.2547C2.56093 17.511 2.56093 17.9265 2.81721 18.1828C3.07349 18.4391 3.48901 18.4391 3.74529 18.1828L18.1828 3.74529Z",
        fill: "currentColor"
      }), (0, r.jsx)("path", {
        d: "M8.81939 15.1145C8.79107 15.0918 8.76175 15.0707 8.73154 15.0511L14.875 8.90764V16.773C14.875 18.057 13.3898 18.7708 12.3872 17.9687L8.81939 15.1145Z",
        fill: "currentColor"
      })]
    });
  }
  var tS = e.i(628974);
  let tC = (0, tS.cn)("frosted-interactive rounded-(--control-r)", "flex cursor-pointer items-center justify-center", "text-text-white outline-hidden", "focus-visible:ring-2 focus-visible:ring-blue-500"),
    tA = (0, tS.cn)(tC, "aspect-square h-full shrink-0"),
    tM = "shrink-0 font-body text-button text-text-white tabular-nums max-tablet:@max-[480px]:text-[0.8rem]";
  function tj({
    ended: e,
    paused: t
  }) {
    return e ? (0, r.jsx)(tx, {
      className: "size-(--icon-md)"
    }) : t ? (0, r.jsx)(tw, {
      className: "size-(--icon-md)"
    }) : (0, r.jsx)(ty, {
      className: "size-(--icon-md)"
    });
  }
  function tE({
    onExpand: e
  }) {
    return (0, r.jsxs)(eU.Root, {
      "data-controls": "",
      className: (0, tS.cn)("pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-end p-(--control-pad)", "opacity-0 transition-opacity duration-200 ease-out data-visible:opacity-100", "[--control-pad:var(--pad-sm)] tablet:[--control-pad:clamp(var(--pad-xs),2.22cqw,var(--pad-xl))]", "[--control-h:3.2rem] tablet:[--control-h:5rem]", "in-data-compact:[--control-h:calc(3.2rem/var(--pip-scale,1))]", "[--icon-lg:calc(var(--control-h)*0.42)] [--icon-md:calc(var(--control-h)*0.36)] [--icon-sm:calc(var(--control-h)*0.26)]", "[--icon-xl:calc(var(--control-h)*0.6)]", "[--control-r:calc(var(--control-h)*0.32)]", "[--pill-gap:calc(var(--control-h)*0.3)] [--pill-px:calc(var(--control-h)*0.44)]"),
      children: [(0, r.jsx)(eW, {
        className: (0, tS.cn)(tC, "pointer-events-auto absolute top-(--control-pad) right-(--control-pad) tablet:hidden size-(--control-h)", "data-[availability=unavailable]:hidden data-[availability=unsupported]:hidden"),
        render: e => (0, r.jsx)("button", {
          ...e,
          children: (0, r.jsx)(tv, {
            className: "size-(--icon-xl)"
          })
        })
      }), e && (0, r.jsx)("button", {
        type: "button",
        "aria-label": "Back to fullscreen",
        onClick: e,
        className: (0, tS.cn)(tC, "pointer-events-auto absolute top-(--control-pad) right-(--control-pad)", "tablet:@max-[480px]:flex hidden size-(--control-h)"),
        children: (0, r.jsx)(tv, {
          className: "size-(--icon-xl)"
        })
      }), (0, r.jsx)(eZ, {
        className: (0, tS.cn)(tC, "pointer-events-auto absolute top-1/2 left-1/2 hidden size-(--control-h)", "in-data-compact:flex -translate-x-1/2 -translate-y-1/2"),
        render: (e, t) => (0, r.jsx)("button", {
          ...e,
          children: (0, r.jsx)(tj, {
            ended: t.ended,
            paused: t.paused
          })
        })
      }), (0, r.jsxs)(eU.Group, {
        "aria-label": "Playback controls",
        className: "pointer-events-auto flex in-data-compact:hidden h-(--control-h) w-full tablet:max-w-184.75 items-center gap-0 tablet:gap-gap-md",
        children: [(0, r.jsxs)("div", {
          className: "flex h-full min-w-0 flex-1 items-center",
          children: [(0, r.jsx)(eZ, {
            className: tA,
            render: (e, t) => (0, r.jsx)("button", {
              ...e,
              children: (0, r.jsx)(tj, {
                ended: t.ended,
                paused: t.paused
              })
            })
          }), (0, r.jsxs)("div", {
            className: (0, tS.cn)("frosted rounded-(--control-r)", "flex h-full min-w-0 flex-1 items-center gap-(--pill-gap) px-(--pill-px)"),
            children: [(0, r.jsx)(e6.Value, {
              type: "current",
              className: tM,
              render: (e, t) => (0, r.jsx)("time", {
                ...e,
                children: (0, tS.formatTime)(t.seconds)
              })
            }), (0, r.jsxs)(tb.Root, {
              className: "group/seek relative flex h-5 min-w-0 flex-1 cursor-pointer items-center",
              children: [(0, r.jsx)(tb.Track, {
                className: "relative h-[0.371rem] w-full rounded-full bg-white-alpha-200",
                children: (0, r.jsx)(tb.Fill, {
                  className: "absolute inset-y-0 left-0 w-(--media-slider-fill) rounded-full bg-text-white"
                })
              }), (0, r.jsx)(tb.Thumb, {
                className: (0, tS.cn)("absolute left-(--media-slider-fill) size-3 -translate-x-1/2 rounded-full bg-text-white outline-hidden", "scale-0 transition-transform duration-150 group-data-interactive/seek:scale-100", "group-data-dragging/seek:left-(--media-slider-pointer) group-data-dragging/seek:scale-110", "focus-visible:scale-100 focus-visible:ring-2 focus-visible:ring-blue-500")
              })]
            }), (0, r.jsx)(e6.Value, {
              type: "duration",
              className: tM,
              render: (e, t) => (0, r.jsx)("time", {
                ...e,
                children: (0, tS.formatTime)(t.seconds)
              })
            })]
          }), (0, r.jsx)(eK, {
            className: tA,
            render: (e, t) => (0, r.jsx)("button", {
              ...e,
              children: "off" === t.volumeLevel ? (0, r.jsx)(tk, {
                className: "size-(--icon-lg)"
              }) : (0, r.jsx)(tP, {
                className: "size-(--icon-lg)"
              })
            })
          })]
        }), (0, r.jsx)(eD, {
          className: (0, tS.cn)(tA, "data-active:bg-surface-button-secondary data-active:text-text-primary", "data-active:supports-hover:hover:bg-surface-tertiary", "data-active:supports-hover:hover:text-text-tertiary", "tablet:@max-[480px]:hidden data-[availability=unavailable]:hidden"),
          render: (e, t) => (0, r.jsx)("button", {
            ...e,
            children: (0, r.jsx)("span", {
              className: (0, tS.cn)("font-body text-button leading-none transition-opacity", "max-tablet:@max-[480px]:text-[0.8rem]", !t.subtitlesShowing && "opacity-45"),
              children: "CC"
            })
          })
        })]
      })]
    });
  }
  let tT = (t = {
    features: ev
  }, {
    Provider: function ({
      children: e
    }) {
      let [a] = (0, n.useState)(() => ((e, t = {}) => {
          let r,
            n = null,
            a = !1,
            l = new AbortController(),
            s = new S(),
            o = e.state({
              target: () => (a && M(), n || A(), n),
              signals: s,
              get: () => r.current,
              set: e => r.patch(e)
            });
          r = N(o);
          let u = {
            [V]: !0,
            get $state() {
              return r;
            },
            get target() {
              return n;
            },
            get destroyed() {
              return a;
            },
            get state() {
              return r.current;
            },
            attach: function (i) {
              a && M(), s.reset(), n = i;
              let l = {
                target: i,
                signal: s.base,
                get: () => r.current,
                set: e => r.patch(e),
                reportError: p,
                store: {
                  get state() {
                    return r.current;
                  },
                  subscribe: d
                }
              };
              try {
                e.attach?.(l);
              } catch (e) {
                p(e);
              }
              try {
                t.onAttach?.({
                  store: u,
                  target: i,
                  signal: s.base
                });
              } catch (e) {
                p(e);
              }
              return c;
            },
            destroy: function () {
              a || (a = !0, c(), l.abort());
            },
            subscribe: d
          };
          for (let e of Object.keys(o)) Object.defineProperty(u, e, {
            get: () => r.current[e],
            enumerable: !0
          });
          try {
            t.onSetup?.({
              store: u,
              signal: l.signal
            });
          } catch (e) {
            p(e);
          }
          return u;
          function c() {
            i(n) || (s.reset(), n = null, r.patch(o));
          }
          function d(e, t) {
            return r.subscribe(e, t);
          }
          function p(e) {
            t.onError ? t.onError({
              store: u,
              error: e
            }) : console.error("[vjs-store]", e);
          }
        })(function (...e) {
          return {
            state: t => Object.assign({}, ...e.map(e => e.state(t))),
            attach: t => {
              for (let r of e) try {
                r.attach?.(t);
              } catch (e) {
                t.reportError(e);
              }
            }
          };
        }(...t.features))),
        [l] = (0, n.useState)(() => {
          let e;
          return e = null, {
            open(t) {
              e !== t && (e?.close("group-open"), e = t);
            },
            close(t) {
              e === t && (e = null);
            }
          };
        }),
        [s, o] = (0, n.useState)(null),
        [u, c] = (0, n.useState)(null);
      return k(a), (0, n.useEffect)(() => {
        if (s) return a.attach({
          media: s,
          container: u
        });
      }, [s, u, a]), (0, r.jsx)(v, {
        value: {
          store: a,
          media: s,
          setMedia: o,
          container: u,
          setContainer: c,
          popupGroup: l
        },
        children: e
      });
    },
    Container: x,
    usePlayer: function (e) {
      let {
        store: t
      } = y();
      return g(t, e);
    },
    useMedia: function () {
      let {
        media: e
      } = y();
      return e;
    }
  });
  e.s(["default", 0, function ({
    src: e,
    vtt: t,
    autoPlay: a,
    ref: i,
    posterSrc: l,
    onExpand: s,
    onEnded: o
  }) {
    let c = (0, n.useRef)(null),
      d = u(i, c);
    return (0, n.useEffect)(() => {
      if (!a) return;
      let e = c.current;
      if (!e) return;
      let t = !1,
        r = () => {
          e.muted = !1;
        };
      return (async () => {
        e.muted = !1;
        try {
          await e.play();
          return;
        } catch {}
        if (!t) {
          e.muted = !0;
          try {
            await e.play();
          } catch {
            return;
          }
          window.addEventListener("pointerdown", r, {
            once: !0
          }), window.addEventListener("keydown", r, {
            once: !0
          });
        }
      })(), () => {
        t = !0, window.removeEventListener("pointerdown", r), window.removeEventListener("keydown", r);
      };
    }, [a, e]), (0, r.jsx)(tT.Provider, {
      children: (0, r.jsxs)(tT.Container, {
        className: (0, tS.cn)("@container relative size-full overflow-hidden", "[--caption-y:-0.8rem] tablet:[--caption-y:-1.2rem]", "has-[[data-controls][data-visible]]:[--caption-y:-5.6rem]", "tablet:has-[[data-controls][data-visible]]:[--caption-y:-8.4rem]", "[--caption-leading:1.15]", "[--caption-size:1.12rem] tablet:[--caption-size:1.6rem]", "[&_video::-webkit-media-text-track-container]:[translate:0_var(--caption-y)]", "[&_video::-webkit-media-text-track-container]:[opacity:var(--caption-opacity,1)]", "[&_video::-webkit-media-text-track-container]:[transition:translate_200ms_ease-out,opacity_200ms_ease-out]", "[&_video::-webkit-media-text-track-container]:[line-height:var(--caption-leading)]", "[&_video::-webkit-media-text-track-display]:[line-height:var(--caption-leading)]"),
        children: [(0, r.jsx)(ey, {
          ref: d,
          src: e,
          preload: "metadata",
          playsInline: !0,
          className: "size-full object-cover",
          poster: l,
          onEnded: o,
          children: t && (0, r.jsx)("track", {
            src: t,
            kind: "captions",
            srcLang: "en",
            label: "English",
            default: !0
          })
        }), (0, r.jsx)(tE, {
          onExpand: s
        })]
      })
    });
  }], 701503);
};
