// Recovered from 3g2v9_2yb35qx.js. Runtime module IDs: 6590, 120979, 625400.
// This factory requires the original Turbopack runtime context.
export default e => {
  "use strict";

  var t = e.i(983871),
    i = e.i(631923),
    s = e.i(628974);
  let r = (e, t = "0% 0% 0% 0%") => `inset(${t} round ${e}px)`;
  class n {
    el;
    data;
    index;
    wrapper;
    frame;
    mask;
    video;
    poster;
    duration;
    durationLabel;
    recordingIcon;
    location;
    position = {
      x: 0,
      y: 0
    };
    size = {
      width: 0,
      height: 0
    };
    playheadFrame = 0;
    recordingBlink = null;
    maskRadius = n.MASK_RADIUS;
    constructor(e, t, i) {
      this.el = e, this.data = t, this.index = i, this.frame = (0, s.query)(e, "[data-story-frame]"), this.mask = (0, s.query)(this.frame, "[data-story-mask]"), this.video = (0, s.query)(this.frame, "video"), this.poster = (0, s.query)(this.frame, "[data-story-poster]"), this.duration = (0, s.query)(e, "[data-story-duration]"), this.durationLabel = (0, s.query)(this.duration, "[data-story-duration-label]"), this.recordingIcon = (0, s.query)(this.duration, "svg"), this.location = (0, s.query)(e, "[data-story-location]"), this.wrapper = (0, s.query)(e, "[data-story-wrapper]"), this.video.addEventListener("play", this.startPlayhead), this.video.addEventListener("pause", this.stopPlayhead), this.video.addEventListener("ended", this.stopPlayhead), this.video.addEventListener("playing", this.hidePoster), this.video.addEventListener("pause", this.showPoster), this.video.addEventListener("ended", this.showPoster);
    }
    startPlayhead = () => {
      !0 === this.data.enabled && (cancelAnimationFrame(this.playheadFrame), this.playheadFrame = requestAnimationFrame(this.tickPlayhead), this.recordingBlink?.kill(), this.recordingBlink = t.default.timeline().to(this.recordingIcon, {
        autoAlpha: 1,
        width: 7,
        marginRight: 8,
        duration: i.DURATION.fast,
        ease: i.EASE_OUT,
        overwrite: !0
      }).to(this.recordingIcon, {
        opacity: .5,
        duration: i.DURATION.medium,
        ease: i.EASE_IN_OUT,
        repeat: -1,
        yoyo: !0
      }));
    };
    tickPlayhead = () => {
      this.video.paused || (this.durationLabel.textContent = (0, s.formatPlayhead)(this.video.currentTime), this.playheadFrame = requestAnimationFrame(this.tickPlayhead));
    };
    stopPlayhead = () => {
      cancelAnimationFrame(this.playheadFrame), this.playheadFrame = 0, this.durationLabel.textContent = this.data.duration, this.recordingBlink?.kill(), this.recordingBlink = null, t.default.to(this.recordingIcon, {
        autoAlpha: 0,
        width: 0,
        marginRight: 0,
        duration: i.DURATION.fast,
        ease: i.EASE_OUT,
        overwrite: !0
      });
    };
    hidePoster = () => {
      this.el.dataset.playing = "true";
    };
    showPoster = () => {
      this.el.dataset.playing = "false";
    };
    static get MASK_RADIUS() {
      return 16;
    }
    setActive(e) {
      this.el.dataset.active = String(e);
    }
    set zIndex(e) {
      this.el.style.zIndex = e;
    }
    set opacity(e) {
      this.el.style.opacity = String(e);
    }
    playVideo() {
      this.video.paused && (this.video.currentTime = 0, this.video.play().catch(() => {}));
    }
    pauseVideo(e = !0) {
      e && (this.video.currentTime = 0), this.video.pause();
    }
    setSize(e, s, r = !0) {
      if (this.size.width = e, this.size.height = s, !r) {
        t.default.killTweensOf(this.el, "width,height"), this.el.style.width = `${e}px`, this.el.style.height = `${s}px`;
        return;
      }
      t.default.to(this.el, {
        width: e,
        height: s,
        duration: i.DURATION.slow,
        ease: i.EASE_OUT,
        overwrite: "auto"
      });
    }
    applyTransform() {
      t.default.set(this.el, {
        x: this.position.x,
        y: this.position.y
      });
    }
    set x(e) {
      this.position.x = e, this.applyTransform();
    }
    get x() {
      return this.position.x;
    }
    set y(e) {
      this.position.y = e, this.applyTransform();
    }
    get y() {
      return this.position.y;
    }
    destroy() {
      cancelAnimationFrame(this.playheadFrame), this.video.removeEventListener("play", this.startPlayhead), this.video.removeEventListener("pause", this.stopPlayhead), this.video.removeEventListener("ended", this.stopPlayhead), this.video.removeEventListener("playing", this.hidePoster), this.video.removeEventListener("pause", this.showPoster), this.video.removeEventListener("ended", this.showPoster), this.recordingBlink?.kill(), this.recordingBlink = null, t.default.killTweensOf([this.el, this, this.mask, this.duration, this.recordingIcon, this.location]);
    }
  }
  e.s(["MASK_CLIP", 0, r, "StoryItem", 0, n], 6590);
  var o = e.i(990055),
    a = e.i(365280);
  class l {
    stories;
    constructor(e) {
      this.stories = e;
    }
    get items() {
      return this.stories.items;
    }
    get parked() {
      return this.items.filter(e => e !== this.stories.activeItem);
    }
    resize() {}
    destroy() {}
  }
  e.s(["StoriesView", 0, l], 120979);
  class h extends l {
    transitionIn(e) {
      window.addEventListener("keydown", this.onKeyDown), this.stories.track.setAttribute("inert", "");
      let t = this.expand();
      return t.call(() => {
        this.stories.onOpen(this.stories.activeStory.id), this.stories.activeItem.pauseVideo(!1), a.storiesStore.playerVisible && (this.stories.activeItem.opacity = 0);
      }), t;
    }
    transitionOut(e) {
      window.removeEventListener("keydown", this.onKeyDown), this.stories.track.removeAttribute("inert"), this.stories.onClose(), t.default.to(this.stories.overlay, {
        opacity: 0,
        duration: .65 * i.DURATION.slow,
        ease: i.EASE_IN_OUT,
        overwrite: !0
      });
    }
    static get rect() {
      return window.innerWidth >= o.BREAKPOINTS.tablet ? {
        width: window.innerWidth - 60,
        height: window.innerHeight - 60,
        x: 30,
        y: 30,
        radius: 32
      } : {
        width: window.innerWidth - 32,
        height: (window.innerWidth - 32) * .562,
        x: 16,
        y: window.innerHeight - (window.innerWidth - 32) * .562 - 16,
        radius: n.MASK_RADIUS
      };
    }
    expand() {
      let e = this.stories.activeItem,
        s = h.rect;
      e.zIndex = "10";
      let n = t.default.timeline({});
      return n.to(this.stories.overlay, {
        opacity: 1,
        duration: 1.3 * i.DURATION.slow,
        ease: i.EASE_OUT,
        overwrite: !0
      }, 0), n.fromTo(e.mask, {
        clipPath: r(e.maskRadius)
      }, {
        clipPath: r(s.radius),
        duration: 1.3 * i.DURATION.slow,
        ease: i.EASE_IN_OUT,
        overwrite: !0
      }, 0), n.to([e.duration, e.location], {
        opacity: 0,
        duration: i.DURATION.fast
      }, 0), n.to(e.el, {
        width: s.width,
        height: s.height,
        duration: 1.3 * i.DURATION.slow,
        ease: i.EASE_IN_OUT,
        overwrite: "auto"
      }, 0), n.to(e, {
        x: s.x,
        y: s.y,
        duration: 1.3 * i.DURATION.slow,
        ease: i.EASE_IN_OUT,
        overwrite: !0
      }, 0), n.to(this.parked.map(e => e.el), {
        opacity: 0,
        duration: i.DURATION.slow,
        ease: i.EASE_OUT
      }, 0), e.size = {
        width: s.width,
        height: s.height
      }, e.maskRadius = s.radius, a.storiesStore.anchor = s, n;
    }
    close = () => {
      this.stories.onClose();
    };
    onKeyDown = e => {
      "Escape" === e.key && this.close();
    };
    resize() {
      let e = this.stories.activeItem,
        t = h.rect;
      e.setSize(t.width, t.height, !1), e.x = t.x, e.y = t.y, a.storiesStore.anchor = t;
    }
    destroy() {
      window.removeEventListener("keydown", this.onKeyDown), this.stories.track.removeAttribute("inert");
    }
  }
  e.s(["StoriesFullscreenView", 0, h], 625400);
};
