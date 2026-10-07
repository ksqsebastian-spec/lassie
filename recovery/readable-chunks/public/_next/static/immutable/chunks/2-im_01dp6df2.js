;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "6cc05fb3-ab25-40b0-2243-e27c647aab75";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    81846,
    955424,
    882825,
    930005,
    (t)=>{
        "use strict";
        t.s([
            "buildSimpleUvs",
            0,
            (t, e, i, r)=>{
                let s = 0;
                for(e *= i; s < r;){
                    t[e] = 0;
                    t[e + 1] = 0;
                    e += i;
                    s++;
                }
            },
            "buildUvs",
            0,
            (t, e, i, r, s, n, a, l = null)=>{
                let h = 0;
                i *= e;
                s *= n;
                let o = l.a;
                let u = l.b;
                let c = l.c;
                let d = l.d;
                let f = l.tx;
                let p = l.ty;
                while(h < a){
                    let a = t[i];
                    let l = t[i + 1];
                    r[s] = o * a + c * l + f;
                    r[s + 1] = u * a + d * l + p;
                    s += n;
                    i += e;
                    h++;
                }
            }
        ], 81846);
        t.s([
            "transformVertices",
            0,
            (t, e, i, r, s)=>{
                let n = e.a;
                let a = e.b;
                let l = e.c;
                let h = e.d;
                let o = e.tx;
                let u = e.ty;
                if (!i) {
                    i = 0;
                }
                if (!r) {
                    r = 2;
                }
                if (!s) {
                    s = t.length / r - i;
                }
                let c = i * r;
                for(let e = 0; e < s; e++){
                    let e = t[c];
                    let i = t[c + 1];
                    t[c] = n * e + l * i + o;
                    t[c + 1] = a * e + h * i + u;
                    c += r;
                }
            }
        ], 955424);
        var e = t.i(389474);
        var i = t.i(414205);
        let r = new e.Matrix;
        t.s([
            "BatchableGraphics",
            0,
            class {
                constructor(){
                    this.packAsQuad = false;
                    this.batcherName = "default";
                    this.topology = "triangle-list";
                    this.applyTransform = true;
                    this.roundPixels = 0;
                    this._batcher = null;
                    this._batch = null;
                }
                get uvs() {
                    return this.geometryData.uvs;
                }
                get positions() {
                    return this.geometryData.vertices;
                }
                get indices() {
                    return this.geometryData.indices;
                }
                get blendMode() {
                    if (this.renderable && this.applyTransform) {
                        return this.renderable.groupBlendMode;
                    }
                    return "normal";
                }
                get color() {
                    let baseColor = this.baseColor;
                    let e = baseColor >> 16 | 65280 & baseColor | (255 & baseColor) << 16;
                    let renderable = this.renderable;
                    if (renderable) {
                        return i.multiplyHexColors(e, renderable.groupColor) + (this.alpha * renderable.groupAlpha * 255 << 24);
                    }
                    return e + (255 * this.alpha << 24);
                }
                get transform() {
                    return this.renderable?.groupTransform || r;
                }
                copyTo(t) {
                    t.indexOffset = this.indexOffset;
                    t.indexSize = this.indexSize;
                    t.attributeOffset = this.attributeOffset;
                    t.attributeSize = this.attributeSize;
                    t.baseColor = this.baseColor;
                    t.alpha = this.alpha;
                    t.texture = this.texture;
                    t.geometryData = this.geometryData;
                    t.topology = this.topology;
                }
                reset() {
                    this.applyTransform = true;
                    this.renderable = null;
                    this.topology = "triangle-list";
                }
                destroy() {
                    this.renderable = null;
                    this.texture = null;
                    this.geometryData = null;
                    this._batcher = null;
                    this._batch = null;
                }
            }
        ], 882825);
        let s = {
            extension: {
                type: t.i(78278).ExtensionType.ShapeBuilder,
                name: "circle"
            },
            build (t, e) {
                let i;
                let r;
                let s;
                let n;
                let a;
                let l;
                if (t.type === "circle") {
                    if ((a = l = t.radius) <= 0) {
                        return false;
                    }
                    i = t.x;
                    r = t.y;
                    n = 0;
                    s = 0;
                } else if (t.type === "ellipse") {
                    a = t.halfWidth;
                    l = t.halfHeight;
                    if (a <= 0 || l <= 0) {
                        return false;
                    }
                    i = t.x;
                    r = t.y;
                    n = 0;
                    s = 0;
                } else {
                    let e = t.width / 2;
                    let h = t.height / 2;
                    i = t.x + e;
                    r = t.y + h;
                    a = l = Math.max(0, Math.min(t.radius, Math.min(e, h)));
                    s = e - a;
                    n = h - l;
                }
                if (s < 0 || n < 0) {
                    return false;
                }
                let h = Math.ceil(2.3 * Math.sqrt(a + l));
                let o = 8 * h + 4 * !!s + 4 * !!n;
                if (o === 0) {
                    return false;
                }
                if (h === 0) {
                    e[0] = e[6] = i + s;
                    e[1] = e[3] = r + n;
                    e[2] = e[4] = i - s;
                    e[5] = e[7] = r - n;
                    return true;
                }
                let u = 0;
                let c = 4 * h + 2 * !!s + 2;
                let d = c;
                let f = o;
                let p = s + a;
                let x = n;
                let y = i + p;
                let g = i - p;
                let m = r + x;
                e[u++] = y;
                e[u++] = m;
                e[--c] = m;
                e[--c] = g;
                if (n) {
                    let t = r - x;
                    e[d++] = g;
                    e[d++] = t;
                    e[--f] = t;
                    e[--f] = y;
                }
                for(let t = 1; t < h; t++){
                    let o = Math.PI / 2 * (t / h);
                    let p = s + Math.cos(o) * a;
                    let x = n + Math.sin(o) * l;
                    let y = i + p;
                    let g = i - p;
                    let m = r + x;
                    let b = r - x;
                    e[u++] = y;
                    e[u++] = m;
                    e[--c] = m;
                    e[--c] = g;
                    e[d++] = g;
                    e[d++] = b;
                    e[--f] = b;
                    e[--f] = y;
                }
                p = s;
                x = n + l;
                y = i + p;
                g = i - p;
                m = r + x;
                let b = r - x;
                e[u++] = y;
                e[u++] = m;
                e[--f] = b;
                e[--f] = y;
                if (s) {
                    e[u++] = g;
                    e[u++] = m;
                    e[--f] = b;
                    e[--f] = g;
                }
                return true;
            },
            triangulate (t, e, i, r, s, n) {
                if (t.length === 0) {
                    return;
                }
                let a = 0;
                let l = 0;
                for(let e = 0; e < t.length; e += 2){
                    a += t[e];
                    l += t[e + 1];
                }
                a /= t.length / 2;
                l /= t.length / 2;
                let h = r;
                e[h * i] = a;
                e[h * i + 1] = l;
                let o = h++;
                for(let r = 0; r < t.length; r += 2){
                    e[h * i] = t[r];
                    e[h * i + 1] = t[r + 1];
                    if (r > 0) {
                        s[n++] = h;
                        s[n++] = o;
                        s[n++] = h - 1;
                    }
                    h++;
                }
                s[n++] = o + 1;
                s[n++] = o;
                s[n++] = h - 1;
            }
        };
        let n = {
            ...s,
            extension: {
                ...s.extension,
                name: "ellipse"
            }
        };
        let a = {
            ...s,
            extension: {
                ...s.extension,
                name: "roundedRectangle"
            }
        };
        t.s([
            "buildCircle",
            0,
            s,
            "buildEllipse",
            0,
            n,
            "buildRoundedRectangle",
            0,
            a
        ], 930005);
    },
    558001,
    73517,
    762562,
    (t)=>{
        "use strict";
        var e = t.i(263524);
        var i = t.i(222735);
        var r = t.i(389474);
        var s = t.i(37554);
        var n = t.i(337654);
        var a = t.i(733705);
        var l = t.i(727905);
        var h = t.i(453549);
        var o = t.i(115321);
        var u = t.i(569176);
        var c = t.i(419905);
        var d = t.i(336966);
        function f(t) {
            return t instanceof d.FillPattern;
        }
        function p(t) {
            return t instanceof c.FillGradient;
        }
        function x(t, e, i) {
            t.fill = e;
            t.color = 16777215;
            t.texture = e.texture;
            t.matrix = e.transform;
            t.textureSpace = e.textureSpace;
            return {
                ...i,
                ...t
            };
        }
        function y(t, e, i) {
            e.buildGradient();
            t.fill = e;
            t.color = 16777215;
            t.texture = e.texture;
            t.matrix = e.transform;
            t.textureSpace = e.textureSpace;
            return {
                ...i,
                ...t
            };
        }
        function g(t, e) {
            let r;
            let s;
            if (t == null) {
                return null;
            }
            let a = {};
            if (i.Color.isColorLike(t)) {
                let r;
                a.color = (r = i.Color.shared.setValue(t ?? 0)).toNumber();
                a.alpha = r.alpha === 1 ? e.alpha : r.alpha;
                a.texture = n.Texture.WHITE;
                return {
                    ...e,
                    ...a
                };
            }
            if (t instanceof n.Texture) {
                a.texture = t;
                return {
                    ...e,
                    ...a
                };
            }
            if (f(t)) {
                return x(a, t, e);
            }
            if (p(t)) {
                return y(a, t, e);
            } else if (t.fill && f(t.fill)) {
                return x(t, t.fill, e);
            } else if (t.fill && p(t.fill)) {
                return y(t, t.fill, e);
            }
            r = {
                ...e,
                ...t
            };
            s = i.Color.shared.setValue(r.color);
            r.alpha *= s.alpha;
            r.color = s.toNumber();
            return r;
        }
        function m(t, e) {
            let { width, alignment, miterLimit, cap, join, pixelLine, ...rest } = e;
            let o = g(t, rest);
            if (o) {
                return {
                    width,
                    alignment,
                    miterLimit,
                    cap,
                    join,
                    pixelLine,
                    ...o
                };
            }
            return null;
        }
        function b(t, e) {
            let i = 1;
            let shapePrimitives = t.shapePath.shapePrimitives;
            for(let t = 0; t < shapePrimitives.length; t++){
                let s = shapePrimitives[t].shape;
                if (s.type !== "polygon") {
                    continue;
                }
                let n = s.points;
                let a = n.length;
                if (a < 6) {
                    continue;
                }
                let l = s.closePath;
                for(let t = 0; t < a; t += 2){
                    if (!l && (t === 0 || t === a - 2)) {
                        continue;
                    }
                    let r = (t - 2 + a) % a;
                    let s = (t + 2) % a;
                    let h = n[r];
                    let o = n[r + 1];
                    let u = n[t];
                    let c = n[t + 1];
                    let d = n[s];
                    let f = n[s + 1];
                    let p = h - u;
                    let x = o - c;
                    let y = d - u;
                    let g = f - c;
                    let m = p * p + x * x;
                    let b = y * y + g * g;
                    if (m < 1e-12 || b < 1e-12) {
                        continue;
                    }
                    let _ = (p * y + x * g) / Math.sqrt(m * b);
                    if (_ < -1) {
                        _ = -1;
                    } else if (_ > 1) {
                        _ = 1;
                    }
                    let P = Math.sqrt((1 - _) * 0.5);
                    if (P < 0.000001) {
                        continue;
                    }
                    let v = Math.min(1 / P, e);
                    if (v > i) {
                        i = v;
                    }
                }
            }
            return i;
        }
        t.s([
            "toFillStyle",
            0,
            g,
            "toStrokeStyle",
            0,
            m
        ], 73517);
        t.s([
            "getMaxMiterRatio",
            0,
            b
        ], 762562);
        let _ = new s.Point;
        let P = new r.Matrix;
        let v = class t extends e.default {
            constructor(){
                super(...arguments);
                this._gpuData = Object.create(null);
                this.autoGarbageCollect = true;
                this._gcLastUsed = -1;
                this.uid = a.uid("graphicsContext");
                this.dirty = true;
                this.batchMode = "auto";
                this.instructions = [];
                this.destroyed = false;
                this._activePath = new o.GraphicsPath;
                this._transform = new r.Matrix;
                this._fillStyle = {
                    ...t.defaultFillStyle
                };
                this._strokeStyle = {
                    ...t.defaultStrokeStyle
                };
                this._stateStack = [];
                this._tick = 0;
                this._bounds = new h.Bounds;
                this._boundsDirty = true;
            }
            clone() {
                let e = new t;
                e.batchMode = this.batchMode;
                e.instructions = this.instructions.slice();
                e._activePath = this._activePath.clone();
                e._transform = this._transform.clone();
                e._fillStyle = {
                    ...this._fillStyle
                };
                e._strokeStyle = {
                    ...this._strokeStyle
                };
                e._stateStack = this._stateStack.slice();
                e._bounds = this._bounds.clone();
                e._boundsDirty = true;
                return e;
            }
            get fillStyle() {
                return this._fillStyle;
            }
            set fillStyle(e) {
                this._fillStyle = g(e, t.defaultFillStyle);
            }
            get strokeStyle() {
                return this._strokeStyle;
            }
            set strokeStyle(e) {
                this._strokeStyle = m(e, t.defaultStrokeStyle);
            }
            setFillStyle(e) {
                this._fillStyle = g(e, t.defaultFillStyle);
                return this;
            }
            setStrokeStyle(e) {
                this._strokeStyle = g(e, t.defaultStrokeStyle);
                return this;
            }
            texture(image, e, r, s, n, a) {
                this.instructions.push({
                    action: "texture",
                    data: {
                        image,
                        dx: r || 0,
                        dy: s || 0,
                        dw: n || image.frame.width,
                        dh: a || image.frame.height,
                        transform: this._transform.clone(),
                        alpha: this._fillStyle.alpha,
                        style: e || e === 0 ? i.Color.shared.setValue(e).toNumber() : 16777215
                    }
                });
                this.onUpdate();
                return this;
            }
            beginPath() {
                this._activePath = new o.GraphicsPath;
                return this;
            }
            fill(color, alpha) {
                let r;
                let s = this.instructions[this.instructions.length - 1];
                if (r = this._tick === 0 && s?.action === "stroke" ? s.data.path : this._activePath.clone()) {
                    if (color != null) {
                        if (alpha !== undefined && typeof color === "number") {
                            l.deprecation(l.v8_0_0, "GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead");
                            color = {
                                color,
                                alpha
                            };
                        }
                        this._fillStyle = g(color, t.defaultFillStyle);
                    }
                    this.instructions.push({
                        action: "fill",
                        data: {
                            style: this.fillStyle,
                            path: r
                        }
                    });
                    this.onUpdate();
                    this._initNextPathLocation();
                    this._tick = 0;
                }
                return this;
            }
            _initNextPathLocation() {
                let { x, y } = this._activePath.getLastPoint(s.Point.shared);
                this._activePath.clear();
                this._activePath.moveTo(x, y);
            }
            stroke(e) {
                let i;
                let r = this.instructions[this.instructions.length - 1];
                if (i = this._tick === 0 && r?.action === "fill" ? r.data.path : this._activePath.clone()) {
                    if (e != null) {
                        this._strokeStyle = m(e, t.defaultStrokeStyle);
                    }
                    this.instructions.push({
                        action: "stroke",
                        data: {
                            style: this.strokeStyle,
                            path: i
                        }
                    });
                    this.onUpdate();
                    this._initNextPathLocation();
                    this._tick = 0;
                }
                return this;
            }
            cut() {
                for(let t = 0; t < 2; t++){
                    let e = this.instructions[this.instructions.length - 1 - t];
                    let i = this._activePath.clone();
                    if (e && (e.action === "stroke" || e.action === "fill")) {
                        if (e.data.hole) {
                            e.data.hole.addPath(i);
                        } else {
                            e.data.hole = i;
                            break;
                        }
                    }
                }
                this._initNextPathLocation();
                return this;
            }
            arc(t, e, i, r, s, n) {
                this._tick++;
                let _transform = this._transform;
                this._activePath.arc(_transform.a * t + _transform.c * e + _transform.tx, _transform.b * t + _transform.d * e + _transform.ty, i, r, s, n);
                return this;
            }
            arcTo(t, e, i, r, s) {
                this._tick++;
                let _transform = this._transform;
                this._activePath.arcTo(_transform.a * t + _transform.c * e + _transform.tx, _transform.b * t + _transform.d * e + _transform.ty, _transform.a * i + _transform.c * r + _transform.tx, _transform.b * i + _transform.d * r + _transform.ty, s);
                return this;
            }
            arcToSvg(t, e, i, r, s, n, a) {
                this._tick++;
                let _transform = this._transform;
                this._activePath.arcToSvg(t, e, i, r, s, _transform.a * n + _transform.c * a + _transform.tx, _transform.b * n + _transform.d * a + _transform.ty);
                return this;
            }
            bezierCurveTo(t, e, i, r, s, n, a) {
                this._tick++;
                let _transform = this._transform;
                this._activePath.bezierCurveTo(_transform.a * t + _transform.c * e + _transform.tx, _transform.b * t + _transform.d * e + _transform.ty, _transform.a * i + _transform.c * r + _transform.tx, _transform.b * i + _transform.d * r + _transform.ty, _transform.a * s + _transform.c * n + _transform.tx, _transform.b * s + _transform.d * n + _transform.ty, a);
                return this;
            }
            closePath() {
                this._tick++;
                this._activePath?.closePath();
                return this;
            }
            ellipse(t, e, i, r) {
                this._tick++;
                this._activePath.ellipse(t, e, i, r, this._transform.clone());
                return this;
            }
            circle(t, e, i) {
                this._tick++;
                this._activePath.circle(t, e, i, this._transform.clone());
                return this;
            }
            path(t) {
                this._tick++;
                this._activePath.addPath(t, this._transform.clone());
                return this;
            }
            lineTo(t, e) {
                this._tick++;
                let _transform = this._transform;
                this._activePath.lineTo(_transform.a * t + _transform.c * e + _transform.tx, _transform.b * t + _transform.d * e + _transform.ty);
                return this;
            }
            moveTo(t, e) {
                this._tick++;
                let _transform = this._transform;
                let instructions = this._activePath.instructions;
                let s = _transform.a * t + _transform.c * e + _transform.tx;
                let n = _transform.b * t + _transform.d * e + _transform.ty;
                if (instructions.length === 1 && instructions[0].action === "moveTo") {
                    instructions[0].data[0] = s;
                    instructions[0].data[1] = n;
                } else {
                    this._activePath.moveTo(s, n);
                }
                return this;
            }
            quadraticCurveTo(t, e, i, r, s) {
                this._tick++;
                let _transform = this._transform;
                this._activePath.quadraticCurveTo(_transform.a * t + _transform.c * e + _transform.tx, _transform.b * t + _transform.d * e + _transform.ty, _transform.a * i + _transform.c * r + _transform.tx, _transform.b * i + _transform.d * r + _transform.ty, s);
                return this;
            }
            rect(t, e, i, r) {
                this._tick++;
                this._activePath.rect(t, e, i, r, this._transform.clone());
                return this;
            }
            roundRect(t, e, i, r, s) {
                this._tick++;
                this._activePath.roundRect(t, e, i, r, s, this._transform.clone());
                return this;
            }
            poly(t, e) {
                this._tick++;
                this._activePath.poly(t, e, this._transform.clone());
                return this;
            }
            regularPoly(t, e, i, r, s = 0, n) {
                this._tick++;
                this._activePath.regularPoly(t, e, i, r, s, n);
                return this;
            }
            roundPoly(t, e, i, r, s, n) {
                this._tick++;
                this._activePath.roundPoly(t, e, i, r, s, n);
                return this;
            }
            roundShape(t, e, i, r) {
                this._tick++;
                this._activePath.roundShape(t, e, i, r);
                return this;
            }
            filletRect(t, e, i, r, s) {
                this._tick++;
                this._activePath.filletRect(t, e, i, r, s);
                return this;
            }
            chamferRect(t, e, i, r, s, n) {
                this._tick++;
                this._activePath.chamferRect(t, e, i, r, s, n);
                return this;
            }
            star(t, e, i, r, s = 0, n = 0) {
                this._tick++;
                this._activePath.star(t, e, i, r, s, n, this._transform.clone());
                return this;
            }
            svg(t) {
                this._tick++;
                u.SVGParser(t, this);
                return this;
            }
            restore() {
                let t = this._stateStack.pop();
                if (t) {
                    this._transform = t.transform;
                    this._fillStyle = t.fillStyle;
                    this._strokeStyle = t.strokeStyle;
                }
                return this;
            }
            save() {
                this._stateStack.push({
                    transform: this._transform.clone(),
                    fillStyle: {
                        ...this._fillStyle
                    },
                    strokeStyle: {
                        ...this._strokeStyle
                    }
                });
                return this;
            }
            getTransform() {
                return this._transform;
            }
            resetTransform() {
                this._transform.identity();
                return this;
            }
            rotate(t) {
                this._transform.rotate(t);
                return this;
            }
            scale(t, e = t) {
                this._transform.scale(t, e);
                return this;
            }
            setTransform(t, e, i, s, n, a) {
                if (t instanceof r.Matrix) {
                    this._transform.set(t.a, t.b, t.c, t.d, t.tx, t.ty);
                } else {
                    this._transform.set(t, e, i, s, n, a);
                }
                return this;
            }
            transform(t, e, i, s, n, a) {
                if (t instanceof r.Matrix) {
                    this._transform.append(t);
                } else {
                    P.set(t, e, i, s, n, a);
                    this._transform.append(P);
                }
                return this;
            }
            translate(t, e = t) {
                this._transform.translate(t, e);
                return this;
            }
            clear() {
                this._activePath.clear();
                this.instructions.length = 0;
                this.resetTransform();
                this.onUpdate();
                return this;
            }
            onUpdate() {
                this._boundsDirty = true;
                this.dirty = true;
                this.emit("update", this, 16);
            }
            get bounds() {
                if (!this._boundsDirty) {
                    return this._bounds;
                }
                this._boundsDirty = false;
                let _bounds = this._bounds;
                _bounds.clear();
                for(let e = 0; e < this.instructions.length; e++){
                    let instruction = this.instructions[e];
                    let r = instruction.action;
                    if (r === "fill") {
                        let e = instruction.data;
                        _bounds.addBounds(e.path.bounds);
                    } else if (r === "texture") {
                        let e = instruction.data;
                        _bounds.addFrame(e.dx, e.dy, e.dx + e.dw, e.dy + e.dh, e.transform);
                    }
                    if (r === "stroke") {
                        let e = instruction.data;
                        let r = e.style.alignment;
                        let s = e.style.width * (1 - r);
                        if (e.style.join === "miter") {
                            s *= b(e.path, e.style.miterLimit);
                        }
                        let n = e.path.bounds;
                        _bounds.addFrame(n.minX - s, n.minY - s, n.maxX + s, n.maxY + s);
                    }
                }
                if (!_bounds.isValid) {
                    _bounds.set(0, 0, 0, 0);
                }
                return _bounds;
            }
            containsPoint(t) {
                if (!this.bounds.containsPoint(t.x, t.y)) {
                    return false;
                }
                let instructions = this.instructions;
                let i = false;
                for(let r = 0; r < instructions.length; r++){
                    let instruction = instructions[r];
                    let n = instruction.data;
                    let a = n.path;
                    if (!instruction.action || !a) {
                        continue;
                    }
                    let l = n.style;
                    let h = a.shapePath.shapePrimitives;
                    for(let e = 0; e < h.length; e++){
                        let r = h[e].shape;
                        if (!l || !r) {
                            continue;
                        }
                        let a = h[e].transform;
                        let o = a ? a.applyInverse(t, _) : t;
                        i = instruction.action === "fill" ? r.contains(o.x, o.y) : r.strokeContains(o.x, o.y, l.width, l.alignment);
                        let u = n.hole;
                        if (u) {
                            let t = u.shapePath?.shapePrimitives;
                            if (t) {
                                for(let e = 0; e < t.length; e++){
                                    if (t[e].shape.contains(o.x, o.y)) {
                                        i = false;
                                    }
                                }
                            }
                        }
                        if (i) {
                            return true;
                        }
                    }
                }
                return i;
            }
            unload() {
                for(let t in this.emit("unload", this), this._gpuData){
                    this._gpuData[t]?.destroy();
                }
                this._gpuData = Object.create(null);
            }
            destroy(t = false) {
                if (!this.destroyed) {
                    this.destroyed = true;
                    this._stateStack.length = 0;
                    this._transform = null;
                    this.unload();
                    this.emit("destroy", this);
                    this.removeAllListeners();
                    if (typeof t === "boolean" ? t : t?.texture) {
                        let e = typeof t === "boolean" ? t : t?.textureSource;
                        this._fillStyle.texture && (this._fillStyle.fill && "uid" in this._fillStyle.fill ? this._fillStyle.fill.destroy() : this._fillStyle.texture.destroy(e));
                        this._strokeStyle.texture && (this._strokeStyle.fill && "uid" in this._strokeStyle.fill ? this._strokeStyle.fill.destroy() : this._strokeStyle.texture.destroy(e));
                    }
                    this._fillStyle = null;
                    this._strokeStyle = null;
                    this.instructions = null;
                    this._activePath = null;
                    this._bounds = null;
                    this._stateStack = null;
                    this.customShader = null;
                    this._transform = null;
                }
            }
        };
        v.defaultFillStyle = {
            color: 16777215,
            alpha: 1,
            texture: n.Texture.WHITE,
            matrix: null,
            fill: null,
            textureSpace: "local"
        };
        v.defaultStrokeStyle = {
            width: 1,
            color: 16777215,
            alpha: 1,
            alignment: 0.5,
            miterLimit: 10,
            cap: "butt",
            join: "miter",
            texture: n.Texture.WHITE,
            matrix: null,
            fill: null,
            textureSpace: "local",
            pixelLine: false
        };
        t.s([
            "GraphicsContext",
            0,
            v
        ], 558001);
    },
    625533,
    455660,
    728207,
    (t)=>{
        "use strict";
        var e = t.i(37554);
        function i(t) {
            let t_length = t.length;
            if (t_length < 6) {
                return 1;
            }
            let i = 0;
            for(let r = 0, s = t[t_length - 2], n = t[t_length - 1]; r < t_length; r += 2){
                let e = t[r];
                let a = t[r + 1];
                i += (e - s) * (a + n);
                s = e;
                n = a;
            }
            if (i < 0) {
                return -1;
            }
            return 1;
        }
        function r(t, e, i, r, s, n, a, l) {
            let h;
            let o;
            if (a) {
                h = r;
                o = -i;
            } else {
                h = -r;
                o = i;
            }
            let u = t - i * s + h;
            let c = e - r * s + o;
            let d = t + i * n + h;
            let f = e + r * n + o;
            l.push(u, c);
            l.push(d, f);
            return 2;
        }
        function s(t, e, i, r, s, n, a, l) {
            let h = i - t;
            let o = r - e;
            let u = Math.atan2(h, o);
            let c = Math.atan2(s - t, n - e);
            if (l && u < c) {
                u += 2 * Math.PI;
            } else if (!l && u > c) {
                c += 2 * Math.PI;
            }
            let d = u;
            let f = c - u;
            let p = Math.sqrt(h * h + o * o);
            let x = (15 * Math.abs(f) * Math.sqrt(p) / Math.PI | 0) + 1;
            let y = f / x;
            d += y;
            if (l) {
                a.push(t, e);
                a.push(i, r);
                for(let i = 1, r = d; i < x; i++, r += y){
                    a.push(t, e);
                    a.push(t + Math.sin(r) * p, e + Math.cos(r) * p);
                }
                a.push(t, e);
                a.push(s, n);
            } else {
                a.push(i, r);
                a.push(t, e);
                for(let i = 1, r = d; i < x; i++, r += y){
                    a.push(t + Math.sin(r) * p, e + Math.cos(r) * p);
                    a.push(t, e);
                }
                a.push(s, n);
                a.push(t, e);
            }
            return 2 * x;
        }
        t.s([
            "closePointEps",
            0,
            0.0001,
            "curveEps",
            0,
            0.0001
        ], 455660);
        t.s([
            "getOrientationOfPoints",
            0,
            i
        ], 728207);
        t.s([
            "buildLine",
            0,
            (t, n, a, l, h, o)=>{
                if (t.length === 0) {
                    return;
                }
                let n_alignment = n.alignment;
                if (n.alignment !== 0.5) {
                    let e = i(t);
                    if (a) {
                        e *= -1;
                    }
                    n_alignment = (n_alignment - 0.5) * e + 0.5;
                }
                let c = new e.Point(t[0], t[1]);
                let d = new e.Point(t[t.length - 2], t[t.length - 1]);
                let f = Math.abs(c.x - d.x) < 0.0001 && Math.abs(c.y - d.y) < 0.0001;
                if (l) {
                    t = t.slice();
                    if (f) {
                        t.pop();
                        t.pop();
                        d.set(t[t.length - 2], t[t.length - 1]);
                    }
                    let e = (c.x + d.x) * 0.5;
                    let i = (d.y + c.y) * 0.5;
                    t.unshift(e, i);
                    t.push(e, i);
                }
                let p = t.length / 2;
                let t_length = t.length;
                let y = h.length / 2;
                let g = n.width / 2;
                let m = g * g;
                let b = n.miterLimit * n.miterLimit;
                let _ = t[0];
                let P = t[1];
                let v = t[2];
                let S = t[3];
                let M = 0;
                let k = 0;
                let w = -(P - S);
                let T = _ - v;
                let C = 0;
                let R = 0;
                let z = Math.sqrt(w * w + T * T);
                w /= z;
                T /= z;
                w *= g;
                T *= g;
                let B = n_alignment;
                let D = (1 - B) * 2;
                let G = 2 * B;
                l || (n.cap === "round" ? t_length += s(_ - w * (D - G) * 0.5, P - T * (D - G) * 0.5, _ - w * D, P - T * D, _ + w * G, P + T * G, h, true) + 2 : n.cap === "square" && (t_length += r(_, P, w, T, D, G, true, h)));
                h.push(_ - w * D, P - T * D);
                h.push(_ + w * G, P + T * G);
                for(let e = 1; e < p - 1; ++e){
                    _ = t[(e - 1) * 2];
                    P = t[(e - 1) * 2 + 1];
                    v = t[2 * e];
                    S = t[2 * e + 1];
                    M = t[(e + 1) * 2];
                    k = t[(e + 1) * 2 + 1];
                    z = Math.sqrt((w = -(P - S)) * w + (T = _ - v) * T);
                    w /= z;
                    T /= z;
                    w *= g;
                    T *= g;
                    z = Math.sqrt((C = -(S - k)) * C + (R = v - M) * R);
                    C /= z;
                    R /= z;
                    C *= g;
                    R *= g;
                    let i = v - _;
                    let r = P - S;
                    let a = v - M;
                    let l = k - S;
                    let o = i * a + r * l;
                    let u = r * a - l * i;
                    let c = u < 0;
                    if (Math.abs(u) < 0.001 * Math.abs(o)) {
                        h.push(v - w * D, S - T * D);
                        h.push(v + w * G, S + T * G);
                        if (o >= 0) {
                            if (n.join === "round") {
                                t_length += s(v, S, v - w * D, S - T * D, v - C * D, S - R * D, h, false) + 4;
                            } else {
                                t_length += 2;
                            }
                            h.push(v - C * G, S - R * G);
                            h.push(v + C * D, S + R * D);
                        }
                        continue;
                    }
                    let d = (-w + _) * (-T + S) - (-w + v) * (-T + P);
                    let f = (-C + M) * (-R + S) - (-C + v) * (-R + k);
                    let p = (i * f - a * d) / u;
                    let y = (l * d - r * f) / u;
                    let B = (p - v) * (p - v) + (y - S) * (y - S);
                    let q = v + (p - v) * D;
                    let F = S + (y - S) * D;
                    let I = v - (p - v) * G;
                    let L = S - (y - S) * G;
                    let V = c ? D : G;
                    if (B <= Math.min(i * i + r * r, a * a + l * l) + V * V * m) {
                        if (n.join === "bevel" || B / m > b) {
                            if (c) {
                                h.push(q, F);
                                h.push(v + w * G, S + T * G);
                                h.push(q, F);
                                h.push(v + C * G, S + R * G);
                            } else {
                                h.push(v - w * D, S - T * D);
                                h.push(I, L);
                                h.push(v - C * D, S - R * D);
                                h.push(I, L);
                            }
                            t_length += 2;
                        } else if (n.join === "round") {
                            if (c) {
                                h.push(q, F);
                                h.push(v + w * G, S + T * G);
                                t_length += s(v, S, v + w * G, S + T * G, v + C * G, S + R * G, h, true) + 4;
                                h.push(q, F);
                                h.push(v + C * G, S + R * G);
                            } else {
                                h.push(v - w * D, S - T * D);
                                h.push(I, L);
                                t_length += s(v, S, v - w * D, S - T * D, v - C * D, S - R * D, h, false) + 4;
                                h.push(v - C * D, S - R * D);
                                h.push(I, L);
                            }
                        } else {
                            h.push(q, F);
                            h.push(I, L);
                        }
                    } else {
                        h.push(v - w * D, S - T * D);
                        h.push(v + w * G, S + T * G);
                        n.join === "round" ? c ? t_length += s(v, S, v + w * G, S + T * G, v + C * G, S + R * G, h, true) + 2 : t_length += s(v, S, v - w * D, S - T * D, v - C * D, S - R * D, h, false) + 2 : n.join === "miter" && B / m <= b && (c ? (h.push(I, L), h.push(I, L)) : (h.push(q, F), h.push(q, F)), t_length += 2);
                        h.push(v - C * D, S - R * D);
                        h.push(v + C * G, S + R * G);
                        t_length += 2;
                    }
                }
                _ = t[(p - 2) * 2];
                P = t[(p - 2) * 2 + 1];
                v = t[(p - 1) * 2];
                z = Math.sqrt((w = -(P - (S = t[(p - 1) * 2 + 1]))) * w + (T = _ - v) * T);
                w /= z;
                T /= z;
                w *= g;
                T *= g;
                h.push(v - w * D, S - T * D);
                h.push(v + w * G, S + T * G);
                l || (n.cap === "round" ? t_length += s(v - w * (D - G) * 0.5, S - T * (D - G) * 0.5, v - w * D, S - T * D, v + w * G, S + T * G, h, false) + 2 : n.cap === "square" && (t_length += r(v, S, w, T, D, G, false, h)));
                let q = 0.0001 * 0.0001;
                for(let t = y; t < t_length + y - 2; ++t){
                    _ = h[2 * t];
                    P = h[2 * t + 1];
                    v = h[(t + 1) * 2];
                    S = h[(t + 1) * 2 + 1];
                    M = h[(t + 2) * 2];
                    if (!(Math.abs(_ * (S - (k = h[(t + 2) * 2 + 1])) + v * (k - P) + M * (P - S)) < q)) {
                        o.push(t, t + 1, t + 2);
                    }
                }
            }
        ], 625533);
    },
    53116,
    456659,
    752046,
    912667,
    816359,
    769047,
    (t)=>{
        "use strict";
        var e = t.i(455660);
        t.s([
            "buildPixelLine",
            0,
            (t, i, r, s)=>{
                let e_closePointEps = e.closePointEps;
                if (t.length === 0) {
                    return;
                }
                let a = t[0];
                let l = t[1];
                let h = t[t.length - 2];
                let o = t[t.length - 1];
                let u = i || Math.abs(a - h) < e_closePointEps && Math.abs(l - o) < e_closePointEps;
                let c = t.length / 2;
                let d = r.length / 2;
                for(let e = 0; e < c; e++){
                    r.push(t[2 * e]);
                    r.push(t[2 * e + 1]);
                }
                for(let t = 0; t < c - 1; t++){
                    s.push(d + t, d + t + 1);
                }
                if (u) {
                    s.push(d + c - 1, d);
                }
            }
        ], 53116);
        var i = t.i(78278);
        function r(t, e, i = 2) {
            let f;
            let p;
            let g;
            let b = e && e.length;
            let _ = b ? e[0] * i : t.length;
            let P = s(t, 0, _, i, true);
            let v = [];
            if (!P || P.next === P.prev) {
                return v;
            }
            if (b) {
                P = ((t, e, i, r)=>{
                    let l = [];
                    for(let i = 0, n = e.length; i < n; i++){
                        let a = e[i] * r;
                        let h = i < n - 1 ? e[i + 1] * r : t.length;
                        let o = s(t, a, h, r, false);
                        if (o === o.next) {
                            o.steiner = true;
                        }
                        l.push(((t)=>{
                            let e = t;
                            let i = t;
                            do {
                                if (e.x < i.x || e.x === i.x && e.y < i.y) {
                                    i = e;
                                }
                                e = e.next;
                            }while (e !== t)
                            return i;
                        })(o));
                    }
                    l.sort(a);
                    for(let t = 0; t < l.length; t++){
                        i = ((t, e)=>{
                            let i = ((t, e)=>{
                                let i;
                                let r = e;
                                let s = t.x;
                                let n = t.y;
                                let a = -Infinity;
                                if (c(t, r)) {
                                    return r;
                                }
                                do {
                                    if (c(t, r.next)) {
                                        return r.next;
                                    }
                                    if (n <= r.y && n >= r.next.y && r.next.y !== r.y) {
                                        let t = r.x + (n - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                                        if (t <= s && t > a && (a = t, i = r.x < r.next.x ? r : r.next, t === s)) {
                                            return i;
                                        }
                                    }
                                    r = r.next;
                                }while (r !== e)
                                if (!i) {
                                    return null;
                                }
                                let l = i;
                                let o = i.x;
                                let d = i.y;
                                let f = Infinity;
                                r = i;
                                do {
                                    if (s >= r.x && r.x >= o && s !== r.x && h(n < d ? s : a, n, o, d, n < d ? a : s, n, r.x, r.y)) {
                                        let p;
                                        let y;
                                        let e = Math.abs(n - r.y) / (s - r.x);
                                        if (x(r, t) && (e < f || e === f && (r.x > i.x || r.x === i.x && (p = i, y = r, u(p.prev, p, y.prev) < 0 && u(y.next, p, p.next) < 0)))) {
                                            i = r;
                                            f = e;
                                        }
                                    }
                                    r = r.next;
                                }while (r !== l)
                                return i;
                            })(t, e);
                            if (!i) {
                                return e;
                            }
                            let r = y(i, t);
                            n(r, r.next);
                            return n(i, i.next);
                        })(l[t], i);
                    }
                    return i;
                })(t, e, P, i);
            }
            if (t.length > 80 * i) {
                f = t[0];
                p = t[1];
                let e = f;
                let r = p;
                for(let s = i; s < _; s += i){
                    let i = t[s];
                    let n = t[s + 1];
                    if (i < f) {
                        f = i;
                    }
                    if (n < p) {
                        p = n;
                    }
                    if (i > e) {
                        e = i;
                    }
                    if (n > r) {
                        r = n;
                    }
                }
                g = (g = Math.max(e - f, r - p)) !== 0 ? 32767 / g : 0;
            }
            (function t(e, i, r, s, a, h, f) {
                if (!e) {
                    return;
                }
                if (!f && h) {
                    ((t, e, i, r)=>{
                        let s = t;
                        do {
                            if (s.z === 0) {
                                s.z = l(s.x, s.y, e, i, r);
                            }
                            s.prevZ = s.prev;
                            s.nextZ = s.next;
                            s = s.next;
                        }while (s !== t)
                        s.prevZ.nextZ = null;
                        s.prevZ = null;
                        ((t)=>{
                            let e;
                            let i = 1;
                            do {
                                let r;
                                let s = t;
                                t = null;
                                let n = null;
                                for(e = 0; s;){
                                    e++;
                                    let a = s;
                                    let l = 0;
                                    for(let t = 0; t < i && (l++, a = a.nextZ); t++);
                                    let h = i;
                                    while(l > 0 || h > 0 && a){
                                        if (l !== 0 && (h === 0 || !a || s.z <= a.z)) {
                                            r = s;
                                            s = s.nextZ;
                                            l--;
                                        } else {
                                            r = a;
                                            a = a.nextZ;
                                            h--;
                                        }
                                        if (n) {
                                            n.nextZ = r;
                                        } else {
                                            t = r;
                                        }
                                        r.prevZ = n;
                                        n = r;
                                    }
                                    s = a;
                                }
                                n.nextZ = null;
                                i *= 2;
                            }while (e > 1)
                        })(s);
                    })(e, s, a, h);
                }
                let p = e;
                while(e.prev !== e.next){
                    let g = e.prev;
                    let b = e.next;
                    if (h ? ((t, e, i, r)=>{
                        let t_prev = t.prev;
                        let t_next = t.next;
                        if (u(t_prev, t, t_next) >= 0) {
                            return false;
                        }
                        let a = t_prev.x;
                        let h = t.x;
                        let c = t_next.x;
                        let d = t_prev.y;
                        let f = t.y;
                        let p = t_next.y;
                        let x = Math.min(a, h, c);
                        let y = Math.min(d, f, p);
                        let g = Math.max(a, h, c);
                        let m = Math.max(d, f, p);
                        let b = l(x, y, e, i, r);
                        let _ = l(g, m, e, i, r);
                        let t_prevZ = t.prevZ;
                        let t_nextZ = t.nextZ;
                        while(t_prevZ && t_prevZ.z >= b && t_nextZ && t_nextZ.z <= _){
                            if (t_prevZ.x >= x && t_prevZ.x <= g && t_prevZ.y >= y && t_prevZ.y <= m && t_prevZ !== t_prev && t_prevZ !== t_next && o(a, d, h, f, c, p, t_prevZ.x, t_prevZ.y) && u(t_prevZ.prev, t_prevZ, t_prevZ.next) >= 0 || (t_prevZ = t_prevZ.prevZ, t_nextZ.x >= x && t_nextZ.x <= g && t_nextZ.y >= y && t_nextZ.y <= m && t_nextZ !== t_prev && t_nextZ !== t_next && o(a, d, h, f, c, p, t_nextZ.x, t_nextZ.y) && u(t_nextZ.prev, t_nextZ, t_nextZ.next) >= 0)) {
                                return false;
                            }
                            t_nextZ = t_nextZ.nextZ;
                        }
                        while(t_prevZ && t_prevZ.z >= b){
                            if (t_prevZ.x >= x && t_prevZ.x <= g && t_prevZ.y >= y && t_prevZ.y <= m && t_prevZ !== t_prev && t_prevZ !== t_next && o(a, d, h, f, c, p, t_prevZ.x, t_prevZ.y) && u(t_prevZ.prev, t_prevZ, t_prevZ.next) >= 0) {
                                return false;
                            }
                            t_prevZ = t_prevZ.prevZ;
                        }
                        while(t_nextZ && t_nextZ.z <= _){
                            if (t_nextZ.x >= x && t_nextZ.x <= g && t_nextZ.y >= y && t_nextZ.y <= m && t_nextZ !== t_prev && t_nextZ !== t_next && o(a, d, h, f, c, p, t_nextZ.x, t_nextZ.y) && u(t_nextZ.prev, t_nextZ, t_nextZ.next) >= 0) {
                                return false;
                            }
                            t_nextZ = t_nextZ.nextZ;
                        }
                        return true;
                    })(e, s, a, h) : ((t)=>{
                        let t_prev = t.prev;
                        let t_next = t.next;
                        if (u(t_prev, t, t_next) >= 0) {
                            return false;
                        }
                        let r = t_prev.x;
                        let s = t.x;
                        let n = t_next.x;
                        let a = t_prev.y;
                        let l = t.y;
                        let h = t_next.y;
                        let c = Math.min(r, s, n);
                        let d = Math.min(a, l, h);
                        let f = Math.max(r, s, n);
                        let p = Math.max(a, l, h);
                        let i_next = t_next.next;
                        while(i_next !== t_prev){
                            if (i_next.x >= c && i_next.x <= f && i_next.y >= d && i_next.y <= p && o(r, a, s, l, n, h, i_next.x, i_next.y) && u(i_next.prev, i_next, i_next.next) >= 0) {
                                return false;
                            }
                            i_next = i_next.next;
                        }
                        return true;
                    })(e)) {
                        i.push(g.i, e.i, b.i);
                        m(e);
                        e = b.next;
                        p = b.next;
                        continue;
                    }
                    if ((e = b) === p) {
                        if (f) {
                            if (f === 1) {
                                t(e = ((t, e)=>{
                                    let i = t;
                                    do {
                                        let r = i.prev;
                                        let s = i.next.next;
                                        if (!c(r, s) && d(r, i, i.next, s) && x(r, s) && x(s, r)) {
                                            e.push(r.i, i.i, s.i);
                                            m(i);
                                            m(i.next);
                                            t = s;
                                            i = s;
                                        }
                                        i = i.next;
                                    }while (i !== t)
                                    return n(i);
                                })(n(e), i), i, r, s, a, h, 2);
                            } else if (f === 2) {
                                ((e, i, r, s, a, l)=>{
                                    let h = e;
                                    do {
                                        let e = h.next.next;
                                        while(e !== h.prev){
                                            let o;
                                            let f;
                                            if (h.i !== e.i && (o = h, f = e, o.next.i !== f.i && o.prev.i !== f.i && !((t, e)=>{
                                                let i = t;
                                                do {
                                                    if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && d(i, i.next, t, e)) {
                                                        return true;
                                                    }
                                                    i = i.next;
                                                }while (i !== t)
                                                return false;
                                            })(o, f) && (x(o, f) && x(f, o) && ((t, e)=>{
                                                let i = t;
                                                let r = false;
                                                let s = (t.x + e.x) / 2;
                                                let n = (t.y + e.y) / 2;
                                                do {
                                                    if (i.y > n != i.next.y > n && i.next.y !== i.y && s < (i.next.x - i.x) * (n - i.y) / (i.next.y - i.y) + i.x) {
                                                        r = !r;
                                                    }
                                                    i = i.next;
                                                }while (i !== t)
                                                return r;
                                            })(o, f) && (u(o.prev, o, f.prev) || u(o, f.prev, f)) || c(o, f) && u(o.prev, o, o.next) > 0 && u(f.prev, f, f.next) > 0))) {
                                                let o = y(h, e);
                                                h = n(h, h.next);
                                                o = n(o, o.next);
                                                t(h, i, r, s, a, l, 0);
                                                t(o, i, r, s, a, l, 0);
                                                return;
                                            }
                                            e = e.next;
                                        }
                                        h = h.next;
                                    }while (h !== e)
                                })(e, i, r, s, a, h);
                            }
                        } else {
                            t(n(e), i, r, s, a, h, 1);
                        }
                        break;
                    }
                }
            })(P, v, i, f, p, g, 0);
            return v;
        }
        function s(t, e, i, r, s) {
            let n;
            if (s === ((t, e, i, r)=>{
                let s = 0;
                for(let n = e, a = i - r; n < i; n += r){
                    s += (t[a] - t[n]) * (t[n + 1] + t[a + 1]);
                    a = n;
                }
                return s;
            })(t, e, i, r) > 0) {
                for(let s = e; s < i; s += r){
                    n = g(s / r | 0, t[s], t[s + 1], n);
                }
            } else {
                for(let s = i - r; s >= e; s -= r){
                    n = g(s / r | 0, t[s], t[s + 1], n);
                }
            }
            if (n && c(n, n.next)) {
                m(n);
                n = n.next;
            }
            return n;
        }
        function n(t, e) {
            if (!t) {
                return t;
            }
            if (!e) {
                e = t;
            }
            let i = t;
            let r;
            do {
                r = false;
                if (!i.steiner && (c(i, i.next) || u(i.prev, i, i.next) === 0)) {
                    m(i);
                    if ((i = e = i.prev) === i.next) {
                        break;
                    }
                    r = true;
                } else {
                    i = i.next;
                }
            }while (r || i !== e)
            return e;
        }
        function a(t, e) {
            let i = t.x - e.x;
            if (i === 0 && (i = t.y - e.y) == 0) {
                i = (t.next.y - t.y) / (t.next.x - t.x) - (e.next.y - e.y) / (e.next.x - e.x);
            }
            return i;
        }
        function l(t, e, i, r, s) {
            return (t = ((t = ((t = ((t = ((t = (t - i) * s | 0) | t << 8) & 16711935) | t << 4) & 252645135) | t << 2) & 858993459) | t << 1) & 1431655765) | (e = ((e = ((e = ((e = ((e = (e - r) * s | 0) | e << 8) & 16711935) | e << 4) & 252645135) | e << 2) & 858993459) | e << 1) & 1431655765) << 1;
        }
        function h(t, e, i, r, s, n, a, l) {
            return (s - a) * (e - l) >= (t - a) * (n - l) && (t - a) * (r - l) >= (i - a) * (e - l) && (i - a) * (n - l) >= (s - a) * (r - l);
        }
        function o(t, e, i, r, s, n, a, l) {
            return (t !== a || e !== l) && h(t, e, i, r, s, n, a, l);
        }
        function u(t, e, i) {
            return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
        }
        function c(t, e) {
            return t.x === e.x && t.y === e.y;
        }
        function d(t, e, i, r) {
            let s = p(u(t, e, i));
            let n = p(u(t, e, r));
            let a = p(u(i, r, t));
            let l = p(u(i, r, e));
            return !!(s !== n && a !== l || s === 0 && f(t, i, e) || n === 0 && f(t, r, e) || a === 0 && f(i, t, r) || l === 0 && f(i, e, r));
        }
        function f(t, e, i) {
            return e.x <= Math.max(t.x, i.x) && e.x >= Math.min(t.x, i.x) && e.y <= Math.max(t.y, i.y) && e.y >= Math.min(t.y, i.y);
        }
        function p(t) {
            if (t > 0) {
                return 1;
            }
            if (t < 0) {
                return -1;
            }
            return 0;
        }
        function x(t, e) {
            if (u(t.prev, t, t.next) < 0) {
                return u(t, e, t.next) >= 0 && u(t, t.prev, e) >= 0;
            }
            return u(t, e, t.prev) < 0 || u(t, t.next, e) < 0;
        }
        function y(t, e) {
            let i = b(t.i, t.x, t.y);
            let r = b(e.i, e.x, e.y);
            let t_next = t.next;
            let e_prev = e.prev;
            t.next = e;
            e.prev = t;
            i.next = t_next;
            t_next.prev = i;
            r.next = i;
            i.prev = r;
            e_prev.next = r;
            r.prev = e_prev;
            return r;
        }
        function g(t, e, i, r) {
            let s = b(t, e, i);
            if (r) {
                s.next = r.next;
                s.prev = r;
                r.next.prev = s;
                r.next = s;
            } else {
                s.prev = s;
                s.next = s;
            }
            return s;
        }
        function m(t) {
            t.next.prev = t.prev;
            t.prev.next = t.next;
            if (t.prevZ) {
                t.prevZ.nextZ = t.nextZ;
            }
            if (t.nextZ) {
                t.nextZ.prevZ = t.prevZ;
            }
        }
        function b(i_1, x_1, y_1) {
            return {
                i: i_1,
                x: x_1,
                y: y_1,
                prev: null,
                next: null,
                z: 0,
                prevZ: null,
                nextZ: null,
                steiner: false
            };
        }
        t.i(263524);
        let _ = r.default || r;
        function P(t, e, i, r, s, n, a) {
            let l = _(t, e, 2);
            if (!l) {
                return;
            }
            for(let t = 0; t < l.length; t += 3){
                n[a++] = l[t] + s;
                n[a++] = l[t + 1] + s;
                n[a++] = l[t + 2] + s;
            }
            let h = s * r;
            for(let e = 0; e < t.length; e += 2){
                i[h] = t[e];
                i[h + 1] = t[e + 1];
                h += r;
            }
        }
        t.s([
            "earcut",
            0,
            _
        ], 456659);
        t.s([
            "triangulateWithHoles",
            0,
            P
        ], 752046);
        let v = [];
        let S = {
            extension: {
                type: i.ExtensionType.ShapeBuilder,
                name: "polygon"
            },
            build (t, e) {
                for(let i = 0; i < t.points.length; i++){
                    e[i] = t.points[i];
                }
                return true;
            },
            triangulate (t, e, i, r, s, n) {
                P(t, v, e, i, r, s, n);
            }
        };
        t.s([
            "buildPolygon",
            0,
            S
        ], 912667);
        let M = {
            extension: {
                type: i.ExtensionType.ShapeBuilder,
                name: "rectangle"
            },
            build (t, e) {
                let i = t.x;
                let r = t.y;
                let t_width = t.width;
                let t_height = t.height;
                return !!(t_width > 0 && t_height > 0) && (e[0] = i, e[1] = r, e[2] = i + t_width, e[3] = r, e[4] = i + t_width, e[5] = r + t_height, e[6] = i, e[7] = r + t_height, true);
            },
            triangulate (t, e, i, r, s, n) {
                let a = 0;
                e[(r *= i) + a] = t[0];
                e[r + a + 1] = t[1];
                a += i;
                e[r + a] = t[2];
                e[r + a + 1] = t[3];
                a += i;
                e[r + a] = t[6];
                e[r + a + 1] = t[7];
                a += i;
                e[r + a] = t[4];
                e[r + a + 1] = t[5];
                a += i;
                let l = r / i;
                s[n++] = l;
                s[n++] = l + 1;
                s[n++] = l + 2;
                s[n++] = l + 1;
                s[n++] = l + 3;
                s[n++] = l + 2;
            }
        };
        t.s([
            "buildRectangle",
            0,
            M
        ], 816359);
        let k = {
            extension: {
                type: i.ExtensionType.ShapeBuilder,
                name: "triangle"
            },
            build: (t, e)=>{
                e[0] = t.x;
                e[1] = t.y;
                e[2] = t.x2;
                e[3] = t.y2;
                e[4] = t.x3;
                e[5] = t.y3;
                return true;
            },
            triangulate (t, e, i, r, s, n) {
                let a = 0;
                e[(r *= i) + a] = t[0];
                e[r + a + 1] = t[1];
                a += i;
                e[r + a] = t[2];
                e[r + a + 1] = t[3];
                a += i;
                e[r + a] = t[4];
                e[r + a + 1] = t[5];
                let l = r / i;
                s[n++] = l;
                s[n++] = l + 1;
                s[n++] = l + 2;
            }
        };
        t.s([
            "buildTriangle",
            0,
            k
        ], 769047);
    },
    419905,
    (t)=>{
        "use strict";
        var e = t.i(222735);
        var i = t.i(787653);
        var r = t.i(389474);
        var s = t.i(24880);
        var n = t.i(337654);
        var a = t.i(733705);
        var l = t.i(727905);
        var h = t.i(317624);
        let o = [
            {
                offset: 0,
                color: "white"
            },
            {
                offset: 1,
                color: "black"
            }
        ];
        let u = class t {
            constructor(...e){
                this.uid = a.uid("fillGradient");
                this._tick = 0;
                this.type = "linear";
                this.colorStops = [];
                let i = ((t)=>{
                    let e = t[0] ?? {};
                    if (typeof e === "number" || t[1]) {
                        l.deprecation("8.5.2", "use options object instead");
                        e = {
                            type: "linear",
                            start: {
                                x: t[0],
                                y: t[1]
                            },
                            end: {
                                x: t[2],
                                y: t[3]
                            },
                            textureSpace: t[4],
                            textureSize: t[5] ?? u.defaultLinearOptions.textureSize
                        };
                    }
                    return e;
                })(e);
                i = {
                    ...i.type === "radial" ? t.defaultRadialOptions : t.defaultLinearOptions,
                    ...h.definedProps(i)
                };
                this._textureSize = i.textureSize;
                this._wrapMode = i.wrapMode;
                if (i.type === "radial") {
                    this.center = i.center;
                    this.outerCenter = i.outerCenter ?? this.center;
                    this.innerRadius = i.innerRadius;
                    this.outerRadius = i.outerRadius;
                    this.scale = i.scale;
                    this.rotation = i.rotation;
                } else {
                    this.start = i.start;
                    this.end = i.end;
                }
                this.textureSpace = i.textureSpace;
                this.type = i.type;
                i.colorStops.forEach((t)=>{
                    this.addColorStop(t.offset, t.color);
                });
            }
            addColorStop(offset, i) {
                this.colorStops.push({
                    offset,
                    color: e.Color.shared.setValue(i).toHexa()
                });
                return this;
            }
            buildLinearGradient() {
                if (this.texture) {
                    return;
                }
                let { x: x_1, y: y_1 } = this.start;
                let { x: x_2, y: y_2 } = this.end;
                let l = x_2 - x_1;
                let h = y_2 - y_1;
                let u = l < 0 || h < 0;
                if (this._wrapMode === "clamp-to-edge") {
                    if (l < 0) {
                        let e = x_1;
                        x_1 = x_2;
                        x_2 = e;
                        l *= -1;
                    }
                    if (h < 0) {
                        let t = y_1;
                        y_1 = y_2;
                        y_2 = t;
                        h *= -1;
                    }
                }
                let f = this.colorStops.length ? this.colorStops : o;
                let _textureSize = this._textureSize;
                let { canvas, context } = d(_textureSize, 1);
                let g = u ? context.createLinearGradient(this._textureSize, 0, 0, 0) : context.createLinearGradient(0, 0, this._textureSize, 0);
                c(g, f);
                context.fillStyle = g;
                context.fillRect(0, 0, _textureSize, 1);
                this.texture = new n.Texture({
                    source: new s.ImageSource({
                        resource: canvas,
                        addressMode: this._wrapMode
                    })
                });
                let m = Math.sqrt(l * l + h * h);
                let b = Math.atan2(h, l);
                let _ = new r.Matrix;
                _.scale(m / _textureSize, 1);
                _.rotate(b);
                _.translate(x_1, y_1);
                if (this.textureSpace === "local") {
                    _.scale(_textureSize, _textureSize);
                }
                this.transform = _;
            }
            buildGradient() {
                !this.texture && this._tick++;
                if (this.type === "linear") {
                    this.buildLinearGradient();
                } else {
                    this.buildRadialGradient();
                }
            }
            buildRadialGradient() {
                if (this.texture) {
                    return;
                }
                let t = this.colorStops.length ? this.colorStops : o;
                let _textureSize = this._textureSize;
                let { canvas, context } = d(_textureSize, _textureSize);
                let { x: x_1, y: y_1 } = this.center;
                let { x: x_2, y: y_2 } = this.outerCenter;
                let innerRadius = this.innerRadius;
                let outerRadius = this.outerRadius;
                let y = x_2 - outerRadius;
                let g = y_2 - outerRadius;
                let m = _textureSize / (2 * outerRadius);
                let b = (x_1 - y) * m;
                let _ = (y_1 - g) * m;
                let P = context.createRadialGradient(b, _, innerRadius * m, (x_2 - y) * m, (y_2 - g) * m, outerRadius * m);
                c(P, t);
                context.fillStyle = t[t.length - 1].color;
                context.fillRect(0, 0, _textureSize, _textureSize);
                context.fillStyle = P;
                context.translate(b, _);
                context.rotate(this.rotation);
                context.scale(1, this.scale);
                context.translate(-b, -_);
                context.fillRect(0, 0, _textureSize, _textureSize);
                this.texture = new n.Texture({
                    source: new s.ImageSource({
                        resource: canvas,
                        addressMode: this._wrapMode
                    })
                });
                let v = new r.Matrix;
                if (this.textureSpace === "local") {
                    v.scale(2 * outerRadius, 2 * outerRadius);
                } else {
                    v.scale(1 / m, 1 / m);
                }
                v.translate(y, g);
                this.transform = v;
            }
            destroy() {
                this.texture?.destroy(true);
                this.texture = null;
                this.transform = null;
                this.colorStops = [];
                this.start = null;
                this.end = null;
                this.center = null;
                this.outerCenter = null;
            }
            get styleKey() {
                return `fill-gradient-${this.uid}-${this._tick}`;
            }
        };
        function c(t, e) {
            for(let i = 0; i < e.length; i++){
                let r = e[i];
                t.addColorStop(r.offset, r.color);
            }
        }
        function d(_textureSize, e) {
            let canvas = i.DOMAdapter.get().createCanvas(_textureSize, e);
            let context = canvas.getContext("2d");
            return {
                canvas,
                context
            };
        }
        u.defaultLinearOptions = {
            start: {
                x: 0,
                y: 0
            },
            end: {
                x: 0,
                y: 1
            },
            colorStops: [],
            textureSpace: "local",
            type: "linear",
            textureSize: 256,
            wrapMode: "clamp-to-edge"
        };
        u.defaultRadialOptions = {
            center: {
                x: 0.5,
                y: 0.5
            },
            innerRadius: 0,
            outerRadius: 0.5,
            colorStops: [],
            scale: 1,
            rotation: 0,
            textureSpace: "local",
            type: "radial",
            textureSize: 256,
            wrapMode: "clamp-to-edge"
        };
        t.s([
            "FillGradient",
            0,
            u
        ]);
    },
    336966,
    (t)=>{
        "use strict";
        var e = t.i(389474);
        var i = t.i(733705);
        let r = {
            repeat: {
                addressModeU: "repeat",
                addressModeV: "repeat"
            },
            "repeat-x": {
                addressModeU: "repeat",
                addressModeV: "clamp-to-edge"
            },
            "repeat-y": {
                addressModeU: "clamp-to-edge",
                addressModeV: "repeat"
            },
            "no-repeat": {
                addressModeU: "clamp-to-edge",
                addressModeV: "clamp-to-edge"
            }
        };
        t.s([
            "FillPattern",
            0,
            class {
                constructor(texture, repetition){
                    this.uid = i.uid("fillPattern");
                    this._tick = 0;
                    this.transform = new e.Matrix;
                    const n = !((t)=>t.texture !== undefined)(texture) ? {
                        texture,
                        repetition
                    } : texture;
                    this.texture = n.texture;
                    this.textureSpace = n.textureSpace ?? "global";
                    const a = n.repetition;
                    if (a) {
                        this.texture.source.style.addressModeU = r[a].addressModeU;
                        this.texture.source.style.addressModeV = r[a].addressModeV;
                    }
                }
                setTransform(t) {
                    if (t) {
                        if (this.transform.equals(t)) {
                            return;
                        }
                        this.transform.copyFrom(t);
                    } else {
                        if (this.transform.isIdentity()) {
                            return;
                        }
                        this.transform.identity();
                    }
                    this._tick++;
                }
                get texture() {
                    return this._texture;
                }
                set texture(t) {
                    if (this._texture !== t) {
                        this._texture = t;
                        this._tick++;
                    }
                }
                get styleKey() {
                    return `fill-pattern-${this.uid}-${this._tick}`;
                }
                destroy() {
                    this.texture.destroy(true);
                    this.texture = null;
                }
            }
        ]);
    },
    115321,
    234118,
    104312,
    682581,
    121570,
    898006,
    225839,
    551370,
    121402,
    523994,
    388850,
    591069,
    437324,
    898512,
    470618,
    569176,
    (t)=>{
        "use strict";
        var e = t.i(37554);
        var i = t.i(733705);
        var r = t.i(562140);
        var s = t.i(380762);
        var n = t.i(547416);
        var a = t.i(547417);
        var l = t.i(163062);
        var h = t.i(539088);
        var o = t.i(140427);
        var u = t.i(453549);
        var c = t.i(78278);
        var d = t.i(666258);
        var f = t.i(933261);
        var p = t.i(706848);
        var x = t.i(217055);
        var y = t.i(727905);
        var g = t.i(765480);
        var m = t.i(967030);
        class b {
            constructor(){
                this.batches = [];
                this.geometryData = {
                    vertices: [],
                    uvs: [],
                    indices: []
                };
            }
            reset() {
                if (this.batches) {
                    this.batches.forEach((t)=>{
                        g.BigPool.return(t);
                    });
                }
                if (this.graphicsData) {
                    g.BigPool.return(this.graphicsData);
                }
                this.isBatchable = false;
                this.context = null;
                this.batches.length = 0;
                this.geometryData.indices.length = 0;
                this.geometryData.vertices.length = 0;
                this.geometryData.uvs.length = 0;
                this.graphicsData = null;
            }
            destroy() {
                this.reset();
                this.batches = null;
                this.geometryData = null;
            }
        }
        class _ {
            constructor(){
                this.instructions = new p.InstructionSet;
            }
            init(t) {
                let t_maxTextures = t.maxTextures;
                if (this.batcher) {
                    this.batcher._updateMaxTextures(t_maxTextures);
                } else {
                    this.batcher = new f.DefaultBatcher({
                        maxTextures: t_maxTextures
                    });
                }
                this.instructions.reset();
            }
            get geometry() {
                y.deprecation(y.v8_3_4, "GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead.");
                return this.batcher.geometry;
            }
            destroy() {
                this.batcher.destroy();
                this.instructions.destroy();
                this.batcher = null;
                this.instructions = null;
            }
        }
        let P = class t {
            constructor(renderer){
                this._renderer = renderer;
                this._managedContexts = new x.GCManagedHash({
                    renderer,
                    type: "resource",
                    name: "graphicsContext"
                });
            }
            init(e) {
                t.defaultOptions.bezierSmoothness = e?.bezierSmoothness ?? t.defaultOptions.bezierSmoothness;
            }
            getContextRenderData(t) {
                return t._gpuData[this._renderer.uid].graphicsData || this._initContextRenderData(t);
            }
            updateGpuContext(t) {
                let e = !!t._gpuData[this._renderer.uid];
                let i = t._gpuData[this._renderer.uid] || this._initContext(t);
                if (t.dirty || !e) {
                    if (e) {
                        i.reset();
                    }
                    m.buildContextBatches(t, i);
                    let r = t.batchMode;
                    if (t.customShader || r === "no-batch") {
                        i.isBatchable = false;
                    } else if (r === "auto") {
                        i.isBatchable = i.geometryData.vertices.length < 400;
                    } else {
                        i.isBatchable = true;
                    }
                    t.dirty = false;
                }
                return i;
            }
            getGpuContext(t) {
                return t._gpuData[this._renderer.uid] || this._initContext(t);
            }
            _initContextRenderData(t) {
                let e = g.BigPool.get(_, {
                    maxTextures: this._renderer.limits.maxBatchableTextures
                });
                let i = t._gpuData[this._renderer.uid];
                let { batches, geometryData } = i;
                i.graphicsData = e;
                let length = geometryData.vertices.length;
                let length_1 = geometryData.indices.length;
                for(let t = 0; t < batches.length; t++){
                    batches[t].applyTransform = false;
                }
                let e_batcher = e.batcher;
                e_batcher.ensureAttributeBuffer(length);
                e_batcher.ensureIndexBuffer(length_1);
                e_batcher.begin();
                for(let t = 0; t < batches.length; t++){
                    let batch = batches[t];
                    e_batcher.add(batch);
                }
                e_batcher.finish(e.instructions);
                let l_geometry = e_batcher.geometry;
                l_geometry.indexBuffer.setDataWithSize(e_batcher.indexBuffer, e_batcher.indexSize, true);
                l_geometry.buffers[0].setDataWithSize(e_batcher.attributeBuffer.float32View, e_batcher.attributeSize, true);
                let l_batches = e_batcher.batches;
                for(let t = 0; t < l_batches.length; t++){
                    let batch = l_batches[t];
                    batch.bindGroup = d.getTextureBatchBindGroup(batch.textures.textures, batch.textures.count, this._renderer.limits.maxBatchableTextures);
                }
                return e;
            }
            _initContext(t) {
                let e = new b;
                e.context = t;
                t._gpuData[this._renderer.uid] = e;
                this._managedContexts.add(t);
                return e;
            }
            destroy() {
                this._managedContexts.destroy();
                this._renderer = null;
            }
        };
        function v(t, e, i, r, s, n, a, l, h, o) {
            let u;
            let c;
            let d;
            let f = (1 - Math.min(0.99, Math.max(0, o ?? P.defaultOptions.bezierSmoothness))) / 1;
            f *= f;
            (function t(e, i, r, s, n, a, l, h, o, u, c) {
                if (c > 8) {
                    return;
                }
                let d = (e + r) / 2;
                let f = (i + s) / 2;
                let p = (r + n) / 2;
                let x = (s + a) / 2;
                let y = (n + l) / 2;
                let g = (a + h) / 2;
                let m = (d + p) / 2;
                let b = (f + x) / 2;
                let _ = (p + y) / 2;
                let P = (x + g) / 2;
                let v = (m + _) / 2;
                let S = (b + P) / 2;
                if (c > 0) {
                    let t = l - e;
                    let c = h - i;
                    let d = Math.abs((r - l) * c - (s - h) * t);
                    let f = Math.abs((n - l) * c - (a - h) * t);
                    if (d > 1.1920929e-7 && f > 1.1920929e-7) {
                        if ((d + f) * (d + f) <= u * (t * t + c * c)) {
                            return void o.push(v, S);
                        }
                    } else if (d > 1.1920929e-7) {
                        if (d * d <= u * (t * t + c * c)) {
                            return void o.push(v, S);
                        }
                    } else if (f > 1.1920929e-7) {
                        if (f * f <= u * (t * t + c * c)) {
                            return void o.push(v, S);
                        }
                    } else if ((t = v - (e + l) / 2) * t + (c = S - (i + h) / 2) * c <= u) {
                        return void o.push(v, S);
                    }
                }
                t(e, i, d, f, m, b, v, S, o, u, c + 1);
                t(v, S, _, P, y, g, l, h, o, u, c + 1);
            })(e, i, r, s, n, a, u = l, c = h, d = t, f, 0);
            d.push(u, c);
            return t;
        }
        function S(t, e, i, r, s, n, a, l) {
            let h;
            let o;
            let u;
            let c;
            let d;
            let f;
            let p;
            let x = (1 - Math.min(0.99, Math.max(0, l ?? P.defaultOptions.bezierSmoothness))) / 1;
            x *= x;
            h = e;
            o = i;
            u = r;
            c = s;
            d = n;
            f = a;
            (function t(e, i, r, s, n, a, l, h, o) {
                if (o > 8) {
                    return;
                }
                let u = (i + s) / 2;
                let c = (r + n) / 2;
                let d = (s + a) / 2;
                let f = (n + l) / 2;
                let p = (u + d) / 2;
                let x = (c + f) / 2;
                let y = a - i;
                let g = l - r;
                let m = Math.abs((s - a) * g - (n - l) * y);
                if (m > 1.1920929e-7) {
                    if (m * m <= h * (y * y + g * g)) {
                        return void e.push(p, x);
                    }
                } else if ((y = p - (i + a) / 2) * y + (g = x - (r + l) / 2) * g <= h) {
                    return void e.push(p, x);
                }
                t(e, i, r, u, c, p, x, h, o + 1);
                t(e, p, x, d, f, a, l, h, o + 1);
            })(p = t, h, o, u, c, d, f, x, 0);
            p.push(d, f);
            return t;
        }
        function M(t, e, i, r, s, n, a, l) {
            let h = Math.abs(s - n);
            if (!a && s > n) {
                h = 2 * Math.PI - h;
            } else if (a && n > s) {
                h = 2 * Math.PI - h;
            }
            if (!l) {
                l = Math.max(6, Math.floor(6 * r ** (1 / 3) * (h / Math.PI)));
            }
            let o = h / (l = Math.max(l, 3));
            let u = s;
            o *= a ? -1 : 1;
            for(let s = 0; s < l + 1; s++){
                let s = e + Math.cos(u) * r;
                let n = i + Math.sin(u) * r;
                t.push(s, n);
                u += o;
            }
        }
        function k(t, e, i, r, s, n) {
            let a = t[t.length - 2];
            let l = t[t.length - 1] - i;
            let h = a - e;
            let o = s - i;
            let u = r - e;
            let c = Math.abs(l * u - h * o);
            if (c < 1e-8 || n === 0) {
                if (t[t.length - 2] !== e || t[t.length - 1] !== i) {
                    t.push(e, i);
                }
                return;
            }
            let d = l * l + h * h;
            let f = o * o + u * u;
            let p = l * o + h * u;
            let x = n * Math.sqrt(d) / c;
            let y = n * Math.sqrt(f) / c;
            let g = x * p / d;
            let m = y * p / f;
            let b = x * u + y * h;
            let _ = x * o + y * l;
            let P = Math.atan2(l * (y + g) - _, h * (y + g) - b);
            let v = Math.atan2(o * (x + m) - _, u * (x + m) - b);
            M(t, b + e, _ + i, n, P, v, h * o > u * l);
        }
        P.extension = {
            type: [
                c.ExtensionType.WebGLSystem,
                c.ExtensionType.WebGPUSystem
            ],
            name: "graphicsContext"
        };
        P.defaultOptions = {
            bezierSmoothness: 0.5
        };
        t.s([
            "GpuGraphicsContext",
            0,
            b,
            "GraphicsContextRenderData",
            0,
            _,
            "GraphicsContextSystem",
            0,
            P
        ], 234118);
        t.s([
            "buildAdaptiveBezier",
            0,
            v
        ], 104312);
        t.s([
            "buildAdaptiveQuadratic",
            0,
            S
        ], 682581);
        t.s([
            "buildArc",
            0,
            M
        ], 121570);
        t.s([
            "buildArcTo",
            0,
            k
        ], 898006);
        let w = 2 * Math.PI;
        let T = {
            centerX: 0,
            centerY: 0,
            ang1: 0,
            ang2: 0
        };
        let C = ({ x, y }, i, r, s, n, centerX, centerY, h)=>{
            let o = s * (x *= i) - n * (y *= r);
            let u = n * x + s * y;
            h.x = o + centerX;
            h.y = u + centerY;
            return h;
        };
        let R = (t, e, i, r)=>{
            let s = t * i + e * r;
            if (s > 1) {
                s = 1;
            }
            if (s < -1) {
                s = -1;
            }
            return (t * r - e * i < 0 ? -1 : 1) * Math.acos(s);
        };
        function z(t, e, i, r, s, n, a, l = 0, h = 0, o = 0) {
            let u;
            let c;
            let d;
            let f;
            let p;
            let x;
            let y;
            let g;
            let m;
            let b;
            let _;
            let P;
            let S;
            if (n === 0 || a === 0) {
                return;
            }
            let M = Math.sin(l * w / 360);
            let k = Math.cos(l * w / 360);
            let B = k * (e - r) / 2 + M * (i - s) / 2;
            let D = -M * (e - r) / 2 + k * (i - s) / 2;
            if (B === 0 && D === 0) {
                return;
            }
            let G = B ** 2 / (n = Math.abs(n)) ** 2 + D ** 2 / (a = Math.abs(a)) ** 2;
            if (G > 1) {
                n *= Math.sqrt(G);
                a *= Math.sqrt(G);
            }
            u = n;
            c = a;
            d = u ** 2;
            f = c ** 2;
            p = B ** 2;
            if ((y = d * f - d * (x = D ** 2) - f * p) < 0) {
                y = 0;
            }
            y /= d * x + f * p;
            g = (y = Math.sqrt(y) * (h === o ? -1 : 1)) * u / c * D;
            m = -(y * c) / u * B;
            P = R(1, 0, b = (B - g) / u, _ = (D - m) / c);
            S = R(b, _, (-B - g) / u, (-D - m) / c);
            if (o === 0 && S > 0) {
                S -= w;
            }
            if (o === 1 && S < 0) {
                S += w;
            }
            T.centerX = k * g - M * m + (e + r) / 2;
            T.centerY = M * g + k * m + (i + s) / 2;
            T.ang1 = P;
            T.ang2 = S;
            let { ang1, ang2 } = T;
            let { centerX, centerY } = T;
            let V = Math.abs(ang2) / (w / 4);
            if (Math.abs(1 - V) < 1e-7) {
                V = 1;
            }
            let A = Math.max(Math.ceil(V), 1);
            ang2 /= A;
            let Z = t[t.length - 2];
            let E = t[t.length - 1];
            let H = {
                x: 0,
                y: 0
            };
            for(let e = 0; e < A; e++){
                let e = ((t, e)=>{
                    let i = -1.5707963267948966 === e ? -0.551915024494 : 4 / 3 * Math.tan(e / 4);
                    let r = e === 1.5707963267948966 ? 0.551915024494 : i;
                    let s = Math.cos(t);
                    let n = Math.sin(t);
                    let a = Math.cos(t + e);
                    let l = Math.sin(t + e);
                    return [
                        {
                            x: s - n * r,
                            y: n + s * r
                        },
                        {
                            x: a + l * r,
                            y: l - a * r
                        },
                        {
                            x: a,
                            y: l
                        }
                    ];
                })(ang1, ang2);
                let { x, y } = C(e[0], n, a, k, M, centerX, centerY, H);
                let { x: x_1, y: y_1 } = C(e[1], n, a, k, M, centerX, centerY, H);
                let { x: x_2, y: y_2 } = C(e[2], n, a, k, M, centerX, centerY, H);
                v(t, Z, E, x, y, x_1, y_1, x_2, y_2);
                Z = x_2;
                E = y_2;
                ang1 += ang2;
            }
        }
        function B(t, e, i) {
            let r = (t, e)=>{
                let i = e.x - t.x;
                let r = e.y - t.y;
                let len = Math.sqrt(i * i + r * r);
                return {
                    len,
                    nx: i / len,
                    ny: r / len
                };
            };
            let s = (e, i)=>{
                if (e === 0) {
                    t.moveTo(i.x, i.y);
                } else {
                    t.lineTo(i.x, i.y);
                }
            };
            let n = e[e.length - 1];
            for(let a = 0; a < e.length; a++){
                let l;
                let h = e[a % e.length];
                let o = h.radius ?? i;
                if (o <= 0) {
                    s(a, h);
                    n = h;
                    continue;
                }
                let u = e[(a + 1) % e.length];
                let c = r(h, n);
                let d = r(h, u);
                if (c.len < 0.0001 || d.len < 0.0001) {
                    s(a, h);
                    n = h;
                    continue;
                }
                let f = Math.asin(c.nx * d.ny - c.ny * d.nx);
                let p = 1;
                let x = false;
                c.nx * d.nx - -(c.ny * d.ny) < 0 ? f < 0 ? f = Math.PI + f : (f = Math.PI - f, p = -1, x = true) : f > 0 && (p = -1, x = true);
                let y = f / 2;
                let g = Math.abs(Math.cos(y) * o / Math.sin(y));
                l = g > Math.min(c.len / 2, d.len / 2) ? Math.abs((g = Math.min(c.len / 2, d.len / 2)) * Math.sin(y) / Math.cos(y)) : o;
                let m = h.x + d.nx * g + -d.ny * l * p;
                let b = h.y + d.ny * g + d.nx * l * p;
                let _ = Math.atan2(c.ny, c.nx) + Math.PI / 2 * p;
                let P = Math.atan2(d.ny, d.nx) - Math.PI / 2 * p;
                if (a === 0) {
                    t.moveTo(m + Math.cos(_) * l, b + Math.sin(_) * l);
                }
                t.arc(m, b, l, _, P, x);
                n = h;
            }
        }
        function D(t, e, i, r) {
            let s = (t, e)=>Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
            let n = (t, e, i)=>({
                    x: t.x + (e.x - t.x) * i,
                    y: t.y + (e.y - t.y) * i
                });
            let e_length = e.length;
            for(let l = 0; l < e_length; l++){
                let h;
                let o;
                let u = e[(l + 1) % e_length];
                let c = u.radius ?? i;
                if (c <= 0) {
                    if (l === 0) {
                        t.moveTo(u.x, u.y);
                    } else {
                        t.lineTo(u.x, u.y);
                    }
                    continue;
                }
                let d = e[l];
                let f = e[(l + 2) % e_length];
                let p = s(d, u);
                h = p < 0.0001 ? u : n(u, d, Math.min(p / 2, c) / p);
                let x = s(f, u);
                o = x < 0.0001 ? u : n(u, f, Math.min(x / 2, c) / x);
                if (l === 0) {
                    t.moveTo(h.x, h.y);
                } else {
                    t.lineTo(h.x, h.y);
                }
                t.quadraticCurveTo(u.x, u.y, o.x, o.y, r);
            }
        }
        t.s([
            "buildArcToSvg",
            0,
            z
        ], 225839);
        t.s([
            "roundedShapeArc",
            0,
            B,
            "roundedShapeQuadraticCurve",
            0,
            D
        ], 551370);
        let G = new h.Rectangle;
        class q {
            constructor(t){
                this.shapePrimitives = [];
                this._currentPoly = null;
                this._bounds = new u.Bounds;
                this._graphicsPath2D = t;
                this.signed = t.checkForHoles;
            }
            moveTo(t, e) {
                this.startPoly(t, e);
                return this;
            }
            lineTo(t, e) {
                this._ensurePoly();
                let points = this._currentPoly.points;
                let r = points[points.length - 2];
                let s = points[points.length - 1];
                if (r !== t || s !== e) {
                    points.push(t, e);
                }
                return this;
            }
            arc(t, e, i, r, s, n) {
                this._ensurePoly(false);
                M(this._currentPoly.points, t, e, i, r, s, n);
                return this;
            }
            arcTo(t, e, i, r, s) {
                this._ensurePoly();
                k(this._currentPoly.points, t, e, i, r, s);
                return this;
            }
            arcToSvg(t, e, i, r, s, n, a) {
                z(this._currentPoly.points, this._currentPoly.lastX, this._currentPoly.lastY, n, a, t, e, i, r, s);
                return this;
            }
            bezierCurveTo(t, e, i, r, s, n, a) {
                this._ensurePoly();
                let _currentPoly = this._currentPoly;
                v(this._currentPoly.points, _currentPoly.lastX, _currentPoly.lastY, t, e, i, r, s, n, a);
                return this;
            }
            quadraticCurveTo(t, e, i, r, s) {
                this._ensurePoly();
                let _currentPoly = this._currentPoly;
                S(this._currentPoly.points, _currentPoly.lastX, _currentPoly.lastY, t, e, i, r, s);
                return this;
            }
            closePath() {
                this.endPoly(true);
                return this;
            }
            addPath(t, e) {
                this.endPoly();
                if (e && !e.isIdentity()) {
                    (t = t.clone(true)).transform(e);
                }
                let shapePrimitives = this.shapePrimitives;
                let i_length = shapePrimitives.length;
                for(let e = 0; e < t.instructions.length; e++){
                    let instruction = t.instructions[e];
                    this[instruction.action](...instruction.data);
                }
                if (t.checkForHoles && shapePrimitives.length - i_length > 1) {
                    let t = null;
                    for(let e = i_length; e < shapePrimitives.length; e++){
                        let shapePrimitive = shapePrimitives[e];
                        if (shapePrimitive.shape.type === "polygon") {
                            let s = shapePrimitive.shape;
                            let n = t?.shape;
                            if (n && n.containsPolygon(s)) {
                                if (!t.holes) {
                                    t.holes = [];
                                }
                                t.holes.push(shapePrimitive);
                                shapePrimitives.copyWithin(e, e + 1);
                                shapePrimitives.length--;
                                e--;
                            } else {
                                t = shapePrimitive;
                            }
                        }
                    }
                }
                return this;
            }
            finish(t = false) {
                this.endPoly(t);
            }
            rect(t, e, i, r, s) {
                this.drawShape(new h.Rectangle(t, e, i, r), s);
                return this;
            }
            circle(t, e, i, r) {
                this.drawShape(new n.Circle(t, e, i), r);
                return this;
            }
            poly(t, e, i) {
                let r = new l.Polygon(t);
                r.closePath = e;
                this.drawShape(r, i);
                return this;
            }
            regularPoly(t, e, i, r, s = 0, n) {
                let a = -1 * Math.PI / 2 + s;
                let l = 2 * Math.PI / (r = Math.max(0 | r, 3));
                let h = [];
                for(let s = 0; s < r; s++){
                    let r = a - s * l;
                    h.push(t + i * Math.cos(r), e + i * Math.sin(r));
                }
                this.poly(h, true, n);
                return this;
            }
            roundPoly(t, e, i, r, s, n = 0, a) {
                r = Math.max(0 | r, 3);
                if (s <= 0) {
                    return this.regularPoly(t, e, i, r, n);
                }
                s = Math.min(s, i * Math.sin(Math.PI / r) - 0.001);
                let l = -1 * Math.PI / 2 + n;
                let h = 2 * Math.PI / r;
                let o = (r - 2) * Math.PI / r / 2;
                for(let n = 0; n < r; n++){
                    let r = n * h + l;
                    let u = t + i * Math.cos(r);
                    let c = e + i * Math.sin(r);
                    let d = r + Math.PI + o;
                    let f = r - Math.PI - o;
                    let p = u + s * Math.cos(d);
                    let x = c + s * Math.sin(d);
                    let y = u + s * Math.cos(f);
                    let g = c + s * Math.sin(f);
                    if (n === 0) {
                        this.moveTo(p, x);
                    } else {
                        this.lineTo(p, x);
                    }
                    this.quadraticCurveTo(u, c, y, g, a);
                }
                return this.closePath();
            }
            roundShape(t, e, i = false, r) {
                if (t.length < 3) {
                    return this;
                }
                if (i) {
                    D(this, t, e, r);
                } else {
                    B(this, t, e);
                }
                return this.closePath();
            }
            filletRect(t, e, i, r, s) {
                if (s === 0) {
                    return this.rect(t, e, i, r);
                }
                let n = Math.min(i, r) / 2;
                let a = Math.min(n, Math.max(-n, s));
                let l = t + i;
                let h = e + r;
                let o = a < 0 ? -a : 0;
                let u = Math.abs(a);
                return this.moveTo(t, e + u).arcTo(t + o, e + o, t + u, e, u).lineTo(l - u, e).arcTo(l - o, e + o, l, e + u, u).lineTo(l, h - u).arcTo(l - o, h - o, t + i - u, h, u).lineTo(t + u, h).arcTo(t + o, h - o, t, h - u, u).closePath();
            }
            chamferRect(t, e, i, r, s, n) {
                if (s <= 0) {
                    return this.rect(t, e, i, r);
                }
                let a = Math.min(s, Math.min(i, r) / 2);
                let l = t + i;
                let h = e + r;
                let o = [
                    t + a,
                    e,
                    l - a,
                    e,
                    l,
                    e + a,
                    l,
                    h - a,
                    l - a,
                    h,
                    t + a,
                    h,
                    t,
                    h - a,
                    t,
                    e + a
                ];
                for(let t = o.length - 1; t >= 2; t -= 2){
                    if (o[t] === o[t - 2] && o[t - 1] === o[t - 3]) {
                        o.splice(t - 1, 2);
                    }
                }
                return this.poly(o, true, n);
            }
            ellipse(t, e, i, r, s) {
                this.drawShape(new a.Ellipse(t, e, i, r), s);
                return this;
            }
            roundRect(t, e, i, r, s, n) {
                this.drawShape(new o.RoundedRectangle(t, e, i, r, s), n);
                return this;
            }
            drawShape(shape, transform) {
                this.endPoly();
                this.shapePrimitives.push({
                    shape,
                    transform
                });
                return this;
            }
            startPoly(t, e) {
                let _currentPoly = this._currentPoly;
                if (_currentPoly) {
                    this.endPoly();
                }
                (_currentPoly = new l.Polygon).points.push(t, e);
                this._currentPoly = _currentPoly;
                return this;
            }
            endPoly(t = false) {
                let _currentPoly = this._currentPoly;
                if (_currentPoly && _currentPoly.points.length > 2) {
                    _currentPoly.closePath = t;
                    this.shapePrimitives.push({
                        shape: _currentPoly
                    });
                }
                this._currentPoly = null;
                return this;
            }
            _ensurePoly(t = true) {
                if (!this._currentPoly && (this._currentPoly = new l.Polygon, t)) {
                    let t = this.shapePrimitives[this.shapePrimitives.length - 1];
                    if (t) {
                        let e = t.shape.x;
                        let i = t.shape.y;
                        if (t.transform && !t.transform.isIdentity()) {
                            let r = t.transform;
                            let s = e;
                            e = r.a * e + r.c * i + r.tx;
                            i = r.b * s + r.d * i + r.ty;
                        }
                        this._currentPoly.points.push(e, i);
                    } else {
                        this._currentPoly.points.push(0, 0);
                    }
                }
            }
            buildPath() {
                let _graphicsPath2D = this._graphicsPath2D;
                this.shapePrimitives.length = 0;
                this._currentPoly = null;
                for(let e = 0; e < _graphicsPath2D.instructions.length; e++){
                    let instruction = _graphicsPath2D.instructions[e];
                    this[instruction.action](...instruction.data);
                }
                this.finish();
            }
            get bounds() {
                let _bounds = this._bounds;
                _bounds.clear();
                let shapePrimitives = this.shapePrimitives;
                for(let i = 0; i < shapePrimitives.length; i++){
                    let shapePrimitive = shapePrimitives[i];
                    let s = shapePrimitive.shape.getBounds(G);
                    if (shapePrimitive.transform) {
                        _bounds.addRect(s, shapePrimitive.transform);
                    } else {
                        _bounds.addRect(s);
                    }
                }
                return _bounds;
            }
        }
        t.s([
            "ShapePath",
            0,
            q
        ], 121402);
        class F {
            constructor(t, e = false){
                this.instructions = [];
                this.uid = i.uid("graphicsPath");
                this._dirty = true;
                this.checkForHoles = e;
                if (typeof t === "string") {
                    s.parseSVGPath(t, this);
                } else {
                    this.instructions = t?.slice() ?? [];
                }
            }
            get shapePath() {
                if (!this._shapePath) {
                    this._shapePath = new q(this);
                }
                if (this._dirty) {
                    this._dirty = false;
                    this._shapePath.buildPath();
                }
                return this._shapePath;
            }
            addPath(t, e) {
                t = t.clone();
                this.instructions.push({
                    action: "addPath",
                    data: [
                        t,
                        e
                    ]
                });
                this._dirty = true;
                return this;
            }
            arc(...t) {
                this.instructions.push({
                    action: "arc",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            arcTo(...t) {
                this.instructions.push({
                    action: "arcTo",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            arcToSvg(...t) {
                this.instructions.push({
                    action: "arcToSvg",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            bezierCurveTo(...t) {
                this.instructions.push({
                    action: "bezierCurveTo",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            bezierCurveToShort(t, i, r, s, n) {
                let a = this.instructions[this.instructions.length - 1];
                let l = this.getLastPoint(e.Point.shared);
                let h = 0;
                let o = 0;
                if (a && a.action === "bezierCurveTo") {
                    h = a.data[2];
                    o = a.data[3];
                    let t = l.x;
                    let e = l.y;
                    h = t + (t - h);
                    o = e + (e - o);
                } else {
                    h = l.x;
                    o = l.y;
                }
                this.instructions.push({
                    action: "bezierCurveTo",
                    data: [
                        h,
                        o,
                        t,
                        i,
                        r,
                        s,
                        n
                    ]
                });
                this._dirty = true;
                return this;
            }
            closePath() {
                this.instructions.push({
                    action: "closePath",
                    data: []
                });
                this._dirty = true;
                return this;
            }
            ellipse(...t) {
                this.instructions.push({
                    action: "ellipse",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            lineTo(...t) {
                this.instructions.push({
                    action: "lineTo",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            moveTo(...t) {
                this.instructions.push({
                    action: "moveTo",
                    data: t
                });
                return this;
            }
            quadraticCurveTo(...t) {
                this.instructions.push({
                    action: "quadraticCurveTo",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            quadraticCurveToShort(t, i, r) {
                let s = this.instructions[this.instructions.length - 1];
                let n = this.getLastPoint(e.Point.shared);
                let a = 0;
                let l = 0;
                if (s && s.action === "quadraticCurveTo") {
                    a = s.data[0];
                    l = s.data[1];
                    let t = n.x;
                    let e = n.y;
                    a = t + (t - a);
                    l = e + (e - l);
                } else {
                    a = n.x;
                    l = n.y;
                }
                this.instructions.push({
                    action: "quadraticCurveTo",
                    data: [
                        a,
                        l,
                        t,
                        i,
                        r
                    ]
                });
                this._dirty = true;
                return this;
            }
            rect(t, e, i, r, s) {
                this.instructions.push({
                    action: "rect",
                    data: [
                        t,
                        e,
                        i,
                        r,
                        s
                    ]
                });
                this._dirty = true;
                return this;
            }
            circle(t, e, i, r) {
                this.instructions.push({
                    action: "circle",
                    data: [
                        t,
                        e,
                        i,
                        r
                    ]
                });
                this._dirty = true;
                return this;
            }
            roundRect(...t) {
                this.instructions.push({
                    action: "roundRect",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            poly(...t) {
                this.instructions.push({
                    action: "poly",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            regularPoly(...t) {
                this.instructions.push({
                    action: "regularPoly",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            roundPoly(...t) {
                this.instructions.push({
                    action: "roundPoly",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            roundShape(...t) {
                this.instructions.push({
                    action: "roundShape",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            filletRect(...t) {
                this.instructions.push({
                    action: "filletRect",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            chamferRect(...t) {
                this.instructions.push({
                    action: "chamferRect",
                    data: t
                });
                this._dirty = true;
                return this;
            }
            star(t, e, i, r, s, n, a) {
                if (!s) {
                    s = r / 2;
                }
                let l = -1 * Math.PI / 2 + n;
                let h = 2 * i;
                let o = 2 * Math.PI / h;
                let u = [];
                for(let i = 0; i < h; i++){
                    let n = i % 2 ? s : r;
                    let a = i * o + l;
                    u.push(t + n * Math.cos(a), e + n * Math.sin(a));
                }
                this.poly(u, true, a);
                return this;
            }
            clone(t = false) {
                let e = new F;
                e.checkForHoles = this.checkForHoles;
                if (t) {
                    for(let t = 0; t < this.instructions.length; t++){
                        let instruction = this.instructions[t];
                        e.instructions.push({
                            action: instruction.action,
                            data: instruction.data.slice()
                        });
                    }
                } else {
                    e.instructions = this.instructions.slice();
                }
                return e;
            }
            clear() {
                this.instructions.length = 0;
                this._dirty = true;
                return this;
            }
            transform(t) {
                if (t.isIdentity()) {
                    return this;
                }
                let e = t.a;
                let i = t.b;
                let s = t.c;
                let n = t.d;
                let a = t.tx;
                let l = t.ty;
                let h = 0;
                let o = 0;
                let u = 0;
                let c = 0;
                let d = 0;
                let f = 0;
                let p = 0;
                let x = 0;
                for(let y = 0; y < this.instructions.length; y++){
                    let instruction = this.instructions[y];
                    let m = instruction.data;
                    switch(instruction.action){
                        case "moveTo":
                        case "lineTo":
                            h = m[0];
                            o = m[1];
                            m[0] = e * h + s * o + a;
                            m[1] = i * h + n * o + l;
                            break;
                        case "bezierCurveTo":
                            u = m[0];
                            c = m[1];
                            d = m[2];
                            f = m[3];
                            h = m[4];
                            o = m[5];
                            m[0] = e * u + s * c + a;
                            m[1] = i * u + n * c + l;
                            m[2] = e * d + s * f + a;
                            m[3] = i * d + n * f + l;
                            m[4] = e * h + s * o + a;
                            m[5] = i * h + n * o + l;
                            break;
                        case "quadraticCurveTo":
                            u = m[0];
                            c = m[1];
                            h = m[2];
                            o = m[3];
                            m[0] = e * u + s * c + a;
                            m[1] = i * u + n * c + l;
                            m[2] = e * h + s * o + a;
                            m[3] = i * h + n * o + l;
                            break;
                        case "arcToSvg":
                            h = m[5];
                            o = m[6];
                            p = m[0];
                            x = m[1];
                            m[0] = e * p + s * x;
                            m[1] = i * p + n * x;
                            m[5] = e * h + s * o + a;
                            m[6] = i * h + n * o + l;
                            break;
                        case "circle":
                            m[4] = I(m[3], t);
                            break;
                        case "rect":
                            m[4] = I(m[4], t);
                            break;
                        case "ellipse":
                            m[8] = I(m[8], t);
                            break;
                        case "roundRect":
                        case "regularPoly":
                        case "chamferRect":
                            m[5] = I(m[5], t);
                            break;
                        case "addPath":
                            m[0].transform(t);
                            break;
                        case "poly":
                            m[2] = I(m[2], t);
                            break;
                        case "closePath":
                            break;
                        default:
                            r.warn("unknown transform action", instruction.action);
                    }
                }
                this._dirty = true;
                return this;
            }
            get bounds() {
                return this.shapePath.bounds;
            }
            getLastPoint(t) {
                let e = this.instructions.length - 1;
                let i = this.instructions[e];
                if (!i) {
                    t.x = 0;
                    t.y = 0;
                    return t;
                }
                while(i.action === "closePath"){
                    if (--e < 0) {
                        t.x = 0;
                        t.y = 0;
                        return t;
                    }
                    i = this.instructions[e];
                }
                switch(i.action){
                    case "moveTo":
                    case "lineTo":
                        t.x = i.data[0];
                        t.y = i.data[1];
                        break;
                    case "quadraticCurveTo":
                        t.x = i.data[2];
                        t.y = i.data[3];
                        break;
                    case "bezierCurveTo":
                        t.x = i.data[4];
                        t.y = i.data[5];
                        break;
                    case "arc":
                    case "arcToSvg":
                        t.x = i.data[5];
                        t.y = i.data[6];
                        break;
                    case "addPath":
                        i.data[0].getLastPoint(t);
                }
                return t;
            }
        }
        function I(t, e) {
            if (t) {
                return t.prepend(e);
            }
            return e.clone();
        }
        t.s([
            "GraphicsPath",
            0,
            F
        ], 115321);
        var L = t.i(222735);
        var V = t.i(419905);
        function A(t, e, i) {
            let r = t.getAttribute(e);
            if (r) {
                return Number(r);
            }
            return i;
        }
        function Z(t, e) {
            let i = t.querySelectorAll("defs");
            for(let t = 0; t < i.length; t++){
                let s = i[t];
                for(let t = 0; t < s.children.length; t++){
                    let child = s.children[t];
                    switch(child.nodeName.toLowerCase()){
                        case "lineargradient":
                            e.defs[child.id] = ((t)=>{
                                let e = A(t, "x1", 0);
                                let i = A(t, "y1", 0);
                                let r = A(t, "x2", 1);
                                let s = A(t, "y2", 0);
                                let n = t.getAttribute("gradientUnits") || "objectBoundingBox";
                                let a = new V.FillGradient(e, i, r, s, n === "objectBoundingBox" ? "local" : "global");
                                for(let e = 0; e < t.children.length; e++){
                                    let child_1 = t.children[e];
                                    let r = A(child_1, "offset", 0);
                                    let s = L.Color.shared.setValue(child_1.getAttribute("stop-color")).toNumber();
                                    a.addColorStop(r, s);
                                }
                                return a;
                            })(child);
                            break;
                        case "radialgradient":
                            e.defs[child.id] = (r.warn("[SVG Parser] Radial gradients are not yet supported"), new V.FillGradient(0, 0, 1, 0));
                    }
                }
            }
        }
        function E(t) {
            let e = t.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);
            if (e) {
                return e[1];
            }
            return "";
        }
        t.s([
            "parseSVGFloatAttribute",
            0,
            A
        ], 523994);
        t.s([
            "parseSVGDefinitions",
            0,
            Z
        ], 388850);
        t.s([
            "extractSvgUrlId",
            0,
            E
        ], 591069);
        let H = {
            fill: {
                type: "paint",
                default: 0
            },
            "fill-opacity": {
                type: "number",
                default: 1
            },
            stroke: {
                type: "paint",
                default: 0
            },
            "stroke-width": {
                type: "number",
                default: 1
            },
            "stroke-opacity": {
                type: "number",
                default: 1
            },
            "stroke-linecap": {
                type: "string",
                default: "butt"
            },
            "stroke-linejoin": {
                type: "string",
                default: "miter"
            },
            "stroke-miterlimit": {
                type: "number",
                default: 10
            },
            "stroke-dasharray": {
                type: "string",
                default: "none"
            },
            "stroke-dashoffset": {
                type: "number",
                default: 0
            },
            opacity: {
                type: "number",
                default: 1
            }
        };
        function O(t, e) {
            let i = t.getAttribute("style");
            let strokeStyle = {};
            let fillStyle = {};
            let n = {
                strokeStyle,
                fillStyle,
                useFill: false,
                useStroke: false
            };
            for(let i in H){
                let r = t.getAttribute(i);
                if (r) {
                    N(e, n, i, r.trim());
                }
            }
            if (i) {
                let t = i.split(";");
                for(let i = 0; i < t.length; i++){
                    let [r, s] = t[i].trim().split(":");
                    if (H[r]) {
                        N(e, n, r, s.trim());
                    }
                }
            }
            return {
                strokeStyle: n.useStroke ? strokeStyle : null,
                fillStyle: n.useFill ? fillStyle : null,
                useFill: n.useFill,
                useStroke: n.useStroke
            };
        }
        function N(t, e, i, r) {
            switch(i){
                case "stroke":
                    if (r !== "none") {
                        if (r.startsWith("url(")) {
                            let i = E(r);
                            e.strokeStyle.fill = t.defs[i];
                        } else {
                            e.strokeStyle.color = L.Color.shared.setValue(r).toNumber();
                        }
                        e.useStroke = true;
                    }
                    break;
                case "stroke-width":
                    e.strokeStyle.width = Number(r);
                    break;
                case "fill":
                    if (r !== "none") {
                        if (r.startsWith("url(")) {
                            let i = E(r);
                            e.fillStyle.fill = t.defs[i];
                        } else {
                            e.fillStyle.color = L.Color.shared.setValue(r).toNumber();
                        }
                        e.useFill = true;
                    }
                    break;
                case "fill-opacity":
                    e.fillStyle.alpha = Number(r);
                    break;
                case "stroke-opacity":
                    e.strokeStyle.alpha = Number(r);
                    break;
                case "opacity":
                    e.fillStyle.alpha = Number(r);
                    e.strokeStyle.alpha = Number(r);
            }
        }
        function W(t) {
            if (t.length <= 2) {
                return true;
            }
            let e = t.map((t)=>t.area).sort((t, e)=>e - t);
            let [i, r] = e;
            let s = e[e.length - 1];
            return !(i / r > 3) || !(r / s < 2);
        }
        function $(t) {
            return t.split(/(?=[Mm])/).filter((t)=>t.trim().length > 0);
        }
        function U(t) {
            let e = t.match(/[-+]?[0-9]*\.?[0-9]+/g);
            if (!e || e.length < 4) {
                return 0;
            }
            let i = e.map(Number);
            let r = [];
            let s = [];
            for(let t = 0; t < i.length; t += 2){
                if (t + 1 < i.length) {
                    r.push(i[t]);
                    s.push(i[t + 1]);
                }
            }
            if (r.length === 0 || s.length === 0) {
                return 0;
            }
            let n = Math.min(...r);
            let a = Math.min(...s);
            return (Math.max(...r) - n) * (Math.max(...s) - a);
        }
        function j(t, e) {
            for (let i of new F(t, false).instructions){
                e.instructions.push(i);
            }
        }
        t.s([
            "parseSVGStyle",
            0,
            O,
            "styleAttributes",
            0,
            H
        ], 437324);
        t.s([
            "checkForNestedPattern",
            0,
            W,
            "getFillInstructionData",
            0,
            (t, e = 0)=>{
                let i = t.instructions[e];
                if (!i || i.action !== "fill") {
                    throw Error(`Expected fill instruction at index ${e}, got ${i?.action || "undefined"}`);
                }
                return i.data;
            }
        ], 898512);
        t.s([
            "appendSVGPath",
            0,
            j,
            "calculatePathArea",
            0,
            U,
            "extractSubpaths",
            0,
            $
        ], 470618);
        t.s([
            "SVGParser",
            0,
            (t, e)=>{
                if (typeof t === "string") {
                    let e = document.createElement("div");
                    e.innerHTML = t.trim();
                    t = e.querySelector("svg");
                }
                let i = {
                    context: e,
                    defs: {},
                    path: new F
                };
                Z(t, i);
                let t_children = t.children;
                let { fillStyle, strokeStyle } = O(t, i);
                for(let t = 0; t < t_children.length; t++){
                    let child = t_children[t];
                    if (child.nodeName.toLowerCase() !== "defs") {
                        (function t(e, i, s, n) {
                            let a;
                            let l;
                            let h;
                            let o;
                            let u;
                            let c;
                            let d;
                            let f;
                            let p;
                            let x;
                            let y;
                            let g;
                            let m;
                            let b;
                            let _;
                            let P;
                            let e_children = e.children;
                            let { fillStyle, strokeStyle } = O(e, i);
                            if (fillStyle && s) {
                                s = {
                                    ...s,
                                    ...fillStyle
                                };
                            } else if (fillStyle) {
                                s = fillStyle;
                            }
                            if (strokeStyle && n) {
                                n = {
                                    ...n,
                                    ...strokeStyle
                                };
                            } else if (strokeStyle) {
                                n = strokeStyle;
                            }
                            let k = !s && !n;
                            if (k) {
                                s = {
                                    color: 0
                                };
                            }
                            switch(e.nodeName.toLowerCase()){
                                case "path":
                                    {
                                        m = e.getAttribute("d");
                                        let t = e.getAttribute("fill-rule");
                                        let r = $(m);
                                        let a = r.length > 1;
                                        if (t === "evenodd" && a) {
                                            let t = r.map((t)=>({
                                                    path: t,
                                                    area: U(t)
                                                }));
                                            t.sort((t, e)=>e.area - t.area);
                                            if (r.length > 3 || !W(t)) {
                                                for(let e = 0; e < t.length; e++){
                                                    let r = t[e];
                                                    let a = e === 0;
                                                    i.context.beginPath();
                                                    let l = new F(undefined, true);
                                                    j(r.path, l);
                                                    i.context.path(l);
                                                    if (a) {
                                                        if (s) {
                                                            i.context.fill(s);
                                                        }
                                                        if (n) {
                                                            i.context.stroke(n);
                                                        }
                                                    } else {
                                                        i.context.cut();
                                                    }
                                                }
                                            } else {
                                                for(let e = 0; e < t.length; e++){
                                                    let r = t[e];
                                                    let a = e % 2 == 1;
                                                    i.context.beginPath();
                                                    let l = new F(undefined, true);
                                                    j(r.path, l);
                                                    i.context.path(l);
                                                    if (a) {
                                                        i.context.cut();
                                                    } else {
                                                        if (s) {
                                                            i.context.fill(s);
                                                        }
                                                        if (n) {
                                                            i.context.stroke(n);
                                                        }
                                                    }
                                                }
                                            }
                                        } else {
                                            b = new F(m, !t || t === "evenodd");
                                            i.context.path(b);
                                            if (s) {
                                                i.context.fill(s);
                                            }
                                            if (n) {
                                                i.context.stroke(n);
                                            }
                                        }
                                        break;
                                    }
                                case "circle":
                                    d = A(e, "cx", 0);
                                    f = A(e, "cy", 0);
                                    p = A(e, "r", 0);
                                    i.context.ellipse(d, f, p, p);
                                    if (s) {
                                        i.context.fill(s);
                                    }
                                    if (n) {
                                        i.context.stroke(n);
                                    }
                                    break;
                                case "rect":
                                    a = A(e, "x", 0);
                                    l = A(e, "y", 0);
                                    _ = A(e, "width", 0);
                                    P = A(e, "height", 0);
                                    x = A(e, "rx", 0);
                                    y = A(e, "ry", 0);
                                    if (x || y) {
                                        i.context.roundRect(a, l, _, P, x || y);
                                    } else {
                                        i.context.rect(a, l, _, P);
                                    }
                                    if (s) {
                                        i.context.fill(s);
                                    }
                                    if (n) {
                                        i.context.stroke(n);
                                    }
                                    break;
                                case "ellipse":
                                    d = A(e, "cx", 0);
                                    f = A(e, "cy", 0);
                                    x = A(e, "rx", 0);
                                    y = A(e, "ry", 0);
                                    i.context.beginPath();
                                    i.context.ellipse(d, f, x, y);
                                    if (s) {
                                        i.context.fill(s);
                                    }
                                    if (n) {
                                        i.context.stroke(n);
                                    }
                                    break;
                                case "line":
                                    h = A(e, "x1", 0);
                                    o = A(e, "y1", 0);
                                    u = A(e, "x2", 0);
                                    c = A(e, "y2", 0);
                                    i.context.beginPath();
                                    i.context.moveTo(h, o);
                                    i.context.lineTo(u, c);
                                    if (n) {
                                        i.context.stroke(n);
                                    }
                                    break;
                                case "polygon":
                                    g = e.getAttribute("points").match(/-?\d+/g).map((t)=>parseInt(t, 10));
                                    i.context.poly(g, true);
                                    if (s) {
                                        i.context.fill(s);
                                    }
                                    if (n) {
                                        i.context.stroke(n);
                                    }
                                    break;
                                case "polyline":
                                    g = e.getAttribute("points").match(/-?\d+/g).map((t)=>parseInt(t, 10));
                                    i.context.poly(g, false);
                                    if (n) {
                                        i.context.stroke(n);
                                    }
                                    break;
                                case "g":
                                case "svg":
                                    break;
                                default:
                                    r.warn(`[SVG parser] <${e.nodeName}> elements unsupported`);
                            }
                            if (k) {
                                s = null;
                            }
                            for(let e = 0; e < e_children.length; e++){
                                t(e_children[e], i, s, n);
                            }
                        })(child, i, fillStyle, strokeStyle);
                    }
                }
                return e;
            }
        ], 569176);
    },
    380762,
    547416,
    547417,
    866836,
    163062,
    140427,
    (t)=>{
        "use strict";
        let e;
        let i;
        let r = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        };
        let s = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
        let n = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
        var a = t.i(562140);
        t.s([
            "parseSVGPath",
            0,
            (t, e)=>{
                let i;
                i = [];
                t.replace(s, (t, e, s)=>{
                    let a;
                    let l = e.toLowerCase();
                    let h = e;
                    let o = (a = s.match(n)) ? a.map(Number) : [];
                    for(l === "m" && o.length > 2 && (i.push([
                        h,
                        ...o.splice(0, 2)
                    ]), l = "l", h = h === "m" ? "l" : "L");;){
                        if (o.length === r[l]) {
                            i.push([
                                h,
                                ...o
                            ]);
                            return "";
                        }
                        if (o.length < r[l]) {
                            throw Error("malformed path data");
                        }
                        i.push([
                            h,
                            ...o.splice(0, r[l])
                        ]);
                    }
                });
                let l = i;
                let h = [];
                let o = null;
                let startX = 0;
                let startY = 0;
                for(let t = 0; t < l.length; t++){
                    let i = l[t];
                    let r = i[0];
                    switch(r){
                        case "M":
                            startX = i[1];
                            startY = i[2];
                            e.moveTo(startX, startY);
                            break;
                        case "m":
                            startX += i[1];
                            startY += i[2];
                            e.moveTo(startX, startY);
                            break;
                        case "H":
                            startX = i[1];
                            e.lineTo(startX, startY);
                            break;
                        case "h":
                            startX += i[1];
                            e.lineTo(startX, startY);
                            break;
                        case "V":
                            startY = i[1];
                            e.lineTo(startX, startY);
                            break;
                        case "v":
                            startY += i[1];
                            e.lineTo(startX, startY);
                            break;
                        case "L":
                            startX = i[1];
                            startY = i[2];
                            e.lineTo(startX, startY);
                            break;
                        case "l":
                            startX += i[1];
                            startY += i[2];
                            e.lineTo(startX, startY);
                            break;
                        case "C":
                            startX = i[5];
                            startY = i[6];
                            e.bezierCurveTo(i[1], i[2], i[3], i[4], startX, startY);
                            break;
                        case "c":
                            e.bezierCurveTo(startX + i[1], startY + i[2], startX + i[3], startY + i[4], startX + i[5], startY + i[6]);
                            startX += i[5];
                            startY += i[6];
                            break;
                        case "S":
                            startX = i[3];
                            startY = i[4];
                            e.bezierCurveToShort(i[1], i[2], startX, startY);
                            break;
                        case "s":
                            e.bezierCurveToShort(startX + i[1], startY + i[2], startX + i[3], startY + i[4]);
                            startX += i[3];
                            startY += i[4];
                            break;
                        case "Q":
                            startX = i[3];
                            startY = i[4];
                            e.quadraticCurveTo(i[1], i[2], startX, startY);
                            break;
                        case "q":
                            e.quadraticCurveTo(startX + i[1], startY + i[2], startX + i[3], startY + i[4]);
                            startX += i[3];
                            startY += i[4];
                            break;
                        case "T":
                            startX = i[1];
                            startY = i[2];
                            e.quadraticCurveToShort(startX, startY);
                            break;
                        case "t":
                            startX += i[1];
                            startY += i[2];
                            e.quadraticCurveToShort(startX, startY);
                            break;
                        case "A":
                            startX = i[6];
                            startY = i[7];
                            e.arcToSvg(i[1], i[2], i[3], i[4], i[5], startX, startY);
                            break;
                        case "a":
                            startX += i[6];
                            startY += i[7];
                            e.arcToSvg(i[1], i[2], i[3], i[4], i[5], startX, startY);
                            break;
                        case "Z":
                        case "z":
                            e.closePath();
                            h.length > 0 && ((o = h.pop()) ? (startX = o.startX, startY = o.startY) : (startX = 0, startY = 0));
                            o = null;
                            break;
                        default:
                            a.warn(`Unknown SVG path command: ${r}`);
                    }
                    if (r !== "Z" && r !== "z" && o === null) {
                        o = {
                            startX,
                            startY
                        };
                        h.push(o);
                    }
                }
                return e;
            }
        ], 380762);
        var l = t.i(539088);
        t.s([
            "Circle",
            0,
            class t {
                constructor(t = 0, e = 0, i = 0){
                    this.type = "circle";
                    this.x = t;
                    this.y = e;
                    this.radius = i;
                }
                clone() {
                    return new t(this.x, this.y, this.radius);
                }
                contains(t, e) {
                    if (this.radius <= 0) {
                        return false;
                    }
                    let i = this.radius * this.radius;
                    let r = this.x - t;
                    let s = this.y - e;
                    r *= r;
                    s *= s;
                    return r + s <= i;
                }
                strokeContains(t, e, i, r = 0.5) {
                    if (this.radius === 0) {
                        return false;
                    }
                    let s = this.x - t;
                    let n = this.y - e;
                    let radius = this.radius;
                    let l = (1 - r) * i;
                    let h = Math.sqrt(s * s + n * n);
                    return h <= radius + l && h > radius - (i - l);
                }
                getBounds(t) {
                    if (!t) {
                        t = new l.Rectangle;
                    }
                    t.x = this.x - this.radius;
                    t.y = this.y - this.radius;
                    t.width = 2 * this.radius;
                    t.height = 2 * this.radius;
                    return t;
                }
                copyFrom(t) {
                    this.x = t.x;
                    this.y = t.y;
                    this.radius = t.radius;
                    return this;
                }
                copyTo(t) {
                    t.copyFrom(this);
                    return t;
                }
                toString() {
                    return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
                }
            }
        ], 547416);
        t.s([
            "Ellipse",
            0,
            class t {
                constructor(t = 0, e = 0, i = 0, r = 0){
                    this.type = "ellipse";
                    this.x = t;
                    this.y = e;
                    this.halfWidth = i;
                    this.halfHeight = r;
                }
                clone() {
                    return new t(this.x, this.y, this.halfWidth, this.halfHeight);
                }
                contains(t, e) {
                    if (this.halfWidth <= 0 || this.halfHeight <= 0) {
                        return false;
                    }
                    let i = (t - this.x) / this.halfWidth;
                    let r = (e - this.y) / this.halfHeight;
                    i *= i;
                    r *= r;
                    return i + r <= 1;
                }
                strokeContains(t, e, i, r = 0.5) {
                    let { halfWidth, halfHeight } = this;
                    if (halfWidth <= 0 || halfHeight <= 0) {
                        return false;
                    }
                    let a = i * (1 - r);
                    let l = i - a;
                    let h = halfWidth - l;
                    let o = halfHeight - l;
                    let u = halfWidth + a;
                    let c = halfHeight + a;
                    let d = t - this.x;
                    let f = e - this.y;
                    return d * d / (h * h) + f * f / (o * o) > 1 && d * d / (u * u) + f * f / (c * c) <= 1;
                }
                getBounds(t) {
                    if (!t) {
                        t = new l.Rectangle;
                    }
                    t.x = this.x - this.halfWidth;
                    t.y = this.y - this.halfHeight;
                    t.width = 2 * this.halfWidth;
                    t.height = 2 * this.halfHeight;
                    return t;
                }
                copyFrom(t) {
                    this.x = t.x;
                    this.y = t.y;
                    this.halfWidth = t.halfWidth;
                    this.halfHeight = t.halfHeight;
                    return this;
                }
                copyTo(t) {
                    t.copyFrom(this);
                    return t;
                }
                toString() {
                    return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`;
                }
            }
        ], 547417);
        var h = t.i(727905);
        function o(t, e, i, r, s, n) {
            let a;
            let l;
            let h = s - i;
            let o = n - r;
            let u = h * h + o * o;
            let c = -1;
            if (u !== 0) {
                c = ((t - i) * h + (e - r) * o) / u;
            }
            if (c < 0) {
                a = i;
                l = r;
            } else if (c > 1) {
                a = s;
                l = n;
            } else {
                a = i + c * h;
                l = r + c * o;
            }
            let d = t - a;
            let f = e - l;
            return d * d + f * f;
        }
        t.s([
            "squaredDistanceToLineSegment",
            0,
            o
        ], 866836);
        t.s([
            "Polygon",
            0,
            class t {
                constructor(...t){
                    this.type = "polygon";
                    let e = Array.isArray(t[0]) ? t[0] : t;
                    if (typeof e[0] !== "number") {
                        const t = [];
                        for(let i = 0, r = e.length; i < r; i++){
                            t.push(e[i].x, e[i].y);
                        }
                        e = t;
                    }
                    this.points = e;
                    this.closePath = true;
                }
                isClockwise() {
                    let t = 0;
                    let points = this.points;
                    let e_length = points.length;
                    for(let r = 0; r < e_length; r += 2){
                        let s = points[r];
                        let n = points[r + 1];
                        t += (points[(r + 2) % e_length] - s) * (points[(r + 3) % e_length] + n);
                    }
                    return t < 0;
                }
                containsPolygon(t) {
                    let r = this.getBounds(e);
                    let s = t.getBounds(i);
                    if (!r.containsRect(s)) {
                        return false;
                    }
                    let t_points = t.points;
                    for(let t = 0; t < t_points.length; t += 2){
                        let point = t_points[t];
                        let i = t_points[t + 1];
                        if (!this.contains(point, i)) {
                            return false;
                        }
                    }
                    return true;
                }
                clone() {
                    let e = new t(this.points.slice());
                    e.closePath = this.closePath;
                    return e;
                }
                contains(t, e) {
                    let i = false;
                    let r = this.points.length / 2;
                    for(let s = 0, n = r - 1; s < r; n = s++){
                        let r = this.points[2 * s];
                        let a = this.points[2 * s + 1];
                        let l = this.points[2 * n];
                        let h = this.points[2 * n + 1];
                        if (a > e != h > e && t < (e - a) / (h - a) * (l - r) + r) {
                            i = !i;
                        }
                    }
                    return i;
                }
                strokeContains(t, e, i, r = 0.5) {
                    let s = i * i;
                    let n = s * (1 - r);
                    let a = s - n;
                    let { points } = this;
                    let h = points.length - 2 * !this.closePath;
                    for(let i = 0; i < h; i += 2){
                        let r = points[i];
                        let s = points[i + 1];
                        let h = points[(i + 2) % points.length];
                        let u = points[(i + 3) % points.length];
                        if (o(t, e, r, s, h, u) <= (Math.sign((h - r) * (e - s) - (u - s) * (t - r)) < 0 ? a : n)) {
                            return true;
                        }
                    }
                    return false;
                }
                getBounds(t) {
                    if (!t) {
                        t = new l.Rectangle;
                    }
                    let points = this.points;
                    let i = Infinity;
                    let r = -Infinity;
                    let s = Infinity;
                    let n = -Infinity;
                    for(let t = 0, a = points.length; t < a; t += 2){
                        let point = points[t];
                        let l = points[t + 1];
                        i = point < i ? point : i;
                        r = point > r ? point : r;
                        s = l < s ? l : s;
                        n = l > n ? l : n;
                    }
                    t.x = i;
                    t.width = r - i;
                    t.y = s;
                    t.height = n - s;
                    return t;
                }
                copyFrom(t) {
                    this.points = t.points.slice();
                    this.closePath = t.closePath;
                    return this;
                }
                copyTo(t) {
                    t.copyFrom(this);
                    return t;
                }
                toString() {
                    return `[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((acc, point)=>`${acc}, ${point}`, "")}]`;
                }
                get lastX() {
                    return this.points[this.points.length - 2];
                }
                get lastY() {
                    return this.points[this.points.length - 1];
                }
                get x() {
                    h.deprecation("8.11.0", "Polygon.lastX is deprecated, please use Polygon.lastX instead.");
                    return this.points[this.points.length - 2];
                }
                get y() {
                    h.deprecation("8.11.0", "Polygon.y is deprecated, please use Polygon.lastY instead.");
                    return this.points[this.points.length - 1];
                }
                get startX() {
                    return this.points[0];
                }
                get startY() {
                    return this.points[1];
                }
            }
        ], 163062);
        let u = (t, e, i, r, radius, n, a)=>{
            let l = t - i;
            let h = e - r;
            let o = Math.sqrt(l * l + h * h);
            return o >= radius - n && o <= radius + a;
        };
        t.s([
            "RoundedRectangle",
            0,
            class t {
                constructor(t = 0, e = 0, i = 0, r = 0, s = 20){
                    this.type = "roundedRectangle";
                    this.x = t;
                    this.y = e;
                    this.width = i;
                    this.height = r;
                    this.radius = s;
                }
                getBounds(t) {
                    if (!t) {
                        t = new l.Rectangle;
                    }
                    t.x = this.x;
                    t.y = this.y;
                    t.width = this.width;
                    t.height = this.height;
                    return t;
                }
                clone() {
                    return new t(this.x, this.y, this.width, this.height, this.radius);
                }
                copyFrom(t) {
                    this.x = t.x;
                    this.y = t.y;
                    this.width = t.width;
                    this.height = t.height;
                    return this;
                }
                copyTo(t) {
                    t.copyFrom(this);
                    return t;
                }
                contains(t, e) {
                    if (this.width <= 0 || this.height <= 0) {
                        return false;
                    }
                    if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                        let i = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
                        if (e >= this.y + i && e <= this.y + this.height - i || t >= this.x + i && t <= this.x + this.width - i) {
                            return true;
                        }
                        let r = t - (this.x + i);
                        let s = e - (this.y + i);
                        let n = i * i;
                        if (r * r + s * s <= n || (r = t - (this.x + this.width - i)) * r + s * s <= n || r * r + (s = e - (this.y + this.height - i)) * s <= n || (r = t - (this.x + i)) * r + s * s <= n) {
                            return true;
                        }
                    }
                    return false;
                }
                strokeContains(t, e, i, r = 0.5) {
                    let { x: x_1, y: y_1, width, height, radius } = this;
                    let o = i * (1 - r);
                    let c = i - o;
                    let d = x_1 + radius;
                    let f = y_1 + radius;
                    let p = width - 2 * radius;
                    let x = height - 2 * radius;
                    let y = x_1 + width;
                    let g = y_1 + height;
                    return (t >= x_1 - o && t <= x_1 + c || t >= y - c && t <= y + o) && e >= f && e <= f + x || (e >= y_1 - o && e <= y_1 + c || e >= g - c && e <= g + o) && t >= d && t <= d + p || t < d && e < f && u(t, e, d, f, radius, c, o) || t > y - radius && e < f && u(t, e, y - radius, f, radius, c, o) || t > y - radius && e > g - radius && u(t, e, y - radius, g - radius, radius, c, o) || t < d && e > g - radius && u(t, e, d, g - radius, radius, c, o);
                }
                toString() {
                    return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
                }
            }
        ], 140427);
    },
    967030,
    12746,
    (t)=>{
        "use strict";
        var e = t.i(78278);
        var i = t.i(389474);
        var r = t.i(539088);
        var s = t.i(81846);
        var n = t.i(955424);
        var a = t.i(337654);
        var l = t.i(765480);
        var h = t.i(882825);
        var o = t.i(930005);
        var u = t.i(625533);
        var c = t.i(53116);
        var d = t.i(912667);
        var f = t.i(816359);
        var p = t.i(769047);
        var x = t.i(419905);
        let y = new i.Matrix;
        let g = new r.Rectangle;
        function m(t, e, i, r) {
            let s = e.matrix ? t.copyFrom(e.matrix).invert() : t.identity();
            if (e.textureSpace === "local") {
                let t = i.getBounds(g);
                if (e.width) {
                    t.pad(e.width);
                }
                let { x, y } = t;
                let a = 1 / t.width;
                let l = 1 / t.height;
                let h = -x * a;
                let o = -y * l;
                let u = s.a;
                let c = s.b;
                let d = s.c;
                let f = s.d;
                s.a *= a;
                s.b *= a;
                s.c *= l;
                s.d *= l;
                s.tx = h * u + o * d + s.tx;
                s.ty = h * c + o * f + s.ty;
            } else {
                s.translate(e.texture.frame.x, e.texture.frame.y);
                s.scale(1 / e.texture.source.width, 1 / e.texture.source.height);
            }
            let style = e.texture.source.style;
            if (!(e.fill instanceof x.FillGradient || style.addressMode !== "clamp-to-edge")) {
                style.addressMode = "repeat";
                style.update();
            }
            if (r) {
                s.append(y.copyFrom(r).invert());
            }
            return s;
        }
        t.s([
            "generateTextureMatrix",
            0,
            m
        ], 12746);
        var b = t.i(752046);
        let _ = {};
        e.extensions.handleByMap(e.ExtensionType.ShapeBuilder, _);
        e.extensions.add(f.buildRectangle, d.buildPolygon, p.buildTriangle, o.buildCircle, o.buildEllipse, o.buildRoundedRectangle);
        let P = new r.Rectangle;
        let v = new i.Matrix;
        function S(t, e, i, batches, geometryData) {
            let { vertices, uvs, indices } = geometryData;
            t.shapePrimitives.forEach(({ shape, transform, holes })=>{
                let g = [];
                let P = _[shape.type];
                if (!P.build(shape, g)) {
                    return;
                }
                let indices_length = indices.length;
                let M = vertices.length / 2;
                let k = "triangle-list";
                if (transform) {
                    n.transformVertices(g, transform);
                }
                if (i) {
                    let i = shape.closePath ?? true;
                    if (e.pixelLine) {
                        c.buildPixelLine(g, i, vertices, indices);
                        k = "line-list";
                    } else {
                        u.buildLine(g, e, false, i, vertices, indices);
                    }
                } else if (holes) {
                    let t = [];
                    let e = g.slice();
                    ((t)=>{
                        let e = [];
                        for(let i = 0; i < t.length; i++){
                            let r = t[i].shape;
                            let s = [];
                            if (_[r.type].build(r, s)) {
                                e.push(s);
                            }
                        }
                        return e;
                    })(holes).forEach((i)=>{
                        t.push(e.length / 2);
                        e.push(...i);
                    });
                    b.triangulateWithHoles(e, t, vertices, 2, M, indices, indices_length);
                } else {
                    P.triangulate(g, vertices, 2, M, indices, indices_length);
                }
                let w = uvs.length / 2;
                let e_texture = e.texture;
                if (e_texture !== a.Texture.WHITE) {
                    let i = m(v, e, shape, transform);
                    s.buildUvs(vertices, 2, M, uvs, w, 2, vertices.length / 2 - M, i);
                } else {
                    s.buildSimpleUvs(uvs, w, 2, vertices.length / 2 - M);
                }
                let C = l.BigPool.get(h.BatchableGraphics);
                C.indexOffset = indices_length;
                C.indexSize = indices.length - indices_length;
                C.attributeOffset = M;
                C.attributeSize = vertices.length / 2 - M;
                C.baseColor = e.color;
                C.alpha = e.alpha;
                C.texture = e_texture;
                C.geometryData = geometryData;
                C.topology = k;
                batches.push(C);
            });
        }
        t.s([
            "buildContextBatches",
            0,
            (t, e)=>{
                let { geometryData, batches } = e;
                batches.length = 0;
                geometryData.indices.length = 0;
                geometryData.vertices.length = 0;
                geometryData.uvs.length = 0;
                for(let e = 0; e < t.instructions.length; e++){
                    let instruction = t.instructions[e];
                    if (instruction.action === "texture") {
                        !((t, e, i)=>{
                            let r = [];
                            let __rectangle = _.rectangle;
                            P.x = t.dx;
                            P.y = t.dy;
                            P.width = t.dw;
                            P.height = t.dh;
                            let t_transform = t.transform;
                            if (!__rectangle.build(P, r)) {
                                return;
                            }
                            let { vertices, uvs, indices } = i;
                            let indices_length = indices.length;
                            let f = vertices.length / 2;
                            if (t_transform) {
                                n.transformVertices(r, t_transform);
                            }
                            __rectangle.triangulate(r, vertices, 2, f, indices, indices_length);
                            let t_image = t.image;
                            let p_uvs = t_image.uvs;
                            uvs.push(p_uvs.x0, p_uvs.y0, p_uvs.x1, p_uvs.y1, p_uvs.x3, p_uvs.y3, p_uvs.x2, p_uvs.y2);
                            let y = l.BigPool.get(h.BatchableGraphics);
                            y.indexOffset = indices_length;
                            y.indexSize = indices.length - indices_length;
                            y.attributeOffset = f;
                            y.attributeSize = vertices.length / 2 - f;
                            y.baseColor = t.style;
                            y.alpha = t.alpha;
                            y.texture = t_image;
                            y.geometryData = i;
                            e.push(y);
                        })(instruction.data, batches, geometryData);
                    } else if (instruction.action === "fill" || instruction.action === "stroke") {
                        let t = instruction.action === "stroke";
                        let e = instruction.data.path.shapePath;
                        let n = instruction.data.style;
                        let a = instruction.data.hole;
                        if (t && a) {
                            S(a.shapePath, n, true, batches, geometryData);
                        }
                        if (a) {
                            e.shapePrimitives[e.shapePrimitives.length - 1].holes = a.shapePath.shapePrimitives;
                        }
                        S(e, n, t, batches, geometryData);
                    }
                }
            },
            "shapeBuilders",
            0,
            _
        ], 967030);
    }
]);
