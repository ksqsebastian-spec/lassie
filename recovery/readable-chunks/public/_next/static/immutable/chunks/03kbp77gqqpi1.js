;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "c663d5db-13fb-c68b-c7e6-7d6cf5282025";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    740905,
    296853,
    700631,
    63146,
    204126,
    500378,
    6948,
    768339,
    871602,
    262609,
    270143,
    945168,
    (e)=>{
        "use strict";
        var t;
        var r;
        var i;
        var a;
        var n;
        var s = e.i(78278);
        var o = e.i(688761);
        class l {
            constructor(){
                this._tempState = o.State.for2d();
                this._didUploadHash = {};
            }
            init(e) {
                e.renderer.runners.contextChange.add(this);
            }
            contextChange() {
                this._didUploadHash = {};
            }
            start(e, t, r) {
                let e_renderer = e.renderer;
                let a = this._didUploadHash[r.uid];
                e_renderer.shader.bind(r, a);
                if (!a) {
                    this._didUploadHash[r.uid] = true;
                }
                e_renderer.shader.updateUniformGroup(e_renderer.globalUniforms.uniformGroup);
                e_renderer.geometry.bind(t, r.glProgram);
            }
            execute(e, t) {
                let e_renderer = e.renderer;
                this._tempState.blendMode = t.blendMode;
                e_renderer.state.set(this._tempState);
                let textures = t.textures.textures;
                for(let e = 0; e < t.textures.count; e++){
                    e_renderer.texture.bind(textures[e], e);
                }
                e_renderer.geometry.draw(t.topology, t.size, t.start);
            }
        }
        l.extension = {
            type: [
                s.ExtensionType.WebGLPipesAdaptor
            ],
            name: "batch"
        };
        e.s([
            "GlBatchAdaptor",
            0,
            l
        ], 740905);
        var u = e.i(217055);
        var _ = e.i(294212);
        t = c || {};
        t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
        t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER";
        t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER";
        var c = t;
        e.s([
            "BUFFER_TYPE",
            0,
            c
        ], 296853);
        class h {
            constructor(e, t){
                this._lastBindBaseLocation = -1;
                this._lastBindCallId = -1;
                this.buffer = e || null;
                this.updateID = -1;
                this.byteLength = -1;
                this.type = t;
            }
            destroy() {
                this.buffer = null;
                this.updateID = -1;
                this.byteLength = -1;
                this.type = -1;
                this._lastBindBaseLocation = -1;
                this._lastBindCallId = -1;
            }
        }
        e.s([
            "GlBuffer",
            0,
            h
        ], 700631);
        class d {
            constructor(e){
                this._boundBufferBases = Object.create(null);
                this._minBaseLocation = 0;
                this._nextBindBaseIndex = this._minBaseLocation;
                this._bindCallId = 0;
                this._renderer = e;
                this._managedBuffers = new u.GCManagedHash({
                    renderer: e,
                    type: "resource",
                    onUnload: this.onBufferUnload.bind(this),
                    name: "glBuffer"
                });
            }
            destroy() {
                this._managedBuffers.destroy();
                this._renderer = null;
                this._gl = null;
                this._boundBufferBases = {};
            }
            contextChange() {
                this._gl = this._renderer.gl;
                this.destroyAll(true);
                this._maxBindings = this._renderer.limits.maxUniformBindings;
            }
            getGlBuffer(e) {
                e._gcLastUsed = this._renderer.gc.now;
                return e._gpuData[this._renderer.uid] || this.createGLBuffer(e);
            }
            bind(e) {
                let { _gl } = this;
                let r = this.getGlBuffer(e);
                _gl.bindBuffer(r.type, r.buffer);
            }
            bindBufferBase(e, t) {
                let { _gl } = this;
                if (this._boundBufferBases[t] !== e) {
                    this._boundBufferBases[t] = e;
                    e._lastBindBaseLocation = t;
                    _gl.bindBufferBase(_gl.UNIFORM_BUFFER, t, e.buffer);
                }
            }
            nextBindBase(e) {
                this._bindCallId++;
                this._minBaseLocation = 0;
                if (e) {
                    this._boundBufferBases[0] = null;
                    this._minBaseLocation = 1;
                    if (this._nextBindBaseIndex < 1) {
                        this._nextBindBaseIndex = 1;
                    }
                }
            }
            freeLocationForBufferBase(e) {
                let t = this.getLastBindBaseLocation(e);
                if (t >= this._minBaseLocation) {
                    e._lastBindCallId = this._bindCallId;
                    return t;
                }
                let r = 0;
                let _nextBindBaseIndex = this._nextBindBaseIndex;
                while(r < 2){
                    if (_nextBindBaseIndex >= this._maxBindings) {
                        _nextBindBaseIndex = this._minBaseLocation;
                        r++;
                    }
                    let e = this._boundBufferBases[_nextBindBaseIndex];
                    if (e && e._lastBindCallId === this._bindCallId) {
                        _nextBindBaseIndex++;
                        continue;
                    }
                    break;
                }
                t = _nextBindBaseIndex;
                this._nextBindBaseIndex = _nextBindBaseIndex + 1;
                if (r >= 2) {
                    return -1;
                }
                e._lastBindCallId = this._bindCallId;
                this._boundBufferBases[t] = null;
                return t;
            }
            getLastBindBaseLocation(e) {
                let e__lastBindBaseLocation = e._lastBindBaseLocation;
                if (this._boundBufferBases[e__lastBindBaseLocation] === e) {
                    return e__lastBindBaseLocation;
                }
                return -1;
            }
            bindBufferRange(e, t, r, i) {
                let { _gl } = this;
                if (!r) {
                    r = 0;
                }
                if (!t) {
                    t = 0;
                }
                this._boundBufferBases[t] = null;
                _gl.bindBufferRange(_gl.UNIFORM_BUFFER, t || 0, e.buffer, 256 * r, i || 256);
            }
            updateBuffer(e) {
                let { _gl } = this;
                let r = this.getGlBuffer(e);
                if (e._updateID === r.updateID) {
                    return r;
                }
                r.updateID = e._updateID;
                _gl.bindBuffer(r.type, r.buffer);
                let e_data = e.data;
                let a = e.descriptor.usage & _.BufferUsage.STATIC ? _gl.STATIC_DRAW : _gl.DYNAMIC_DRAW;
                if (e_data) {
                    if (r.byteLength >= e_data.byteLength) {
                        _gl.bufferSubData(r.type, 0, e_data, 0, e._updateSize / e_data.BYTES_PER_ELEMENT);
                    } else {
                        r.byteLength = e_data.byteLength;
                        _gl.bufferData(r.type, e_data, a);
                    }
                } else {
                    r.byteLength = e.descriptor.size;
                    _gl.bufferData(r.type, r.byteLength, a);
                }
                return r;
            }
            destroyAll(e = false) {
                this._managedBuffers.removeAll(e);
            }
            onBufferUnload(e, t = false) {
                let r = e._gpuData[this._renderer.uid];
                r && (t || this._gl.deleteBuffer(r.buffer));
            }
            createGLBuffer(e) {
                let { _gl } = this;
                let c_ARRAY_BUFFER = c.ARRAY_BUFFER;
                if (e.descriptor.usage & _.BufferUsage.INDEX) {
                    c_ARRAY_BUFFER = c.ELEMENT_ARRAY_BUFFER;
                } else if (e.descriptor.usage & _.BufferUsage.UNIFORM) {
                    c_ARRAY_BUFFER = c.UNIFORM_BUFFER;
                }
                let i = new h(_gl.createBuffer(), c_ARRAY_BUFFER);
                e._gpuData[this._renderer.uid] = i;
                this._managedBuffers.add(e);
                return i;
            }
            resetState() {
                this._boundBufferBases = Object.create(null);
            }
        }
        d.extension = {
            type: [
                s.ExtensionType.WebGLSystem
            ],
            name: "buffer"
        };
        e.s([
            "GlBufferSystem",
            0,
            d
        ], 63146);
        var f = e.i(787653);
        var m = e.i(562140);
        let g = class e {
            constructor(e){
                this.supports = {
                    uint32Indices: true,
                    uniformBufferObject: true,
                    vertexArrayObject: true,
                    srgbTextures: true,
                    nonPowOf2wrapping: true,
                    msaa: true,
                    nonPowOf2mipmaps: true
                };
                this._renderer = e;
                this.extensions = Object.create(null);
                this.handleContextLost = this.handleContextLost.bind(this);
                this.handleContextRestored = this.handleContextRestored.bind(this);
            }
            get isLost() {
                return !this.gl || this.gl.isContextLost();
            }
            contextChange(e) {
                this.gl = e;
                this._renderer.gl = e;
            }
            init(t) {
                t = {
                    ...e.defaultOptions,
                    ...t
                };
                let r = this.multiView = t.multiView;
                if (t.context && r) {
                    m.warn("Renderer created with both a context and multiview enabled. Disabling multiView as both cannot work together.");
                    r = false;
                }
                if (r) {
                    this.canvas = f.DOMAdapter.get().createCanvas(this._renderer.canvas.width, this._renderer.canvas.height);
                } else {
                    this.canvas = this._renderer.view.canvas;
                }
                if (t.context) {
                    this.initFromContext(t.context);
                } else {
                    let alpha = this._renderer.background.alpha < 1;
                    let premultipliedAlpha = t.premultipliedAlpha ?? true;
                    let antialias = t.antialias && !this._renderer.backBuffer.useBackBuffer;
                    this.createContext(t.preferWebGLVersion, {
                        alpha,
                        premultipliedAlpha,
                        antialias,
                        stencil: true,
                        preserveDrawingBuffer: t.preserveDrawingBuffer,
                        powerPreference: t.powerPreference ?? "default"
                    });
                }
            }
            ensureCanvasSize(e) {
                if (!this.multiView) {
                    if (e !== this.canvas) {
                        m.warn("multiView is disabled, but targetCanvas is not the main canvas");
                    }
                    return;
                }
                let { canvas } = this;
                if (canvas.width < e.width || canvas.height < e.height) {
                    canvas.width = Math.max(e.width, e.width);
                    canvas.height = Math.max(e.height, e.height);
                }
            }
            initFromContext(e) {
                this.gl = e;
                this.webGLVersion = e instanceof f.DOMAdapter.get().getWebGLRenderingContext() ? 1 : 2;
                this.getExtensions();
                this.validateContext(e);
                this._renderer.runners.contextChange.emit(e);
                let canvas = this._renderer.view.canvas;
                canvas.addEventListener("webglcontextlost", this.handleContextLost, false);
                canvas.addEventListener("webglcontextrestored", this.handleContextRestored, false);
            }
            createContext(e, t) {
                let r;
                let canvas = this.canvas;
                if (e === 2) {
                    r = canvas.getContext("webgl2", t);
                }
                if (!r && !(r = canvas.getContext("webgl", t))) {
                    throw Error("This browser does not support WebGL. Try using the canvas renderer");
                }
                this.gl = r;
                this.initFromContext(this.gl);
            }
            getExtensions() {
                let { gl } = this;
                let t = {
                    anisotropicFiltering: gl.getExtension("EXT_texture_filter_anisotropic"),
                    floatTextureLinear: gl.getExtension("OES_texture_float_linear"),
                    s3tc: gl.getExtension("WEBGL_compressed_texture_s3tc"),
                    s3tc_sRGB: gl.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                    etc: gl.getExtension("WEBGL_compressed_texture_etc"),
                    etc1: gl.getExtension("WEBGL_compressed_texture_etc1"),
                    pvrtc: gl.getExtension("WEBGL_compressed_texture_pvrtc") || gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                    atc: gl.getExtension("WEBGL_compressed_texture_atc"),
                    astc: gl.getExtension("WEBGL_compressed_texture_astc"),
                    bptc: gl.getExtension("EXT_texture_compression_bptc"),
                    rgtc: gl.getExtension("EXT_texture_compression_rgtc"),
                    loseContext: gl.getExtension("WEBGL_lose_context")
                };
                if (this.webGLVersion === 1) {
                    this.extensions = {
                        ...t,
                        drawBuffers: gl.getExtension("WEBGL_draw_buffers"),
                        depthTexture: gl.getExtension("WEBGL_depth_texture"),
                        vertexArrayObject: gl.getExtension("OES_vertex_array_object") || gl.getExtension("MOZ_OES_vertex_array_object") || gl.getExtension("WEBKIT_OES_vertex_array_object"),
                        uint32ElementIndex: gl.getExtension("OES_element_index_uint"),
                        floatTexture: gl.getExtension("OES_texture_float"),
                        floatTextureLinear: gl.getExtension("OES_texture_float_linear"),
                        textureHalfFloat: gl.getExtension("OES_texture_half_float"),
                        textureHalfFloatLinear: gl.getExtension("OES_texture_half_float_linear"),
                        vertexAttribDivisorANGLE: gl.getExtension("ANGLE_instanced_arrays"),
                        srgb: gl.getExtension("EXT_sRGB")
                    };
                } else {
                    this.extensions = {
                        ...t,
                        colorBufferFloat: gl.getExtension("EXT_color_buffer_float")
                    };
                    let r = gl.getExtension("WEBGL_provoking_vertex");
                    if (r) {
                        r.provokingVertexWEBGL(r.FIRST_VERTEX_CONVENTION_WEBGL);
                    }
                }
            }
            handleContextLost(e) {
                e.preventDefault();
                if (this._contextLossForced) {
                    this._contextLossForced = false;
                    setTimeout(()=>{
                        this.gl.isContextLost() && this.extensions.loseContext?.restoreContext();
                    }, 0);
                }
            }
            handleContextRestored() {
                this.getExtensions();
                this._renderer.runners.contextChange.emit(this.gl);
            }
            destroy() {
                let canvas = this._renderer.view.canvas;
                this._renderer = null;
                canvas.removeEventListener("webglcontextlost", this.handleContextLost);
                canvas.removeEventListener("webglcontextrestored", this.handleContextRestored);
                this.gl.useProgram(null);
                this.extensions.loseContext?.loseContext();
            }
            forceContextLoss() {
                this.extensions.loseContext?.loseContext();
                this._contextLossForced = true;
            }
            validateContext(e) {
                let t = e.getContextAttributes();
                if (t && !t.stencil) {
                    m.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
                }
                let supports = this.supports;
                let i = this.webGLVersion === 2;
                let extensions = this.extensions;
                supports.uint32Indices = i || !!extensions.uint32ElementIndex;
                supports.uniformBufferObject = i;
                supports.vertexArrayObject = i || !!extensions.vertexArrayObject;
                supports.srgbTextures = i || !!extensions.srgb;
                supports.nonPowOf2wrapping = i;
                supports.nonPowOf2mipmaps = i;
                supports.msaa = i;
                if (!supports.uint32Indices) {
                    m.warn("Provided WebGL context does not support 32 index buffer, large scenes may not render correctly");
                }
            }
        };
        g.extension = {
            type: [
                s.ExtensionType.WebGLSystem
            ],
            name: "context"
        };
        g.defaultOptions = {
            context: null,
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            powerPreference: undefined,
            preferWebGLVersion: 2,
            multiView: false
        };
        e.s([
            "GlContextSystem",
            0,
            g
        ], 204126);
        var E = e.i(434367);
        var T = e.i(261095);
        r = p || {};
        r[r.RGBA = 6408] = "RGBA";
        r[r.RGB = 6407] = "RGB";
        r[r.RG = 33319] = "RG";
        r[r.RED = 6403] = "RED";
        r[r.RGBA_INTEGER = 36249] = "RGBA_INTEGER";
        r[r.RGB_INTEGER = 36248] = "RGB_INTEGER";
        r[r.RG_INTEGER = 33320] = "RG_INTEGER";
        r[r.RED_INTEGER = 36244] = "RED_INTEGER";
        r[r.ALPHA = 6406] = "ALPHA";
        r[r.LUMINANCE = 6409] = "LUMINANCE";
        r[r.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA";
        r[r.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT";
        r[r.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
        var p = r;
        i = R || {};
        i[i.TEXTURE_2D = 3553] = "TEXTURE_2D";
        i[i.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP";
        i[i.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY";
        i[i.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
        i[i.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
        i[i.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
        i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
        i[i.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
        i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
        var R = i;
        a = x || {};
        a[a.CLAMP = 33071] = "CLAMP";
        a[a.REPEAT = 10497] = "REPEAT";
        a[a.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT";
        var x = a;
        n = S || {};
        n[n.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE";
        n[n.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT";
        n[n.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5";
        n[n.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4";
        n[n.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1";
        n[n.UNSIGNED_INT = 5125] = "UNSIGNED_INT";
        n[n.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
        n[n.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
        n[n.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8";
        n[n.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
        n[n.BYTE = 5120] = "BYTE";
        n[n.SHORT = 5122] = "SHORT";
        n[n.INT = 5124] = "INT";
        n[n.FLOAT = 5126] = "FLOAT";
        n[n.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
        n[n.HALF_FLOAT = 36193] = "HALF_FLOAT";
        var S = n;
        e.s([
            "GL_FORMATS",
            0,
            p,
            "GL_TARGETS",
            0,
            R,
            "GL_TYPES",
            0,
            S,
            "GL_WRAP_MODES",
            0,
            x
        ], 500378);
        let b = {
            uint8x2: S.UNSIGNED_BYTE,
            uint8x4: S.UNSIGNED_BYTE,
            sint8x2: S.BYTE,
            sint8x4: S.BYTE,
            unorm8x2: S.UNSIGNED_BYTE,
            unorm8x4: S.UNSIGNED_BYTE,
            snorm8x2: S.BYTE,
            snorm8x4: S.BYTE,
            uint16x2: S.UNSIGNED_SHORT,
            uint16x4: S.UNSIGNED_SHORT,
            sint16x2: S.SHORT,
            sint16x4: S.SHORT,
            unorm16x2: S.UNSIGNED_SHORT,
            unorm16x4: S.UNSIGNED_SHORT,
            snorm16x2: S.SHORT,
            snorm16x4: S.SHORT,
            float16x2: S.HALF_FLOAT,
            float16x4: S.HALF_FLOAT,
            float32: S.FLOAT,
            float32x2: S.FLOAT,
            float32x3: S.FLOAT,
            float32x4: S.FLOAT,
            uint32: S.UNSIGNED_INT,
            uint32x2: S.UNSIGNED_INT,
            uint32x3: S.UNSIGNED_INT,
            uint32x4: S.UNSIGNED_INT,
            sint32: S.INT,
            sint32x2: S.INT,
            sint32x3: S.INT,
            sint32x4: S.INT
        };
        function v(e) {
            return b[e] ?? b.float32;
        }
        e.s([
            "getGlTypeFromFormat",
            0,
            v
        ], 6948);
        let A = {
            "point-list": 0,
            "line-list": 1,
            "line-strip": 3,
            "triangle-list": 4,
            "triangle-strip": 5
        };
        class G {
            constructor(){
                this.vaoCache = Object.create(null);
            }
            destroy() {
                this.vaoCache = Object.create(null);
            }
        }
        class B {
            constructor(e){
                this._renderer = e;
                this._activeGeometry = null;
                this._activeVao = null;
                this.hasVao = true;
                this.hasInstance = true;
                this._managedGeometries = new u.GCManagedHash({
                    renderer: e,
                    type: "resource",
                    onUnload: this.onGeometryUnload.bind(this),
                    name: "glGeometry"
                });
            }
            contextChange() {
                let e = this.gl = this._renderer.gl;
                if (!this._renderer.context.supports.vertexArrayObject) {
                    throw Error("[PixiJS] Vertex Array Objects are not supported on this device");
                }
                this.destroyAll(true);
                let vertexArrayObject = this._renderer.context.extensions.vertexArrayObject;
                if (vertexArrayObject) {
                    e.createVertexArray = ()=>vertexArrayObject.createVertexArrayOES();
                    e.bindVertexArray = (e)=>vertexArrayObject.bindVertexArrayOES(e);
                    e.deleteVertexArray = (e)=>vertexArrayObject.deleteVertexArrayOES(e);
                }
                let vertexAttribDivisorANGLE = this._renderer.context.extensions.vertexAttribDivisorANGLE;
                if (vertexAttribDivisorANGLE) {
                    e.drawArraysInstanced = (e, t, i, a)=>{
                        vertexAttribDivisorANGLE.drawArraysInstancedANGLE(e, t, i, a);
                    };
                    e.drawElementsInstanced = (e, t, i, a, n)=>{
                        vertexAttribDivisorANGLE.drawElementsInstancedANGLE(e, t, i, a, n);
                    };
                    e.vertexAttribDivisor = (e, t)=>vertexAttribDivisorANGLE.vertexAttribDivisorANGLE(e, t);
                }
                this._activeGeometry = null;
                this._activeVao = null;
            }
            bind(e, t) {
                let r = this.gl;
                this._activeGeometry = e;
                let i = this.getVao(e, t);
                if (this._activeVao !== i) {
                    this._activeVao = i;
                    r.bindVertexArray(i);
                }
                this.updateBuffers();
            }
            resetState() {
                this.unbind();
            }
            updateBuffers() {
                let _activeGeometry = this._activeGeometry;
                let buffer = this._renderer.buffer;
                for(let r = 0; r < _activeGeometry.buffers.length; r++){
                    let i = _activeGeometry.buffers[r];
                    buffer.updateBuffer(i);
                }
                _activeGeometry._gcLastUsed = this._renderer.gc.now;
            }
            checkCompatibility(e, t) {
                let e_attributes = e.attributes;
                let t__attributeData = t._attributeData;
                for(let e in t__attributeData){
                    if (!e_attributes[e]) {
                        throw Error(`shader and geometry incompatible, geometry missing the "${e}" attribute`);
                    }
                }
            }
            getSignature(e, t) {
                let e_attributes = e.attributes;
                let t__attributeData = t._attributeData;
                let a = [
                    "g",
                    e.uid
                ];
                for(let e in e_attributes){
                    if (t__attributeData[e]) {
                        a.push(e, t__attributeData[e].location);
                    }
                }
                return a.join("-");
            }
            getVao(e, t) {
                return e._gpuData[this._renderer.uid]?.vaoCache[t._key] || this.initGeometryVao(e, t);
            }
            initGeometryVao(e, t, r = true) {
                let i = this._renderer.gl;
                let buffer = this._renderer.buffer;
                this._renderer.shader._getProgramData(t);
                this.checkCompatibility(e, t);
                let n = this.getSignature(e, t);
                let s = e._gpuData[this._renderer.uid];
                if (!s) {
                    s = new G;
                    e._gpuData[this._renderer.uid] = s;
                    this._managedGeometries.add(e);
                }
                let s_vaoCache = s.vaoCache;
                let l = s_vaoCache[n];
                if (l) {
                    s_vaoCache[t._key] = l;
                    return l;
                }
                T.ensureAttributes(e, t._attributeData);
                let e_buffers = e.buffers;
                l = i.createVertexArray();
                i.bindVertexArray(l);
                for(let e = 0; e < e_buffers.length; e++){
                    let t = e_buffers[e];
                    buffer.bind(t);
                }
                this.activateVao(e, t);
                s_vaoCache[t._key] = l;
                s_vaoCache[n] = l;
                i.bindVertexArray(null);
                return l;
            }
            onGeometryUnload(e, t = false) {
                let r = e._gpuData[this._renderer.uid];
                if (!r) {
                    return;
                }
                let r_vaoCache = r.vaoCache;
                if (!t) {
                    for(let e in r_vaoCache){
                        if (this._activeVao !== r_vaoCache[e]) {
                            this.resetState();
                        }
                        this.gl.deleteVertexArray(r_vaoCache[e]);
                    }
                }
            }
            destroyAll(e = false) {
                this._managedGeometries.removeAll(e);
            }
            activateVao(e, t) {
                let r = this._renderer.gl;
                let buffer = this._renderer.buffer;
                let e_attributes = e.attributes;
                if (e.indexBuffer) {
                    buffer.bind(e.indexBuffer);
                }
                let n = null;
                for(let e in e_attributes){
                    let s = e_attributes[e];
                    let o = s.buffer;
                    let l = buffer.getGlBuffer(o);
                    let u = t._attributeData[e];
                    if (u) {
                        if (n !== l) {
                            buffer.bind(o);
                            n = l;
                        }
                        let e = u.location;
                        r.enableVertexAttribArray(e);
                        let t = E.getAttributeInfoFromFormat(s.format);
                        let a = v(s.format);
                        if (u.format?.substring(1, 4) === "int") {
                            r.vertexAttribIPointer(e, t.size, a, s.stride, s.offset);
                        } else {
                            r.vertexAttribPointer(e, t.size, a, t.normalised, s.stride, s.offset);
                        }
                        if (s.instance) {
                            if (this.hasInstance) {
                                let t = s.divisor ?? 1;
                                r.vertexAttribDivisor(e, t);
                            } else {
                                throw Error("geometry error, GPU Instancing is not supported on this device");
                            }
                        }
                    }
                }
            }
            draw(e, t, r, i) {
                let { gl } = this._renderer;
                let _activeGeometry = this._activeGeometry;
                let s = A[e || _activeGeometry.topology];
                i ??= _activeGeometry.instanceCount;
                if (_activeGeometry.indexBuffer) {
                    let e = _activeGeometry.indexBuffer.data.BYTES_PER_ELEMENT;
                    let o = e === 2 ? gl.UNSIGNED_SHORT : gl.UNSIGNED_INT;
                    if (i !== 1) {
                        gl.drawElementsInstanced(s, t || _activeGeometry.indexBuffer.data.length, o, (r || 0) * e, i);
                    } else {
                        gl.drawElements(s, t || _activeGeometry.indexBuffer.data.length, o, (r || 0) * e);
                    }
                } else {
                    if (i !== 1) {
                        gl.drawArraysInstanced(s, r || 0, t || _activeGeometry.getSize(), i);
                    } else {
                        gl.drawArrays(s, r || 0, t || _activeGeometry.getSize());
                    }
                }
                return this;
            }
            unbind() {
                this.gl.bindVertexArray(null);
                this._activeVao = null;
                this._activeGeometry = null;
            }
            destroy() {
                this._managedGeometries.destroy();
                this._renderer = null;
                this.gl = null;
                this._activeVao = null;
                this._activeGeometry = null;
            }
        }
        B.extension = {
            type: [
                s.ExtensionType.WebGLSystem
            ],
            name: "geometry"
        };
        e.s([
            "GlGeometryGpuData",
            0,
            G,
            "GlGeometrySystem",
            0,
            B
        ], 768339);
        var y = e.i(719885);
        var C = e.i(761149);
        var N = e.i(317765);
        var D = e.i(337654);
        var I = e.i(550645);
        let geometry = new y.Geometry({
            attributes: {
                aPosition: [
                    -1,
                    -1,
                    3,
                    -1,
                    -1,
                    3
                ]
            }
        });
        let L = class e {
            constructor(e){
                this.useBackBuffer = false;
                this._useBackBufferThisRender = false;
                this._renderer = e;
            }
            init(t = {}) {
                let { useBackBuffer, antialias } = {
                    ...e.defaultOptions,
                    ...t
                };
                this.useBackBuffer = useBackBuffer;
                this._antialias = antialias;
                if (!this._renderer.context.supports.msaa) {
                    m.warn("antialiasing, is not supported on when using the back buffer");
                    this._antialias = false;
                }
                this._state = o.State.for2d();
                let a = new I.GlProgram({
                    vertex: `
                attribute vec2 aPosition;
                out vec2 vUv;

                void main() {
                    gl_Position = vec4(aPosition, 0.0, 1.0);

                    vUv = (aPosition + 1.0) / 2.0;

                    // flip dem UVs
                    vUv.y = 1.0 - vUv.y;
                }`,
                    fragment: `
                in vec2 vUv;
                out vec4 finalColor;

                uniform sampler2D uTexture;

                void main() {
                    finalColor = texture(uTexture, vUv);
                }`,
                    name: "big-triangle"
                });
                this._bigTriangleShader = new C.Shader({
                    glProgram: a,
                    resources: {
                        uTexture: D.Texture.WHITE.source
                    }
                });
            }
            renderStart(e) {
                let t = this._renderer.renderTarget.getRenderTarget(e.target);
                this._useBackBufferThisRender = this.useBackBuffer && !!t.isRoot;
                if (this._useBackBufferThisRender) {
                    let t = this._renderer.renderTarget.getRenderTarget(e.target);
                    this._targetTexture = t.colorTexture;
                    e.target = this._getBackBufferTexture(t.colorTexture);
                }
            }
            renderEnd() {
                this._presentBackBuffer();
            }
            _presentBackBuffer() {
                let _renderer = this._renderer;
                _renderer.renderTarget.finishRenderPass();
                if (this._useBackBufferThisRender) {
                    _renderer.renderTarget.bind(this._targetTexture, false);
                    this._bigTriangleShader.resources.uTexture = this._backBufferTexture.source;
                    _renderer.encoder.draw({
                        geometry,
                        shader: this._bigTriangleShader,
                        state: this._state
                    });
                }
            }
            _getBackBufferTexture(e) {
                this._backBufferTexture = this._backBufferTexture || new D.Texture({
                    source: new N.TextureSource({
                        width: e.width,
                        height: e.height,
                        resolution: e._resolution,
                        antialias: this._antialias
                    })
                });
                this._backBufferTexture.source.resize(e.width, e.height, e._resolution);
                return this._backBufferTexture;
            }
            destroy() {
                if (this._backBufferTexture) {
                    this._backBufferTexture.destroy();
                    this._backBufferTexture = null;
                }
            }
        };
        L.extension = {
            type: [
                s.ExtensionType.WebGLSystem
            ],
            name: "backBuffer",
            priority: 1
        };
        L.defaultOptions = {
            useBackBuffer: false
        };
        e.s([
            "GlBackBufferSystem",
            0,
            L
        ], 871602);
        class F {
            constructor(e){
                this._colorMaskCache = 15;
                this._renderer = e;
            }
            setMask(e) {
                if (this._colorMaskCache !== e) {
                    this._colorMaskCache = e;
                    this._renderer.gl.colorMask(!!(8 & e), !!(4 & e), !!(2 & e), !!(1 & e));
                }
            }
        }
        F.extension = {
            type: [
                s.ExtensionType.WebGLSystem
            ],
            name: "colorMask"
        };
        e.s([
            "GlColorMaskSystem",
            0,
            F
        ], 262609);
        class M {
            constructor(e){
                this.commandFinished = Promise.resolve();
                this._renderer = e;
            }
            setGeometry(e, t) {
                this._renderer.geometry.bind(e, t.glProgram);
            }
            finishRenderPass() {}
            draw(e) {
                let _renderer = this._renderer;
                let { geometry, shader, state, skipSync, topology, size, start, instanceCount } = e;
                _renderer.shader.bind(shader, skipSync);
                _renderer.geometry.bind(geometry, _renderer.shader._activeProgram);
                if (state) {
                    _renderer.state.set(state);
                }
                _renderer.geometry.draw(topology, size, start, instanceCount ?? geometry.instanceCount);
            }
            destroy() {
                this._renderer = null;
            }
        }
        M.extension = {
            type: [
                s.ExtensionType.WebGLSystem
            ],
            name: "encoder"
        };
        e.s([
            "GlEncoderSystem",
            0,
            M
        ], 270143);
        var O = e.i(272589);
        class P {
            constructor(e){
                this._renderer = e;
            }
            contextChange() {
                let e = this._renderer.gl;
                this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
                this.maxBatchableTextures = O.checkMaxIfStatementsInShader(this.maxTextures, e);
                let t = this._renderer.context.webGLVersion === 2;
                this.maxUniformBindings = t ? e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
            }
            destroy() {}
        }
        P.extension = {
            type: [
                s.ExtensionType.WebGLSystem
            ],
            name: "limits"
        };
        e.s([
            "GlLimitsSystem",
            0,
            P
        ], 945168);
    },
    489405,
    (e)=>{
        "use strict";
        e.s([
            "GlRenderTarget",
            0,
            class {
                constructor(){
                    this.width = -1;
                    this.height = -1;
                    this.msaa = false;
                    this._attachedMipLevel = 0;
                    this._attachedLayer = 0;
                    this.msaaRenderBuffer = [];
                }
            }
        ]);
    },
    403204,
    879238,
    109636,
    448197,
    322183,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(324086);
        var i = e.i(589627);
        class a {
            constructor(e){
                this._stencilCache = {
                    enabled: false,
                    stencilReference: 0,
                    stencilMode: i.STENCIL_MODES.NONE
                };
                this._renderTargetStencilState = Object.create(null);
                e.renderTarget.onRenderTargetChange.add(this);
            }
            contextChange(e) {
                this._gl = e;
                this._comparisonFuncMapping = {
                    always: e.ALWAYS,
                    never: e.NEVER,
                    equal: e.EQUAL,
                    "not-equal": e.NOTEQUAL,
                    less: e.LESS,
                    "less-equal": e.LEQUAL,
                    greater: e.GREATER,
                    "greater-equal": e.GEQUAL
                };
                this._stencilOpsMapping = {
                    keep: e.KEEP,
                    zero: e.ZERO,
                    replace: e.REPLACE,
                    invert: e.INVERT,
                    "increment-clamp": e.INCR,
                    "decrement-clamp": e.DECR,
                    "increment-wrap": e.INCR_WRAP,
                    "decrement-wrap": e.DECR_WRAP
                };
                this.resetState();
            }
            onRenderTargetChange(e) {
                if (this._activeRenderTarget === e) {
                    return;
                }
                this._activeRenderTarget = e;
                let t = this._renderTargetStencilState[e.uid];
                if (!t) {
                    t = this._renderTargetStencilState[e.uid] = {
                        stencilMode: i.STENCIL_MODES.DISABLED,
                        stencilReference: 0
                    };
                }
                this.setStencilMode(t.stencilMode, t.stencilReference);
            }
            resetState() {
                this._stencilCache.enabled = false;
                this._stencilCache.stencilMode = i.STENCIL_MODES.NONE;
                this._stencilCache.stencilReference = 0;
            }
            setStencilMode(e, t) {
                let a = this._renderTargetStencilState[this._activeRenderTarget.uid];
                let _gl = this._gl;
                let s = r.GpuStencilModesToPixi[e];
                let _stencilCache = this._stencilCache;
                a.stencilMode = e;
                a.stencilReference = t;
                if (e === i.STENCIL_MODES.DISABLED) {
                    if (this._stencilCache.enabled) {
                        this._stencilCache.enabled = false;
                        _gl.disable(_gl.STENCIL_TEST);
                    }
                    return;
                }
                if (!this._stencilCache.enabled) {
                    this._stencilCache.enabled = true;
                    _gl.enable(_gl.STENCIL_TEST);
                }
                if (e !== _stencilCache.stencilMode || _stencilCache.stencilReference !== t) {
                    _stencilCache.stencilMode = e;
                    _stencilCache.stencilReference = t;
                    _gl.stencilFunc(this._comparisonFuncMapping[s.stencilBack.compare], t, 255);
                    _gl.stencilOp(_gl.KEEP, _gl.KEEP, this._stencilOpsMapping[s.stencilBack.passOp]);
                }
            }
        }
        a.extension = {
            type: [
                t.ExtensionType.WebGLSystem
            ],
            name: "stencil"
        };
        e.s([
            "GlStencilSystem",
            0,
            a
        ], 403204);
        var n = e.i(627760);
        let s = {
            f32: 4,
            i32: 4,
            "vec2<f32>": 8,
            "vec3<f32>": 12,
            "vec4<f32>": 16,
            "vec2<i32>": 8,
            "vec3<i32>": 12,
            "vec4<i32>": 16,
            "mat2x2<f32>": 32,
            "mat3x3<f32>": 48,
            "mat4x4<f32>": 64
        };
        function createUboElements(e) {
            let uboElements = e.map((data)=>({
                    data,
                    offset: 0,
                    size: 0
                }));
            let r = 0;
            let i = 0;
            for(let e = 0; e < uboElements.length; e++){
                let uboElement = uboElements[e];
                if (!(r = s[uboElement.data.type])) {
                    throw Error(`Unknown type ${uboElement.data.type}`);
                }
                if (uboElement.data.size > 1) {
                    r = Math.max(r, 16) * uboElement.data.size;
                }
                let n = r === 12 ? 16 : r;
                uboElement.size = r;
                let o = i % 16;
                if (o > 0 && 16 - o < n) {
                    i += (16 - o) % 16;
                } else {
                    i += (r - o % r) % r;
                }
                uboElement.offset = i;
                i += r;
            }
            return {
                uboElements,
                size: i = 16 * Math.ceil(i / 16)
            };
        }
        e.s([
            "WGSL_TO_STD40_SIZE",
            0,
            s,
            "createUboElementsSTD40",
            0,
            createUboElements
        ], 879238);
        var l = e.i(902504);
        var u = e.i(422537);
        function _(e, t) {
            let r = Math.max(s[e.data.type] / 16, 1);
            let i = e.data.value.length / e.data.size;
            let a = (4 - i % 4) % 4;
            let n = e.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
            return `
        v = uv.${e.data.name};
        offset += ${t};

        arrayOffset = offset;

        t = 0;

        for(var i=0; i < ${e.data.size * r}; i++)
        {
            for(var j = 0; j < ${i}; j++)
            {
                ${n}[arrayOffset++] = v[t++];
            }
            ${a !== 0 ? `arrayOffset += ${a};` : ""}
        }
    `;
        }
        function generateUboSync(e) {
            return l.createUboSyncFunction(e, "uboStd40", _, u.uboSyncFunctionsSTD40);
        }
        e.s([
            "generateArraySyncSTD40",
            0,
            _
        ], 109636);
        e.s([
            "createUboSyncFunctionSTD40",
            0,
            generateUboSync
        ], 448197);
        class h extends n.UboSystem {
            constructor(){
                super({
                    createUboElements,
                    generateUboSync
                });
            }
        }
        h.extension = {
            type: [
                t.ExtensionType.WebGLSystem
            ],
            name: "ubo"
        };
        e.s([
            "GlUboSystem",
            0,
            h
        ], 322183);
    },
    29542,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(13814);
        var i = e.i(727453);
        var a = e.i(740905);
        var n = e.i(164868);
        var s = e.i(497544);
        var o = e.i(162450);
        var l = e.i(63146);
        var u = e.i(204126);
        var _ = e.i(768339);
        var c = e.i(871602);
        var h = e.i(262609);
        var d = e.i(270143);
        var f = e.i(945168);
        var m = e.i(403204);
        var g = e.i(322183);
        var E = e.i(529002);
        var T = e.i(962768);
        var p = e.i(739983);
        var R = e.i(444533);
        var x = e.i(701993);
        let S = [
            ...s.SharedSystems,
            g.GlUboSystem,
            c.GlBackBufferSystem,
            u.GlContextSystem,
            f.GlLimitsSystem,
            l.GlBufferSystem,
            x.GlTextureSystem,
            E.GlRenderTargetSystem,
            _.GlGeometrySystem,
            p.GlUniformGroupSystem,
            T.GlShaderSystem,
            d.GlEncoderSystem,
            R.GlStateSystem,
            m.GlStencilSystem,
            h.GlColorMaskSystem
        ];
        let b = [
            ...s.SharedRenderPipes
        ];
        let v = [
            a.GlBatchAdaptor,
            i.GlMeshAdaptor,
            r.GlGraphicsAdaptor
        ];
        let systems = [];
        let renderPipes = [];
        let renderPipeAdaptors = [];
        t.extensions.handleByNamedList(t.ExtensionType.WebGLSystem, systems);
        t.extensions.handleByNamedList(t.ExtensionType.WebGLPipes, renderPipes);
        t.extensions.handleByNamedList(t.ExtensionType.WebGLPipesAdaptor, renderPipeAdaptors);
        t.extensions.add(...S, ...b, ...v);
        class y extends n.AbstractRenderer {
            constructor(){
                super({
                    name: "webgl",
                    type: o.RendererType.WEBGL,
                    systems,
                    renderPipes,
                    renderPipeAdaptors
                });
            }
        }
        e.s([
            "WebGLRenderer",
            0,
            y
        ]);
    },
    529002,
    915907,
    435573,
    459980,
    235523,
    428993,
    196932,
    794604,
    788987,
    293592,
    135617,
    510091,
    962768,
    163281,
    200815,
    739983,
    485552,
    444533,
    61003,
    378977,
    800477,
    629057,
    657280,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(798299);
        var i = e.i(539088);
        var a = e.i(562140);
        var n = e.i(173156);
        var s = e.i(220892);
        var o = e.i(489405);
        class l {
            constructor(){
                this._clearColorCache = [
                    0,
                    0,
                    0,
                    0
                ];
                this._viewPortCache = new i.Rectangle;
            }
            init(e, t) {
                this._renderer = e;
                this._renderTargetSystem = t;
                e.runners.contextChange.add(this);
            }
            contextChange() {
                this._clearColorCache = [
                    0,
                    0,
                    0,
                    0
                ];
                this._viewPortCache = new i.Rectangle;
                let e = this._renderer.gl;
                this._drawBuffersCache = [];
                for(let length = 1; length <= 16; length++){
                    this._drawBuffersCache[length] = Array.from({
                        length
                    }, (t, r)=>e.COLOR_ATTACHMENT0 + r);
                }
            }
            copyToTexture(e, t, r, i, a) {
                let _renderTargetSystem = this._renderTargetSystem;
                let _renderer = this._renderer;
                let o = _renderTargetSystem.getGpuRenderTarget(e);
                let l = _renderer.gl;
                this.finishRenderPass(e);
                l.bindFramebuffer(l.FRAMEBUFFER, o.resolveTargetFramebuffer);
                _renderer.texture.bind(t, 0);
                l.copyTexSubImage2D(l.TEXTURE_2D, 0, a.x, a.y, r.x, r.y, i.width, i.height);
                return t;
            }
            startRenderPass(e, t = true, r, i, a = 0, n = 0) {
                let _renderTargetSystem = this._renderTargetSystem;
                let e_colorTexture = e.colorTexture;
                let l = _renderTargetSystem.getGpuRenderTarget(e);
                if (n !== 0 && this._renderer.context.webGLVersion < 2) {
                    throw Error("[RenderTargetSystem] Rendering to array layers requires WebGL2.");
                }
                if (a > 0) {
                    if (l.msaa) {
                        throw Error("[RenderTargetSystem] Rendering to mip levels is not supported with MSAA render targets.");
                    }
                    if (this._renderer.context.webGLVersion < 2) {
                        throw Error("[RenderTargetSystem] Rendering to mip levels requires WebGL2.");
                    }
                }
                let u = i.y;
                if (e.isRoot) {
                    u = e_colorTexture.pixelHeight - i.height - i.y;
                }
                e.colorTextures.forEach((e)=>{
                    this._renderer.texture.unbind(e);
                });
                let _ = this._renderer.gl;
                _.bindFramebuffer(_.FRAMEBUFFER, l.framebuffer);
                if (!(e.isRoot || l._attachedMipLevel === a && l._attachedLayer === n)) {
                    e.colorTextures.forEach((e, t)=>{
                        let r = this._renderer.texture.getGlSource(e);
                        if (r.target === _.TEXTURE_2D) {
                            if (n !== 0) {
                                throw Error("[RenderTargetSystem] layer must be 0 when rendering to 2D textures in WebGL.");
                            }
                            _.framebufferTexture2D(_.FRAMEBUFFER, _.COLOR_ATTACHMENT0 + t, _.TEXTURE_2D, r.texture, a);
                        } else if (r.target === _.TEXTURE_2D_ARRAY) {
                            if (this._renderer.context.webGLVersion < 2) {
                                throw Error("[RenderTargetSystem] Rendering to 2D array textures requires WebGL2.");
                            }
                            _.framebufferTextureLayer(_.FRAMEBUFFER, _.COLOR_ATTACHMENT0 + t, r.texture, a, n);
                        } else if (r.target === _.TEXTURE_CUBE_MAP) {
                            if (n < 0 || n > 5) {
                                throw Error("[RenderTargetSystem] Cube map layer must be between 0 and 5.");
                            }
                            _.framebufferTexture2D(_.FRAMEBUFFER, _.COLOR_ATTACHMENT0 + t, _.TEXTURE_CUBE_MAP_POSITIVE_X + n, r.texture, a);
                        } else {
                            throw Error("[RenderTargetSystem] Unsupported texture target for render-to-layer in WebGL.");
                        }
                    });
                    l._attachedMipLevel = a;
                    l._attachedLayer = n;
                }
                if (e.colorTextures.length > 1) {
                    this._setDrawBuffers(e, _);
                }
                let _viewPortCache = this._viewPortCache;
                if (_viewPortCache.x !== i.x || _viewPortCache.y !== u || _viewPortCache.width !== i.width || _viewPortCache.height !== i.height) {
                    _viewPortCache.x = i.x;
                    _viewPortCache.y = u;
                    _viewPortCache.width = i.width;
                    _viewPortCache.height = i.height;
                    _.viewport(i.x, u, i.width, i.height);
                }
                if (!l.depthStencilRenderBuffer && (e.stencil || e.depth)) {
                    this._initStencil(l);
                }
                this.clear(e, t, r);
            }
            finishRenderPass(e) {
                let t = this._renderTargetSystem.getGpuRenderTarget(e);
                if (!t.msaa) {
                    return;
                }
                let r = this._renderer.gl;
                r.bindFramebuffer(r.FRAMEBUFFER, t.resolveTargetFramebuffer);
                r.bindFramebuffer(r.READ_FRAMEBUFFER, t.framebuffer);
                r.blitFramebuffer(0, 0, t.width, t.height, 0, 0, t.width, t.height, r.COLOR_BUFFER_BIT, r.NEAREST);
                r.bindFramebuffer(r.FRAMEBUFFER, t.framebuffer);
            }
            initGpuRenderTarget(e) {
                let t = this._renderer.gl;
                let r = new o.GlRenderTarget;
                r._attachedMipLevel = 0;
                r._attachedLayer = 0;
                if (e.colorTexture instanceof n.CanvasSource) {
                    this._renderer.context.ensureCanvasSize(e.colorTexture.resource);
                    r.framebuffer = null;
                } else {
                    this._initColor(e, r);
                    t.bindFramebuffer(t.FRAMEBUFFER, null);
                }
                return r;
            }
            destroyGpuRenderTarget(e) {
                let t = this._renderer.gl;
                if (e.framebuffer) {
                    t.deleteFramebuffer(e.framebuffer);
                    e.framebuffer = null;
                }
                if (e.resolveTargetFramebuffer) {
                    t.deleteFramebuffer(e.resolveTargetFramebuffer);
                    e.resolveTargetFramebuffer = null;
                }
                if (e.depthStencilRenderBuffer) {
                    t.deleteRenderbuffer(e.depthStencilRenderBuffer);
                    e.depthStencilRenderBuffer = null;
                }
                e.msaaRenderBuffer.forEach((e)=>{
                    t.deleteRenderbuffer(e);
                });
                e.msaaRenderBuffer = null;
            }
            clear(e, t, r, i, a = 0, n = 0) {
                if (!t) {
                    return;
                }
                if (n !== 0) {
                    throw Error("[RenderTargetSystem] Clearing array layers is not supported in WebGL renderer.");
                }
                let _renderTargetSystem = this._renderTargetSystem;
                if (typeof t === "boolean") {
                    t = t ? s.CLEAR.ALL : s.CLEAR.NONE;
                }
                let l = this._renderer.gl;
                if (t & s.CLEAR.COLOR) {
                    r ??= _renderTargetSystem.defaultClearColor;
                    let e = this._clearColorCache;
                    let t = r;
                    if (e[0] !== t[0] || e[1] !== t[1] || e[2] !== t[2] || e[3] !== t[3]) {
                        e[0] = t[0];
                        e[1] = t[1];
                        e[2] = t[2];
                        e[3] = t[3];
                        l.clearColor(t[0], t[1], t[2], t[3]);
                    }
                }
                l.clear(t);
            }
            resizeGpuRenderTarget(e) {
                if (e.isRoot) {
                    return;
                }
                let t = this._renderTargetSystem.getGpuRenderTarget(e);
                this._resizeColor(e, t);
                if (e.stencil || e.depth) {
                    this._resizeStencil(t);
                }
            }
            _initColor(e, t) {
                let _renderer = this._renderer;
                let i = _renderer.gl;
                let n = i.createFramebuffer();
                t.resolveTargetFramebuffer = n;
                i.bindFramebuffer(i.FRAMEBUFFER, n);
                t.width = e.colorTexture.source.pixelWidth;
                t.height = e.colorTexture.source.pixelHeight;
                e.colorTextures.forEach((e, n)=>{
                    let e_source = e.source;
                    e_source.antialias && (_renderer.context.supports.msaa ? t.msaa = true : a.warn("[RenderTexture] Antialiasing on textures is not supported in WebGL1"));
                    _renderer.texture.bindSource(e_source, 0);
                    let o = _renderer.texture.getGlSource(e_source);
                    let o_texture = o.texture;
                    if (o.target === i.TEXTURE_2D) {
                        i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + n, i.TEXTURE_2D, o_texture, 0);
                    } else if (o.target === i.TEXTURE_2D_ARRAY) {
                        if (_renderer.context.webGLVersion < 2) {
                            throw Error("[RenderTargetSystem] TEXTURE_2D_ARRAY requires WebGL2.");
                        }
                        i.framebufferTextureLayer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + n, o_texture, 0, 0);
                    } else if (o.target === i.TEXTURE_CUBE_MAP) {
                        i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + n, i.TEXTURE_CUBE_MAP_POSITIVE_X, o_texture, 0);
                    } else {
                        throw Error("[RenderTargetSystem] Unsupported texture target for framebuffer attachment.");
                    }
                });
                if (t.msaa) {
                    let r = i.createFramebuffer();
                    t.framebuffer = r;
                    i.bindFramebuffer(i.FRAMEBUFFER, r);
                    e.colorTextures.forEach((e, r)=>{
                        let a = i.createRenderbuffer();
                        t.msaaRenderBuffer[r] = a;
                    });
                } else {
                    t.framebuffer = n;
                }
                this._resizeColor(e, t);
            }
            _resizeColor(e, t) {
                let source = e.colorTexture.source;
                t.width = source.pixelWidth;
                t.height = source.pixelHeight;
                t._attachedMipLevel = 0;
                t._attachedLayer = 0;
                e.colorTextures.forEach((e, t)=>{
                    if (t !== 0) {
                        e.source.resize(source.width, source.height, source._resolution);
                    }
                });
                if (t.msaa) {
                    let r = this._renderer;
                    let i = r.gl;
                    let a = t.framebuffer;
                    i.bindFramebuffer(i.FRAMEBUFFER, a);
                    e.colorTextures.forEach((e, a)=>{
                        let e_source = e.source;
                        r.texture.bindSource(e_source, 0);
                        let internalFormat = r.texture.getGlSource(e_source).internalFormat;
                        let o = t.msaaRenderBuffer[a];
                        i.bindRenderbuffer(i.RENDERBUFFER, o);
                        i.renderbufferStorageMultisample(i.RENDERBUFFER, 4, internalFormat, e_source.pixelWidth, e_source.pixelHeight);
                        i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + a, i.RENDERBUFFER, o);
                    });
                }
            }
            _initStencil(e) {
                if (e.framebuffer === null) {
                    return;
                }
                let t = this._renderer.gl;
                let r = t.createRenderbuffer();
                e.depthStencilRenderBuffer = r;
                t.bindRenderbuffer(t.RENDERBUFFER, r);
                t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, r);
                this._resizeStencil(e);
            }
            _resizeStencil(e) {
                let t = this._renderer.gl;
                t.bindRenderbuffer(t.RENDERBUFFER, e.depthStencilRenderBuffer);
                if (e.msaa) {
                    t.renderbufferStorageMultisample(t.RENDERBUFFER, 4, t.DEPTH24_STENCIL8, e.width, e.height);
                } else {
                    t.renderbufferStorage(t.RENDERBUFFER, this._renderer.context.webGLVersion === 2 ? t.DEPTH24_STENCIL8 : t.DEPTH_STENCIL, e.width, e.height);
                }
            }
            prerender(e) {
                let resource = e.colorTexture.resource;
                if (this._renderer.context.multiView && n.CanvasSource.test(resource)) {
                    this._renderer.context.ensureCanvasSize(resource);
                }
            }
            postrender(e) {
                if (this._renderer.context.multiView && n.CanvasSource.test(e.colorTexture.resource)) {
                    let t = this._renderer.context.canvas;
                    let r = e.colorTexture;
                    r.context2D.drawImage(t, 0, r.pixelHeight - t.height);
                }
            }
            _setDrawBuffers(e, t) {
                let length = e.colorTextures.length;
                let i = this._drawBuffersCache[length];
                if (this._renderer.context.webGLVersion === 1) {
                    let e = this._renderer.context.extensions.drawBuffers;
                    if (e) {
                        e.drawBuffersWEBGL(i);
                    } else {
                        a.warn("[RenderTexture] This WebGL1 context does not support rendering to multiple targets");
                    }
                } else {
                    t.drawBuffers(i);
                }
            }
        }
        e.s([
            "GlRenderTargetAdaptor",
            0,
            l
        ], 915907);
        class u extends r.RenderTargetSystem {
            constructor(e){
                super(e);
                this.adaptor = new l;
                this.adaptor.init(e, this);
            }
        }
        u.extension = {
            type: [
                t.ExtensionType.WebGLSystem
            ],
            name: "renderTarget"
        };
        e.s([
            "GlRenderTargetSystem",
            0,
            u
        ], 529002);
        var _ = e.i(693398);
        var c = e.i(153594);
        var h = e.i(317765);
        function d(e, t) {
            let r = [];
            let i = [
                `
        var g = s.groups;
        var sS = r.shader;
        var p = s.glProgram;
        var ugS = r.uniformGroup;
        var resources;
    `
            ];
            let a = false;
            let n = 0;
            let s = t._getProgramData(e.glProgram);
            for(let o in e.groups){
                let l = e.groups[o];
                for(let u in r.push(`
            resources = g[${o}].resources;
        `), l.resources){
                    let d = l.resources[u];
                    if (d instanceof c.UniformGroup) {
                        if (d.ubo) {
                            let t = e._uniformBindMap[o][Number(u)];
                            r.push(`
                        sS.bindUniformBlock(
                            resources[${u}],
                            '${t}',
                            ${e.glProgram._uniformBlockData[t].index}
                        );
                    `);
                        } else {
                            r.push(`
                        ugS.updateUniformGroup(resources[${u}], p, sD);
                    `);
                        }
                    } else if (d instanceof _.BufferResource) {
                        let t = e._uniformBindMap[o][Number(u)];
                        r.push(`
                    sS.bindUniformBlock(
                        resources[${u}],
                        '${t}',
                        ${e.glProgram._uniformBlockData[t].index}
                    );
                `);
                    } else if (d instanceof h.TextureSource) {
                        let l = e._uniformBindMap[o][u];
                        let _ = s.uniformData[l];
                        if (_) {
                            if (!a) {
                                a = true;
                                i.push(`
                        var tS = r.texture;
                        `);
                            }
                            t._gl.uniform1i(_.location, n);
                            r.push(`
                        tS.bind(resources[${u}], ${n});
                    `);
                            n++;
                        }
                    }
                }
            }
            return Function("r", "s", "sD", [
                ...i,
                ...r
            ].join("\n"));
        }
        e.s([
            "generateShaderSyncCode",
            0,
            d
        ], 435573);
        class f {
            constructor(e, t){
                this.program = e;
                this.uniformData = t;
                this.uniformGroups = {};
                this.uniformDirtyGroups = {};
                this.uniformBlockBindings = {};
            }
            destroy() {
                this.uniformData = null;
                this.uniformGroups = null;
                this.uniformDirtyGroups = null;
                this.uniformBlockBindings = null;
                this.program = null;
            }
        }
        function m(e, t, r) {
            let i = e.createShader(t);
            e.shaderSource(i, r);
            e.compileShader(i);
            return i;
        }
        function g(e) {
            let t = Array(e);
            for(let e = 0; e < t.length; e++){
                t[e] = false;
            }
            return t;
        }
        function E(e, t) {
            switch(e){
                case "float":
                case "int":
                case "uint":
                case "sampler2D":
                case "sampler2DArray":
                    return 0;
                case "vec2":
                    return new Float32Array(2 * t);
                case "vec3":
                    return new Float32Array(3 * t);
                case "vec4":
                    return new Float32Array(4 * t);
                case "ivec2":
                    return new Int32Array(2 * t);
                case "ivec3":
                    return new Int32Array(3 * t);
                case "ivec4":
                    return new Int32Array(4 * t);
                case "uvec2":
                    return new Uint32Array(2 * t);
                case "uvec3":
                    return new Uint32Array(3 * t);
                case "uvec4":
                    return new Uint32Array(4 * t);
                case "bool":
                    return false;
                case "bvec2":
                    return g(2 * t);
                case "bvec3":
                    return g(3 * t);
                case "bvec4":
                    return g(4 * t);
                case "mat2":
                    return new Float32Array([
                        1,
                        0,
                        0,
                        1
                    ]);
                case "mat3":
                    return new Float32Array([
                        1,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        1
                    ]);
                case "mat4":
                    return new Float32Array([
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1
                    ]);
            }
            return null;
        }
        e.s([
            "GlProgramData",
            0,
            f,
            "IGLUniformData",
            0,
            class {
            }
        ], 459980);
        e.s([
            "compileShader",
            0,
            m
        ], 235523);
        e.s([
            "defaultValue",
            0,
            E
        ], 428993);
        var T = e.i(434367);
        let p = null;
        let R = {
            FLOAT: "float",
            FLOAT_VEC2: "vec2",
            FLOAT_VEC3: "vec3",
            FLOAT_VEC4: "vec4",
            INT: "int",
            INT_VEC2: "ivec2",
            INT_VEC3: "ivec3",
            INT_VEC4: "ivec4",
            UNSIGNED_INT: "uint",
            UNSIGNED_INT_VEC2: "uvec2",
            UNSIGNED_INT_VEC3: "uvec3",
            UNSIGNED_INT_VEC4: "uvec4",
            BOOL: "bool",
            BOOL_VEC2: "bvec2",
            BOOL_VEC3: "bvec3",
            BOOL_VEC4: "bvec4",
            FLOAT_MAT2: "mat2",
            FLOAT_MAT3: "mat3",
            FLOAT_MAT4: "mat4",
            SAMPLER_2D: "sampler2D",
            INT_SAMPLER_2D: "sampler2D",
            UNSIGNED_INT_SAMPLER_2D: "sampler2D",
            SAMPLER_CUBE: "samplerCube",
            INT_SAMPLER_CUBE: "samplerCube",
            UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
            SAMPLER_2D_ARRAY: "sampler2DArray",
            INT_SAMPLER_2D_ARRAY: "sampler2DArray",
            UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
        };
        let x = {
            float: "float32",
            vec2: "float32x2",
            vec3: "float32x3",
            vec4: "float32x4",
            int: "sint32",
            ivec2: "sint32x2",
            ivec3: "sint32x3",
            ivec4: "sint32x4",
            uint: "uint32",
            uvec2: "uint32x2",
            uvec3: "uint32x3",
            uvec4: "uint32x4",
            bool: "uint32",
            bvec2: "uint32x2",
            bvec3: "uint32x3",
            bvec4: "uint32x4"
        };
        function S(e, t) {
            if (!p) {
                let t = Object.keys(R);
                p = {};
                for(let r = 0; r < t.length; ++r){
                    let i = t[r];
                    p[e[i]] = R[i];
                }
            }
            return p[t];
        }
        function b(e, t) {
            return x[S(e, t)] || "float32";
        }
        function v(e, t, r = false) {
            let i = {};
            let a = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
            for(let r = 0; r < a; r++){
                let a = t.getActiveAttrib(e, r);
                if (a.name.startsWith("gl_")) {
                    continue;
                }
                let format = b(t, a.type);
                i[a.name] = {
                    location: 0,
                    format,
                    stride: T.getAttributeInfoFromFormat(format).stride,
                    offset: 0,
                    instance: false,
                    start: 0
                };
            }
            let n = Object.keys(i);
            if (r) {
                n.sort((e, t)=>{
                    if (e > t) {
                        return 1;
                    }
                    return -1;
                });
                for(let r = 0; r < n.length; r++){
                    i[n[r]].location = r;
                    t.bindAttribLocation(e, r, n[r]);
                }
                t.linkProgram(e);
            } else {
                for(let r = 0; r < n.length; r++){
                    i[n[r]].location = t.getAttribLocation(e, n[r]);
                }
            }
            return i;
        }
        function A(e, t) {
            if (!t.ACTIVE_UNIFORM_BLOCKS) {
                return {};
            }
            let r = {};
            let i = t.getProgramParameter(e, t.ACTIVE_UNIFORM_BLOCKS);
            for(let a = 0; a < i; a++){
                let i = t.getActiveUniformBlockName(e, a);
                let index = t.getUniformBlockIndex(e, i);
                let size = t.getActiveUniformBlockParameter(e, a, t.UNIFORM_BLOCK_DATA_SIZE);
                r[i] = {
                    name: i,
                    index,
                    size
                };
            }
            return r;
        }
        function G(e, t) {
            let r = {};
            let i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
            for(let a = 0; a < i; a++){
                let i = t.getActiveUniform(e, a);
                let n = i.name.replace(/\[.*?\]$/, "");
                let isArray = !!i.name.match(/\[.*?\]$/);
                let o = S(t, i.type);
                r[n] = {
                    name: n,
                    index: a,
                    type: o,
                    size: i.size,
                    isArray,
                    value: E(o, i.size)
                };
            }
            return r;
        }
        function B(e, t) {
            let r = e.getShaderSource(t);
            if (r === null) {
                return void console.error("PixiJS Error: Could not retrieve shader source (WebGL context may be lost).");
            }
            let i = r.split("\n").map((e, t)=>`${t}: ${e}`);
            let a = e.getShaderInfoLog(t) ?? "";
            let n = a.split("\n");
            let s = {};
            let o = n.map((e)=>parseFloat(e.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter((e)=>!!e && !s[e] && (s[e] = true, true));
            let l = [
                ""
            ];
            o.forEach((e)=>{
                i[e - 1] = `%c${i[e - 1]}%c`;
                l.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
            });
            let u = i.join("\n");
            l[0] = u;
            console.error(a);
            console.groupCollapsed("click to view full shader code");
            console.warn(...l);
            console.groupEnd();
        }
        function y(e, t, r, i) {
            if (!e.getProgramParameter(t, e.LINK_STATUS)) {
                if (!e.getShaderParameter(r, e.COMPILE_STATUS)) {
                    B(e, r);
                }
                if (!e.getShaderParameter(i, e.COMPILE_STATUS)) {
                    B(e, i);
                }
                console.error("PixiJS Error: Could not initialize shader.");
                if (e.getProgramInfoLog(t) !== "") {
                    console.warn("PixiJS Warning: gl.getProgramInfoLog()", e.getProgramInfoLog(t));
                }
            }
        }
        function C(e, t) {
            let r = m(e, e.VERTEX_SHADER, t.vertex);
            let i = m(e, e.FRAGMENT_SHADER, t.fragment);
            let n = e.createProgram();
            e.attachShader(n, r);
            e.attachShader(n, i);
            let t_transformFeedbackVaryings = t.transformFeedbackVaryings;
            t_transformFeedbackVaryings && (typeof e.transformFeedbackVaryings !== "function" ? a.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : e.transformFeedbackVaryings(n, t_transformFeedbackVaryings.names, t_transformFeedbackVaryings.bufferMode === "separate" ? e.SEPARATE_ATTRIBS : e.INTERLEAVED_ATTRIBS));
            e.linkProgram(n);
            if (!e.getProgramParameter(n, e.LINK_STATUS)) {
                y(e, n, r, i);
            }
            t._attributeData = v(n, e, !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertex));
            t._uniformData = G(n, e);
            t._uniformBlockData = A(n, e);
            e.deleteShader(r);
            e.deleteShader(i);
            let o = {};
            for(let r in t._uniformData){
                let i = t._uniformData[r];
                o[r] = {
                    location: e.getUniformLocation(n, r),
                    value: E(i.type, i.size)
                };
            }
            return new f(n, o);
        }
        e.s([
            "mapGlToVertexFormat",
            0,
            b,
            "mapType",
            0,
            S
        ], 196932);
        e.s([
            "extractAttributesFromGlProgram",
            0,
            v
        ], 794604);
        e.s([
            "getUboData",
            0,
            A
        ], 788987);
        e.s([
            "getUniformData",
            0,
            G
        ], 293592);
        e.s([
            "logProgramError",
            0,
            y
        ], 135617);
        e.s([
            "generateProgram",
            0,
            C
        ], 510091);
        let N = {
            textureCount: 0,
            blockIndex: 0
        };
        class D {
            constructor(e){
                this._activeProgram = null;
                this._programDataHash = Object.create(null);
                this._shaderSyncFunctions = Object.create(null);
                this._renderer = e;
            }
            contextChange(e) {
                this._gl = e;
                this._programDataHash = Object.create(null);
                this._shaderSyncFunctions = Object.create(null);
                this._activeProgram = null;
            }
            bind(e, t) {
                this._setProgram(e.glProgram);
                if (t) {
                    return;
                }
                N.textureCount = 0;
                N.blockIndex = 0;
                let r = this._shaderSyncFunctions[e.glProgram._key];
                if (!r) {
                    r = this._shaderSyncFunctions[e.glProgram._key] = this._generateShaderSync(e, this);
                }
                this._renderer.buffer.nextBindBase(!!e.glProgram.transformFeedbackVaryings);
                r(this._renderer, e, N);
            }
            updateUniformGroup(e) {
                this._renderer.uniformGroup.updateUniformGroup(e, this._activeProgram, N);
            }
            bindUniformBlock(e, t, r = 0) {
                let buffer = this._renderer.buffer;
                let a = this._getProgramData(this._activeProgram);
                let e__bufferResource = e._bufferResource;
                if (!e__bufferResource) {
                    this._renderer.ubo.updateUniformGroup(e);
                }
                let e_buffer = e.buffer;
                let o = buffer.updateBuffer(e_buffer);
                let l = buffer.freeLocationForBufferBase(o);
                if (e__bufferResource) {
                    let { offset, size } = e;
                    if (offset === 0 && size === e_buffer.data.byteLength) {
                        buffer.bindBufferBase(o, l);
                    } else {
                        buffer.bindBufferRange(o, l, offset);
                    }
                } else {
                    if (buffer.getLastBindBaseLocation(o) !== l) {
                        buffer.bindBufferBase(o, l);
                    }
                }
                let index = this._activeProgram._uniformBlockData[t].index;
                if (a.uniformBlockBindings[r] !== l) {
                    a.uniformBlockBindings[r] = l;
                    this._renderer.gl.uniformBlockBinding(a.program, index, l);
                }
            }
            _setProgram(e) {
                if (this._activeProgram === e) {
                    return;
                }
                this._activeProgram = e;
                let t = this._getProgramData(e);
                this._gl.useProgram(t.program);
            }
            _getProgramData(e) {
                return this._programDataHash[e._key] || this._createProgramData(e);
            }
            _createProgramData(e) {
                let e__key = e._key;
                this._programDataHash[e__key] = C(this._gl, e);
                return this._programDataHash[e__key];
            }
            destroy() {
                for (let e of Object.keys(this._programDataHash)){
                    this._programDataHash[e].destroy();
                }
                this._programDataHash = null;
                this._shaderSyncFunctions = null;
                this._activeProgram = null;
                this._renderer = null;
                this._gl = null;
            }
            _generateShaderSync(e, t) {
                return d(e, t);
            }
            resetState() {
                this._activeProgram = null;
            }
        }
        D.extension = {
            type: [
                t.ExtensionType.WebGLSystem
            ],
            name: "shader"
        };
        e.s([
            "GlShaderSystem",
            0,
            D
        ], 962768);
        var I = e.i(643781);
        let U = {
            f32: `if (cv !== v) {
            cu.value = v;
            gl.uniform1f(location, v);
        }`,
            "vec2<f32>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2f(location, v[0], v[1]);
        }`,
            "vec3<f32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3f(location, v[0], v[1], v[2]);
        }`,
            "vec4<f32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4f(location, v[0], v[1], v[2], v[3]);
        }`,
            i32: `if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,
            "vec2<i32>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,
            "vec3<i32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,
            "vec4<i32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,
            u32: `if (cv !== v) {
            cu.value = v;
            gl.uniform1ui(location, v);
        }`,
            "vec2<u32>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2ui(location, v[0], v[1]);
        }`,
            "vec3<u32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3ui(location, v[0], v[1], v[2]);
        }`,
            "vec4<u32>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
        }`,
            bool: `if (cv !== v) {
            cu.value = v;
            gl.uniform1i(location, v);
        }`,
            "vec2<bool>": `if (cv[0] !== v[0] || cv[1] !== v[1]) {
            cv[0] = v[0];
            cv[1] = v[1];
            gl.uniform2i(location, v[0], v[1]);
        }`,
            "vec3<bool>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            gl.uniform3i(location, v[0], v[1], v[2]);
        }`,
            "vec4<bool>": `if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
            cv[0] = v[0];
            cv[1] = v[1];
            cv[2] = v[2];
            cv[3] = v[3];
            gl.uniform4i(location, v[0], v[1], v[2], v[3]);
        }`,
            "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);",
            "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);",
            "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);"
        };
        let L = {
            f32: "gl.uniform1fv(location, v);",
            "vec2<f32>": "gl.uniform2fv(location, v);",
            "vec3<f32>": "gl.uniform3fv(location, v);",
            "vec4<f32>": "gl.uniform4fv(location, v);",
            "mat2x2<f32>": "gl.uniformMatrix2fv(location, false, v);",
            "mat3x3<f32>": "gl.uniformMatrix3fv(location, false, v);",
            "mat4x4<f32>": "gl.uniformMatrix4fv(location, false, v);",
            i32: "gl.uniform1iv(location, v);",
            "vec2<i32>": "gl.uniform2iv(location, v);",
            "vec3<i32>": "gl.uniform3iv(location, v);",
            "vec4<i32>": "gl.uniform4iv(location, v);",
            u32: "gl.uniform1iv(location, v);",
            "vec2<u32>": "gl.uniform2iv(location, v);",
            "vec3<u32>": "gl.uniform3iv(location, v);",
            "vec4<u32>": "gl.uniform4iv(location, v);",
            bool: "gl.uniform1iv(location, v);",
            "vec2<bool>": "gl.uniform2iv(location, v);",
            "vec3<bool>": "gl.uniform3iv(location, v);",
            "vec4<bool>": "gl.uniform4iv(location, v);"
        };
        function F(e, t) {
            let r = [
                `
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
        var name = null;
    `
            ];
            for(let i in e.uniforms){
                if (!t[i]) {
                    e.uniforms[i] instanceof c.UniformGroup ? e.uniforms[i].ubo ? r.push(`
                        renderer.shader.bindUniformBlock(uv.${i}, "${i}");
                    `) : r.push(`
                        renderer.shader.updateUniformGroup(uv.${i});
                    `) : e.uniforms[i] instanceof _.BufferResource && r.push(`
                        renderer.shader.bindBufferResource(uv.${i}, "${i}");
                    `);
                    continue;
                }
                let a = e.uniformStructures[i];
                let n = false;
                for(let e = 0; e < I.uniformParsers.length; e++){
                    let uniformParser = I.uniformParsers[e];
                    if (a.type === uniformParser.type && uniformParser.test(a)) {
                        r.push(`name = "${i}";`, I.uniformParsers[e].uniform);
                        n = true;
                        break;
                    }
                }
                if (!n) {
                    let e = (a.size === 1 ? U : L)[a.type].replace("location", `ud["${i}"].location`);
                    r.push(`
            cu = ud["${i}"];
            cv = cu.value;
            v = uv["${i}"];
            ${e};`);
                }
            }
            return Function("ud", "uv", "renderer", "syncData", r.join("\n"));
        }
        e.s([
            "UNIFORM_TO_ARRAY_SETTERS",
            0,
            L,
            "UNIFORM_TO_SINGLE_SETTERS",
            0,
            U
        ], 163281);
        e.s([
            "generateUniformsSync",
            0,
            F
        ], 200815);
        class M {
            constructor(e){
                this._cache = {};
                this._uniformGroupSyncHash = {};
                this._renderer = e;
                this.gl = null;
                this._cache = {};
            }
            contextChange(e) {
                this.gl = e;
            }
            updateUniformGroup(e, t, r) {
                let i = this._renderer.shader._getProgramData(t);
                if (!(e.isStatic && e._dirtyId === i.uniformDirtyGroups[e.uid])) {
                    i.uniformDirtyGroups[e.uid] = e._dirtyId;
                    this._getUniformSyncFunction(e, t)(i.uniformData, e.uniforms, this._renderer, r);
                }
            }
            _getUniformSyncFunction(e, t) {
                return this._uniformGroupSyncHash[e._signature]?.[t._key] || this._createUniformSyncFunction(e, t);
            }
            _createUniformSyncFunction(e, t) {
                let r = this._uniformGroupSyncHash[e._signature] || (this._uniformGroupSyncHash[e._signature] = {});
                let i = this._getSignature(e, t._uniformData, "u");
                if (!this._cache[i]) {
                    this._cache[i] = this._generateUniformsSync(e, t._uniformData);
                }
                r[t._key] = this._cache[i];
                return r[t._key];
            }
            _generateUniformsSync(e, t) {
                return F(e, t);
            }
            _getSignature(e, t, r) {
                let e_uniforms = e.uniforms;
                let a = [
                    `${r}-`
                ];
                for(let e in e_uniforms){
                    a.push(e);
                    if (t[e]) {
                        a.push(t[e].type);
                    }
                }
                return a.join("-");
            }
            destroy() {
                this._renderer = null;
                this._cache = null;
            }
        }
        M.extension = {
            type: [
                t.ExtensionType.WebGLSystem
            ],
            name: "uniformGroup"
        };
        e.s([
            "GlUniformGroupSystem",
            0,
            M
        ], 739983);
        var O = e.i(688761);
        var P = e.i(787653);
        function w(e) {
            let t = {};
            t.normal = [
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA
            ];
            t.add = [
                e.ONE,
                e.ONE
            ];
            t.multiply = [
                e.DST_COLOR,
                e.ONE_MINUS_SRC_ALPHA,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA
            ];
            t.screen = [
                e.ONE,
                e.ONE_MINUS_SRC_COLOR,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA
            ];
            t.none = [
                0,
                0
            ];
            t["normal-npm"] = [
                e.SRC_ALPHA,
                e.ONE_MINUS_SRC_ALPHA,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA
            ];
            t["add-npm"] = [
                e.SRC_ALPHA,
                e.ONE,
                e.ONE,
                e.ONE
            ];
            t["screen-npm"] = [
                e.SRC_ALPHA,
                e.ONE_MINUS_SRC_COLOR,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA
            ];
            t.erase = [
                e.ZERO,
                e.ONE_MINUS_SRC_ALPHA
            ];
            if (e instanceof P.DOMAdapter.get().getWebGLRenderingContext()) {
                let r = e.getExtension("EXT_blend_minmax");
                if (r) {
                    t.min = [
                        e.ONE,
                        e.ONE,
                        e.ONE,
                        e.ONE,
                        r.MIN_EXT,
                        r.MIN_EXT
                    ];
                    t.max = [
                        e.ONE,
                        e.ONE,
                        e.ONE,
                        e.ONE,
                        r.MAX_EXT,
                        r.MAX_EXT
                    ];
                }
            } else {
                t.min = [
                    e.ONE,
                    e.ONE,
                    e.ONE,
                    e.ONE,
                    e.MIN,
                    e.MIN
                ];
                t.max = [
                    e.ONE,
                    e.ONE,
                    e.ONE,
                    e.ONE,
                    e.MAX,
                    e.MAX
                ];
            }
            return t;
        }
        e.s([
            "mapWebGLBlendModesToPixi",
            0,
            w
        ], 485552);
        let H = class e {
            constructor(e){
                this._invertFrontFace = false;
                this.gl = null;
                this.stateId = 0;
                this.polygonOffset = 0;
                this.blendMode = "none";
                this._blendEq = false;
                this.map = [];
                this.map[0] = this.setBlend;
                this.map[1] = this.setOffset;
                this.map[2] = this.setCullFace;
                this.map[3] = this.setDepthTest;
                this.map[4] = this.setFrontFace;
                this.map[5] = this.setDepthMask;
                this.checks = [];
                this.defaultState = O.State.for2d();
                e.renderTarget.onRenderTargetChange.add(this);
            }
            onRenderTargetChange(e) {
                this._invertFrontFace = !e.isRoot;
                if (this._cullFace) {
                    this.setFrontFace(this._frontFace);
                } else {
                    this._frontFaceDirty = true;
                }
            }
            contextChange(e) {
                this.gl = e;
                this.blendModesMap = w(e);
                this.resetState();
            }
            set(e) {
                if (!e) {
                    e = this.defaultState;
                }
                if (this.stateId !== e.data) {
                    let t = this.stateId ^ e.data;
                    let r = 0;
                    while(t){
                        if (1 & t) {
                            this.map[r].call(this, !!(e.data & 1 << r));
                        }
                        t >>= 1;
                        r++;
                    }
                    this.stateId = e.data;
                }
                for(let t = 0; t < this.checks.length; t++){
                    this.checks[t](this, e);
                }
            }
            forceState(e) {
                if (!e) {
                    e = this.defaultState;
                }
                for(let t = 0; t < this.map.length; t++){
                    this.map[t].call(this, !!(e.data & 1 << t));
                }
                for(let t = 0; t < this.checks.length; t++){
                    this.checks[t](this, e);
                }
                this.stateId = e.data;
            }
            setBlend(t) {
                this._updateCheck(e._checkBlendMode, t);
                this.gl[t ? "enable" : "disable"](this.gl.BLEND);
            }
            setOffset(t) {
                this._updateCheck(e._checkPolygonOffset, t);
                this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
            }
            setDepthTest(e) {
                this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST);
            }
            setDepthMask(e) {
                this.gl.depthMask(e);
            }
            setCullFace(e) {
                this._cullFace = e;
                this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE);
                if (this._cullFace && this._frontFaceDirty) {
                    this.setFrontFace(this._frontFace);
                }
            }
            setFrontFace(e) {
                this._frontFace = e;
                this._frontFaceDirty = false;
                let t = this._invertFrontFace ? !e : e;
                if (this._glFrontFace !== t) {
                    this._glFrontFace = t;
                    this.gl.frontFace(this.gl[t ? "CW" : "CCW"]);
                }
            }
            setBlendMode(e) {
                if (!this.blendModesMap[e]) {
                    e = "normal";
                }
                if (e === this.blendMode) {
                    return;
                }
                this.blendMode = e;
                let t = this.blendModesMap[e];
                let r = this.gl;
                if (t.length === 2) {
                    r.blendFunc(t[0], t[1]);
                } else {
                    r.blendFuncSeparate(t[0], t[1], t[2], t[3]);
                }
                if (t.length === 6) {
                    this._blendEq = true;
                    r.blendEquationSeparate(t[4], t[5]);
                } else if (this._blendEq) {
                    this._blendEq = false;
                    r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD);
                }
            }
            setPolygonOffset(e, t) {
                this.gl.polygonOffset(e, t);
            }
            resetState() {
                this._glFrontFace = false;
                this._frontFace = false;
                this._cullFace = false;
                this._frontFaceDirty = false;
                this._invertFrontFace = false;
                this.gl.frontFace(this.gl.CCW);
                this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
                this.forceState(this.defaultState);
                this._blendEq = true;
                this.blendMode = "";
                this.setBlendMode("normal");
            }
            _updateCheck(e, t) {
                let r = this.checks.indexOf(e);
                if (t && -1 === r) {
                    this.checks.push(e);
                } else if (!(t || -1 === r)) {
                    this.checks.splice(r, 1);
                }
            }
            static _checkBlendMode(e, t) {
                e.setBlendMode(t.blendMode);
            }
            static _checkPolygonOffset(e, t) {
                e.setPolygonOffset(1, t.polygonOffset);
            }
            destroy() {
                this.gl = null;
                this.checks.length = 0;
            }
        };
        H.extension = {
            type: [
                t.ExtensionType.WebGLSystem
            ],
            name: "state"
        };
        e.s([
            "GlStateSystem",
            0,
            H
        ], 444533);
        var V = e.i(500378);
        e.s([
            "GlTexture",
            0,
            class {
                constructor(e){
                    this.target = V.GL_TARGETS.TEXTURE_2D;
                    this._layerInitMask = 0;
                    this.texture = e;
                    this.width = -1;
                    this.height = -1;
                    this.type = V.GL_TYPES.UNSIGNED_BYTE;
                    this.internalFormat = V.GL_FORMATS.RGBA;
                    this.format = V.GL_FORMATS.RGBA;
                    this.samplerType = 0;
                }
                destroy() {}
            }
        ], 61003);
        e.s([
            "glUploadBufferImageResource",
            0,
            {
                id: "buffer",
                upload (e, t, r, i, a, n = false) {
                    let s = a || t.target;
                    if (n || t.width !== e.width || t.height !== e.height) {
                        r.texImage2D(s, 0, t.internalFormat, e.width, e.height, 0, t.format, t.type, e.resource);
                    } else {
                        r.texSubImage2D(s, 0, 0, 0, e.width, e.height, t.format, t.type, e.resource);
                    }
                    t.width = e.width;
                    t.height = e.height;
                }
            }
        ], 378977);
        let X = {
            "bc1-rgba-unorm": true,
            "bc1-rgba-unorm-srgb": true,
            "bc2-rgba-unorm": true,
            "bc2-rgba-unorm-srgb": true,
            "bc3-rgba-unorm": true,
            "bc3-rgba-unorm-srgb": true,
            "bc4-r-unorm": true,
            "bc4-r-snorm": true,
            "bc5-rg-unorm": true,
            "bc5-rg-snorm": true,
            "bc6h-rgb-ufloat": true,
            "bc6h-rgb-float": true,
            "bc7-rgba-unorm": true,
            "bc7-rgba-unorm-srgb": true,
            "etc2-rgb8unorm": true,
            "etc2-rgb8unorm-srgb": true,
            "etc2-rgb8a1unorm": true,
            "etc2-rgb8a1unorm-srgb": true,
            "etc2-rgba8unorm": true,
            "etc2-rgba8unorm-srgb": true,
            "eac-r11unorm": true,
            "eac-r11snorm": true,
            "eac-rg11unorm": true,
            "eac-rg11snorm": true,
            "astc-4x4-unorm": true,
            "astc-4x4-unorm-srgb": true,
            "astc-5x4-unorm": true,
            "astc-5x4-unorm-srgb": true,
            "astc-5x5-unorm": true,
            "astc-5x5-unorm-srgb": true,
            "astc-6x5-unorm": true,
            "astc-6x5-unorm-srgb": true,
            "astc-6x6-unorm": true,
            "astc-6x6-unorm-srgb": true,
            "astc-8x5-unorm": true,
            "astc-8x5-unorm-srgb": true,
            "astc-8x6-unorm": true,
            "astc-8x6-unorm-srgb": true,
            "astc-8x8-unorm": true,
            "astc-8x8-unorm-srgb": true,
            "astc-10x5-unorm": true,
            "astc-10x5-unorm-srgb": true,
            "astc-10x6-unorm": true,
            "astc-10x6-unorm-srgb": true,
            "astc-10x8-unorm": true,
            "astc-10x8-unorm-srgb": true,
            "astc-10x10-unorm": true,
            "astc-10x10-unorm-srgb": true,
            "astc-12x10-unorm": true,
            "astc-12x10-unorm-srgb": true,
            "astc-12x12-unorm": true,
            "astc-12x12-unorm-srgb": true
        };
        e.s([
            "glUploadCompressedTextureResource",
            0,
            {
                id: "compressed",
                upload (e, t, r, i, a, n) {
                    let s = a ?? t.target;
                    r.pixelStorei(r.UNPACK_ALIGNMENT, 4);
                    let e_pixelWidth = e.pixelWidth;
                    let e_pixelHeight = e.pixelHeight;
                    let u = !!X[e.format];
                    for(let i = 0; i < e.resource.length; i++){
                        let a = e.resource[i];
                        if (u) {
                            r.compressedTexImage2D(s, i, t.internalFormat, e_pixelWidth, e_pixelHeight, 0, a);
                        } else {
                            r.texImage2D(s, i, t.internalFormat, e_pixelWidth, e_pixelHeight, 0, t.format, t.type, a);
                        }
                        e_pixelWidth = Math.max(e_pixelWidth >> 1, 1);
                        e_pixelHeight = Math.max(e_pixelHeight >> 1, 1);
                    }
                }
            }
        ], 800477);
        let k = [
            "right",
            "left",
            "top",
            "bottom",
            "front",
            "back"
        ];
        e.s([
            "createGlUploadCubeTextureResource",
            0,
            (e)=>({
                    id: "cube",
                    upload (t, r, i, a) {
                        let t_faces = t.faces;
                        for(let t = 0; t < k.length; t++){
                            let s = t_faces[k[t]];
                            (e[s.uploadMethodId] || e.image).upload(s, r, i, a, V.GL_TARGETS.TEXTURE_CUBE_MAP_POSITIVE_X + t, (r._layerInitMask & 1 << t) == 0);
                            r._layerInitMask |= 1 << t;
                        }
                        r.width = t.pixelWidth;
                        r.height = t.pixelHeight;
                    }
                })
        ], 629057);
        e.s([
            "glUploadImageResource",
            0,
            {
                id: "image",
                upload (e, t, r, i, a, n = false) {
                    let s = a || t.target;
                    let e_pixelWidth = e.pixelWidth;
                    let e_pixelHeight = e.pixelHeight;
                    let e_resourceWidth = e.resourceWidth;
                    let e_resourceHeight = e.resourceHeight;
                    let c = n || t.width !== e_pixelWidth || t.height !== e_pixelHeight;
                    let h = e_resourceWidth >= e_pixelWidth && e_resourceHeight >= e_pixelHeight;
                    (i === 2 ? (e, t, r, i, a, n, s, o, l, u)=>{
                        if (!u) {
                            if (l) {
                                e.texImage2D(t, 0, r.internalFormat, i, a, 0, r.format, r.type, null);
                            }
                            e.texSubImage2D(t, 0, 0, 0, n, s, r.format, r.type, o);
                            return;
                        }
                        if (l) {
                            e.texImage2D(t, 0, r.internalFormat, i, a, 0, r.format, r.type, o);
                        } else {
                            e.texSubImage2D(t, 0, 0, 0, r.format, r.type, o);
                        }
                    } : (e, t, r, i, a, n, s, o, l, u)=>{
                        if (!u) {
                            if (l) {
                                e.texImage2D(t, 0, r.internalFormat, i, a, 0, r.format, r.type, null);
                            }
                            e.texSubImage2D(t, 0, 0, 0, r.format, r.type, o);
                            return;
                        }
                        if (l) {
                            e.texImage2D(t, 0, r.internalFormat, r.format, r.type, o);
                        } else {
                            e.texSubImage2D(t, 0, 0, 0, r.format, r.type, o);
                        }
                    })(r, s, t, e_pixelWidth, e_pixelHeight, e_resourceWidth, e_resourceHeight, e.resource, c, h);
                    t.width = e_pixelWidth;
                    t.height = e_pixelHeight;
                }
            }
        ], 657280);
    },
    701993,
    534501,
    923217,
    570966,
    883926,
    999885,
    408321,
    111456,
    (e)=>{
        "use strict";
        var t = e.i(787653);
        var r = e.i(78278);
        var i = e.i(217055);
        var a = e.i(337654);
        var n = e.i(61003);
        var s = e.i(378977);
        var o = e.i(800477);
        var l = e.i(629057);
        var u = e.i(657280);
        let _ = e.i(849609).isSafari();
        let video = {
            id: "video",
            upload (e, t, r, i, a, n = _) {
                if (!e.isValid) {
                    let e = a ?? t.target;
                    r.texImage2D(e, 0, t.internalFormat, 1, 1, 0, t.format, t.type, null);
                    return;
                }
                u.glUploadImageResource.upload(e, t, r, i, a, n);
            }
        };
        e.s([
            "glUploadVideoResource",
            0,
            video
        ], 534501);
        let h = {
            linear: 9729,
            nearest: 9728
        };
        let d = {
            linear: {
                linear: 9987,
                nearest: 9985
            },
            nearest: {
                linear: 9986,
                nearest: 9984
            }
        };
        let f = {
            "clamp-to-edge": 33071,
            repeat: 10497,
            "mirror-repeat": 33648
        };
        let m = {
            never: 512,
            less: 513,
            equal: 514,
            "less-equal": 515,
            greater: 516,
            "not-equal": 517,
            "greater-equal": 518,
            always: 519
        };
        function g(e, t, r, i, a, n, s, o) {
            if (!o || e.addressModeU !== "repeat" || e.addressModeV !== "repeat" || e.addressModeW !== "repeat") {
                let r = f[s ? "clamp-to-edge" : e.addressModeU];
                let i = f[s ? "clamp-to-edge" : e.addressModeV];
                let o = f[s ? "clamp-to-edge" : e.addressModeW];
                t[a](n, t.TEXTURE_WRAP_S, r);
                t[a](n, t.TEXTURE_WRAP_T, i);
                if (t.TEXTURE_WRAP_R) {
                    t[a](n, t.TEXTURE_WRAP_R, o);
                }
            }
            if (!(o && e.magFilter === "linear")) {
                t[a](n, t.TEXTURE_MAG_FILTER, h[e.magFilter]);
            }
            if (r) {
                if (!o || e.mipmapFilter !== "linear") {
                    let r = d[e.minFilter][e.mipmapFilter];
                    t[a](n, t.TEXTURE_MIN_FILTER, r);
                }
            } else {
                t[a](n, t.TEXTURE_MIN_FILTER, h[e.minFilter]);
            }
            if (i && e.maxAnisotropy > 1) {
                let r = Math.min(e.maxAnisotropy, t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                t[a](n, i.TEXTURE_MAX_ANISOTROPY_EXT, r);
            }
            if (e.compare) {
                t[a](n, t.TEXTURE_COMPARE_FUNC, m[e.compare]);
            }
        }
        function E(e) {
            return {
                r8unorm: e.RED,
                r8snorm: e.RED,
                r8uint: e.RED,
                r8sint: e.RED,
                r16uint: e.RED,
                r16sint: e.RED,
                r16float: e.RED,
                rg8unorm: e.RG,
                rg8snorm: e.RG,
                rg8uint: e.RG,
                rg8sint: e.RG,
                r32uint: e.RED,
                r32sint: e.RED,
                r32float: e.RED,
                rg16uint: e.RG,
                rg16sint: e.RG,
                rg16float: e.RG,
                rgba8unorm: e.RGBA,
                "rgba8unorm-srgb": e.RGBA,
                rgba8snorm: e.RGBA,
                rgba8uint: e.RGBA,
                rgba8sint: e.RGBA,
                bgra8unorm: e.RGBA,
                "bgra8unorm-srgb": e.RGBA,
                rgb9e5ufloat: e.RGB,
                rgb10a2unorm: e.RGBA,
                rg11b10ufloat: e.RGB,
                rg32uint: e.RG,
                rg32sint: e.RG,
                rg32float: e.RG,
                rgba16uint: e.RGBA,
                rgba16sint: e.RGBA,
                rgba16float: e.RGBA,
                rgba32uint: e.RGBA,
                rgba32sint: e.RGBA,
                rgba32float: e.RGBA,
                stencil8: e.STENCIL_INDEX8,
                depth16unorm: e.DEPTH_COMPONENT,
                depth24plus: e.DEPTH_COMPONENT,
                "depth24plus-stencil8": e.DEPTH_STENCIL,
                depth32float: e.DEPTH_COMPONENT,
                "depth32float-stencil8": e.DEPTH_STENCIL
            };
        }
        function T(e, r) {
            let i = {};
            let e_RGBA = e.RGBA;
            if (e instanceof t.DOMAdapter.get().getWebGLRenderingContext()) {
                if (r.srgb) {
                    i = {
                        "rgba8unorm-srgb": r.srgb.SRGB8_ALPHA8_EXT,
                        "bgra8unorm-srgb": r.srgb.SRGB8_ALPHA8_EXT
                    };
                }
            } else {
                i = {
                    "rgba8unorm-srgb": e.SRGB8_ALPHA8,
                    "bgra8unorm-srgb": e.SRGB8_ALPHA8
                };
                e_RGBA = e.RGBA8;
            }
            return {
                r8unorm: e.R8,
                r8snorm: e.R8_SNORM,
                r8uint: e.R8UI,
                r8sint: e.R8I,
                r16uint: e.R16UI,
                r16sint: e.R16I,
                r16float: e.R16F,
                rg8unorm: e.RG8,
                rg8snorm: e.RG8_SNORM,
                rg8uint: e.RG8UI,
                rg8sint: e.RG8I,
                r32uint: e.R32UI,
                r32sint: e.R32I,
                r32float: e.R32F,
                rg16uint: e.RG16UI,
                rg16sint: e.RG16I,
                rg16float: e.RG16F,
                rgba8unorm: e.RGBA,
                ...i,
                rgba8snorm: e.RGBA8_SNORM,
                rgba8uint: e.RGBA8UI,
                rgba8sint: e.RGBA8I,
                bgra8unorm: e_RGBA,
                rgb9e5ufloat: e.RGB9_E5,
                rgb10a2unorm: e.RGB10_A2,
                rg11b10ufloat: e.R11F_G11F_B10F,
                rg32uint: e.RG32UI,
                rg32sint: e.RG32I,
                rg32float: e.RG32F,
                rgba16uint: e.RGBA16UI,
                rgba16sint: e.RGBA16I,
                rgba16float: e.RGBA16F,
                rgba32uint: e.RGBA32UI,
                rgba32sint: e.RGBA32I,
                rgba32float: e.RGBA32F,
                stencil8: e.STENCIL_INDEX8,
                depth16unorm: e.DEPTH_COMPONENT16,
                depth24plus: e.DEPTH_COMPONENT24,
                "depth24plus-stencil8": e.DEPTH24_STENCIL8,
                depth32float: e.DEPTH_COMPONENT32F,
                "depth32float-stencil8": e.DEPTH32F_STENCIL8,
                ...r.s3tc ? {
                    "bc1-rgba-unorm": r.s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT,
                    "bc2-rgba-unorm": r.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT,
                    "bc3-rgba-unorm": r.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT
                } : {},
                ...r.s3tc_sRGB ? {
                    "bc1-rgba-unorm-srgb": r.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
                    "bc2-rgba-unorm-srgb": r.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
                    "bc3-rgba-unorm-srgb": r.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } : {},
                ...r.rgtc ? {
                    "bc4-r-unorm": r.rgtc.COMPRESSED_RED_RGTC1_EXT,
                    "bc4-r-snorm": r.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT,
                    "bc5-rg-unorm": r.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT,
                    "bc5-rg-snorm": r.rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
                } : {},
                ...r.bptc ? {
                    "bc6h-rgb-float": r.bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,
                    "bc6h-rgb-ufloat": r.bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,
                    "bc7-rgba-unorm": r.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT,
                    "bc7-rgba-unorm-srgb": r.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
                } : {},
                ...r.etc ? {
                    "etc2-rgb8unorm": r.etc.COMPRESSED_RGB8_ETC2,
                    "etc2-rgb8unorm-srgb": r.etc.COMPRESSED_SRGB8_ETC2,
                    "etc2-rgb8a1unorm": r.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,
                    "etc2-rgb8a1unorm-srgb": r.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,
                    "etc2-rgba8unorm": r.etc.COMPRESSED_RGBA8_ETC2_EAC,
                    "etc2-rgba8unorm-srgb": r.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,
                    "eac-r11unorm": r.etc.COMPRESSED_R11_EAC,
                    "eac-rg11unorm": r.etc.COMPRESSED_SIGNED_RG11_EAC
                } : {},
                ...r.astc ? {
                    "astc-4x4-unorm": r.astc.COMPRESSED_RGBA_ASTC_4x4_KHR,
                    "astc-4x4-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,
                    "astc-5x4-unorm": r.astc.COMPRESSED_RGBA_ASTC_5x4_KHR,
                    "astc-5x4-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR,
                    "astc-5x5-unorm": r.astc.COMPRESSED_RGBA_ASTC_5x5_KHR,
                    "astc-5x5-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,
                    "astc-6x5-unorm": r.astc.COMPRESSED_RGBA_ASTC_6x5_KHR,
                    "astc-6x5-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,
                    "astc-6x6-unorm": r.astc.COMPRESSED_RGBA_ASTC_6x6_KHR,
                    "astc-6x6-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,
                    "astc-8x5-unorm": r.astc.COMPRESSED_RGBA_ASTC_8x5_KHR,
                    "astc-8x5-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,
                    "astc-8x6-unorm": r.astc.COMPRESSED_RGBA_ASTC_8x6_KHR,
                    "astc-8x6-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,
                    "astc-8x8-unorm": r.astc.COMPRESSED_RGBA_ASTC_8x8_KHR,
                    "astc-8x8-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,
                    "astc-10x5-unorm": r.astc.COMPRESSED_RGBA_ASTC_10x5_KHR,
                    "astc-10x5-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,
                    "astc-10x6-unorm": r.astc.COMPRESSED_RGBA_ASTC_10x6_KHR,
                    "astc-10x6-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,
                    "astc-10x8-unorm": r.astc.COMPRESSED_RGBA_ASTC_10x8_KHR,
                    "astc-10x8-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,
                    "astc-10x10-unorm": r.astc.COMPRESSED_RGBA_ASTC_10x10_KHR,
                    "astc-10x10-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,
                    "astc-12x10-unorm": r.astc.COMPRESSED_RGBA_ASTC_12x10_KHR,
                    "astc-12x10-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,
                    "astc-12x12-unorm": r.astc.COMPRESSED_RGBA_ASTC_12x12_KHR,
                    "astc-12x12-unorm-srgb": r.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
                } : {}
            };
        }
        function p(e) {
            return {
                r8unorm: e.UNSIGNED_BYTE,
                r8snorm: e.BYTE,
                r8uint: e.UNSIGNED_BYTE,
                r8sint: e.BYTE,
                r16uint: e.UNSIGNED_SHORT,
                r16sint: e.SHORT,
                r16float: e.HALF_FLOAT,
                rg8unorm: e.UNSIGNED_BYTE,
                rg8snorm: e.BYTE,
                rg8uint: e.UNSIGNED_BYTE,
                rg8sint: e.BYTE,
                r32uint: e.UNSIGNED_INT,
                r32sint: e.INT,
                r32float: e.FLOAT,
                rg16uint: e.UNSIGNED_SHORT,
                rg16sint: e.SHORT,
                rg16float: e.HALF_FLOAT,
                rgba8unorm: e.UNSIGNED_BYTE,
                "rgba8unorm-srgb": e.UNSIGNED_BYTE,
                rgba8snorm: e.BYTE,
                rgba8uint: e.UNSIGNED_BYTE,
                rgba8sint: e.BYTE,
                bgra8unorm: e.UNSIGNED_BYTE,
                "bgra8unorm-srgb": e.UNSIGNED_BYTE,
                rgb9e5ufloat: e.UNSIGNED_INT_5_9_9_9_REV,
                rgb10a2unorm: e.UNSIGNED_INT_2_10_10_10_REV,
                rg11b10ufloat: e.UNSIGNED_INT_10F_11F_11F_REV,
                rg32uint: e.UNSIGNED_INT,
                rg32sint: e.INT,
                rg32float: e.FLOAT,
                rgba16uint: e.UNSIGNED_SHORT,
                rgba16sint: e.SHORT,
                rgba16float: e.HALF_FLOAT,
                rgba32uint: e.UNSIGNED_INT,
                rgba32sint: e.INT,
                rgba32float: e.FLOAT,
                stencil8: e.UNSIGNED_BYTE,
                depth16unorm: e.UNSIGNED_SHORT,
                depth24plus: e.UNSIGNED_INT,
                "depth24plus-stencil8": e.UNSIGNED_INT_24_8,
                depth32float: e.FLOAT,
                "depth32float-stencil8": e.FLOAT_32_UNSIGNED_INT_24_8_REV
            };
        }
        function R(e) {
            return {
                "2d": e.TEXTURE_2D,
                cube: e.TEXTURE_CUBE_MAP,
                "1d": null,
                "3d": e?.TEXTURE_3D || null,
                "2d-array": e?.TEXTURE_2D_ARRAY || null,
                "cube-array": e?.TEXTURE_CUBE_MAP_ARRAY || null
            };
        }
        e.s([
            "compareModeToGlCompare",
            0,
            m,
            "mipmapScaleModeToGlFilter",
            0,
            d,
            "scaleModeToGlFilter",
            0,
            h,
            "wrapModeToGlAddress",
            0,
            f
        ], 923217);
        e.s([
            "applyStyleParams",
            0,
            g
        ], 570966);
        e.s([
            "mapFormatToGlFormat",
            0,
            E
        ], 883926);
        e.s([
            "mapFormatToGlInternalFormat",
            0,
            T
        ], 999885);
        e.s([
            "mapFormatToGlType",
            0,
            p
        ], 408321);
        e.s([
            "mapViewDimensionToGlTarget",
            0,
            R
        ], 111456);
        let x = class e {
            constructor(t){
                this._glSamplers = Object.create(null);
                this._boundTextures = [];
                this._activeTextureLocation = -1;
                this._boundSamplers = Object.create(null);
                this._premultiplyAlpha = false;
                this._useSeparateSamplers = false;
                this._renderer = t;
                this._managedTextures = new i.GCManagedHash({
                    renderer: t,
                    type: "resource",
                    onUnload: this.onSourceUnload.bind(this),
                    name: "glTexture"
                });
                const r = {
                    image: u.glUploadImageResource,
                    buffer: s.glUploadBufferImageResource,
                    video,
                    compressed: o.glUploadCompressedTextureResource,
                    ...e.uploadExtensions
                };
                this._uploads = {
                    ...r,
                    cube: l.createGlUploadCubeTextureResource(r)
                };
            }
            get managedTextures() {
                return Object.values(this._managedTextures.items);
            }
            contextChange(e) {
                this._gl = e;
                if (!this._mapFormatToInternalFormat) {
                    this._mapFormatToInternalFormat = T(e, this._renderer.context.extensions);
                    this._mapFormatToType = p(e);
                    this._mapFormatToFormat = E(e);
                    this._mapViewDimensionToGlTarget = R(e);
                }
                this._managedTextures.removeAll(true);
                this._glSamplers = Object.create(null);
                this._boundSamplers = Object.create(null);
                this._premultiplyAlpha = false;
                for(let e = 0; e < 16; e++){
                    this.bind(a.Texture.EMPTY, e);
                }
            }
            initSource(e) {
                this.bind(e);
            }
            bind(e, t = 0) {
                let e_source = e.source;
                if (e) {
                    this.bindSource(e_source, t);
                    if (this._useSeparateSamplers) {
                        this._bindSampler(e_source.style, t);
                    }
                } else {
                    this.bindSource(null, t);
                    if (this._useSeparateSamplers) {
                        this._bindSampler(null, t);
                    }
                }
            }
            bindSource(e, t = 0) {
                let _gl = this._gl;
                e._gcLastUsed = this._renderer.gc.now;
                if (this._boundTextures[t] !== e) {
                    this._boundTextures[t] = e;
                    this._activateLocation(t);
                    if (!e) {
                        e = a.Texture.EMPTY.source;
                    }
                    let i = this.getGlSource(e);
                    _gl.bindTexture(i.target, i.texture);
                }
            }
            _bindSampler(e, t = 0) {
                let _gl = this._gl;
                if (!e) {
                    this._boundSamplers[t] = null;
                    _gl.bindSampler(t, null);
                    return;
                }
                let i = this._getGlSampler(e);
                if (this._boundSamplers[t] !== i) {
                    this._boundSamplers[t] = i;
                    _gl.bindSampler(t, i);
                }
            }
            unbind(e) {
                let e_source = e.source;
                let _boundTextures = this._boundTextures;
                let _gl = this._gl;
                for(let e = 0; e < _boundTextures.length; e++){
                    if (_boundTextures[e] === e_source) {
                        this._activateLocation(e);
                        let a = this.getGlSource(e_source);
                        _gl.bindTexture(a.target, null);
                        _boundTextures[e] = null;
                    }
                }
            }
            _activateLocation(e) {
                if (this._activeTextureLocation !== e) {
                    this._activeTextureLocation = e;
                    this._gl.activeTexture(this._gl.TEXTURE0 + e);
                }
            }
            _initSource(e) {
                let _gl = this._gl;
                let r = new n.GlTexture(_gl.createTexture());
                r.type = this._mapFormatToType[e.format];
                r.internalFormat = this._mapFormatToInternalFormat[e.format];
                r.format = this._mapFormatToFormat[e.format];
                r.target = this._mapViewDimensionToGlTarget[e.viewDimension];
                if (r.target === null) {
                    throw Error(`Unsupported view dimension: ${e.viewDimension} with this webgl version: ${this._renderer.context.webGLVersion}`);
                }
                if (e.uploadMethodId === "cube") {
                    r.target = _gl.TEXTURE_CUBE_MAP;
                }
                if (e.autoGenerateMipmaps && (this._renderer.context.supports.nonPowOf2mipmaps || e.isPowerOfTwo)) {
                    let t = Math.max(e.width, e.height);
                    e.mipLevelCount = Math.floor(Math.log2(t)) + 1;
                }
                e._gpuData[this._renderer.uid] = r;
                if (this._managedTextures.add(e)) {
                    e.on("update", this.onSourceUpdate, this);
                    e.on("resize", this.onSourceUpdate, this);
                    e.on("styleChange", this.onStyleChange, this);
                    e.on("updateMipmaps", this.onUpdateMipmaps, this);
                }
                this.onSourceUpdate(e);
                this.updateStyle(e, false);
                return r;
            }
            onStyleChange(e) {
                this.updateStyle(e, false);
            }
            updateStyle(e, t) {
                let _gl = this._gl;
                let i = this.getGlSource(e);
                _gl.bindTexture(i.target, i.texture);
                this._boundTextures[this._activeTextureLocation] = e;
                g(e.style, _gl, e.mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "texParameteri", i.target, !this._renderer.context.supports.nonPowOf2wrapping && !e.isPowerOfTwo, t);
            }
            onSourceUnload(e, t = false) {
                let r = e._gpuData[this._renderer.uid];
                if (r) {
                    if (!t) {
                        this.unbind(e);
                        this._gl.deleteTexture(r.texture);
                    }
                    e.off("update", this.onSourceUpdate, this);
                    e.off("resize", this.onSourceUpdate, this);
                    e.off("styleChange", this.onStyleChange, this);
                    e.off("updateMipmaps", this.onUpdateMipmaps, this);
                }
            }
            onSourceUpdate(e) {
                let _gl = this._gl;
                let r = this.getGlSource(e);
                _gl.bindTexture(r.target, r.texture);
                this._boundTextures[this._activeTextureLocation] = e;
                let i = e.alphaMode === "premultiply-alpha-on-upload";
                if (this._premultiplyAlpha !== i) {
                    this._premultiplyAlpha = i;
                    _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i);
                }
                if (this._uploads[e.uploadMethodId]) {
                    this._uploads[e.uploadMethodId].upload(e, r, _gl, this._renderer.context.webGLVersion);
                } else if (r.target === _gl.TEXTURE_2D) {
                    this._initEmptyTexture2D(r, e);
                } else if (r.target === _gl.TEXTURE_2D_ARRAY) {
                    this._initEmptyTexture2DArray(r, e);
                } else if (r.target === _gl.TEXTURE_CUBE_MAP) {
                    this._initEmptyTextureCube(r, e);
                } else {
                    throw Error("[GlTextureSystem] Unsupported texture target for empty allocation.");
                }
                this._applyMipRange(r, e);
                if (e.autoGenerateMipmaps && e.mipLevelCount > 1) {
                    this.onUpdateMipmaps(e, false);
                }
            }
            onUpdateMipmaps(e, t = true) {
                if (t) {
                    this.bindSource(e, 0);
                }
                let r = this.getGlSource(e);
                this._gl.generateMipmap(r.target);
            }
            _initEmptyTexture2D(e, t) {
                let _gl = this._gl;
                _gl.texImage2D(_gl.TEXTURE_2D, 0, e.internalFormat, t.pixelWidth, t.pixelHeight, 0, e.format, e.type, null);
                let i = Math.max(t.pixelWidth >> 1, 1);
                let a = Math.max(t.pixelHeight >> 1, 1);
                for(let n = 1; n < t.mipLevelCount; n++){
                    _gl.texImage2D(_gl.TEXTURE_2D, n, e.internalFormat, i, a, 0, e.format, e.type, null);
                    i = Math.max(i >> 1, 1);
                    a = Math.max(a >> 1, 1);
                }
            }
            _initEmptyTexture2DArray(e, t) {
                if (this._renderer.context.webGLVersion !== 2) {
                    throw Error("[GlTextureSystem] TEXTURE_2D_ARRAY requires WebGL2.");
                }
                let _gl = this._gl;
                let i = Math.max(0 | t.arrayLayerCount, 1);
                _gl.texImage3D(_gl.TEXTURE_2D_ARRAY, 0, e.internalFormat, t.pixelWidth, t.pixelHeight, i, 0, e.format, e.type, null);
                let a = Math.max(t.pixelWidth >> 1, 1);
                let n = Math.max(t.pixelHeight >> 1, 1);
                for(let s = 1; s < t.mipLevelCount; s++){
                    _gl.texImage3D(_gl.TEXTURE_2D_ARRAY, s, e.internalFormat, a, n, i, 0, e.format, e.type, null);
                    a = Math.max(a >> 1, 1);
                    n = Math.max(n >> 1, 1);
                }
            }
            _initEmptyTextureCube(e, t) {
                let _gl = this._gl;
                for(let i = 0; i < 6; i++){
                    _gl.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, e.internalFormat, t.pixelWidth, t.pixelHeight, 0, e.format, e.type, null);
                }
                let i = Math.max(t.pixelWidth >> 1, 1);
                let a = Math.max(t.pixelHeight >> 1, 1);
                for(let n = 1; n < t.mipLevelCount; n++){
                    for(let t = 0; t < 6; t++){
                        _gl.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, n, e.internalFormat, i, a, 0, e.format, e.type, null);
                    }
                    i = Math.max(i >> 1, 1);
                    a = Math.max(a >> 1, 1);
                }
            }
            _applyMipRange(e, t) {
                if (this._renderer.context.webGLVersion !== 2 || t.mipLevelCount <= 1) {
                    return;
                }
                let _gl = this._gl;
                let i = Math.max((0 | t.mipLevelCount) - 1, 0);
                _gl.texParameteri(e.target, _gl.TEXTURE_BASE_LEVEL, 0);
                _gl.texParameteri(e.target, _gl.TEXTURE_MAX_LEVEL, i);
            }
            _initSampler(e) {
                let _gl = this._gl;
                let r = this._gl.createSampler();
                this._glSamplers[e._resourceId] = r;
                g(e, _gl, this._boundTextures[this._activeTextureLocation].mipLevelCount > 1, this._renderer.context.extensions.anisotropicFiltering, "samplerParameteri", r, false, true);
                return this._glSamplers[e._resourceId];
            }
            _getGlSampler(e) {
                return this._glSamplers[e._resourceId] || this._initSampler(e);
            }
            getGlSource(e) {
                e._gcLastUsed = this._renderer.gc.now;
                return e._gpuData[this._renderer.uid] || this._initSource(e);
            }
            generateCanvas(e) {
                let { pixels, width, height } = this.getPixels(e);
                let n = t.DOMAdapter.get().createCanvas();
                n.width = width;
                n.height = height;
                let s = n.getContext("2d");
                if (s) {
                    let e = s.createImageData(width, height);
                    e.data.set(pixels);
                    s.putImageData(e, 0, 0);
                }
                return n;
            }
            getPixels(e) {
                let resolution = e.source.resolution;
                let e_frame = e.frame;
                let width = Math.max(Math.round(e_frame.width * resolution), 1);
                let height = Math.max(Math.round(e_frame.height * resolution), 1);
                let n = new Uint8Array(4 * width * height);
                let _renderer = this._renderer;
                let o = _renderer.renderTarget.getRenderTarget(e);
                let l = _renderer.renderTarget.getGpuRenderTarget(o);
                let u = _renderer.gl;
                u.bindFramebuffer(u.FRAMEBUFFER, l.resolveTargetFramebuffer);
                u.readPixels(Math.round(e_frame.x * resolution), Math.round(e_frame.y * resolution), width, height, u.RGBA, u.UNSIGNED_BYTE, n);
                return {
                    pixels: new Uint8ClampedArray(n.buffer),
                    width,
                    height
                };
            }
            destroy() {
                this._managedTextures.destroy();
                this._glSamplers = null;
                this._boundTextures = null;
                this._boundSamplers = null;
                this._mapFormatToInternalFormat = null;
                this._mapFormatToType = null;
                this._mapFormatToFormat = null;
                this._uploads = null;
                this._renderer = null;
            }
            resetState() {
                this._activeTextureLocation = -1;
                this._boundTextures.fill(a.Texture.EMPTY.source);
                this._boundSamplers = Object.create(null);
                let _gl = this._gl;
                this._premultiplyAlpha = false;
                _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiplyAlpha);
            }
        };
        x.extension = {
            type: [
                r.ExtensionType.WebGLSystem
            ],
            name: "texture"
        };
        x.uploadExtensions = Object.create(null);
        r.extensions.handleByMap(r.ExtensionType.TextureUploaderWebGL, x.uploadExtensions);
        e.s([
            "GlTextureSystem",
            0,
            x
        ], 701993);
    },
    13814,
    727453,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(389474);
        var i = e.i(959684);
        var a = e.i(815343);
        var n = e.i(229972);
        var s = e.i(418668);
        var o = e.i(188578);
        var l = e.i(403976);
        var u = e.i(761149);
        var _ = e.i(153594);
        class c {
            contextChange(e) {
                let localUniforms = new _.UniformGroup({
                    uColor: {
                        value: new Float32Array([
                            1,
                            1,
                            1,
                            1
                        ]),
                        type: "vec4<f32>"
                    },
                    uTransformMatrix: {
                        value: new r.Matrix,
                        type: "mat3x3<f32>"
                    },
                    uRound: {
                        value: 0,
                        type: "f32"
                    }
                });
                let maxBatchableTextures = e.limits.maxBatchableTextures;
                let h = i.compileHighShaderGlProgram({
                    name: "graphics",
                    bits: [
                        a.colorBitGl,
                        n.generateTextureBatchBitGl(maxBatchableTextures),
                        s.localUniformBitGl,
                        o.roundPixelsBitGl
                    ]
                });
                this.shader = new u.Shader({
                    glProgram: h,
                    resources: {
                        localUniforms,
                        batchSamplers: l.getBatchSamplersUniformGroup(maxBatchableTextures)
                    }
                });
            }
            execute(e, t) {
                let t_context = t.context;
                let i = t_context.customShader || this.shader;
                let e_renderer = e.renderer;
                let { batcher, instructions } = e_renderer.graphicsContext.getContextRenderData(t_context);
                i.groups[0] = e_renderer.globalUniforms.bindGroup;
                e_renderer.state.set(e.state);
                e_renderer.shader.bind(i);
                e_renderer.geometry.bind(batcher.geometry, i.glProgram);
                let instructions_instructions = instructions.instructions;
                for(let e = 0; e < instructions.instructionSize; e++){
                    let t = instructions_instructions[e];
                    if (t.size) {
                        for(let e = 0; e < t.textures.count; e++){
                            e_renderer.texture.bind(t.textures.textures[e], e);
                        }
                        e_renderer.geometry.draw(t.topology, t.size, t.start);
                    }
                }
            }
            destroy() {
                this.shader.destroy(true);
                this.shader = null;
            }
        }
        c.extension = {
            type: [
                t.ExtensionType.WebGLPipesAdaptor
            ],
            name: "graphics"
        };
        e.s([
            "GlGraphicsAdaptor",
            0,
            c
        ], 13814);
        var h = e.i(949998);
        var d = e.i(337654);
        var f = e.i(562140);
        class m {
            init() {
                let e = i.compileHighShaderGlProgram({
                    name: "mesh",
                    bits: [
                        s.localUniformBitGl,
                        h.textureBitGl,
                        o.roundPixelsBitGl
                    ]
                });
                this._shader = new u.Shader({
                    glProgram: e,
                    resources: {
                        uTexture: d.Texture.EMPTY.source,
                        textureUniforms: {
                            uTextureMatrix: {
                                type: "mat3x3<f32>",
                                value: new r.Matrix
                            }
                        }
                    }
                });
            }
            execute(e, t) {
                let e_renderer = e.renderer;
                let t__shader = t._shader;
                if (t__shader) {
                    if (!t__shader.glProgram) {
                        return void f.warn("Mesh shader has no glProgram", t.shader);
                    }
                } else {
                    t__shader = this._shader;
                    let e = t.texture;
                    let r = e.source;
                    t__shader.resources.uTexture = r;
                    t__shader.resources.uSampler = r.style;
                    t__shader.resources.textureUniforms.uniforms.uTextureMatrix = e.textureMatrix.mapCoord;
                }
                t__shader.groups[100] = e_renderer.globalUniforms.bindGroup;
                t__shader.groups[101] = e.localUniformsBindGroup;
                e_renderer.encoder.draw({
                    geometry: t._geometry,
                    shader: t__shader,
                    state: t.state
                });
            }
            destroy() {
                this._shader.destroy(true);
                this._shader = null;
            }
        }
        m.extension = {
            type: [
                t.ExtensionType.WebGLPipesAdaptor
            ],
            name: "mesh"
        };
        e.s([
            "GlMeshAdaptor",
            0,
            m
        ], 727453);
    },
    849609,
    (e)=>{
        "use strict";
        var t = e.i(787653);
        e.s([
            "isSafari",
            0,
            ()=>{
                let { userAgent } = t.DOMAdapter.get().getNavigator();
                return /^((?!chrome|android).)*safari/i.test(userAgent);
            }
        ]);
    }
]);
