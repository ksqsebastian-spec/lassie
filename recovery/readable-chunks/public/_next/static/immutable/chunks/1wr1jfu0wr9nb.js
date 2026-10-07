;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "198d4a70-2558-1c34-e43a-a9cb23d1dfef";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    754287,
    633840,
    454710,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(688761);
        var i = e.i(666258);
        let s = r.State.for2d();
        class a {
            start(e, t, r) {
                let e_renderer = e.renderer;
                let i_encoder = e_renderer.encoder;
                let r_gpuProgram = r.gpuProgram;
                this._shader = r;
                this._geometry = t;
                i_encoder.setGeometry(t, r_gpuProgram);
                s.blendMode = "normal";
                e_renderer.pipeline.getPipeline(t, r_gpuProgram, s);
                let bindGroup = e_renderer.globalUniforms.bindGroup;
                i_encoder.resetBindGroup(1);
                i_encoder.setBindGroup(0, bindGroup, r_gpuProgram);
            }
            execute(e, t) {
                let gpuProgram = this._shader.gpuProgram;
                let e_renderer = e.renderer;
                let a_encoder = e_renderer.encoder;
                if (!t.bindGroup) {
                    let e = t.textures;
                    t.bindGroup = i.getTextureBatchBindGroup(e.textures, e.count, e_renderer.limits.maxBatchableTextures);
                }
                s.blendMode = t.blendMode;
                let o = e_renderer.bindGroup.getBindGroup(t.bindGroup, gpuProgram, 1);
                let u = e_renderer.pipeline.getPipeline(this._geometry, gpuProgram, s, t.topology);
                t.bindGroup._touch(e_renderer.gc.now, e_renderer.tick);
                a_encoder.setPipeline(u);
                a_encoder.renderPassEncoder.setBindGroup(1, o);
                a_encoder.renderPassEncoder.drawIndexed(t.size, 1, t.start);
            }
        }
        a.extension = {
            type: [
                t.ExtensionType.WebGPUPipesAdaptor
            ],
            name: "batch"
        };
        e.s([
            "GpuBatchAdaptor",
            0,
            a
        ], 754287);
        class n {
            constructor(e){
                this._hash = Object.create(null);
                this._renderer = e;
            }
            contextChange(e) {
                this._gpu = e;
            }
            getBindGroup(e, t, r) {
                e._updateKey();
                return this._hash[e._key] || this._createBindGroup(e, t, r);
            }
            _createBindGroup(e, t, r) {
                let device = this._gpu.device;
                let s = t.layout[r];
                let a = [];
                let _renderer = this._renderer;
                for(let t in s){
                    let r;
                    let i = e.resources[t] ?? e.resources[s[t]];
                    if (i._resourceType === "uniformGroup") {
                        _renderer.ubo.updateUniformGroup(i);
                        let e = i.buffer;
                        r = {
                            buffer: _renderer.buffer.getGPUBuffer(e),
                            offset: 0,
                            size: e.descriptor.size
                        };
                    } else {
                        if (i._resourceType === "buffer") {
                            r = {
                                buffer: _renderer.buffer.getGPUBuffer(i),
                                offset: 0,
                                size: i.descriptor.size
                            };
                        } else if (i._resourceType === "bufferResource") {
                            r = {
                                buffer: _renderer.buffer.getGPUBuffer(i.buffer),
                                offset: i.offset,
                                size: i.size
                            };
                        } else if (i._resourceType === "textureSampler") {
                            r = _renderer.texture.getGpuSampler(i);
                        } else if (i._resourceType === "textureSource") {
                            r = _renderer.texture.getTextureView(i);
                        }
                    }
                    a.push({
                        binding: s[t],
                        resource: r
                    });
                }
                let o = _renderer.shader.getProgramData(t).bindGroups[r];
                let u = device.createBindGroup({
                    layout: o,
                    entries: a
                });
                this._hash[e._key] = u;
                return u;
            }
            destroy() {
                this._hash = null;
                this._renderer = null;
            }
        }
        n.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "bindGroup"
        };
        e.s([
            "BindGroupSystem",
            0,
            n
        ], 633840);
        var o = e.i(217055);
        var u = e.i(733705);
        var d = e.i(563541);
        class l {
            constructor(e){
                this.gpuBuffer = e;
            }
            destroy() {
                this.gpuBuffer.destroy();
                this.gpuBuffer = null;
            }
        }
        class h {
            constructor(e){
                this._renderer = e;
                this._managedBuffers = new o.GCManagedHash({
                    renderer: e,
                    type: "resource",
                    onUnload: this.onBufferUnload.bind(this),
                    name: "gpuBuffer"
                });
            }
            contextChange(e) {
                this._gpu = e;
            }
            getGPUBuffer(e) {
                e._gcLastUsed = this._renderer.gc.now;
                return e._gpuData[this._renderer.uid]?.gpuBuffer || this.createGPUBuffer(e);
            }
            updateBuffer(e) {
                let t = this.getGPUBuffer(e);
                let e_data = e.data;
                if (e._updateID && e_data) {
                    e._updateID = 0;
                    this._gpu.device.queue.writeBuffer(t, 0, e_data.buffer, 0, (e._updateSize || e_data.byteLength) + 3 & -4);
                }
                return t;
            }
            destroyAll() {
                this._managedBuffers.removeAll();
            }
            onBufferUnload(e) {
                e.off("update", this.updateBuffer, this);
                e.off("change", this.onBufferChange, this);
            }
            createGPUBuffer(e) {
                let t = this._gpu.device.createBuffer(e.descriptor);
                e._updateID = 0;
                e._resourceId = u.uid("resource");
                if (e.data) {
                    d.fastCopy(e.data.buffer, t.getMappedRange(), e.data.byteOffset, e.data.byteLength);
                    t.unmap();
                }
                e._gpuData[this._renderer.uid] = new l(t);
                if (this._managedBuffers.add(e)) {
                    e.on("update", this.updateBuffer, this);
                    e.on("change", this.onBufferChange, this);
                }
                return t;
            }
            onBufferChange(e) {
                this._managedBuffers.remove(e);
                e._updateID = 0;
                this.createGPUBuffer(e);
            }
            destroy() {
                this._managedBuffers.destroy();
                this._renderer = null;
                this._gpu = null;
            }
        }
        h.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "buffer"
        };
        e.s([
            "GpuBufferData",
            0,
            l,
            "GpuBufferSystem",
            0,
            h
        ], 454710);
    },
    245665,
    29400,
    23295,
    602250,
    564115,
    989776,
    187925,
    465806,
    470227,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        class r {
            constructor(e){
                this._colorMaskCache = 15;
                this._renderer = e;
            }
            setMask(e) {
                if (this._colorMaskCache !== e) {
                    this._colorMaskCache = e;
                    this._renderer.pipeline.setColorMask(e);
                }
            }
            destroy() {
                this._renderer = null;
                this._colorMaskCache = null;
            }
        }
        r.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "colorMask"
        };
        e.s([
            "GpuColorMaskSystem",
            0,
            r
        ], 245665);
        var i = e.i(787653);
        class s {
            constructor(e){
                this._renderer = e;
            }
            async init(e) {
                if (!this._initPromise) {
                    this._initPromise = (e.gpu ? Promise.resolve(e.gpu) : this._createDeviceAndAdaptor(e)).then((e)=>{
                        this.gpu = e;
                        this.extensions = {
                            transientAttachment: typeof GPUTextureUsage.TRANSIENT_ATTACHMENT === "number"
                        };
                        this._renderer.runners.contextChange.emit(this.gpu);
                    });
                }
                return this._initPromise;
            }
            contextChange(e) {
                this._renderer.gpu = e;
            }
            async _createDeviceAndAdaptor(e) {
                let adapter = await i.DOMAdapter.get().getNavigator().gpu.requestAdapter({
                    powerPreference: e.powerPreference,
                    forceFallbackAdapter: e.forceFallbackAdapter
                });
                let requiredFeatures = [
                    "texture-compression-bc",
                    "texture-compression-astc",
                    "texture-compression-etc2"
                ].filter((e)=>adapter.features.has(e));
                let device = await adapter.requestDevice({
                    requiredFeatures
                });
                return {
                    adapter,
                    device
                };
            }
            destroy() {
                this.gpu = null;
                this.extensions = null;
                this._renderer = null;
            }
        }
        s.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "device"
        };
        s.defaultOptions = {
            powerPreference: undefined,
            forceFallbackAdapter: false
        };
        e.s([
            "GpuDeviceSystem",
            0,
            s
        ], 29400);
        class a {
            constructor(e){
                this._boundBindGroup = Object.create(null);
                this._boundVertexBuffer = Object.create(null);
                this._renderer = e;
            }
            renderStart() {
                this.commandFinished = new Promise((resolve)=>{
                    this._resolveCommandFinished = resolve;
                });
                this.commandEncoder = this._renderer.gpu.device.createCommandEncoder();
            }
            beginRenderPass(e) {
                this.endRenderPass();
                this._clearCache();
                this.renderPassEncoder = this.commandEncoder.beginRenderPass(e.descriptor);
            }
            endRenderPass() {
                if (this.renderPassEncoder) {
                    this.renderPassEncoder.end();
                }
                this.renderPassEncoder = null;
            }
            setViewport(e) {
                this.renderPassEncoder.setViewport(e.x, e.y, e.width, e.height, 0, 1);
            }
            setPipelineFromGeometryProgramAndState(e, t, r, i) {
                let s = this._renderer.pipeline.getPipeline(e, t, r, i);
                this.setPipeline(s);
            }
            setPipeline(e) {
                if (this._boundPipeline !== e) {
                    this._boundPipeline = e;
                    this.renderPassEncoder.setPipeline(e);
                }
            }
            _setVertexBuffer(e, t) {
                if (this._boundVertexBuffer[e] !== t) {
                    this._boundVertexBuffer[e] = t;
                    this.renderPassEncoder.setVertexBuffer(e, this._renderer.buffer.updateBuffer(t));
                }
            }
            _setIndexBuffer(e) {
                if (this._boundIndexBuffer === e) {
                    return;
                }
                this._boundIndexBuffer = e;
                let t = e.data.BYTES_PER_ELEMENT === 2 ? "uint16" : "uint32";
                this.renderPassEncoder.setIndexBuffer(this._renderer.buffer.updateBuffer(e), t);
            }
            resetBindGroup(e) {
                this._boundBindGroup[e] = null;
            }
            setBindGroup(e, t, r) {
                if (this._boundBindGroup[e] === t) {
                    return;
                }
                this._boundBindGroup[e] = t;
                t._touch(this._renderer.gc.now, this._renderer.tick);
                let i = this._renderer.bindGroup.getBindGroup(t, r, e);
                this.renderPassEncoder.setBindGroup(e, i);
            }
            setGeometry(e, t) {
                let r = this._renderer.pipeline.getBufferNamesToBind(e, t);
                for(let t in r){
                    this._setVertexBuffer(parseInt(t, 10), e.attributes[r[t]].buffer);
                }
                if (e.indexBuffer) {
                    this._setIndexBuffer(e.indexBuffer);
                }
            }
            _setShaderBindGroups(e, t) {
                for(let r in e.groups){
                    let i = e.groups[r];
                    if (!t) {
                        this._syncBindGroup(i);
                    }
                    this.setBindGroup(r, i, e.gpuProgram);
                }
            }
            _syncBindGroup(e) {
                for(let t in e.resources){
                    let r = e.resources[t];
                    if (r.isUniformGroup) {
                        this._renderer.ubo.updateUniformGroup(r);
                    }
                }
            }
            draw(e) {
                let { geometry, shader, state, topology, size, start, instanceCount, skipSync } = e;
                this.setPipelineFromGeometryProgramAndState(geometry, shader.gpuProgram, state, topology);
                this.setGeometry(geometry, shader.gpuProgram);
                this._setShaderBindGroups(shader, skipSync);
                if (geometry.indexBuffer) {
                    this.renderPassEncoder.drawIndexed(size || geometry.indexBuffer.data.length, instanceCount ?? geometry.instanceCount, start || 0);
                } else {
                    this.renderPassEncoder.draw(size || geometry.getSize(), instanceCount ?? geometry.instanceCount, start || 0);
                }
            }
            finishRenderPass() {
                if (this.renderPassEncoder) {
                    this.renderPassEncoder.end();
                    this.renderPassEncoder = null;
                }
            }
            postrender() {
                this.finishRenderPass();
                this._gpu.device.queue.submit([
                    this.commandEncoder.finish()
                ]);
                this._resolveCommandFinished();
                this.commandEncoder = null;
            }
            restoreRenderPass() {
                let e = this._renderer.renderTarget.adaptor.getDescriptor(this._renderer.renderTarget.renderTarget, false, [
                    0,
                    0,
                    0,
                    1
                ], this._renderer.renderTarget.mipLevel, this._renderer.renderTarget.layer);
                this.renderPassEncoder = this.commandEncoder.beginRenderPass(e);
                let _boundPipeline = this._boundPipeline;
                let r = {
                    ...this._boundVertexBuffer
                };
                let _boundIndexBuffer = this._boundIndexBuffer;
                let s = {
                    ...this._boundBindGroup
                };
                this._clearCache();
                let viewport = this._renderer.renderTarget.viewport;
                for(let e in this.renderPassEncoder.setViewport(viewport.x, viewport.y, viewport.width, viewport.height, 0, 1), this.setPipeline(_boundPipeline), r){
                    this._setVertexBuffer(e, r[e]);
                }
                for(let e in s){
                    this.setBindGroup(e, s[e], null);
                }
                this._setIndexBuffer(_boundIndexBuffer);
            }
            _clearCache() {
                for(let e = 0; e < 16; e++){
                    this._boundBindGroup[e] = null;
                    this._boundVertexBuffer[e] = null;
                }
                this._boundIndexBuffer = null;
                this._boundPipeline = null;
            }
            destroy() {
                this._renderer = null;
                this._gpu = null;
                this._boundBindGroup = null;
                this._boundVertexBuffer = null;
                this._boundIndexBuffer = null;
                this._boundPipeline = null;
            }
            contextChange(e) {
                this._gpu = e;
            }
        }
        a.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "encoder",
            priority: 1
        };
        e.s([
            "GpuEncoderSystem",
            0,
            a
        ], 23295);
        class n {
            constructor(e){
                this._renderer = e;
            }
            contextChange() {
                this.maxTextures = this._renderer.device.gpu.device.limits.maxSampledTexturesPerShaderStage;
                this.maxBatchableTextures = this.maxTextures;
            }
            destroy() {}
        }
        n.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "limits"
        };
        e.s([
            "GpuLimitsSystem",
            0,
            n
        ], 602250);
        var o = e.i(589627);
        class u {
            constructor(e){
                this._renderTargetStencilState = Object.create(null);
                this._renderer = e;
                e.renderTarget.onRenderTargetChange.add(this);
            }
            onRenderTargetChange(e) {
                let t = this._renderTargetStencilState[e.uid];
                if (!t) {
                    t = this._renderTargetStencilState[e.uid] = {
                        stencilMode: o.STENCIL_MODES.DISABLED,
                        stencilReference: 0
                    };
                }
                this._activeRenderTarget = e;
                this.setStencilMode(t.stencilMode, t.stencilReference);
            }
            setStencilMode(e, t) {
                let r = this._renderTargetStencilState[this._activeRenderTarget.uid];
                r.stencilMode = e;
                r.stencilReference = t;
                let _renderer = this._renderer;
                _renderer.pipeline.setStencilMode(e);
                _renderer.encoder.renderPassEncoder.setStencilReference(t);
            }
            destroy() {
                this._renderer.renderTarget.onRenderTargetChange.remove(this);
                this._renderer = null;
                this._activeRenderTarget = null;
                this._renderTargetStencilState = null;
            }
        }
        u.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "stencil"
        };
        e.s([
            "GpuStencilSystem",
            0,
            u
        ], 564115);
        var d = e.i(627760);
        let l = {
            i32: {
                align: 4,
                size: 4
            },
            u32: {
                align: 4,
                size: 4
            },
            f32: {
                align: 4,
                size: 4
            },
            f16: {
                align: 2,
                size: 2
            },
            "vec2<i32>": {
                align: 8,
                size: 8
            },
            "vec2<u32>": {
                align: 8,
                size: 8
            },
            "vec2<f32>": {
                align: 8,
                size: 8
            },
            "vec2<f16>": {
                align: 4,
                size: 4
            },
            "vec3<i32>": {
                align: 16,
                size: 12
            },
            "vec3<u32>": {
                align: 16,
                size: 12
            },
            "vec3<f32>": {
                align: 16,
                size: 12
            },
            "vec3<f16>": {
                align: 8,
                size: 6
            },
            "vec4<i32>": {
                align: 16,
                size: 16
            },
            "vec4<u32>": {
                align: 16,
                size: 16
            },
            "vec4<f32>": {
                align: 16,
                size: 16
            },
            "vec4<f16>": {
                align: 8,
                size: 8
            },
            "mat2x2<f32>": {
                align: 8,
                size: 16
            },
            "mat2x2<f16>": {
                align: 4,
                size: 8
            },
            "mat3x2<f32>": {
                align: 8,
                size: 24
            },
            "mat3x2<f16>": {
                align: 4,
                size: 12
            },
            "mat4x2<f32>": {
                align: 8,
                size: 32
            },
            "mat4x2<f16>": {
                align: 4,
                size: 16
            },
            "mat2x3<f32>": {
                align: 16,
                size: 32
            },
            "mat2x3<f16>": {
                align: 8,
                size: 16
            },
            "mat3x3<f32>": {
                align: 16,
                size: 48
            },
            "mat3x3<f16>": {
                align: 8,
                size: 24
            },
            "mat4x3<f32>": {
                align: 16,
                size: 64
            },
            "mat4x3<f16>": {
                align: 8,
                size: 32
            },
            "mat2x4<f32>": {
                align: 16,
                size: 32
            },
            "mat2x4<f16>": {
                align: 8,
                size: 16
            },
            "mat3x4<f32>": {
                align: 16,
                size: 48
            },
            "mat3x4<f16>": {
                align: 8,
                size: 24
            },
            "mat4x4<f32>": {
                align: 16,
                size: 64
            },
            "mat4x4<f16>": {
                align: 8,
                size: 32
            }
        };
        function createUboElements(e) {
            let uboElements = e.map((data)=>({
                    data,
                    offset: 0,
                    size: 0
                }));
            let r = 0;
            for(let e = 0; e < uboElements.length; e++){
                let uboElement = uboElements[e];
                let s = l[uboElement.data.type].size;
                let a = l[uboElement.data.type].align;
                if (!l[uboElement.data.type]) {
                    throw Error(`[Pixi.js] WebGPU UniformBuffer: Unknown type ${uboElement.data.type}`);
                }
                if (uboElement.data.size > 1) {
                    s = Math.max(s, a) * uboElement.data.size;
                }
                r = Math.ceil(r / a) * a;
                uboElement.size = s;
                uboElement.offset = r;
                r += s;
            }
            return {
                uboElements,
                size: r = 16 * Math.ceil(r / 16)
            };
        }
        e.s([
            "WGSL_ALIGN_SIZE_DATA",
            0,
            l,
            "createUboElementsWGSL",
            0,
            createUboElements
        ], 989776);
        var c = e.i(902504);
        var p = e.i(422537);
        function g(e, t) {
            let { size, align } = l[e.data.type];
            let s = (align - size) / 4;
            let a = e.data.type.indexOf("i32") >= 0 ? "dataInt32" : "data";
            return `
         v = uv.${e.data.name};
         ${t !== 0 ? `offset += ${t};` : ""}

         arrayOffset = offset;

         t = 0;

         for(var i=0; i < ${e.data.size * (size / 4)}; i++)
         {
             for(var j = 0; j < ${size / 4}; j++)
             {
                 ${a}[arrayOffset++] = v[t++];
             }
             ${s !== 0 ? `arrayOffset += ${s};` : ""}
         }
     `;
        }
        function generateUboSync(e) {
            return c.createUboSyncFunction(e, "uboWgsl", g, p.uboSyncFunctionsWGSL);
        }
        e.s([
            "generateArraySyncWGSL",
            0,
            g
        ], 187925);
        e.s([
            "createUboSyncFunctionWGSL",
            0,
            generateUboSync
        ], 465806);
        class m extends d.UboSystem {
            constructor(){
                super({
                    createUboElements,
                    generateUboSync
                });
            }
        }
        m.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "ubo"
        };
        e.s([
            "GpuUboSystem",
            0,
            m
        ], 470227);
    },
    630739,
    952222,
    771690,
    942816,
    216248,
    500030,
    905072,
    71203,
    221845,
    649308,
    908565,
    67473,
    333962,
    955419,
    349139,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(55585);
        var i = e.i(693398);
        var s = e.i(294212);
        var a = e.i(910120);
        var n = e.i(175444);
        class o {
            constructor(e){
                this._bindGroupHash = Object.create(null);
                this._buffers = [];
                this._bindGroups = [];
                this._bufferResources = [];
                this._renderer = e;
                this._batchBuffer = new a.UboBatch({
                    minUniformOffsetAlignment: 128
                });
                for(let e = 0; e < 2; e++){
                    let t = s.BufferUsage.UNIFORM | s.BufferUsage.COPY_DST;
                    if (e === 0) {
                        t |= s.BufferUsage.COPY_SRC;
                    }
                    this._buffers.push(new r.Buffer({
                        data: this._batchBuffer.data,
                        usage: t
                    }));
                }
            }
            renderEnd() {
                this._uploadBindGroups();
                this._resetBindGroups();
            }
            _resetBindGroups() {
                this._bindGroupHash = Object.create(null);
                this._batchBuffer.clear();
            }
            getUniformBindGroup(e, t) {
                if (!t && this._bindGroupHash[e.uid]) {
                    return this._bindGroupHash[e.uid];
                }
                this._renderer.ubo.ensureUniformGroup(e);
                let data = e.buffer.data;
                let i = this._batchBuffer.addEmptyGroup(data.length);
                this._renderer.ubo.syncUniformGroup(e, this._batchBuffer.data, i / 4);
                this._bindGroupHash[e.uid] = this._getBindGroup(i / 128);
                return this._bindGroupHash[e.uid];
            }
            getUboResource(e) {
                this._renderer.ubo.updateUniformGroup(e);
                let data = e.buffer.data;
                let r = this._batchBuffer.addGroup(data);
                return this._getBufferResource(r / 128);
            }
            getArrayBindGroup(e) {
                let t = this._batchBuffer.addGroup(e);
                return this._getBindGroup(t / 128);
            }
            getArrayBufferResource(e) {
                let t = this._batchBuffer.addGroup(e);
                return this._getBufferResource(t / 128);
            }
            _getBufferResource(e) {
                if (!this._bufferResources[e]) {
                    let buffer = this._buffers[e % 2];
                    this._bufferResources[e] = new i.BufferResource({
                        buffer,
                        offset: (e / 2 | 0) * 256,
                        size: 128
                    });
                }
                return this._bufferResources[e];
            }
            _getBindGroup(e) {
                if (!this._bindGroups[e]) {
                    let t = new n.BindGroup({
                        0: this._getBufferResource(e)
                    });
                    this._bindGroups[e] = t;
                }
                return this._bindGroups[e];
            }
            _uploadBindGroups() {
                let buffer = this._renderer.buffer;
                let t = this._buffers[0];
                t.update(this._batchBuffer.byteIndex);
                buffer.updateBuffer(t);
                let r = this._renderer.gpu.device.createCommandEncoder();
                for(let i = 1; i < this._buffers.length; i++){
                    let _buffer = this._buffers[i];
                    r.copyBufferToBuffer(buffer.getGPUBuffer(t), 128, buffer.getGPUBuffer(_buffer), 0, this._batchBuffer.byteIndex);
                }
                this._renderer.gpu.device.queue.submit([
                    r.finish()
                ]);
            }
            destroy() {
                for(let e = 0; e < this._bindGroups.length; e++){
                    this._bindGroups[e]?.destroy();
                }
                this._bindGroups = null;
                this._bindGroupHash = null;
                for(let e = 0; e < this._buffers.length; e++){
                    this._buffers[e].destroy();
                }
                this._buffers = null;
                for(let e = 0; e < this._bufferResources.length; e++){
                    this._bufferResources[e].destroy();
                }
                this._bufferResources = null;
                this._batchBuffer.destroy();
                this._renderer = null;
            }
        }
        o.extension = {
            type: [
                t.ExtensionType.WebGPUPipes
            ],
            name: "uniformBatch"
        };
        e.s([
            "GpuUniformBatchPipe",
            0,
            o
        ], 630739);
        var u = e.i(562140);
        var d = e.i(261095);
        var l = e.i(589627);
        var h = e.i(235569);
        var c = e.i(324086);
        let p = {
            "point-list": 0,
            "line-list": 1,
            "line-strip": 2,
            "triangle-list": 3,
            "triangle-strip": 4
        };
        class g {
            constructor(e){
                this._moduleCache = Object.create(null);
                this._bufferLayoutsCache = Object.create(null);
                this._bindingNamesCache = Object.create(null);
                this._pipeCache = Object.create(null);
                this._pipeStateCaches = Object.create(null);
                this._colorMask = 15;
                this._multisampleCount = 1;
                this._colorTargetCount = 1;
                this._renderer = e;
            }
            contextChange(e) {
                this._gpu = e;
                this.setStencilMode(l.STENCIL_MODES.DISABLED);
                this._updatePipeHash();
            }
            setMultisampleCount(e) {
                if (this._multisampleCount !== e) {
                    this._multisampleCount = e;
                    this._updatePipeHash();
                }
            }
            setRenderTarget(e) {
                this._multisampleCount = e.msaaSamples;
                this._depthStencilAttachment = +!!e.descriptor.depthStencilAttachment;
                this._colorTargetCount = e.colorTargetCount;
                this._updatePipeHash();
            }
            setColorMask(e) {
                if (this._colorMask !== e) {
                    this._colorMask = e;
                    this._updatePipeHash();
                }
            }
            setStencilMode(e) {
                if (this._stencilMode !== e) {
                    this._stencilMode = e;
                    this._stencilState = c.GpuStencilModesToPixi[e];
                    this._updatePipeHash();
                }
            }
            setPipeline(e, t, r, i) {
                let s = this.getPipeline(e, t, r);
                i.setPipeline(s);
            }
            getPipeline(e, t, r, i) {
                let s;
                let a;
                let n;
                if (!e._layoutKey) {
                    d.ensureAttributes(e, t.attributeData);
                    this._generateBufferKey(e);
                }
                if (!i) {
                    i = e.topology;
                }
                s = e._layoutKey;
                a = t._layoutKey;
                n = r.data;
                let o = s << 24 | a << 16 | n << 10 | r._blendModeId << 5 | p[i];
                if (!this._pipeCache[o]) {
                    this._pipeCache[o] = this._createPipeline(e, t, r, i);
                }
                return this._pipeCache[o];
            }
            _createPipeline(e, t, r, topology) {
                let device = this._gpu.device;
                let buffers = this._createVertexBufferLayouts(e, t);
                let targets = this._renderer.state.getColorTargets(r, this._colorTargetCount);
                let o = this._stencilMode === l.STENCIL_MODES.RENDERING_MASK_ADD ? 0 : this._colorMask;
                for(let e = 0; e < targets.length; e++){
                    targets[e].writeMask = o;
                }
                let pipeline = this._renderer.shader.getProgramData(t).pipeline;
                let d = {
                    vertex: {
                        module: this._getModule(t.vertex.source),
                        entryPoint: t.vertex.entryPoint,
                        buffers
                    },
                    fragment: {
                        module: this._getModule(t.fragment.source),
                        entryPoint: t.fragment.entryPoint,
                        targets
                    },
                    primitive: {
                        topology,
                        cullMode: r.cullMode
                    },
                    layout: pipeline,
                    multisample: {
                        count: this._multisampleCount
                    },
                    label: "PIXI Pipeline"
                };
                if (this._depthStencilAttachment) {
                    d.depthStencil = {
                        ...this._stencilState,
                        format: "depth24plus-stencil8",
                        depthWriteEnabled: r.depthTest,
                        depthCompare: r.depthTest ? "less" : "always"
                    };
                }
                return device.createRenderPipeline(d);
            }
            _getModule(e) {
                return this._moduleCache[e] || this._createModule(e);
            }
            _createModule(code) {
                let device = this._gpu.device;
                this._moduleCache[code] = device.createShaderModule({
                    code
                });
                return this._moduleCache[code];
            }
            _generateBufferKey(e) {
                let t = [];
                let r = 0;
                let i = Object.keys(e.attributes).sort();
                for(let s = 0; s < i.length; s++){
                    let a = e.attributes[i[s]];
                    t[r++] = a.offset;
                    t[r++] = a.format;
                    t[r++] = a.stride;
                    t[r++] = a.instance;
                }
                let s = t.join("|");
                e._layoutKey = h.createIdFromString(s, "geometry");
                return e._layoutKey;
            }
            _generateAttributeLocationsKey(e) {
                let t = [];
                let r = 0;
                let i = Object.keys(e.attributeData).sort();
                for(let s = 0; s < i.length; s++){
                    let a = e.attributeData[i[s]];
                    t[r++] = a.location;
                }
                let s = t.join("|");
                e._attributeLocationsKey = h.createIdFromString(s, "programAttributes");
                return e._attributeLocationsKey;
            }
            getBufferNamesToBind(e, t) {
                let r = e._layoutKey << 16 | t._attributeLocationsKey;
                if (this._bindingNamesCache[r]) {
                    return this._bindingNamesCache[r];
                }
                let i = this._createVertexBufferLayouts(e, t);
                let s = Object.create(null);
                let t_attributeData = t.attributeData;
                for(let e = 0; e < i.length; e++){
                    let t = Object.values(i[e].attributes)[0].shaderLocation;
                    for(let r in t_attributeData){
                        if (t_attributeData[r].location === t) {
                            s[e] = r;
                            break;
                        }
                    }
                }
                this._bindingNamesCache[r] = s;
                return s;
            }
            _createVertexBufferLayouts(e, t) {
                if (!t._attributeLocationsKey) {
                    this._generateAttributeLocationsKey(t);
                }
                let r = e._layoutKey << 16 | t._attributeLocationsKey;
                if (this._bufferLayoutsCache[r]) {
                    return this._bufferLayoutsCache[r];
                }
                let i = [];
                e.buffers.forEach((r)=>{
                    let s = {
                        arrayStride: 0,
                        stepMode: "vertex",
                        attributes: []
                    };
                    let s_attributes = s.attributes;
                    for(let i in t.attributeData){
                        let n = e.attributes[i];
                        if ((n.divisor ?? 1) !== 1) {
                            u.warn(`Attribute ${i} has an invalid divisor value of '${n.divisor}'. WebGPU only supports a divisor value of 1`);
                        }
                        if (n.buffer === r) {
                            s.arrayStride = n.stride;
                            s.stepMode = n.instance ? "instance" : "vertex";
                            s_attributes.push({
                                shaderLocation: t.attributeData[i].location,
                                offset: n.offset,
                                format: n.format
                            });
                        }
                    }
                    if (s_attributes.length) {
                        i.push(s);
                    }
                });
                this._bufferLayoutsCache[r] = i;
                return i;
            }
            _updatePipeHash() {
                let e;
                let t;
                let r;
                e = this._stencilMode;
                t = this._multisampleCount;
                r = this._colorMask;
                let i = r << 8 | e << 5 | this._depthStencilAttachment << 3 | this._colorTargetCount << 1 | t;
                if (!this._pipeStateCaches[i]) {
                    this._pipeStateCaches[i] = Object.create(null);
                }
                this._pipeCache = this._pipeStateCaches[i];
            }
            destroy() {
                this._renderer = null;
                this._bufferLayoutsCache = null;
            }
        }
        g.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "pipeline"
        };
        e.s([
            "PipelineSystem",
            0,
            g
        ], 952222);
        var f = e.i(798299);
        var m = e.i(220892);
        var _ = e.i(173156);
        var x = e.i(317765);
        class b {
            constructor(){
                this.contexts = [];
                this.msaaTextures = [];
                this.msaaSamples = 1;
            }
        }
        e.s([
            "GpuRenderTarget",
            0,
            b
        ], 771690);
        class y {
            init(e, t) {
                this._renderer = e;
                this._renderTargetSystem = t;
            }
            copyToTexture(e, t, r, i, s) {
                let _renderer = this._renderer;
                let n = this._getGpuColorTexture(e);
                let o = _renderer.texture.getGpuSource(t.source);
                _renderer.encoder.commandEncoder.copyTextureToTexture({
                    texture: n,
                    origin: r
                }, {
                    texture: o,
                    origin: s
                }, i);
                return t;
            }
            startRenderPass(e, t = true, r, i, s = 0, a = 0) {
                let n = this._renderTargetSystem.getGpuRenderTarget(e);
                if (a !== 0 && n.msaaTextures?.length) {
                    throw Error("[RenderTargetSystem] Rendering to array layers is not supported with MSAA render targets.");
                }
                if (s > 0 && n.msaaTextures?.length) {
                    throw Error("[RenderTargetSystem] Rendering to mip levels is not supported with MSAA render targets.");
                }
                n.descriptor = this.getDescriptor(e, t, r, s, a);
                this._renderer.pipeline.setRenderTarget(n);
                this._renderer.encoder.beginRenderPass(n);
                this._renderer.encoder.setViewport(i);
            }
            finishRenderPass() {
                this._renderer.encoder.endRenderPass();
            }
            _getGpuColorTexture(e) {
                let t = this._renderTargetSystem.getGpuRenderTarget(e);
                if (t.contexts[0]) {
                    return t.contexts[0].getCurrentTexture();
                }
                return this._renderer.texture.getGpuSource(e.colorTextures[0].source);
            }
            getDescriptor(e, t, clearValue, baseMipLevel = 0, s = 0) {
                let depthStencilAttachment;
                if (typeof t === "boolean") {
                    t = t ? m.CLEAR.ALL : m.CLEAR.NONE;
                }
                let _renderTargetSystem = this._renderTargetSystem;
                let o = _renderTargetSystem.getGpuRenderTarget(e);
                let colorAttachments = e.colorTextures.map((e, a)=>{
                    let u;
                    let resolveTarget;
                    let l = o.contexts[a];
                    if (l) {
                        if (s !== 0) {
                            throw Error("[RenderTargetSystem] Rendering to array layers is not supported for canvas targets.");
                        }
                        u = l.getCurrentTexture().createView();
                    } else {
                        u = this._renderer.texture.getGpuSource(e).createView({
                            dimension: "2d",
                            baseMipLevel,
                            mipLevelCount: 1,
                            baseArrayLayer: s,
                            arrayLayerCount: 1
                        });
                    }
                    let h = false;
                    if (o.msaaTextures[a]) {
                        resolveTarget = u;
                        u = this._renderer.texture.getTextureView(o.msaaTextures[a]);
                        h = o.msaaTextures[a].transient;
                    }
                    let loadOp = t & m.CLEAR.COLOR ? "clear" : "load";
                    clearValue ??= _renderTargetSystem.defaultClearColor;
                    return {
                        view: u,
                        resolveTarget,
                        clearValue,
                        storeOp: h ? "discard" : "store",
                        loadOp
                    };
                });
                if ((e.stencil || e.depth) && !e.depthStencilTexture) {
                    e.ensureDepthStencilTexture();
                    e.depthStencilTexture.source.sampleCount = o.msaa ? 4 : 1;
                    e.depthStencilTexture.source.transient = !!o.msaaTextures[0]?.transient;
                }
                if (e.depthStencilTexture) {
                    let stencilLoadOp = t & m.CLEAR.STENCIL ? "clear" : "load";
                    let depthLoadOp = t & m.CLEAR.DEPTH ? "clear" : "load";
                    let o = e.depthStencilTexture.source.transient ? "discard" : "store";
                    depthStencilAttachment = {
                        view: this._renderer.texture.getGpuSource(e.depthStencilTexture.source).createView({
                            dimension: "2d",
                            baseMipLevel,
                            mipLevelCount: 1,
                            baseArrayLayer: s,
                            arrayLayerCount: 1
                        }),
                        stencilStoreOp: o,
                        stencilLoadOp,
                        depthClearValue: 1,
                        depthLoadOp,
                        depthStoreOp: o
                    };
                }
                return {
                    colorAttachments,
                    depthStencilAttachment
                };
            }
            clear(e, t = true, r, i, s = 0, a = 0) {
                if (!t) {
                    return;
                }
                let { gpu, encoder } = this._renderer;
                let gpu_device = gpu.device;
                if (encoder.commandEncoder === null) {
                    let n = gpu_device.createCommandEncoder();
                    let o = this.getDescriptor(e, t, r, s, a);
                    let d = n.beginRenderPass(o);
                    d.setViewport(i.x, i.y, i.width, i.height, 0, 1);
                    d.end();
                    let l = n.finish();
                    gpu_device.queue.submit([
                        l
                    ]);
                } else {
                    this.startRenderPass(e, t, r, i, s, a);
                }
            }
            initGpuRenderTarget(e) {
                e.isRoot = true;
                let t = new b;
                t.colorTargetCount = e.colorTextures.length;
                e.colorTextures.forEach((e, r)=>{
                    if (e instanceof _.CanvasSource) {
                        let i = e.resource.getContext("webgpu");
                        let alphaMode = e.transparent ? "premultiplied" : "opaque";
                        try {
                            i.configure({
                                device: this._renderer.gpu.device,
                                usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
                                format: "bgra8unorm",
                                alphaMode
                            });
                        } catch (error) {
                            console.error(error);
                        }
                        t.contexts[r] = i;
                    }
                    t.msaa = e.source.antialias;
                    if (e.source.antialias) {
                        let i = new x.TextureSource({
                            width: 0,
                            height: 0,
                            sampleCount: 4,
                            transient: e.source.transient,
                            arrayLayerCount: e.source.arrayLayerCount
                        });
                        t.msaaTextures[r] = i;
                    }
                });
                if (t.msaa) {
                    t.msaaSamples = 4;
                    if (e.depthStencilTexture) {
                        e.depthStencilTexture.source.sampleCount = 4;
                        e.depthStencilTexture.source.transient = !!t.msaaTextures[0]?.transient;
                    }
                }
                return t;
            }
            destroyGpuRenderTarget(e) {
                e.contexts.forEach((e)=>{
                    e.unconfigure();
                });
                e.msaaTextures.forEach((e)=>{
                    e.destroy();
                });
                e.msaaTextures.length = 0;
                e.contexts.length = 0;
            }
            ensureDepthStencilTexture(e) {
                let t = this._renderTargetSystem.getGpuRenderTarget(e);
                if (e.depthStencilTexture && t.msaa) {
                    e.depthStencilTexture.source.sampleCount = 4;
                }
            }
            resizeGpuRenderTarget(e) {
                let t = this._renderTargetSystem.getGpuRenderTarget(e);
                t.width = e.width;
                t.height = e.height;
                if (t.msaa) {
                    e.colorTextures.forEach((e, r)=>{
                        let i = t.msaaTextures[r];
                        i?.resize(e.source.width, e.source.height, e.source._resolution);
                    });
                }
            }
        }
        e.s([
            "GpuRenderTargetAdaptor",
            0,
            y
        ], 942816);
        class G extends f.RenderTargetSystem {
            constructor(e){
                super(e);
                this.adaptor = new y;
                this.adaptor.init(e, this);
            }
        }
        G.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "renderTarget"
        };
        e.s([
            "GpuRenderTargetSystem",
            0,
            G
        ], 216248);
        class T {
            constructor(){
                this._gpuProgramData = Object.create(null);
            }
            contextChange(e) {
                this._gpu = e;
            }
            getProgramData(e) {
                return this._gpuProgramData[e._layoutKey] || this._createGPUProgramData(e);
            }
            _createGPUProgramData(e) {
                let device = this._gpu.device;
                let r = e.gpuLayout.map((entries)=>device.createBindGroupLayout({
                        entries
                    }));
                this._gpuProgramData[e._layoutKey] = {
                    bindGroups: r,
                    pipeline: device.createPipelineLayout({
                        bindGroupLayouts: r
                    })
                };
                return this._gpuProgramData[e._layoutKey];
            }
            destroy() {
                this._gpu = null;
                this._gpuProgramData = null;
            }
        }
        T.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "shader"
        };
        e.s([
            "GpuShaderSystem",
            0,
            T
        ], 500030);
        var S = e.i(688761);
        let P = {};
        P.normal = {
            alpha: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
            },
            color: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
            }
        };
        P.add = {
            alpha: {
                srcFactor: "src-alpha",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
            },
            color: {
                srcFactor: "one",
                dstFactor: "one",
                operation: "add"
            }
        };
        P.multiply = {
            alpha: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
            },
            color: {
                srcFactor: "dst",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
            }
        };
        P.screen = {
            alpha: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
            },
            color: {
                srcFactor: "one",
                dstFactor: "one-minus-src",
                operation: "add"
            }
        };
        P.overlay = {
            alpha: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
            },
            color: {
                srcFactor: "one",
                dstFactor: "one-minus-src",
                operation: "add"
            }
        };
        P.none = {
            alpha: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
            },
            color: {
                srcFactor: "zero",
                dstFactor: "zero",
                operation: "add"
            }
        };
        P["normal-npm"] = {
            alpha: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
            },
            color: {
                srcFactor: "src-alpha",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
            }
        };
        P["add-npm"] = {
            alpha: {
                srcFactor: "one",
                dstFactor: "one",
                operation: "add"
            },
            color: {
                srcFactor: "src-alpha",
                dstFactor: "one",
                operation: "add"
            }
        };
        P["screen-npm"] = {
            alpha: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
            },
            color: {
                srcFactor: "src-alpha",
                dstFactor: "one-minus-src",
                operation: "add"
            }
        };
        P.erase = {
            alpha: {
                srcFactor: "zero",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
            },
            color: {
                srcFactor: "zero",
                dstFactor: "one-minus-src",
                operation: "add"
            }
        };
        P.min = {
            alpha: {
                srcFactor: "one",
                dstFactor: "one",
                operation: "min"
            },
            color: {
                srcFactor: "one",
                dstFactor: "one",
                operation: "min"
            }
        };
        P.max = {
            alpha: {
                srcFactor: "one",
                dstFactor: "one",
                operation: "max"
            },
            color: {
                srcFactor: "one",
                dstFactor: "one",
                operation: "max"
            }
        };
        e.s([
            "GpuBlendModesToPixi",
            0,
            P
        ], 905072);
        class B {
            constructor(){
                this.defaultState = new S.State;
                this.defaultState.blend = true;
            }
            contextChange(e) {
                this.gpu = e;
            }
            getColorTargets(e, t) {
                let blend = P[e.blendMode] || P.normal;
                let i = [];
                let s = {
                    format: "bgra8unorm",
                    writeMask: 0,
                    blend
                };
                for(let e = 0; e < t; e++){
                    i[e] = s;
                }
                return i;
            }
            destroy() {
                this.gpu = null;
            }
        }
        B.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "state"
        };
        e.s([
            "GpuStateSystem",
            0,
            B
        ], 71203);
        var v = e.i(787653);
        var C = e.i(217055);
        var U = e.i(153594);
        var M = e.i(963345);
        let E = {
            type: "image",
            upload (e, t, r, i = 0) {
                let e_resource = e.resource;
                let a = (0 | e.pixelWidth) * (0 | e.pixelHeight);
                let n = e_resource.byteLength / a;
                r.device.queue.writeTexture({
                    texture: t,
                    origin: {
                        x: 0,
                        y: 0,
                        z: i
                    }
                }, e_resource, {
                    offset: 0,
                    rowsPerImage: e.pixelHeight,
                    bytesPerRow: e.pixelWidth * n
                }, {
                    width: e.pixelWidth,
                    height: e.pixelHeight,
                    depthOrArrayLayers: 1
                });
            }
        };
        e.s([
            "gpuUploadBufferImageResource",
            0,
            E
        ], 221845);
        let w = {
            "bc1-rgba-unorm": {
                blockBytes: 8,
                blockWidth: 4,
                blockHeight: 4
            },
            "bc2-rgba-unorm": {
                blockBytes: 16,
                blockWidth: 4,
                blockHeight: 4
            },
            "bc3-rgba-unorm": {
                blockBytes: 16,
                blockWidth: 4,
                blockHeight: 4
            },
            "bc7-rgba-unorm": {
                blockBytes: 16,
                blockWidth: 4,
                blockHeight: 4
            },
            "etc1-rgb-unorm": {
                blockBytes: 8,
                blockWidth: 4,
                blockHeight: 4
            },
            "etc2-rgba8unorm": {
                blockBytes: 16,
                blockWidth: 4,
                blockHeight: 4
            },
            "astc-4x4-unorm": {
                blockBytes: 16,
                blockWidth: 4,
                blockHeight: 4
            }
        };
        let R = {
            blockBytes: 4,
            blockWidth: 1,
            blockHeight: 1
        };
        let compressed = {
            type: "compressed",
            upload (e, t, r, i = 0) {
                let e_pixelWidth = e.pixelWidth;
                let e_pixelHeight = e.pixelHeight;
                let n = w[e.format] || R;
                for(let o = 0; o < e.resource.length; o++){
                    let u = e.resource[o];
                    let bytesPerRow = Math.ceil(e_pixelWidth / n.blockWidth) * n.blockBytes;
                    r.device.queue.writeTexture({
                        texture: t,
                        mipLevel: o,
                        origin: {
                            x: 0,
                            y: 0,
                            z: i
                        }
                    }, u, {
                        offset: 0,
                        bytesPerRow
                    }, {
                        width: Math.ceil(e_pixelWidth / n.blockWidth) * n.blockWidth,
                        height: Math.ceil(e_pixelHeight / n.blockHeight) * n.blockHeight,
                        depthOrArrayLayers: 1
                    });
                    e_pixelWidth = Math.max(e_pixelWidth >> 1, 1);
                    e_pixelHeight = Math.max(e_pixelHeight >> 1, 1);
                }
            }
        };
        e.s([
            "blockDataMap",
            0,
            w,
            "gpuUploadCompressedTextureResource",
            0,
            compressed
        ], 649308);
        let L = [
            "right",
            "left",
            "top",
            "bottom",
            "front",
            "back"
        ];
        function D(e) {
            return {
                type: "cube",
                upload (t, r, i) {
                    let t_faces = t.faces;
                    for(let t = 0; t < L.length; t++){
                        let a = t_faces[L[t]];
                        (e[a.uploadMethodId] || e.image).upload(a, r, i, t);
                    }
                }
            };
        }
        e.s([
            "createGpuUploadCubeTextureResource",
            0,
            D
        ], 908565);
        let image = {
            type: "image",
            upload (e, t, r, i = 0) {
                let e_resource = e.resource;
                if (!e_resource) {
                    return;
                }
                if (globalThis.HTMLImageElement && e_resource instanceof HTMLImageElement) {
                    let t = v.DOMAdapter.get().createCanvas(e_resource.width, e_resource.height);
                    t.getContext("2d").drawImage(e_resource, 0, 0, e_resource.width, e_resource.height);
                    e.resource = t;
                    u.warn("ImageSource: Image element passed, converting to canvas and replacing resource.");
                }
                let a = Math.min(t.width, e.resourceWidth || e.pixelWidth);
                let n = Math.min(t.height, e.resourceHeight || e.pixelHeight);
                let premultipliedAlpha = e.alphaMode === "premultiply-alpha-on-upload";
                r.device.queue.copyExternalImageToTexture({
                    source: e_resource
                }, {
                    texture: t,
                    origin: {
                        x: 0,
                        y: 0,
                        z: i
                    },
                    premultipliedAlpha
                }, {
                    width: a,
                    height: n
                });
            }
        };
        e.s([
            "gpuUploadImageResource",
            0,
            image
        ], 67473);
        let video = {
            type: "video",
            upload (e, t, r, i) {
                image.upload(e, t, r, i);
            }
        };
        e.s([
            "gpuUploadVideoResource",
            0,
            video
        ], 333962);
        class I {
            constructor(e){
                this.device = e;
                this.sampler = e.createSampler({
                    minFilter: "linear"
                });
                this.pipelines = {};
            }
            _getMipmapPipeline(format) {
                let t = this.pipelines[format];
                if (!t) {
                    if (!this.mipmapShaderModule) {
                        this.mipmapShaderModule = this.device.createShaderModule({
                            code: `
                        var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
                        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));

                        struct VertexOutput {
                        @builtin(position) position : vec4<f32>,
                        @location(0) texCoord : vec2<f32>,
                        };

                        @vertex
                        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                        var output : VertexOutput;
                        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
                        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
                        return output;
                        }

                        @group(0) @binding(0) var imgSampler : sampler;
                        @group(0) @binding(1) var img : texture_2d<f32>;

                        @fragment
                        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
                        return textureSample(img, imgSampler, texCoord);
                        }
                    `
                        });
                    }
                    t = this.device.createRenderPipeline({
                        layout: "auto",
                        vertex: {
                            module: this.mipmapShaderModule,
                            entryPoint: "vertexMain"
                        },
                        fragment: {
                            module: this.mipmapShaderModule,
                            entryPoint: "fragmentMain",
                            targets: [
                                {
                                    format
                                }
                            ]
                        }
                    });
                    this.pipelines[format] = t;
                }
                return t;
            }
            generateMipmap(e) {
                let t = this._getMipmapPipeline(e.format);
                if (e.dimension === "3d" || e.dimension === "1d") {
                    throw Error("Generating mipmaps for non-2d textures is currently unsupported!");
                }
                let r = e;
                let depthOrArrayLayers = e.depthOrArrayLayers || 1;
                let s = e.usage & GPUTextureUsage.RENDER_ATTACHMENT;
                if (!s) {
                    let t = {
                        size: {
                            width: Math.ceil(e.width / 2),
                            height: Math.ceil(e.height / 2),
                            depthOrArrayLayers
                        },
                        format: e.format,
                        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT,
                        mipLevelCount: e.mipLevelCount - 1
                    };
                    r = this.device.createTexture(t);
                }
                let a = this.device.createCommandEncoder({});
                let n = t.getBindGroupLayout(0);
                for(let o = 0; o < depthOrArrayLayers; ++o){
                    let i = e.createView({
                        baseMipLevel: 0,
                        mipLevelCount: 1,
                        dimension: "2d",
                        baseArrayLayer: o,
                        arrayLayerCount: 1
                    });
                    let u = +!!s;
                    for(let s = 1; s < e.mipLevelCount; ++s){
                        let e = r.createView({
                            baseMipLevel: u++,
                            mipLevelCount: 1,
                            dimension: "2d",
                            baseArrayLayer: o,
                            arrayLayerCount: 1
                        });
                        let s = a.beginRenderPass({
                            colorAttachments: [
                                {
                                    view: e,
                                    storeOp: "store",
                                    loadOp: "clear",
                                    clearValue: {
                                        r: 0,
                                        g: 0,
                                        b: 0,
                                        a: 0
                                    }
                                }
                            ]
                        });
                        let d = this.device.createBindGroup({
                            layout: n,
                            entries: [
                                {
                                    binding: 0,
                                    resource: this.sampler
                                },
                                {
                                    binding: 1,
                                    resource: i
                                }
                            ]
                        });
                        s.setPipeline(t);
                        s.setBindGroup(0, d);
                        s.draw(3, 1, 0, 0);
                        s.end();
                        i = e;
                    }
                }
                if (!s) {
                    let t = {
                        width: Math.ceil(e.width / 2),
                        height: Math.ceil(e.height / 2),
                        depthOrArrayLayers
                    };
                    for(let i = 1; i < e.mipLevelCount; ++i){
                        a.copyTextureToTexture({
                            texture: r,
                            mipLevel: i - 1
                        }, {
                            texture: e,
                            mipLevel: i
                        }, t);
                        t.width = Math.ceil(t.width / 2);
                        t.height = Math.ceil(t.height / 2);
                    }
                }
                this.device.queue.submit([
                    a.finish()
                ]);
                if (!s) {
                    r.destroy();
                }
                return e;
            }
        }
        e.s([
            "GpuMipmapGenerator",
            0,
            I
        ], 955419);
        class k {
            constructor(e){
                this.textureView = null;
                this.gpuTexture = e;
            }
            destroy() {
                this.gpuTexture.destroy();
                this.textureView = null;
                this.gpuTexture = null;
            }
        }
        let F = class e {
            constructor(t){
                this._gpuSamplers = Object.create(null);
                this._bindGroupHash = Object.create(null);
                this._renderer = t;
                t.gc.addCollection(this, "_bindGroupHash", "hash");
                this._managedTextures = new C.GCManagedHash({
                    renderer: t,
                    type: "resource",
                    onUnload: this.onSourceUnload.bind(this),
                    name: "gpuTextureSource"
                });
                const r = {
                    image,
                    buffer: E,
                    video,
                    compressed,
                    ...e.uploadExtensions
                };
                this._uploads = {
                    ...r,
                    cube: D(r)
                };
            }
            get managedTextures() {
                return Object.values(this._managedTextures.items);
            }
            contextChange(e) {
                this._gpu = e;
            }
            initSource(e) {
                return e._gpuData[this._renderer.uid]?.gpuTexture || this._initSource(e);
            }
            _initSource(e) {
                let t;
                if (e.autoGenerateMipmaps) {
                    let t = Math.max(e.pixelWidth, e.pixelHeight);
                    e.mipLevelCount = Math.floor(Math.log2(t)) + 1;
                }
                if (e.sampleCount > 1) {
                    t = GPUTextureUsage.RENDER_ATTACHMENT;
                    if (e.transient && this._renderer.device.extensions.transientAttachment) {
                        t |= GPUTextureUsage.TRANSIENT_ATTACHMENT;
                    }
                } else {
                    t = GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST;
                    if (e.uploadMethodId !== "compressed") {
                        t |= GPUTextureUsage.RENDER_ATTACHMENT;
                        t |= GPUTextureUsage.COPY_SRC;
                    }
                }
                let r = w[e.format] || {
                    blockBytes: 4,
                    blockWidth: 1,
                    blockHeight: 1
                };
                let i = Math.ceil(e.pixelWidth / r.blockWidth) * r.blockWidth;
                let s = Math.ceil(e.pixelHeight / r.blockHeight) * r.blockHeight;
                let a = {
                    label: e.label,
                    size: {
                        width: i,
                        height: s,
                        depthOrArrayLayers: e.arrayLayerCount
                    },
                    format: e.format,
                    sampleCount: e.sampleCount,
                    mipLevelCount: e.mipLevelCount,
                    dimension: e.dimension,
                    usage: t
                };
                let n = this._gpu.device.createTexture(a);
                e._gpuData[this._renderer.uid] = new k(n);
                if (this._managedTextures.add(e)) {
                    e.on("update", this.onSourceUpdate, this);
                    e.on("resize", this.onSourceResize, this);
                    e.on("updateMipmaps", this.onUpdateMipmaps, this);
                }
                this.onSourceUpdate(e);
                return n;
            }
            onSourceUpdate(e) {
                let t = this.getGpuSource(e);
                t && (this._uploads[e.uploadMethodId] && this._uploads[e.uploadMethodId].upload(e, t, this._gpu), e.autoGenerateMipmaps && e.mipLevelCount > 1 && this.onUpdateMipmaps(e));
            }
            onUpdateMipmaps(e) {
                if (!this._mipmapGenerator) {
                    this._mipmapGenerator = new I(this._gpu.device);
                }
                let t = this.getGpuSource(e);
                this._mipmapGenerator.generateMipmap(t);
            }
            onSourceUnload(e) {
                e.off("update", this.onSourceUpdate, this);
                e.off("resize", this.onSourceResize, this);
                e.off("updateMipmaps", this.onUpdateMipmaps, this);
            }
            onSourceResize(e) {
                e._gcLastUsed = this._renderer.gc.now;
                let t = e._gpuData[this._renderer.uid];
                let r = t?.gpuTexture;
                if (r) {
                    if (r.width !== e.pixelWidth || r.height !== e.pixelHeight) {
                        t.destroy();
                        this._bindGroupHash[e.uid] = null;
                        e._gpuData[this._renderer.uid] = null;
                        this.initSource(e);
                    }
                } else {
                    this.initSource(e);
                }
            }
            _initSampler(e) {
                this._gpuSamplers[e._resourceId] = this._gpu.device.createSampler(e);
                return this._gpuSamplers[e._resourceId];
            }
            getGpuSampler(e) {
                return this._gpuSamplers[e._resourceId] || this._initSampler(e);
            }
            getGpuSource(e) {
                e._gcLastUsed = this._renderer.gc.now;
                return e._gpuData[this._renderer.uid]?.gpuTexture || this.initSource(e);
            }
            getTextureBindGroup(e) {
                return this._bindGroupHash[e.uid] || this._createTextureBindGroup(e);
            }
            _createTextureBindGroup(e) {
                let e_source = e.source;
                this._bindGroupHash[e.uid] = new n.BindGroup({
                    0: e_source,
                    1: e_source.style,
                    2: new U.UniformGroup({
                        uTextureMatrix: {
                            type: "mat3x3<f32>",
                            value: e.textureMatrix.mapCoord
                        }
                    })
                });
                return this._bindGroupHash[e.uid];
            }
            getTextureView(e) {
                let e_source = e.source;
                e_source._gcLastUsed = this._renderer.gc.now;
                let r = e_source._gpuData[this._renderer.uid];
                if (!r) {
                    this.initSource(e_source);
                    r = e_source._gpuData[this._renderer.uid];
                }
                if (!r.textureView) {
                    r.textureView = r.gpuTexture.createView({
                        dimension: e_source.viewDimension
                    });
                }
                return r.textureView;
            }
            generateCanvas(e) {
                let _renderer = this._renderer;
                let r = _renderer.gpu.device.createCommandEncoder();
                let i = v.DOMAdapter.get().createCanvas();
                i.width = e.source.pixelWidth;
                i.height = e.source.pixelHeight;
                let s = i.getContext("webgpu");
                s.configure({
                    device: _renderer.gpu.device,
                    usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
                    format: v.DOMAdapter.get().getNavigator().gpu.getPreferredCanvasFormat(),
                    alphaMode: "premultiplied"
                });
                r.copyTextureToTexture({
                    texture: _renderer.texture.getGpuSource(e.source),
                    origin: {
                        x: 0,
                        y: 0
                    }
                }, {
                    texture: s.getCurrentTexture()
                }, {
                    width: i.width,
                    height: i.height
                });
                _renderer.gpu.device.queue.submit([
                    r.finish()
                ]);
                return i;
            }
            getPixels(e) {
                let t = this.generateCanvas(e);
                let r = M.CanvasPool.getOptimalCanvasAndContext(t.width, t.height);
                let r_context = r.context;
                r_context.drawImage(t, 0, 0);
                let { width, height } = t;
                let pixels = new Uint8ClampedArray(r_context.getImageData(0, 0, width, height).data.buffer);
                M.CanvasPool.returnCanvasAndContext(r);
                return {
                    pixels,
                    width,
                    height
                };
            }
            destroy() {
                for (let e of (this._managedTextures.destroy(), Object.keys(this._bindGroupHash))){
                    let t = Number(e);
                    let r = this._bindGroupHash[t];
                    r?.destroy();
                }
                this._renderer = null;
                this._gpu = null;
                this._mipmapGenerator = null;
                this._gpuSamplers = null;
                this._bindGroupHash = null;
            }
        };
        F.extension = {
            type: [
                t.ExtensionType.WebGPUSystem
            ],
            name: "texture"
        };
        F.uploadExtensions = Object.create(null);
        t.extensions.handleByMap(t.ExtensionType.TextureUploaderWebGPU, F.uploadExtensions);
        e.s([
            "GPUTextureGpuData",
            0,
            k,
            "GpuTextureSystem",
            0,
            F
        ], 349139);
    },
    594908,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(674130);
        var i = e.i(129249);
        var s = e.i(754287);
        var a = e.i(164868);
        var n = e.i(497544);
        var o = e.i(162450);
        var u = e.i(633840);
        var d = e.i(454710);
        var l = e.i(245665);
        var h = e.i(29400);
        var c = e.i(23295);
        var p = e.i(602250);
        var g = e.i(564115);
        var f = e.i(470227);
        var m = e.i(630739);
        var _ = e.i(952222);
        var x = e.i(216248);
        var b = e.i(500030);
        var y = e.i(71203);
        var G = e.i(349139);
        let T = [
            ...n.SharedSystems,
            f.GpuUboSystem,
            c.GpuEncoderSystem,
            h.GpuDeviceSystem,
            p.GpuLimitsSystem,
            d.GpuBufferSystem,
            G.GpuTextureSystem,
            x.GpuRenderTargetSystem,
            b.GpuShaderSystem,
            y.GpuStateSystem,
            _.PipelineSystem,
            l.GpuColorMaskSystem,
            g.GpuStencilSystem,
            u.BindGroupSystem
        ];
        let S = [
            ...n.SharedRenderPipes,
            m.GpuUniformBatchPipe
        ];
        let P = [
            s.GpuBatchAdaptor,
            i.GpuMeshAdapter,
            r.GpuGraphicsAdaptor
        ];
        let systems = [];
        let renderPipes = [];
        let renderPipeAdaptors = [];
        t.extensions.handleByNamedList(t.ExtensionType.WebGPUSystem, systems);
        t.extensions.handleByNamedList(t.ExtensionType.WebGPUPipes, renderPipes);
        t.extensions.handleByNamedList(t.ExtensionType.WebGPUPipesAdaptor, renderPipeAdaptors);
        t.extensions.add(...T, ...S, ...P);
        class U extends a.AbstractRenderer {
            constructor(){
                super({
                    name: "webgpu",
                    type: o.RendererType.WEBGPU,
                    systems,
                    renderPipes,
                    renderPipeAdaptors
                });
            }
        }
        e.s([
            "WebGPURenderer",
            0,
            U
        ]);
    },
    910120,
    (e)=>{
        "use strict";
        e.s([
            "UboBatch",
            0,
            class {
                constructor({ minUniformOffsetAlignment }){
                    this._minUniformOffsetAlignment = 256;
                    this.byteIndex = 0;
                    this._minUniformOffsetAlignment = minUniformOffsetAlignment;
                    this.data = new Float32Array(65535);
                }
                clear() {
                    this.byteIndex = 0;
                }
                addEmptyGroup(e) {
                    if (e > this._minUniformOffsetAlignment / 4) {
                        throw Error(`UniformBufferBatch: array is too large: ${4 * e}`);
                    }
                    let byteIndex = this.byteIndex;
                    let r = byteIndex + 4 * e;
                    if ((r = Math.ceil(r / this._minUniformOffsetAlignment) * this._minUniformOffsetAlignment) > 4 * this.data.length) {
                        throw Error("UniformBufferBatch: ubo batch got too big");
                    }
                    this.byteIndex = r;
                    return byteIndex;
                }
                addGroup(e) {
                    let t = this.addEmptyGroup(e.length);
                    for(let r = 0; r < e.length; r++){
                        this.data[t / 4 + r] = e[r];
                    }
                    return t;
                }
                destroy() {
                    this.data = null;
                }
            }
        ]);
    },
    674130,
    129249,
    (e)=>{
        "use strict";
        var t = e.i(78278);
        var r = e.i(389474);
        var i = e.i(666258);
        var s = e.i(959684);
        var a = e.i(815343);
        var n = e.i(229972);
        var o = e.i(418668);
        var u = e.i(188578);
        var d = e.i(761149);
        var l = e.i(153594);
        class h {
            constructor(){
                this._maxTextures = 0;
            }
            contextChange(e) {
                let localUniforms = new l.UniformGroup({
                    uTransformMatrix: {
                        value: new r.Matrix,
                        type: "mat3x3<f32>"
                    },
                    uColor: {
                        value: new Float32Array([
                            1,
                            1,
                            1,
                            1
                        ]),
                        type: "vec4<f32>"
                    },
                    uRound: {
                        value: 0,
                        type: "f32"
                    }
                });
                this._maxTextures = e.limits.maxBatchableTextures;
                let i = s.compileHighShaderGpuProgram({
                    name: "graphics",
                    bits: [
                        a.colorBit,
                        n.generateTextureBatchBit(this._maxTextures),
                        o.localUniformBitGroup2,
                        u.roundPixelsBit
                    ]
                });
                this.shader = new d.Shader({
                    gpuProgram: i,
                    resources: {
                        localUniforms
                    }
                });
            }
            execute(e, t) {
                let t_context = t.context;
                let s = t_context.customShader || this.shader;
                let e_renderer = e.renderer;
                let { batcher, instructions } = e_renderer.graphicsContext.getContextRenderData(t_context);
                let a_encoder = e_renderer.encoder;
                a_encoder.setGeometry(batcher.geometry, s.gpuProgram);
                let bindGroup = e_renderer.globalUniforms.bindGroup;
                a_encoder.setBindGroup(0, bindGroup, s.gpuProgram);
                let l = e_renderer.renderPipes.uniformBatch.getUniformBindGroup(s.resources.localUniforms, true);
                a_encoder.setBindGroup(2, l, s.gpuProgram);
                let instructions_instructions = instructions.instructions;
                let c = null;
                for(let t = 0; t < instructions.instructionSize; t++){
                    let r = instructions_instructions[t];
                    if (r.topology !== c) {
                        c = r.topology;
                        a_encoder.setPipelineFromGeometryProgramAndState(batcher.geometry, s.gpuProgram, e.state, r.topology);
                    }
                    s.groups[1] = r.bindGroup;
                    if (!r.gpuBindGroup) {
                        let e = r.textures;
                        r.bindGroup = i.getTextureBatchBindGroup(e.textures, e.count, this._maxTextures);
                        r.gpuBindGroup = e_renderer.bindGroup.getBindGroup(r.bindGroup, s.gpuProgram, 1);
                    }
                    a_encoder.setBindGroup(1, r.bindGroup, s.gpuProgram);
                    a_encoder.renderPassEncoder.drawIndexed(r.size, 1, r.start);
                }
            }
            destroy() {
                this.shader.destroy(true);
                this.shader = null;
            }
        }
        h.extension = {
            type: [
                t.ExtensionType.WebGPUPipesAdaptor
            ],
            name: "graphics"
        };
        e.s([
            "GpuGraphicsAdaptor",
            0,
            h
        ], 674130);
        var c = e.i(949998);
        var p = e.i(337654);
        var g = e.i(562140);
        class f {
            init() {
                let e = s.compileHighShaderGpuProgram({
                    name: "mesh",
                    bits: [
                        o.localUniformBit,
                        c.textureBit,
                        u.roundPixelsBit
                    ]
                });
                this._shader = new d.Shader({
                    gpuProgram: e,
                    resources: {
                        uTexture: p.Texture.EMPTY._source,
                        uSampler: p.Texture.EMPTY._source.style,
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
                    if (!t__shader.gpuProgram) {
                        return void g.warn("Mesh shader has no gpuProgram", t.shader);
                    }
                } else {
                    (t__shader = this._shader).groups[2] = e_renderer.texture.getTextureBindGroup(t.texture);
                }
                let i_gpuProgram = t__shader.gpuProgram;
                if (i_gpuProgram.autoAssignGlobalUniforms) {
                    t__shader.groups[0] = e_renderer.globalUniforms.bindGroup;
                }
                if (i_gpuProgram.autoAssignLocalUniforms) {
                    let t = e.localUniforms;
                    t__shader.groups[1] = e_renderer.renderPipes.uniformBatch.getUniformBindGroup(t, true);
                }
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
        f.extension = {
            type: [
                t.ExtensionType.WebGPUPipesAdaptor
            ],
            name: "mesh"
        };
        e.s([
            "GpuMeshAdapter",
            0,
            f
        ], 129249);
    }
]);
