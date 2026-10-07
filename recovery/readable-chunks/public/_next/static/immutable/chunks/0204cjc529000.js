;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "7ecfa3d5-d243-1aeb-1992-65c11ae509e6";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    811468,
    (e)=>{
        "use strict";
        e.s([
            "cullingMixin",
            0,
            {
                cullArea: null,
                cullable: false,
                cullableChildren: true
            }
        ]);
    },
    893661,
    (e)=>{
        "use strict";
        e.s([
            "FilterEffect",
            0,
            class {
                constructor(){
                    this.pipe = "filter";
                    this.priority = 1;
                }
                destroy() {
                    for(let e = 0; e < this.filters.length; e++){
                        this.filters[e].destroy();
                    }
                    this.filters = null;
                    this.filterArea = null;
                }
            }
        ]);
    },
    490249,
    (e)=>{
        "use strict";
        e.s([
            "ObservablePoint",
            0,
            class e {
                constructor(e, t, i){
                    this._x = t || 0;
                    this._y = i || 0;
                    this._observer = e;
                }
                clone(t) {
                    return new e(t ?? this._observer, this._x, this._y);
                }
                set(e = 0, t = e) {
                    if (this._x !== e || this._y !== t) {
                        this._x = e;
                        this._y = t;
                        this._observer._onUpdate(this);
                    }
                    return this;
                }
                copyFrom(e) {
                    if (this._x !== e.x || this._y !== e.y) {
                        this._x = e.x;
                        this._y = e.y;
                        this._observer._onUpdate(this);
                    }
                    return this;
                }
                copyTo(e) {
                    e.set(this._x, this._y);
                    return e;
                }
                equals(e) {
                    return e.x === this._x && e.y === this._y;
                }
                toString() {
                    return `[pixi.js/math:ObservablePoint x=${this._x} y=${this._y} scope=${this._observer}]`;
                }
                get x() {
                    return this._x;
                }
                set x(e) {
                    if (this._x !== e) {
                        this._x = e;
                        this._observer._onUpdate(this);
                    }
                }
                get y() {
                    return this._y;
                }
                set y(e) {
                    if (this._y !== e) {
                        this._y = e;
                        this._observer._onUpdate(this);
                    }
                }
            }
        ]);
    },
    688761,
    (e)=>{
        "use strict";
        let t = {
            normal: 0,
            add: 1,
            multiply: 2,
            screen: 3,
            overlay: 4,
            erase: 5,
            "normal-npm": 6,
            "add-npm": 7,
            "screen-npm": 8,
            min: 9,
            max: 10
        };
        let i = class e {
            constructor(){
                this.data = 0;
                this.blendMode = "normal";
                this.polygonOffset = 0;
                this.blend = true;
                this.depthMask = true;
            }
            get blend() {
                return !!(1 & this.data);
            }
            set blend(e) {
                if (!!(1 & this.data) !== e) {
                    this.data ^= 1;
                }
            }
            get offsets() {
                return !!(2 & this.data);
            }
            set offsets(e) {
                if (!!(2 & this.data) !== e) {
                    this.data ^= 2;
                }
            }
            set cullMode(e) {
                if (e === "none") {
                    this.culling = false;
                    return;
                }
                this.culling = true;
                this.clockwiseFrontFace = e === "front";
            }
            get cullMode() {
                if (this.culling) {
                    if (this.clockwiseFrontFace) {
                        return "front";
                    }
                    return "back";
                }
                return "none";
            }
            get culling() {
                return !!(4 & this.data);
            }
            set culling(e) {
                if (!!(4 & this.data) !== e) {
                    this.data ^= 4;
                }
            }
            get depthTest() {
                return !!(8 & this.data);
            }
            set depthTest(e) {
                if (!!(8 & this.data) !== e) {
                    this.data ^= 8;
                }
            }
            get depthMask() {
                return !!(32 & this.data);
            }
            set depthMask(e) {
                if (!!(32 & this.data) !== e) {
                    this.data ^= 32;
                }
            }
            get clockwiseFrontFace() {
                return !!(16 & this.data);
            }
            set clockwiseFrontFace(e) {
                if (!!(16 & this.data) !== e) {
                    this.data ^= 16;
                }
            }
            get blendMode() {
                return this._blendMode;
            }
            set blendMode(e) {
                this.blend = e !== "none";
                this._blendMode = e;
                this._blendModeId = t[e] || 0;
            }
            get polygonOffset() {
                return this._polygonOffset;
            }
            set polygonOffset(e) {
                this.offsets = !!e;
                this._polygonOffset = e;
            }
            toString() {
                return `[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
            }
            static for2d() {
                let t = new e;
                t.depthTest = false;
                t.blend = true;
                return t;
            }
        };
        i.default2d = i.for2d();
        e.s([
            "State",
            0,
            i
        ]);
    },
    173156,
    (e)=>{
        "use strict";
        var t = e.i(787653);
        var i = e.i(78278);
        var s = e.i(317765);
        class r extends s.TextureSource {
            constructor(e){
                if (!e.resource) {
                    e.resource = t.DOMAdapter.get().createCanvas();
                }
                if (!e.width) {
                    e.width = e.resource.width;
                    if (!e.autoDensity) {
                        e.width /= e.resolution;
                    }
                }
                if (!e.height) {
                    e.height = e.resource.height;
                    if (!e.autoDensity) {
                        e.height /= e.resolution;
                    }
                }
                super(e);
                this.uploadMethodId = "image";
                this.autoDensity = e.autoDensity;
                this.resizeCanvas();
                this.transparent = !!e.transparent;
            }
            resizeCanvas() {
                if (this.autoDensity && "style" in this.resource) {
                    this.resource.style.width = `${this.width}px`;
                    this.resource.style.height = `${this.height}px`;
                }
                if (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) {
                    this.resource.width = this.pixelWidth;
                    this.resource.height = this.pixelHeight;
                }
            }
            resize(e = this.width, t = this.height, i = this._resolution) {
                let s = super.resize(e, t, i);
                if (s) {
                    this.resizeCanvas();
                }
                return s;
            }
            static test(e) {
                return globalThis.HTMLCanvasElement && e instanceof HTMLCanvasElement || globalThis.OffscreenCanvas && e instanceof OffscreenCanvas;
            }
            get context2D() {
                return this._context2D || (this._context2D = this.resource.getContext("2d"));
            }
        }
        r.extension = i.ExtensionType.TextureSource;
        e.s([
            "CanvasSource",
            0,
            r
        ]);
    },
    275576,
    654713,
    624539,
    519821,
    316272,
    929953,
    247016,
    901548,
    629041,
    544996,
    (e)=>{
        "use strict";
        var t = e.i(263524);
        var i = e.i(222735);
        var s = e.i(811468);
        var r = e.i(78278);
        var n = e.i(389474);
        var h = e.i(42515);
        var l = e.i(490249);
        var o = e.i(733705);
        var a = e.i(727905);
        var d = e.i(562140);
        var u = e.i(765480);
        var c = e.i(873469);
        var p = e.i(555925);
        var f = e.i(779427);
        var _ = e.i(710158);
        var g = e.i(426307);
        var x = e.i(786234);
        var m = e.i(997125);
        var b = e.i(453549);
        var C = e.i(512583);
        var y = e.i(256924);
        function T(e, t, i) {
            t.clear();
            if (!i) {
                i = n.Matrix.IDENTITY;
            }
            (function e(t, i, s, r, h) {
                let l;
                if (h) {
                    l = y.matrixPool.get();
                    l = s.copyTo(l);
                } else {
                    if (!t.visible || !t.measurable) {
                        return;
                    }
                    t.updateLocalTransform();
                    let e = t.localTransform;
                    (l = y.matrixPool.get()).appendFrom(e, s);
                }
                let o = i;
                let a = !!t.effects.length;
                if (a) {
                    i = y.boundsPool.get().clear();
                }
                if (t.boundsArea) {
                    i.addRect(t.boundsArea, l);
                } else {
                    if (t.renderPipeId) {
                        i.matrix = l;
                        i.addBounds(t.bounds);
                    }
                    let s = t.children;
                    for(let t = 0; t < s.length; t++){
                        e(s[t], i, l, r, false);
                    }
                }
                if (a) {
                    for(let e = 0; e < t.effects.length; e++){
                        t.effects[e].addLocalBounds?.(i, r);
                    }
                    o.addBounds(i, n.Matrix.IDENTITY);
                    y.boundsPool.return(i);
                }
                y.matrixPool.return(l);
            })(e, t, i, e, true);
            if (!t.isValid) {
                t.set(0, 0, 0, 0);
            }
            return t;
        }
        function v(e, t) {
            let e_children = e.children;
            for(let e = 0; e < e_children.length; e++){
                let child = e_children[e];
                let r = child.uid;
                let n = (65535 & child._didViewChangeTick) << 16 | 65535 & child._didContainerChangeTick;
                let h = t.index;
                if (t.data[h] !== r || t.data[h + 1] !== n) {
                    t.data[t.index] = r;
                    t.data[t.index + 1] = n;
                    t.didChange = true;
                }
                t.index = h + 2;
                if (child.children.length) {
                    v(child, t);
                }
            }
            return t.didChange;
        }
        e.s([
            "getLocalBounds",
            0,
            T
        ], 654713);
        e.s([
            "checkChildrenDidChange",
            0,
            v
        ], 624539);
        let w = new n.Matrix;
        let G = {
            _localBoundsCacheId: -1,
            _localBoundsCacheData: null,
            _setWidth (e, t) {
                let i = Math.sign(this.scale.x) || 1;
                if (t !== 0) {
                    this.scale.x = e / t * i;
                } else {
                    this.scale.x = i;
                }
            },
            _setHeight (e, t) {
                let i = Math.sign(this.scale.y) || 1;
                if (t !== 0) {
                    this.scale.y = e / t * i;
                } else {
                    this.scale.y = i;
                }
            },
            getLocalBounds () {
                if (!this._localBoundsCacheData) {
                    this._localBoundsCacheData = {
                        data: [],
                        index: 1,
                        didChange: false,
                        localBounds: new b.Bounds
                    };
                }
                let _localBoundsCacheData = this._localBoundsCacheData;
                _localBoundsCacheData.index = 1;
                _localBoundsCacheData.didChange = false;
                if (_localBoundsCacheData.data[0] !== this._didViewChangeTick) {
                    _localBoundsCacheData.didChange = true;
                    _localBoundsCacheData.data[0] = this._didViewChangeTick;
                }
                v(this, _localBoundsCacheData);
                if (_localBoundsCacheData.didChange) {
                    T(this, _localBoundsCacheData.localBounds, w);
                }
                return _localBoundsCacheData.localBounds;
            },
            getBounds (e, t) {
                return C.getGlobalBounds(this, e, t || new b.Bounds);
            }
        };
        e.s([
            "measureMixin",
            0,
            G
        ], 519821);
        let R = {
            _onRender: null,
            set onRender (func){
                let e = this.renderGroup || this.parentRenderGroup;
                if (!func) {
                    this._onRender && e?.removeOnRender(this);
                    this._onRender = null;
                    return;
                }
                this._onRender || e?.addOnRender(this);
                this._onRender = func;
            },
            get onRender () {
                return this._onRender;
            }
        };
        e.s([
            "onRenderMixin",
            0,
            R
        ], 316272);
        let M = {
            _zIndex: 0,
            sortDirty: false,
            sortableChildren: false,
            get zIndex () {
                return this._zIndex;
            },
            set zIndex (value){
                if (this._zIndex === value) {
                    return;
                }
                this._zIndex = value;
                this.depthOfChildModified();
            },
            depthOfChildModified () {
                if (this.parent) {
                    this.parent.sortableChildren = true;
                    this.parent.sortDirty = true;
                }
                if (this.parentRenderGroup) {
                    this.parentRenderGroup.structureDidChange = true;
                }
            },
            sortChildren () {
                if (this.sortDirty) {
                    this.sortDirty = false;
                    this.children.sort(P);
                }
            }
        };
        function P(e, t) {
            return e._zIndex - t._zIndex;
        }
        e.s([
            "sortMixin",
            0,
            M
        ], 929953);
        var S = e.i(37554);
        let k = {
            getGlobalPosition (e = new S.Point, t = false) {
                if (this.parent) {
                    this.parent.toGlobal(this._position, e, t);
                } else {
                    e.x = this._position.x;
                    e.y = this._position.y;
                }
                return e;
            },
            toGlobal (e, t, i = false) {
                let s = this.getGlobalTransform(y.matrixPool.get(), i);
                t = s.apply(e, t);
                y.matrixPool.return(s);
                return t;
            },
            toLocal (e, t, i, s) {
                if (t) {
                    e = t.toGlobal(e, i, s);
                }
                let r = this.getGlobalTransform(y.matrixPool.get(), s);
                i = r.applyInverse(e, i);
                y.matrixPool.return(r);
                return i;
            }
        };
        e.s([
            "toLocalGlobalMixin",
            0,
            k
        ], 247016);
        var A = e.i(706848);
        var I = e.i(356566);
        var B = e.i(609932);
        var D = e.i(317765);
        var O = e.i(337654);
        var E = e.i(602699);
        let F = 0;
        class U {
            constructor(e){
                this._poolKeyHash = Object.create(null);
                this._texturePool = {};
                this.textureOptions = e || {};
                this.enableFullScreen = false;
                this.textureStyle = new E.TextureStyle(this.textureOptions);
            }
            createTexture(width, height, antialias, autoGenerateMipmaps) {
                let source = new D.TextureSource({
                    ...this.textureOptions,
                    width,
                    height,
                    resolution: 1,
                    antialias,
                    autoGarbageCollect: false,
                    autoGenerateMipmaps
                });
                return new O.Texture({
                    source,
                    label: `texturePool_${F++}`
                });
            }
            getOptimalTexture(e, t, i = 1, s, r = false) {
                let n = Math.ceil(e * i - 0.000001);
                let h = Math.ceil(t * i - 0.000001);
                n = I.nextPow2(n);
                let l = (n << 17) + ((h = I.nextPow2(h)) << 2) + (!!r << 1) + +!!s;
                if (!this._texturePool[l]) {
                    this._texturePool[l] = [];
                }
                let o = this._texturePool[l].pop();
                if (!o) {
                    o = this.createTexture(n, h, s, r);
                }
                o.source._resolution = i;
                o.source.width = n / i;
                o.source.height = h / i;
                o.source.pixelWidth = n;
                o.source.pixelHeight = h;
                o.frame.x = 0;
                o.frame.y = 0;
                o.frame.width = e;
                o.frame.height = t;
                o.updateUvs();
                this._poolKeyHash[o.uid] = l;
                return o;
            }
            getSameSizeTexture(e, t = false) {
                let e_source = e.source;
                return this.getOptimalTexture(e.width, e.height, e_source._resolution, t);
            }
            returnTexture(e, t = false) {
                let i = this._poolKeyHash[e.uid];
                if (t) {
                    e.source.style = this.textureStyle;
                }
                this._texturePool[i].push(e);
            }
            clear(e) {
                if (e = e !== false) {
                    for(let e in this._texturePool){
                        let t = this._texturePool[e];
                        if (t) {
                            for(let e = 0; e < t.length; e++){
                                t[e].destroy(true);
                            }
                        }
                    }
                }
                this._texturePool = {};
            }
        }
        let L = new U;
        B.GlobalResourceRegistry.register(L);
        e.s([
            "TexturePool",
            0,
            L,
            "TexturePoolClass",
            0,
            U
        ], 901548);
        class Y {
            constructor(){
                this.renderPipeId = "renderGroup";
                this.root = null;
                this.canBundle = false;
                this.renderGroupParent = null;
                this.renderGroupChildren = [];
                this.worldTransform = new n.Matrix;
                this.worldColorAlpha = 4294967295;
                this.worldColor = 16777215;
                this.worldAlpha = 1;
                this.childrenToUpdate = Object.create(null);
                this.updateTick = 0;
                this.gcTick = 0;
                this.childrenRenderablesToUpdate = {
                    list: [],
                    index: 0
                };
                this.structureDidChange = true;
                this.instructionSet = new A.InstructionSet;
                this._onRenderContainers = [];
                this.textureNeedsUpdate = true;
                this.isCachedAsTexture = false;
                this._matrixDirty = 7;
            }
            init(e) {
                this.root = e;
                if (e._onRender) {
                    this.addOnRender(e);
                }
                e.didChange = true;
                let e_children = e.children;
                for(let e = 0; e < e_children.length; e++){
                    let child = e_children[e];
                    child._updateFlags = 15;
                    this.addChild(child);
                }
            }
            enableCacheAsTexture(e = {}) {
                this.textureOptions = e;
                this.isCachedAsTexture = true;
                this.textureNeedsUpdate = true;
            }
            disableCacheAsTexture() {
                this.isCachedAsTexture = false;
                if (this.texture) {
                    L.returnTexture(this.texture, true);
                    this.texture = null;
                }
            }
            updateCacheTexture() {
                this.textureNeedsUpdate = true;
                let _parentCacheAsTextureRenderGroup = this._parentCacheAsTextureRenderGroup;
                if (_parentCacheAsTextureRenderGroup && !_parentCacheAsTextureRenderGroup.textureNeedsUpdate) {
                    _parentCacheAsTextureRenderGroup.updateCacheTexture();
                }
            }
            reset() {
                for(let e in this.renderGroupChildren.length = 0, this.childrenToUpdate){
                    let t = this.childrenToUpdate[e];
                    t.list.fill(null);
                    t.index = 0;
                }
                this.childrenRenderablesToUpdate.index = 0;
                this.childrenRenderablesToUpdate.list.fill(null);
                this.root = null;
                this.updateTick = 0;
                this.structureDidChange = true;
                this._onRenderContainers.length = 0;
                this.renderGroupParent = null;
                this.disableCacheAsTexture();
            }
            get localTransform() {
                return this.root.localTransform;
            }
            addRenderGroupChild(e) {
                if (e.renderGroupParent) {
                    e.renderGroupParent._removeRenderGroupChild(e);
                }
                e.renderGroupParent = this;
                this.renderGroupChildren.push(e);
            }
            _removeRenderGroupChild(e) {
                let t = this.renderGroupChildren.indexOf(e);
                if (t > -1) {
                    this.renderGroupChildren.splice(t, 1);
                }
                e.renderGroupParent = null;
            }
            addChild(e) {
                this.structureDidChange = true;
                e.parentRenderGroup = this;
                e.updateTick = -1;
                if (e.parent === this.root) {
                    e.relativeRenderGroupDepth = 1;
                } else {
                    e.relativeRenderGroupDepth = e.parent.relativeRenderGroupDepth + 1;
                }
                e.didChange = true;
                this.onChildUpdate(e);
                if (e.renderGroup) {
                    return void this.addRenderGroupChild(e.renderGroup);
                }
                if (e._onRender) {
                    this.addOnRender(e);
                }
                let e_children = e.children;
                for(let e = 0; e < e_children.length; e++){
                    this.addChild(e_children[e]);
                }
            }
            removeChild(e) {
                this.structureDidChange = true;
                if (e._onRender && !e.renderGroup) {
                    this.removeOnRender(e);
                }
                e.parentRenderGroup = null;
                if (e.renderGroup) {
                    return void this._removeRenderGroupChild(e.renderGroup);
                }
                let e_children = e.children;
                for(let e = 0; e < e_children.length; e++){
                    this.removeChild(e_children[e]);
                }
            }
            removeChildren(e) {
                for(let t = 0; t < e.length; t++){
                    this.removeChild(e[t]);
                }
            }
            onChildUpdate(e) {
                let t = this.childrenToUpdate[e.relativeRenderGroupDepth];
                if (!t) {
                    t = this.childrenToUpdate[e.relativeRenderGroupDepth] = {
                        index: 0,
                        list: []
                    };
                }
                t.list[t.index++] = e;
            }
            updateRenderable(e) {
                if (!(e.globalDisplayStatus < 7)) {
                    this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e);
                    e.didViewUpdate = false;
                }
            }
            onChildViewUpdate(e) {
                this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = e;
            }
            get isRenderable() {
                return this.root.localDisplayStatus === 7 && this.worldAlpha > 0;
            }
            addOnRender(e) {
                this._onRenderContainers.push(e);
            }
            removeOnRender(e) {
                this._onRenderContainers.splice(this._onRenderContainers.indexOf(e), 1);
            }
            runOnRender(e) {
                for(let t = 0; t < this._onRenderContainers.length; t++){
                    this._onRenderContainers[t]._onRender(e);
                }
            }
            destroy() {
                this.disableCacheAsTexture();
                this.renderGroupParent = null;
                this.root = null;
                this.childrenRenderablesToUpdate = null;
                this.childrenToUpdate = null;
                this.renderGroupChildren = null;
                this._onRenderContainers = null;
                this.instructionSet = null;
            }
            getChildren(e = []) {
                let children = this.root.children;
                for(let i = 0; i < children.length; i++){
                    this._getChildren(children[i], e);
                }
                return e;
            }
            _getChildren(e, t = []) {
                t.push(e);
                if (e.renderGroup) {
                    return t;
                }
                let e_children = e.children;
                for(let e = 0; e < e_children.length; e++){
                    this._getChildren(e_children[e], t);
                }
                return t;
            }
            invalidateMatrices() {
                this._matrixDirty = 7;
            }
            get inverseWorldTransform() {
                if ((1 & this._matrixDirty) == 0) {
                    return this._inverseWorldTransform;
                }
                this._matrixDirty &= -2;
                if (!this._inverseWorldTransform) {
                    this._inverseWorldTransform = new n.Matrix;
                }
                return this._inverseWorldTransform.copyFrom(this.worldTransform).invert();
            }
            get textureOffsetInverseTransform() {
                if ((2 & this._matrixDirty) == 0) {
                    return this._textureOffsetInverseTransform;
                }
                this._matrixDirty &= -3;
                if (!this._textureOffsetInverseTransform) {
                    this._textureOffsetInverseTransform = new n.Matrix;
                }
                return this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x, -this._textureBounds.y);
            }
            get inverseParentTextureTransform() {
                if ((4 & this._matrixDirty) == 0) {
                    return this._inverseParentTextureTransform;
                }
                this._matrixDirty &= -5;
                let _parentCacheAsTextureRenderGroup = this._parentCacheAsTextureRenderGroup;
                if (_parentCacheAsTextureRenderGroup) {
                    if (!this._inverseParentTextureTransform) {
                        this._inverseParentTextureTransform = new n.Matrix;
                    }
                    return this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(_parentCacheAsTextureRenderGroup.inverseWorldTransform).translate(-_parentCacheAsTextureRenderGroup._textureBounds.x, -_parentCacheAsTextureRenderGroup._textureBounds.y);
                }
                return this.worldTransform;
            }
            get cacheToLocalTransform() {
                if (this.isCachedAsTexture) {
                    return this.textureOffsetInverseTransform;
                }
                if (this._parentCacheAsTextureRenderGroup) {
                    return this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform;
                }
                return null;
            }
        }
        function V(e, t, i = {}) {
            for(let s in t){
                if (!(i[s] || t[s] === undefined)) {
                    e[s] = t[s];
                }
            }
        }
        e.s([
            "RenderGroup",
            0,
            Y
        ], 629041);
        e.s([
            "assignWithIgnore",
            0,
            V
        ], 544996);
        let N = new l.ObservablePoint(null);
        let z = new l.ObservablePoint(null);
        let X = new l.ObservablePoint(null, 1, 1);
        let H = new l.ObservablePoint(null);
        class W extends t.default {
            constructor(e = {}){
                super();
                this.uid = o.uid("renderable");
                this._updateFlags = 15;
                this.renderGroup = null;
                this.parentRenderGroup = null;
                this.parentRenderGroupIndex = 0;
                this.didChange = false;
                this.didViewUpdate = false;
                this.relativeRenderGroupDepth = 0;
                this.children = [];
                this.parent = null;
                this.includeInBuild = true;
                this.measurable = true;
                this.isSimple = true;
                this.parentRenderLayer = null;
                this.updateTick = -1;
                this.localTransform = new n.Matrix;
                this.relativeGroupTransform = new n.Matrix;
                this.groupTransform = this.relativeGroupTransform;
                this.destroyed = false;
                this._position = new l.ObservablePoint(this, 0, 0);
                this._scale = X;
                this._pivot = z;
                this._origin = H;
                this._skew = N;
                this._cx = 1;
                this._sx = 0;
                this._cy = 0;
                this._sy = 1;
                this._rotation = 0;
                this.localColor = 16777215;
                this.localAlpha = 1;
                this.groupAlpha = 1;
                this.groupColor = 16777215;
                this.groupColorAlpha = 4294967295;
                this.localBlendMode = "inherit";
                this.groupBlendMode = "normal";
                this.localDisplayStatus = 7;
                this.globalDisplayStatus = 7;
                this._didContainerChangeTick = 0;
                this._didViewChangeTick = 0;
                this._didLocalTransformChangeId = -1;
                this.effects = [];
                V(this, e, {
                    children: true,
                    parent: true,
                    effects: true
                });
                e.children?.forEach((e)=>this.addChild(e));
                e.parent?.addChild(this);
            }
            static mixin(e) {
                a.deprecation("8.8.0", "Container.mixin is deprecated, please use extensions.mixin instead.");
                r.extensions.mixin(W, e);
            }
            set _didChangeId(e) {
                this._didViewChangeTick = e >> 12 & 4095;
                this._didContainerChangeTick = 4095 & e;
            }
            get _didChangeId() {
                return 4095 & this._didContainerChangeTick | (4095 & this._didViewChangeTick) << 12;
            }
            addChild(...e) {
                if (!this.allowChildren) {
                    a.deprecation(a.v8_0_0, "addChild: Only Containers will be allowed to add children in v8.0.0");
                }
                if (e.length > 1) {
                    for(let t = 0; t < e.length; t++){
                        this.addChild(e[t]);
                    }
                    return e[0];
                }
                let t = e[0];
                let i = this.renderGroup || this.parentRenderGroup;
                if (t.parent === this) {
                    this.children.splice(this.children.indexOf(t), 1);
                    this.children.push(t);
                    if (i) {
                        i.structureDidChange = true;
                    }
                } else {
                    if (t.parent) {
                        t.parent.removeChild(t);
                    }
                    this.children.push(t);
                    if (this.sortableChildren) {
                        this.sortDirty = true;
                    }
                    t.parent = this;
                    t.didChange = true;
                    t._updateFlags = 15;
                    if (i) {
                        i.addChild(t);
                    }
                    this.emit("childAdded", t, this, this.children.length - 1);
                    t.emit("added", this);
                    this._didViewChangeTick++;
                    if (t._zIndex !== 0) {
                        t.depthOfChildModified();
                    }
                }
                return t;
            }
            removeChild(...e) {
                if (e.length > 1) {
                    for(let t = 0; t < e.length; t++){
                        this.removeChild(e[t]);
                    }
                    return e[0];
                }
                let t = e[0];
                let i = this.children.indexOf(t);
                if (i > -1) {
                    this._didViewChangeTick++;
                    this.children.splice(i, 1);
                    if (this.renderGroup) {
                        this.renderGroup.removeChild(t);
                    } else if (this.parentRenderGroup) {
                        this.parentRenderGroup.removeChild(t);
                    }
                    if (t.parentRenderLayer) {
                        t.parentRenderLayer.detach(t);
                    }
                    t.parent = null;
                    this.emit("childRemoved", t, this, i);
                    t.emit("removed", this);
                }
                return t;
            }
            _onUpdate(e) {
                if (e && e === this._skew) {
                    this._updateSkew();
                }
                this._didContainerChangeTick++;
                if (!this.didChange) {
                    this.didChange = true;
                    if (this.parentRenderGroup) {
                        this.parentRenderGroup.onChildUpdate(this);
                    }
                }
            }
            set isRenderGroup(e) {
                !!this.renderGroup !== e && (e ? this.enableRenderGroup() : this.disableRenderGroup());
            }
            get isRenderGroup() {
                return !!this.renderGroup;
            }
            enableRenderGroup() {
                if (this.renderGroup) {
                    return;
                }
                let parentRenderGroup = this.parentRenderGroup;
                parentRenderGroup?.removeChild(this);
                this.renderGroup = u.BigPool.get(Y, this);
                this.groupTransform = n.Matrix.IDENTITY;
                parentRenderGroup?.addChild(this);
                this._updateIsSimple();
            }
            disableRenderGroup() {
                if (!this.renderGroup) {
                    return;
                }
                let parentRenderGroup = this.parentRenderGroup;
                parentRenderGroup?.removeChild(this);
                u.BigPool.return(this.renderGroup);
                this.renderGroup = null;
                this.groupTransform = this.relativeGroupTransform;
                parentRenderGroup?.addChild(this);
                this._updateIsSimple();
            }
            _updateIsSimple() {
                this.isSimple = !this.renderGroup && this.effects.length === 0;
            }
            get worldTransform() {
                if (!this._worldTransform) {
                    this._worldTransform = new n.Matrix;
                }
                if (this.renderGroup) {
                    this._worldTransform.copyFrom(this.renderGroup.worldTransform);
                } else if (this.parentRenderGroup) {
                    this._worldTransform.appendFrom(this.relativeGroupTransform, this.parentRenderGroup.worldTransform);
                }
                return this._worldTransform;
            }
            get x() {
                return this._position.x;
            }
            set x(e) {
                this._position.x = e;
            }
            get y() {
                return this._position.y;
            }
            set y(e) {
                this._position.y = e;
            }
            get position() {
                return this._position;
            }
            set position(e) {
                this._position.copyFrom(e);
            }
            get rotation() {
                return this._rotation;
            }
            set rotation(e) {
                if (this._rotation !== e) {
                    this._rotation = e;
                    this._onUpdate(this._skew);
                }
            }
            get angle() {
                return this.rotation * h.RAD_TO_DEG;
            }
            set angle(e) {
                this.rotation = e * h.DEG_TO_RAD;
            }
            get pivot() {
                if (this._pivot === z) {
                    this._pivot = new l.ObservablePoint(this, 0, 0);
                }
                return this._pivot;
            }
            set pivot(e) {
                if (this._pivot === z) {
                    this._pivot = new l.ObservablePoint(this, 0, 0);
                    if (this._origin !== H) {
                        d.warn("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.");
                    }
                }
                if (typeof e === "number") {
                    this._pivot.set(e);
                } else {
                    this._pivot.copyFrom(e);
                }
            }
            get skew() {
                if (this._skew === N) {
                    this._skew = new l.ObservablePoint(this, 0, 0);
                }
                return this._skew;
            }
            set skew(e) {
                if (this._skew === N) {
                    this._skew = new l.ObservablePoint(this, 0, 0);
                }
                this._skew.copyFrom(e);
            }
            get scale() {
                if (this._scale === X) {
                    this._scale = new l.ObservablePoint(this, 1, 1);
                }
                return this._scale;
            }
            set scale(e) {
                if (this._scale === X) {
                    this._scale = new l.ObservablePoint(this, 0, 0);
                }
                if (typeof e === "string") {
                    e = parseFloat(e);
                }
                if (typeof e === "number") {
                    this._scale.set(e);
                } else {
                    this._scale.copyFrom(e);
                }
            }
            get origin() {
                if (this._origin === H) {
                    this._origin = new l.ObservablePoint(this, 0, 0);
                }
                return this._origin;
            }
            set origin(e) {
                if (this._origin === H) {
                    this._origin = new l.ObservablePoint(this, 0, 0);
                    if (this._pivot !== z) {
                        d.warn("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.");
                    }
                }
                if (typeof e === "number") {
                    this._origin.set(e);
                } else {
                    this._origin.copyFrom(e);
                }
            }
            get width() {
                return Math.abs(this.scale.x * this.getLocalBounds().width);
            }
            set width(e) {
                let width = this.getLocalBounds().width;
                this._setWidth(e, width);
            }
            get height() {
                return Math.abs(this.scale.y * this.getLocalBounds().height);
            }
            set height(e) {
                let height = this.getLocalBounds().height;
                this._setHeight(e, height);
            }
            getSize(e) {
                if (!e) {
                    e = {};
                }
                let t = this.getLocalBounds();
                e.width = Math.abs(this.scale.x * t.width);
                e.height = Math.abs(this.scale.y * t.height);
                return e;
            }
            setSize(e, t) {
                let i = this.getLocalBounds();
                if (typeof e === "object") {
                    t = e.height ?? e.width;
                    e = e.width;
                } else {
                    t ??= e;
                }
                if (e !== undefined) {
                    this._setWidth(e, i.width);
                }
                if (t !== undefined) {
                    this._setHeight(t, i.height);
                }
            }
            _updateSkew() {
                let _rotation = this._rotation;
                let _skew = this._skew;
                this._cx = Math.cos(_rotation + _skew._y);
                this._sx = Math.sin(_rotation + _skew._y);
                this._cy = -Math.sin(_rotation - _skew._x);
                this._sy = Math.cos(_rotation - _skew._x);
            }
            updateTransform(e) {
                this.position.set(typeof e.x === "number" ? e.x : this.position.x, typeof e.y === "number" ? e.y : this.position.y);
                this.scale.set(typeof e.scaleX === "number" ? e.scaleX : this.scale.x, typeof e.scaleY === "number" ? e.scaleY : this.scale.y);
                this.rotation = typeof e.rotation === "number" ? e.rotation : this.rotation;
                this.skew.set(typeof e.skewX === "number" ? e.skewX : this.skew.x, typeof e.skewY === "number" ? e.skewY : this.skew.y);
                this.pivot.set(typeof e.pivotX === "number" ? e.pivotX : this.pivot.x, typeof e.pivotY === "number" ? e.pivotY : this.pivot.y);
                this.origin.set(typeof e.originX === "number" ? e.originX : this.origin.x, typeof e.originY === "number" ? e.originY : this.origin.y);
                return this;
            }
            setFromMatrix(e) {
                e.decompose(this);
            }
            updateLocalTransform() {
                let _didContainerChangeTick = this._didContainerChangeTick;
                if (this._didLocalTransformChangeId === _didContainerChangeTick) {
                    return;
                }
                this._didLocalTransformChangeId = _didContainerChangeTick;
                let localTransform = this.localTransform;
                let _scale = this._scale;
                let _pivot = this._pivot;
                let _origin = this._origin;
                let _position = this._position;
                let h = _scale._x;
                let l = _scale._y;
                let o = _pivot._x;
                let a = _pivot._y;
                let d = -_origin._x;
                let u = -_origin._y;
                localTransform.a = this._cx * h;
                localTransform.b = this._sx * h;
                localTransform.c = this._cy * l;
                localTransform.d = this._sy * l;
                localTransform.tx = _position._x - (o * localTransform.a + a * localTransform.c) + (d * localTransform.a + u * localTransform.c) - d;
                localTransform.ty = _position._y - (o * localTransform.b + a * localTransform.d) + (d * localTransform.b + u * localTransform.d) - u;
            }
            set alpha(e) {
                if (e !== this.localAlpha) {
                    this.localAlpha = e;
                    this._updateFlags |= 1;
                    this._onUpdate();
                }
            }
            get alpha() {
                return this.localAlpha;
            }
            set tint(e) {
                let t = i.Color.shared.setValue(e ?? 16777215).toBgrNumber();
                if (t !== this.localColor) {
                    this.localColor = t;
                    this._updateFlags |= 1;
                    this._onUpdate();
                }
            }
            get tint() {
                return m.bgr2rgb(this.localColor);
            }
            set blendMode(e) {
                if (this.localBlendMode !== e) {
                    if (this.parentRenderGroup) {
                        this.parentRenderGroup.structureDidChange = true;
                    }
                    this._updateFlags |= 2;
                    this.localBlendMode = e;
                    this._onUpdate();
                }
            }
            get blendMode() {
                return this.localBlendMode;
            }
            get visible() {
                return !!(2 & this.localDisplayStatus);
            }
            set visible(e) {
                let t = 2 * !!e;
                if ((2 & this.localDisplayStatus) !== t) {
                    if (this.parentRenderGroup) {
                        this.parentRenderGroup.structureDidChange = true;
                    }
                    this._updateFlags |= 4;
                    this.localDisplayStatus ^= 2;
                    this._onUpdate();
                    this.emit("visibleChanged", e);
                }
            }
            get culled() {
                return !(4 & this.localDisplayStatus);
            }
            set culled(e) {
                if ((4 & this.localDisplayStatus) != 4 * !e) {
                    if (this.parentRenderGroup) {
                        this.parentRenderGroup.structureDidChange = true;
                    }
                    this._updateFlags |= 4;
                    this.localDisplayStatus ^= 4;
                    this._onUpdate();
                }
            }
            get renderable() {
                return !!(1 & this.localDisplayStatus);
            }
            set renderable(e) {
                if ((1 & this.localDisplayStatus) != +!!e) {
                    this._updateFlags |= 4;
                    this.localDisplayStatus ^= 1;
                    if (this.parentRenderGroup) {
                        this.parentRenderGroup.structureDidChange = true;
                    }
                    this._onUpdate();
                }
            }
            get isRenderable() {
                return this.localDisplayStatus === 7 && this.groupAlpha > 0;
            }
            destroy(e = false) {
                let t;
                if (!this.destroyed) {
                    this.destroyed = true;
                    if (this.children.length) {
                        t = this.removeChildren(0, this.children.length);
                    }
                    this.removeFromParent();
                    this.parent = null;
                    this._maskEffect = null;
                    this._filterEffect = null;
                    this.effects = null;
                    this._position = null;
                    this._scale = null;
                    this._pivot = null;
                    this._origin = null;
                    this._skew = null;
                    this.emit("destroyed", this);
                    this.removeAllListeners();
                    if ((typeof e === "boolean" ? e : e?.children) && t) {
                        for(let i = 0; i < t.length; ++i){
                            t[i].destroy(e);
                        }
                    }
                    this.renderGroup?.destroy();
                    this.renderGroup = null;
                }
            }
        }
        r.extensions.mixin(W, p.childrenHelperMixin, x.getFastGlobalBoundsMixin, k, R, G, _.effectsMixin, g.findMixin, M, s.cullingMixin, c.cacheAsTextureMixin, m.getGlobalMixin, f.collectRenderablesMixin);
        e.s([
            "Container",
            0,
            W,
            "UPDATE_BLEND",
            0,
            2,
            "UPDATE_COLOR",
            0,
            1,
            "UPDATE_TRANSFORM",
            0,
            8,
            "UPDATE_VISIBLE",
            0,
            4
        ], 275576);
    },
    256924,
    (e)=>{
        "use strict";
        var t = e.i(389474);
        var i = e.i(765480);
        var s = e.i(453549);
        let r = i.BigPool.getPool(t.Matrix);
        let n = i.BigPool.getPool(s.Bounds);
        e.s([
            "boundsPool",
            0,
            n,
            "matrixPool",
            0,
            r
        ]);
    },
    873469,
    113281,
    555925,
    779427,
    (e)=>{
        "use strict";
        var t = e.i(727905);
        function i(e, t, i) {
            let s;
            let e_length = e.length;
            if (t >= e_length || i === 0) {
                return;
            }
            i = t + i > e_length ? e_length - t : i;
            let n = e_length - i;
            for(s = t; s < n; ++s){
                e[s] = e[s + i];
            }
            e.length = n;
        }
        e.s([
            "cacheAsTextureMixin",
            0,
            {
                get isCachedAsTexture () {
                    return !!this.renderGroup?.isCachedAsTexture;
                },
                cacheAsTexture (e) {
                    if (typeof e === "boolean" && e === false) {
                        this.disableRenderGroup();
                    } else {
                        this.enableRenderGroup();
                        this.renderGroup.enableCacheAsTexture(e === true ? {} : e);
                    }
                },
                updateCacheTexture () {
                    this.renderGroup?.updateCacheTexture();
                },
                get cacheAsBitmap () {
                    return this.isCachedAsTexture;
                },
                set cacheAsBitmap (val){
                    t.deprecation("v8.6.0", "cacheAsBitmap is deprecated, use cacheAsTexture instead.");
                    this.cacheAsTexture(val);
                }
            }
        ], 873469);
        e.s([
            "removeItems",
            0,
            i
        ], 113281);
        e.s([
            "childrenHelperMixin",
            0,
            {
                allowChildren: true,
                removeChildren (e = 0, t) {
                    let s = t ?? this.children.length;
                    let r = s - e;
                    let n = [];
                    if (r > 0 && r <= s) {
                        for(let t = s - 1; t >= e; t--){
                            let e = this.children[t];
                            if (e) {
                                n.push(e);
                                e.parent = null;
                            }
                        }
                        i(this.children, e, s);
                        let t = this.renderGroup || this.parentRenderGroup;
                        if (t) {
                            t.removeChildren(n);
                        }
                        for(let e = 0; e < n.length; ++e){
                            let t = n[e];
                            t.parentRenderLayer?.detach(t);
                            this.emit("childRemoved", t, this, e);
                            n[e].emit("removed", this);
                        }
                        n.length > 0 && this._didViewChangeTick++;
                        return n;
                    }
                    if (r === 0 && this.children.length === 0) {
                        return n;
                    }
                    throw RangeError("removeChildren: numeric values are outside the acceptable range.");
                },
                removeChildAt (e) {
                    let t = this.getChildAt(e);
                    return this.removeChild(t);
                },
                getChildAt (e) {
                    if (e < 0 || e >= this.children.length) {
                        throw Error(`getChildAt: Index (${e}) does not exist.`);
                    }
                    return this.children[e];
                },
                setChildIndex (e, t) {
                    if (t < 0 || t >= this.children.length) {
                        throw Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
                    }
                    this.getChildIndex(e);
                    this.addChildAt(e, t);
                },
                getChildIndex (e) {
                    let t = this.children.indexOf(e);
                    if (-1 === t) {
                        throw Error("The supplied Container must be a child of the caller");
                    }
                    return t;
                },
                addChildAt (e, i) {
                    if (!this.allowChildren) {
                        t.deprecation(t.v8_0_0, "addChildAt: Only Containers will be allowed to add children in v8.0.0");
                    }
                    let { children } = this;
                    if (i < 0 || i > children.length) {
                        throw Error(`${e}addChildAt: The index ${i} supplied is out of bounds ${children.length}`);
                    }
                    let r = e.parent === this;
                    if (e.parent) {
                        let t = e.parent.children.indexOf(e);
                        if (r) {
                            if (t === i) {
                                return e;
                            }
                            e.parent.children.splice(t, 1);
                        } else {
                            e.removeFromParent();
                        }
                    }
                    if (i === children.length) {
                        children.push(e);
                    } else {
                        children.splice(i, 0, e);
                    }
                    e.parent = this;
                    e.didChange = true;
                    e._updateFlags = 15;
                    let n = this.renderGroup || this.parentRenderGroup;
                    if (n) {
                        n.addChild(e);
                    }
                    if (this.sortableChildren) {
                        this.sortDirty = true;
                    }
                    if (!r) {
                        this.emit("childAdded", e, this, i);
                        e.emit("added", this);
                    }
                    return e;
                },
                swapChildren (e, t) {
                    if (e === t) {
                        return;
                    }
                    let i = this.getChildIndex(e);
                    let s = this.getChildIndex(t);
                    this.children[i] = t;
                    this.children[s] = e;
                    let r = this.renderGroup || this.parentRenderGroup;
                    if (r) {
                        r.structureDidChange = true;
                    }
                    this._didContainerChangeTick++;
                },
                removeFromParent () {
                    this.parent?.removeChild(this);
                },
                reparentChild (...e) {
                    if (e.length === 1) {
                        return this.reparentChildAt(e[0], this.children.length);
                    }
                    e.forEach((e)=>this.reparentChildAt(e, this.children.length));
                    return e[0];
                },
                reparentChildAt (e, t) {
                    if (e.parent === this) {
                        this.setChildIndex(e, t);
                        return e;
                    }
                    let i = e.worldTransform.clone();
                    e.removeFromParent();
                    this.addChildAt(e, t);
                    let s = this.worldTransform.clone();
                    s.invert();
                    i.prepend(s);
                    e.setFromMatrix(i);
                    return e;
                },
                replaceChild (e, t) {
                    e.updateLocalTransform();
                    this.addChildAt(t, this.getChildIndex(e));
                    t.setFromMatrix(e.localTransform);
                    t.updateLocalTransform();
                    this.removeChild(e);
                }
            }
        ], 555925);
        e.s([
            "collectRenderablesMixin",
            0,
            {
                collectRenderables (e, t, i) {
                    this.parentRenderLayer && this.parentRenderLayer !== i || this.globalDisplayStatus < 7 || !this.includeInBuild || (this.sortableChildren && this.sortChildren(), this.isSimple ? this.collectRenderablesSimple(e, t, i) : this.renderGroup ? t.renderPipes.renderGroup.addRenderGroup(this.renderGroup, e) : this.collectRenderablesWithEffects(e, t, i));
                },
                collectRenderablesSimple (e, t, i) {
                    let children = this.children;
                    let s_length = children.length;
                    for(let n = 0; n < s_length; n++){
                        children[n].collectRenderables(e, t, i);
                    }
                },
                collectRenderablesWithEffects (e, t, i) {
                    let { renderPipes } = t;
                    for(let t = 0; t < this.effects.length; t++){
                        let effect = this.effects[t];
                        renderPipes[effect.pipe].push(effect, this, e);
                    }
                    this.collectRenderablesSimple(e, t, i);
                    for(let t = this.effects.length - 1; t >= 0; t--){
                        let i = this.effects[t];
                        renderPipes[i.pipe].pop(i, this, e);
                    }
                }
            }
        ], 779427);
    },
    710158,
    64645,
    426307,
    (e)=>{
        "use strict";
        var t = e.i(893661);
        var i = e.i(78278);
        var s = e.i(765480);
        class r {
            constructor(){
                this._effectClasses = [];
                this._tests = [];
                this._initialized = false;
            }
            init() {
                if (!this._initialized) {
                    this._initialized = true;
                    this._effectClasses.forEach((maskClass)=>{
                        this.add({
                            test: maskClass.test,
                            maskClass
                        });
                    });
                }
            }
            add(e) {
                this._tests.push(e);
            }
            getMaskEffect(e) {
                if (!this._initialized) {
                    this.init();
                }
                for(let t = 0; t < this._tests.length; t++){
                    let _test = this._tests[t];
                    if (_test.test(e)) {
                        return s.BigPool.get(_test.maskClass, e);
                    }
                }
                return e;
            }
            returnMaskEffect(e) {
                s.BigPool.return(e);
            }
        }
        let n = new r;
        i.extensions.handleByList(i.ExtensionType.MaskEffect, n._effectClasses);
        e.s([
            "MaskEffectManager",
            0,
            n,
            "MaskEffectManagerClass",
            0,
            r
        ], 64645);
        e.s([
            "effectsMixin",
            0,
            {
                _maskEffect: null,
                _maskOptions: {
                    inverse: false,
                    channel: "red"
                },
                _filterEffect: null,
                effects: [],
                _markStructureAsChanged () {
                    let e = this.renderGroup || this.parentRenderGroup;
                    if (e) {
                        e.structureDidChange = true;
                    }
                },
                addEffect (e) {
                    if (-1 === this.effects.indexOf(e)) {
                        this.effects.push(e);
                        this.effects.sort((e, t)=>e.priority - t.priority);
                        this._markStructureAsChanged();
                        this._updateIsSimple();
                    }
                },
                removeEffect (e) {
                    let t = this.effects.indexOf(e);
                    if (-1 !== t) {
                        this.effects.splice(t, 1);
                        this._markStructureAsChanged();
                        this._updateIsSimple();
                    }
                },
                set mask (value){
                    let _maskEffect = this._maskEffect;
                    if (_maskEffect?.mask === value || (_maskEffect && (this.removeEffect(_maskEffect), n.returnMaskEffect(_maskEffect), this._maskEffect = null), value == null)) {
                        return;
                    }
                    this._maskEffect = n.getMaskEffect(value);
                    this.addEffect(this._maskEffect);
                },
                get mask () {
                    return this._maskEffect?.mask;
                },
                setMask (e) {
                    this._maskOptions = {
                        ...this._maskOptions,
                        ...e
                    };
                    if (e.mask) {
                        this.mask = e.mask;
                    }
                    this._markStructureAsChanged();
                },
                set filters (value){
                    if (!Array.isArray(value) && value) {
                        value = [
                            value
                        ];
                    }
                    let e = this._filterEffect || (this._filterEffect = new t.FilterEffect);
                    let i = value?.length > 0;
                    let s = e.filters?.length > 0;
                    e.filters = Object.freeze(value = Array.isArray(value) ? value.slice(0) : value);
                    i !== s && (i ? this.addEffect(e) : (this.removeEffect(e), e.filters = value ?? null));
                },
                get filters () {
                    return this._filterEffect?.filters;
                },
                set filterArea (value){
                    if (!this._filterEffect) {
                        this._filterEffect = new t.FilterEffect;
                    }
                    this._filterEffect.filterArea = value;
                },
                get filterArea () {
                    return this._filterEffect?.filterArea;
                }
            }
        ], 710158);
        var h = e.i(727905);
        e.s([
            "findMixin",
            0,
            {
                label: null,
                get name () {
                    h.deprecation(h.v8_0_0, "Container.name property has been removed, use Container.label instead");
                    return this.label;
                },
                set name (value){
                    h.deprecation(h.v8_0_0, "Container.name property has been removed, use Container.label instead");
                    this.label = value;
                },
                getChildByName (e, t = false) {
                    return this.getChildByLabel(e, t);
                },
                getChildByLabel (e, t = false) {
                    let children = this.children;
                    for(let t = 0; t < children.length; t++){
                        let child = children[t];
                        if (child.label === e || e instanceof RegExp && e.test(child.label)) {
                            return child;
                        }
                    }
                    if (t) {
                        for(let t = 0; t < children.length; t++){
                            let s = children[t].getChildByLabel(e, true);
                            if (s) {
                                return s;
                            }
                        }
                    }
                    return null;
                },
                getChildrenByLabel (e, t = false, i = []) {
                    let children = this.children;
                    for(let t = 0; t < children.length; t++){
                        let child = children[t];
                        if (child.label === e || e instanceof RegExp && e.test(child.label)) {
                            i.push(child);
                        }
                    }
                    if (t) {
                        for(let t = 0; t < children.length; t++){
                            children[t].getChildrenByLabel(e, true, i);
                        }
                    }
                    return i;
                }
            }
        ], 426307);
    },
    786234,
    (e)=>{
        "use strict";
        var t = e.i(389474);
        var i = e.i(453549);
        var s = e.i(256924);
        let r = new t.Matrix;
        e.s([
            "getFastGlobalBoundsMixin",
            0,
            {
                getFastGlobalBounds (e, t) {
                    if (!t) {
                        t = new i.Bounds;
                    }
                    t.clear();
                    this._getGlobalBoundsRecursive(!!e, t, this.parentRenderLayer);
                    if (!t.isValid) {
                        t.set(0, 0, 0, 0);
                    }
                    let s = this.renderGroup || this.parentRenderGroup;
                    t.applyMatrix(s.worldTransform);
                    return t;
                },
                _getGlobalBoundsRecursive (e, t, i) {
                    let n = t;
                    if (e && this.parentRenderLayer && this.parentRenderLayer !== i || this.localDisplayStatus !== 7 || !this.measurable) {
                        return;
                    }
                    let h = !!this.effects.length;
                    if (this.renderGroup || h) {
                        n = s.boundsPool.get().clear();
                    }
                    if (this.boundsArea) {
                        t.addRect(this.boundsArea, this.worldTransform);
                    } else {
                        if (this.renderPipeId) {
                            let e = this.bounds;
                            n.addFrame(e.minX, e.minY, e.maxX, e.maxY, this.groupTransform);
                        }
                        let t = this.children;
                        for(let s = 0; s < t.length; s++){
                            t[s]._getGlobalBoundsRecursive(e, n, i);
                        }
                    }
                    if (h) {
                        let e = false;
                        let i = this.renderGroup || this.parentRenderGroup;
                        for(let t = 0; t < this.effects.length; t++){
                            if (this.effects[t].addBounds) {
                                if (!e) {
                                    e = true;
                                    n.applyMatrix(i.worldTransform);
                                }
                                this.effects[t].addBounds(n, true);
                            }
                        }
                        if (e) {
                            n.applyMatrix(i.worldTransform.copyTo(r).invert());
                        }
                        t.addBounds(n);
                        s.boundsPool.return(n);
                    } else {
                        if (this.renderGroup) {
                            t.addBounds(n, this.relativeGroupTransform);
                            s.boundsPool.return(n);
                        }
                    }
                }
            }
        ]);
    },
    997125,
    512583,
    350585,
    (e)=>{
        "use strict";
        var t = e.i(389474);
        var i = e.i(256924);
        function s(e, t) {
            let e_parent = e.parent;
            if (e_parent) {
                s(e_parent, t);
                e_parent.updateLocalTransform();
                t.append(e_parent.localTransform);
            }
            return t;
        }
        e.s([
            "getGlobalBounds",
            0,
            (e, r, n)=>{
                let h;
                let l;
                n.clear();
                h = e.parent ? r ? e.parent.worldTransform : s(e, l = i.matrixPool.get().identity()) : t.Matrix.IDENTITY;
                (function e(s, r, n, h) {
                    let l;
                    if (!s.visible || !s.measurable) {
                        return;
                    }
                    if (h) {
                        l = s.worldTransform;
                    } else {
                        s.updateLocalTransform();
                        (l = i.matrixPool.get()).appendFrom(s.localTransform, n);
                    }
                    let o = r;
                    let a = !!s.effects.length;
                    if (a) {
                        r = i.boundsPool.get().clear();
                    }
                    if (s.boundsArea) {
                        r.addRect(s.boundsArea, l);
                    } else {
                        let t = s.bounds;
                        if (t && !t.isEmpty()) {
                            r.matrix = l;
                            r.addBounds(t);
                        }
                        for(let t = 0; t < s.children.length; t++){
                            e(s.children[t], r, l, h);
                        }
                    }
                    if (a) {
                        for(let e = 0; e < s.effects.length; e++){
                            s.effects[e].addBounds?.(r);
                        }
                        o.addBounds(r, t.Matrix.IDENTITY);
                        i.boundsPool.return(r);
                    }
                    if (!h) {
                        i.matrixPool.return(l);
                    }
                })(e, n, h, r);
                if (l) {
                    i.matrixPool.return(l);
                }
                if (!n.isValid) {
                    n.set(0, 0, 0, 0);
                }
                return n;
            },
            "updateTransformBackwards",
            0,
            s
        ], 512583);
        var r = e.i(414205);
        function n(e, t) {
            if (e === 16777215) {
                return t;
            }
            if (t === 16777215) {
                return e;
            }
            return r.multiplyHexColors(e, t);
        }
        function h(e) {
            return ((255 & e) << 16) + (65280 & e) + (e >> 16 & 255);
        }
        e.s([
            "multiplyColors",
            0,
            n
        ], 350585);
        e.s([
            "bgr2rgb",
            0,
            h,
            "getGlobalMixin",
            0,
            {
                getGlobalAlpha (e) {
                    if (e) {
                        if (this.renderGroup) {
                            return this.renderGroup.worldAlpha;
                        }
                        if (this.parentRenderGroup) {
                            return this.parentRenderGroup.worldAlpha * this.alpha;
                        }
                        return this.alpha;
                    }
                    let alpha = this.alpha;
                    let parent = this.parent;
                    while(parent){
                        alpha *= parent.alpha;
                        parent = parent.parent;
                    }
                    return alpha;
                },
                getGlobalTransform (e = new t.Matrix, r) {
                    if (r) {
                        return e.copyFrom(this.worldTransform);
                    }
                    this.updateLocalTransform();
                    let n = s(this, i.matrixPool.get().identity());
                    e.appendFrom(this.localTransform, n);
                    i.matrixPool.return(n);
                    return e;
                },
                getGlobalTint (e) {
                    if (e) {
                        if (this.renderGroup) {
                            return h(this.renderGroup.worldColor);
                        }
                        if (this.parentRenderGroup) {
                            return h(n(this.localColor, this.parentRenderGroup.worldColor));
                        }
                        return this.tint;
                    }
                    let localColor = this.localColor;
                    let parent = this.parent;
                    while(parent){
                        localColor = n(localColor, parent.localColor);
                        parent = parent.parent;
                    }
                    return h(localColor);
                }
            }
        ], 997125);
    },
    465816,
    441327,
    (e)=>{
        "use strict";
        var t = e.i(490249);
        var i = e.i(337654);
        var s = e.i(372370);
        var r = e.i(727905);
        var n = e.i(453549);
        var h = e.i(275576);
        class l extends h.Container {
            constructor(e){
                super(e);
                this.canBundle = true;
                this.allowChildren = false;
                this._roundPixels = 0;
                this._lastUsed = -1;
                this._gpuData = Object.create(null);
                this.autoGarbageCollect = true;
                this._gcLastUsed = -1;
                this._bounds = new n.Bounds(0, 1, 0, 0);
                this._boundsDirty = true;
                this.autoGarbageCollect = e.autoGarbageCollect ?? true;
            }
            get bounds() {
                if (this._boundsDirty) {
                    this.updateBounds();
                    this._boundsDirty = false;
                }
                return this._bounds;
            }
            get roundPixels() {
                return !!this._roundPixels;
            }
            set roundPixels(e) {
                this._roundPixels = +!!e;
            }
            containsPoint(e) {
                let bounds = this.bounds;
                let { x, y } = e;
                return x >= bounds.minX && x <= bounds.maxX && y >= bounds.minY && y <= bounds.maxY;
            }
            onViewUpdate() {
                this._didViewChangeTick++;
                this._boundsDirty = true;
                if (this.didViewUpdate) {
                    return;
                }
                this.didViewUpdate = true;
                let e = this.renderGroup || this.parentRenderGroup;
                if (e) {
                    e.onChildViewUpdate(this);
                }
            }
            unload() {
                for(let e in this.emit("unload", this), this._gpuData){
                    this._gpuData[e]?.destroy();
                }
                this._gpuData = Object.create(null);
                this.onViewUpdate();
            }
            destroy(e) {
                this.unload();
                super.destroy(e);
                this._bounds = null;
            }
            collectRenderablesSimple(e, t, i) {
                let { renderPipes } = t;
                renderPipes.blendMode.pushBlendMode(this, this.groupBlendMode, e);
                let r = renderPipes[this.renderPipeId];
                if (r?.addRenderable) {
                    r.addRenderable(this, e);
                }
                this.didViewUpdate = false;
                let children = this.children;
                let n_length = children.length;
                for(let s = 0; s < n_length; s++){
                    children[s].collectRenderables(e, t, i);
                }
                renderPipes.blendMode.popBlendMode(e);
            }
        }
        e.s([
            "ViewContainer",
            0,
            l
        ], 441327);
        e.s([
            "Sprite",
            0,
            class e extends l {
                constructor(texture_1 = i.Texture.EMPTY){
                    if (texture_1 instanceof i.Texture) {
                        texture_1 = {
                            texture: texture_1
                        };
                    }
                    const { texture = i.Texture.EMPTY, anchor, roundPixels, width, height, ...rest } = texture_1;
                    super({
                        label: "Sprite",
                        ...rest
                    });
                    this.renderPipeId = "sprite";
                    this.batched = true;
                    this._visualBounds = {
                        minX: 0,
                        maxX: 1,
                        minY: 0,
                        maxY: 0
                    };
                    this._anchor = new t.ObservablePoint({
                        _onUpdate: ()=>{
                            this.onViewUpdate();
                        }
                    });
                    if (anchor) {
                        this.anchor = anchor;
                    } else if (texture.defaultAnchor) {
                        this.anchor = texture.defaultAnchor;
                    }
                    this.texture = texture;
                    this.allowChildren = false;
                    this.roundPixels = roundPixels ?? false;
                    if (width !== undefined) {
                        this.width = width;
                    }
                    if (height !== undefined) {
                        this.height = height;
                    }
                }
                static from(t, s = false) {
                    return new e(t instanceof i.Texture ? t : i.Texture.from(t, s));
                }
                set texture(e) {
                    if (!e) {
                        e = i.Texture.EMPTY;
                    }
                    let _texture = this._texture;
                    if (_texture !== e) {
                        if (_texture && _texture.dynamic) {
                            _texture.off("update", this.onViewUpdate, this);
                        }
                        if (e.dynamic) {
                            e.on("update", this.onViewUpdate, this);
                        }
                        this._texture = e;
                        if (this._width) {
                            this._setWidth(this._width, this._texture.orig.width);
                        }
                        if (this._height) {
                            this._setHeight(this._height, this._texture.orig.height);
                        }
                        this.onViewUpdate();
                    }
                }
                get texture() {
                    return this._texture;
                }
                get visualBounds() {
                    s.updateQuadBounds(this._visualBounds, this._anchor, this._texture);
                    return this._visualBounds;
                }
                get sourceBounds() {
                    r.deprecation("8.6.1", "Sprite.sourceBounds is deprecated, use visualBounds instead.");
                    return this.visualBounds;
                }
                updateBounds() {
                    let _anchor = this._anchor;
                    let _texture = this._texture;
                    let _bounds = this._bounds;
                    let { width, height } = _texture.orig;
                    _bounds.minX = -_anchor._x * width;
                    _bounds.maxX = _bounds.minX + width;
                    _bounds.minY = -_anchor._y * height;
                    _bounds.maxY = _bounds.minY + height;
                }
                destroy(e = false) {
                    super.destroy(e);
                    if (typeof e === "boolean" ? e : e?.texture) {
                        let t = typeof e === "boolean" ? e : e?.textureSource;
                        this._texture.destroy(t);
                    }
                    this._texture = null;
                    this._visualBounds = null;
                    this._bounds = null;
                    this._anchor = null;
                }
                get anchor() {
                    return this._anchor;
                }
                set anchor(e) {
                    if (typeof e === "number") {
                        this._anchor.set(e);
                    } else {
                        this._anchor.copyFrom(e);
                    }
                }
                get width() {
                    return Math.abs(this.scale.x) * this._texture.orig.width;
                }
                set width(e) {
                    this._setWidth(e, this._texture.orig.width);
                    this._width = e;
                }
                get height() {
                    return Math.abs(this.scale.y) * this._texture.orig.height;
                }
                set height(e) {
                    this._setHeight(e, this._texture.orig.height);
                    this._height = e;
                }
                getSize(e) {
                    if (!e) {
                        e = {};
                    }
                    e.width = Math.abs(this.scale.x) * this._texture.orig.width;
                    e.height = Math.abs(this.scale.y) * this._texture.orig.height;
                    return e;
                }
                setSize(e, t) {
                    if (typeof e === "object") {
                        t = e.height ?? e.width;
                        e = e.width;
                    } else {
                        t ??= e;
                    }
                    if (e !== undefined) {
                        this._setWidth(e, this._texture.orig.width);
                    }
                    if (t !== undefined) {
                        this._setHeight(t, this._texture.orig.height);
                    }
                }
            }
        ], 465816);
    },
    989031,
    143072,
    724923,
    (e)=>{
        "use strict";
        var t;
        t = i || {};
        t[t.INTERACTION = 50] = "INTERACTION";
        t[t.HIGH = 25] = "HIGH";
        t[t.NORMAL = 0] = "NORMAL";
        t[t.LOW = -25] = "LOW";
        t[t.UTILITY = -50] = "UTILITY";
        var i = t;
        e.s([
            "UPDATE_PRIORITY",
            0,
            i
        ], 143072);
        class s {
            constructor(e, t = null, i = 0, s = false){
                this.next = null;
                this.previous = null;
                this._destroyed = false;
                this._fn = e;
                this._context = t;
                this.priority = i;
                this._once = s;
            }
            match(e, t = null) {
                return this._fn === e && this._context === t;
            }
            emit(e) {
                this._fn && (this._context ? this._fn.call(this._context, e) : this._fn(e));
                let next = this.next;
                if (this._once) {
                    this.destroy(true);
                }
                if (this._destroyed) {
                    this.next = null;
                }
                return next;
            }
            connect(e) {
                this.previous = e;
                if (e.next) {
                    e.next.previous = this;
                }
                this.next = e.next;
                e.next = this;
            }
            destroy(e = false) {
                this._destroyed = true;
                this._fn = null;
                this._context = null;
                if (this.previous) {
                    this.previous.next = this.next;
                }
                if (this.next) {
                    this.next.previous = this.previous;
                }
                let next = this.next;
                this.next = e ? null : next;
                this.previous = null;
                return next;
            }
        }
        e.s([
            "TickerListener",
            0,
            s
        ], 724923);
        let r = class e {
            constructor(){
                this.autoStart = false;
                this.deltaTime = 1;
                this.lastTime = -1;
                this.speed = 1;
                this.started = false;
                this._requestId = null;
                this._maxElapsedMS = 100;
                this._minElapsedMS = 0;
                this._protected = false;
                this._lastFrame = -1;
                this._head = new s(null, null, Infinity);
                this.deltaMS = 1 / e.targetFPMS;
                this.elapsedMS = 1 / e.targetFPMS;
                this._tick = (e)=>{
                    this._requestId = null;
                    if (this.started) {
                        this.update(e);
                        if (this.started && this._requestId === null && this._head.next) {
                            this._requestId = requestAnimationFrame(this._tick);
                        }
                    }
                };
            }
            _requestIfNeeded() {
                if (this._requestId === null && this._head.next) {
                    this.lastTime = performance.now();
                    this._lastFrame = this.lastTime;
                    this._requestId = requestAnimationFrame(this._tick);
                }
            }
            _cancelIfNeeded() {
                if (this._requestId !== null) {
                    cancelAnimationFrame(this._requestId);
                    this._requestId = null;
                }
            }
            _startIfPossible() {
                if (this.started) {
                    this._requestIfNeeded();
                } else if (this.autoStart) {
                    this.start();
                }
            }
            add(e, t, r = i.NORMAL) {
                return this._addListener(new s(e, t, r));
            }
            addOnce(e, t, r = i.NORMAL) {
                return this._addListener(new s(e, t, r, true));
            }
            _addListener(e) {
                let next = this._head.next;
                let _head = this._head;
                if (next) {
                    while(next){
                        if (e.priority > next.priority) {
                            e.connect(_head);
                            break;
                        }
                        _head = next;
                        next = next.next;
                    }
                    if (!e.previous) {
                        e.connect(_head);
                    }
                } else {
                    e.connect(_head);
                }
                this._startIfPossible();
                return this;
            }
            remove(e, t) {
                let next = this._head.next;
                while(next){
                    next = next.match(e, t) ? next.destroy() : next.next;
                }
                if (!this._head.next) {
                    this._cancelIfNeeded();
                }
                return this;
            }
            get count() {
                if (!this._head) {
                    return 0;
                }
                let e = 0;
                let _head = this._head;
                while(_head = _head.next){
                    e++;
                }
                return e;
            }
            start() {
                if (!this.started) {
                    this.started = true;
                    this._requestIfNeeded();
                }
            }
            stop() {
                if (this.started) {
                    this.started = false;
                    this._cancelIfNeeded();
                }
            }
            destroy() {
                if (!this._protected) {
                    this.stop();
                    let e = this._head.next;
                    while(e){
                        e = e.destroy(true);
                    }
                    this._head.destroy();
                    this._head = null;
                }
            }
            update(t = performance.now()) {
                let i;
                if (t > this.lastTime) {
                    if ((i = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS) {
                        i = this._maxElapsedMS;
                    }
                    i *= this.speed;
                    if (this._minElapsedMS) {
                        let e = t - this._lastFrame | 0;
                        if (e < this._minElapsedMS) {
                            return;
                        }
                        this._lastFrame = t - e % this._minElapsedMS;
                    }
                    this.deltaMS = i;
                    this.deltaTime = this.deltaMS * e.targetFPMS;
                    let s = this._head;
                    let r = s.next;
                    while(r){
                        r = r.emit(this);
                    }
                    if (!s.next) {
                        this._cancelIfNeeded();
                    }
                } else {
                    this.deltaTime = this.deltaMS = this.elapsedMS = 0;
                }
                this.lastTime = t;
            }
            get FPS() {
                return 1000 / this.elapsedMS;
            }
            get minFPS() {
                return 1000 / this._maxElapsedMS;
            }
            set minFPS(t) {
                let i = Math.min(Math.max(0, t) / 1000, e.targetFPMS);
                this._maxElapsedMS = 1 / i;
                if (this._minElapsedMS && t > this.maxFPS) {
                    this.maxFPS = t;
                }
            }
            get maxFPS() {
                if (this._minElapsedMS) {
                    return Math.round(1000 / this._minElapsedMS);
                }
                return 0;
            }
            set maxFPS(e) {
                if (e === 0) {
                    this._minElapsedMS = 0;
                } else {
                    if (e < this.minFPS) {
                        this.minFPS = e;
                    }
                    this._minElapsedMS = 1 / (e / 1000);
                }
            }
            static get shared() {
                if (!e._shared) {
                    let t = e._shared = new e;
                    t.autoStart = true;
                    t._protected = true;
                }
                return e._shared;
            }
            static get system() {
                if (!e._system) {
                    let t = e._system = new e;
                    t.autoStart = true;
                    t._protected = true;
                }
                return e._system;
            }
        };
        r.targetFPMS = 0.06;
        e.s([
            "Ticker",
            0,
            r
        ], 989031);
    },
    372370,
    (e)=>{
        "use strict";
        e.s([
            "updateQuadBounds",
            0,
            (e, t, i)=>{
                let { width, height } = i.orig;
                let i_trim = i.trim;
                if (i_trim) {
                    let i = i_trim.width;
                    let h = i_trim.height;
                    e.minX = i_trim.x - t._x * width;
                    e.maxX = e.minX + i;
                    e.minY = i_trim.y - t._y * height;
                    e.maxY = e.minY + h;
                } else {
                    e.minX = -t._x * width;
                    e.maxX = e.minX + width;
                    e.minY = -t._y * height;
                    e.maxY = e.minY + height;
                }
            }
        ]);
    }
]);
