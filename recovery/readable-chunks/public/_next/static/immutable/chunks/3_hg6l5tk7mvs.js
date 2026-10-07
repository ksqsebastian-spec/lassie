;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "b13d671b-466e-bd1f-0027-7dd6d87bc805";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    726125,
    (t, e, a)=>{
        window;
        e.exports = (()=>{
            const t = [
                (t, e, a)=>{
                    "use strict";
                    a.r(e);
                    e.default = typeof fetch === "function" ? fetch.bind() : (t, e)=>{
                        e = e || {};
                        return new Promise((resolve, reject)=>{
                            const i = new XMLHttpRequest;
                            i.open(e.method || "get", t, true);
                            for(const r in e.headers){
                                i.setRequestHeader(r, e.headers[r]);
                            }
                            i.withCredentials = e.credentials == "include";
                            i.onload = ()=>{
                                resolve(function clone() {
                                    let e;
                                    const a = [];
                                    const n = [];
                                    const r = {};
                                    i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (t, i, o)=>{
                                        a.push(i = i.toLowerCase());
                                        n.push([
                                            i,
                                            o
                                        ]);
                                        e = r[i];
                                        r[i] = e ? e + "," + o : o;
                                    });
                                    return {
                                        ok: (i.status / 100 | 0) == 2,
                                        status: i.status,
                                        statusText: i.statusText,
                                        url: i.responseURL,
                                        clone,
                                        text () {
                                            return Promise.resolve(i.responseText);
                                        },
                                        json () {
                                            return Promise.resolve(i.responseText).then(JSON.parse);
                                        },
                                        blob () {
                                            return Promise.resolve(new Blob([
                                                i.response
                                            ]));
                                        },
                                        headers: {
                                            keys () {
                                                return a;
                                            },
                                            entries () {
                                                return n;
                                            },
                                            get (t) {
                                                return r[t.toLowerCase()];
                                            },
                                            has (t) {
                                                return t.toLowerCase() in r;
                                            }
                                        }
                                    };
                                }());
                            };
                            i.onerror = reject;
                            i.send(e.body);
                        });
                    };
                },
                (t, e, a)=>{
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: true
                    });
                    const n = (()=>{
                        function t(t, e) {
                            for(let a = 0; a < e.length; a++){
                                const n = e[a];
                                n.enumerable = n.enumerable || false;
                                n.configurable = true;
                                if ("value" in n) {
                                    n.writable = true;
                                }
                                Object.defineProperty(t, n.key, n);
                            }
                        }
                        return (e, a, n)=>{
                            if (a) {
                                t(e.prototype, a);
                            }
                            if (n) {
                                t(e, n);
                            }
                            return e;
                        };
                    })();
                    e.default = (()=>{
                        function t(e, a) {
                            !((t, e)=>{
                                if (!(t instanceof e)) {
                                    throw TypeError("Cannot call a class as a function");
                                }
                            })(this, t);
                            this.pluginName = e;
                        }
                        n(t, [
                            {
                                key: "track",
                                value (t, e) {
                                    window.analytics.track(t, e, {
                                        integration: {
                                            name: this.pluginName
                                        }
                                    });
                                }
                            }
                        ]);
                        return t;
                    })();
                },
                (t, e, a)=>{
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: true
                    });
                    e.YouTubeAnalytics = e.VimeoAnalytics = undefined;
                    const n = r(a(3));
                    const i = r(a(4));
                    function r(t) {
                        if (t && t.__esModule) {
                            return t;
                        }
                        return {
                            default: t
                        };
                    }
                    e.VimeoAnalytics = n.default;
                    e.YouTubeAnalytics = i.default;
                },
                (t, e, a)=>{
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: true
                    });
                    const n = (()=>{
                        function t(t, e) {
                            for(let a = 0; a < e.length; a++){
                                const n = e[a];
                                n.enumerable = n.enumerable || false;
                                n.configurable = true;
                                if ("value" in n) {
                                    n.writable = true;
                                }
                                Object.defineProperty(t, n.key, n);
                            }
                        }
                        return (e, a, n)=>{
                            if (a) {
                                t(e.prototype, a);
                            }
                            if (n) {
                                t(e, n);
                            }
                            return e;
                        };
                    })();
                    const i = r(a(0));
                    function r(t) {
                        if (t && t.__esModule) {
                            return t;
                        }
                        return {
                            default: t
                        };
                    }
                    e.default = ((t)=>{
                        function e(t, a) {
                            if (!(this instanceof e)) {
                                throw TypeError("Cannot call a class as a function");
                            }
                            const n = ((t, e)=>{
                                if (!t) {
                                    throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                }
                                if (e && (typeof e === "object" || typeof e === "function")) {
                                    return e;
                                }
                                return t;
                            })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "VimeoAnalytics"));
                            n.authToken = a;
                            n.player = t;
                            n.metadata = {
                                content: {},
                                playback: {
                                    videoPlayer: "Vimeo"
                                }
                            };
                            n.mostRecentHeartbeat = 0;
                            n.isPaused = false;
                            return n;
                        }
                        ((t, e)=>{
                            if (typeof e !== "function" && e !== null) {
                                throw TypeError(`Super expression must either be null or a function, not ${typeof e}`);
                            }
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: false,
                                    writable: true,
                                    configurable: true
                                }
                            });
                            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
                        })(e, t);
                        n(e, [
                            {
                                key: "initialize",
                                value () {
                                    const t = this;
                                    const e = {
                                        loaded: this.retrieveMetadata,
                                        play: this.trackPlay,
                                        pause: this.trackPause,
                                        ended: this.trackEnded,
                                        timeupdate: this.trackHeartbeat
                                    };
                                    for(const a in e){
                                        this.registerHandler(a, e[a]);
                                    }
                                    this.player.getVideoId().then((id)=>{
                                        t.retrieveMetadata({
                                            id
                                        });
                                    }).catch(console.error);
                                }
                            },
                            {
                                key: "registerHandler",
                                value (t, e) {
                                    const a = this;
                                    this.player.on(t, (t)=>{
                                        a.updateMetadata(t);
                                        e.call(a, t);
                                    });
                                }
                            },
                            {
                                key: "trackPlay",
                                value () {
                                    if (this.isPaused) {
                                        this.track("Video Playback Resumed", this.metadata.playback);
                                        this.isPaused = false;
                                    } else {
                                        this.track("Video Playback Started", this.metadata.playback);
                                        this.track("Video Content Started", this.metadata.content);
                                    }
                                }
                            },
                            {
                                key: "trackEnded",
                                value () {
                                    this.track("Video Playback Completed", this.metadata.playback);
                                    this.track("Video Content Completed", this.metadata.content);
                                }
                            },
                            {
                                key: "trackHeartbeat",
                                value () {
                                    const mostRecentHeartbeat = this.mostRecentHeartbeat;
                                    const position = this.metadata.playback.position;
                                    if (position !== mostRecentHeartbeat && position - mostRecentHeartbeat >= 10) {
                                        this.track("Video Content Playing", this.metadata.content);
                                        this.mostRecentHeartbeat = Math.floor(position);
                                    }
                                }
                            },
                            {
                                key: "trackPause",
                                value () {
                                    this.isPaused = true;
                                    this.track("Video Playback Paused", this.metadata.playback);
                                }
                            },
                            {
                                key: "retrieveMetadata",
                                value (t) {
                                    const e = this;
                                    return new Promise((resolve, reject)=>{
                                        const r = t.id;
                                        i.default("https://api.vimeo.com/videos/" + r, {
                                            headers: {
                                                Authorization: "Bearer " + e.authToken
                                            }
                                        }).then((t)=>{
                                            if (t.ok) {
                                                return t.json();
                                            }
                                            return reject(t);
                                        }).then((t)=>{
                                            e.metadata.content.title = t.name;
                                            e.metadata.content.description = t.description;
                                            e.metadata.content.publisher = t.user.name;
                                            e.metadata.playback.position = 0;
                                            e.metadata.playback.totalLength = t.duration;
                                        }).catch((t)=>{
                                            console.error("Request to Vimeo API Failed with: ", t);
                                            return reject(t);
                                        });
                                    });
                                }
                            },
                            {
                                key: "updateMetadata",
                                value (t) {
                                    const e = this;
                                    return new Promise((resolve, reject)=>{
                                        e.player.getVolume().then((n)=>{
                                            if (n) {
                                                e.metadata.playback.sound = 100 * n;
                                            }
                                            e.metadata.playback.position = t.seconds;
                                            resolve();
                                        }).catch(reject);
                                    });
                                }
                            }
                        ]);
                        return e;
                    })(r(a(1)).default);
                },
                (t, e, a)=>{
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: true
                    });
                    const n = (()=>{
                        function t(t, e) {
                            for(let a = 0; a < e.length; a++){
                                const n = e[a];
                                n.enumerable = n.enumerable || false;
                                n.configurable = true;
                                if ("value" in n) {
                                    n.writable = true;
                                }
                                Object.defineProperty(t, n.key, n);
                            }
                        }
                        return (e, a, n)=>{
                            if (a) {
                                t(e.prototype, a);
                            }
                            if (n) {
                                t(e, n);
                            }
                            return e;
                        };
                    })();
                    const i = r(a(0));
                    function r(t) {
                        if (t && t.__esModule) {
                            return t;
                        }
                        return {
                            default: t
                        };
                    }
                    e.default = ((t)=>{
                        function e(t, a) {
                            if (!(this instanceof e)) {
                                throw TypeError("Cannot call a class as a function");
                            }
                            const n = ((t, e)=>{
                                if (!t) {
                                    throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                }
                                if (e && (typeof e === "object" || typeof e === "function")) {
                                    return e;
                                }
                                return t;
                            })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, "YoutubeAnalytics"));
                            n.player = t;
                            n.apiKey = a;
                            n.playerLoaded = false;
                            n.playbackStarted = false;
                            n.contentStarted = false;
                            n.isPaused = false;
                            n.isBuffering = false;
                            n.isSeeking = false;
                            n.lastRecordedTime = {
                                timeReported: Date.now(),
                                timeElapsed: 0
                            };
                            n.metadata = [
                                {
                                    playback: {
                                        video_player: "youtube"
                                    },
                                    content: {}
                                }
                            ];
                            n.playlistIndex = 0;
                            return n;
                        }
                        ((t, e)=>{
                            if (typeof e !== "function" && e !== null) {
                                throw TypeError(`Super expression must either be null or a function, not ${typeof e}`);
                            }
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: false,
                                    writable: true,
                                    configurable: true
                                }
                            });
                            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
                        })(e, t);
                        n(e, [
                            {
                                key: "initialize",
                                value () {
                                    window.segmentYoutubeOnStateChange = this.onPlayerStateChange.bind(this);
                                    window.segmentYoutubeOnReady = this.onPlayerReady.bind(this);
                                    this.player.addEventListener("onReady", "segmentYoutubeOnReady");
                                    this.player.addEventListener("onStateChange", "segmentYoutubeOnStateChange");
                                }
                            },
                            {
                                key: "onPlayerReady",
                                value (t) {
                                    this.retrieveMetadata();
                                }
                            },
                            {
                                key: "onPlayerStateChange",
                                value (t) {
                                    const e = this.player.getCurrentTime();
                                    if (this.metadata[this.playlistIndex]) {
                                        this.metadata[this.playlistIndex].playback.position = this.metadata[this.playlistIndex].content.position = e;
                                        this.metadata[this.playlistIndex].playback.quality = this.player.getPlaybackQuality();
                                        this.metadata[this.playlistIndex].playback.sound = this.player.isMuted() ? 0 : this.player.getVolume();
                                    }
                                    switch(t.data){
                                        case -1:
                                            if (this.playerLoaded) {
                                                break;
                                            }
                                            this.retrieveMetadata();
                                            this.playerLoaded = true;
                                            break;
                                        case YT.PlayerState.BUFFERING:
                                            this.handleBuffer();
                                            break;
                                        case YT.PlayerState.PLAYING:
                                            this.handlePlay();
                                            break;
                                        case YT.PlayerState.PAUSED:
                                            this.handlePause();
                                            break;
                                        case YT.PlayerState.ENDED:
                                            this.handleEnd();
                                    }
                                    this.lastRecordedTime = {
                                        timeReported: Date.now(),
                                        timeElapsed: 1000 * this.player.getCurrentTime()
                                    };
                                }
                            },
                            {
                                key: "retrieveMetadata",
                                value () {
                                    const t = this;
                                    return new Promise((resolve, reject)=>{
                                        const n = t.player.getVideoData();
                                        const r = t.player.getPlaylist() || [
                                            n.video_id
                                        ];
                                        const o = r.join();
                                        i.default("https://www.googleapis.com/youtube/v3/videos?id=" + o + "&part=snippet,contentDetails&key=" + t.apiKey).then((t)=>{
                                            if (!t.ok) {
                                                const e = Error("Segment request to Youtube API failed (likely due to a bad API Key. Events will still be sent but will not contain video metadata)");
                                                e.response = t;
                                                throw e;
                                            }
                                            return t.json();
                                        }).then((a)=>{
                                            t.metadata = [];
                                            let total_length = 0;
                                            for(var i = 0; i < r.length; i++){
                                                const o = a.items[i];
                                                t.metadata.push({
                                                    content: {
                                                        title: o.snippet.title,
                                                        description: o.snippet.description,
                                                        keywords: o.snippet.tags,
                                                        channel: o.snippet.channelTitle,
                                                        airdate: o.snippet.publishedAt
                                                    }
                                                });
                                                total_length += ((t)=>{
                                                    let e = t.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
                                                    return 3600 * (parseInt((e = e.slice(1).map((t)=>{
                                                        if (t != null) {
                                                            return t.replace(/\D/, "");
                                                        }
                                                    }))[0]) || 0) + 60 * (parseInt(e[1]) || 0) + (parseInt(e[2]) || 0);
                                                })(o.contentDetails.duration);
                                            }
                                            for(i = 0; i < r.length; i++){
                                                t.metadata[i].playback = {
                                                    total_length,
                                                    video_player: "youtube"
                                                };
                                            }
                                            resolve();
                                        }).catch((e)=>{
                                            t.metadata = r.map((t)=>({
                                                    playback: {
                                                        video_player: "youtube"
                                                    },
                                                    content: {}
                                                }));
                                            reject(e);
                                        });
                                    });
                                }
                            },
                            {
                                key: "handleBuffer",
                                value () {
                                    const t = this.determineSeek();
                                    if (!this.playbackStarted) {
                                        this.playbackStarted = true;
                                        this.track("Video Playback Started", this.metadata[this.playlistIndex].playback);
                                    }
                                    if (t && !this.isSeeking) {
                                        this.isSeeking = true;
                                        this.track("Video Playback Seek Started", this.metadata[this.playlistIndex].playback);
                                    }
                                    if (this.isSeeking) {
                                        this.track("Video Playback Seek Completed", this.metadata[this.playlistIndex].playback);
                                        this.isSeeking = false;
                                    }
                                    const e = this.player.getPlaylist();
                                    if (e && this.player.getCurrentTime() === 0 && this.player.getPlaylistIndex() !== this.playlistIndex) {
                                        this.contentStarted = false;
                                        if (this.playlistIndex === e.length - 1 && this.player.getPlaylistIndex() === 0) {
                                            this.track("Video Playback Completed", this.metadata[this.player.getPlaylistIndex()].playback);
                                            this.track("Video Playback Started", this.metadata[this.player.getPlaylistIndex()].playback);
                                        }
                                    }
                                    this.track("Video Playback Buffer Started", this.metadata[this.playlistIndex].playback);
                                    this.isBuffering = true;
                                }
                            },
                            {
                                key: "handlePlay",
                                value () {
                                    if (!this.contentStarted) {
                                        this.playlistIndex = this.player.getPlaylistIndex();
                                        if (-1 === this.playlistIndex) {
                                            this.playlistIndex = 0;
                                        }
                                        this.track("Video Content Started", this.metadata[this.playlistIndex].content);
                                        this.contentStarted = true;
                                    }
                                    if (this.isBuffering) {
                                        this.track("Video Playback Buffer Completed", this.metadata[this.playlistIndex].playback);
                                        this.isBuffering = false;
                                    }
                                    if (this.isPaused) {
                                        this.track("Video Playback Resumed", this.metadata[this.playlistIndex].playback);
                                        this.isPaused = false;
                                    }
                                }
                            },
                            {
                                key: "handlePause",
                                value () {
                                    const t = this.determineSeek();
                                    if (this.isBuffering) {
                                        this.track("Video Playback Buffer Completed", this.metadata[this.playlistIndex].playback);
                                        this.isBuffering = false;
                                    }
                                    this.isPaused || (t ? (this.track("Video Playback Seek Started", this.metadata[this.playlistIndex].playback), this.isSeeking = true) : (this.track("Video Playback Paused", this.metadata[this.playlistIndex].playback), this.isPaused = true));
                                }
                            },
                            {
                                key: "handleEnd",
                                value () {
                                    this.track("Video Content Completed", this.metadata[this.playlistIndex].content);
                                    this.contentStarted = false;
                                    const t = this.player.getPlaylistIndex();
                                    const e = this.player.getPlaylist();
                                    if (e && t === e.length - 1 || -1 === t) {
                                        this.track("Video Playback Completed", this.metadata[this.playlistIndex].playback);
                                        this.playbackStarted = false;
                                    }
                                }
                            },
                            {
                                key: "determineSeek",
                                value () {
                                    return Math.abs((this.isPaused || this.isBuffering ? 0 : Date.now() - this.lastRecordedTime.timeReported) - (1000 * this.player.getCurrentTime() - this.lastRecordedTime.timeElapsed)) > 2000;
                                }
                            }
                        ]);
                        return e;
                    })(r(a(1)).default);
                }
            ];
            const e = {};
            function a(i_1) {
                if (e[i_1]) {
                    return e[i_1].exports;
                }
                const i = e[i_1] = {
                    i: i_1,
                    l: false,
                    exports: {}
                };
                t[i_1].call(i.exports, i, i.exports, a);
                i.l = true;
                return i.exports;
            }
            a.m = t;
            a.c = e;
            a.d = (t, e, get)=>{
                if (!a.o(t, e)) {
                    Object.defineProperty(t, e, {
                        enumerable: true,
                        get
                    });
                }
            };
            a.r = (t)=>{
                if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    });
                }
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
            };
            a.t = (t, e)=>{
                if (1 & e) {
                    t = a(t);
                }
                if (8 & e || 4 & e && typeof t === "object" && t && t.__esModule) {
                    return t;
                }
                const n = Object.create(null);
                a.r(n);
                Object.defineProperty(n, "default", {
                    enumerable: true,
                    value: t
                });
                if (2 & e && typeof t !== "string") {
                    for(const i in t){
                        a.d(n, i, ((e)=>t[e]).bind(null, i));
                    }
                }
                return n;
            };
            a.n = (t)=>{
                const e = t && t.__esModule ? ()=>t.default : ()=>t;
                a.d(e, "a", e);
                return e;
            };
            a.o = (t, e)=>Object.prototype.hasOwnProperty.call(t, e);
            a.p = "";
            return a(a.s = 2);
        })();
    }
]);
