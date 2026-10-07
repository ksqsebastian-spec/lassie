;
!(()=>{
    try {
        const e = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {};
        const n = (new e.Error).stack;
        if (n) {
            (e._debugIds || (e._debugIds = {}))[n] = "87590345-7b14-5189-9899-7fefa486fb02";
        }
    } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    typeof document === "object" ? document.currentScript : undefined,
    653743,
    (e, t, r)=>{
        "use strict";
        function n(e, t = Object) {
            if (t && typeof t.freeze === "function") {
                return t.freeze(e);
            }
            return e;
        }
        var i = n({
            HTML: "text/html",
            isHTML (e) {
                return e === i.HTML;
            },
            XML_APPLICATION: "application/xml",
            XML_TEXT: "text/xml",
            XML_XHTML_APPLICATION: "application/xhtml+xml",
            XML_SVG_IMAGE: "image/svg+xml"
        });
        var a = n({
            HTML: "http://www.w3.org/1999/xhtml",
            isHTML (e) {
                return e === a.HTML;
            },
            SVG: "http://www.w3.org/2000/svg",
            XML: "http://www.w3.org/XML/1998/namespace",
            XMLNS: "http://www.w3.org/2000/xmlns/"
        });
        r.assign = (e, t)=>{
            if (e === null || typeof e !== "object") {
                throw TypeError("target is not an object");
            }
            for(const r in t){
                if (Object.prototype.hasOwnProperty.call(t, r)) {
                    e[r] = t[r];
                }
            }
            return e;
        };
        r.find = (e, t, r = Array.prototype)=>{
            if (e && typeof r.find === "function") {
                return r.find.call(e, t);
            }
            for(let n = 0; n < e.length; n++){
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    const i = e[n];
                    if (t.call(undefined, i, n, e)) {
                        return i;
                    }
                }
            }
        };
        r.freeze = n;
        r.MIME_TYPE = i;
        r.NAMESPACE = a;
    },
    577923,
    (e, t, r)=>{
        var n = e.r(653743);
        var n_find = n.find;
        var n_NAMESPACE = n.NAMESPACE;
        function o(e) {
            return e !== "";
        }
        function s(e, t) {
            if (!e.hasOwnProperty(t)) {
                e[t] = true;
            }
            return e;
        }
        function l(e) {
            if (e) {
                return Object.keys((e ? e.split(/[\t\n\f\r ]+/).filter(o) : []).reduce(s, {}));
            }
            return [];
        }
        function u(e, t) {
            for(const r in e){
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    t[r] = e[r];
                }
            }
        }
        function c(e, t) {
            let e_prototype = e.prototype;
            if (!(e_prototype instanceof t)) {
                function n() {}
                n.prototype = t.prototype;
                u(e_prototype, n = new n);
                e.prototype = e_prototype = n;
            }
            if (e_prototype.constructor != e) {
                if (typeof e !== "function") {
                    console.error("unknown Class:" + e);
                }
                e_prototype.constructor = e;
            }
        }
        var d = {};
        var h = d.ELEMENT_NODE = 1;
        var p = d.ATTRIBUTE_NODE = 2;
        var f = d.TEXT_NODE = 3;
        var m = d.CDATA_SECTION_NODE = 4;
        var g = d.ENTITY_REFERENCE_NODE = 5;
        var b = d.ENTITY_NODE = 6;
        var _ = d.PROCESSING_INSTRUCTION_NODE = 7;
        var x = d.COMMENT_NODE = 8;
        var T = d.DOCUMENT_NODE = 9;
        var y = d.DOCUMENT_TYPE_NODE = 10;
        var S = d.DOCUMENT_FRAGMENT_NODE = 11;
        var v = d.NOTATION_NODE = 12;
        var R = {};
        var E = {};
        E[1] = "Index size error";
        R.INDEX_SIZE_ERR = 1;
        E[2] = "DOMString size error";
        R.DOMSTRING_SIZE_ERR = 2;
        E[3] = "Hierarchy request error";
        var A = R.HIERARCHY_REQUEST_ERR = 3;
        E[4] = "Wrong document";
        R.WRONG_DOCUMENT_ERR = 4;
        E[5] = "Invalid character";
        var M = R.INVALID_CHARACTER_ERR = 5;
        E[6] = "No data allowed";
        R.NO_DATA_ALLOWED_ERR = 6;
        E[7] = "No modification allowed";
        R.NO_MODIFICATION_ALLOWED_ERR = 7;
        E[8] = "Not found";
        var C = R.NOT_FOUND_ERR = 8;
        E[9] = "Not supported";
        R.NOT_SUPPORTED_ERR = 9;
        E[10] = "Attribute in use";
        var G = R.INUSE_ATTRIBUTE_ERR = 10;
        E[11] = "Invalid state";
        var w = R.INVALID_STATE_ERR = 11;
        function D(e, t) {
            if (t instanceof Error) var r = t;
            else {
                r = this;
                Error.call(this, E[e]);
                this.message = E[e];
                if (Error.captureStackTrace) {
                    Error.captureStackTrace(this, D);
                }
            }
            r.code = e;
            if (t) {
                this.message = this.message + ": " + t;
            }
            return r;
        }
        function P() {}
        class O {
            constructor(e, t){
                this._node = e;
                this._refresh = t;
                B(this);
            }
            item(e) {
                B(this);
                return this[e] || null;
            }
        }
        function B(e) {
            const t = e._node._inc || e._node.ownerDocument._inc;
            if (e._inc !== t) {
                const r = e._refresh(e._node);
                ex(e, "length", r.length);
                if (!e.$$length || r.length < e.$$length) {
                    for(let n = r.length; n in e; n++){
                        Object.prototype.hasOwnProperty.call(e, n) && delete e[n];
                    }
                }
                u(r, e);
                e._inc = t;
            }
        }
        function F() {}
        function I(e, t) {
            for(let r = e.length; r--;){
                if (e[r] === t) {
                    return r;
                }
            }
        }
        function U(_ownerElement, t, r, n) {
            if (n) {
                t[I(t, n)] = r;
            } else {
                t[t.length++] = r;
            }
            if (_ownerElement) {
                r.ownerElement = _ownerElement;
                let i;
                let o;
                let s;
                const l = _ownerElement.ownerDocument;
                if (l) {
                    if (n) {
                        q(l, _ownerElement, n);
                    }
                    i = l;
                    o = _ownerElement;
                    s = r;
                    i && i._inc++;
                    if (s.namespaceURI === n_NAMESPACE.XMLNS) {
                        o._nsMap[s.prefix ? s.localName : ""] = s.value;
                    }
                }
            }
        }
        function L(_ownerElement, t, r) {
            let n = I(t, r);
            if (n >= 0) {
                for(var i = t.length - 1; n < i;){
                    t[n] = t[++n];
                }
                t.length = i;
                if (_ownerElement) {
                    const a = _ownerElement.ownerDocument;
                    if (a) {
                        q(a, _ownerElement, r);
                        r.ownerElement = null;
                    }
                }
            } else {
                throw new D(C, Error(_ownerElement.tagName + "@" + r));
            }
        }
        function N() {}
        function X() {}
        function k(e) {
            return e == "<" && "&lt;" || e == ">" && "&gt;" || e == "&" && "&amp;" || e == '"' && "&quot;" || "&#" + e.charCodeAt() + ";";
        }
        function H(e, t) {
            return V(e, null, {
                enter (e) {
                    return !t(e) || V.STOP;
                }
            }) === V.STOP;
        }
        function V(node, context, r) {
            for(const n = [
                {
                    node,
                    context,
                    phase: V.ENTER
                }
            ]; n.length > 0;){
                const i = n.pop();
                if (i.phase === V.ENTER) {
                    const a = r.enter(i.node, i.context);
                    if (a === V.STOP) {
                        return V.STOP;
                    }
                    n.push({
                        node: i.node,
                        context: a,
                        phase: V.EXIT
                    });
                    if (a == null) {
                        continue;
                    }
                    for(let o = i.node.lastChild; o;){
                        n.push({
                            node: o,
                            context: a,
                            phase: V.ENTER
                        });
                        o = o.previousSibling;
                    }
                } else {
                    if (r.exit) {
                        r.exit(i.node, i.context);
                    }
                }
            }
        }
        function $() {
            this.ownerDocument = this;
        }
        function q(e, t, r, n) {
            e && e._inc++;
            r.namespaceURI === n_NAMESPACE.XMLNS && delete t._nsMap[r.prefix ? r.localName : ""];
        }
        function z(e, t, r) {
            if (e && e._inc) {
                e._inc++;
                const n = t.childNodes;
                if (r) {
                    n[n.length++] = r;
                } else {
                    for(var i = t.firstChild, a = 0; i;){
                        n[a++] = i;
                        i = i.nextSibling;
                    }
                    n.length = a;
                    delete n[n.length];
                }
            }
        }
        function W(e, t) {
            const t_previousSibling = t.previousSibling;
            const t_nextSibling = t.nextSibling;
            if (t_previousSibling) {
                t_previousSibling.nextSibling = t_nextSibling;
            } else {
                e.firstChild = t_nextSibling;
            }
            if (t_nextSibling) {
                t_nextSibling.previousSibling = t_previousSibling;
            } else {
                e.lastChild = t_previousSibling;
            }
            t.parentNode = null;
            t.previousSibling = null;
            t.nextSibling = null;
            z(e.ownerDocument, e);
            return t;
        }
        function Y(e) {
            return e && e.nodeType === X.DOCUMENT_TYPE_NODE;
        }
        function j(e) {
            return e && e.nodeType === X.ELEMENT_NODE;
        }
        function K(e) {
            return e && e.nodeType === X.TEXT_NODE;
        }
        function Q(e, t) {
            const r = e.childNodes || [];
            if (n_find(r, j) || Y(t)) {
                return false;
            }
            const n = n_find(r, Y);
            return !(t && n && r.indexOf(n) > r.indexOf(t));
        }
        function Z(e, t) {
            const r = e.childNodes || [];
            if (n_find(r, (e)=>j(e) && e !== t)) {
                return false;
            }
            const n = n_find(r, Y);
            return !(t && n && r.indexOf(n) > r.indexOf(t));
        }
        function J(e, t, r) {
            const n = e.childNodes || [];
            const a = t.childNodes || [];
            if (t.nodeType === X.DOCUMENT_FRAGMENT_NODE) {
                const o = a.filter(j);
                if (o.length > 1 || n_find(a, K)) {
                    throw new D(A, "More than one element or text in fragment");
                }
                if (o.length === 1 && !Z(e, r)) {
                    throw new D(A, "Element in fragment can not be inserted before doctype");
                }
            }
            if (j(t) && !Z(e, r)) {
                throw new D(A, "Only one element can be added and only after doctype");
            }
            if (Y(t)) {
                if (n_find(n, (e)=>Y(e) && e !== r)) {
                    throw new D(A, "Only one doctype is allowed");
                }
                const s = n_find(n, j);
                if (r && n.indexOf(s) < n.indexOf(r)) {
                    throw new D(A, "Doctype can only be inserted before an element");
                }
            }
        }
        function ee(e, t, r, n) {
            if (!(e && (e.nodeType === X.DOCUMENT_NODE || e.nodeType === X.DOCUMENT_FRAGMENT_NODE || e.nodeType === X.ELEMENT_NODE))) {
                throw new D(A, "Unexpected parent node type " + e.nodeType);
            }
            if (r && r.parentNode !== e) {
                throw new D(C, "child not in parent");
            }
            if (!(t && (j(t) || K(t) || Y(t) || t.nodeType === X.DOCUMENT_FRAGMENT_NODE || t.nodeType === X.COMMENT_NODE || t.nodeType === X.PROCESSING_INSTRUCTION_NODE)) || Y(t) && e.nodeType !== X.DOCUMENT_NODE) {
                throw new D(A, "Unexpected node type " + t.nodeType + " for parent node type " + e.nodeType);
            }
            if (e.nodeType === X.DOCUMENT_NODE) {
                (n || ((e, t, r)=>{
                    const n = e.childNodes || [];
                    const a = t.childNodes || [];
                    if (t.nodeType === X.DOCUMENT_FRAGMENT_NODE) {
                        const o = a.filter(j);
                        if (o.length > 1 || n_find(a, K)) {
                            throw new D(A, "More than one element or text in fragment");
                        }
                        if (o.length === 1 && !Q(e, r)) {
                            throw new D(A, "Element in fragment can not be inserted before doctype");
                        }
                    }
                    if (j(t) && !Q(e, r)) {
                        throw new D(A, "Only one element can be added and only after doctype");
                    }
                    if (Y(t)) {
                        if (n_find(n, Y)) {
                            throw new D(A, "Only one doctype is allowed");
                        }
                        const s = n_find(n, j);
                        if (r && n.indexOf(s) < n.indexOf(r)) {
                            throw new D(A, "Doctype can only be inserted before an element");
                        }
                        if (!r && s) {
                            throw new D(A, "Doctype can not be appended since element is present");
                        }
                    }
                }))(e, t, r);
            }
            const t_parentNode = t.parentNode;
            if (t_parentNode) {
                t_parentNode.removeChild(t);
            }
            if (t.nodeType === S) {
                var o = t.firstChild;
                if (o == null) {
                    return t;
                }
                var s = t.lastChild;
            } else {
                s = t;
                o = t;
            }
            const l = r ? r.previousSibling : e.lastChild;
            o.previousSibling = l;
            s.nextSibling = r;
            if (l) {
                l.nextSibling = o;
            } else {
                e.firstChild = o;
            }
            if (r == null) {
                e.lastChild = s;
            } else {
                r.previousSibling = s;
            }
            do {
                o.parentNode = e;
                et(o, e.ownerDocument || e);
            }while (o !== s && (o = o.nextSibling))
            z(e.ownerDocument || e, e);
            if (t.nodeType == S) {
                t.firstChild = t.lastChild = null;
            }
            return t;
        }
        function et(e, t) {
            if (e.ownerDocument !== t) {
                e.ownerDocument = t;
                if (e.nodeType === h && e.attributes) {
                    for(let r = 0; r < e.attributes.length; r++){
                        const n = e.attributes.item(r);
                        if (n) {
                            n.ownerDocument = t;
                        }
                    }
                }
                for(let i = e.firstChild; i;){
                    et(i, t);
                    i = i.nextSibling;
                }
            }
        }
        function er() {
            this._nsMap = {};
        }
        function en() {}
        function ei() {}
        function ea() {}
        function eo() {}
        function es() {}
        function el() {}
        function eu() {}
        function ec() {}
        function ed() {}
        function eh() {}
        function ep() {}
        class ef {
            serializeToString(e, t, r, n) {
                return em.call(e, t, r, n);
            }
        }
        function em(e, t, r) {
            const n = !!r && !!r.requireWellFormed;
            const i = [];
            const a = this.nodeType == 9 && this.documentElement || this;
            var a_prefix = a.prefix;
            const a_namespaceURI = a.namespaceURI;
            if (a_namespaceURI && a_prefix == null) {
                var a_prefix = a.lookupPrefix(a_namespaceURI);
                if (a_prefix == null) var l = [
                    {
                        namespace: a_namespaceURI,
                        prefix: null
                    }
                ];
            }
            e_(this, i, e, t, l, n);
            return i.join("");
        }
        function eg(e, t, r) {
            const n = e.prefix || "";
            const e_namespaceURI = e.namespaceURI;
            if (!e_namespaceURI || n === "xml" && e_namespaceURI === n_NAMESPACE.XML || e_namespaceURI === n_NAMESPACE.XMLNS) {
                return false;
            }
            for(let o = r.length; o--;){
                const s = r[o];
                if (s.prefix === n) {
                    return s.namespace !== e_namespaceURI;
                }
            }
            return true;
        }
        function eb(e, t, r) {
            e.push(" ", t, '="', r.replace(/[<>&"\t\n\r]/g, k), '"');
        }
        function e_(e, t, isHTML, n, i, o) {
            if (!i) {
                i = [];
            }
            V(e, {
                ns: i,
                isHTML
            }, {
                enter (e, r) {
                    const i = r.ns;
                    let r_isHTML = r.isHTML;
                    if (n) {
                        if (!(e = n(e))) {
                            return null;
                        }
                        if (typeof e === "string") {
                            t.push(e);
                            return null;
                        }
                    }
                    switch(e.nodeType){
                        case h:
                            let l;
                            const u = e.attributes;
                            const c = u.length;
                            const d = e.tagName;
                            r_isHTML = n_NAMESPACE.isHTML(e.namespaceURI) || r_isHTML;
                            let tag = d;
                            if (!r_isHTML && !e.prefix && e.namespaceURI) {
                                for(let v = 0; v < u.length; v++){
                                    if (u.item(v).name === "xmlns") {
                                        l = u.item(v).value;
                                        break;
                                    }
                                }
                                if (!l) {
                                    for(var R = i.length - 1; R >= 0; R--){
                                        var E = i[R];
                                        if (E.prefix === "" && E.namespace === e.namespaceURI) {
                                            l = E.namespace;
                                            break;
                                        }
                                    }
                                }
                                if (l !== e.namespaceURI) {
                                    for(var R = i.length - 1; R >= 0; R--){
                                        var E = i[R];
                                        if (E.namespace === e.namespaceURI) {
                                            if (E.prefix) {
                                                tag = E.prefix + ":" + d;
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                            t.push("<", tag);
                            const A = i.slice();
                            for(var M = 0; M < c; M++){
                                var C = u.item(M);
                                if (C.prefix == "xmlns") {
                                    A.push({
                                        prefix: C.localName,
                                        namespace: C.value
                                    });
                                } else if (C.nodeName == "xmlns") {
                                    A.push({
                                        prefix: "",
                                        namespace: C.value
                                    });
                                }
                            }
                            for(var M = 0; M < c; M++){
                                var C = u.item(M);
                                if (eg(C, r_isHTML, A)) {
                                    const G = C.prefix || "";
                                    var namespace = C.namespaceURI;
                                    eb(t, G ? "xmlns:" + G : "xmlns", namespace);
                                    A.push({
                                        prefix: G,
                                        namespace
                                    });
                                }
                                const O = n ? n(C) : C;
                                O && (typeof O === "string" ? t.push(O) : eb(t, O.name, O.value));
                            }
                            if (d === tag && eg(e, r_isHTML, A)) {
                                const B = e.prefix || "";
                                var namespace = e.namespaceURI;
                                eb(t, B ? "xmlns:" + B : "xmlns", namespace);
                                A.push({
                                    prefix: B,
                                    namespace
                                });
                            }
                            let F = e.firstChild;
                            if (!F && (!r_isHTML || /^(?:meta|link|img|br|hr|input)$/i.test(d))) {
                                t.push("/>");
                                return null;
                            }
                            t.push(">");
                            if (r_isHTML && /^script$/i.test(d)) {
                                while(F){
                                    if (F.data) {
                                        t.push(F.data);
                                    } else {
                                        e_(F, t, r_isHTML, n, A.slice(), o);
                                    }
                                    F = F.nextSibling;
                                }
                                t.push("</", d, ">");
                                return null;
                            }
                            return {
                                ns: A,
                                isHTML: r_isHTML,
                                tag
                            };
                        case T:
                        case S:
                            return {
                                ns: i.slice(),
                                isHTML: r_isHTML,
                                tag: null
                            };
                        case p:
                            eb(t, e.name, e.value);
                            return null;
                        case f:
                            t.push(e.data.replace(/[<&>]/g, k));
                            return null;
                        case m:
                            if (o && -1 !== e.data.indexOf("]]>")) {
                                throw new D(w, 'The CDATASection data contains "]]>"');
                            }
                            t.push("<![CDATA[", e.data.replace(/]]>/g, "]]]]><![CDATA[>"), "]]>");
                            return null;
                        case x:
                            if (o && -1 !== e.data.indexOf("-->")) {
                                throw new D(w, 'The comment node data contains "-->"');
                            }
                            t.push("<!--", e.data, "-->");
                            return null;
                        case y:
                            if (o) {
                                if (e.publicId && !/^("[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%']*"|'[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%'"]*')$/.test(e.publicId)) {
                                    throw new D(w, "DocumentType publicId is not a valid PubidLiteral");
                                }
                                if (e.systemId && !/^("[^"]*"|'[^']*')$/.test(e.systemId)) {
                                    throw new D(w, "DocumentType systemId is not a valid SystemLiteral");
                                }
                                if (e.internalSubset && -1 !== e.internalSubset.indexOf("]>")) {
                                    throw new D(w, 'DocumentType internalSubset contains "]>"');
                                }
                            }
                            const I = e.publicId;
                            const U = e.systemId;
                            t.push("<!DOCTYPE ", e.name);
                            if (I) {
                                t.push(" PUBLIC ", I);
                                if (U && U != ".") {
                                    t.push(" ", U);
                                }
                                t.push(">");
                            } else if (U && U != ".") {
                                t.push(" SYSTEM ", U, ">");
                            } else {
                                const L = e.internalSubset;
                                if (L) {
                                    t.push(" [", L, "]");
                                }
                                t.push(">");
                            }
                            return null;
                        case _:
                            if (o && -1 !== e.data.indexOf("?>")) {
                                throw new D(w, 'The ProcessingInstruction data contains "?>"');
                            }
                            t.push("<?", e.target, " ", e.data, "?>");
                            return null;
                        case g:
                            t.push("&", e.nodeName, ";");
                            return null;
                        default:
                            t.push("??", e.nodeName);
                            return null;
                    }
                },
                exit (e, r) {
                    if (r && r.tag) {
                        t.push("</", r.tag, ">");
                    }
                }
            });
        }
        function ex(e, t, r) {
            e[t] = r;
        }
        E[12] = "Syntax error";
        R.SYNTAX_ERR = 12;
        E[13] = "Invalid modification";
        R.INVALID_MODIFICATION_ERR = 13;
        E[14] = "Invalid namespace";
        R.NAMESPACE_ERR = 14;
        E[15] = "Invalid access";
        R.INVALID_ACCESS_ERR = 15;
        D.prototype = Error.prototype;
        u(R, D);
        P.prototype = {
            length: 0,
            item (e) {
                if (e >= 0 && e < this.length) {
                    return this[e];
                }
                return null;
            },
            toString (e, t, r) {
                const n = !!r && !!r.requireWellFormed;
                const i = [];
                for(let a = 0; a < this.length; a++){
                    e_(this[a], i, e, t, null, n);
                }
                return i.join("");
            },
            filter (e) {
                return Array.prototype.filter.call(this, e);
            },
            indexOf (e) {
                return Array.prototype.indexOf.call(this, e);
            }
        };
        c(O, P);
        F.prototype = {
            length: 0,
            item: P.prototype.item,
            getNamedItem (e) {
                for(let t = this.length; t--;){
                    const r = this[t];
                    if (r.nodeName == e) {
                        return r;
                    }
                }
            },
            setNamedItem (e) {
                const e_ownerElement = e.ownerElement;
                if (e_ownerElement && e_ownerElement != this._ownerElement) {
                    throw new D(G);
                }
                const r = this.getNamedItem(e.nodeName);
                U(this._ownerElement, this, e, r);
                return r;
            },
            setNamedItemNS (e) {
                let t;
                const e_ownerElement = e.ownerElement;
                if (e_ownerElement && e_ownerElement != this._ownerElement) {
                    throw new D(G);
                }
                t = this.getNamedItemNS(e.namespaceURI, e.localName);
                U(this._ownerElement, this, e, t);
                return t;
            },
            removeNamedItem (e) {
                const t = this.getNamedItem(e);
                L(this._ownerElement, this, t);
                return t;
            },
            removeNamedItemNS (e, t) {
                const r = this.getNamedItemNS(e, t);
                L(this._ownerElement, this, r);
                return r;
            },
            getNamedItemNS (e, t) {
                for(let r = this.length; r--;){
                    const n = this[r];
                    if (n.localName == t && n.namespaceURI == e) {
                        return n;
                    }
                }
                return null;
            }
        };
        N.prototype = {
            hasFeature (e, t) {
                return true;
            },
            createDocument (e, t, r) {
                const n = new $;
                n.implementation = this;
                n.childNodes = new P;
                n.doctype = r || null;
                if (r) {
                    n.appendChild(r);
                }
                if (t) {
                    const i = n.createElementNS(e, t);
                    n.appendChild(i);
                }
                return n;
            },
            createDocumentType (e, t, r) {
                const n = new el;
                n.name = e;
                n.nodeName = e;
                n.publicId = t || "";
                n.systemId = r || "";
                return n;
            }
        };
        X.prototype = {
            firstChild: null,
            lastChild: null,
            previousSibling: null,
            nextSibling: null,
            attributes: null,
            parentNode: null,
            childNodes: null,
            ownerDocument: null,
            nodeValue: null,
            namespaceURI: null,
            prefix: null,
            localName: null,
            insertBefore (e, t) {
                return ee(this, e, t);
            },
            replaceChild (e, t) {
                ee(this, e, t, J);
                if (t) {
                    this.removeChild(t);
                }
            },
            removeChild (e) {
                return W(this, e);
            },
            appendChild (e) {
                return this.insertBefore(e, null);
            },
            hasChildNodes () {
                return this.firstChild != null;
            },
            cloneNode (e) {
                return function e(t, r, n) {
                    let i;
                    V(r, null, {
                        enter (r, a) {
                            const o = new r.constructor;
                            for(const s in r){
                                if (Object.prototype.hasOwnProperty.call(r, s)) {
                                    const l = r[s];
                                    if (typeof l !== "object" && l != o[s]) {
                                        o[s] = l;
                                    }
                                }
                            }
                            if (r.childNodes) {
                                o.childNodes = new P;
                            }
                            o.ownerDocument = t;
                            let u = n;
                            switch(o.nodeType){
                                case h:
                                    const c = r.attributes;
                                    const d = o.attributes = new F;
                                    const f = c.length;
                                    d._ownerElement = o;
                                    for(let m = 0; m < f; m++){
                                        o.setAttributeNode(e(t, c.item(m), true));
                                    }
                                    break;
                                case p:
                                    u = true;
                            }
                            if (a !== null) {
                                a.appendChild(o);
                            } else {
                                i = o;
                            }
                            if (u) {
                                return o;
                            }
                            return null;
                        }
                    });
                    return i;
                }(this.ownerDocument || this, this, e);
            },
            normalize () {
                V(this, null, {
                    enter (e) {
                        for(let t = e.firstChild; t;){
                            const r = t.nextSibling;
                            if (r !== null && r.nodeType === f && t.nodeType === f) {
                                e.removeChild(r);
                                t.appendData(r.data);
                            } else {
                                t = r;
                            }
                        }
                        return true;
                    }
                });
            },
            isSupported (e, t) {
                return this.ownerDocument.implementation.hasFeature(e, t);
            },
            hasAttributes () {
                return this.attributes.length > 0;
            },
            lookupPrefix (e) {
                for(let t = this; t;){
                    const r = t._nsMap;
                    if (r) {
                        for(const n in r){
                            if (Object.prototype.hasOwnProperty.call(r, n) && r[n] === e) {
                                return n;
                            }
                        }
                    }
                    t = t.nodeType == p ? t.ownerDocument : t.parentNode;
                }
                return null;
            },
            lookupNamespaceURI (e) {
                for(let t = this; t;){
                    const r = t._nsMap;
                    if (r && Object.prototype.hasOwnProperty.call(r, e)) {
                        return r[e];
                    }
                    t = t.nodeType == p ? t.ownerDocument : t.parentNode;
                }
                return null;
            },
            isDefaultNamespace (e) {
                return this.lookupPrefix(e) == null;
            }
        };
        u(d, X);
        u(d, X.prototype);
        V.STOP = Symbol("walkDOM.STOP");
        V.ENTER = 0;
        V.EXIT = 1;
        $.prototype = {
            nodeName: "#document",
            nodeType: T,
            doctype: null,
            documentElement: null,
            _inc: 1,
            insertBefore (e, t) {
                if (e.nodeType == S) {
                    for(let r = e.firstChild; r;){
                        const n = r.nextSibling;
                        this.insertBefore(r, t);
                        r = n;
                    }
                    return e;
                }
                ee(this, e, t);
                et(e, this);
                if (this.documentElement === null && e.nodeType === h) {
                    this.documentElement = e;
                }
                return e;
            },
            removeChild (e) {
                if (this.documentElement == e) {
                    this.documentElement = null;
                }
                return W(this, e);
            },
            replaceChild (e, t) {
                ee(this, e, t, J);
                et(e, this);
                if (t) {
                    this.removeChild(t);
                }
                if (j(e)) {
                    this.documentElement = e;
                }
            },
            importNode (e, t) {
                let r;
                let n;
                let i;
                let a;
                r = this;
                n = e;
                i = t;
                V(n, null, {
                    enter (e, t) {
                        const n = e.cloneNode(false);
                        n.ownerDocument = r;
                        n.parentNode = null;
                        if (t === null) {
                            a = n;
                        } else {
                            t.appendChild(n);
                        }
                        if (e.nodeType === p || i) {
                            return n;
                        }
                        return null;
                    }
                });
                return a;
            },
            getElementById (e) {
                let t = null;
                H(this.documentElement, (r)=>{
                    if (r.nodeType == h && r.getAttribute("id") == e) {
                        t = r;
                        return true;
                    }
                });
                return t;
            },
            getElementsByClassName (e) {
                const t = l(e);
                return new O(this, (r)=>{
                    const n = [];
                    if (t.length > 0) {
                        H(r.documentElement, (i)=>{
                            if (i !== r && i.nodeType === h) {
                                const a = i.getAttribute("class");
                                if (a) {
                                    let o = e === a;
                                    if (!o) {
                                        const s = l(a);
                                        o = t.every((e)=>s && -1 !== s.indexOf(e));
                                    }
                                    if (o) {
                                        n.push(i);
                                    }
                                }
                            }
                        });
                    }
                    return n;
                });
            },
            createElement (e) {
                const t = new er;
                t.ownerDocument = this;
                t.nodeName = e;
                t.tagName = e;
                t.localName = e;
                t.childNodes = new P;
                (t.attributes = new F)._ownerElement = t;
                return t;
            },
            createDocumentFragment () {
                const e = new eh;
                e.ownerDocument = this;
                e.childNodes = new P;
                return e;
            },
            createTextNode (e) {
                const t = new ea;
                t.ownerDocument = this;
                t.appendData(e);
                return t;
            },
            createComment (e) {
                const t = new eo;
                t.ownerDocument = this;
                t.appendData(e);
                return t;
            },
            createCDATASection (e) {
                if (-1 !== e.indexOf("]]>")) {
                    throw new D(M, 'data contains "]]>"');
                }
                const t = new es;
                t.ownerDocument = this;
                t.appendData(e);
                return t;
            },
            createProcessingInstruction (e, t) {
                const r = new ep;
                r.ownerDocument = this;
                r.tagName = r.nodeName = r.target = e;
                r.nodeValue = r.data = t;
                return r;
            },
            createAttribute (e) {
                const t = new en;
                t.ownerDocument = this;
                t.name = e;
                t.nodeName = e;
                t.localName = e;
                t.specified = true;
                return t;
            },
            createEntityReference (e) {
                const t = new ed;
                t.ownerDocument = this;
                t.nodeName = e;
                return t;
            },
            createElementNS (e, t) {
                const r = new er;
                const n = t.split(":");
                const i = r.attributes = new F;
                r.childNodes = new P;
                r.ownerDocument = this;
                r.nodeName = t;
                r.tagName = t;
                r.namespaceURI = e;
                if (n.length == 2) {
                    r.prefix = n[0];
                    r.localName = n[1];
                } else {
                    r.localName = t;
                }
                i._ownerElement = r;
                return r;
            },
            createAttributeNS (e, t) {
                const r = new en;
                const n = t.split(":");
                r.ownerDocument = this;
                r.nodeName = t;
                r.name = t;
                r.namespaceURI = e;
                r.specified = true;
                if (n.length == 2) {
                    r.prefix = n[0];
                    r.localName = n[1];
                } else {
                    r.localName = t;
                }
                return r;
            }
        };
        c($, X);
        er.prototype = {
            nodeType: h,
            hasAttribute (e) {
                return this.getAttributeNode(e) != null;
            },
            getAttribute (e) {
                const t = this.getAttributeNode(e);
                return t && t.value || "";
            },
            getAttributeNode (e) {
                return this.attributes.getNamedItem(e);
            },
            setAttribute (e, t) {
                const r = this.ownerDocument.createAttribute(e);
                r.value = r.nodeValue = "" + t;
                this.setAttributeNode(r);
            },
            removeAttribute (e) {
                const t = this.getAttributeNode(e);
                if (t) {
                    this.removeAttributeNode(t);
                }
            },
            appendChild (e) {
                if (e.nodeType === S) {
                    return this.insertBefore(e, null);
                }
                if (e.parentNode) {
                    e.parentNode.removeChild(e);
                }
                e.parentNode = this;
                e.previousSibling = this.lastChild;
                e.nextSibling = null;
                if (e.previousSibling) {
                    e.previousSibling.nextSibling = e;
                } else {
                    this.firstChild = e;
                }
                this.lastChild = e;
                z(this.ownerDocument, this, e);
                et(e, this.ownerDocument || this);
                return e;
            },
            setAttributeNode (e) {
                return this.attributes.setNamedItem(e);
            },
            setAttributeNodeNS (e) {
                return this.attributes.setNamedItemNS(e);
            },
            removeAttributeNode (e) {
                return this.attributes.removeNamedItem(e.nodeName);
            },
            removeAttributeNS (e, t) {
                const r = this.getAttributeNodeNS(e, t);
                if (r) {
                    this.removeAttributeNode(r);
                }
            },
            hasAttributeNS (e, t) {
                return this.getAttributeNodeNS(e, t) != null;
            },
            getAttributeNS (e, t) {
                const r = this.getAttributeNodeNS(e, t);
                return r && r.value || "";
            },
            setAttributeNS (e, t, r) {
                const n = this.ownerDocument.createAttributeNS(e, t);
                n.value = n.nodeValue = "" + r;
                this.setAttributeNode(n);
            },
            getAttributeNodeNS (e, t) {
                return this.attributes.getNamedItemNS(e, t);
            },
            getElementsByTagName (e) {
                return new O(this, (t)=>{
                    const r = [];
                    H(t, (n)=>{
                        if (n !== t && n.nodeType == h && (e === "*" || n.tagName == e)) {
                            r.push(n);
                        }
                    });
                    return r;
                });
            },
            getElementsByTagNameNS (e, t) {
                return new O(this, (r)=>{
                    const n = [];
                    H(r, (i)=>{
                        if (i !== r && i.nodeType === h && (e === "*" || i.namespaceURI === e) && (t === "*" || i.localName == t)) {
                            n.push(i);
                        }
                    });
                    return n;
                });
            }
        };
        $.prototype.getElementsByTagName = er.prototype.getElementsByTagName;
        $.prototype.getElementsByTagNameNS = er.prototype.getElementsByTagNameNS;
        c(er, X);
        en.prototype.nodeType = p;
        c(en, X);
        ei.prototype = {
            data: "",
            substringData (e, t) {
                return this.data.substring(e, e + t);
            },
            appendData (e) {
                e = this.data + e;
                this.nodeValue = this.data = e;
                this.length = e.length;
            },
            insertData (e, t) {
                this.replaceData(e, 0, t);
            },
            appendChild (e) {
                throw Error(E[A]);
            },
            deleteData (e, t) {
                this.replaceData(e, t, "");
            },
            replaceData (e, t, r) {
                r = this.data.substring(0, e) + r + this.data.substring(e + t);
                this.nodeValue = this.data = r;
                this.length = r.length;
            }
        };
        c(ei, X);
        ea.prototype = {
            nodeName: "#text",
            nodeType: f,
            splitText (e) {
                let data = this.data;
                const r = data.substring(e);
                data = data.substring(0, e);
                this.data = this.nodeValue = data;
                this.length = data.length;
                const n = this.ownerDocument.createTextNode(r);
                if (this.parentNode) {
                    this.parentNode.insertBefore(n, this.nextSibling);
                }
                return n;
            }
        };
        c(ea, ei);
        eo.prototype = {
            nodeName: "#comment",
            nodeType: x
        };
        c(eo, ei);
        es.prototype = {
            nodeName: "#cdata-section",
            nodeType: m
        };
        c(es, ei);
        el.prototype.nodeType = y;
        c(el, X);
        eu.prototype.nodeType = v;
        c(eu, X);
        ec.prototype.nodeType = b;
        c(ec, X);
        ed.prototype.nodeType = g;
        c(ed, X);
        eh.prototype.nodeName = "#document-fragment";
        eh.prototype.nodeType = S;
        c(eh, X);
        ep.prototype.nodeType = _;
        c(ep, X);
        X.prototype.toString = em;
        try {
            if (Object.defineProperty) {
                Object.defineProperty(O.prototype, "length", {
                    get () {
                        B(this);
                        return this.$$length;
                    }
                });
                Object.defineProperty(X.prototype, "textContent", {
                    get () {
                        if (this.nodeType === h || this.nodeType === S) {
                            const e = [];
                            V(this, null, {
                                enter (t) {
                                    return t.nodeType === h || t.nodeType === S || (t.nodeType === _ || t.nodeType === x ? null : void e.push(t.nodeValue));
                                }
                            });
                            return e.join("");
                        }
                        return this.nodeValue;
                    },
                    set (e) {
                        switch(this.nodeType){
                            case h:
                            case S:
                                while(this.firstChild){
                                    this.removeChild(this.firstChild);
                                }
                                if (e || String(e)) {
                                    this.appendChild(this.ownerDocument.createTextNode(e));
                                }
                                break;
                            default:
                                this.data = e;
                                this.value = e;
                                this.nodeValue = e;
                        }
                    }
                });
                ex = (e, t, r)=>{
                    e["$$" + t] = r;
                };
            }
        } catch (e) {}
        r.DocumentType = el;
        r.DOMException = D;
        r.DOMImplementation = N;
        r.Element = er;
        r.Node = X;
        r.NodeList = P;
        r.walkDOM = V;
        r.XMLSerializer = ef;
    },
    719053,
    (e, t, r)=>{
        "use strict";
        var freeze = e.r(653743).freeze;
        r.XML_ENTITIES = freeze({
            amp: "&",
            apos: "'",
            gt: ">",
            lt: "<",
            quot: '"'
        });
        r.HTML_ENTITIES = freeze({
            Aacute: "Á",
            aacute: "á",
            Abreve: "Ă",
            abreve: "ă",
            ac: "∾",
            acd: "∿",
            acE: "∾̳",
            Acirc: "Â",
            acirc: "â",
            acute: "´",
            Acy: "А",
            acy: "а",
            AElig: "Æ",
            aelig: "æ",
            af: "⁡",
            Afr: "𝔄",
            afr: "𝔞",
            Agrave: "À",
            agrave: "à",
            alefsym: "ℵ",
            aleph: "ℵ",
            Alpha: "Α",
            alpha: "α",
            Amacr: "Ā",
            amacr: "ā",
            amalg: "⨿",
            AMP: "&",
            amp: "&",
            And: "⩓",
            and: "∧",
            andand: "⩕",
            andd: "⩜",
            andslope: "⩘",
            andv: "⩚",
            ang: "∠",
            ange: "⦤",
            angle: "∠",
            angmsd: "∡",
            angmsdaa: "⦨",
            angmsdab: "⦩",
            angmsdac: "⦪",
            angmsdad: "⦫",
            angmsdae: "⦬",
            angmsdaf: "⦭",
            angmsdag: "⦮",
            angmsdah: "⦯",
            angrt: "∟",
            angrtvb: "⊾",
            angrtvbd: "⦝",
            angsph: "∢",
            angst: "Å",
            angzarr: "⍼",
            Aogon: "Ą",
            aogon: "ą",
            Aopf: "𝔸",
            aopf: "𝕒",
            ap: "≈",
            apacir: "⩯",
            apE: "⩰",
            ape: "≊",
            apid: "≋",
            apos: "'",
            ApplyFunction: "⁡",
            approx: "≈",
            approxeq: "≊",
            Aring: "Å",
            aring: "å",
            Ascr: "𝒜",
            ascr: "𝒶",
            Assign: "≔",
            ast: "*",
            asymp: "≈",
            asympeq: "≍",
            Atilde: "Ã",
            atilde: "ã",
            Auml: "Ä",
            auml: "ä",
            awconint: "∳",
            awint: "⨑",
            backcong: "≌",
            backepsilon: "϶",
            backprime: "‵",
            backsim: "∽",
            backsimeq: "⋍",
            Backslash: "∖",
            Barv: "⫧",
            barvee: "⊽",
            Barwed: "⌆",
            barwed: "⌅",
            barwedge: "⌅",
            bbrk: "⎵",
            bbrktbrk: "⎶",
            bcong: "≌",
            Bcy: "Б",
            bcy: "б",
            bdquo: "„",
            becaus: "∵",
            Because: "∵",
            because: "∵",
            bemptyv: "⦰",
            bepsi: "϶",
            bernou: "ℬ",
            Bernoullis: "ℬ",
            Beta: "Β",
            beta: "β",
            beth: "ℶ",
            between: "≬",
            Bfr: "𝔅",
            bfr: "𝔟",
            bigcap: "⋂",
            bigcirc: "◯",
            bigcup: "⋃",
            bigodot: "⨀",
            bigoplus: "⨁",
            bigotimes: "⨂",
            bigsqcup: "⨆",
            bigstar: "★",
            bigtriangledown: "▽",
            bigtriangleup: "△",
            biguplus: "⨄",
            bigvee: "⋁",
            bigwedge: "⋀",
            bkarow: "⤍",
            blacklozenge: "⧫",
            blacksquare: "▪",
            blacktriangle: "▴",
            blacktriangledown: "▾",
            blacktriangleleft: "◂",
            blacktriangleright: "▸",
            blank: "␣",
            blk12: "▒",
            blk14: "░",
            blk34: "▓",
            block: "█",
            bne: "=⃥",
            bnequiv: "≡⃥",
            bNot: "⫭",
            bnot: "⌐",
            Bopf: "𝔹",
            bopf: "𝕓",
            bot: "⊥",
            bottom: "⊥",
            bowtie: "⋈",
            boxbox: "⧉",
            boxDL: "╗",
            boxDl: "╖",
            boxdL: "╕",
            boxdl: "┐",
            boxDR: "╔",
            boxDr: "╓",
            boxdR: "╒",
            boxdr: "┌",
            boxH: "═",
            boxh: "─",
            boxHD: "╦",
            boxHd: "╤",
            boxhD: "╥",
            boxhd: "┬",
            boxHU: "╩",
            boxHu: "╧",
            boxhU: "╨",
            boxhu: "┴",
            boxminus: "⊟",
            boxplus: "⊞",
            boxtimes: "⊠",
            boxUL: "╝",
            boxUl: "╜",
            boxuL: "╛",
            boxul: "┘",
            boxUR: "╚",
            boxUr: "╙",
            boxuR: "╘",
            boxur: "└",
            boxV: "║",
            boxv: "│",
            boxVH: "╬",
            boxVh: "╫",
            boxvH: "╪",
            boxvh: "┼",
            boxVL: "╣",
            boxVl: "╢",
            boxvL: "╡",
            boxvl: "┤",
            boxVR: "╠",
            boxVr: "╟",
            boxvR: "╞",
            boxvr: "├",
            bprime: "‵",
            Breve: "˘",
            breve: "˘",
            brvbar: "¦",
            Bscr: "ℬ",
            bscr: "𝒷",
            bsemi: "⁏",
            bsim: "∽",
            bsime: "⋍",
            bsol: "\\",
            bsolb: "⧅",
            bsolhsub: "⟈",
            bull: "•",
            bullet: "•",
            bump: "≎",
            bumpE: "⪮",
            bumpe: "≏",
            Bumpeq: "≎",
            bumpeq: "≏",
            Cacute: "Ć",
            cacute: "ć",
            Cap: "⋒",
            cap: "∩",
            capand: "⩄",
            capbrcup: "⩉",
            capcap: "⩋",
            capcup: "⩇",
            capdot: "⩀",
            CapitalDifferentialD: "ⅅ",
            caps: "∩︀",
            caret: "⁁",
            caron: "ˇ",
            Cayleys: "ℭ",
            ccaps: "⩍",
            Ccaron: "Č",
            ccaron: "č",
            Ccedil: "Ç",
            ccedil: "ç",
            Ccirc: "Ĉ",
            ccirc: "ĉ",
            Cconint: "∰",
            ccups: "⩌",
            ccupssm: "⩐",
            Cdot: "Ċ",
            cdot: "ċ",
            cedil: "¸",
            Cedilla: "¸",
            cemptyv: "⦲",
            cent: "¢",
            CenterDot: "·",
            centerdot: "·",
            Cfr: "ℭ",
            cfr: "𝔠",
            CHcy: "Ч",
            chcy: "ч",
            check: "✓",
            checkmark: "✓",
            Chi: "Χ",
            chi: "χ",
            cir: "○",
            circ: "ˆ",
            circeq: "≗",
            circlearrowleft: "↺",
            circlearrowright: "↻",
            circledast: "⊛",
            circledcirc: "⊚",
            circleddash: "⊝",
            CircleDot: "⊙",
            circledR: "®",
            circledS: "Ⓢ",
            CircleMinus: "⊖",
            CirclePlus: "⊕",
            CircleTimes: "⊗",
            cirE: "⧃",
            cire: "≗",
            cirfnint: "⨐",
            cirmid: "⫯",
            cirscir: "⧂",
            ClockwiseContourIntegral: "∲",
            CloseCurlyDoubleQuote: "”",
            CloseCurlyQuote: "’",
            clubs: "♣",
            clubsuit: "♣",
            Colon: "∷",
            colon: ":",
            Colone: "⩴",
            colone: "≔",
            coloneq: "≔",
            comma: ",",
            commat: "@",
            comp: "∁",
            compfn: "∘",
            complement: "∁",
            complexes: "ℂ",
            cong: "≅",
            congdot: "⩭",
            Congruent: "≡",
            Conint: "∯",
            conint: "∮",
            ContourIntegral: "∮",
            Copf: "ℂ",
            copf: "𝕔",
            coprod: "∐",
            Coproduct: "∐",
            COPY: "©",
            copy: "©",
            copysr: "℗",
            CounterClockwiseContourIntegral: "∳",
            crarr: "↵",
            Cross: "⨯",
            cross: "✗",
            Cscr: "𝒞",
            cscr: "𝒸",
            csub: "⫏",
            csube: "⫑",
            csup: "⫐",
            csupe: "⫒",
            ctdot: "⋯",
            cudarrl: "⤸",
            cudarrr: "⤵",
            cuepr: "⋞",
            cuesc: "⋟",
            cularr: "↶",
            cularrp: "⤽",
            Cup: "⋓",
            cup: "∪",
            cupbrcap: "⩈",
            CupCap: "≍",
            cupcap: "⩆",
            cupcup: "⩊",
            cupdot: "⊍",
            cupor: "⩅",
            cups: "∪︀",
            curarr: "↷",
            curarrm: "⤼",
            curlyeqprec: "⋞",
            curlyeqsucc: "⋟",
            curlyvee: "⋎",
            curlywedge: "⋏",
            curren: "¤",
            curvearrowleft: "↶",
            curvearrowright: "↷",
            cuvee: "⋎",
            cuwed: "⋏",
            cwconint: "∲",
            cwint: "∱",
            cylcty: "⌭",
            Dagger: "‡",
            dagger: "†",
            daleth: "ℸ",
            Darr: "↡",
            dArr: "⇓",
            darr: "↓",
            dash: "‐",
            Dashv: "⫤",
            dashv: "⊣",
            dbkarow: "⤏",
            dblac: "˝",
            Dcaron: "Ď",
            dcaron: "ď",
            Dcy: "Д",
            dcy: "д",
            DD: "ⅅ",
            dd: "ⅆ",
            ddagger: "‡",
            ddarr: "⇊",
            DDotrahd: "⤑",
            ddotseq: "⩷",
            deg: "°",
            Del: "∇",
            Delta: "Δ",
            delta: "δ",
            demptyv: "⦱",
            dfisht: "⥿",
            Dfr: "𝔇",
            dfr: "𝔡",
            dHar: "⥥",
            dharl: "⇃",
            dharr: "⇂",
            DiacriticalAcute: "´",
            DiacriticalDot: "˙",
            DiacriticalDoubleAcute: "˝",
            DiacriticalGrave: "`",
            DiacriticalTilde: "˜",
            diam: "⋄",
            Diamond: "⋄",
            diamond: "⋄",
            diamondsuit: "♦",
            diams: "♦",
            die: "¨",
            DifferentialD: "ⅆ",
            digamma: "ϝ",
            disin: "⋲",
            div: "÷",
            divide: "÷",
            divideontimes: "⋇",
            divonx: "⋇",
            DJcy: "Ђ",
            djcy: "ђ",
            dlcorn: "⌞",
            dlcrop: "⌍",
            dollar: "$",
            Dopf: "𝔻",
            dopf: "𝕕",
            Dot: "¨",
            dot: "˙",
            DotDot: "⃜",
            doteq: "≐",
            doteqdot: "≑",
            DotEqual: "≐",
            dotminus: "∸",
            dotplus: "∔",
            dotsquare: "⊡",
            doublebarwedge: "⌆",
            DoubleContourIntegral: "∯",
            DoubleDot: "¨",
            DoubleDownArrow: "⇓",
            DoubleLeftArrow: "⇐",
            DoubleLeftRightArrow: "⇔",
            DoubleLeftTee: "⫤",
            DoubleLongLeftArrow: "⟸",
            DoubleLongLeftRightArrow: "⟺",
            DoubleLongRightArrow: "⟹",
            DoubleRightArrow: "⇒",
            DoubleRightTee: "⊨",
            DoubleUpArrow: "⇑",
            DoubleUpDownArrow: "⇕",
            DoubleVerticalBar: "∥",
            DownArrow: "↓",
            Downarrow: "⇓",
            downarrow: "↓",
            DownArrowBar: "⤓",
            DownArrowUpArrow: "⇵",
            DownBreve: "̑",
            downdownarrows: "⇊",
            downharpoonleft: "⇃",
            downharpoonright: "⇂",
            DownLeftRightVector: "⥐",
            DownLeftTeeVector: "⥞",
            DownLeftVector: "↽",
            DownLeftVectorBar: "⥖",
            DownRightTeeVector: "⥟",
            DownRightVector: "⇁",
            DownRightVectorBar: "⥗",
            DownTee: "⊤",
            DownTeeArrow: "↧",
            drbkarow: "⤐",
            drcorn: "⌟",
            drcrop: "⌌",
            Dscr: "𝒟",
            dscr: "𝒹",
            DScy: "Ѕ",
            dscy: "ѕ",
            dsol: "⧶",
            Dstrok: "Đ",
            dstrok: "đ",
            dtdot: "⋱",
            dtri: "▿",
            dtrif: "▾",
            duarr: "⇵",
            duhar: "⥯",
            dwangle: "⦦",
            DZcy: "Џ",
            dzcy: "џ",
            dzigrarr: "⟿",
            Eacute: "É",
            eacute: "é",
            easter: "⩮",
            Ecaron: "Ě",
            ecaron: "ě",
            ecir: "≖",
            Ecirc: "Ê",
            ecirc: "ê",
            ecolon: "≕",
            Ecy: "Э",
            ecy: "э",
            eDDot: "⩷",
            Edot: "Ė",
            eDot: "≑",
            edot: "ė",
            ee: "ⅇ",
            efDot: "≒",
            Efr: "𝔈",
            efr: "𝔢",
            eg: "⪚",
            Egrave: "È",
            egrave: "è",
            egs: "⪖",
            egsdot: "⪘",
            el: "⪙",
            Element: "∈",
            elinters: "⏧",
            ell: "ℓ",
            els: "⪕",
            elsdot: "⪗",
            Emacr: "Ē",
            emacr: "ē",
            empty: "∅",
            emptyset: "∅",
            EmptySmallSquare: "◻",
            emptyv: "∅",
            EmptyVerySmallSquare: "▫",
            emsp: " ",
            emsp13: " ",
            emsp14: " ",
            ENG: "Ŋ",
            eng: "ŋ",
            ensp: " ",
            Eogon: "Ę",
            eogon: "ę",
            Eopf: "𝔼",
            eopf: "𝕖",
            epar: "⋕",
            eparsl: "⧣",
            eplus: "⩱",
            epsi: "ε",
            Epsilon: "Ε",
            epsilon: "ε",
            epsiv: "ϵ",
            eqcirc: "≖",
            eqcolon: "≕",
            eqsim: "≂",
            eqslantgtr: "⪖",
            eqslantless: "⪕",
            Equal: "⩵",
            equals: "=",
            EqualTilde: "≂",
            equest: "≟",
            Equilibrium: "⇌",
            equiv: "≡",
            equivDD: "⩸",
            eqvparsl: "⧥",
            erarr: "⥱",
            erDot: "≓",
            Escr: "ℰ",
            escr: "ℯ",
            esdot: "≐",
            Esim: "⩳",
            esim: "≂",
            Eta: "Η",
            eta: "η",
            ETH: "Ð",
            eth: "ð",
            Euml: "Ë",
            euml: "ë",
            euro: "€",
            excl: "!",
            exist: "∃",
            Exists: "∃",
            expectation: "ℰ",
            ExponentialE: "ⅇ",
            exponentiale: "ⅇ",
            fallingdotseq: "≒",
            Fcy: "Ф",
            fcy: "ф",
            female: "♀",
            ffilig: "ﬃ",
            fflig: "ﬀ",
            ffllig: "ﬄ",
            Ffr: "𝔉",
            ffr: "𝔣",
            filig: "ﬁ",
            FilledSmallSquare: "◼",
            FilledVerySmallSquare: "▪",
            fjlig: "fj",
            flat: "♭",
            fllig: "ﬂ",
            fltns: "▱",
            fnof: "ƒ",
            Fopf: "𝔽",
            fopf: "𝕗",
            ForAll: "∀",
            forall: "∀",
            fork: "⋔",
            forkv: "⫙",
            Fouriertrf: "ℱ",
            fpartint: "⨍",
            frac12: "½",
            frac13: "⅓",
            frac14: "¼",
            frac15: "⅕",
            frac16: "⅙",
            frac18: "⅛",
            frac23: "⅔",
            frac25: "⅖",
            frac34: "¾",
            frac35: "⅗",
            frac38: "⅜",
            frac45: "⅘",
            frac56: "⅚",
            frac58: "⅝",
            frac78: "⅞",
            frasl: "⁄",
            frown: "⌢",
            Fscr: "ℱ",
            fscr: "𝒻",
            gacute: "ǵ",
            Gamma: "Γ",
            gamma: "γ",
            Gammad: "Ϝ",
            gammad: "ϝ",
            gap: "⪆",
            Gbreve: "Ğ",
            gbreve: "ğ",
            Gcedil: "Ģ",
            Gcirc: "Ĝ",
            gcirc: "ĝ",
            Gcy: "Г",
            gcy: "г",
            Gdot: "Ġ",
            gdot: "ġ",
            gE: "≧",
            ge: "≥",
            gEl: "⪌",
            gel: "⋛",
            geq: "≥",
            geqq: "≧",
            geqslant: "⩾",
            ges: "⩾",
            gescc: "⪩",
            gesdot: "⪀",
            gesdoto: "⪂",
            gesdotol: "⪄",
            gesl: "⋛︀",
            gesles: "⪔",
            Gfr: "𝔊",
            gfr: "𝔤",
            Gg: "⋙",
            gg: "≫",
            ggg: "⋙",
            gimel: "ℷ",
            GJcy: "Ѓ",
            gjcy: "ѓ",
            gl: "≷",
            gla: "⪥",
            glE: "⪒",
            glj: "⪤",
            gnap: "⪊",
            gnapprox: "⪊",
            gnE: "≩",
            gne: "⪈",
            gneq: "⪈",
            gneqq: "≩",
            gnsim: "⋧",
            Gopf: "𝔾",
            gopf: "𝕘",
            grave: "`",
            GreaterEqual: "≥",
            GreaterEqualLess: "⋛",
            GreaterFullEqual: "≧",
            GreaterGreater: "⪢",
            GreaterLess: "≷",
            GreaterSlantEqual: "⩾",
            GreaterTilde: "≳",
            Gscr: "𝒢",
            gscr: "ℊ",
            gsim: "≳",
            gsime: "⪎",
            gsiml: "⪐",
            Gt: "≫",
            GT: ">",
            gt: ">",
            gtcc: "⪧",
            gtcir: "⩺",
            gtdot: "⋗",
            gtlPar: "⦕",
            gtquest: "⩼",
            gtrapprox: "⪆",
            gtrarr: "⥸",
            gtrdot: "⋗",
            gtreqless: "⋛",
            gtreqqless: "⪌",
            gtrless: "≷",
            gtrsim: "≳",
            gvertneqq: "≩︀",
            gvnE: "≩︀",
            Hacek: "ˇ",
            hairsp: " ",
            half: "½",
            hamilt: "ℋ",
            HARDcy: "Ъ",
            hardcy: "ъ",
            hArr: "⇔",
            harr: "↔",
            harrcir: "⥈",
            harrw: "↭",
            Hat: "^",
            hbar: "ℏ",
            Hcirc: "Ĥ",
            hcirc: "ĥ",
            hearts: "♥",
            heartsuit: "♥",
            hellip: "…",
            hercon: "⊹",
            Hfr: "ℌ",
            hfr: "𝔥",
            HilbertSpace: "ℋ",
            hksearow: "⤥",
            hkswarow: "⤦",
            hoarr: "⇿",
            homtht: "∻",
            hookleftarrow: "↩",
            hookrightarrow: "↪",
            Hopf: "ℍ",
            hopf: "𝕙",
            horbar: "―",
            HorizontalLine: "─",
            Hscr: "ℋ",
            hscr: "𝒽",
            hslash: "ℏ",
            Hstrok: "Ħ",
            hstrok: "ħ",
            HumpDownHump: "≎",
            HumpEqual: "≏",
            hybull: "⁃",
            hyphen: "‐",
            Iacute: "Í",
            iacute: "í",
            ic: "⁣",
            Icirc: "Î",
            icirc: "î",
            Icy: "И",
            icy: "и",
            Idot: "İ",
            IEcy: "Е",
            iecy: "е",
            iexcl: "¡",
            iff: "⇔",
            Ifr: "ℑ",
            ifr: "𝔦",
            Igrave: "Ì",
            igrave: "ì",
            ii: "ⅈ",
            iiiint: "⨌",
            iiint: "∭",
            iinfin: "⧜",
            iiota: "℩",
            IJlig: "Ĳ",
            ijlig: "ĳ",
            Im: "ℑ",
            Imacr: "Ī",
            imacr: "ī",
            image: "ℑ",
            ImaginaryI: "ⅈ",
            imagline: "ℐ",
            imagpart: "ℑ",
            imath: "ı",
            imof: "⊷",
            imped: "Ƶ",
            Implies: "⇒",
            in: "∈",
            incare: "℅",
            infin: "∞",
            infintie: "⧝",
            inodot: "ı",
            Int: "∬",
            int: "∫",
            intcal: "⊺",
            integers: "ℤ",
            Integral: "∫",
            intercal: "⊺",
            Intersection: "⋂",
            intlarhk: "⨗",
            intprod: "⨼",
            InvisibleComma: "⁣",
            InvisibleTimes: "⁢",
            IOcy: "Ё",
            iocy: "ё",
            Iogon: "Į",
            iogon: "į",
            Iopf: "𝕀",
            iopf: "𝕚",
            Iota: "Ι",
            iota: "ι",
            iprod: "⨼",
            iquest: "¿",
            Iscr: "ℐ",
            iscr: "𝒾",
            isin: "∈",
            isindot: "⋵",
            isinE: "⋹",
            isins: "⋴",
            isinsv: "⋳",
            isinv: "∈",
            it: "⁢",
            Itilde: "Ĩ",
            itilde: "ĩ",
            Iukcy: "І",
            iukcy: "і",
            Iuml: "Ï",
            iuml: "ï",
            Jcirc: "Ĵ",
            jcirc: "ĵ",
            Jcy: "Й",
            jcy: "й",
            Jfr: "𝔍",
            jfr: "𝔧",
            jmath: "ȷ",
            Jopf: "𝕁",
            jopf: "𝕛",
            Jscr: "𝒥",
            jscr: "𝒿",
            Jsercy: "Ј",
            jsercy: "ј",
            Jukcy: "Є",
            jukcy: "є",
            Kappa: "Κ",
            kappa: "κ",
            kappav: "ϰ",
            Kcedil: "Ķ",
            kcedil: "ķ",
            Kcy: "К",
            kcy: "к",
            Kfr: "𝔎",
            kfr: "𝔨",
            kgreen: "ĸ",
            KHcy: "Х",
            khcy: "х",
            KJcy: "Ќ",
            kjcy: "ќ",
            Kopf: "𝕂",
            kopf: "𝕜",
            Kscr: "𝒦",
            kscr: "𝓀",
            lAarr: "⇚",
            Lacute: "Ĺ",
            lacute: "ĺ",
            laemptyv: "⦴",
            lagran: "ℒ",
            Lambda: "Λ",
            lambda: "λ",
            Lang: "⟪",
            lang: "⟨",
            langd: "⦑",
            langle: "⟨",
            lap: "⪅",
            Laplacetrf: "ℒ",
            laquo: "«",
            Larr: "↞",
            lArr: "⇐",
            larr: "←",
            larrb: "⇤",
            larrbfs: "⤟",
            larrfs: "⤝",
            larrhk: "↩",
            larrlp: "↫",
            larrpl: "⤹",
            larrsim: "⥳",
            larrtl: "↢",
            lat: "⪫",
            lAtail: "⤛",
            latail: "⤙",
            late: "⪭",
            lates: "⪭︀",
            lBarr: "⤎",
            lbarr: "⤌",
            lbbrk: "❲",
            lbrace: "{",
            lbrack: "[",
            lbrke: "⦋",
            lbrksld: "⦏",
            lbrkslu: "⦍",
            Lcaron: "Ľ",
            lcaron: "ľ",
            Lcedil: "Ļ",
            lcedil: "ļ",
            lceil: "⌈",
            lcub: "{",
            Lcy: "Л",
            lcy: "л",
            ldca: "⤶",
            ldquo: "“",
            ldquor: "„",
            ldrdhar: "⥧",
            ldrushar: "⥋",
            ldsh: "↲",
            lE: "≦",
            le: "≤",
            LeftAngleBracket: "⟨",
            LeftArrow: "←",
            Leftarrow: "⇐",
            leftarrow: "←",
            LeftArrowBar: "⇤",
            LeftArrowRightArrow: "⇆",
            leftarrowtail: "↢",
            LeftCeiling: "⌈",
            LeftDoubleBracket: "⟦",
            LeftDownTeeVector: "⥡",
            LeftDownVector: "⇃",
            LeftDownVectorBar: "⥙",
            LeftFloor: "⌊",
            leftharpoondown: "↽",
            leftharpoonup: "↼",
            leftleftarrows: "⇇",
            LeftRightArrow: "↔",
            Leftrightarrow: "⇔",
            leftrightarrow: "↔",
            leftrightarrows: "⇆",
            leftrightharpoons: "⇋",
            leftrightsquigarrow: "↭",
            LeftRightVector: "⥎",
            LeftTee: "⊣",
            LeftTeeArrow: "↤",
            LeftTeeVector: "⥚",
            leftthreetimes: "⋋",
            LeftTriangle: "⊲",
            LeftTriangleBar: "⧏",
            LeftTriangleEqual: "⊴",
            LeftUpDownVector: "⥑",
            LeftUpTeeVector: "⥠",
            LeftUpVector: "↿",
            LeftUpVectorBar: "⥘",
            LeftVector: "↼",
            LeftVectorBar: "⥒",
            lEg: "⪋",
            leg: "⋚",
            leq: "≤",
            leqq: "≦",
            leqslant: "⩽",
            les: "⩽",
            lescc: "⪨",
            lesdot: "⩿",
            lesdoto: "⪁",
            lesdotor: "⪃",
            lesg: "⋚︀",
            lesges: "⪓",
            lessapprox: "⪅",
            lessdot: "⋖",
            lesseqgtr: "⋚",
            lesseqqgtr: "⪋",
            LessEqualGreater: "⋚",
            LessFullEqual: "≦",
            LessGreater: "≶",
            lessgtr: "≶",
            LessLess: "⪡",
            lesssim: "≲",
            LessSlantEqual: "⩽",
            LessTilde: "≲",
            lfisht: "⥼",
            lfloor: "⌊",
            Lfr: "𝔏",
            lfr: "𝔩",
            lg: "≶",
            lgE: "⪑",
            lHar: "⥢",
            lhard: "↽",
            lharu: "↼",
            lharul: "⥪",
            lhblk: "▄",
            LJcy: "Љ",
            ljcy: "љ",
            Ll: "⋘",
            ll: "≪",
            llarr: "⇇",
            llcorner: "⌞",
            Lleftarrow: "⇚",
            llhard: "⥫",
            lltri: "◺",
            Lmidot: "Ŀ",
            lmidot: "ŀ",
            lmoust: "⎰",
            lmoustache: "⎰",
            lnap: "⪉",
            lnapprox: "⪉",
            lnE: "≨",
            lne: "⪇",
            lneq: "⪇",
            lneqq: "≨",
            lnsim: "⋦",
            loang: "⟬",
            loarr: "⇽",
            lobrk: "⟦",
            LongLeftArrow: "⟵",
            Longleftarrow: "⟸",
            longleftarrow: "⟵",
            LongLeftRightArrow: "⟷",
            Longleftrightarrow: "⟺",
            longleftrightarrow: "⟷",
            longmapsto: "⟼",
            LongRightArrow: "⟶",
            Longrightarrow: "⟹",
            longrightarrow: "⟶",
            looparrowleft: "↫",
            looparrowright: "↬",
            lopar: "⦅",
            Lopf: "𝕃",
            lopf: "𝕝",
            loplus: "⨭",
            lotimes: "⨴",
            lowast: "∗",
            lowbar: "_",
            LowerLeftArrow: "↙",
            LowerRightArrow: "↘",
            loz: "◊",
            lozenge: "◊",
            lozf: "⧫",
            lpar: "(",
            lparlt: "⦓",
            lrarr: "⇆",
            lrcorner: "⌟",
            lrhar: "⇋",
            lrhard: "⥭",
            lrm: "‎",
            lrtri: "⊿",
            lsaquo: "‹",
            Lscr: "ℒ",
            lscr: "𝓁",
            Lsh: "↰",
            lsh: "↰",
            lsim: "≲",
            lsime: "⪍",
            lsimg: "⪏",
            lsqb: "[",
            lsquo: "‘",
            lsquor: "‚",
            Lstrok: "Ł",
            lstrok: "ł",
            Lt: "≪",
            LT: "<",
            lt: "<",
            ltcc: "⪦",
            ltcir: "⩹",
            ltdot: "⋖",
            lthree: "⋋",
            ltimes: "⋉",
            ltlarr: "⥶",
            ltquest: "⩻",
            ltri: "◃",
            ltrie: "⊴",
            ltrif: "◂",
            ltrPar: "⦖",
            lurdshar: "⥊",
            luruhar: "⥦",
            lvertneqq: "≨︀",
            lvnE: "≨︀",
            macr: "¯",
            male: "♂",
            malt: "✠",
            maltese: "✠",
            Map: "⤅",
            map: "↦",
            mapsto: "↦",
            mapstodown: "↧",
            mapstoleft: "↤",
            mapstoup: "↥",
            marker: "▮",
            mcomma: "⨩",
            Mcy: "М",
            mcy: "м",
            mdash: "—",
            mDDot: "∺",
            measuredangle: "∡",
            MediumSpace: " ",
            Mellintrf: "ℳ",
            Mfr: "𝔐",
            mfr: "𝔪",
            mho: "℧",
            micro: "µ",
            mid: "∣",
            midast: "*",
            midcir: "⫰",
            middot: "·",
            minus: "−",
            minusb: "⊟",
            minusd: "∸",
            minusdu: "⨪",
            MinusPlus: "∓",
            mlcp: "⫛",
            mldr: "…",
            mnplus: "∓",
            models: "⊧",
            Mopf: "𝕄",
            mopf: "𝕞",
            mp: "∓",
            Mscr: "ℳ",
            mscr: "𝓂",
            mstpos: "∾",
            Mu: "Μ",
            mu: "μ",
            multimap: "⊸",
            mumap: "⊸",
            nabla: "∇",
            Nacute: "Ń",
            nacute: "ń",
            nang: "∠⃒",
            nap: "≉",
            napE: "⩰̸",
            napid: "≋̸",
            napos: "ŉ",
            napprox: "≉",
            natur: "♮",
            natural: "♮",
            naturals: "ℕ",
            nbsp: " ",
            nbump: "≎̸",
            nbumpe: "≏̸",
            ncap: "⩃",
            Ncaron: "Ň",
            ncaron: "ň",
            Ncedil: "Ņ",
            ncedil: "ņ",
            ncong: "≇",
            ncongdot: "⩭̸",
            ncup: "⩂",
            Ncy: "Н",
            ncy: "н",
            ndash: "–",
            ne: "≠",
            nearhk: "⤤",
            neArr: "⇗",
            nearr: "↗",
            nearrow: "↗",
            nedot: "≐̸",
            NegativeMediumSpace: "​",
            NegativeThickSpace: "​",
            NegativeThinSpace: "​",
            NegativeVeryThinSpace: "​",
            nequiv: "≢",
            nesear: "⤨",
            nesim: "≂̸",
            NestedGreaterGreater: "≫",
            NestedLessLess: "≪",
            NewLine: "\n",
            nexist: "∄",
            nexists: "∄",
            Nfr: "𝔑",
            nfr: "𝔫",
            ngE: "≧̸",
            nge: "≱",
            ngeq: "≱",
            ngeqq: "≧̸",
            ngeqslant: "⩾̸",
            nges: "⩾̸",
            nGg: "⋙̸",
            ngsim: "≵",
            nGt: "≫⃒",
            ngt: "≯",
            ngtr: "≯",
            nGtv: "≫̸",
            nhArr: "⇎",
            nharr: "↮",
            nhpar: "⫲",
            ni: "∋",
            nis: "⋼",
            nisd: "⋺",
            niv: "∋",
            NJcy: "Њ",
            njcy: "њ",
            nlArr: "⇍",
            nlarr: "↚",
            nldr: "‥",
            nlE: "≦̸",
            nle: "≰",
            nLeftarrow: "⇍",
            nleftarrow: "↚",
            nLeftrightarrow: "⇎",
            nleftrightarrow: "↮",
            nleq: "≰",
            nleqq: "≦̸",
            nleqslant: "⩽̸",
            nles: "⩽̸",
            nless: "≮",
            nLl: "⋘̸",
            nlsim: "≴",
            nLt: "≪⃒",
            nlt: "≮",
            nltri: "⋪",
            nltrie: "⋬",
            nLtv: "≪̸",
            nmid: "∤",
            NoBreak: "⁠",
            NonBreakingSpace: " ",
            Nopf: "ℕ",
            nopf: "𝕟",
            Not: "⫬",
            not: "¬",
            NotCongruent: "≢",
            NotCupCap: "≭",
            NotDoubleVerticalBar: "∦",
            NotElement: "∉",
            NotEqual: "≠",
            NotEqualTilde: "≂̸",
            NotExists: "∄",
            NotGreater: "≯",
            NotGreaterEqual: "≱",
            NotGreaterFullEqual: "≧̸",
            NotGreaterGreater: "≫̸",
            NotGreaterLess: "≹",
            NotGreaterSlantEqual: "⩾̸",
            NotGreaterTilde: "≵",
            NotHumpDownHump: "≎̸",
            NotHumpEqual: "≏̸",
            notin: "∉",
            notindot: "⋵̸",
            notinE: "⋹̸",
            notinva: "∉",
            notinvb: "⋷",
            notinvc: "⋶",
            NotLeftTriangle: "⋪",
            NotLeftTriangleBar: "⧏̸",
            NotLeftTriangleEqual: "⋬",
            NotLess: "≮",
            NotLessEqual: "≰",
            NotLessGreater: "≸",
            NotLessLess: "≪̸",
            NotLessSlantEqual: "⩽̸",
            NotLessTilde: "≴",
            NotNestedGreaterGreater: "⪢̸",
            NotNestedLessLess: "⪡̸",
            notni: "∌",
            notniva: "∌",
            notnivb: "⋾",
            notnivc: "⋽",
            NotPrecedes: "⊀",
            NotPrecedesEqual: "⪯̸",
            NotPrecedesSlantEqual: "⋠",
            NotReverseElement: "∌",
            NotRightTriangle: "⋫",
            NotRightTriangleBar: "⧐̸",
            NotRightTriangleEqual: "⋭",
            NotSquareSubset: "⊏̸",
            NotSquareSubsetEqual: "⋢",
            NotSquareSuperset: "⊐̸",
            NotSquareSupersetEqual: "⋣",
            NotSubset: "⊂⃒",
            NotSubsetEqual: "⊈",
            NotSucceeds: "⊁",
            NotSucceedsEqual: "⪰̸",
            NotSucceedsSlantEqual: "⋡",
            NotSucceedsTilde: "≿̸",
            NotSuperset: "⊃⃒",
            NotSupersetEqual: "⊉",
            NotTilde: "≁",
            NotTildeEqual: "≄",
            NotTildeFullEqual: "≇",
            NotTildeTilde: "≉",
            NotVerticalBar: "∤",
            npar: "∦",
            nparallel: "∦",
            nparsl: "⫽⃥",
            npart: "∂̸",
            npolint: "⨔",
            npr: "⊀",
            nprcue: "⋠",
            npre: "⪯̸",
            nprec: "⊀",
            npreceq: "⪯̸",
            nrArr: "⇏",
            nrarr: "↛",
            nrarrc: "⤳̸",
            nrarrw: "↝̸",
            nRightarrow: "⇏",
            nrightarrow: "↛",
            nrtri: "⋫",
            nrtrie: "⋭",
            nsc: "⊁",
            nsccue: "⋡",
            nsce: "⪰̸",
            Nscr: "𝒩",
            nscr: "𝓃",
            nshortmid: "∤",
            nshortparallel: "∦",
            nsim: "≁",
            nsime: "≄",
            nsimeq: "≄",
            nsmid: "∤",
            nspar: "∦",
            nsqsube: "⋢",
            nsqsupe: "⋣",
            nsub: "⊄",
            nsubE: "⫅̸",
            nsube: "⊈",
            nsubset: "⊂⃒",
            nsubseteq: "⊈",
            nsubseteqq: "⫅̸",
            nsucc: "⊁",
            nsucceq: "⪰̸",
            nsup: "⊅",
            nsupE: "⫆̸",
            nsupe: "⊉",
            nsupset: "⊃⃒",
            nsupseteq: "⊉",
            nsupseteqq: "⫆̸",
            ntgl: "≹",
            Ntilde: "Ñ",
            ntilde: "ñ",
            ntlg: "≸",
            ntriangleleft: "⋪",
            ntrianglelefteq: "⋬",
            ntriangleright: "⋫",
            ntrianglerighteq: "⋭",
            Nu: "Ν",
            nu: "ν",
            num: "#",
            numero: "№",
            numsp: " ",
            nvap: "≍⃒",
            nVDash: "⊯",
            nVdash: "⊮",
            nvDash: "⊭",
            nvdash: "⊬",
            nvge: "≥⃒",
            nvgt: ">⃒",
            nvHarr: "⤄",
            nvinfin: "⧞",
            nvlArr: "⤂",
            nvle: "≤⃒",
            nvlt: "<⃒",
            nvltrie: "⊴⃒",
            nvrArr: "⤃",
            nvrtrie: "⊵⃒",
            nvsim: "∼⃒",
            nwarhk: "⤣",
            nwArr: "⇖",
            nwarr: "↖",
            nwarrow: "↖",
            nwnear: "⤧",
            Oacute: "Ó",
            oacute: "ó",
            oast: "⊛",
            ocir: "⊚",
            Ocirc: "Ô",
            ocirc: "ô",
            Ocy: "О",
            ocy: "о",
            odash: "⊝",
            Odblac: "Ő",
            odblac: "ő",
            odiv: "⨸",
            odot: "⊙",
            odsold: "⦼",
            OElig: "Œ",
            oelig: "œ",
            ofcir: "⦿",
            Ofr: "𝔒",
            ofr: "𝔬",
            ogon: "˛",
            Ograve: "Ò",
            ograve: "ò",
            ogt: "⧁",
            ohbar: "⦵",
            ohm: "Ω",
            oint: "∮",
            olarr: "↺",
            olcir: "⦾",
            olcross: "⦻",
            oline: "‾",
            olt: "⧀",
            Omacr: "Ō",
            omacr: "ō",
            Omega: "Ω",
            omega: "ω",
            Omicron: "Ο",
            omicron: "ο",
            omid: "⦶",
            ominus: "⊖",
            Oopf: "𝕆",
            oopf: "𝕠",
            opar: "⦷",
            OpenCurlyDoubleQuote: "“",
            OpenCurlyQuote: "‘",
            operp: "⦹",
            oplus: "⊕",
            Or: "⩔",
            or: "∨",
            orarr: "↻",
            ord: "⩝",
            order: "ℴ",
            orderof: "ℴ",
            ordf: "ª",
            ordm: "º",
            origof: "⊶",
            oror: "⩖",
            orslope: "⩗",
            orv: "⩛",
            oS: "Ⓢ",
            Oscr: "𝒪",
            oscr: "ℴ",
            Oslash: "Ø",
            oslash: "ø",
            osol: "⊘",
            Otilde: "Õ",
            otilde: "õ",
            Otimes: "⨷",
            otimes: "⊗",
            otimesas: "⨶",
            Ouml: "Ö",
            ouml: "ö",
            ovbar: "⌽",
            OverBar: "‾",
            OverBrace: "⏞",
            OverBracket: "⎴",
            OverParenthesis: "⏜",
            par: "∥",
            para: "¶",
            parallel: "∥",
            parsim: "⫳",
            parsl: "⫽",
            part: "∂",
            PartialD: "∂",
            Pcy: "П",
            pcy: "п",
            percnt: "%",
            period: ".",
            permil: "‰",
            perp: "⊥",
            pertenk: "‱",
            Pfr: "𝔓",
            pfr: "𝔭",
            Phi: "Φ",
            phi: "φ",
            phiv: "ϕ",
            phmmat: "ℳ",
            phone: "☎",
            Pi: "Π",
            pi: "π",
            pitchfork: "⋔",
            piv: "ϖ",
            planck: "ℏ",
            planckh: "ℎ",
            plankv: "ℏ",
            plus: "+",
            plusacir: "⨣",
            plusb: "⊞",
            pluscir: "⨢",
            plusdo: "∔",
            plusdu: "⨥",
            pluse: "⩲",
            PlusMinus: "±",
            plusmn: "±",
            plussim: "⨦",
            plustwo: "⨧",
            pm: "±",
            Poincareplane: "ℌ",
            pointint: "⨕",
            Popf: "ℙ",
            popf: "𝕡",
            pound: "£",
            Pr: "⪻",
            pr: "≺",
            prap: "⪷",
            prcue: "≼",
            prE: "⪳",
            pre: "⪯",
            prec: "≺",
            precapprox: "⪷",
            preccurlyeq: "≼",
            Precedes: "≺",
            PrecedesEqual: "⪯",
            PrecedesSlantEqual: "≼",
            PrecedesTilde: "≾",
            preceq: "⪯",
            precnapprox: "⪹",
            precneqq: "⪵",
            precnsim: "⋨",
            precsim: "≾",
            Prime: "″",
            prime: "′",
            primes: "ℙ",
            prnap: "⪹",
            prnE: "⪵",
            prnsim: "⋨",
            prod: "∏",
            Product: "∏",
            profalar: "⌮",
            profline: "⌒",
            profsurf: "⌓",
            prop: "∝",
            Proportion: "∷",
            Proportional: "∝",
            propto: "∝",
            prsim: "≾",
            prurel: "⊰",
            Pscr: "𝒫",
            pscr: "𝓅",
            Psi: "Ψ",
            psi: "ψ",
            puncsp: " ",
            Qfr: "𝔔",
            qfr: "𝔮",
            qint: "⨌",
            Qopf: "ℚ",
            qopf: "𝕢",
            qprime: "⁗",
            Qscr: "𝒬",
            qscr: "𝓆",
            quaternions: "ℍ",
            quatint: "⨖",
            quest: "?",
            questeq: "≟",
            QUOT: '"',
            quot: '"',
            rAarr: "⇛",
            race: "∽̱",
            Racute: "Ŕ",
            racute: "ŕ",
            radic: "√",
            raemptyv: "⦳",
            Rang: "⟫",
            rang: "⟩",
            rangd: "⦒",
            range: "⦥",
            rangle: "⟩",
            raquo: "»",
            Rarr: "↠",
            rArr: "⇒",
            rarr: "→",
            rarrap: "⥵",
            rarrb: "⇥",
            rarrbfs: "⤠",
            rarrc: "⤳",
            rarrfs: "⤞",
            rarrhk: "↪",
            rarrlp: "↬",
            rarrpl: "⥅",
            rarrsim: "⥴",
            Rarrtl: "⤖",
            rarrtl: "↣",
            rarrw: "↝",
            rAtail: "⤜",
            ratail: "⤚",
            ratio: "∶",
            rationals: "ℚ",
            RBarr: "⤐",
            rBarr: "⤏",
            rbarr: "⤍",
            rbbrk: "❳",
            rbrace: "}",
            rbrack: "]",
            rbrke: "⦌",
            rbrksld: "⦎",
            rbrkslu: "⦐",
            Rcaron: "Ř",
            rcaron: "ř",
            Rcedil: "Ŗ",
            rcedil: "ŗ",
            rceil: "⌉",
            rcub: "}",
            Rcy: "Р",
            rcy: "р",
            rdca: "⤷",
            rdldhar: "⥩",
            rdquo: "”",
            rdquor: "”",
            rdsh: "↳",
            Re: "ℜ",
            real: "ℜ",
            realine: "ℛ",
            realpart: "ℜ",
            reals: "ℝ",
            rect: "▭",
            REG: "®",
            reg: "®",
            ReverseElement: "∋",
            ReverseEquilibrium: "⇋",
            ReverseUpEquilibrium: "⥯",
            rfisht: "⥽",
            rfloor: "⌋",
            Rfr: "ℜ",
            rfr: "𝔯",
            rHar: "⥤",
            rhard: "⇁",
            rharu: "⇀",
            rharul: "⥬",
            Rho: "Ρ",
            rho: "ρ",
            rhov: "ϱ",
            RightAngleBracket: "⟩",
            RightArrow: "→",
            Rightarrow: "⇒",
            rightarrow: "→",
            RightArrowBar: "⇥",
            RightArrowLeftArrow: "⇄",
            rightarrowtail: "↣",
            RightCeiling: "⌉",
            RightDoubleBracket: "⟧",
            RightDownTeeVector: "⥝",
            RightDownVector: "⇂",
            RightDownVectorBar: "⥕",
            RightFloor: "⌋",
            rightharpoondown: "⇁",
            rightharpoonup: "⇀",
            rightleftarrows: "⇄",
            rightleftharpoons: "⇌",
            rightrightarrows: "⇉",
            rightsquigarrow: "↝",
            RightTee: "⊢",
            RightTeeArrow: "↦",
            RightTeeVector: "⥛",
            rightthreetimes: "⋌",
            RightTriangle: "⊳",
            RightTriangleBar: "⧐",
            RightTriangleEqual: "⊵",
            RightUpDownVector: "⥏",
            RightUpTeeVector: "⥜",
            RightUpVector: "↾",
            RightUpVectorBar: "⥔",
            RightVector: "⇀",
            RightVectorBar: "⥓",
            ring: "˚",
            risingdotseq: "≓",
            rlarr: "⇄",
            rlhar: "⇌",
            rlm: "‏",
            rmoust: "⎱",
            rmoustache: "⎱",
            rnmid: "⫮",
            roang: "⟭",
            roarr: "⇾",
            robrk: "⟧",
            ropar: "⦆",
            Ropf: "ℝ",
            ropf: "𝕣",
            roplus: "⨮",
            rotimes: "⨵",
            RoundImplies: "⥰",
            rpar: ")",
            rpargt: "⦔",
            rppolint: "⨒",
            rrarr: "⇉",
            Rrightarrow: "⇛",
            rsaquo: "›",
            Rscr: "ℛ",
            rscr: "𝓇",
            Rsh: "↱",
            rsh: "↱",
            rsqb: "]",
            rsquo: "’",
            rsquor: "’",
            rthree: "⋌",
            rtimes: "⋊",
            rtri: "▹",
            rtrie: "⊵",
            rtrif: "▸",
            rtriltri: "⧎",
            RuleDelayed: "⧴",
            ruluhar: "⥨",
            rx: "℞",
            Sacute: "Ś",
            sacute: "ś",
            sbquo: "‚",
            Sc: "⪼",
            sc: "≻",
            scap: "⪸",
            Scaron: "Š",
            scaron: "š",
            sccue: "≽",
            scE: "⪴",
            sce: "⪰",
            Scedil: "Ş",
            scedil: "ş",
            Scirc: "Ŝ",
            scirc: "ŝ",
            scnap: "⪺",
            scnE: "⪶",
            scnsim: "⋩",
            scpolint: "⨓",
            scsim: "≿",
            Scy: "С",
            scy: "с",
            sdot: "⋅",
            sdotb: "⊡",
            sdote: "⩦",
            searhk: "⤥",
            seArr: "⇘",
            searr: "↘",
            searrow: "↘",
            sect: "§",
            semi: ";",
            seswar: "⤩",
            setminus: "∖",
            setmn: "∖",
            sext: "✶",
            Sfr: "𝔖",
            sfr: "𝔰",
            sfrown: "⌢",
            sharp: "♯",
            SHCHcy: "Щ",
            shchcy: "щ",
            SHcy: "Ш",
            shcy: "ш",
            ShortDownArrow: "↓",
            ShortLeftArrow: "←",
            shortmid: "∣",
            shortparallel: "∥",
            ShortRightArrow: "→",
            ShortUpArrow: "↑",
            shy: "­",
            Sigma: "Σ",
            sigma: "σ",
            sigmaf: "ς",
            sigmav: "ς",
            sim: "∼",
            simdot: "⩪",
            sime: "≃",
            simeq: "≃",
            simg: "⪞",
            simgE: "⪠",
            siml: "⪝",
            simlE: "⪟",
            simne: "≆",
            simplus: "⨤",
            simrarr: "⥲",
            slarr: "←",
            SmallCircle: "∘",
            smallsetminus: "∖",
            smashp: "⨳",
            smeparsl: "⧤",
            smid: "∣",
            smile: "⌣",
            smt: "⪪",
            smte: "⪬",
            smtes: "⪬︀",
            SOFTcy: "Ь",
            softcy: "ь",
            sol: "/",
            solb: "⧄",
            solbar: "⌿",
            Sopf: "𝕊",
            sopf: "𝕤",
            spades: "♠",
            spadesuit: "♠",
            spar: "∥",
            sqcap: "⊓",
            sqcaps: "⊓︀",
            sqcup: "⊔",
            sqcups: "⊔︀",
            Sqrt: "√",
            sqsub: "⊏",
            sqsube: "⊑",
            sqsubset: "⊏",
            sqsubseteq: "⊑",
            sqsup: "⊐",
            sqsupe: "⊒",
            sqsupset: "⊐",
            sqsupseteq: "⊒",
            squ: "□",
            Square: "□",
            square: "□",
            SquareIntersection: "⊓",
            SquareSubset: "⊏",
            SquareSubsetEqual: "⊑",
            SquareSuperset: "⊐",
            SquareSupersetEqual: "⊒",
            SquareUnion: "⊔",
            squarf: "▪",
            squf: "▪",
            srarr: "→",
            Sscr: "𝒮",
            sscr: "𝓈",
            ssetmn: "∖",
            ssmile: "⌣",
            sstarf: "⋆",
            Star: "⋆",
            star: "☆",
            starf: "★",
            straightepsilon: "ϵ",
            straightphi: "ϕ",
            strns: "¯",
            Sub: "⋐",
            sub: "⊂",
            subdot: "⪽",
            subE: "⫅",
            sube: "⊆",
            subedot: "⫃",
            submult: "⫁",
            subnE: "⫋",
            subne: "⊊",
            subplus: "⪿",
            subrarr: "⥹",
            Subset: "⋐",
            subset: "⊂",
            subseteq: "⊆",
            subseteqq: "⫅",
            SubsetEqual: "⊆",
            subsetneq: "⊊",
            subsetneqq: "⫋",
            subsim: "⫇",
            subsub: "⫕",
            subsup: "⫓",
            succ: "≻",
            succapprox: "⪸",
            succcurlyeq: "≽",
            Succeeds: "≻",
            SucceedsEqual: "⪰",
            SucceedsSlantEqual: "≽",
            SucceedsTilde: "≿",
            succeq: "⪰",
            succnapprox: "⪺",
            succneqq: "⪶",
            succnsim: "⋩",
            succsim: "≿",
            SuchThat: "∋",
            Sum: "∑",
            sum: "∑",
            sung: "♪",
            Sup: "⋑",
            sup: "⊃",
            sup1: "¹",
            sup2: "²",
            sup3: "³",
            supdot: "⪾",
            supdsub: "⫘",
            supE: "⫆",
            supe: "⊇",
            supedot: "⫄",
            Superset: "⊃",
            SupersetEqual: "⊇",
            suphsol: "⟉",
            suphsub: "⫗",
            suplarr: "⥻",
            supmult: "⫂",
            supnE: "⫌",
            supne: "⊋",
            supplus: "⫀",
            Supset: "⋑",
            supset: "⊃",
            supseteq: "⊇",
            supseteqq: "⫆",
            supsetneq: "⊋",
            supsetneqq: "⫌",
            supsim: "⫈",
            supsub: "⫔",
            supsup: "⫖",
            swarhk: "⤦",
            swArr: "⇙",
            swarr: "↙",
            swarrow: "↙",
            swnwar: "⤪",
            szlig: "ß",
            Tab: "	",
            target: "⌖",
            Tau: "Τ",
            tau: "τ",
            tbrk: "⎴",
            Tcaron: "Ť",
            tcaron: "ť",
            Tcedil: "Ţ",
            tcedil: "ţ",
            Tcy: "Т",
            tcy: "т",
            tdot: "⃛",
            telrec: "⌕",
            Tfr: "𝔗",
            tfr: "𝔱",
            there4: "∴",
            Therefore: "∴",
            therefore: "∴",
            Theta: "Θ",
            theta: "θ",
            thetasym: "ϑ",
            thetav: "ϑ",
            thickapprox: "≈",
            thicksim: "∼",
            ThickSpace: "  ",
            thinsp: " ",
            ThinSpace: " ",
            thkap: "≈",
            thksim: "∼",
            THORN: "Þ",
            thorn: "þ",
            Tilde: "∼",
            tilde: "˜",
            TildeEqual: "≃",
            TildeFullEqual: "≅",
            TildeTilde: "≈",
            times: "×",
            timesb: "⊠",
            timesbar: "⨱",
            timesd: "⨰",
            tint: "∭",
            toea: "⤨",
            top: "⊤",
            topbot: "⌶",
            topcir: "⫱",
            Topf: "𝕋",
            topf: "𝕥",
            topfork: "⫚",
            tosa: "⤩",
            tprime: "‴",
            TRADE: "™",
            trade: "™",
            triangle: "▵",
            triangledown: "▿",
            triangleleft: "◃",
            trianglelefteq: "⊴",
            triangleq: "≜",
            triangleright: "▹",
            trianglerighteq: "⊵",
            tridot: "◬",
            trie: "≜",
            triminus: "⨺",
            TripleDot: "⃛",
            triplus: "⨹",
            trisb: "⧍",
            tritime: "⨻",
            trpezium: "⏢",
            Tscr: "𝒯",
            tscr: "𝓉",
            TScy: "Ц",
            tscy: "ц",
            TSHcy: "Ћ",
            tshcy: "ћ",
            Tstrok: "Ŧ",
            tstrok: "ŧ",
            twixt: "≬",
            twoheadleftarrow: "↞",
            twoheadrightarrow: "↠",
            Uacute: "Ú",
            uacute: "ú",
            Uarr: "↟",
            uArr: "⇑",
            uarr: "↑",
            Uarrocir: "⥉",
            Ubrcy: "Ў",
            ubrcy: "ў",
            Ubreve: "Ŭ",
            ubreve: "ŭ",
            Ucirc: "Û",
            ucirc: "û",
            Ucy: "У",
            ucy: "у",
            udarr: "⇅",
            Udblac: "Ű",
            udblac: "ű",
            udhar: "⥮",
            ufisht: "⥾",
            Ufr: "𝔘",
            ufr: "𝔲",
            Ugrave: "Ù",
            ugrave: "ù",
            uHar: "⥣",
            uharl: "↿",
            uharr: "↾",
            uhblk: "▀",
            ulcorn: "⌜",
            ulcorner: "⌜",
            ulcrop: "⌏",
            ultri: "◸",
            Umacr: "Ū",
            umacr: "ū",
            uml: "¨",
            UnderBar: "_",
            UnderBrace: "⏟",
            UnderBracket: "⎵",
            UnderParenthesis: "⏝",
            Union: "⋃",
            UnionPlus: "⊎",
            Uogon: "Ų",
            uogon: "ų",
            Uopf: "𝕌",
            uopf: "𝕦",
            UpArrow: "↑",
            Uparrow: "⇑",
            uparrow: "↑",
            UpArrowBar: "⤒",
            UpArrowDownArrow: "⇅",
            UpDownArrow: "↕",
            Updownarrow: "⇕",
            updownarrow: "↕",
            UpEquilibrium: "⥮",
            upharpoonleft: "↿",
            upharpoonright: "↾",
            uplus: "⊎",
            UpperLeftArrow: "↖",
            UpperRightArrow: "↗",
            Upsi: "ϒ",
            upsi: "υ",
            upsih: "ϒ",
            Upsilon: "Υ",
            upsilon: "υ",
            UpTee: "⊥",
            UpTeeArrow: "↥",
            upuparrows: "⇈",
            urcorn: "⌝",
            urcorner: "⌝",
            urcrop: "⌎",
            Uring: "Ů",
            uring: "ů",
            urtri: "◹",
            Uscr: "𝒰",
            uscr: "𝓊",
            utdot: "⋰",
            Utilde: "Ũ",
            utilde: "ũ",
            utri: "▵",
            utrif: "▴",
            uuarr: "⇈",
            Uuml: "Ü",
            uuml: "ü",
            uwangle: "⦧",
            vangrt: "⦜",
            varepsilon: "ϵ",
            varkappa: "ϰ",
            varnothing: "∅",
            varphi: "ϕ",
            varpi: "ϖ",
            varpropto: "∝",
            vArr: "⇕",
            varr: "↕",
            varrho: "ϱ",
            varsigma: "ς",
            varsubsetneq: "⊊︀",
            varsubsetneqq: "⫋︀",
            varsupsetneq: "⊋︀",
            varsupsetneqq: "⫌︀",
            vartheta: "ϑ",
            vartriangleleft: "⊲",
            vartriangleright: "⊳",
            Vbar: "⫫",
            vBar: "⫨",
            vBarv: "⫩",
            Vcy: "В",
            vcy: "в",
            VDash: "⊫",
            Vdash: "⊩",
            vDash: "⊨",
            vdash: "⊢",
            Vdashl: "⫦",
            Vee: "⋁",
            vee: "∨",
            veebar: "⊻",
            veeeq: "≚",
            vellip: "⋮",
            Verbar: "‖",
            verbar: "|",
            Vert: "‖",
            vert: "|",
            VerticalBar: "∣",
            VerticalLine: "|",
            VerticalSeparator: "❘",
            VerticalTilde: "≀",
            VeryThinSpace: " ",
            Vfr: "𝔙",
            vfr: "𝔳",
            vltri: "⊲",
            vnsub: "⊂⃒",
            vnsup: "⊃⃒",
            Vopf: "𝕍",
            vopf: "𝕧",
            vprop: "∝",
            vrtri: "⊳",
            Vscr: "𝒱",
            vscr: "𝓋",
            vsubnE: "⫋︀",
            vsubne: "⊊︀",
            vsupnE: "⫌︀",
            vsupne: "⊋︀",
            Vvdash: "⊪",
            vzigzag: "⦚",
            Wcirc: "Ŵ",
            wcirc: "ŵ",
            wedbar: "⩟",
            Wedge: "⋀",
            wedge: "∧",
            wedgeq: "≙",
            weierp: "℘",
            Wfr: "𝔚",
            wfr: "𝔴",
            Wopf: "𝕎",
            wopf: "𝕨",
            wp: "℘",
            wr: "≀",
            wreath: "≀",
            Wscr: "𝒲",
            wscr: "𝓌",
            xcap: "⋂",
            xcirc: "◯",
            xcup: "⋃",
            xdtri: "▽",
            Xfr: "𝔛",
            xfr: "𝔵",
            xhArr: "⟺",
            xharr: "⟷",
            Xi: "Ξ",
            xi: "ξ",
            xlArr: "⟸",
            xlarr: "⟵",
            xmap: "⟼",
            xnis: "⋻",
            xodot: "⨀",
            Xopf: "𝕏",
            xopf: "𝕩",
            xoplus: "⨁",
            xotime: "⨂",
            xrArr: "⟹",
            xrarr: "⟶",
            Xscr: "𝒳",
            xscr: "𝓍",
            xsqcup: "⨆",
            xuplus: "⨄",
            xutri: "△",
            xvee: "⋁",
            xwedge: "⋀",
            Yacute: "Ý",
            yacute: "ý",
            YAcy: "Я",
            yacy: "я",
            Ycirc: "Ŷ",
            ycirc: "ŷ",
            Ycy: "Ы",
            ycy: "ы",
            yen: "¥",
            Yfr: "𝔜",
            yfr: "𝔶",
            YIcy: "Ї",
            yicy: "ї",
            Yopf: "𝕐",
            yopf: "𝕪",
            Yscr: "𝒴",
            yscr: "𝓎",
            YUcy: "Ю",
            yucy: "ю",
            Yuml: "Ÿ",
            yuml: "ÿ",
            Zacute: "Ź",
            zacute: "ź",
            Zcaron: "Ž",
            zcaron: "ž",
            Zcy: "З",
            zcy: "з",
            Zdot: "Ż",
            zdot: "ż",
            zeetrf: "ℨ",
            ZeroWidthSpace: "​",
            Zeta: "Ζ",
            zeta: "ζ",
            Zfr: "ℨ",
            zfr: "𝔷",
            ZHcy: "Ж",
            zhcy: "ж",
            zigrarr: "⇝",
            Zopf: "ℤ",
            zopf: "𝕫",
            Zscr: "𝒵",
            zscr: "𝓏",
            zwj: "‍",
            zwnj: "‌"
        });
        r.entityMap = r.HTML_ENTITIES;
    },
    283344,
    (e, t, r)=>{
        var NAMESPACE = e.r(653743).NAMESPACE;
        var i = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
        var a = RegExp("[\\-\\.0-9" + i.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
        var o = RegExp("^" + i.source + a.source + "*(?::" + i.source + a.source + "*)?$");
        function s(e, t) {
            this.message = e;
            this.locator = t;
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, s);
            }
        }
        function l() {}
        function u(e, t) {
            t.lineNumber = e.lineNumber;
            t.columnNumber = e.columnNumber;
            return t;
        }
        function c(e, t, r) {
            const e_tagName = e.tagName;
            let a = null;
            for(var o = e.length; o--;){
                var s = e[o];
                const l = s.qName;
                const u = s.value;
                var c = l.indexOf(":");
                if (c > 0) {
                    var h = s.prefix = l.slice(0, c);
                    var p = l.slice(c + 1);
                    var f = h === "xmlns" && p;
                } else {
                    p = l;
                    h = null;
                    f = l === "xmlns" && "";
                }
                s.localName = p;
                if (f !== false) {
                    if (a == null) {
                        a = {};
                        d(r, r = {});
                    }
                    r[f] = a[f] = u;
                    s.uri = NAMESPACE.XMLNS;
                    t.startPrefixMapping(f, u);
                }
            }
            for(var o = e.length; o--;){
                var h = (s = e[o]).prefix;
                h && (h === "xml" && (s.uri = NAMESPACE.XML), h !== "xmlns" && (s.uri = r[h || ""]));
            }
            var c = e_tagName.indexOf(":");
            if (c > 0) {
                h = e.prefix = e_tagName.slice(0, c);
                p = e.localName = e_tagName.slice(c + 1);
            } else {
                h = null;
                p = e.localName = e_tagName;
            }
            const m = e.uri = r[h || ""];
            t.startElement(m, p, e_tagName, e);
            if (!e.closed) {
                e.currentNSMap = r;
                e.localNSMap = a;
                return true;
            }
            t.endElement(m, p, e_tagName);
            if (a) {
                for(h in a){
                    if (Object.prototype.hasOwnProperty.call(a, h)) {
                        t.endPrefixMapping(h);
                    }
                }
            }
        }
        function d(e, t) {
            for(const r in e){
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    t[r] = e[r];
                }
            }
        }
        function h() {
            this.attributeNames = {};
        }
        s.prototype = Error();
        s.prototype.name = s.name;
        l.prototype = {
            parse (e, t, r) {
                const domBuilder = this.domBuilder;
                domBuilder.startDocument();
                d(t, t = {});
                ((e, currentNSMap, r, i, a)=>{
                    function o(e) {
                        let t;
                        const n = e.slice(1, -1);
                        if (Object.hasOwnProperty.call(r, n)) {
                            return r[n];
                        }
                        if (n.charAt(0) === "#") {
                            if ((t = parseInt(n.substr(1).replace("x", "0x"))) > 65535) {
                                return String.fromCharCode(55296 + ((t -= 65536) >> 10), 56320 + (1023 & t));
                            }
                            return String.fromCharCode(t);
                        }
                        a.error("entity not found:" + e);
                        return e;
                    }
                    function l(t) {
                        if (t > x) {
                            const r = e.substring(x, t).replace(/&#?\w+;/g, o);
                            if (i_locator) {
                                d(x);
                            }
                            i.characters(r, 0, t - x);
                            x = t;
                        }
                    }
                    function d(t, r) {
                        while(t >= f && (r = m.exec(e))){
                            f = (p = r.index) + r[0].length;
                            i_locator.lineNumber++;
                        }
                        i_locator.columnNumber = t - p + 1;
                    }
                    var p = 0;
                    var f = 0;
                    var m = /.*(?:\r\n?|\n)|.*$/g;
                    var i_locator = i.locator;
                    const b = [
                        {
                            currentNSMap
                        }
                    ];
                    const _ = {};
                    var x = 0;
                    while(true){
                        try {
                            var T = e.indexOf("<", x);
                            if (T < 0) {
                                if (!e.substr(x).match(/^\s*$/)) {
                                    const y = i.doc;
                                    const S = y.createTextNode(e.substr(x));
                                    y.appendChild(S);
                                    i.currentElement = S;
                                }
                                return;
                            }
                            if (T > x) {
                                l(T);
                            }
                            switch(e.charAt(T + 1)){
                                case "/":
                                    var v = e.indexOf(">", T + 3);
                                    let R = e.substring(T + 2, v).replace(/[ \t\n\r]+$/g, "");
                                    const E = b.pop();
                                    if (v < 0) {
                                        R = e.substring(T + 2).replace(/[\s<].*/, "");
                                        a.error("end tag name: " + R + " is not complete:" + E.tagName);
                                        v = T + 1 + R.length;
                                    } else if (R.match(/\s</)) {
                                        R = R.replace(/[\s<].*/, "");
                                        a.error("end tag name: " + R + " maybe not complete");
                                        v = T + 1 + R.length;
                                    }
                                    const A = E.localNSMap;
                                    const M = E.tagName == R;
                                    if (M || E.tagName && E.tagName.toLowerCase() == R.toLowerCase()) {
                                        i.endElement(E.uri, E.localName, R);
                                        if (A) {
                                            for(const C in A){
                                                if (Object.prototype.hasOwnProperty.call(A, C)) {
                                                    i.endPrefixMapping(C);
                                                }
                                            }
                                        }
                                        if (!M) {
                                            a.fatalError("end tag name: " + R + " is not match the current start tagName:" + E.tagName);
                                        }
                                    } else {
                                        b.push(E);
                                    }
                                    v++;
                                    break;
                                case "?":
                                    if (i_locator) {
                                        d(T);
                                    }
                                    v = ((e, t, r)=>{
                                        const n = e.indexOf("?>", t);
                                        if (n) {
                                            const i = e.substring(t, n).match(/^<\?(\S*)\s*([\s\S]*?)$/);
                                            if (i) {
                                                i[0].length;
                                                r.processingInstruction(i[1], i[2]);
                                                return n + 2;
                                            }
                                        }
                                        return -1;
                                    })(e, T, i);
                                    break;
                                case "!":
                                    if (i_locator) {
                                        d(T);
                                    }
                                    v = ((e, t, r, n)=>{
                                        if (e.charAt(t + 2) === "-") {
                                            if (e.charAt(t + 3) === "-") {
                                                var i = e.indexOf("-->", t + 4);
                                                if (i > t) {
                                                    r.comment(e, t + 4, i - t - 4);
                                                    return i + 3;
                                                }
                                                n.error("Unclosed comment");
                                            }
                                        } else {
                                            if (e.substr(t + 3, 6) == "CDATA[") {
                                                var i = e.indexOf("]]>", t + 9);
                                                r.startCDATA();
                                                r.characters(e, t + 9, i - t - 9);
                                                r.endCDATA();
                                                return i + 3;
                                            }
                                            const a = ((e, t)=>{
                                                let r;
                                                const n = [];
                                                const i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                                                i.lastIndex = t;
                                                i.exec(e);
                                                while(r = i.exec(e)){
                                                    n.push(r);
                                                    if (r[1]) {
                                                        return n;
                                                    }
                                                }
                                            })(e, t);
                                            const o = a.length;
                                            if (o > 1 && /!doctype/i.test(a[0][0])) {
                                                const s = a[1][0];
                                                let l = false;
                                                let u = false;
                                                o > 3 && (/^public$/i.test(a[2][0]) ? (l = a[3][0], u = o > 4 && a[4][0]) : /^system$/i.test(a[2][0]) && (u = a[3][0]));
                                                const c = a[o - 1];
                                                r.startDTD(s, l, u);
                                                r.endDTD();
                                                return c.index + c[0].length;
                                            }
                                        }
                                        return -1;
                                    })(e, T, i, a);
                                    break;
                                default:
                                    if (i_locator) {
                                        d(T);
                                    }
                                    const G = new h;
                                    const w = b[b.length - 1].currentNSMap;
                                    var v = ((e, t, r, i, a, o)=>{
                                        function s(e, t, n) {
                                            if (r.attributeNames.hasOwnProperty(e)) {
                                                o.fatalError("Attribute " + e + " redefined");
                                            }
                                            r.addValue(e, t.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, a), n);
                                        }
                                        let l;
                                        var u;
                                        let c = ++t;
                                        let d = 0;
                                        while(true){
                                            let h = e.charAt(c);
                                            switch(h){
                                                case "=":
                                                    if (d === 1) {
                                                        l = e.slice(t, c);
                                                        d = 3;
                                                    } else if (d === 2) {
                                                        d = 3;
                                                    } else {
                                                        throw Error("attribute equal must after attrName");
                                                    }
                                                    break;
                                                case "'":
                                                case '"':
                                                    if (d === 3 || d === 1) {
                                                        if (d === 1) {
                                                            o.warning('attribute value must after "="');
                                                            l = e.slice(t, c);
                                                        }
                                                        t = c + 1;
                                                        if ((c = e.indexOf(h, t)) > 0) {
                                                            s(l, u = e.slice(t, c), t - 1);
                                                            d = 5;
                                                        } else {
                                                            throw Error("attribute value no end '" + h + "' match");
                                                        }
                                                    } else if (d == 4) {
                                                        s(l, u = e.slice(t, c), t);
                                                        o.warning('attribute "' + l + '" missed start quot(' + h + ")!!");
                                                        t = c + 1;
                                                        d = 5;
                                                    } else {
                                                        throw Error('attribute value must after "="');
                                                    }
                                                    break;
                                                case "/":
                                                    switch(d){
                                                        case 0:
                                                            r.setTagName(e.slice(t, c));
                                                        case 5:
                                                        case 6:
                                                        case 7:
                                                            d = 7;
                                                            r.closed = true;
                                                        case 4:
                                                        case 1:
                                                            break;
                                                        case 2:
                                                            r.closed = true;
                                                            break;
                                                        default:
                                                            throw Error("attribute invalid close char('/')");
                                                    }
                                                    break;
                                                case "":
                                                    o.error("unexpected end of input");
                                                    if (d == 0) {
                                                        r.setTagName(e.slice(t, c));
                                                    }
                                                    return c;
                                                case ">":
                                                    switch(d){
                                                        case 0:
                                                            r.setTagName(e.slice(t, c));
                                                        case 5:
                                                        case 6:
                                                        case 7:
                                                            break;
                                                        case 4:
                                                        case 1:
                                                            if ((u = e.slice(t, c)).slice(-1) === "/") {
                                                                r.closed = true;
                                                                u = u.slice(0, -1);
                                                            }
                                                        case 2:
                                                            if (d === 2) {
                                                                u = l;
                                                            }
                                                            if (d == 4) {
                                                                o.warning('attribute "' + u + '" missed quot(")!');
                                                                s(l, u, t);
                                                            } else {
                                                                if (!(NAMESPACE.isHTML(i[""]) && u.match(/^(?:disabled|checked|selected)$/i))) {
                                                                    o.warning('attribute "' + u + '" missed value!! "' + u + '" instead!!');
                                                                }
                                                                s(u, u, t);
                                                            }
                                                            break;
                                                        case 3:
                                                            throw Error("attribute value missed!!");
                                                    }
                                                    return c;
                                                case "":
                                                    h = " ";
                                                default:
                                                    if (h <= " ") {
                                                        switch(d){
                                                            case 0:
                                                                r.setTagName(e.slice(t, c));
                                                                d = 6;
                                                                break;
                                                            case 1:
                                                                l = e.slice(t, c);
                                                                d = 2;
                                                                break;
                                                            case 4:
                                                                var u = e.slice(t, c);
                                                                o.warning('attribute "' + u + '" missed quot(")!!');
                                                                s(l, u, t);
                                                            case 5:
                                                                d = 6;
                                                        }
                                                    } else {
                                                        switch(d){
                                                            case 2:
                                                                r.tagName;
                                                                if (!(NAMESPACE.isHTML(i[""]) && l.match(/^(?:disabled|checked|selected)$/i))) {
                                                                    o.warning('attribute "' + l + '" missed value!! "' + l + '" instead2!!');
                                                                }
                                                                s(l, l, t);
                                                                t = c;
                                                                d = 1;
                                                                break;
                                                            case 5:
                                                                o.warning('attribute space is required"' + l + '"!!');
                                                            case 6:
                                                                d = 1;
                                                                t = c;
                                                                break;
                                                            case 3:
                                                                d = 4;
                                                                t = c;
                                                                break;
                                                            case 7:
                                                                throw Error("elements closed character '/' and '>' must be connected to");
                                                        }
                                                    }
                                            }
                                            c++;
                                        }
                                    })(e, T, G, w, o, a);
                                    const D = G.length;
                                    if (!G.closed && ((e, t, r, n)=>{
                                        let i = n[r];
                                        if (i == null) {
                                            if ((i = e.lastIndexOf("</" + r + ">")) < t) {
                                                i = e.lastIndexOf("</" + r);
                                            }
                                            n[r] = i;
                                        }
                                        return i < t;
                                    })(e, v, G.tagName, _)) {
                                        G.closed = true;
                                        if (!r.nbsp) {
                                            a.warning("unclosed xml attribute");
                                        }
                                    }
                                    if (i_locator && D) {
                                        const P = u(i_locator, {});
                                        for(let O = 0; O < D; O++){
                                            const B = G[O];
                                            d(B.offset);
                                            B.locator = u(i_locator, {});
                                        }
                                        i.locator = P;
                                        if (c(G, i, w)) {
                                            b.push(G);
                                        }
                                        i.locator = i_locator;
                                    } else {
                                        if (c(G, i, w)) {
                                            b.push(G);
                                        }
                                    }
                                    if (NAMESPACE.isHTML(G.uri) && !G.closed) {
                                        v = ((e, t, r, n, i)=>{
                                            if (/^(?:script|textarea)$/i.test(r)) {
                                                const a = e.indexOf("</" + r + ">", t);
                                                let o = e.substring(t + 1, a);
                                                if (/[&<]/.test(o)) {
                                                    if (!/^script$/i.test(r)) {
                                                        o = o.replace(/&#?\w+;/g, n);
                                                    }
                                                    i.characters(o, 0, o.length);
                                                    return a;
                                                }
                                            }
                                            return t + 1;
                                        })(e, v, G.tagName, o, i);
                                    } else {
                                        v++;
                                    }
                            }
                        } catch (error) {
                            if (error instanceof s) {
                                throw error;
                            }
                            a.error("element parse error: " + error);
                            v = -1;
                        }
                        if (v > x) {
                            x = v;
                        } else {
                            l(Math.max(T, x) + 1);
                        }
                    }
                })(e, t, r, domBuilder, this.errorHandler);
                domBuilder.endDocument();
            }
        };
        h.prototype = {
            setTagName (e) {
                if (!o.test(e)) {
                    throw Error("invalid tagName:" + e);
                }
                this.tagName = e;
            },
            addValue (qName, value, offset) {
                if (!o.test(qName)) {
                    throw Error("invalid attribute:" + qName);
                }
                this.attributeNames[qName] = this.length;
                this[this.length++] = {
                    qName,
                    value,
                    offset
                };
            },
            length: 0,
            getLocalName (e) {
                return this[e].localName;
            },
            getLocator (e) {
                return this[e].locator;
            },
            getQName (e) {
                return this[e].qName;
            },
            getURI (e) {
                return this[e].uri;
            },
            getValue (e) {
                return this[e].value;
            }
        };
        r.XMLReader = l;
        r.ParseError = s;
    },
    186665,
    (e, t, r)=>{
        var n = e.r(653743);
        var i = e.r(577923);
        var a = e.r(719053);
        var o = e.r(283344);
        var i_DOMImplementation = i.DOMImplementation;
        var n_NAMESPACE = n.NAMESPACE;
        var o_ParseError = o.ParseError;
        var o_XMLReader = o.XMLReader;
        function d(e) {
            return e.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
        }
        class h {
            constructor(e){
                this.options = e || {
                    locator: {}
                };
            }
            parseFromString(e, t) {
                const options = this.options;
                const n = new o_XMLReader;
                const i = options.domBuilder || new p;
                const r_errorHandler = options.errorHandler;
                const r_locator = options.locator;
                const u = options.xmlns || {};
                const h = /\/x?html?$/.test(t);
                const f = h ? a.HTML_ENTITIES : a.XML_ENTITIES;
                if (r_locator) {
                    i.setDocumentLocator(r_locator);
                }
                n.errorHandler = ((e, t, r)=>{
                    if (!e) {
                        if (t instanceof p) {
                            return t;
                        }
                        e = t;
                    }
                    const n = {};
                    const i = e instanceof Function;
                    function a(t) {
                        let a = e[t];
                        if (!a && i) {
                            a = e.length == 2 ? (r)=>{
                                e(t, r);
                            } : e;
                        }
                        n[t] = a && ((e)=>{
                            a("[xmldom " + t + "]	" + e + m(r));
                        }) || (()=>{});
                    }
                    r = r || {};
                    a("warning");
                    a("error");
                    a("fatalError");
                    return n;
                })(r_errorHandler, i, r_locator);
                n.domBuilder = options.domBuilder || i;
                if (h) {
                    u[""] = n_NAMESPACE.HTML;
                }
                u.xml = u.xml || n_NAMESPACE.XML;
                const g = options.normalizeLineEndings || d;
                if (e && typeof e === "string") {
                    n.parse(g(e), u, f);
                } else {
                    n.errorHandler.error("invalid doc source");
                }
                return i.doc;
            }
        }
        function p() {
            this.cdata = false;
        }
        function f(e, t) {
            t.lineNumber = e.lineNumber;
            t.columnNumber = e.columnNumber;
        }
        function m(e) {
            if (e) {
                return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
            }
        }
        function g(e, t, r) {
            if (typeof e === "string") {
                return e.substr(t, r);
            }
            if (e.length >= t + r || t) {
                return new java.lang.String(e, t, r) + "";
            }
            return e;
        }
        function b(e, t) {
            if (e.currentElement) {
                e.currentElement.appendChild(t);
            } else {
                e.doc.appendChild(t);
            }
        }
        p.prototype = {
            startDocument () {
                this.doc = new i_DOMImplementation().createDocument(null, null, null);
                if (this.locator) {
                    this.doc.documentURI = this.locator.systemId;
                }
            },
            startElement (e, t, r, n) {
                const doc = this.doc;
                const a = doc.createElementNS(e, r || t);
                const n_length = n.length;
                b(this, a);
                this.currentElement = a;
                if (this.locator) {
                    f(this.locator, a);
                }
                for(let s = 0; s < n_length; s++){
                    var e = n.getURI(s);
                    const l = n.getValue(s);
                    var r = n.getQName(s);
                    const u = doc.createAttributeNS(e, r);
                    if (this.locator) {
                        f(n.getLocator(s), u);
                    }
                    u.value = u.nodeValue = l;
                    a.setAttributeNode(u);
                }
            },
            endElement (e, t, r) {
                const currentElement = this.currentElement;
                currentElement.tagName;
                this.currentElement = currentElement.parentNode;
            },
            startPrefixMapping (e, t) {},
            endPrefixMapping (e) {},
            processingInstruction (e, t) {
                const r = this.doc.createProcessingInstruction(e, t);
                if (this.locator) {
                    f(this.locator, r);
                }
                b(this, r);
            },
            ignorableWhitespace (e, t, r) {},
            characters (e, t, r) {
                if (e = g.apply(this, arguments)) {
                    if (this.cdata) var n = this.doc.createCDATASection(e);
                    else {
                        var n = this.doc.createTextNode(e);
                    }
                    if (this.currentElement) {
                        this.currentElement.appendChild(n);
                    } else if (/^\s*$/.test(e)) {
                        this.doc.appendChild(n);
                    }
                    if (this.locator) {
                        f(this.locator, n);
                    }
                }
            },
            skippedEntity (e) {},
            endDocument () {
                this.doc.normalize();
            },
            setDocumentLocator (e) {
                if (this.locator = e) {
                    e.lineNumber = 0;
                }
            },
            comment (e, t, r) {
                e = g.apply(this, arguments);
                const n = this.doc.createComment(e);
                if (this.locator) {
                    f(this.locator, n);
                }
                b(this, n);
            },
            startCDATA () {
                this.cdata = true;
            },
            endCDATA () {
                this.cdata = false;
            },
            startDTD (e, t, r) {
                const implementation = this.doc.implementation;
                if (implementation && implementation.createDocumentType) {
                    const i = implementation.createDocumentType(e, t, r);
                    if (this.locator) {
                        f(this.locator, i);
                    }
                    b(this, i);
                    this.doc.doctype = i;
                }
            },
            warning (e) {
                console.warn("[xmldom warning]	" + e, m(this.locator));
            },
            error (e) {
                console.error("[xmldom error]	" + e, m(this.locator));
            },
            fatalError (e) {
                throw new o_ParseError(e, this.locator);
            }
        };
        "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, (e)=>{
            p.prototype[e] = ()=>null;
        });
        r.__DOMHandler = p;
        r.normalizeLineEndings = d;
        r.DOMParser = h;
    },
    243627,
    (e, t, r)=>{
        var n = e.r(577923);
        r.DOMImplementation = n.DOMImplementation;
        r.XMLSerializer = n.XMLSerializer;
        r.DOMParser = e.r(186665).DOMParser;
    },
    129782,
    (e)=>{
        "use strict";
        let t;
        let r;
        let n;
        let i;
        let a;
        let o;
        let s;
        let l;
        let u;
        let c;
        let d;
        let h;
        e.i(18545);
        var p;
        var f;
        var m;
        var g;
        var b;
        var _;
        var x;
        var T;
        var y = e.i(657810);
        var S = e.i(695668);
        var v = e.i(78278);
        var R = e.i(277877);
        var E = e.i(933525);
        var A = e.i(550645);
        var M = e.i(818011);
        var C = e.i(153594);
        var G = e.i(337654);
        var w = e.i(705038);
        var D = "\nin vec2 vTextureCoord;\nin vec4 vColor;\n\nout vec4 finalColor;\n\nuniform float uBlend;\n\nuniform sampler2D uTexture;\nuniform sampler2D uBackTexture;\n\n{FUNCTIONS}\n\nvoid main()\n{ \n    vec4 back = texture(uBackTexture, vTextureCoord);\n    vec4 front = texture(uTexture, vTextureCoord);\n    float blendedAlpha = front.a + back.a * (1.0 - front.a);\n    \n    {MAIN}\n}\n";
        var P = "in vec2 aPosition;\nout vec2 vTextureCoord;\nout vec2 backgroundUv;\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
        var O = "\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct BlendUniforms {\n  uBlend:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n@group(0) @binding(3) var uBackTexture: texture_2d<f32>;\n\n@group(1) @binding(0) var<uniform> blendUniforms : BlendUniforms;\n\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\n{FUNCTIONS}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>\n) -> @location(0) vec4<f32> {\n\n\n   var back =  textureSample(uBackTexture, uSampler, uv);\n   var front = textureSample(uTexture, uSampler, uv);\n   var blendedAlpha = front.a + back.a * (1.0 - front.a);\n   \n   var out = vec4<f32>(0.0,0.0,0.0,0.0);\n\n   {MAIN}\n\n   return out;\n}";
        class B extends w.Filter {
            constructor(e){
                const t = F({
                    source: O,
                    ...e.gpu
                });
                const r = M.GpuProgram.from({
                    vertex: {
                        source: t,
                        entryPoint: "mainVertex"
                    },
                    fragment: {
                        source: t,
                        entryPoint: "mainFragment"
                    }
                });
                const n = F({
                    source: D,
                    ...e.gl
                });
                super({
                    gpuProgram: r,
                    glProgram: A.GlProgram.from({
                        vertex: P,
                        fragment: n
                    }),
                    blendRequired: true,
                    resources: {
                        blendUniforms: new C.UniformGroup({
                            uBlend: {
                                value: 1,
                                type: "f32"
                            }
                        }),
                        uBackTexture: G.Texture.EMPTY
                    }
                });
            }
        }
        function F(e) {
            let { source, functions, main } = e;
            return source.replace("{FUNCTIONS}", functions).replace("{MAIN}", main);
        }
        let I = `
	float getLuminosity(vec3 c) {
		return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
	}

	vec3 setLuminosity(vec3 c, float lum) {
		float modLum = lum - getLuminosity(c);
		vec3 color = c.rgb + vec3(modLum);

		// clip back into legal range
		modLum = getLuminosity(color);
		vec3 modLumVec = vec3(modLum);

		float cMin = min(color.r, min(color.g, color.b));
		float cMax = max(color.r, max(color.g, color.b));

		if(cMin < 0.0) {
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0) {
			color = mix(modLumVec, color, (1.0 - modLum) / (cMax - modLum));
		}

		return color;
	}

	float getSaturation(vec3 c) {
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	vec3 setSaturationMinMidMax(vec3 cSorted, float s) {
		vec3 colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x) {
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else {
			colorSorted.y = 0.0;
			colorSorted.z = 0.0;
		}

		colorSorted.x = 0.0;

		return colorSorted;
	}

	vec3 setSaturation(vec3 c, float s) {
		vec3 color = c;

		if(color.r <= color.g && color.r <= color.b) {
			if(color.g <= color.b) {
				color = setSaturationMinMidMax(color.rgb, s).rgb;
			}
			else {
				color = setSaturationMinMidMax(color.rbg, s).rbg;
			}
		}
		else if(color.g <= color.r && color.g <= color.b) {
			if(color.r <= color.b) {
				color = setSaturationMinMidMax(color.grb, s).grb;
			}
			else {
				color = setSaturationMinMidMax(color.gbr, s).gbr;
			}
		}
		else {
			// Using bgr for both fixes part of hue
			if(color.r <= color.g) {
				color = setSaturationMinMidMax(color.brg, s).brg;
			}
			else {
				color = setSaturationMinMidMax(color.bgr, s).bgr;
			}
		}

		return color;
	}
    `;
        let U = `
	fn getLuminosity(c: vec3<f32>) -> f32
	{
		return 0.3*c.r + 0.59*c.g + 0.11*c.b;
	}

	fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32>
	{
		var modLum: f32 = lum - getLuminosity(c);
		var color: vec3<f32> = c.rgb + modLum;

		// clip back into legal range
		modLum = getLuminosity(color);
		let modLumVec = vec3<f32>(modLum);

		let cMin: f32 = min(color.r, min(color.g, color.b));
		let cMax: f32 = max(color.r, max(color.g, color.b));

		if(cMin < 0.0)
		{
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0)
		{
			color = mix(modLumVec, color, (1 - modLum) / (cMax - modLum));
		}

		return color;
	}

	fn getSaturation(c: vec3<f32>) -> f32
	{
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32>
	{
		var colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x)
		{
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else
		{
			colorSorted.y = 0;
			colorSorted.z = 0;
		}

		colorSorted.x = 0;

		return colorSorted;
	}

	fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32>
	{
		var color = c;

		if (color.r <= color.g && color.r <= color.b)
		{
			if (color.g <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rgb, s)).rgb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rbg, s)).rbg;
			}
		}
		else if (color.g <= color.r && color.g <= color.b)
		{
			if (color.r <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.grb, s)).grb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.gbr, s)).gbr;
			}
		}
		else
		{
			// Using bgr for both fixes part of hue
			if (color.r <= color.g)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.brg, s)).brg;
			}
			else
			{
				color  = vec3<f32>(setSaturationMinMidMax(color.bgr, s)).bgr;
			}
		}

		return color;
	}
	`;
        class L extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                ${I}

                vec3 blendColor(vec3 base, vec3 blend,  float opacity)
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendColor(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                ${U}

                fn blendColorOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                out = vec4<f32>(blendColorOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
                    }
                });
            }
        }
        L.extension = {
            name: "color",
            type: v.ExtensionType.BlendMode
        };
        class N extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float colorBurn(float base, float blend)
                {
                    return max((1.0 - ((1.0 - base) / blend)), 0.0);
                }

                vec3 blendColorBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                finalColor = vec4(blendColorBurn(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
                    },
                    gpu: {
                        functions: `
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn blendColorBurn(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                out = vec4<f32>(blendColorBurn(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
                    }
                });
            }
        }
        N.extension = {
            name: "color-burn",
            type: v.ExtensionType.BlendMode
        };
        class X extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float colorDodge(float base, float blend)
                {
                    return base / (1.0 - blend);
                }

                vec3 blendColorDodge(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendColorDodge(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return base / (1.0 - blend);
                }

                fn blendColorDodge(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                    out = vec4<f32>(blendColorDodge(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
                    }
                });
            }
        }
        X.extension = {
            name: "color-dodge",
            type: v.ExtensionType.BlendMode
        };
        class k extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                vec3 blendDarken(vec3 base, vec3 blend, float opacity)
                {
                    return (min(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendDarken(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn blendDarken(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (min(blend,base) * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                out = vec4<f32>(blendDarken(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
                    }
                });
            }
        }
        k.extension = {
            name: "darken",
            type: v.ExtensionType.BlendMode
        };
        class H extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                vec3 blendDifference(vec3 base, vec3 blend,  float opacity)
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                finalColor = vec4(blendDifference(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
                    },
                    gpu: {
                        functions: `
                fn blendDifference(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                out = vec4<f32>(blendDifference(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
                    }
                });
            }
        }
        H.extension = {
            name: "difference",
            type: v.ExtensionType.BlendMode
        };
        class V extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float divide(float base, float blend)
                {
                    return (blend > 0.0) ? clamp(base / blend, 0.0, 1.0) : 1.0;
                }

                vec3 blendDivide(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendDivide(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn divide(base: f32, blend: f32) -> f32
                {
                    return select(1.0, clamp(base / blend, 0.0, 1.0), blend > 0.0);
                }

                fn blendDivide(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                out = vec4<f32>(blendDivide(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
                    }
                });
            }
        }
        V.extension = {
            name: "divide",
            type: v.ExtensionType.BlendMode
        };
        class $ extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                vec3 exclusion(vec3 base, vec3 blend)
                {
                    return base + blend - 2.0 * base * blend;
                }

                vec3 blendExclusion(vec3 base, vec3 blend, float opacity)
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendExclusion(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn exclusion(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return base+blend-2.0*base*blend;
                }

                fn blendExclusion(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                out = vec4<f32>(blendExclusion(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
                    }
                });
            }
        }
        $.extension = {
            name: "exclusion",
            type: v.ExtensionType.BlendMode
        };
        class q extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float hardLight(float base, float blend)
                {
                    return (blend < 0.5) ? 2.0 * base * blend : 1.0 - 2.0 * (1.0 - base) * (1.0 - blend);
                }

                vec3 blendHardLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                finalColor = vec4(blendHardLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
                    },
                    gpu: {
                        functions: `
                fn hardLight(base: f32, blend: f32) -> f32
                {
                    return select(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, blend < 0.5);
                }

                fn blendHardLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                out = vec4<f32>(blendHardLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
                    }
                });
            }
        }
        q.extension = {
            name: "hard-light",
            type: v.ExtensionType.BlendMode
        };
        class z extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float hardMix(float base, float blend)
                {
                    return (base + blend >= 1.0) ? 1.0 : 0.0;
                }

                vec3 blendHardMix(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blended = vec3(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                finalColor = vec4(blendHardMix(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
                    },
                    gpu: {
                        functions: `
                fn hardMix(base: f32, blend: f32) -> f32
                {
                    return select(0.0, 1.0, base + blend >= 1.0);
                }

                fn blendHardMix(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                out = vec4<f32>(blendHardMix(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
                    }
                });
            }
        }
        z.extension = {
            name: "hard-mix",
            type: v.ExtensionType.BlendMode
        };
        class W extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                vec3 blendLighten(vec3 base, vec3 blend, float opacity)
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendLighten(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn blendLighten(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                out = vec4<f32>(blendLighten(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
                    }
                });
            }
        }
        W.extension = {
            name: "lighten",
            type: v.ExtensionType.BlendMode
        };
        class Y extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float linearBurn(float base, float blend)
                {
                    return max(0.0, base + blend - 1.0);
                }

                vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendLinearBurn(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn blendLinearBurn(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                out = vec4<f32>(blendLinearBurn(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
                    }
                });
            }
        }
        Y.extension = {
            name: "linear-burn",
            type: v.ExtensionType.BlendMode
        };
        class j extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendLinearDodge(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1, base + blend);
                }

                fn blendLinearDodge(base:vec3<f32>, blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                out = vec4<f32>(blendLinearDodge(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
                    }
                });
            }
        }
        j.extension = {
            name: "linear-dodge",
            type: v.ExtensionType.BlendMode
        };
        class K extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float linearBurn(float base, float blend) {
                    return max(0.0, base + blend - 1.0);
                }

                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                float linearLight(float base, float blend) {
                    return (blend <= 0.5) ? linearBurn(base,2.0*blend) : linearBurn(base,2.0*(blend-0.5));
                }

                vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                finalColor = vec4(blendLinearLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base + blend);
                }

                fn linearLight(base: f32, blend: f32) -> f32
                {
                    return select(linearBurn(base,2.0*(blend-0.5)), linearBurn(base,2.0*blend), blend <= 0.5);
                }

                fn blendLinearLightOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                out = vec4<f32>(blendLinearLightOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
                    }
                });
            }
        }
        K.extension = {
            name: "linear-light",
            type: v.ExtensionType.BlendMode
        };
        class Q extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                ${I}

                vec3 blendLuminosity(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendLuminosity = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendLuminosity(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                ${U}

                fn blendLuminosity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendLuminosity: vec3<f32> = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                out = vec4<f32>(blendLuminosity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
                    }
                });
            }
        }
        Q.extension = {
            name: "luminosity",
            type: v.ExtensionType.BlendMode
        };
        class Z extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                vec3 negation(vec3 base, vec3 blend)
                {
                    return 1.0-abs(1.0-base-blend);
                }

                vec3 blendNegation(vec3 base, vec3 blend, float opacity)
                {
                    return (negation(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendNegation(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn blendNegation(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return 1.0-abs(1.0-base-blend);
                }

                fn blendNegationOpacity(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (blendNegation(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                out = vec4<f32>(blendNegationOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
                    }
                });
            }
        }
        Z.extension = {
            name: "negation",
            type: v.ExtensionType.BlendMode
        };
        class J extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float overlay(float base, float blend)
                {
                    return (base < 0.5) ? (2.0*base*blend) : (1.0-2.0*(1.0-base)*(1.0-blend));
                }

                vec3 blendOverlay(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendOverlay(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn overlay(base: f32, blend: f32) -> f32
                {
                    return select((1.0-2.0*(1.0-base)*(1.0-blend)), (2.0*base*blend), base < 0.5);
                }

                fn blendOverlay(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                out = vec4<f32>(blendOverlay(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
                    }
                });
            }
        }
        J.extension = {
            name: "overlay",
            type: v.ExtensionType.BlendMode
        };
        class ee extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float pinLight(float base, float blend)
                {
                    return (blend <= 0.5) ? min(base, 2.0 * blend) : max(base, 2.0 * (blend - 0.5));
                }

                vec3 blendPinLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                finalColor = vec4(blendPinLight(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn pinLight(base: f32, blend: f32) -> f32
                {
                    return select(max(base,2.0*(blend-0.5)), min(base,2.0*blend), blend <= 0.5);
                }

                fn blendPinLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                out = vec4<f32>(blendPinLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
                    }
                });
            }
        }
        ee.extension = {
            name: "pin-light",
            type: v.ExtensionType.BlendMode
        };
        class et extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                ${I}

                vec3 blendSaturation(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                finalColor = vec4(blendSaturation(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
            `
                    },
                    gpu: {
                        functions: `
                ${U}

                fn blendSaturation(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                out = vec4<f32>(blendSaturation(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `
                    }
                });
            }
        }
        et.extension = {
            name: "saturation",
            type: v.ExtensionType.BlendMode
        };
        class er extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float softLight(float base, float blend)
                {
                    return (blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend));
                }

                vec3 blendSoftLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendSoftLight(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn softLight(base: f32, blend: f32) -> f32
                {
                    return select(2.0 * base * blend + base * base * (1.0 - 2.0 * blend), sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), blend < 0.5);
                }

                fn blendSoftLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                out = vec4<f32>(blendSoftLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
                    }
                });
            }
        }
        er.extension = {
            name: "soft-light",
            type: v.ExtensionType.BlendMode
        };
        class en extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float subtract(float base, float blend)
                {
                    return max(0.0, base - blend);
                }

                vec3 blendSubtract(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                finalColor = vec4(blendSubtract(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `
                    },
                    gpu: {
                        functions: `
                fn subtract(base: f32, blend: f32) -> f32
                {
                    return max(0, base - blend);
                }

                fn blendSubtract(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                out = vec4<f32>(blendSubtract(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
                    }
                });
            }
        }
        en.extension = {
            name: "subtract",
            type: v.ExtensionType.BlendMode
        };
        class ei extends B {
            constructor(){
                super({
                    gl: {
                        functions: `
                float colorBurn(float base, float blend)
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                float colorDodge(float base, float blend)
                {
                    return min(1.0, base / (1.0-blend));
                }

                float vividLight(float base, float blend)
                {
                    return (blend < 0.5) ? colorBurn(base,(2.0*blend)) : colorDodge(base,(2.0*(blend-0.5)));
                }

                vec3 blendVividLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,
                        main: `
                finalColor = vec4(blendVividLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `
                    },
                    gpu: {
                        functions: `
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base / (1.0-blend));
                }

                fn vividLight(base: f32, blend: f32) -> f32
                {
                    return select(colorDodge(base,(2.0*(blend-0.5))), colorBurn(base,(2.0*blend)), blend<0.5);
                }

                fn blendVividLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,
                        main: `
                out = vec4<f32>(blendVividLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `
                    }
                });
            }
        }
        ei.extension = {
            name: "vivid-light",
            type: v.ExtensionType.BlendMode
        };
        var ea = e.i(449386);
        var eo = e.i(643211);
        var es = e.i(203722);
        var el = e.i(557305);
        var eu = e.i(544920);
        var ec = e.i(3165);
        var ed = e.i(553527);
        var eh = e.i(597023);
        var ep = e.i(501522);
        var ef = e.i(954198);
        var em = e.i(743829);
        var eg = e.i(549140);
        var eb = e.i(288111);
        var e_ = e.i(784710);
        var ex = e.i(993);
        var eT = e.i(63416);
        var ey = e.i(35585);
        var eS = e.i(126853);
        var ev = e.i(152519);
        var eR = e.i(10264);
        var eE = e.i(918655);
        var eA = e.i(368818);
        var eM = e.i(212218);
        var eC = e.i(151032);
        var eG = e.i(508160);
        var ew = e.i(317365);
        var eD = e.i(167993);
        var eP = e.i(438323);
        var eO = e.i(427315);
        var eB = e.i(840383);
        var eF = e.i(848790);
        var eI = e.i(402247);
        var eU = e.i(997322);
        var eL = e.i(297801);
        var eN = e.i(222735);
        var eX = e.i(591777);
        var ek = e.i(39739);
        let eH = {
            extension: {
                type: v.ExtensionType.DetectionParser,
                priority: 3
            },
            test: async ()=>!!(await ek.isWebGPUSupported() || eX.isWebGLSupported()),
            add: async (e)=>[
                    ...e,
                    "basis"
                ],
            remove: async (e)=>e.filter((e)=>e !== "basis")
        };
        var eV = e.i(317765);
        class e$ extends eV.TextureSource {
            constructor(e){
                super({
                    ...e,
                    mipLevelCount: e.resource.length
                });
                this.uploadMethodId = "compressed";
            }
        }
        var eq = e.i(787653);
        function ez() {
            if (t) {
                return t;
            }
            let e = eq.DOMAdapter.get().createCanvas(1, 1).getContext("webgl");
            if (e) {
                return t = [
                    ...e.getExtension("EXT_texture_compression_bptc") ? [
                        "bc6h-rgb-ufloat",
                        "bc6h-rgb-float",
                        "bc7-rgba-unorm",
                        "bc7-rgba-unorm-srgb"
                    ] : [],
                    ...e.getExtension("WEBGL_compressed_texture_s3tc") ? [
                        "bc1-rgba-unorm",
                        "bc2-rgba-unorm",
                        "bc3-rgba-unorm"
                    ] : [],
                    ...e.getExtension("WEBGL_compressed_texture_s3tc_srgb") ? [
                        "bc1-rgba-unorm-srgb",
                        "bc2-rgba-unorm-srgb",
                        "bc3-rgba-unorm-srgb"
                    ] : [],
                    ...e.getExtension("EXT_texture_compression_rgtc") ? [
                        "bc4-r-unorm",
                        "bc4-r-snorm",
                        "bc5-rg-unorm",
                        "bc5-rg-snorm"
                    ] : [],
                    ...e.getExtension("WEBGL_compressed_texture_etc") ? [
                        "etc2-rgb8unorm",
                        "etc2-rgb8unorm-srgb",
                        "etc2-rgba8unorm",
                        "etc2-rgba8unorm-srgb",
                        "etc2-rgb8a1unorm",
                        "etc2-rgb8a1unorm-srgb",
                        "eac-r11unorm",
                        "eac-rg11unorm"
                    ] : [],
                    ...e.getExtension("WEBGL_compressed_texture_astc") ? [
                        "astc-4x4-unorm",
                        "astc-4x4-unorm-srgb",
                        "astc-5x4-unorm",
                        "astc-5x4-unorm-srgb",
                        "astc-5x5-unorm",
                        "astc-5x5-unorm-srgb",
                        "astc-6x5-unorm",
                        "astc-6x5-unorm-srgb",
                        "astc-6x6-unorm",
                        "astc-6x6-unorm-srgb",
                        "astc-8x5-unorm",
                        "astc-8x5-unorm-srgb",
                        "astc-8x6-unorm",
                        "astc-8x6-unorm-srgb",
                        "astc-8x8-unorm",
                        "astc-8x8-unorm-srgb",
                        "astc-10x5-unorm",
                        "astc-10x5-unorm-srgb",
                        "astc-10x6-unorm",
                        "astc-10x6-unorm-srgb",
                        "astc-10x8-unorm",
                        "astc-10x8-unorm-srgb",
                        "astc-10x10-unorm",
                        "astc-10x10-unorm-srgb",
                        "astc-12x10-unorm",
                        "astc-12x10-unorm-srgb",
                        "astc-12x12-unorm",
                        "astc-12x12-unorm-srgb"
                    ] : []
                ];
            }
            return [];
        }
        async function eW() {
            if (r) {
                return r;
            }
            let e = await eq.DOMAdapter.get().getNavigator().gpu.requestAdapter();
            return r = [
                ...e.features.has("texture-compression-bc") ? [
                    "bc1-rgba-unorm",
                    "bc1-rgba-unorm-srgb",
                    "bc2-rgba-unorm",
                    "bc2-rgba-unorm-srgb",
                    "bc3-rgba-unorm",
                    "bc3-rgba-unorm-srgb",
                    "bc4-r-unorm",
                    "bc4-r-snorm",
                    "bc5-rg-unorm",
                    "bc5-rg-snorm",
                    "bc6h-rgb-ufloat",
                    "bc6h-rgb-float",
                    "bc7-rgba-unorm",
                    "bc7-rgba-unorm-srgb"
                ] : [],
                ...e.features.has("texture-compression-etc2") ? [
                    "etc2-rgb8unorm",
                    "etc2-rgb8unorm-srgb",
                    "etc2-rgb8a1unorm",
                    "etc2-rgb8a1unorm-srgb",
                    "etc2-rgba8unorm",
                    "etc2-rgba8unorm-srgb",
                    "eac-r11unorm",
                    "eac-r11snorm",
                    "eac-rg11unorm",
                    "eac-rg11snorm"
                ] : [],
                ...e.features.has("texture-compression-astc") ? [
                    "astc-4x4-unorm",
                    "astc-4x4-unorm-srgb",
                    "astc-5x4-unorm",
                    "astc-5x4-unorm-srgb",
                    "astc-5x5-unorm",
                    "astc-5x5-unorm-srgb",
                    "astc-6x5-unorm",
                    "astc-6x5-unorm-srgb",
                    "astc-6x6-unorm",
                    "astc-6x6-unorm-srgb",
                    "astc-8x5-unorm",
                    "astc-8x5-unorm-srgb",
                    "astc-8x6-unorm",
                    "astc-8x6-unorm-srgb",
                    "astc-8x8-unorm",
                    "astc-8x8-unorm-srgb",
                    "astc-10x5-unorm",
                    "astc-10x5-unorm-srgb",
                    "astc-10x6-unorm",
                    "astc-10x6-unorm-srgb",
                    "astc-10x8-unorm",
                    "astc-10x8-unorm-srgb",
                    "astc-10x10-unorm",
                    "astc-10x10-unorm-srgb",
                    "astc-12x10-unorm",
                    "astc-12x10-unorm-srgb",
                    "astc-12x12-unorm",
                    "astc-12x12-unorm-srgb"
                ] : []
            ];
        }
        async function eY() {
            if (n !== undefined) {
                return n;
            }
            return n = await (async ()=>{
                let e = await ek.isWebGPUSupported();
                let t = eX.isWebGLSupported();
                if (e && t) {
                    let e = await eW();
                    let t = ez();
                    return e.filter((e)=>t.includes(e));
                }
                if (e) {
                    return await eW();
                }
                if (t) {
                    return ez();
                }
                return [];
            })();
        }
        let ej = [
            "r8unorm",
            "r8snorm",
            "r8uint",
            "r8sint",
            "r16uint",
            "r16sint",
            "r16float",
            "rg8unorm",
            "rg8snorm",
            "rg8uint",
            "rg8sint",
            "r32uint",
            "r32sint",
            "r32float",
            "rg16uint",
            "rg16sint",
            "rg16float",
            "rgba8unorm",
            "rgba8unorm-srgb",
            "rgba8snorm",
            "rgba8uint",
            "rgba8sint",
            "bgra8unorm",
            "bgra8unorm-srgb",
            "rgb9e5ufloat",
            "rgb10a2unorm",
            "rg11b10ufloat",
            "rg32uint",
            "rg32sint",
            "rg32float",
            "rgba16uint",
            "rgba16sint",
            "rgba16float",
            "rgba32uint",
            "rgba32sint",
            "rgba32float",
            "stencil8",
            "depth16unorm",
            "depth24plus",
            "depth24plus-stencil8",
            "depth32float",
            "depth32float-stencil8"
        ];
        async function eK() {
            if (i !== undefined) {
                return i;
            }
            return i = [
                ...ej,
                ...await eY()
            ];
        }
        var eQ = e.i(86716);
        let eZ = null;
        class eJ {
            constructor(){
                if (!eZ) {
                    eZ = URL.createObjectURL(new Blob([
                        '(function () {\n    \'use strict\';\n\n    function createLevelBuffers(basisTexture, basisTranscoderFormat) {\n      const images = basisTexture.getNumImages();\n      const levels = basisTexture.getNumLevels(0);\n      const success = basisTexture.startTranscoding();\n      if (!success) {\n        throw new Error("startTranscoding failed");\n      }\n      const levelBuffers = [];\n      for (let levelIndex = 0; levelIndex < levels; ++levelIndex) {\n        for (let sliceIndex = 0; sliceIndex < images; ++sliceIndex) {\n          const transcodeSize = basisTexture.getImageTranscodedSizeInBytes(sliceIndex, levelIndex, basisTranscoderFormat);\n          const levelBuffer = new Uint8Array(transcodeSize);\n          const success2 = basisTexture.transcodeImage(levelBuffer, sliceIndex, levelIndex, basisTranscoderFormat, 1, 0);\n          if (!success2) {\n            throw new Error("transcodeImage failed");\n          }\n          levelBuffers.push(levelBuffer);\n        }\n      }\n      return levelBuffers;\n    }\n\n    const gpuFormatToBasisTranscoderFormatMap = {\n      "bc3-rgba-unorm": 3,\n      // cTFBC3_RGBA\n      "bc7-rgba-unorm": 6,\n      // cTFBC7_RGBA,\n      "etc2-rgba8unorm": 1,\n      // cTFETC2_RGBA,\n      "astc-4x4-unorm": 10,\n      // cTFASTC_4x4_RGBA,\n      // Uncompressed\n      rgba8unorm: 13,\n      // cTFRGBA32,\n      rgba4unorm: 16\n      // cTFRGBA4444,\n    };\n    function gpuFormatToBasisTranscoderFormat(transcoderFormat) {\n      const format = gpuFormatToBasisTranscoderFormatMap[transcoderFormat];\n      if (format) {\n        return format;\n      }\n      throw new Error(`Unsupported transcoderFormat: ${transcoderFormat}`);\n    }\n\n    const settings = {\n      jsUrl: "basis/basis_transcoder.js",\n      wasmUrl: "basis/basis_transcoder.wasm"\n    };\n    let basisTranscoderFormat;\n    let basisTranscodedTextureFormat;\n    let basisPromise;\n    async function getBasis() {\n      if (!basisPromise) {\n        const absoluteJsUrl = new URL(settings.jsUrl, location.origin).href;\n        const absoluteWasmUrl = new URL(settings.wasmUrl, location.origin).href;\n        importScripts(absoluteJsUrl);\n        basisPromise = new Promise((resolve) => {\n          BASIS({\n            locateFile: (_file) => absoluteWasmUrl\n          }).then((module) => {\n            module.initializeBasis();\n            resolve(module.BasisFile);\n          });\n        });\n      }\n      return basisPromise;\n    }\n    async function fetchBasisTexture(url, BasisTexture) {\n      const basisResponse = await fetch(url);\n      if (basisResponse.ok) {\n        const basisArrayBuffer = await basisResponse.arrayBuffer();\n        return new BasisTexture(new Uint8Array(basisArrayBuffer));\n      }\n      throw new Error(`Failed to load Basis texture: ${url}`);\n    }\n    const preferredTranscodedFormat = [\n      "bc7-rgba-unorm",\n      "astc-4x4-unorm",\n      "etc2-rgba8unorm",\n      "bc3-rgba-unorm",\n      "rgba8unorm"\n    ];\n    async function load(url) {\n      const BasisTexture = await getBasis();\n      const basisTexture = await fetchBasisTexture(url, BasisTexture);\n      const levelBuffers = createLevelBuffers(basisTexture, basisTranscoderFormat);\n      return {\n        width: basisTexture.getImageWidth(0, 0),\n        height: basisTexture.getImageHeight(0, 0),\n        format: basisTranscodedTextureFormat,\n        resource: levelBuffers,\n        alphaMode: "no-premultiply-alpha"\n      };\n    }\n    async function init(jsUrl, wasmUrl, supportedTextures) {\n      if (jsUrl) settings.jsUrl = jsUrl;\n      if (wasmUrl) settings.wasmUrl = wasmUrl;\n      basisTranscodedTextureFormat = preferredTranscodedFormat.filter((format) => supportedTextures.includes(format))[0];\n      basisTranscoderFormat = gpuFormatToBasisTranscoderFormat(basisTranscodedTextureFormat);\n      await getBasis();\n    }\n    const messageHandlers = {\n      init: async (data) => {\n        const { jsUrl, wasmUrl, supportedTextures } = data;\n        await init(jsUrl, wasmUrl, supportedTextures);\n      },\n      load: async (data) => {\n        try {\n          const textureOptions = await load(data.url);\n          return {\n            type: "load",\n            url: data.url,\n            success: true,\n            textureOptions,\n            transferables: textureOptions.resource?.map((arr) => arr.buffer)\n          };\n        } catch (e) {\n          throw e;\n        }\n      }\n    };\n    self.onmessage = (async (messageEvent) => {\n      const message = messageEvent.data;\n      const response = await messageHandlers[message.type](message);\n      if (response) {\n        self.postMessage(response, response.transferables);\n      }\n    });\n\n})();\n'
                    ], {
                        type: "application/javascript"
                    }));
                }
                this.worker = new Worker(eZ);
            }
        }
        eJ.revokeObjectURL = ()=>{
            if (eZ) {
                URL.revokeObjectURL(eZ);
                eZ = null;
            }
        };
        let e0 = {
            jsUrl: "https://cdn.jsdelivr.net/npm/pixi.js/transcoders/basis/basis_transcoder.js",
            wasmUrl: "https://cdn.jsdelivr.net/npm/pixi.js/transcoders/basis/basis_transcoder.wasm"
        };
        let e3 = {};
        function e2(e, t) {
            if (!a) {
                a = new eJ().worker;
                a.onmessage = (e)=>{
                    let { success, url, textureOptions } = e.data;
                    if (!success) {
                        console.warn("Failed to load Basis texture", url);
                    }
                    e3[url](textureOptions);
                };
                a.postMessage({
                    type: "init",
                    jsUrl: e0.jsUrl,
                    wasmUrl: e0.wasmUrl,
                    supportedTextures: t
                });
            }
            let r = a;
            return new Promise((resolve)=>{
                e3[e] = resolve;
                r.postMessage({
                    type: "load",
                    url: e
                });
            });
        }
        let e1 = {
            extension: {
                type: v.ExtensionType.LoadParser,
                priority: ey.LoaderParserPriority.High,
                name: "loadBasis"
            },
            name: "loadBasis",
            id: "basis",
            test: (e)=>eB.checkExtension(e, [
                    ".basis"
                ]),
            async load (e, t, r) {
                let n = await eK();
                let i = new e$({
                    ...await e2(e, n),
                    resolution: t.data?.resolution || eQ.getResolutionOfUrl(e)
                });
                return eC.createTexture(i, r, e);
            },
            unload (e) {
                if (Array.isArray(e)) {
                    e.forEach((e)=>e.destroy(true));
                } else {
                    e.destroy(true);
                }
            }
        };
        let e8 = {
            "bc3-rgba-unorm": 3,
            "bc7-rgba-unorm": 6,
            "etc2-rgba8unorm": 1,
            "astc-4x4-unorm": 10,
            rgba8unorm: 13,
            rgba4unorm: 16
        };
        p = DXGI_FORMAT || {};
        p[p.DXGI_FORMAT_UNKNOWN = 0] = "DXGI_FORMAT_UNKNOWN";
        p[p.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1] = "DXGI_FORMAT_R32G32B32A32_TYPELESS";
        p[p.DXGI_FORMAT_R32G32B32A32_FLOAT = 2] = "DXGI_FORMAT_R32G32B32A32_FLOAT";
        p[p.DXGI_FORMAT_R32G32B32A32_UINT = 3] = "DXGI_FORMAT_R32G32B32A32_UINT";
        p[p.DXGI_FORMAT_R32G32B32A32_SINT = 4] = "DXGI_FORMAT_R32G32B32A32_SINT";
        p[p.DXGI_FORMAT_R32G32B32_TYPELESS = 5] = "DXGI_FORMAT_R32G32B32_TYPELESS";
        p[p.DXGI_FORMAT_R32G32B32_FLOAT = 6] = "DXGI_FORMAT_R32G32B32_FLOAT";
        p[p.DXGI_FORMAT_R32G32B32_UINT = 7] = "DXGI_FORMAT_R32G32B32_UINT";
        p[p.DXGI_FORMAT_R32G32B32_SINT = 8] = "DXGI_FORMAT_R32G32B32_SINT";
        p[p.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9] = "DXGI_FORMAT_R16G16B16A16_TYPELESS";
        p[p.DXGI_FORMAT_R16G16B16A16_FLOAT = 10] = "DXGI_FORMAT_R16G16B16A16_FLOAT";
        p[p.DXGI_FORMAT_R16G16B16A16_UNORM = 11] = "DXGI_FORMAT_R16G16B16A16_UNORM";
        p[p.DXGI_FORMAT_R16G16B16A16_UINT = 12] = "DXGI_FORMAT_R16G16B16A16_UINT";
        p[p.DXGI_FORMAT_R16G16B16A16_SNORM = 13] = "DXGI_FORMAT_R16G16B16A16_SNORM";
        p[p.DXGI_FORMAT_R16G16B16A16_SINT = 14] = "DXGI_FORMAT_R16G16B16A16_SINT";
        p[p.DXGI_FORMAT_R32G32_TYPELESS = 15] = "DXGI_FORMAT_R32G32_TYPELESS";
        p[p.DXGI_FORMAT_R32G32_FLOAT = 16] = "DXGI_FORMAT_R32G32_FLOAT";
        p[p.DXGI_FORMAT_R32G32_UINT = 17] = "DXGI_FORMAT_R32G32_UINT";
        p[p.DXGI_FORMAT_R32G32_SINT = 18] = "DXGI_FORMAT_R32G32_SINT";
        p[p.DXGI_FORMAT_R32G8X24_TYPELESS = 19] = "DXGI_FORMAT_R32G8X24_TYPELESS";
        p[p.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20] = "DXGI_FORMAT_D32_FLOAT_S8X24_UINT";
        p[p.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21] = "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS";
        p[p.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22] = "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT";
        p[p.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23] = "DXGI_FORMAT_R10G10B10A2_TYPELESS";
        p[p.DXGI_FORMAT_R10G10B10A2_UNORM = 24] = "DXGI_FORMAT_R10G10B10A2_UNORM";
        p[p.DXGI_FORMAT_R10G10B10A2_UINT = 25] = "DXGI_FORMAT_R10G10B10A2_UINT";
        p[p.DXGI_FORMAT_R11G11B10_FLOAT = 26] = "DXGI_FORMAT_R11G11B10_FLOAT";
        p[p.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27] = "DXGI_FORMAT_R8G8B8A8_TYPELESS";
        p[p.DXGI_FORMAT_R8G8B8A8_UNORM = 28] = "DXGI_FORMAT_R8G8B8A8_UNORM";
        p[p.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29] = "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB";
        p[p.DXGI_FORMAT_R8G8B8A8_UINT = 30] = "DXGI_FORMAT_R8G8B8A8_UINT";
        p[p.DXGI_FORMAT_R8G8B8A8_SNORM = 31] = "DXGI_FORMAT_R8G8B8A8_SNORM";
        p[p.DXGI_FORMAT_R8G8B8A8_SINT = 32] = "DXGI_FORMAT_R8G8B8A8_SINT";
        p[p.DXGI_FORMAT_R16G16_TYPELESS = 33] = "DXGI_FORMAT_R16G16_TYPELESS";
        p[p.DXGI_FORMAT_R16G16_FLOAT = 34] = "DXGI_FORMAT_R16G16_FLOAT";
        p[p.DXGI_FORMAT_R16G16_UNORM = 35] = "DXGI_FORMAT_R16G16_UNORM";
        p[p.DXGI_FORMAT_R16G16_UINT = 36] = "DXGI_FORMAT_R16G16_UINT";
        p[p.DXGI_FORMAT_R16G16_SNORM = 37] = "DXGI_FORMAT_R16G16_SNORM";
        p[p.DXGI_FORMAT_R16G16_SINT = 38] = "DXGI_FORMAT_R16G16_SINT";
        p[p.DXGI_FORMAT_R32_TYPELESS = 39] = "DXGI_FORMAT_R32_TYPELESS";
        p[p.DXGI_FORMAT_D32_FLOAT = 40] = "DXGI_FORMAT_D32_FLOAT";
        p[p.DXGI_FORMAT_R32_FLOAT = 41] = "DXGI_FORMAT_R32_FLOAT";
        p[p.DXGI_FORMAT_R32_UINT = 42] = "DXGI_FORMAT_R32_UINT";
        p[p.DXGI_FORMAT_R32_SINT = 43] = "DXGI_FORMAT_R32_SINT";
        p[p.DXGI_FORMAT_R24G8_TYPELESS = 44] = "DXGI_FORMAT_R24G8_TYPELESS";
        p[p.DXGI_FORMAT_D24_UNORM_S8_UINT = 45] = "DXGI_FORMAT_D24_UNORM_S8_UINT";
        p[p.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46] = "DXGI_FORMAT_R24_UNORM_X8_TYPELESS";
        p[p.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47] = "DXGI_FORMAT_X24_TYPELESS_G8_UINT";
        p[p.DXGI_FORMAT_R8G8_TYPELESS = 48] = "DXGI_FORMAT_R8G8_TYPELESS";
        p[p.DXGI_FORMAT_R8G8_UNORM = 49] = "DXGI_FORMAT_R8G8_UNORM";
        p[p.DXGI_FORMAT_R8G8_UINT = 50] = "DXGI_FORMAT_R8G8_UINT";
        p[p.DXGI_FORMAT_R8G8_SNORM = 51] = "DXGI_FORMAT_R8G8_SNORM";
        p[p.DXGI_FORMAT_R8G8_SINT = 52] = "DXGI_FORMAT_R8G8_SINT";
        p[p.DXGI_FORMAT_R16_TYPELESS = 53] = "DXGI_FORMAT_R16_TYPELESS";
        p[p.DXGI_FORMAT_R16_FLOAT = 54] = "DXGI_FORMAT_R16_FLOAT";
        p[p.DXGI_FORMAT_D16_UNORM = 55] = "DXGI_FORMAT_D16_UNORM";
        p[p.DXGI_FORMAT_R16_UNORM = 56] = "DXGI_FORMAT_R16_UNORM";
        p[p.DXGI_FORMAT_R16_UINT = 57] = "DXGI_FORMAT_R16_UINT";
        p[p.DXGI_FORMAT_R16_SNORM = 58] = "DXGI_FORMAT_R16_SNORM";
        p[p.DXGI_FORMAT_R16_SINT = 59] = "DXGI_FORMAT_R16_SINT";
        p[p.DXGI_FORMAT_R8_TYPELESS = 60] = "DXGI_FORMAT_R8_TYPELESS";
        p[p.DXGI_FORMAT_R8_UNORM = 61] = "DXGI_FORMAT_R8_UNORM";
        p[p.DXGI_FORMAT_R8_UINT = 62] = "DXGI_FORMAT_R8_UINT";
        p[p.DXGI_FORMAT_R8_SNORM = 63] = "DXGI_FORMAT_R8_SNORM";
        p[p.DXGI_FORMAT_R8_SINT = 64] = "DXGI_FORMAT_R8_SINT";
        p[p.DXGI_FORMAT_A8_UNORM = 65] = "DXGI_FORMAT_A8_UNORM";
        p[p.DXGI_FORMAT_R1_UNORM = 66] = "DXGI_FORMAT_R1_UNORM";
        p[p.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67] = "DXGI_FORMAT_R9G9B9E5_SHAREDEXP";
        p[p.DXGI_FORMAT_R8G8_B8G8_UNORM = 68] = "DXGI_FORMAT_R8G8_B8G8_UNORM";
        p[p.DXGI_FORMAT_G8R8_G8B8_UNORM = 69] = "DXGI_FORMAT_G8R8_G8B8_UNORM";
        p[p.DXGI_FORMAT_BC1_TYPELESS = 70] = "DXGI_FORMAT_BC1_TYPELESS";
        p[p.DXGI_FORMAT_BC1_UNORM = 71] = "DXGI_FORMAT_BC1_UNORM";
        p[p.DXGI_FORMAT_BC1_UNORM_SRGB = 72] = "DXGI_FORMAT_BC1_UNORM_SRGB";
        p[p.DXGI_FORMAT_BC2_TYPELESS = 73] = "DXGI_FORMAT_BC2_TYPELESS";
        p[p.DXGI_FORMAT_BC2_UNORM = 74] = "DXGI_FORMAT_BC2_UNORM";
        p[p.DXGI_FORMAT_BC2_UNORM_SRGB = 75] = "DXGI_FORMAT_BC2_UNORM_SRGB";
        p[p.DXGI_FORMAT_BC3_TYPELESS = 76] = "DXGI_FORMAT_BC3_TYPELESS";
        p[p.DXGI_FORMAT_BC3_UNORM = 77] = "DXGI_FORMAT_BC3_UNORM";
        p[p.DXGI_FORMAT_BC3_UNORM_SRGB = 78] = "DXGI_FORMAT_BC3_UNORM_SRGB";
        p[p.DXGI_FORMAT_BC4_TYPELESS = 79] = "DXGI_FORMAT_BC4_TYPELESS";
        p[p.DXGI_FORMAT_BC4_UNORM = 80] = "DXGI_FORMAT_BC4_UNORM";
        p[p.DXGI_FORMAT_BC4_SNORM = 81] = "DXGI_FORMAT_BC4_SNORM";
        p[p.DXGI_FORMAT_BC5_TYPELESS = 82] = "DXGI_FORMAT_BC5_TYPELESS";
        p[p.DXGI_FORMAT_BC5_UNORM = 83] = "DXGI_FORMAT_BC5_UNORM";
        p[p.DXGI_FORMAT_BC5_SNORM = 84] = "DXGI_FORMAT_BC5_SNORM";
        p[p.DXGI_FORMAT_B5G6R5_UNORM = 85] = "DXGI_FORMAT_B5G6R5_UNORM";
        p[p.DXGI_FORMAT_B5G5R5A1_UNORM = 86] = "DXGI_FORMAT_B5G5R5A1_UNORM";
        p[p.DXGI_FORMAT_B8G8R8A8_UNORM = 87] = "DXGI_FORMAT_B8G8R8A8_UNORM";
        p[p.DXGI_FORMAT_B8G8R8X8_UNORM = 88] = "DXGI_FORMAT_B8G8R8X8_UNORM";
        p[p.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89] = "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM";
        p[p.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90] = "DXGI_FORMAT_B8G8R8A8_TYPELESS";
        p[p.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91] = "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB";
        p[p.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92] = "DXGI_FORMAT_B8G8R8X8_TYPELESS";
        p[p.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93] = "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB";
        p[p.DXGI_FORMAT_BC6H_TYPELESS = 94] = "DXGI_FORMAT_BC6H_TYPELESS";
        p[p.DXGI_FORMAT_BC6H_UF16 = 95] = "DXGI_FORMAT_BC6H_UF16";
        p[p.DXGI_FORMAT_BC6H_SF16 = 96] = "DXGI_FORMAT_BC6H_SF16";
        p[p.DXGI_FORMAT_BC7_TYPELESS = 97] = "DXGI_FORMAT_BC7_TYPELESS";
        p[p.DXGI_FORMAT_BC7_UNORM = 98] = "DXGI_FORMAT_BC7_UNORM";
        p[p.DXGI_FORMAT_BC7_UNORM_SRGB = 99] = "DXGI_FORMAT_BC7_UNORM_SRGB";
        p[p.DXGI_FORMAT_AYUV = 100] = "DXGI_FORMAT_AYUV";
        p[p.DXGI_FORMAT_Y410 = 101] = "DXGI_FORMAT_Y410";
        p[p.DXGI_FORMAT_Y416 = 102] = "DXGI_FORMAT_Y416";
        p[p.DXGI_FORMAT_NV12 = 103] = "DXGI_FORMAT_NV12";
        p[p.DXGI_FORMAT_P010 = 104] = "DXGI_FORMAT_P010";
        p[p.DXGI_FORMAT_P016 = 105] = "DXGI_FORMAT_P016";
        p[p.DXGI_FORMAT_420_OPAQUE = 106] = "DXGI_FORMAT_420_OPAQUE";
        p[p.DXGI_FORMAT_YUY2 = 107] = "DXGI_FORMAT_YUY2";
        p[p.DXGI_FORMAT_Y210 = 108] = "DXGI_FORMAT_Y210";
        p[p.DXGI_FORMAT_Y216 = 109] = "DXGI_FORMAT_Y216";
        p[p.DXGI_FORMAT_NV11 = 110] = "DXGI_FORMAT_NV11";
        p[p.DXGI_FORMAT_AI44 = 111] = "DXGI_FORMAT_AI44";
        p[p.DXGI_FORMAT_IA44 = 112] = "DXGI_FORMAT_IA44";
        p[p.DXGI_FORMAT_P8 = 113] = "DXGI_FORMAT_P8";
        p[p.DXGI_FORMAT_A8P8 = 114] = "DXGI_FORMAT_A8P8";
        p[p.DXGI_FORMAT_B4G4R4A4_UNORM = 115] = "DXGI_FORMAT_B4G4R4A4_UNORM";
        p[p.DXGI_FORMAT_P208 = 116] = "DXGI_FORMAT_P208";
        p[p.DXGI_FORMAT_V208 = 117] = "DXGI_FORMAT_V208";
        p[p.DXGI_FORMAT_V408 = 118] = "DXGI_FORMAT_V408";
        p[p.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE";
        p[p.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE";
        p[p.DXGI_FORMAT_FORCE_UINT = 121] = "DXGI_FORMAT_FORCE_UINT";
        var DXGI_FORMAT = p;
        f = D3D10_RESOURCE_DIMENSION || {};
        f[f.DDS_DIMENSION_TEXTURE1D = 2] = "DDS_DIMENSION_TEXTURE1D";
        f[f.DDS_DIMENSION_TEXTURE2D = 3] = "DDS_DIMENSION_TEXTURE2D";
        f[f.DDS_DIMENSION_TEXTURE3D = 6] = "DDS_DIMENSION_TEXTURE3D";
        var D3D10_RESOURCE_DIMENSION = f;
        function e5(e) {
            return e.charCodeAt(0) + (e.charCodeAt(1) << 8) + (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24);
        }
        m = D3DFMT || {};
        m[m.UNKNOWN = 0] = "UNKNOWN";
        m[m.R8G8B8 = 20] = "R8G8B8";
        m[m.A8R8G8B8 = 21] = "A8R8G8B8";
        m[m.X8R8G8B8 = 22] = "X8R8G8B8";
        m[m.R5G6B5 = 23] = "R5G6B5";
        m[m.X1R5G5B5 = 24] = "X1R5G5B5";
        m[m.A1R5G5B5 = 25] = "A1R5G5B5";
        m[m.A4R4G4B4 = 26] = "A4R4G4B4";
        m[m.R3G3B2 = 27] = "R3G3B2";
        m[m.A8 = 28] = "A8";
        m[m.A8R3G3B2 = 29] = "A8R3G3B2";
        m[m.X4R4G4B4 = 30] = "X4R4G4B4";
        m[m.A2B10G10R10 = 31] = "A2B10G10R10";
        m[m.A8B8G8R8 = 32] = "A8B8G8R8";
        m[m.X8B8G8R8 = 33] = "X8B8G8R8";
        m[m.G16R16 = 34] = "G16R16";
        m[m.A2R10G10B10 = 35] = "A2R10G10B10";
        m[m.A16B16G16R16 = 36] = "A16B16G16R16";
        m[m.A8P8 = 40] = "A8P8";
        m[m.P8 = 41] = "P8";
        m[m.L8 = 50] = "L8";
        m[m.A8L8 = 51] = "A8L8";
        m[m.A4L4 = 52] = "A4L4";
        m[m.V8U8 = 60] = "V8U8";
        m[m.L6V5U5 = 61] = "L6V5U5";
        m[m.X8L8V8U8 = 62] = "X8L8V8U8";
        m[m.Q8W8V8U8 = 63] = "Q8W8V8U8";
        m[m.V16U16 = 64] = "V16U16";
        m[m.A2W10V10U10 = 67] = "A2W10V10U10";
        m[m.Q16W16V16U16 = 110] = "Q16W16V16U16";
        m[m.R16F = 111] = "R16F";
        m[m.G16R16F = 112] = "G16R16F";
        m[m.A16B16G16R16F = 113] = "A16B16G16R16F";
        m[m.R32F = 114] = "R32F";
        m[m.G32R32F = 115] = "G32R32F";
        m[m.A32B32G32R32F = 116] = "A32B32G32R32F";
        m[m.UYVY = e5("UYVY")] = "UYVY";
        m[m.R8G8_B8G8 = e5("RGBG")] = "R8G8_B8G8";
        m[m.YUY2 = e5("YUY2")] = "YUY2";
        m[m.D3DFMT_G8R8_G8B8 = e5("GRGB")] = "D3DFMT_G8R8_G8B8";
        m[m.DXT1 = e5("DXT1")] = "DXT1";
        m[m.DXT2 = e5("DXT2")] = "DXT2";
        m[m.DXT3 = e5("DXT3")] = "DXT3";
        m[m.DXT4 = e5("DXT4")] = "DXT4";
        m[m.DXT5 = e5("DXT5")] = "DXT5";
        m[m.ATI1 = e5("ATI1")] = "ATI1";
        m[m.AT1N = e5("AT1N")] = "AT1N";
        m[m.ATI2 = e5("ATI2")] = "ATI2";
        m[m.AT2N = e5("AT2N")] = "AT2N";
        m[m.BC4U = e5("BC4U")] = "BC4U";
        m[m.BC4S = e5("BC4S")] = "BC4S";
        m[m.BC5U = e5("BC5U")] = "BC5U";
        m[m.BC5S = e5("BC5S")] = "BC5S";
        m[m.DX10 = e5("DX10")] = "DX10";
        var D3DFMT = m;
        let e9 = {
            [D3DFMT.DXT1]: "bc1-rgba-unorm",
            [D3DFMT.DXT2]: "bc2-rgba-unorm",
            [D3DFMT.DXT3]: "bc2-rgba-unorm",
            [D3DFMT.DXT4]: "bc3-rgba-unorm",
            [D3DFMT.DXT5]: "bc3-rgba-unorm",
            [D3DFMT.ATI1]: "bc4-r-unorm",
            [D3DFMT.BC4U]: "bc4-r-unorm",
            [D3DFMT.BC4S]: "bc4-r-snorm",
            [D3DFMT.ATI2]: "bc5-rg-unorm",
            [D3DFMT.BC5U]: "bc5-rg-unorm",
            [D3DFMT.BC5S]: "bc5-rg-snorm",
            36: "rgba16uint",
            110: "rgba16sint",
            111: "r16float",
            112: "rg16float",
            113: "rgba16float",
            114: "r32float",
            115: "rg32float",
            116: "rgba32float"
        };
        let te = {
            70: "bc1-rgba-unorm",
            71: "bc1-rgba-unorm",
            72: "bc1-rgba-unorm-srgb",
            73: "bc2-rgba-unorm",
            74: "bc2-rgba-unorm",
            75: "bc2-rgba-unorm-srgb",
            76: "bc3-rgba-unorm",
            77: "bc3-rgba-unorm",
            78: "bc3-rgba-unorm-srgb",
            79: "bc4-r-unorm",
            80: "bc4-r-unorm",
            81: "bc4-r-snorm",
            82: "bc5-rg-unorm",
            83: "bc5-rg-unorm",
            84: "bc5-rg-snorm",
            94: "bc6h-rgb-ufloat",
            95: "bc6h-rgb-ufloat",
            96: "bc6h-rgb-float",
            97: "bc7-rgba-unorm",
            98: "bc7-rgba-unorm",
            99: "bc7-rgba-unorm-srgb",
            28: "rgba8unorm",
            29: "rgba8unorm-srgb",
            87: "bgra8unorm",
            91: "bgra8unorm-srgb",
            41: "r32float",
            49: "rg8unorm",
            56: "r16uint",
            61: "r8unorm",
            24: "rgb10a2unorm",
            11: "rgba16uint",
            13: "rgba16sint",
            10: "rgba16float",
            54: "r16float",
            34: "rg16float",
            16: "rg32float",
            2: "rgba32float"
        };
        let tt = {
            MAGIC_VALUE: 542327876,
            MAGIC_SIZE: 4,
            HEADER_SIZE: 124,
            HEADER_DX10_SIZE: 20,
            PIXEL_FORMAT_FLAGS: {
                ALPHAPIXELS: 1,
                ALPHA: 2,
                FOURCC: 4,
                RGB: 64,
                RGBA: 65,
                YUV: 512,
                LUMINANCE: 131072,
                LUMINANCEA: 131073
            },
            RESOURCE_MISC_TEXTURECUBE: 4,
            HEADER_FIELDS: {
                MAGIC: 0,
                SIZE: 1,
                FLAGS: 2,
                HEIGHT: 3,
                WIDTH: 4,
                MIPMAP_COUNT: 7,
                PIXEL_FORMAT: 19,
                PF_FLAGS: 20,
                FOURCC: 21,
                RGB_BITCOUNT: 22,
                R_BIT_MASK: 23,
                G_BIT_MASK: 24,
                B_BIT_MASK: 25,
                A_BIT_MASK: 26
            },
            HEADER_DX10_FIELDS: {
                DXGI_FORMAT: 0,
                RESOURCE_DIMENSION: 1,
                MISC_FLAG: 2,
                ARRAY_SIZE: 3,
                MISC_FLAGS2: 4
            },
            DXGI_FORMAT,
            D3D10_RESOURCE_DIMENSION,
            D3DFMT
        };
        let tr = {
            "bc1-rgba-unorm": 8,
            "bc1-rgba-unorm-srgb": 8,
            "bc2-rgba-unorm": 16,
            "bc2-rgba-unorm-srgb": 16,
            "bc3-rgba-unorm": 16,
            "bc3-rgba-unorm-srgb": 16,
            "bc4-r-unorm": 8,
            "bc4-r-snorm": 8,
            "bc5-rg-unorm": 16,
            "bc5-rg-snorm": 16,
            "bc6h-rgb-ufloat": 16,
            "bc6h-rgb-float": 16,
            "bc7-rgba-unorm": 16,
            "bc7-rgba-unorm-srgb": 16
        };
        function tn(e, t) {
            let { format, fourCC, width, height, dataOffset, mipmapCount } = ((e)=>{
                let t = new Uint32Array(e, 0, tt.HEADER_SIZE / Uint32Array.BYTES_PER_ELEMENT);
                if (t[tt.HEADER_FIELDS.MAGIC] !== tt.MAGIC_VALUE) {
                    throw Error("Invalid magic number in DDS header");
                }
                let r = t[tt.HEADER_FIELDS.HEIGHT];
                let n = t[tt.HEADER_FIELDS.WIDTH];
                let mipmapCount_1 = Math.max(1, t[tt.HEADER_FIELDS.MIPMAP_COUNT]);
                let a = t[tt.HEADER_FIELDS.PF_FLAGS];
                let fourCC_1 = t[tt.HEADER_FIELDS.FOURCC];
                let s = ((e, t, r, n)=>{
                    if (t & tt.PIXEL_FORMAT_FLAGS.FOURCC) {
                        if (r === tt.D3DFMT.DX10) {
                            let e = new Uint32Array(n, tt.MAGIC_SIZE + tt.HEADER_SIZE, tt.HEADER_DX10_SIZE / Uint32Array.BYTES_PER_ELEMENT);
                            if (e[tt.HEADER_DX10_FIELDS.MISC_FLAG] === tt.RESOURCE_MISC_TEXTURECUBE) {
                                throw Error("DDSParser does not support cubemap textures");
                            }
                            if (e[tt.HEADER_DX10_FIELDS.RESOURCE_DIMENSION] === tt.D3D10_RESOURCE_DIMENSION.DDS_DIMENSION_TEXTURE3D) {
                                throw Error("DDSParser does not supported 3D texture data");
                            }
                            let t = e[tt.HEADER_DX10_FIELDS.DXGI_FORMAT];
                            if (t in te) {
                                return te[t];
                            }
                            throw Error(`DDSParser cannot parse texture data with DXGI format ${t}`);
                        }
                        if (r in e9) {
                            return e9[r];
                        }
                        throw Error(`DDSParser cannot parse texture data with fourCC format ${r}`);
                    }
                    if (t & tt.PIXEL_FORMAT_FLAGS.RGB || t & tt.PIXEL_FORMAT_FLAGS.RGBA) {
                        return ((e)=>{
                            let t = e[tt.HEADER_FIELDS.RGB_BITCOUNT];
                            let r = e[tt.HEADER_FIELDS.R_BIT_MASK];
                            let n = e[tt.HEADER_FIELDS.G_BIT_MASK];
                            let i = e[tt.HEADER_FIELDS.B_BIT_MASK];
                            let a = e[tt.HEADER_FIELDS.A_BIT_MASK];
                            switch(t){
                                case 32:
                                    if (r === 255 && n === 65280 && i === 16711680 && a === 4278190080) {
                                        return te[tt.DXGI_FORMAT.DXGI_FORMAT_R8G8B8A8_UNORM];
                                    }
                                    if (r === 16711680 && n === 65280 && i === 255 && a === 4278190080) {
                                        return te[tt.DXGI_FORMAT.DXGI_FORMAT_B8G8R8A8_UNORM];
                                    }
                                    if (r === 1072693248 && n === 1047552 && i === 1023 && a === 3221225472) {
                                        return te[tt.DXGI_FORMAT.DXGI_FORMAT_R10G10B10A2_UNORM];
                                    }
                                    if (r === 65535 && n === 4294901760 && i === 0 && a === 0) {
                                        return te[tt.DXGI_FORMAT.DXGI_FORMAT_R16G16_UNORM];
                                    }
                                    if (r === 4294967295 && n === 0 && i === 0 && a === 0) {
                                        return te[tt.DXGI_FORMAT.DXGI_FORMAT_R32_FLOAT];
                                    }
                                    break;
                                case 24:
                                    break;
                                case 16:
                                    if (r === 31744 && n === 992 && i === 31 && a === 32768) {
                                        return te[tt.DXGI_FORMAT.DXGI_FORMAT_B5G5R5A1_UNORM];
                                    }
                                    if (r === 63488 && n === 2016 && i === 31 && a === 0) {
                                        return te[tt.DXGI_FORMAT.DXGI_FORMAT_B5G6R5_UNORM];
                                    }
                                    if (r === 3840 && n === 240 && i === 15 && a === 61440) {
                                        return te[tt.DXGI_FORMAT.DXGI_FORMAT_B4G4R4A4_UNORM];
                                    }
                                    if (r === 255 && n === 0 && i === 0 && a === 65280) {
                                        return te[tt.DXGI_FORMAT.DXGI_FORMAT_R8G8_UNORM];
                                    }
                                    if (r === 65535 && n === 0 && i === 0 && a === 0) {
                                        return te[tt.DXGI_FORMAT.DXGI_FORMAT_R16_UNORM];
                                    }
                                    break;
                                case 8:
                                    if (r === 255 && n === 0 && i === 0 && a === 0) {
                                        return te[tt.DXGI_FORMAT.DXGI_FORMAT_R8_UNORM];
                                    }
                            }
                            throw Error(`DDSParser does not support uncompressed texture with configuration:
                bitCount = ${t}, rBitMask = ${r}, gBitMask = ${n}, aBitMask = ${a}`);
                        })(e);
                    }
                    if (t & tt.PIXEL_FORMAT_FLAGS.YUV) {
                        throw Error("DDSParser does not supported YUV uncompressed texture data.");
                    }
                    if (t & tt.PIXEL_FORMAT_FLAGS.LUMINANCE || t & tt.PIXEL_FORMAT_FLAGS.LUMINANCEA) {
                        throw Error("DDSParser does not support single-channel (lumninance) texture data!");
                    }
                    if (t & tt.PIXEL_FORMAT_FLAGS.ALPHA || t & tt.PIXEL_FORMAT_FLAGS.ALPHAPIXELS) {
                        throw Error("DDSParser does not support single-channel (alpha) texture data!");
                    }
                    throw Error("DDSParser failed to load a texture file due to an unknown reason!");
                })(t, a, fourCC_1, e);
                let dataOffset_1 = tt.MAGIC_SIZE + tt.HEADER_SIZE + (fourCC_1 === tt.D3DFMT.DX10 ? tt.HEADER_DX10_SIZE : 0);
                return {
                    format: s,
                    fourCC: fourCC_1,
                    width: n,
                    height: r,
                    dataOffset: dataOffset_1,
                    mipmapCount: mipmapCount_1
                };
            })(e);
            if (!t.includes(format)) {
                throw Error(`Unsupported texture format: ${fourCC} ${format}, supported: ${t}`);
            }
            if (mipmapCount <= 1) {
                return {
                    format,
                    width,
                    height,
                    resource: [
                        new Uint8Array(e, dataOffset)
                    ],
                    alphaMode: "no-premultiply-alpha"
                };
            }
            let l = ((e, t, r, n, i, a)=>{
                let o = [];
                let s = tr[e];
                let l = t;
                let u = r;
                let c = n;
                for(let e = 0; e < i; ++e){
                    let e = 4 * Math.ceil(Math.max(4, l) / 4);
                    let t = 4 * Math.ceil(Math.max(4, u) / 4);
                    let r = s ? e / 4 * t / 4 * s : l * u * 4;
                    let n = new Uint8Array(a, c, r);
                    o.push(n);
                    c += r;
                    l = Math.max(l >> 1, 1);
                    u = Math.max(u >> 1, 1);
                }
                return o;
            })(format, width, height, dataOffset, mipmapCount, e);
            return {
                format,
                width,
                height,
                resource: l,
                alphaMode: "no-premultiply-alpha"
            };
        }
        let ti = {
            extension: {
                type: v.ExtensionType.LoadParser,
                priority: ey.LoaderParserPriority.High,
                name: "loadDDS"
            },
            name: "loadDDS",
            id: "dds",
            test: (e)=>eB.checkExtension(e, [
                    ".dds"
                ]),
            async load (e, t, r) {
                let n = await eK();
                let i = await fetch(e);
                let a = new e$({
                    ...tn(await i.arrayBuffer(), n),
                    resolution: t.data?.resolution || eQ.getResolutionOfUrl(e)
                });
                return eC.createTexture(a, r, e);
            },
            unload (e) {
                if (Array.isArray(e)) {
                    e.forEach((e)=>e.destroy(true));
                } else {
                    e.destroy(true);
                }
            }
        };
        g = ta || {};
        g[g.RGBA8_SNORM = 36759] = "RGBA8_SNORM";
        g[g.RGBA = 6408] = "RGBA";
        g[g.RGBA8UI = 36220] = "RGBA8UI";
        g[g.SRGB8_ALPHA8 = 35907] = "SRGB8_ALPHA8";
        g[g.RGBA8I = 36238] = "RGBA8I";
        g[g.RGBA8 = 32856] = "RGBA8";
        g[g.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT";
        g[g.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT";
        g[g.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT";
        g[g.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT";
        g[g.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT";
        g[g.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT";
        g[g.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT";
        g[g.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT";
        g[g.COMPRESSED_RED_RGTC1_EXT = 36283] = "COMPRESSED_RED_RGTC1_EXT";
        g[g.COMPRESSED_SIGNED_RED_RGTC1_EXT = 36284] = "COMPRESSED_SIGNED_RED_RGTC1_EXT";
        g[g.COMPRESSED_RED_GREEN_RGTC2_EXT = 36285] = "COMPRESSED_RED_GREEN_RGTC2_EXT";
        g[g.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT = 36286] = "COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT";
        g[g.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC";
        g[g.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC";
        g[g.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC";
        g[g.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC";
        g[g.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2";
        g[g.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC";
        g[g.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2";
        g[g.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC";
        g[g.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2";
        g[g.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2";
        g[g.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR";
        g[g.COMPRESSED_RGBA_ASTC_5x4_KHR = 37809] = "COMPRESSED_RGBA_ASTC_5x4_KHR";
        g[g.COMPRESSED_RGBA_ASTC_5x5_KHR = 37810] = "COMPRESSED_RGBA_ASTC_5x5_KHR";
        g[g.COMPRESSED_RGBA_ASTC_6x5_KHR = 37811] = "COMPRESSED_RGBA_ASTC_6x5_KHR";
        g[g.COMPRESSED_RGBA_ASTC_6x6_KHR = 37812] = "COMPRESSED_RGBA_ASTC_6x6_KHR";
        g[g.COMPRESSED_RGBA_ASTC_8x5_KHR = 37813] = "COMPRESSED_RGBA_ASTC_8x5_KHR";
        g[g.COMPRESSED_RGBA_ASTC_8x6_KHR = 37814] = "COMPRESSED_RGBA_ASTC_8x6_KHR";
        g[g.COMPRESSED_RGBA_ASTC_8x8_KHR = 37815] = "COMPRESSED_RGBA_ASTC_8x8_KHR";
        g[g.COMPRESSED_RGBA_ASTC_10x5_KHR = 37816] = "COMPRESSED_RGBA_ASTC_10x5_KHR";
        g[g.COMPRESSED_RGBA_ASTC_10x6_KHR = 37817] = "COMPRESSED_RGBA_ASTC_10x6_KHR";
        g[g.COMPRESSED_RGBA_ASTC_10x8_KHR = 37818] = "COMPRESSED_RGBA_ASTC_10x8_KHR";
        g[g.COMPRESSED_RGBA_ASTC_10x10_KHR = 37819] = "COMPRESSED_RGBA_ASTC_10x10_KHR";
        g[g.COMPRESSED_RGBA_ASTC_12x10_KHR = 37820] = "COMPRESSED_RGBA_ASTC_12x10_KHR";
        g[g.COMPRESSED_RGBA_ASTC_12x12_KHR = 37821] = "COMPRESSED_RGBA_ASTC_12x12_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840] = "COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR";
        g[g.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR";
        g[g.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT";
        g[g.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = 36493] = "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT";
        g[g.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT = 36494] = "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT";
        g[g.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT = 36495] = "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT";
        var ta = g;
        b = to || {};
        b[b.RGBA = 6408] = "RGBA";
        b[b.RGB = 6407] = "RGB";
        b[b.RG = 33319] = "RG";
        b[b.RED = 6403] = "RED";
        b[b.RGBA_INTEGER = 36249] = "RGBA_INTEGER";
        b[b.RGB_INTEGER = 36248] = "RGB_INTEGER";
        b[b.RG_INTEGER = 33320] = "RG_INTEGER";
        b[b.RED_INTEGER = 36244] = "RED_INTEGER";
        b[b.ALPHA = 6406] = "ALPHA";
        b[b.LUMINANCE = 6409] = "LUMINANCE";
        b[b.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA";
        b[b.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT";
        b[b.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
        var to = b;
        _ = ts || {};
        _[_.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE";
        _[_.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT";
        _[_.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5";
        _[_.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4";
        _[_.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1";
        _[_.UNSIGNED_INT = 5125] = "UNSIGNED_INT";
        _[_.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
        _[_.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
        _[_.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8";
        _[_.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
        _[_.BYTE = 5120] = "BYTE";
        _[_.SHORT = 5122] = "SHORT";
        _[_.INT = 5124] = "INT";
        _[_.FLOAT = 5126] = "FLOAT";
        _[_.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
        _[_.HALF_FLOAT = 36193] = "HALF_FLOAT";
        var ts = _;
        let tl = {
            FILE_HEADER_SIZE: 64,
            FILE_IDENTIFIER: [
                171,
                75,
                84,
                88,
                32,
                49,
                49,
                187,
                13,
                10,
                26,
                10
            ],
            FORMATS_TO_COMPONENTS: {
                6408: 4,
                6407: 3,
                33319: 2,
                6403: 1,
                6409: 1,
                6410: 2,
                6406: 1
            },
            INTERNAL_FORMAT_TO_BYTES_PER_PIXEL: {
                33776: 0.5,
                33777: 0.5,
                33778: 1,
                33779: 1,
                35916: 0.5,
                35917: 0.5,
                35918: 1,
                35919: 1,
                36283: 0.5,
                36284: 0.5,
                36285: 1,
                36286: 1,
                37488: 0.5,
                37489: 0.5,
                37490: 1,
                37491: 1,
                37492: 0.5,
                37496: 1,
                37493: 0.5,
                37497: 1,
                37494: 0.5,
                37495: 0.5,
                37808: 1,
                37840: 1,
                37809: 0.8,
                37841: 0.8,
                37810: 0.64,
                37842: 0.64,
                37811: 0.53375,
                37843: 0.53375,
                37812: 0.445,
                37844: 0.445,
                37813: 0.4,
                37845: 0.4,
                37814: 0.33375,
                37846: 0.33375,
                37815: 0.25,
                37847: 0.25,
                37816: 0.32,
                37848: 0.32,
                37817: 0.26625,
                37849: 0.26625,
                37818: 0.2,
                37850: 0.2,
                37819: 0.16,
                37851: 0.16,
                37820: 0.13375,
                37852: 0.13375,
                37821: 0.11125,
                37853: 0.11125,
                36492: 1,
                36493: 1,
                36494: 1,
                36495: 1
            },
            INTERNAL_FORMAT_TO_TEXTURE_FORMATS: {
                33776: "bc1-rgba-unorm",
                33777: "bc1-rgba-unorm",
                33778: "bc2-rgba-unorm",
                33779: "bc3-rgba-unorm",
                35916: "bc1-rgba-unorm-srgb",
                35917: "bc1-rgba-unorm-srgb",
                35918: "bc2-rgba-unorm-srgb",
                35919: "bc3-rgba-unorm-srgb",
                36283: "bc4-r-unorm",
                36284: "bc4-r-snorm",
                36285: "bc5-rg-unorm",
                36286: "bc5-rg-snorm",
                37488: "eac-r11unorm",
                37490: "eac-rg11snorm",
                37492: "etc2-rgb8unorm",
                37496: "etc2-rgba8unorm",
                37493: "etc2-rgb8unorm-srgb",
                37497: "etc2-rgba8unorm-srgb",
                37494: "etc2-rgb8a1unorm",
                37495: "etc2-rgb8a1unorm-srgb",
                37808: "astc-4x4-unorm",
                37840: "astc-4x4-unorm-srgb",
                37809: "astc-5x4-unorm",
                37841: "astc-5x4-unorm-srgb",
                37810: "astc-5x5-unorm",
                37842: "astc-5x5-unorm-srgb",
                37811: "astc-6x5-unorm",
                37843: "astc-6x5-unorm-srgb",
                37812: "astc-6x6-unorm",
                37844: "astc-6x6-unorm-srgb",
                37813: "astc-8x5-unorm",
                37845: "astc-8x5-unorm-srgb",
                37814: "astc-8x6-unorm",
                37846: "astc-8x6-unorm-srgb",
                37815: "astc-8x8-unorm",
                37847: "astc-8x8-unorm-srgb",
                37816: "astc-10x5-unorm",
                37848: "astc-10x5-unorm-srgb",
                37817: "astc-10x6-unorm",
                37849: "astc-10x6-unorm-srgb",
                37818: "astc-10x8-unorm",
                37850: "astc-10x8-unorm-srgb",
                37819: "astc-10x10-unorm",
                37851: "astc-10x10-unorm-srgb",
                37820: "astc-12x10-unorm",
                37852: "astc-12x10-unorm-srgb",
                37821: "astc-12x12-unorm",
                37853: "astc-12x12-unorm-srgb",
                36492: "bc7-rgba-unorm",
                36493: "bc7-rgba-unorm-srgb",
                36494: "bc6h-rgb-float",
                36495: "bc6h-rgb-ufloat",
                35907: "rgba8unorm-srgb",
                36759: "rgba8snorm",
                36220: "rgba8uint",
                36238: "rgba8sint",
                6408: "rgba8unorm"
            },
            FIELDS: {
                FILE_IDENTIFIER: 0,
                ENDIANNESS: 12,
                GL_TYPE: 16,
                GL_TYPE_SIZE: 20,
                GL_FORMAT: 24,
                GL_INTERNAL_FORMAT: 28,
                GL_BASE_INTERNAL_FORMAT: 32,
                PIXEL_WIDTH: 36,
                PIXEL_HEIGHT: 40,
                PIXEL_DEPTH: 44,
                NUMBER_OF_ARRAY_ELEMENTS: 48,
                NUMBER_OF_FACES: 52,
                NUMBER_OF_MIPMAP_LEVELS: 56,
                BYTES_OF_KEY_VALUE_DATA: 60
            },
            TYPES_TO_BYTES_PER_COMPONENT: {
                5121: 1,
                5123: 2,
                5124: 4,
                5125: 4,
                5126: 4,
                36193: 8
            },
            TYPES_TO_BYTES_PER_PIXEL: {
                32819: 2,
                32820: 2,
                33635: 2
            },
            ENDIANNESS: 67305985
        };
        function tu(e, t) {
            let r = new DataView(e);
            if (!((e)=>{
                for(let t = 0; t < tl.FILE_IDENTIFIER.length; t++){
                    if (e.getUint8(t) !== tl.FILE_IDENTIFIER[t]) {
                        return false;
                    }
                }
                return true;
            })(r)) {
                throw Error("Invalid KTX identifier in header");
            }
            let { littleEndian, glType, glFormat, glInternalFormat, pixelWidth, pixelHeight, numberOfMipmapLevels, offset } = ((e)=>{
                let littleEndian_1 = e.getUint32(tl.FIELDS.ENDIANNESS, true) === tl.ENDIANNESS;
                let glType_1 = e.getUint32(tl.FIELDS.GL_TYPE, littleEndian_1);
                let glFormat_1 = e.getUint32(tl.FIELDS.GL_FORMAT, littleEndian_1);
                let glInternalFormat_1 = e.getUint32(tl.FIELDS.GL_INTERNAL_FORMAT, littleEndian_1);
                let pixelWidth_1 = e.getUint32(tl.FIELDS.PIXEL_WIDTH, littleEndian_1);
                let pixelHeight_1 = e.getUint32(tl.FIELDS.PIXEL_HEIGHT, littleEndian_1) || 1;
                let s = e.getUint32(tl.FIELDS.PIXEL_DEPTH, littleEndian_1) || 1;
                let l = e.getUint32(tl.FIELDS.NUMBER_OF_ARRAY_ELEMENTS, littleEndian_1) || 1;
                let u = e.getUint32(tl.FIELDS.NUMBER_OF_FACES, littleEndian_1);
                let numberOfMipmapLevels_1 = e.getUint32(tl.FIELDS.NUMBER_OF_MIPMAP_LEVELS, littleEndian_1);
                let d = e.getUint32(tl.FIELDS.BYTES_OF_KEY_VALUE_DATA, littleEndian_1);
                if (pixelHeight_1 === 0 || s !== 1) {
                    throw Error("Only 2D textures are supported");
                }
                if (u !== 1) {
                    throw Error("CubeTextures are not supported by KTXLoader yet!");
                }
                if (l !== 1) {
                    throw Error("WebGL does not support array textures");
                }
                return {
                    littleEndian: littleEndian_1,
                    glType: glType_1,
                    glFormat: glFormat_1,
                    glInternalFormat: glInternalFormat_1,
                    pixelWidth: pixelWidth_1,
                    pixelHeight: pixelHeight_1,
                    numberOfMipmapLevels: numberOfMipmapLevels_1,
                    offset: tl.FILE_HEADER_SIZE + d
                };
            })(r);
            let d = tl.INTERNAL_FORMAT_TO_TEXTURE_FORMATS[glInternalFormat];
            if (!d) {
                throw Error(`Unknown texture format ${glInternalFormat}`);
            }
            if (!t.includes(d)) {
                throw Error(`Unsupported texture format: ${d}, supportedFormats: ${t}`);
            }
            let h = ((e, t, r)=>{
                let n = tl.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[r];
                if (e !== 0) {
                    n = tl.TYPES_TO_BYTES_PER_COMPONENT[e] ? tl.TYPES_TO_BYTES_PER_COMPONENT[e] * tl.FORMATS_TO_COMPONENTS[t] : tl.TYPES_TO_BYTES_PER_PIXEL[e];
                }
                if (n === undefined) {
                    throw Error("Unable to resolve the pixel format stored in the *.ktx file!");
                }
                return n;
            })(glType, glFormat, glInternalFormat);
            let p = ((e, t, r, n, i, a, o, s)=>{
                let l = n + 3 & -4;
                let u = i + 3 & -4;
                let c = n * i;
                if (t === 0) {
                    c = l * u;
                }
                let d = c * r;
                let h = n;
                let p = i;
                let f = a;
                let m = Array(o);
                for(let t = 0; t < o; t++){
                    let n = e.getUint32(f, s);
                    let i = f + 4;
                    m[t] = new Uint8Array(e.buffer, i, d);
                    i += d;
                    f += n + 4;
                    f = f % 4 != 0 ? f + 4 - f % 4 : f;
                    d = ((h = h >> 1 || 1) + 4 - 1 & -4) * ((p = p >> 1 || 1) + 4 - 1 & -4) * r;
                }
                return m;
            })(r, glType, h, pixelWidth, pixelHeight, offset, numberOfMipmapLevels, littleEndian);
            return {
                format: d,
                width: pixelWidth,
                height: pixelHeight,
                resource: p,
                alphaMode: "no-premultiply-alpha"
            };
        }
        let tc = {
            extension: {
                type: v.ExtensionType.LoadParser,
                priority: ey.LoaderParserPriority.High,
                name: "loadKTX"
            },
            name: "loadKTX",
            id: "ktx",
            test: (e)=>eB.checkExtension(e, ".ktx"),
            async load (e, t, r) {
                let n = await eK();
                let i = await fetch(e);
                let a = new e$({
                    ...tu(await i.arrayBuffer(), n),
                    resolution: t.data?.resolution || eQ.getResolutionOfUrl(e)
                });
                return eC.createTexture(a, r, e);
            },
            unload (e) {
                if (Array.isArray(e)) {
                    e.forEach((e)=>e.destroy(true));
                } else {
                    e.destroy(true);
                }
            }
        };
        let td = null;
        class th {
            constructor(){
                if (!td) {
                    td = URL.createObjectURL(new Blob([
                        '(function () {\n    \'use strict\';\n\n    const converters = {\n      rgb8unorm: {\n        convertedFormat: "rgba8unorm",\n        convertFunction: convertRGBtoRGBA\n      },\n      "rgb8unorm-srgb": {\n        convertedFormat: "rgba8unorm-srgb",\n        convertFunction: convertRGBtoRGBA\n      }\n    };\n    function convertFormatIfRequired(textureOptions) {\n      const format = textureOptions.format;\n      if (converters[format]) {\n        const convertFunction = converters[format].convertFunction;\n        const levelBuffers = textureOptions.resource;\n        for (let i = 0; i < levelBuffers.length; i++) {\n          levelBuffers[i] = convertFunction(levelBuffers[i]);\n        }\n        textureOptions.format = converters[format].convertedFormat;\n      }\n    }\n    function convertRGBtoRGBA(levelBuffer) {\n      const pixelCount = levelBuffer.byteLength / 3;\n      const levelBufferWithAlpha = new Uint32Array(pixelCount);\n      for (let i = 0; i < pixelCount; ++i) {\n        levelBufferWithAlpha[i] = levelBuffer[i * 3] + (levelBuffer[i * 3 + 1] << 8) + (levelBuffer[i * 3 + 2] << 16) + 4278190080;\n      }\n      return new Uint8Array(levelBufferWithAlpha.buffer);\n    }\n\n    function createLevelBuffersFromKTX(ktxTexture) {\n      const levelBuffers = [];\n      for (let i = 0; i < ktxTexture.numLevels; i++) {\n        const imageData = ktxTexture.getImageData(i, 0, 0);\n        const levelBuffer = new Uint8Array(imageData.byteLength);\n        levelBuffer.set(imageData);\n        levelBuffers.push(levelBuffer);\n      }\n      return levelBuffers;\n    }\n\n    const glFormatToGPUFormatMap = {\n      6408: "rgba8unorm",\n      32856: "bgra8unorm",\n      //\n      32857: "rgb10a2unorm",\n      33189: "depth16unorm",\n      33190: "depth24plus",\n      33321: "r8unorm",\n      33323: "rg8unorm",\n      33325: "r16float",\n      33326: "r32float",\n      33327: "rg16float",\n      33328: "rg32float",\n      33329: "r8sint",\n      33330: "r8uint",\n      33331: "r16sint",\n      33332: "r16uint",\n      33333: "r32sint",\n      33334: "r32uint",\n      33335: "rg8sint",\n      33336: "rg8uint",\n      33337: "rg16sint",\n      33338: "rg16uint",\n      33339: "rg32sint",\n      33340: "rg32uint",\n      33778: "bc2-rgba-unorm",\n      33779: "bc3-rgba-unorm",\n      34836: "rgba32float",\n      34842: "rgba16float",\n      35056: "depth24plus-stencil8",\n      35898: "rg11b10ufloat",\n      35901: "rgb9e5ufloat",\n      35907: "rgba8unorm-srgb",\n      // bgra8unorm-srgb\n      36012: "depth32float",\n      36013: "depth32float-stencil8",\n      36168: "stencil8",\n      36208: "rgba32uint",\n      36214: "rgba16uint",\n      36220: "rgba8uint",\n      36226: "rgba32sint",\n      36232: "rgba16sint",\n      36238: "rgba8sint",\n      36492: "bc7-rgba-unorm",\n      36756: "r8snorm",\n      36757: "rg8snorm",\n      36759: "rgba8snorm",\n      37496: "etc2-rgba8unorm",\n      37808: "astc-4x4-unorm"\n    };\n    function glFormatToGPUFormat(glInternalFormat) {\n      const format = glFormatToGPUFormatMap[glInternalFormat];\n      if (format) {\n        return format;\n      }\n      throw new Error(`Unsupported glInternalFormat: ${glInternalFormat}`);\n    }\n\n    const vkFormatToGPUFormatMap = {\n      23: "rgb8unorm",\n      // VK_FORMAT_R8G8B8_UNORM\n      37: "rgba8unorm",\n      // VK_FORMAT_R8G8B8A8_UNORM\n      43: "rgba8unorm-srgb"\n      // VK_FORMAT_R8G8B8A8_SRGB\n      // TODO add more!\n    };\n    function vkFormatToGPUFormat(vkFormat) {\n      const format = vkFormatToGPUFormatMap[vkFormat];\n      if (format) {\n        return format;\n      }\n      throw new Error(`Unsupported VkFormat: ${vkFormat}`);\n    }\n\n    function getTextureFormatFromKTXTexture(ktxTexture) {\n      if (ktxTexture.classId === 2) {\n        return vkFormatToGPUFormat(ktxTexture.vkFormat);\n      }\n      return glFormatToGPUFormat(ktxTexture.glInternalformat);\n    }\n\n    const gpuFormatToBasisTranscoderFormatMap = {\n      "bc3-rgba-unorm": "BC3_RGBA",\n      "bc7-rgba-unorm": "BC7_M5_RGBA",\n      "etc2-rgba8unorm": "ETC2_RGBA",\n      "astc-4x4-unorm": "ASTC_4x4_RGBA",\n      // Uncompressed\n      rgba8unorm: "RGBA32",\n      rg11b10ufloat: "R11F_G11F_B10F"\n    };\n    function gpuFormatToKTXBasisTranscoderFormat(transcoderFormat) {\n      const format = gpuFormatToBasisTranscoderFormatMap[transcoderFormat];\n      if (format) {\n        return format;\n      }\n      throw new Error(`Unsupported transcoderFormat: ${transcoderFormat}`);\n    }\n\n    const settings = {\n      jsUrl: "",\n      wasmUrl: ""\n    };\n    let basisTranscoderFormat;\n    let basisTranscodedTextureFormat;\n    let ktxPromise;\n    async function getKTX() {\n      if (!ktxPromise) {\n        const absoluteJsUrl = new URL(settings.jsUrl, location.origin).href;\n        const absoluteWasmUrl = new URL(settings.wasmUrl, location.origin).href;\n        importScripts(absoluteJsUrl);\n        ktxPromise = new Promise((resolve) => {\n          LIBKTX({\n            locateFile: (_file) => absoluteWasmUrl\n          }).then((libktx) => {\n            resolve(libktx);\n          });\n        });\n      }\n      return ktxPromise;\n    }\n    async function fetchKTXTexture(url, ktx) {\n      const ktx2Response = await fetch(url);\n      if (ktx2Response.ok) {\n        const ktx2ArrayBuffer = await ktx2Response.arrayBuffer();\n        return new ktx.ktxTexture(new Uint8Array(ktx2ArrayBuffer));\n      }\n      throw new Error(`Failed to load KTX(2) texture: ${url}`);\n    }\n    const preferredTranscodedFormat = [\n      "bc7-rgba-unorm",\n      "astc-4x4-unorm",\n      "etc2-rgba8unorm",\n      "bc3-rgba-unorm",\n      "rgba8unorm"\n    ];\n    async function load(url) {\n      const ktx = await getKTX();\n      const ktxTexture = await fetchKTXTexture(url, ktx);\n      let format;\n      if (ktxTexture.needsTranscoding) {\n        format = basisTranscodedTextureFormat;\n        const transcodeFormat = ktx.TranscodeTarget[basisTranscoderFormat];\n        const result = ktxTexture.transcodeBasis(transcodeFormat, 0);\n        if (result !== ktx.ErrorCode.SUCCESS) {\n          throw new Error("Unable to transcode basis texture.");\n        }\n      } else {\n        format = getTextureFormatFromKTXTexture(ktxTexture);\n      }\n      const levelBuffers = createLevelBuffersFromKTX(ktxTexture);\n      const textureOptions = {\n        width: ktxTexture.baseWidth,\n        height: ktxTexture.baseHeight,\n        format,\n        mipLevelCount: ktxTexture.numLevels,\n        resource: levelBuffers,\n        alphaMode: "no-premultiply-alpha"\n      };\n      convertFormatIfRequired(textureOptions);\n      return textureOptions;\n    }\n    async function init(jsUrl, wasmUrl, supportedTextures) {\n      if (jsUrl) settings.jsUrl = jsUrl;\n      if (wasmUrl) settings.wasmUrl = wasmUrl;\n      basisTranscodedTextureFormat = preferredTranscodedFormat.filter((format) => supportedTextures.includes(format))[0];\n      basisTranscoderFormat = gpuFormatToKTXBasisTranscoderFormat(basisTranscodedTextureFormat);\n      await getKTX();\n    }\n    const messageHandlers = {\n      init: async (data) => {\n        const { jsUrl, wasmUrl, supportedTextures } = data;\n        await init(jsUrl, wasmUrl, supportedTextures);\n      },\n      load: async (data) => {\n        try {\n          const textureOptions = await load(data.url);\n          return {\n            type: "load",\n            url: data.url,\n            success: true,\n            textureOptions,\n            transferables: textureOptions.resource?.map((arr) => arr.buffer)\n          };\n        } catch (e) {\n          throw e;\n        }\n      }\n    };\n    self.onmessage = (async (messageEvent) => {\n      const message = messageEvent.data;\n      try {\n        const response = await messageHandlers[message.type]?.(message);\n        if (response) {\n          self.postMessage(response, response.transferables);\n        }\n      } catch (err) {\n        self.postMessage({\n          type: "error",\n          err,\n          url: message.url\n        });\n      }\n    });\n\n})();\n'
                    ], {
                        type: "application/javascript"
                    }));
                }
                this.worker = new Worker(td);
            }
        }
        th.revokeObjectURL = ()=>{
            if (td) {
                URL.revokeObjectURL(td);
                td = null;
            }
        };
        let tp = {
            jsUrl: "https://cdn.jsdelivr.net/npm/pixi.js/transcoders/ktx/libktx.js",
            wasmUrl: "https://cdn.jsdelivr.net/npm/pixi.js/transcoders/ktx/libktx.wasm"
        };
        let tf = {};
        let tm = {};
        function tg(e, t) {
            if (!o) {
                o = new th().worker;
                o.onmessage = (e)=>{
                    let { err, success, url, textureOptions } = e.data;
                    if (err) {
                        tm[url](err);
                    } else {
                        if (!success) {
                            console.warn("Failed to load KTX texture", url);
                        }
                        tf[url](textureOptions);
                    }
                };
                o.postMessage({
                    type: "init",
                    jsUrl: tp.jsUrl,
                    wasmUrl: tp.wasmUrl,
                    supportedTextures: t
                });
            }
            let r = o;
            return new Promise((resolve, reject)=>{
                tf[e] = resolve;
                tm[e] = reject;
                r.postMessage({
                    type: "load",
                    url: e
                });
            });
        }
        let tb = {
            extension: {
                type: v.ExtensionType.LoadParser,
                priority: ey.LoaderParserPriority.High,
                name: "loadKTX2"
            },
            name: "loadKTX2",
            id: "ktx2",
            test: (e)=>eB.checkExtension(e, ".ktx2"),
            async load (e, t, r) {
                let n = await eK();
                let i = new e$({
                    ...await tg(e, n),
                    resolution: t.data?.resolution || eQ.getResolutionOfUrl(e)
                });
                return eC.createTexture(i, r, e);
            },
            async unload (e) {
                if (Array.isArray(e)) {
                    e.forEach((e)=>e.destroy(true));
                } else {
                    e.destroy(true);
                }
            }
        };
        let t_ = {
            rgb8unorm: {
                convertedFormat: "rgba8unorm",
                convertFunction
            },
            "rgb8unorm-srgb": {
                convertedFormat: "rgba8unorm-srgb",
                convertFunction
            }
        };
        function convertFunction(e) {
            let t = e.byteLength / 3;
            let r = new Uint32Array(t);
            for(let n = 0; n < t; ++n){
                r[n] = e[3 * n] + (e[3 * n + 1] << 8) + (e[3 * n + 2] << 16) + 4278190080;
            }
            return new Uint8Array(r.buffer);
        }
        let tT = {
            6408: "rgba8unorm",
            32856: "bgra8unorm",
            32857: "rgb10a2unorm",
            33189: "depth16unorm",
            33190: "depth24plus",
            33321: "r8unorm",
            33323: "rg8unorm",
            33325: "r16float",
            33326: "r32float",
            33327: "rg16float",
            33328: "rg32float",
            33329: "r8sint",
            33330: "r8uint",
            33331: "r16sint",
            33332: "r16uint",
            33333: "r32sint",
            33334: "r32uint",
            33335: "rg8sint",
            33336: "rg8uint",
            33337: "rg16sint",
            33338: "rg16uint",
            33339: "rg32sint",
            33340: "rg32uint",
            33778: "bc2-rgba-unorm",
            33779: "bc3-rgba-unorm",
            34836: "rgba32float",
            34842: "rgba16float",
            35056: "depth24plus-stencil8",
            35898: "rg11b10ufloat",
            35901: "rgb9e5ufloat",
            35907: "rgba8unorm-srgb",
            36012: "depth32float",
            36013: "depth32float-stencil8",
            36168: "stencil8",
            36208: "rgba32uint",
            36214: "rgba16uint",
            36220: "rgba8uint",
            36226: "rgba32sint",
            36232: "rgba16sint",
            36238: "rgba8sint",
            36492: "bc7-rgba-unorm",
            36756: "r8snorm",
            36757: "rg8snorm",
            36759: "rgba8snorm",
            37496: "etc2-rgba8unorm",
            37808: "astc-4x4-unorm"
        };
        function ty(e) {
            let t = tT[e];
            if (t) {
                return t;
            }
            throw Error(`Unsupported glInternalFormat: ${e}`);
        }
        let tS = {
            23: "rgb8unorm",
            37: "rgba8unorm",
            43: "rgba8unorm-srgb"
        };
        function tv(e) {
            let t = tS[e];
            if (t) {
                return t;
            }
            throw Error(`Unsupported VkFormat: ${e}`);
        }
        let tR = {
            "bc3-rgba-unorm": "BC3_RGBA",
            "bc7-rgba-unorm": "BC7_M5_RGBA",
            "etc2-rgba8unorm": "ETC2_RGBA",
            "astc-4x4-unorm": "ASTC_4x4_RGBA",
            rgba8unorm: "RGBA32",
            rg11b10ufloat: "R11F_G11F_B10F"
        };
        let tE = [
            "basis",
            "bc7",
            "bc6h",
            "astc",
            "etc2",
            "bc5",
            "bc4",
            "bc3",
            "bc2",
            "bc1",
            "eac"
        ];
        let tA = {
            extension: v.ExtensionType.ResolveParser,
            test: (e)=>eB.checkExtension(e, [
                    ".ktx",
                    ".ktx2",
                    ".dds"
                ]),
            parse: (src)=>{
                let t;
                let r = src.split(".");
                if (r.length > 2) {
                    let e = r[r.length - 2];
                    if (tE.includes(e)) {
                        t = e;
                    }
                } else {
                    t = r[r.length - 1];
                }
                return {
                    resolution: parseFloat(eP.Resolver.RETINA_PREFIX.exec(src)?.[1] ?? "1"),
                    format: t,
                    src
                };
            }
        };
        let tM = {
            extension: {
                type: v.ExtensionType.DetectionParser,
                priority: 2
            },
            test: async ()=>!!(await ek.isWebGPUSupported() || eX.isWebGLSupported()),
            add: async (e)=>{
                var t;
                let r;
                let n;
                return [
                    ...(t = await eY(), r = [
                        "basis"
                    ], n = {}, t.forEach((e)=>{
                        let t = e.split("-")[0];
                        if (t && !n[t]) {
                            n[t] = true;
                            r.push(t);
                        }
                    }), r.sort((e, t)=>{
                        let r = tE.indexOf(e);
                        let n = tE.indexOf(t);
                        if (-1 === r) {
                            return 1;
                        }
                        if (-1 === n) {
                            return -1;
                        }
                        return r - n;
                    }), s = r),
                    ...e
                ];
            },
            remove: async (e)=>{
                if (s) {
                    return e.filter((e)=>!(e in s));
                }
                return e;
            }
        };
        var tC = e.i(389474);
        var tG = e.i(539088);
        var tw = e.i(453549);
        var tD = e.i(512583);
        let tP = new tw.Bounds;
        let tO = new tC.Matrix;
        let tB = new tG.Rectangle;
        let tF = class {
            cull(e, t, r = true) {
                this._cullRecursive(e, t, r);
            }
            _cullRecursive(e, t, r = true) {
                if (e.cullable && e.measurable && e.includeInBuild) {
                    if (e.cullArea) {
                        tB.x = t.x;
                        tB.y = t.y;
                        tB.width = t.width;
                        tB.height = t.height;
                        let n = r ? e.worldTransform : e.getGlobalTransform(tO, r);
                        e.culled = !tB.intersects(e.cullArea, n);
                    } else {
                        let n = tD.getGlobalBounds(e, r, tP);
                        e.culled = n.x >= t.x + t.width || n.y >= t.y + t.height || n.x + n.width <= t.x || n.y + n.height <= t.y;
                    }
                } else {
                    e.culled = false;
                }
                if (e.cullableChildren && !e.culled && e.renderable && e.measurable && e.includeInBuild) {
                    for(let n = 0; n < e.children.length; n++){
                        this._cullRecursive(e.children[n], t, r);
                    }
                }
            }
        };
        tF.shared = new tF;
        class tI {
            static init(e) {
                this._renderRef = this.render.bind(this);
                this.render = ()=>{
                    let t = e?.culler?.updateTransform !== true;
                    tF.shared.cull(this.stage, this.renderer.screen, t);
                    this.renderer.render({
                        container: this.stage
                    });
                };
            }
            static destroy() {
                this.render = this._renderRef;
            }
        }
        tI.extension = {
            priority: 10,
            type: v.ExtensionType.Application,
            name: "culler"
        };
        var tU = e.i(811468);
        var tL = e.i(620044);
        var tN = e.i(37554);
        var tX = e.i(441327);
        class tk extends tX.ViewContainer {
            constructor(e = {}){
                const { element, anchor, ...rest } = e;
                super({
                    label: "DOMContainer",
                    ...rest
                });
                this.renderPipeId = "dom";
                this.batched = false;
                this._anchor = new tN.Point(0, 0);
                if (anchor) {
                    this.anchor = anchor;
                }
                this.element = e.element || document.createElement("div");
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
            set element(e) {
                if (this._element !== e) {
                    this._element = e;
                    this.onViewUpdate();
                }
            }
            get element() {
                return this._element;
            }
            updateBounds() {
                let _bounds = this._bounds;
                let _element = this._element;
                if (!_element) {
                    _bounds.minX = 0;
                    _bounds.minY = 0;
                    _bounds.maxX = 0;
                    _bounds.maxY = 0;
                    return;
                }
                let { offsetWidth, offsetHeight } = _element;
                _bounds.minX = 0;
                _bounds.maxX = offsetWidth;
                _bounds.minY = 0;
                _bounds.maxY = offsetHeight;
            }
            destroy(e = false) {
                super.destroy(e);
                this._element?.parentNode?.removeChild(this._element);
                this._element = null;
                this._anchor = null;
            }
        }
        var tH = e.i(67516);
        var tV = e.i(694427);
        var t$ = e.i(344520);
        var tq = e.i(243627);
        var tz = e.i(391845);
        var tW = e.i(390976);
        var tY = e.i(28028);
        var tj = e.i(651412);
        var tK = e.i(652218);
        var tQ = e.i(578078);
        var tZ = e.i(977598);
        var tJ = e.i(510574);
        var t0 = "\nin vec2 vTextureCoord;\n\nout vec4 finalColor;\n\nuniform float uAlpha;\nuniform sampler2D uTexture;\n\nvoid main()\n{\n    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;\n}\n";
        var t3 = "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct AlphaUniforms {\n  uAlpha:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n \n    var sample = textureSample(uTexture, uSampler, uv);\n    \n    return sample * alphaUniforms.uAlpha;\n}";
        var t2 = "\n\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct BlurUniforms {\n  uStrength:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;\n\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    %blur-struct%\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);\n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>,\n) -> VSOutput {\n\n  let filteredCord = filterTextureCoord(aPosition);\n\n  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;\n\n  return VSOutput(\n   filterVertexPosition(aPosition),\n    %blur-vertex-out%\n  );\n}\n\n@fragment\nfn mainFragment(\n  @builtin(position) position: vec4<f32>,\n  %blur-fragment-in%\n) -> @location(0) vec4<f32> {\n\n    var   finalColor = vec4(0.0);\n\n    %blur-sampling%\n\n    return finalColor;\n}\n";
        var t1 = "\nin vec2 vTextureCoord;\nin vec4 vColor;\n\nout vec4 finalColor;\n\nuniform float uColorMatrix[20];\nuniform float uAlpha;\n\nuniform sampler2D uTexture;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture(uTexture, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * 0.2);\n    float diff = (randomValue - 0.5) *  0.5;\n\n    if (uAlpha == 0.0) {\n        finalColor = color;\n        return;\n    }\n\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    vec4 result;\n\n    result.r = (uColorMatrix[0] * color.r);\n        result.r += (uColorMatrix[1] * color.g);\n        result.r += (uColorMatrix[2] * color.b);\n        result.r += (uColorMatrix[3] * color.a);\n        result.r += uColorMatrix[4];\n\n    result.g = (uColorMatrix[5] * color.r);\n        result.g += (uColorMatrix[6] * color.g);\n        result.g += (uColorMatrix[7] * color.b);\n        result.g += (uColorMatrix[8] * color.a);\n        result.g += uColorMatrix[9];\n\n    result.b = (uColorMatrix[10] * color.r);\n       result.b += (uColorMatrix[11] * color.g);\n       result.b += (uColorMatrix[12] * color.b);\n       result.b += (uColorMatrix[13] * color.a);\n       result.b += uColorMatrix[14];\n\n    result.a = (uColorMatrix[15] * color.r);\n       result.a += (uColorMatrix[16] * color.g);\n       result.a += (uColorMatrix[17] * color.b);\n       result.a += (uColorMatrix[18] * color.a);\n       result.a += uColorMatrix[19];\n\n    vec3 rgb = mix(color.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    finalColor = vec4(rgb, result.a);\n}\n";
        var t8 = "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct ColorMatrixUniforms {\n  uColorMatrix:array<vec4<f32>, 5>,\n  uAlpha:f32,\n};\n\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n@group(1) @binding(0) var<uniform> colorMatrixUniforms : ColorMatrixUniforms;\n\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n  };\n  \nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n  );\n}\n\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n) -> @location(0) vec4<f32> {\n\n\n  var c = textureSample(uTexture, uSampler, uv);\n  \n  if (colorMatrixUniforms.uAlpha == 0.0) {\n    return c;\n  }\n\n \n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.r /= c.a;\n      c.g /= c.a;\n      c.b /= c.a;\n    }\n\n    var cm = colorMatrixUniforms.uColorMatrix;\n\n\n    var result = vec4<f32>(0.);\n\n    result.r = (cm[0][0] * c.r);\n    result.r += (cm[0][1] * c.g);\n    result.r += (cm[0][2] * c.b);\n    result.r += (cm[0][3] * c.a);\n    result.r += cm[1][0];\n\n    result.g = (cm[1][1] * c.r);\n    result.g += (cm[1][2] * c.g);\n    result.g += (cm[1][3] * c.b);\n    result.g += (cm[2][0] * c.a);\n    result.g += cm[2][1];\n\n    result.b = (cm[2][2] * c.r);\n    result.b += (cm[2][3] * c.g);\n    result.b += (cm[3][0] * c.b);\n    result.b += (cm[3][1] * c.a);\n    result.b += cm[3][2];\n\n    result.a = (cm[3][3] * c.r);\n    result.a += (cm[4][0] * c.g);\n    result.a += (cm[4][1] * c.b);\n    result.a += (cm[4][2] * c.a);\n    result.a += cm[4][3];\n\n    var rgb = mix(c.rgb, result.rgb, colorMatrixUniforms.uAlpha);\n\n    rgb.r *= result.a;\n    rgb.g *= result.a;\n    rgb.b *= result.a;\n\n    return vec4(rgb, result.a);\n}";
        var t4 = e.i(738599);
        var t6 = "\nin vec2 vTextureCoord;\nin vec2 vFilterUv;\n\nout vec4 finalColor;\n\nuniform sampler2D uTexture;\nuniform sampler2D uMapTexture;\n\nuniform vec4 uInputClamp;\nuniform highp vec4 uInputSize;\nuniform mat2 uRotation;\nuniform vec2 uScale;\n\nvoid main()\n{\n    vec4 map = texture(uMapTexture, vFilterUv);\n    \n    vec2 offset = uInputSize.zw * (uRotation * (map.xy - 0.5)) * uScale; \n\n    finalColor = texture(uTexture, clamp(vTextureCoord + offset, uInputClamp.xy, uInputClamp.zw));\n}\n";
        var t5 = "in vec2 aPosition;\nout vec2 vTextureCoord;\nout vec2 vFilterUv;\n\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\n\nuniform mat3 uFilterMatrix;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n    \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvec2 getFilterCoord( void )\n{\n  return ( uFilterMatrix * vec3( filterTextureCoord(), 1.0)  ).xy;\n}\n\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n    vFilterUv = getFilterCoord();\n}\n";
        var t7 = "\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct DisplacementUniforms {\n  uFilterMatrix:mat3x3<f32>,\n  uScale:vec2<f32>,\n  uRotation:mat2x2<f32>\n};\n\n\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> filterUniforms : DisplacementUniforms;\n@group(1) @binding(1) var uMapTexture: texture_2d<f32>;\n@group(1) @binding(2) var uMapSampler : sampler;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) filterUv : vec2<f32>,\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n\nfn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}\n\nfn getSize() -> vec2<f32>\n{\n\n  \n  return gfu.uGlobalFrame.zw;\n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n   getFilterCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) filterUv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var map = textureSample(uMapTexture, uMapSampler, filterUv);\n\n    var offset =  gfu.uInputSize.zw * (filterUniforms.uRotation * (map.xy - 0.5)) * filterUniforms.uScale; \n   \n    return textureSample(uTexture, uSampler, clamp(uv + offset, gfu.uInputClamp.xy, gfu.uInputClamp.zw));\n}";
        var t9 = "\nin vec2 vTextureCoord;\nin vec4 vColor;\n\nout vec4 finalColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uTexture;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture(uTexture, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) *  uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    finalColor = color;\n}\n";
        var re = "\n\nstruct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct NoiseUniforms {\n  uNoise:f32,\n  uSeed:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> noiseUniforms : NoiseUniforms;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>\n  };\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  \n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n  \n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>, \n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition)\n  );\n}\n\nfn rand(co:vec2<f32>) -> f32\n{\n  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\n\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var pixelPosition =  globalTextureCoord(position.xy);// / (getSize());//-  gfu.uOutputFrame.xy);\n  \n    \n    var sample = textureSample(uTexture, uSampler, uv);\n    var randomValue =  rand(pixelPosition.xy * noiseUniforms.uSeed);\n    var diff = (randomValue - 0.5) * noiseUniforms.uNoise;\n  \n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (sample.a > 0.0) {\n      sample.r /= sample.a;\n      sample.g /= sample.a;\n      sample.b /= sample.a;\n    }\n\n    sample.r += diff;\n    sample.g += diff;\n    sample.b += diff;\n\n    // Premultiply alpha again.\n    sample.r *= sample.a;\n    sample.g *= sample.a;\n    sample.b *= sample.a;\n    \n    return sample;\n}";
        var rt = e.i(664683);
        var rr = e.i(906994);
        var rn = e.i(265902);
        var ri = e.i(226825);
        var ra = e.i(655565);
        var ro = e.i(50190);
        var rs = w;
        let rl = class e extends rs.Filter {
            constructor(t){
                t = {
                    ...e.defaultOptions,
                    ...t
                };
                const r = M.GpuProgram.from({
                    vertex: {
                        source: t3,
                        entryPoint: "mainVertex"
                    },
                    fragment: {
                        source: t3,
                        entryPoint: "mainFragment"
                    }
                });
                const n = A.GlProgram.from({
                    vertex: t4.default,
                    fragment: t0,
                    name: "alpha-filter"
                });
                const { alpha, ...rest } = t;
                const alphaUniforms = new C.UniformGroup({
                    uAlpha: {
                        value: alpha,
                        type: "f32"
                    }
                });
                super({
                    ...rest,
                    gpuProgram: r,
                    glProgram: n,
                    resources: {
                        alphaUniforms
                    }
                });
            }
            get alpha() {
                return this.resources.alphaUniforms.uniforms.uAlpha;
            }
            set alpha(e) {
                this.resources.alphaUniforms.uniforms.uAlpha = e;
            }
        };
        rl.defaultOptions = {
            alpha: 1
        };
        var ru = e.i(901548);
        var rc = e.i(162450);
        var rd = e.i(727905);
        var rh = w;
        var rp = w;
        let rf = {
            5: [
                0.153388,
                0.221461,
                0.250301
            ],
            7: [
                0.071303,
                0.131514,
                0.189879,
                0.214607
            ],
            9: [
                0.028532,
                0.067234,
                0.124009,
                0.179044,
                0.20236
            ],
            11: [
                0.0093,
                0.028002,
                0.065984,
                0.121703,
                0.175713,
                0.198596
            ],
            13: [
                0.002406,
                0.009255,
                0.027867,
                0.065666,
                0.121117,
                0.174868,
                0.197641
            ],
            15: [
                0.000489,
                0.002403,
                0.009246,
                0.02784,
                0.065602,
                0.120999,
                0.174697,
                0.197448
            ]
        };
        function rm(e) {
            let t = rf[e];
            let t_length = t.length;
            let n = "";
            for(let i = 0; i < e; i++){
                let a = i === 0 ? "finalColor = " : "    + ";
                let o = i < t_length ? i : e - i - 1;
                let s = "texture(uTexture, vBlurTexCoords[%index%]) * %value%".replace("%index%", i.toString()).replace("%value%", t[o].toString());
                n += `${a}${s}
`;
            }
            return "in vec2 vBlurTexCoords[%size%];\nuniform sampler2D uTexture;\nout vec4 finalColor;\nvoid main(void)\n{\n    %blur%\n}".replace("%blur%", `${n};`).replace("%size%", e.toString());
        }
        let rg = `
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
        function rb(e, t) {
            let r;
            let n = Math.ceil(e / 2);
            let i = rg;
            let a = "";
            r = t ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";
            for(let t = 0; t < e; t++){
                let e = r.replace("%index%", t.toString());
                a += e = e.replace("%sampleIndex%", `${t - (n - 1)}.0`);
                a += "\n";
            }
            return (i = (i = i.replace("%blur%", a)).replace("%size%", e.toString())).replace("%dimension%", t ? "z" : "w");
        }
        function r_(e, t) {
            let vertex = rb(t, e);
            let n = rm(t);
            return A.GlProgram.from({
                vertex,
                fragment: n,
                name: `blur-${e ? "horizontal" : "vertical"}-pass-filter`
            });
        }
        function rx(e, t) {
            let r = rf[t];
            let r_length = r.length;
            let i = [];
            let a = [];
            let o = [];
            for(let s = 0; s < t; s++){
                i[s] = `@location(${s}) offset${s}: vec2<f32>,`;
                if (e) {
                    a[s] = `filteredCord + vec2(${s - r_length + 1} * pixelStrength, 0.0),`;
                } else {
                    a[s] = `filteredCord + vec2(0.0, ${s - r_length + 1} * pixelStrength),`;
                }
                let l = r[s < r_length ? s : t - s - 1].toString();
                o[s] = `finalColor += textureSample(uTexture, uSampler, offset${s}) * ${l};`;
            }
            let s = i.join("\n");
            let l = a.join("\n");
            let u = o.join("\n");
            let c = t2.replace("%blur-struct%", s).replace("%blur-vertex-out%", l).replace("%blur-fragment-in%", s).replace("%blur-sampling%", u).replace("%dimension%", e ? "z" : "w");
            return M.GpuProgram.from({
                vertex: {
                    source: c,
                    entryPoint: "mainVertex"
                },
                fragment: {
                    source: c,
                    entryPoint: "mainFragment"
                }
            });
        }
        let rT = class e extends rp.Filter {
            constructor(t){
                super({
                    glProgram: r_((t = {
                        ...e.defaultOptions,
                        ...t
                    }).horizontal, t.kernelSize),
                    gpuProgram: rx(t.horizontal, t.kernelSize),
                    resources: {
                        blurUniforms: {
                            uStrength: {
                                value: 0,
                                type: "f32"
                            }
                        }
                    },
                    ...t
                });
                this.horizontal = t.horizontal;
                this.legacy = t.legacy ?? false;
                this._quality = 0;
                this.quality = t.quality;
                this.blur = t.strength;
                this._blurUniforms = this.resources.blurUniforms;
                this._uniforms = this._blurUniforms.uniforms;
            }
            apply(e, t, r, n) {
                if (this.legacy) {
                    this._applyLegacy(e, t, r, n);
                } else {
                    this._applyOptimized(e, t, r, n);
                }
            }
            _applyLegacy(e, t, r, n) {
                this._uniforms.uStrength = this.strength / this.passes;
                if (this.passes === 1) {
                    e.applyFilter(this, t, r, n);
                } else {
                    let i = ru.TexturePool.getSameSizeTexture(t);
                    let a = t;
                    let o = i;
                    this._state.blend = false;
                    let s = e.renderer.type === rc.RendererType.WEBGPU;
                    for(let t = 0; t < this.passes - 1; t++){
                        e.applyFilter(this, a, o, t === 0 || s);
                        let r = o;
                        o = a;
                        a = r;
                    }
                    this._state.blend = true;
                    e.applyFilter(this, a, r, n);
                    ru.TexturePool.returnTexture(i);
                }
            }
            _applyOptimized(e, t, r, n) {
                this._uniforms.uStrength = this._calculateInitialStrength();
                if (this.passes === 1) {
                    e.applyFilter(this, t, r, n);
                } else {
                    let i = ru.TexturePool.getSameSizeTexture(t);
                    let a = t;
                    let o = i;
                    this._state.blend = false;
                    let s = e.renderer;
                    let l = s.type === rc.RendererType.WEBGPU;
                    let u = l ? s.renderPipes.uniformBatch : null;
                    for(let t = 0; t < this.passes - 1; t++){
                        if (u) {
                            this.groups[1].setResource(u.getUboResource(this._blurUniforms), 0);
                        }
                        e.applyFilter(this, a, o, l);
                        let t = o;
                        o = a;
                        a = t;
                        this._uniforms.uStrength *= 0.5;
                    }
                    if (u) {
                        this.groups[1].setResource(u.getUboResource(this._blurUniforms), 0);
                    }
                    this._state.blend = true;
                    e.applyFilter(this, a, r, n);
                    ru.TexturePool.returnTexture(i);
                }
            }
            _calculateInitialStrength() {
                let e = 1;
                let t = 0.5;
                for(let r = 1; r < this.passes; r++){
                    e += t * t;
                    t *= 0.5;
                }
                return this.strength / Math.sqrt(e);
            }
            get blur() {
                return this.strength;
            }
            set blur(e) {
                this.padding = 1 + 2 * Math.abs(e);
                this.strength = e;
            }
            get quality() {
                return this._quality;
            }
            set quality(e) {
                this._quality = e;
                this.passes = e;
            }
        };
        rT.defaultOptions = {
            strength: 8,
            quality: 4,
            kernelSize: 5,
            legacy: false
        };
        class ry extends rh.Filter {
            constructor(...e){
                let strength_1 = e[0] ?? {};
                if (typeof strength_1 === "number") {
                    rd.deprecation(rd.v8_0_0, "BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");
                    strength_1 = {
                        strength: strength_1
                    };
                    if (e[1] !== undefined) {
                        strength_1.quality = e[1];
                    }
                    if (e[2] !== undefined) {
                        strength_1.resolution = e[2] || "inherit";
                    }
                    if (e[3] !== undefined) {
                        strength_1.kernelSize = e[3];
                    }
                }
                const { strength, strengthX, strengthY, quality, ...rest } = strength_1 = {
                    ...rT.defaultOptions,
                    ...strength_1
                };
                super({
                    ...rest,
                    compatibleRenderers: rc.RendererType.BOTH,
                    resources: {}
                });
                this._repeatEdgePixels = false;
                this.blurXFilter = new rT({
                    horizontal: true,
                    ...strength_1
                });
                this.blurYFilter = new rT({
                    horizontal: false,
                    ...strength_1
                });
                this.quality = quality;
                this.strengthX = strengthX ?? strength;
                this.strengthY = strengthY ?? strength;
                this.repeatEdgePixels = false;
            }
            apply(e, t, r, n) {
                let i = Math.abs(this.blurXFilter.strength);
                let a = Math.abs(this.blurYFilter.strength);
                if (i && a) {
                    let i = ru.TexturePool.getSameSizeTexture(t);
                    this.blurXFilter.blendMode = "normal";
                    this.blurXFilter.apply(e, t, i, true);
                    this.blurYFilter.blendMode = this.blendMode;
                    this.blurYFilter.apply(e, i, r, n);
                    ru.TexturePool.returnTexture(i);
                } else {
                    if (a) {
                        this.blurYFilter.blendMode = this.blendMode;
                        this.blurYFilter.apply(e, t, r, n);
                    } else {
                        this.blurXFilter.blendMode = this.blendMode;
                        this.blurXFilter.apply(e, t, r, n);
                    }
                }
            }
            updatePadding() {
                if (this._repeatEdgePixels) {
                    this.padding = 0;
                } else {
                    this.padding = 2 * Math.max(Math.abs(this.blurXFilter.blur), Math.abs(this.blurYFilter.blur));
                }
            }
            get strength() {
                if (this.strengthX !== this.strengthY) {
                    throw Error("BlurFilter's strengthX and strengthY are different");
                }
                return this.strengthX;
            }
            set strength(e) {
                this.blurXFilter.blur = this.blurYFilter.blur = e;
                this.updatePadding();
            }
            get quality() {
                return this.blurXFilter.quality;
            }
            set quality(e) {
                this.blurXFilter.quality = this.blurYFilter.quality = e;
            }
            get strengthX() {
                return this.blurXFilter.blur;
            }
            set strengthX(e) {
                this.blurXFilter.blur = e;
                this.updatePadding();
            }
            get strengthY() {
                return this.blurYFilter.blur;
            }
            set strengthY(e) {
                this.blurYFilter.blur = e;
                this.updatePadding();
            }
            get blur() {
                rd.deprecation("8.3.0", "BlurFilter.blur is deprecated, please use BlurFilter.strength instead.");
                return this.strength;
            }
            set blur(e) {
                rd.deprecation("8.3.0", "BlurFilter.blur is deprecated, please use BlurFilter.strength instead.");
                this.strength = e;
            }
            get blurX() {
                rd.deprecation("8.3.0", "BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead.");
                return this.strengthX;
            }
            set blurX(e) {
                rd.deprecation("8.3.0", "BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead.");
                this.strengthX = e;
            }
            get blurY() {
                rd.deprecation("8.3.0", "BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead.");
                return this.strengthY;
            }
            set blurY(e) {
                rd.deprecation("8.3.0", "BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead.");
                this.strengthY = e;
            }
            get repeatEdgePixels() {
                return this._repeatEdgePixels;
            }
            set repeatEdgePixels(e) {
                this._repeatEdgePixels = e;
                this.updatePadding();
            }
        }
        ry.defaultOptions = {
            strength: 8,
            quality: 4,
            kernelSize: 5,
            legacy: false
        };
        var rS = w;
        class rv extends rS.Filter {
            constructor(e = {}){
                const colorMatrixUniforms = new C.UniformGroup({
                    uColorMatrix: {
                        value: [
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            0
                        ],
                        type: "f32",
                        size: 20
                    },
                    uAlpha: {
                        value: 1,
                        type: "f32"
                    }
                });
                const r = M.GpuProgram.from({
                    vertex: {
                        source: t8,
                        entryPoint: "mainVertex"
                    },
                    fragment: {
                        source: t8,
                        entryPoint: "mainFragment"
                    }
                });
                const n = A.GlProgram.from({
                    vertex: t4.default,
                    fragment: t1,
                    name: "color-matrix-filter"
                });
                super({
                    ...e,
                    gpuProgram: r,
                    glProgram: n,
                    resources: {
                        colorMatrixUniforms
                    }
                });
                this.alpha = 1;
            }
            _loadMatrix(e, t = false) {
                if (t) {
                    let t = [
                        ...e
                    ];
                    this._multiply(t, this.matrix, e);
                    this.resources.colorMatrixUniforms.uniforms.uColorMatrix = t;
                } else {
                    this.resources.colorMatrixUniforms.uniforms.uColorMatrix = e;
                }
                this.resources.colorMatrixUniforms.update();
            }
            _multiply(e, t, r) {
                e[0] = t[0] * r[0] + t[1] * r[5] + t[2] * r[10] + t[3] * r[15];
                e[1] = t[0] * r[1] + t[1] * r[6] + t[2] * r[11] + t[3] * r[16];
                e[2] = t[0] * r[2] + t[1] * r[7] + t[2] * r[12] + t[3] * r[17];
                e[3] = t[0] * r[3] + t[1] * r[8] + t[2] * r[13] + t[3] * r[18];
                e[4] = t[0] * r[4] + t[1] * r[9] + t[2] * r[14] + t[3] * r[19] + t[4];
                e[5] = t[5] * r[0] + t[6] * r[5] + t[7] * r[10] + t[8] * r[15];
                e[6] = t[5] * r[1] + t[6] * r[6] + t[7] * r[11] + t[8] * r[16];
                e[7] = t[5] * r[2] + t[6] * r[7] + t[7] * r[12] + t[8] * r[17];
                e[8] = t[5] * r[3] + t[6] * r[8] + t[7] * r[13] + t[8] * r[18];
                e[9] = t[5] * r[4] + t[6] * r[9] + t[7] * r[14] + t[8] * r[19] + t[9];
                e[10] = t[10] * r[0] + t[11] * r[5] + t[12] * r[10] + t[13] * r[15];
                e[11] = t[10] * r[1] + t[11] * r[6] + t[12] * r[11] + t[13] * r[16];
                e[12] = t[10] * r[2] + t[11] * r[7] + t[12] * r[12] + t[13] * r[17];
                e[13] = t[10] * r[3] + t[11] * r[8] + t[12] * r[13] + t[13] * r[18];
                e[14] = t[10] * r[4] + t[11] * r[9] + t[12] * r[14] + t[13] * r[19] + t[14];
                e[15] = t[15] * r[0] + t[16] * r[5] + t[17] * r[10] + t[18] * r[15];
                e[16] = t[15] * r[1] + t[16] * r[6] + t[17] * r[11] + t[18] * r[16];
                e[17] = t[15] * r[2] + t[16] * r[7] + t[17] * r[12] + t[18] * r[17];
                e[18] = t[15] * r[3] + t[16] * r[8] + t[17] * r[13] + t[18] * r[18];
                e[19] = t[15] * r[4] + t[16] * r[9] + t[17] * r[14] + t[18] * r[19] + t[19];
                return e;
            }
            brightness(e, t) {
                this._loadMatrix([
                    e,
                    0,
                    0,
                    0,
                    0,
                    0,
                    e,
                    0,
                    0,
                    0,
                    0,
                    0,
                    e,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ], t);
            }
            tint(e, t) {
                let [r, n, i] = eN.Color.shared.setValue(e).toArray();
                this._loadMatrix([
                    r,
                    0,
                    0,
                    0,
                    0,
                    0,
                    n,
                    0,
                    0,
                    0,
                    0,
                    0,
                    i,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ], t);
            }
            greyscale(e, t) {
                this._loadMatrix([
                    e,
                    e,
                    e,
                    0,
                    0,
                    e,
                    e,
                    e,
                    0,
                    0,
                    e,
                    e,
                    e,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ], t);
            }
            grayscale(e, t) {
                this.greyscale(e, t);
            }
            blackAndWhite(e) {
                this._loadMatrix([
                    0.3,
                    0.6,
                    0.1,
                    0,
                    0,
                    0.3,
                    0.6,
                    0.1,
                    0,
                    0,
                    0.3,
                    0.6,
                    0.1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ], e);
            }
            hue(e, t) {
                let r = Math.cos(e = (e || 0) / 180 * Math.PI);
                let n = Math.sin(e);
                let i = 1 / 3;
                let a = Math.sqrt(1 / 3);
                this._loadMatrix([
                    r + (1 - r) * i,
                    i * (1 - r) - a * n,
                    i * (1 - r) + a * n,
                    0,
                    0,
                    i * (1 - r) + a * n,
                    r + i * (1 - r),
                    i * (1 - r) - a * n,
                    0,
                    0,
                    i * (1 - r) - a * n,
                    i * (1 - r) + a * n,
                    r + i * (1 - r),
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ], t);
            }
            contrast(e, t) {
                let r = (e || 0) + 1;
                let n = -0.5 * (r - 1);
                this._loadMatrix([
                    r,
                    0,
                    0,
                    0,
                    n,
                    0,
                    r,
                    0,
                    0,
                    n,
                    0,
                    0,
                    r,
                    0,
                    n,
                    0,
                    0,
                    0,
                    1,
                    0
                ], t);
            }
            saturate(e = 0, t) {
                let r = 2 * e / 3 + 1;
                let n = -((r - 1) * 0.5);
                this._loadMatrix([
                    r,
                    n,
                    n,
                    0,
                    0,
                    n,
                    r,
                    n,
                    0,
                    0,
                    n,
                    n,
                    r,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ], t);
            }
            desaturate() {
                this.saturate(-1);
            }
            negative(e) {
                this._loadMatrix([
                    -1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    0,
                    0,
                    -1,
                    1,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ], e);
            }
            sepia(e) {
                this._loadMatrix([
                    0.393,
                    0.7689999,
                    0.18899999,
                    0,
                    0,
                    0.349,
                    0.6859999,
                    0.16799999,
                    0,
                    0,
                    0.272,
                    0.5339999,
                    0.13099999,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ], e);
            }
            technicolor(e) {
                this._loadMatrix([
                    1.9125277891456083,
                    -0.8545344976951645,
                    -0.09155508482755585,
                    0,
                    0.046249425232852304,
                    -0.3087833385928097,
                    1.7658908555458428,
                    -0.10601743074722245,
                    0,
                    -0.2758903984886823,
                    -0.231103377548616,
                    -0.7501899197440212,
                    1.847597816108189,
                    0,
                    0.12137623870388682,
                    0,
                    0,
                    0,
                    1,
                    0
                ], e);
            }
            polaroid(e) {
                this._loadMatrix([
                    1.438,
                    -0.062,
                    -0.062,
                    0,
                    0,
                    -0.122,
                    1.378,
                    -0.122,
                    0,
                    0,
                    -0.016,
                    -0.016,
                    1.483,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ], e);
            }
            toBGR(e) {
                this._loadMatrix([
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ], e);
            }
            kodachrome(e) {
                this._loadMatrix([
                    1.1285582396593525,
                    -0.3967382283601348,
                    -0.03992559172921793,
                    0,
                    0.24991995145868634,
                    -0.16404339962244616,
                    1.0835251566291304,
                    -0.05498805115633132,
                    0,
                    0.09698983488904393,
                    -0.16786010706155763,
                    -0.5603416277695248,
                    1.6014850761964943,
                    0,
                    0.13972481597886063,
                    0,
                    0,
                    0,
                    1,
                    0
                ], e);
            }
            browni(e) {
                this._loadMatrix([
                    0.5997023498159715,
                    0.34553243048391263,
                    -0.2708298674538042,
                    0,
                    0.1860075629647401,
                    -0.037703249837783157,
                    0.8609577587992641,
                    0.15059552388459913,
                    0,
                    -0.14497417640467167,
                    0.24113635128153335,
                    -0.07441037908422492,
                    0.44972182064877153,
                    0,
                    -0.029655197167024642,
                    0,
                    0,
                    0,
                    1,
                    0
                ], e);
            }
            vintage(e) {
                this._loadMatrix([
                    0.6279345635605994,
                    0.3202183420819367,
                    -0.03965408211312453,
                    0,
                    0.037848179746251466,
                    0.02578397704808868,
                    0.6441188644374771,
                    0.03259127616149294,
                    0,
                    0.029265996770472907,
                    0.0466055556782719,
                    -0.0851232987247891,
                    0.5241648018700465,
                    0,
                    0.020232119953863904,
                    0,
                    0,
                    0,
                    1,
                    0
                ], e);
            }
            colorTone(e, t, r, n, i) {
                if (!e) {
                    e = 0.2;
                }
                if (!t) {
                    t = 0.15;
                }
                if (!r) {
                    r = 16770432;
                }
                if (!n) {
                    n = 3375104;
                }
                let shared = eN.Color.shared;
                let [o, s, l] = shared.setValue(r).toArray();
                let [u, c, d] = shared.setValue(n).toArray();
                let h = [
                    0.3,
                    0.59,
                    0.11,
                    0,
                    0,
                    o,
                    s,
                    l,
                    e,
                    0,
                    u,
                    c,
                    d,
                    t,
                    0,
                    o - u,
                    s - c,
                    l - d,
                    0,
                    0
                ];
                this._loadMatrix(h, i);
            }
            night(e, t) {
                if (!e) {
                    e = 0.1;
                }
                let r = [
                    -2 * e,
                    -e,
                    0,
                    0,
                    0,
                    -e,
                    0,
                    e,
                    0,
                    0,
                    0,
                    e,
                    2 * e,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ];
                this._loadMatrix(r, t);
            }
            predator(e, t) {
                this._loadMatrix([
                    11.224130630493164 * e,
                    -4.794486999511719 * e,
                    -2.8746118545532227 * e,
                    0 * e,
                    0.40342438220977783 * e,
                    -3.6330697536468506 * e,
                    9.193157196044922 * e,
                    -2.951810836791992 * e,
                    0 * e,
                    -1.316135048866272 * e,
                    -3.2184197902679443 * e,
                    -4.2375030517578125 * e,
                    7.476448059082031 * e,
                    0 * e,
                    0.8044459223747253 * e,
                    0,
                    0,
                    0,
                    1,
                    0
                ], t);
            }
            lsd(e) {
                this._loadMatrix([
                    2,
                    -0.4,
                    0.5,
                    0,
                    0,
                    -0.5,
                    2,
                    -0.4,
                    0,
                    0,
                    -0.4,
                    -0.5,
                    3,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ], e);
            }
            reset() {
                this._loadMatrix([
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0
                ], false);
            }
            get matrix() {
                return this.resources.colorMatrixUniforms.uniforms.uColorMatrix;
            }
            set matrix(e) {
                this.resources.colorMatrixUniforms.uniforms.uColorMatrix = e;
            }
            get alpha() {
                return this.resources.colorMatrixUniforms.uniforms.uAlpha;
            }
            set alpha(e) {
                this.resources.colorMatrixUniforms.uniforms.uAlpha = e;
            }
        }
        var rR = e.i(465816);
        var rE = w;
        class rA extends rE.Filter {
            constructor(...e){
                let sprite_1 = e[0];
                if (sprite_1 instanceof rR.Sprite) {
                    if (e[1]) {
                        rd.deprecation(rd.v8_0_0, "DisplacementFilter now uses options object instead of params. {sprite, scale}");
                    }
                    sprite_1 = {
                        sprite: sprite_1,
                        scale: e[1]
                    };
                }
                const { sprite, scale, ...rest } = sprite_1;
                let a = scale ?? 20;
                if (typeof a === "number") {
                    a = new tN.Point(a, a);
                }
                const filterUniforms = new C.UniformGroup({
                    uFilterMatrix: {
                        value: new tC.Matrix,
                        type: "mat3x3<f32>"
                    },
                    uScale: {
                        value: a,
                        type: "vec2<f32>"
                    },
                    uRotation: {
                        value: new Float32Array([
                            0,
                            0,
                            0,
                            0
                        ]),
                        type: "mat2x2<f32>"
                    }
                });
                const s = A.GlProgram.from({
                    vertex: t5,
                    fragment: t6,
                    name: "displacement-filter"
                });
                const l = M.GpuProgram.from({
                    vertex: {
                        source: t7,
                        entryPoint: "mainVertex"
                    },
                    fragment: {
                        source: t7,
                        entryPoint: "mainFragment"
                    }
                });
                const uMapTexture = sprite.texture.source;
                super({
                    ...rest,
                    gpuProgram: l,
                    glProgram: s,
                    resources: {
                        filterUniforms,
                        uMapTexture,
                        uMapSampler: uMapTexture.style
                    }
                });
                this._sprite = sprite_1.sprite;
                this._sprite.renderable = false;
            }
            apply(e, t, r, n) {
                let uniforms = this.resources.filterUniforms.uniforms;
                e.calculateSpriteMatrix(uniforms.uFilterMatrix, this._sprite);
                let worldTransform = this._sprite.worldTransform;
                let o = Math.sqrt(worldTransform.a * worldTransform.a + worldTransform.b * worldTransform.b);
                let s = Math.sqrt(worldTransform.c * worldTransform.c + worldTransform.d * worldTransform.d);
                if (o !== 0 && s !== 0) {
                    uniforms.uRotation[0] = worldTransform.a / o;
                    uniforms.uRotation[1] = worldTransform.b / o;
                    uniforms.uRotation[2] = worldTransform.c / s;
                    uniforms.uRotation[3] = worldTransform.d / s;
                }
                this.resources.uMapTexture = this._sprite.texture.source;
                e.applyFilter(this, t, r, n);
            }
            get scale() {
                return this.resources.filterUniforms.uniforms.uScale;
            }
        }
        var rM = w;
        let rC = class e extends rM.Filter {
            constructor(t = {}){
                t = {
                    ...e.defaultOptions,
                    ...t
                };
                const r = M.GpuProgram.from({
                    vertex: {
                        source: re,
                        entryPoint: "mainVertex"
                    },
                    fragment: {
                        source: re,
                        entryPoint: "mainFragment"
                    }
                });
                const n = A.GlProgram.from({
                    vertex: t4.default,
                    fragment: t9,
                    name: "noise-filter"
                });
                const { noise, seed, ...rest } = t;
                super({
                    ...rest,
                    gpuProgram: r,
                    glProgram: n,
                    resources: {
                        noiseUniforms: new C.UniformGroup({
                            uNoise: {
                                value: 1,
                                type: "f32"
                            },
                            uSeed: {
                                value: 1,
                                type: "f32"
                            }
                        })
                    }
                });
                this.noise = noise;
                this.seed = seed ?? Math.random();
            }
            get noise() {
                return this.resources.noiseUniforms.uniforms.uNoise;
            }
            set noise(e) {
                this.resources.noiseUniforms.uniforms.uNoise = e;
            }
            get seed() {
                return this.resources.noiseUniforms.uniforms.uSeed;
            }
            set seed(e) {
                this.resources.noiseUniforms.uniforms.uSeed = e;
            }
        };
        rC.defaultOptions = {
            noise: 0.5
        };
        var rG = e.i(785667);
        var rw = e.i(893661);
        var rD = e.i(873604);
        var rP = e.i(197380);
        var rO = e.i(758139);
        var rB = e.i(164811);
        var rF = e.i(42515);
        var rI = e.i(356566);
        var rU = e.i(866836);
        var rL = e.i(490249);
        function rN(e, t, r, n, i, a, o, s) {
            let l = o - r;
            let u = s - n;
            let c = i - r;
            let d = a - n;
            let h = e - r;
            let p = t - n;
            let f = l * l + u * u;
            let m = l * c + u * d;
            let g = l * h + u * p;
            let b = c * c + d * d;
            let _ = c * h + d * p;
            let x = 1 / (f * b - m * m);
            let T = (b * g - m * _) * x;
            let y = (f * _ - m * g) * x;
            return T >= 0 && y >= 0 && T + y < 1;
        }
        var rX = e.i(547416);
        var rk = e.i(547417);
        var rH = e.i(163062);
        var rV = e.i(140427);
        var r$ = e.i(275576);
        var rq = e.i(143072);
        var rz = e.i(989031);
        let rW = class e {
            constructor(t){
                this._tick = ()=>{
                    if (!this._destroyed) {
                        this.timeout = setTimeout(this._processQueue, 0);
                    }
                };
                this._processQueue = ()=>{
                    if (this._destroyed) {
                        return;
                    }
                    let { queue } = this;
                    let r = 0;
                    while(queue.length && r < e.uploadsPerFrame){
                        let e = queue.shift();
                        this.uploadQueueItem(e);
                        r++;
                    }
                    if (queue.length) {
                        rz.Ticker.system.addOnce(this._tick, this, rq.UPDATE_PRIORITY.UTILITY);
                    } else {
                        this._resolve();
                    }
                };
                this.renderer = t;
                this.queue = [];
                this.resolves = [];
            }
            getQueue() {
                return [
                    ...this.queue
                ];
            }
            add(e) {
                for (let t of Array.isArray(e) ? e : [
                    e
                ]){
                    if (t instanceof r$.Container) {
                        this._addContainer(t);
                    } else {
                        this.resolveQueueItem(t, this.queue);
                    }
                }
                return this;
            }
            _addContainer(e) {
                for (let t of (this.resolveQueueItem(e, this.queue), e.children)){
                    this._addContainer(t);
                }
            }
            upload(e) {
                if (e) {
                    this.add(e);
                }
                return new Promise((resolve)=>{
                    if (this.queue.length) {
                        this.resolves.push(resolve);
                        this.dedupeQueue();
                        rz.Ticker.system.addOnce(this._tick, this, rq.UPDATE_PRIORITY.UTILITY);
                    } else {
                        resolve();
                    }
                });
            }
            dedupeQueue() {
                let e = Object.create(null);
                let t = 0;
                for(let r = 0; r < this.queue.length; r++){
                    let n = this.queue[r];
                    if (!e[n.uid]) {
                        e[n.uid] = true;
                        this.queue[t++] = n;
                    }
                }
                this.queue.length = t;
            }
            destroy() {
                this._destroyed = true;
                clearTimeout(this.timeout);
            }
            _resolve() {
                let { resolves } = this;
                let t = resolves.slice(0);
                for (let r of (resolves.length = 0, t)){
                    r();
                }
            }
        };
        rW.uploadsPerFrame = 4;
        let rY = rW;
        var rj = e.i(86958);
        var rK = e.i(558001);
        var rQ = e.i(719885);
        var rZ = e.i(688761);
        var rJ = tX;
        var r0 = e.i(55585);
        var r3 = e.i(294212);
        var r2 = rQ;
        let r1 = class e extends r2.Geometry {
            constructor(...t){
                let positions = t[0] ?? {};
                if (positions instanceof Float32Array) {
                    rd.deprecation(rd.v8_0_0, "use new MeshGeometry({ positions, uvs, indices }) instead");
                    positions = {
                        positions,
                        uvs: t[1],
                        indices: t[2]
                    };
                }
                const n = (positions = {
                    ...e.defaultOptions,
                    ...positions
                }).positions || new Float32Array([
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    1
                ]);
                let i = positions.uvs;
                if (!i) {
                    i = new Float32Array(positions.positions ? n.length : [
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        1
                    ]);
                }
                const data = positions.indices || new Uint32Array([
                    0,
                    1,
                    2,
                    0,
                    2,
                    3
                ]);
                const shrinkToFit = positions.shrinkBuffersToFit;
                const buffer = new r0.Buffer({
                    data: n,
                    label: "attribute-mesh-positions",
                    shrinkToFit,
                    usage: r3.BufferUsage.VERTEX | r3.BufferUsage.COPY_DST
                });
                super({
                    attributes: {
                        aPosition: {
                            buffer,
                            format: "float32x2",
                            stride: 8,
                            offset: 0
                        },
                        aUV: {
                            buffer: new r0.Buffer({
                                data: i,
                                label: "attribute-mesh-uvs",
                                shrinkToFit,
                                usage: r3.BufferUsage.VERTEX | r3.BufferUsage.COPY_DST
                            }),
                            format: "float32x2",
                            stride: 8,
                            offset: 0
                        }
                    },
                    indexBuffer: new r0.Buffer({
                        data,
                        label: "index-mesh-buffer",
                        shrinkToFit,
                        usage: r3.BufferUsage.INDEX | r3.BufferUsage.COPY_DST
                    }),
                    topology: positions.topology
                });
                this.batchMode = "auto";
            }
            get positions() {
                return this.attributes.aPosition.buffer.data;
            }
            set positions(e) {
                this.attributes.aPosition.buffer.data = e;
            }
            get uvs() {
                return this.attributes.aUV.buffer.data;
            }
            set uvs(e) {
                this.attributes.aUV.buffer.data = e;
            }
            get indices() {
                return this.indexBuffer.data;
            }
            set indices(e) {
                this.indexBuffer.data = e;
            }
        };
        r1.defaultOptions = {
            topology: "triangle-list",
            shrinkBuffersToFit: false
        };
        let r8 = r1;
        var r4 = e.i(175444);
        var r6 = e.i(443122);
        var r5 = e.i(149034);
        class r7 {
            constructor(){
                this.batcherName = "default";
                this.packAsQuad = false;
                this.indexOffset = 0;
                this.attributeOffset = 0;
                this.roundPixels = 0;
                this._batcher = null;
                this._batch = null;
                this._textureMatrixUpdateId = -1;
                this._uvUpdateId = -1;
            }
            get blendMode() {
                return this.renderable.groupBlendMode;
            }
            get topology() {
                return this._topology || this.geometry.topology;
            }
            set topology(e) {
                this._topology = e;
            }
            reset() {
                this.renderable = null;
                this.texture = null;
                this._batcher = null;
                this._batch = null;
                this.geometry = null;
                this._uvUpdateId = -1;
                this._textureMatrixUpdateId = -1;
            }
            setTexture(e) {
                if (this.texture !== e) {
                    this.texture = e;
                    this._textureMatrixUpdateId = -1;
                }
            }
            get uvs() {
                let e = this.geometry.getBuffer("aUV");
                let e_data = e.data;
                let r = e_data;
                let textureMatrix = this.texture.textureMatrix;
                if (!textureMatrix.isSimple) {
                    r = this._transformedUvs;
                    if (this._textureMatrixUpdateId !== textureMatrix._updateID || this._uvUpdateId !== e._updateID) {
                        if (!r || r.length < e_data.length) {
                            r = this._transformedUvs = new Float32Array(e_data.length);
                        }
                        this._textureMatrixUpdateId = textureMatrix._updateID;
                        this._uvUpdateId = e._updateID;
                        textureMatrix.multiplyUvs(e_data, r);
                    }
                }
                return r;
            }
            get positions() {
                return this.geometry.positions;
            }
            get indices() {
                return this.geometry.indices;
            }
            get color() {
                return this.renderable.groupColorAlpha;
            }
            get groupTransform() {
                return this.renderable.groupTransform;
            }
            get attributeSize() {
                return this.geometry.positions.length / 2;
            }
            get indexSize() {
                return this.geometry.indices.length;
            }
        }
        class r9 {
            destroy() {}
        }
        class ne {
            constructor(e, t){
                this.localUniforms = new C.UniformGroup({
                    uTransformMatrix: {
                        value: new tC.Matrix,
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
                this.localUniformsBindGroup = new r4.BindGroup({
                    0: this.localUniforms
                });
                this.renderer = e;
                this._adaptor = t;
                this._adaptor.init();
            }
            validateRenderable(e) {
                let t = this._getMeshData(e);
                let t_batched = t.batched;
                let e_batched = e.batched;
                t.batched = e_batched;
                if (t_batched !== e_batched) {
                    return true;
                }
                if (e_batched) {
                    let r = e._geometry;
                    if (r.indices.length !== t.indexSize || r.positions.length !== t.vertexSize) {
                        t.indexSize = r.indices.length;
                        t.vertexSize = r.positions.length;
                        return true;
                    }
                    let n = this._getBatchableMesh(e);
                    if (n.texture.uid !== e._texture.uid) {
                        n._textureMatrixUpdateId = -1;
                    }
                    return !n._batcher.checkAndUpdateTexture(n, e._texture);
                }
                return false;
            }
            addRenderable(e, t) {
                let batch = this.renderer.renderPipes.batch;
                let n = this._getMeshData(e);
                if (e.didViewUpdate) {
                    n.indexSize = e._geometry.indices?.length;
                    n.vertexSize = e._geometry.positions?.length;
                }
                if (n.batched) {
                    let n = this._getBatchableMesh(e);
                    n.setTexture(e._texture);
                    n.geometry = e._geometry;
                    batch.addToBatch(n, t);
                } else {
                    batch.break(t);
                    t.add(e);
                }
            }
            updateRenderable(e) {
                if (e.batched) {
                    let t = this._getBatchableMesh(e);
                    t.setTexture(e._texture);
                    t.geometry = e._geometry;
                    t._batcher.updateElement(t);
                }
            }
            execute(e) {
                if (!e.isRenderable) {
                    return;
                }
                e.state.blendMode = r6.getAdjustedBlendModeBlend(e.groupBlendMode, e.texture._source);
                let localUniforms = this.localUniforms;
                localUniforms.uniforms.uTransformMatrix = e.groupTransform;
                localUniforms.uniforms.uRound = this.renderer._roundPixels | e._roundPixels;
                localUniforms.update();
                r5.color32BitToUniform(e.groupColorAlpha, localUniforms.uniforms.uColor, 0);
                this._adaptor.execute(this, e);
            }
            _getMeshData(e) {
                let t;
                let r;
                if (!(t = e._gpuData)[r = this.renderer.uid]) {
                    t[r] = new r9;
                }
                return e._gpuData[this.renderer.uid].meshData || this._initMeshData(e);
            }
            _initMeshData(e) {
                e._gpuData[this.renderer.uid].meshData = {
                    batched: e.batched,
                    indexSize: 0,
                    vertexSize: 0
                };
                return e._gpuData[this.renderer.uid].meshData;
            }
            _getBatchableMesh(e) {
                let t;
                let r;
                if (!(t = e._gpuData)[r = this.renderer.uid]) {
                    t[r] = new r9;
                }
                return e._gpuData[this.renderer.uid].batchableMesh || this._initBatchableMesh(e);
            }
            _initBatchableMesh(e) {
                let t = new r7;
                t.renderable = e;
                t.setTexture(e._texture);
                t.transform = e.groupTransform;
                t.roundPixels = this.renderer._roundPixels | e._roundPixels;
                e._gpuData[this.renderer.uid].batchableMesh = t;
                return t;
            }
            destroy() {
                this.localUniforms = null;
                this.localUniformsBindGroup = null;
                this._adaptor.destroy();
                this._adaptor = null;
                this.renderer = null;
            }
        }
        ne.extension = {
            type: [
                v.ExtensionType.WebGLPipes,
                v.ExtensionType.WebGPUPipes
            ],
            name: "mesh"
        };
        v.extensions.add(ne);
        class nt extends rJ.ViewContainer {
            constructor(...e){
                let t = e[0];
                if (t instanceof rQ.Geometry) {
                    rd.deprecation(rd.v8_0_0, "Mesh: use new Mesh({ geometry, shader }) instead");
                    t = {
                        geometry: t,
                        shader: e[1]
                    };
                    if (e[3]) {
                        rd.deprecation(rd.v8_0_0, "Mesh: drawMode argument has been removed, use geometry.topology instead");
                        t.geometry.topology = e[3];
                    }
                }
                const { geometry, shader, texture, roundPixels, state, ...rest } = t;
                super({
                    label: "Mesh",
                    ...rest
                });
                this.renderPipeId = "mesh";
                this._shader = null;
                this.allowChildren = false;
                this.shader = shader ?? null;
                this.texture = texture ?? shader?.texture ?? G.Texture.WHITE;
                this.state = state ?? rZ.State.for2d();
                this._geometry = geometry;
                this._geometry.on("update", this.onViewUpdate, this);
                this.roundPixels = roundPixels ?? false;
            }
            get material() {
                rd.deprecation(rd.v8_0_0, "mesh.material property has been removed, use mesh.shader instead");
                return this._shader;
            }
            set shader(e) {
                if (this._shader !== e) {
                    this._shader = e;
                    this.onViewUpdate();
                }
            }
            get shader() {
                return this._shader;
            }
            set geometry(e) {
                if (this._geometry !== e) {
                    this._geometry?.off("update", this.onViewUpdate, this);
                    e.on("update", this.onViewUpdate, this);
                    this._geometry = e;
                    this.onViewUpdate();
                }
            }
            get geometry() {
                return this._geometry;
            }
            set texture(e) {
                if (!e) {
                    e = G.Texture.EMPTY;
                }
                let _texture = this._texture;
                if (_texture !== e) {
                    if (_texture && _texture.dynamic) {
                        _texture.off("update", this.onViewUpdate, this);
                    }
                    if (e.dynamic) {
                        e.on("update", this.onViewUpdate, this);
                    }
                    if (this.shader) {
                        this.shader.texture = e;
                    }
                    this._texture = e;
                    this.onViewUpdate();
                }
            }
            get texture() {
                return this._texture;
            }
            get batched() {
                return !this._shader && (12 & this.state.data) == 0 && this._geometry instanceof r8 && (this._geometry.batchMode === "auto" ? this._geometry.positions.length / 2 <= 100 : this._geometry.batchMode === "batch");
            }
            get bounds() {
                return this._geometry.bounds;
            }
            updateBounds() {
                this._bounds = this._geometry.bounds;
            }
            containsPoint(e) {
                let { x, y } = e;
                if (!this.bounds.containsPoint(x, y)) {
                    return false;
                }
                let data = this.geometry.getBuffer("aPosition").data;
                let i = this.geometry.topology === "triangle-strip" ? 3 : 1;
                if (this.geometry.getIndex()) {
                    let e = this.geometry.getIndex().data;
                    let a = e.length;
                    for(let o = 0; o + 2 < a; o += i){
                        let i = 2 * e[o];
                        let a = 2 * e[o + 1];
                        let s = 2 * e[o + 2];
                        if (rN(x, y, data[i], data[i + 1], data[a], data[a + 1], data[s], data[s + 1])) {
                            return true;
                        }
                    }
                } else {
                    let e = data.length / 2;
                    for(let a = 0; a + 2 < e; a += i){
                        let e = 2 * a;
                        let i = (a + 1) * 2;
                        let o = (a + 2) * 2;
                        if (rN(x, y, data[e], data[e + 1], data[i], data[i + 1], data[o], data[o + 1])) {
                            return true;
                        }
                    }
                }
                return false;
            }
            destroy(e) {
                super.destroy(e);
                if (typeof e === "boolean" ? e : e?.texture) {
                    let t = typeof e === "boolean" ? e : e?.textureSource;
                    this._texture.destroy(t);
                }
                this._geometry?.off("update", this.onViewUpdate, this);
                this._texture = null;
                this._geometry = null;
                this._shader = null;
            }
        }
        var nr = e.i(96207);
        class nn {
            constructor({ matrix, observer } = {}){
                this.dirty = true;
                this._matrix = matrix ?? new tC.Matrix;
                this.observer = observer;
                this.position = new rL.ObservablePoint(this, 0, 0);
                this.scale = new rL.ObservablePoint(this, 1, 1);
                this.pivot = new rL.ObservablePoint(this, 0, 0);
                this.skew = new rL.ObservablePoint(this, 0, 0);
                this._rotation = 0;
                this._cx = 1;
                this._sx = 0;
                this._cy = 0;
                this._sy = 1;
            }
            get matrix() {
                let _matrix = this._matrix;
                if (this.dirty) {
                    _matrix.a = this._cx * this.scale.x;
                    _matrix.b = this._sx * this.scale.x;
                    _matrix.c = this._cy * this.scale.y;
                    _matrix.d = this._sy * this.scale.y;
                    _matrix.tx = this.position.x - (this.pivot.x * _matrix.a + this.pivot.y * _matrix.c);
                    _matrix.ty = this.position.y - (this.pivot.x * _matrix.b + this.pivot.y * _matrix.d);
                    this.dirty = false;
                }
                return _matrix;
            }
            _onUpdate(e) {
                this.dirty = true;
                if (e === this.skew) {
                    this.updateSkew();
                }
                this.observer?._onUpdate(this);
            }
            updateSkew() {
                this._cx = Math.cos(this._rotation + this.skew.y);
                this._sx = Math.sin(this._rotation + this.skew.y);
                this._cy = -Math.sin(this._rotation - this.skew.x);
                this._sy = Math.cos(this._rotation - this.skew.x);
                this.dirty = true;
            }
            toString() {
                return `[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
            }
            setFromMatrix(e) {
                e.decompose(this);
                this.dirty = true;
            }
            get rotation() {
                return this._rotation;
            }
            set rotation(e) {
                if (this._rotation !== e) {
                    this._rotation = e;
                    this._onUpdate(this.skew);
                }
            }
        }
        var ni = tX;
        var na = e.i(449752);
        var no = e.i(997125);
        var ns = e.i(414205);
        let nl = new tC.Matrix;
        let nu = new tC.Matrix;
        let nc = [
            new tN.Point,
            new tN.Point,
            new tN.Point,
            new tN.Point
        ];
        class nd {
            constructor(e){
                this._renderer = e;
            }
            validateRenderable(e) {
                return false;
            }
            addRenderable(e, t) {
                this._renderer.renderPipes.batch.break(t);
                t.add(e);
            }
            updateRenderable(e) {}
            execute(e) {
                let _renderer = this._renderer;
                let t_canvasContext = _renderer.canvasContext;
                let r_activeContext = t_canvasContext.activeContext;
                r_activeContext.save();
                t_canvasContext.setBlendMode(e.groupBlendMode);
                let i = _renderer.globalUniforms.globalUniformData?.worldColor ?? 4294967295;
                let e_groupColorAlpha = e.groupColorAlpha;
                let o = (i >>> 24 & 255) / 255 * ((e_groupColorAlpha >>> 24 & 255) / 255) * (_renderer.filter?.alphaMultiplier ?? 1);
                if (o <= 0) {
                    return void r_activeContext.restore();
                }
                r_activeContext.globalAlpha = o;
                let s = no.bgr2rgb(ns.multiplyHexColors(16777215 & e_groupColorAlpha, 16777215 & i));
                let e_texture = e.texture;
                let u = na.canvasUtils.getTintedPattern(e_texture, s);
                let e_width = e.width;
                let e_height = e.height;
                let e_groupTransform = e.groupTransform;
                let p = e_texture.source._resolution ?? e_texture.source.resolution ?? 1;
                nu.copyFrom(e._tileTransform.matrix);
                if (!e.applyAnchorToTexture) {
                    nu.translate(-e.anchor.x * e_width, -e.anchor.y * e_height);
                }
                let f = nu.tx;
                let m = nu.ty;
                nu.scale(1 / p, 1 / p);
                nu.tx = f;
                nu.ty = m;
                nl.identity();
                nl.prepend(nu);
                nl.prepend(e_groupTransform);
                let g = _renderer._roundPixels | e._roundPixels;
                t_canvasContext.setContextTransform(nl, g === 1);
                r_activeContext.fillStyle = u;
                let b = -(e.anchor.x * e_width);
                let _ = -(e.anchor.y * e_height);
                nc[0].set(b, _);
                nc[1].set(b + e_width, _);
                nc[2].set(b + e_width, _ + e_height);
                nc[3].set(b, _ + e_height);
                for(let e = 0; e < 4; e++){
                    nu.applyInverse(nc[e], nc[e]);
                }
                r_activeContext.beginPath();
                r_activeContext.moveTo(nc[0].x, nc[0].y);
                for(let e = 1; e < 4; e++){
                    r_activeContext.lineTo(nc[e].x, nc[e].y);
                }
                r_activeContext.closePath();
                r_activeContext.fill();
                r_activeContext.restore();
            }
            destroy() {
                this._renderer = null;
            }
        }
        nd.extension = {
            type: [
                v.ExtensionType.CanvasPipes
            ],
            name: "tilingSprite"
        };
        var nh = e.i(217055);
        var np = e.i(959684);
        var nf = e.i(418668);
        var nm = e.i(188578);
        var ng = e.i(761149);
        let nb = {
            name: "tiling-bit",
            vertex: {
                header: `
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,
                main: `
            uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

            position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
        `
            },
            fragment: {
                header: `
            struct TilingUniforms {
                uMapCoord:mat3x3<f32>,
                uClampFrame:vec4<f32>,
                uClampOffset:vec2<f32>,
                uTextureTransform:mat3x3<f32>,
                uSizeAnchor:vec4<f32>
            };

            @group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
            @group(2) @binding(1) var uTexture: texture_2d<f32>;
            @group(2) @binding(2) var uSampler: sampler;
        `,
                main: `

            var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
            coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
            var unclamped = coord;
            coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

            var bias = 0.;

            if(unclamped.x == coord.x && unclamped.y == coord.y)
            {
                bias = -32.;
            }

            outColor = textureSampleBias(uTexture, uSampler, coord, bias);
        `
            }
        };
        let n_ = {
            name: "tiling-bit",
            vertex: {
                header: `
            uniform mat3 uTextureTransform;
            uniform vec4 uSizeAnchor;

        `,
                main: `
            uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

            position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
        `
            },
            fragment: {
                header: `
            uniform sampler2D uTexture;
            uniform mat3 uMapCoord;
            uniform vec4 uClampFrame;
            uniform vec2 uClampOffset;
        `,
                main: `

        vec2 coord = vUV + ceil(uClampOffset - vUV);
        coord = (uMapCoord * vec3(coord, 1.0)).xy;
        vec2 unclamped = coord;
        coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

        outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0

        `
            }
        };
        class nx extends ng.Shader {
            constructor(){
                l ??= np.compileHighShaderGpuProgram({
                    name: "tiling-sprite-shader",
                    bits: [
                        nf.localUniformBit,
                        nb,
                        nm.roundPixelsBit
                    ]
                });
                u ??= np.compileHighShaderGlProgram({
                    name: "tiling-sprite-shader",
                    bits: [
                        nf.localUniformBitGl,
                        n_,
                        nm.roundPixelsBitGl
                    ]
                });
                const tilingUniforms = new C.UniformGroup({
                    uMapCoord: {
                        value: new tC.Matrix,
                        type: "mat3x3<f32>"
                    },
                    uClampFrame: {
                        value: new Float32Array([
                            0,
                            0,
                            1,
                            1
                        ]),
                        type: "vec4<f32>"
                    },
                    uClampOffset: {
                        value: new Float32Array([
                            0,
                            0
                        ]),
                        type: "vec2<f32>"
                    },
                    uTextureTransform: {
                        value: new tC.Matrix,
                        type: "mat3x3<f32>"
                    },
                    uSizeAnchor: {
                        value: new Float32Array([
                            100,
                            100,
                            0.5,
                            0.5
                        ]),
                        type: "vec4<f32>"
                    }
                });
                super({
                    glProgram: u,
                    gpuProgram: l,
                    resources: {
                        localUniforms: new C.UniformGroup({
                            uTransformMatrix: {
                                value: new tC.Matrix,
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
                        }),
                        tilingUniforms,
                        uTexture: G.Texture.EMPTY.source,
                        uSampler: G.Texture.EMPTY.source.style
                    }
                });
            }
            updateUniforms(e, t, r, n, i, a) {
                let tilingUniforms = this.resources.tilingUniforms;
                let a_width = a.width;
                let a_height = a.height;
                let a_textureMatrix = a.textureMatrix;
                let uTextureTransform = tilingUniforms.uniforms.uTextureTransform;
                uTextureTransform.set(r.a * a_width / e, r.b * a_width / t, r.c * a_height / e, r.d * a_height / t, r.tx / e, r.ty / t);
                uTextureTransform.invert();
                tilingUniforms.uniforms.uMapCoord = a_textureMatrix.mapCoord;
                tilingUniforms.uniforms.uClampFrame = a_textureMatrix.uClampFrame;
                tilingUniforms.uniforms.uClampOffset = a_textureMatrix.uClampOffset;
                tilingUniforms.uniforms.uTextureTransform = uTextureTransform;
                tilingUniforms.uniforms.uSizeAnchor[0] = e;
                tilingUniforms.uniforms.uSizeAnchor[1] = t;
                tilingUniforms.uniforms.uSizeAnchor[2] = n;
                tilingUniforms.uniforms.uSizeAnchor[3] = i;
                if (a) {
                    this.resources.uTexture = a.source;
                    this.resources.uSampler = a.source.style;
                }
            }
        }
        class nT extends r8 {
            constructor(){
                super({
                    positions: new Float32Array([
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        1
                    ]),
                    uvs: new Float32Array([
                        0,
                        0,
                        1,
                        0,
                        1,
                        1,
                        0,
                        1
                    ]),
                    indices: new Uint32Array([
                        0,
                        1,
                        2,
                        0,
                        2,
                        3
                    ])
                });
            }
        }
        function ny(e, t) {
            let r = e.anchor.x;
            let n = e.anchor.y;
            t[0] = -r * e.width;
            t[1] = -n * e.height;
            t[2] = (1 - r) * e.width;
            t[3] = -n * e.height;
            t[4] = (1 - r) * e.width;
            t[5] = (1 - n) * e.height;
            t[6] = -r * e.width;
            t[7] = (1 - n) * e.height;
        }
        function nS(e, t, r, n) {
            let i = 0;
            let a = e.length / (t || 2);
            let o = n.a;
            let s = n.b;
            let l = n.c;
            let u = n.d;
            let c = n.tx;
            let d = n.ty;
            for(r *= t; i < a;){
                let n = e[r];
                let a = e[r + 1];
                e[r] = o * n + l * a + c;
                e[r + 1] = s * n + u * a + d;
                r += t;
                i++;
            }
        }
        function nv(e, t) {
            let e_texture = e.texture;
            let width = e_texture.frame.width;
            let height = e_texture.frame.height;
            let a = 0;
            let o = 0;
            if (e.applyAnchorToTexture) {
                a = e.anchor.x;
                o = e.anchor.y;
            }
            t[0] = t[6] = -a;
            t[2] = t[4] = 1 - a;
            t[1] = t[3] = -o;
            t[5] = t[7] = 1 - o;
            let matrix = e._tileTransform.matrix;
            let shared = tC.Matrix.shared;
            shared.set(matrix.a * width / e.width, matrix.b * width / e.height, matrix.c * height / e.width, matrix.d * height / e.height, matrix.tx / e.width, matrix.ty / e.height);
            shared.invert();
            nS(t, 2, 0, shared);
        }
        let nR = new nT;
        class nE {
            constructor(){
                this.canBatch = true;
                this.geometry = new r8({
                    indices: nR.indices.slice(),
                    positions: nR.positions.slice(),
                    uvs: nR.uvs.slice()
                });
            }
            destroy() {
                this.geometry.destroy();
                this.shader?.destroy();
            }
        }
        class nA {
            constructor(e){
                this._state = rZ.State.default2d;
                this._renderer = e;
                this._managedTilingSprites = new nh.GCManagedHash({
                    renderer: e,
                    type: "renderable",
                    name: "tilingSprite"
                });
            }
            validateRenderable(e) {
                let t = this._getTilingSpriteData(e);
                let t_canBatch = t.canBatch;
                this._updateCanBatch(e);
                let t_canBatch_1 = t.canBatch;
                if (t_canBatch_1 && t_canBatch_1 === t_canBatch) {
                    let { batchableMesh } = t;
                    return !batchableMesh._batcher.checkAndUpdateTexture(batchableMesh, e.texture);
                }
                return t_canBatch !== t_canBatch_1;
            }
            addRenderable(e, t) {
                let batch = this._renderer.renderPipes.batch;
                this._updateCanBatch(e);
                let n = this._getTilingSpriteData(e);
                let { geometry, canBatch } = n;
                if (canBatch) {
                    if (!n.batchableMesh) {
                        n.batchableMesh = new r7;
                    }
                    let a = n.batchableMesh;
                    if (e.didViewUpdate) {
                        this._updateBatchableMesh(e);
                        a.geometry = geometry;
                        a.renderable = e;
                        a.transform = e.groupTransform;
                        a.setTexture(e._texture);
                    }
                    a.roundPixels = this._renderer._roundPixels | e._roundPixels;
                    batch.addToBatch(a, t);
                } else {
                    batch.break(t);
                    if (!n.shader) {
                        n.shader = new nx;
                    }
                    this.updateRenderable(e);
                    t.add(e);
                }
            }
            execute(e) {
                let _renderer = this._renderer;
                let { shader } = this._getTilingSpriteData(e);
                shader.groups[0] = _renderer.globalUniforms.bindGroup;
                let uniforms = shader.resources.localUniforms.uniforms;
                uniforms.uTransformMatrix = e.groupTransform;
                uniforms.uRound = _renderer._roundPixels | e._roundPixels;
                r5.color32BitToUniform(e.groupColorAlpha, uniforms.uColor, 0);
                this._state.blendMode = r6.getAdjustedBlendModeBlend(e.groupBlendMode, e.texture._source);
                _renderer.encoder.draw({
                    geometry: nR,
                    shader,
                    state: this._state
                });
            }
            updateRenderable(e) {
                let t = this._getTilingSpriteData(e);
                let { canBatch } = t;
                if (canBatch) {
                    let { batchableMesh } = t;
                    if (e.didViewUpdate) {
                        this._updateBatchableMesh(e);
                    }
                    batchableMesh._batcher.updateElement(batchableMesh);
                } else if (e.didViewUpdate) {
                    let { shader } = t;
                    shader.updateUniforms(e.width, e.height, e._tileTransform.matrix, e.anchor.x, e.anchor.y, e.texture);
                }
            }
            _getTilingSpriteData(e) {
                return e._gpuData[this._renderer.uid] || this._initTilingSpriteData(e);
            }
            _initTilingSpriteData(e) {
                let t = new nE;
                t.renderable = e;
                e._gpuData[this._renderer.uid] = t;
                this._managedTilingSprites.add(e);
                return t;
            }
            _updateBatchableMesh(e) {
                let { geometry } = this._getTilingSpriteData(e);
                let style = e.texture.source.style;
                if (style.addressMode !== "repeat") {
                    style.addressMode = "repeat";
                    style.update();
                }
                nv(e, geometry.uvs);
                ny(e, geometry.positions);
            }
            destroy() {
                this._managedTilingSprites.destroy();
                this._renderer = null;
            }
            _updateCanBatch(e) {
                let t = this._getTilingSpriteData(e);
                let e_texture = e.texture;
                let n = true;
                if (this._renderer.type === rc.RendererType.WEBGL) {
                    n = this._renderer.context.supports.nonPowOf2wrapping;
                }
                t.canBatch = e_texture.textureMatrix.isSimple && (n || e_texture.source.isPowerOfTwo);
                return t.canBatch;
            }
        }
        nA.extension = {
            type: [
                v.ExtensionType.WebGLPipes,
                v.ExtensionType.WebGPUPipes
            ],
            name: "tilingSprite"
        };
        v.extensions.add(nd);
        v.extensions.add(nA);
        let nM = class e extends ni.ViewContainer {
            constructor(...t){
                let r = t[0] || {};
                if (r instanceof G.Texture) {
                    r = {
                        texture: r
                    };
                }
                if (t.length > 1) {
                    rd.deprecation(rd.v8_0_0, "use new TilingSprite({ texture, width:100, height:100 }) instead");
                    r.width = t[1];
                    r.height = t[2];
                }
                const { texture, anchor, tilePosition, tileScale, tileRotation, width, height, applyAnchorToTexture, roundPixels, ...rest } = (r = {
                    ...e.defaultOptions,
                    ...r
                }) ?? {};
                super({
                    label: "TilingSprite",
                    ...rest
                });
                this.renderPipeId = "tilingSprite";
                this.batched = true;
                this.allowChildren = false;
                this._anchor = new rL.ObservablePoint({
                    _onUpdate: ()=>{
                        this.onViewUpdate();
                    }
                });
                this.applyAnchorToTexture = applyAnchorToTexture;
                this.texture = texture;
                this._width = width ?? texture.width;
                this._height = height ?? texture.height;
                this._tileTransform = new nn({
                    observer: {
                        _onUpdate: ()=>this.onViewUpdate()
                    }
                });
                if (anchor) {
                    this.anchor = anchor;
                }
                this.tilePosition = tilePosition;
                this.tileScale = tileScale;
                this.tileRotation = tileRotation;
                this.roundPixels = roundPixels ?? false;
            }
            static from(t, r = {}) {
                return new e(typeof t === "string" ? {
                    texture: ec.Cache.get(t),
                    ...r
                } : {
                    texture: t,
                    ...r
                });
            }
            get uvRespectAnchor() {
                rd.deprecation(rd.v8_0_0, "uvRespectAnchor is deprecated, please use applyAnchorToTexture instead");
                return this.applyAnchorToTexture;
            }
            set uvRespectAnchor(e) {
                rd.deprecation(rd.v8_0_0, "uvRespectAnchor is deprecated, please use applyAnchorToTexture instead");
                this.applyAnchorToTexture = e;
            }
            get clampMargin() {
                return this._texture.textureMatrix.clampMargin;
            }
            set clampMargin(e) {
                this._texture.textureMatrix.clampMargin = e;
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
            get tilePosition() {
                return this._tileTransform.position;
            }
            set tilePosition(e) {
                this._tileTransform.position.copyFrom(e);
            }
            get tileScale() {
                return this._tileTransform.scale;
            }
            set tileScale(e) {
                if (typeof e === "number") {
                    this._tileTransform.scale.set(e);
                } else {
                    this._tileTransform.scale.copyFrom(e);
                }
            }
            set tileRotation(e) {
                this._tileTransform.rotation = e;
            }
            get tileRotation() {
                return this._tileTransform.rotation;
            }
            get tileTransform() {
                return this._tileTransform;
            }
            set texture(e) {
                if (!e) {
                    e = G.Texture.EMPTY;
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
                    this.onViewUpdate();
                }
            }
            get texture() {
                return this._texture;
            }
            set width(e) {
                this._width = e;
                this.onViewUpdate();
            }
            get width() {
                return this._width;
            }
            set height(e) {
                this._height = e;
                this.onViewUpdate();
            }
            get height() {
                return this._height;
            }
            setSize(e, t) {
                if (typeof e === "object") {
                    t = e.height ?? e.width;
                    e = e.width;
                }
                this._width = e;
                this._height = t ?? e;
                this.onViewUpdate();
            }
            getSize(e) {
                if (!e) {
                    e = {};
                }
                e.width = this._width;
                e.height = this._height;
                return e;
            }
            updateBounds() {
                let _bounds = this._bounds;
                let _anchor = this._anchor;
                let _width = this._width;
                let _height = this._height;
                _bounds.minX = -_anchor._x * _width;
                _bounds.maxX = _bounds.minX + _width;
                _bounds.minY = -_anchor._y * _height;
                _bounds.maxY = _bounds.minY + _height;
            }
            containsPoint(e) {
                let _width = this._width;
                let _height = this._height;
                let n = -_width * this._anchor._x;
                let i = 0;
                return !!(e.x >= n) && !!(e.x <= n + _width) && (i = -_height * this._anchor._y, !!(e.y >= i) && !!(e.y <= i + _height)) || false;
            }
            destroy(e = false) {
                super.destroy(e);
                this._anchor = null;
                this._tileTransform = null;
                this._bounds = null;
                if (typeof e === "boolean" ? e : e?.texture) {
                    let t = typeof e === "boolean" ? e : e?.textureSource;
                    this._texture.destroy(t);
                }
                this._texture = null;
            }
        };
        nM.defaultOptions = {
            texture: G.Texture.EMPTY,
            anchor: {
                x: 0,
                y: 0
            },
            tilePosition: {
                x: 0,
                y: 0
            },
            tileScale: {
                x: 1,
                y: 1
            },
            tileRotation: 0,
            applyAnchorToTexture: false
        };
        var nC = e.i(602699);
        var nG = tX;
        class nw extends nG.ViewContainer {
            constructor(e, t){
                const { text, resolution, style, anchor, width, height, roundPixels, ...rest } = e;
                super({
                    ...rest
                });
                this.batched = true;
                this._resolution = null;
                this._autoResolution = true;
                this._didTextUpdate = true;
                this._styleClass = t;
                this.text = text ?? "";
                this.style = style;
                this.resolution = resolution ?? null;
                this.allowChildren = false;
                this._anchor = new rL.ObservablePoint({
                    _onUpdate: ()=>{
                        this.onViewUpdate();
                    }
                });
                if (anchor) {
                    this.anchor = anchor;
                }
                this.roundPixels = roundPixels ?? false;
                if (width !== undefined) {
                    this.width = width;
                }
                if (height !== undefined) {
                    this.height = height;
                }
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
            set text(e) {
                e = e.toString();
                if (this._text !== e) {
                    this._text = e;
                    this.onViewUpdate();
                }
            }
            get text() {
                return this._text;
            }
            set resolution(e) {
                this._autoResolution = e === null;
                this._resolution = e;
                this.onViewUpdate();
            }
            get resolution() {
                return this._resolution;
            }
            get style() {
                return this._style;
            }
            set style(e) {
                if (!e) {
                    e = {};
                }
                this._style?.off("update", this.onViewUpdate, this);
                if (e instanceof this._styleClass) {
                    this._style = e;
                } else {
                    this._style = new this._styleClass(e);
                }
                this._style.on("update", this.onViewUpdate, this);
                this.onViewUpdate();
            }
            get width() {
                return Math.abs(this.scale.x) * this.bounds.width;
            }
            set width(e) {
                this._setWidth(e, this.bounds.width);
            }
            get height() {
                return Math.abs(this.scale.y) * this.bounds.height;
            }
            set height(e) {
                this._setHeight(e, this.bounds.height);
            }
            getSize(e) {
                if (!e) {
                    e = {};
                }
                e.width = Math.abs(this.scale.x) * this.bounds.width;
                e.height = Math.abs(this.scale.y) * this.bounds.height;
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
                    this._setWidth(e, this.bounds.width);
                }
                if (t !== undefined) {
                    this._setHeight(t, this.bounds.height);
                }
            }
            containsPoint(e) {
                let width = this.bounds.width;
                let height = this.bounds.height;
                let n = -width * this.anchor.x;
                let i = 0;
                return !!(e.x >= n) && !!(e.x <= n + width) && (i = -height * this.anchor.y, !!(e.y >= i) && !!(e.y <= i + height)) || false;
            }
            onViewUpdate() {
                if (!this.didViewUpdate) {
                    this._didTextUpdate = true;
                }
                super.onViewUpdate();
            }
            destroy(e = false) {
                super.destroy(e);
                this.owner = null;
                this._bounds = null;
                this._anchor = null;
                if (typeof e === "boolean" ? e : e?.style) {
                    this._style.destroy(e);
                }
                this._style = null;
                this._text = null;
            }
            get styleKey() {
                return `${this._text}:${this._style.styleKey}:${this._resolution}`;
            }
        }
        function nD(e, t) {
            let r = e[0] ?? {};
            if (typeof r === "string" || e[1]) {
                rd.deprecation(rd.v8_0_0, `use new ${t}({ text: "hi!", style }) instead`);
                r = {
                    text: r,
                    style: e[1]
                };
            }
            return r;
        }
        var nP = e.i(963345);
        let nO = null;
        let nB = null;
        function nF(data, t, r) {
            for(let n = 0, i = 4 * r * t; n < t; ++n, i += 4){
                if (data[i + 3] !== 0) {
                    return false;
                }
            }
            return true;
        }
        function nI(data, t, r, n, i) {
            let a = 4 * t;
            for(let t = n, o = n * a + 4 * r; t <= i; ++t, o += a){
                if (data[o + 3] !== 0) {
                    return false;
                }
            }
            return true;
        }
        function nU(...e) {
            let t = e[0];
            if (!t.canvas) {
                t = {
                    canvas: e[0],
                    resolution: e[1]
                };
            }
            let { canvas } = t;
            let n = Math.min(t.resolution ?? 1, 1);
            let i = t.width ?? canvas.width;
            let a = t.height ?? canvas.height;
            let t_output = t.output;
            if (!nO) {
                nB = (nO = eq.DOMAdapter.get().createCanvas(256, 128)).getContext("2d", {
                    willReadFrequently: true
                });
                nB.globalCompositeOperation = "copy";
                nB.globalAlpha = 1;
            }
            if (nO.width < i || nO.height < a) {
                nO.width = rI.nextPow2(i);
                nO.height = rI.nextPow2(a);
            }
            if (!nB) {
                throw TypeError("Failed to get canvas 2D context");
            }
            nB.drawImage(canvas, 0, 0, i, a, 0, 0, i * n, a * n);
            let data = nB.getImageData(0, 0, i, a).data;
            let l = 0;
            let u = 0;
            let c = i - 1;
            let d = a - 1;
            while(u < a && nF(data, i, u)){
                ++u;
            }
            if (u === a) {
                return tG.Rectangle.EMPTY;
            }
            while(nF(data, i, d)){
                --d;
            }
            while(nI(data, i, l, u, d)){
                ++l;
            }
            while(nI(data, i, c, u, d)){
                --c;
            }
            ++c;
            ++d;
            nB.globalCompositeOperation = "source-over";
            nB.strokeRect(l, u, c - l, d - u);
            nB.globalCompositeOperation = "copy";
            t_output ??= new tG.Rectangle;
            t_output.set(l / n, u / n, (c - l) / n, (d - u) / n);
            return t_output;
        }
        var nL = e.i(556700);
        var nN = e.i(974543);
        var nX = e.i(110477);
        let output = new tG.Rectangle;
        function nH(e) {
            let t = 0;
            for(let r = 0; r < e.length; r++){
                e.charCodeAt(r) === 32 && t++;
            }
            return t;
        }
        let nV = new class {
            getCanvasAndContext(e) {
                let { text, style, resolution = 1 } = e;
                let i = style._getFinalPadding();
                let a = nL.CanvasTextMetrics.measureText(text || " ", style);
                let o = Math.ceil(Math.ceil(Math.max(1, a.width) + 2 * i) * resolution);
                let s = Math.ceil(Math.ceil(Math.max(1, a.height) + 2 * i) * resolution);
                let canvasAndContext = nP.CanvasPool.getOptimalCanvasAndContext(o, s);
                this._renderTextToCanvas(style, i, resolution, canvasAndContext, a);
                let frame = style.trim ? nU({
                    canvas: canvasAndContext.canvas,
                    width: o,
                    height: s,
                    resolution: 1,
                    output
                }) : output.set(0, 0, o, s);
                return {
                    canvasAndContext,
                    frame
                };
            }
            returnCanvasAndContext(e) {
                nP.CanvasPool.returnCanvasAndContext(e);
            }
            _renderTextToCanvas(e, t, r, n, i) {
                let a;
                let o;
                if (i.runsByLine && i.runsByLine.length > 0) {
                    return void this._renderTaggedTextToCanvas(i, e, t, r, n);
                }
                let { canvas, context } = n;
                let u = nN.fontStringFromTextStyle(e);
                let i_lines = i.lines;
                let i_lineHeight = i.lineHeight;
                let i_lineWidths = i.lineWidths;
                let i_maxLineWidth = i.maxLineWidth;
                let i_fontProperties = i.fontProperties;
                let canvas_height = canvas.height;
                context.resetTransform();
                context.scale(r, r);
                context.textBaseline = e.textBaseline;
                if (e._stroke?.width) {
                    let t = e._stroke;
                    context.lineWidth = t.width;
                    context.miterLimit = t.miterLimit;
                    context.lineJoin = t.join;
                    context.lineCap = t.cap;
                }
                context.font = u;
                let g = e.dropShadow ? 2 : 1;
                let b = (e._stroke?.width ?? 0) / 2;
                let _ = (i_lineHeight - i_fontProperties.fontSize) / 2;
                if (i_lineHeight - i_fontProperties.fontSize < 0) {
                    _ = 0;
                }
                for(let s = 0; s < g; ++s){
                    let u = e.dropShadow && s === 0;
                    let g = u ? Math.ceil(Math.max(1, canvas_height) + 2 * t) : 0;
                    let x = g * r;
                    if (u) {
                        this._setupDropShadow(context, e, r, x);
                    } else {
                        let r = e._gradientBounds;
                        let n = e._gradientOffset;
                        if (r) {
                            let a = {
                                width: r.width,
                                height: r.height,
                                lineHeight: r.height,
                                lines: i.lines
                            };
                            this._setFillAndStrokeStyles(context, e, a, t, b, n?.x ?? 0, n?.y ?? 0);
                        } else {
                            if (n) {
                                this._setFillAndStrokeStyles(context, e, i, t, b, n.x, n.y);
                            } else {
                                this._setFillAndStrokeStyles(context, e, i, t, b);
                            }
                        }
                        context.shadowColor = "rgba(0,0,0,0)";
                    }
                    for(let r = 0; r < i_lines.length; r++){
                        a = b;
                        o = b + r * i_lineHeight + i_fontProperties.ascent + _;
                        a += this._getAlignmentOffset(i_lineWidths[r], i_maxLineWidth, e.align);
                        let i = 0;
                        if (e.align === "justify" && e.wordWrap && r < i_lines.length - 1) {
                            let e = nH(i_lines[r]);
                            if (e > 0) {
                                i = (i_maxLineWidth - i_lineWidths[r]) / e;
                            }
                        }
                        if (e._stroke?.width) {
                            this._drawLetterSpacing(i_lines[r], e, n, a + t, o + t - g, true, i);
                        }
                        if (e._fill !== undefined) {
                            this._drawLetterSpacing(i_lines[r], e, n, a + t, o + t - g, false, i);
                        }
                    }
                }
            }
            _renderTaggedTextToCanvas(e, t, r, n, i) {
                let { canvas, context } = i;
                let { runsByLine, lineWidths, maxLineWidth, lineAscents, lineHeights, hasDropShadow } = e;
                let canvas_height = canvas.height;
                context.resetTransform();
                context.scale(n, n);
                context.textBaseline = t.textBaseline;
                let f = hasDropShadow ? 2 : 1;
                let m = t._stroke?.width ?? 0;
                for (let e of runsByLine){
                    for (let t of e){
                        let e = t.style._stroke?.width ?? 0;
                        if (e > m) {
                            m = e;
                        }
                    }
                }
                let g = m / 2;
                let b = [];
                for(let e = 0; e < runsByLine.length; e++){
                    let t = runsByLine[e];
                    let r = [];
                    for (let e of t){
                        let font = nN.fontStringFromTextStyle(e.style);
                        context.font = font;
                        r.push({
                            width: nL.CanvasTextMetrics._measureText(e.text, e.style.letterSpacing, context),
                            font
                        });
                    }
                    b.push(r);
                }
                for(let e = 0; e < f; ++e){
                    let a = hasDropShadow && e === 0;
                    let f = a ? Math.ceil(Math.max(1, canvas_height) + 2 * r) : 0;
                    let m = f * n;
                    if (!a) {
                        context.shadowColor = "rgba(0,0,0,0)";
                    }
                    let _ = g;
                    for(let e = 0; e < runsByLine.length; e++){
                        let h = runsByLine[e];
                        let p = lineWidths[e];
                        let x = lineAscents[e];
                        let T = lineHeights[e];
                        let y = b[e];
                        let S = g;
                        S += this._getAlignmentOffset(p, maxLineWidth, t.align);
                        let v = 0;
                        if (t.align === "justify" && t.wordWrap && e < runsByLine.length - 1) {
                            let e = 0;
                            for (let t of h){
                                e += nH(t.text);
                            }
                            if (e > 0) {
                                v = (maxLineWidth - p) / e;
                            }
                        }
                        let R = _ + x;
                        let E = S + r;
                        for(let e = 0; e < h.length; e++){
                            let t = h[e];
                            let { width, font } = y[e];
                            context.font = font;
                            context.textBaseline = t.style.textBaseline;
                            if (t.style._stroke?.width) {
                                let e = t.style._stroke;
                                context.lineWidth = e.width;
                                context.miterLimit = e.miterLimit;
                                context.lineJoin = e.join;
                                context.lineCap = e.cap;
                                if (a) {
                                    if (t.style.dropShadow) {
                                        this._setupDropShadow(context, t.style, n, m);
                                    } else {
                                        E += width + nH(t.text) * v;
                                        continue;
                                    }
                                } else {
                                    let n = nL.CanvasTextMetrics.measureFont(font);
                                    let i = t.style.lineHeight || n.fontSize;
                                    let a = {
                                        width,
                                        height: i,
                                        lineHeight: i,
                                        lines: [
                                            t.text
                                        ]
                                    };
                                    context.strokeStyle = nX.getCanvasFillStyle(e, context, a, 2 * r, E - r, _);
                                }
                                this._drawLetterSpacing(t.text, t.style, i, E, R + r - f, true, v);
                            }
                            E += width + nH(t.text) * v;
                        }
                        E = S + r;
                        for(let e = 0; e < h.length; e++){
                            let t = h[e];
                            let { width, font } = y[e];
                            context.font = font;
                            context.textBaseline = t.style.textBaseline;
                            if (t.style._fill !== undefined) {
                                if (a) {
                                    if (t.style.dropShadow) {
                                        this._setupDropShadow(context, t.style, n, m);
                                    } else {
                                        E += width + nH(t.text) * v;
                                        continue;
                                    }
                                } else {
                                    let e = nL.CanvasTextMetrics.measureFont(font);
                                    let n = t.style.lineHeight || e.fontSize;
                                    let i = {
                                        width,
                                        height: n,
                                        lineHeight: n,
                                        lines: [
                                            t.text
                                        ]
                                    };
                                    context.fillStyle = nX.getCanvasFillStyle(t.style._fill, context, i, 2 * r, E - r, _);
                                }
                                this._drawLetterSpacing(t.text, t.style, i, E, R + r - f, false, v);
                            }
                            E += width + nH(t.text) * v;
                        }
                        _ += T;
                    }
                }
            }
            _setFillAndStrokeStyles(e, t, r, n, i, a = 0, o = 0) {
                e.fillStyle = t._fill ? nX.getCanvasFillStyle(t._fill, e, r, 2 * n, a, o) : null;
                if (t._stroke?.width) {
                    e.strokeStyle = nX.getCanvasFillStyle(t._stroke, e, r, i + 2 * n, a, o);
                }
            }
            _setupDropShadow(e, t, r, n) {
                e.fillStyle = "black";
                e.strokeStyle = "black";
                let t_dropShadow = t.dropShadow;
                let i_color = t_dropShadow.color;
                let i_alpha = t_dropShadow.alpha;
                e.shadowColor = eN.Color.shared.setValue(i_color).setAlpha(i_alpha).toRgbaString();
                let s = t_dropShadow.blur * r;
                let l = t_dropShadow.distance * r;
                e.shadowBlur = s;
                e.shadowOffsetX = Math.cos(t_dropShadow.angle) * l;
                e.shadowOffsetY = Math.sin(t_dropShadow.angle) * l + n;
            }
            _getAlignmentOffset(e, t, r) {
                switch(r){
                    case "right":
                        return t - e;
                    case "center":
                        return (t - e) / 2;
                    default:
                        return 0;
                }
            }
            _drawLetterSpacing(e, t, r, n, i, a = false, o = 0) {
                let { context } = r;
                let t_letterSpacing = t.letterSpacing;
                let u = false;
                nL.CanvasTextMetrics.experimentalLetterSpacingSupported && (nL.CanvasTextMetrics.experimentalLetterSpacing ? (context.letterSpacing = `${t_letterSpacing}px`, context.textLetterSpacing = `${t_letterSpacing}px`, u = true) : (context.letterSpacing = "0px", context.textLetterSpacing = "0px"));
                if ((t_letterSpacing === 0 || u) && o === 0) {
                    return void (a ? context.strokeText(e, n, i) : context.fillText(e, n, i));
                }
                if (o !== 0 && (t_letterSpacing === 0 || u)) {
                    let t = e.split(" ");
                    let r = n;
                    let l = context.measureText(" ").width;
                    for(let e = 0; e < t.length; e++){
                        if (a) {
                            context.strokeText(t[e], r, i);
                        } else {
                            context.fillText(t[e], r, i);
                        }
                        r += context.measureText(t[e]).width + l + o;
                    }
                    return;
                }
                let c = n;
                let d = nL.CanvasTextMetrics.graphemeSegmenter(e);
                let width = context.measureText(e).width;
                let p = 0;
                for(let e = 0; e < d.length; ++e){
                    let t = d[e];
                    if (a) {
                        context.strokeText(t, c, i);
                    } else {
                        context.fillText(t, c, i);
                    }
                    let r = "";
                    for(let t = e + 1; t < d.length; ++t){
                        r += d[t];
                    }
                    c += width - (p = context.measureText(r).width) + t_letterSpacing;
                    if (t === " ") {
                        c += o;
                    }
                    width = p;
                }
            }
        };
        var n$ = e.i(56292);
        var nq = e.i(372370);
        function nz(e, t) {
            let { texture, bounds } = e;
            let i = t._style._getFinalPadding();
            nq.updateQuadBounds(bounds, t._anchor, texture);
            let a = t._anchor._x * i * 2;
            let o = t._anchor._y * i * 2;
            bounds.minX -= i - a;
            bounds.minY -= i - o;
            bounds.maxX -= i - a;
            bounds.maxY -= i - o;
        }
        var nW = e.i(267827);
        class nY extends nW.BatchableSprite {
        }
        class nj {
            constructor(e){
                this._renderer = e;
                e.runners.resolutionChange.add(this);
                this._managedTexts = new nh.GCManagedHash({
                    renderer: e,
                    type: "renderable",
                    onUnload: this.onTextUnload.bind(this),
                    name: "canvasText"
                });
            }
            resolutionChange() {
                for(let e in this._managedTexts.items){
                    let t = this._managedTexts.items[e];
                    if (t?._autoResolution) {
                        t.onViewUpdate();
                    }
                }
            }
            validateRenderable(e) {
                let t = this._getGpuText(e);
                let e_styleKey = e.styleKey;
                return t.currentKey !== e_styleKey || e._didTextUpdate;
            }
            addRenderable(e, t) {
                let r = this._getGpuText(e);
                if (e._didTextUpdate) {
                    let t = e._autoResolution ? this._renderer.resolution : e.resolution;
                    if (r.currentKey !== e.styleKey || e._resolution !== t) {
                        this._updateGpuText(e);
                    }
                    e._didTextUpdate = false;
                    nz(r, e);
                }
                this._renderer.renderPipes.batch.addToBatch(r, t);
            }
            updateRenderable(e) {
                let t = this._getGpuText(e);
                t._batcher.updateElement(t);
            }
            _updateGpuText(e) {
                let t = this._getGpuText(e);
                if (t.texture) {
                    this._renderer.canvasText.decreaseReferenceCount(t.currentKey);
                }
                e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution;
                t.texture = this._renderer.canvasText.getManagedTexture(e);
                t.currentKey = e.styleKey;
            }
            _getGpuText(e) {
                return e._gpuData[this._renderer.uid] || this.initGpuText(e);
            }
            initGpuText(e) {
                let t = new nY;
                t.currentKey = "--";
                t.renderable = e;
                t.transform = e.groupTransform;
                t.bounds = {
                    minX: 0,
                    maxX: 1,
                    minY: 0,
                    maxY: 0
                };
                t.roundPixels = this._renderer._roundPixels | e._roundPixels;
                e._gpuData[this._renderer.uid] = t;
                this._managedTexts.add(e);
                return t;
            }
            onTextUnload(e) {
                let t = e._gpuData[this._renderer.uid];
                if (!t) {
                    return;
                }
                let { canvasText } = this._renderer;
                if (canvasText.getReferenceCount(t.currentKey) > 0) {
                    canvasText.decreaseReferenceCount(t.currentKey);
                } else if (t.texture) {
                    canvasText.returnTexture(t.texture);
                }
            }
            destroy() {
                this._managedTexts.destroy();
                this._renderer = null;
            }
        }
        nj.extension = {
            type: [
                v.ExtensionType.WebGLPipes,
                v.ExtensionType.WebGPUPipes,
                v.ExtensionType.CanvasPipes
            ],
            name: "text"
        };
        var nK = e.i(294780);
        class nQ {
            constructor(e, t){
                this._activeTextures = {};
                this._renderer = e;
                this._retainCanvasContext = t;
            }
            getTexture(e, t, style_1, n) {
                if (typeof e === "string") {
                    rd.deprecation("8.0.0", "CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments");
                    e = {
                        text: e,
                        style: style_1,
                        resolution: t
                    };
                }
                if (!(e.style instanceof n$.TextStyle)) {
                    e.style = new n$.TextStyle(e.style);
                }
                if (!(e.textureStyle instanceof nC.TextureStyle)) {
                    e.textureStyle = new nC.TextureStyle(e.textureStyle);
                }
                if (typeof e.text !== "string") {
                    e.text = e.text.toString();
                }
                let { text, style, textureStyle, autoGenerateMipmaps } = e;
                let l = e.resolution ?? this._renderer.resolution;
                let { frame, canvasAndContext } = nV.getCanvasAndContext({
                    text,
                    style,
                    resolution: l
                });
                let d = nK.getPo2TextureFromSource(canvasAndContext.canvas, frame.width, frame.height, l, autoGenerateMipmaps);
                if (textureStyle) {
                    d.source.style = textureStyle;
                }
                if (style.trim) {
                    frame.pad(style.padding);
                    d.frame.copyFrom(frame);
                    d.frame.scale(1 / l);
                    d.updateUvs();
                }
                if (style.filters) {
                    let e = this._applyFilters(d, style.filters);
                    this.returnTexture(d);
                    nV.returnCanvasAndContext(canvasAndContext);
                    return e;
                }
                this._renderer.texture.initSource(d._source);
                if (!this._retainCanvasContext) {
                    nV.returnCanvasAndContext(canvasAndContext);
                }
                return d;
            }
            returnTexture(e) {
                let e_source = e.source;
                let t_resource = e_source.resource;
                if (this._retainCanvasContext && t_resource?.getContext) {
                    let e = t_resource.getContext("2d");
                    if (e) {
                        nV.returnCanvasAndContext({
                            canvas: t_resource,
                            context: e
                        });
                    }
                }
                e_source.resource = null;
                e_source.uploadMethodId = "unknown";
                e_source.alphaMode = "no-premultiply-alpha";
                ru.TexturePool.returnTexture(e, true);
            }
            renderTextToCanvas() {
                rd.deprecation("8.10.0", "CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead");
            }
            getManagedTexture(e) {
                e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution;
                let e_styleKey = e.styleKey;
                if (this._activeTextures[e_styleKey]) {
                    this._increaseReferenceCount(e_styleKey);
                    return this._activeTextures[e_styleKey].texture;
                }
                let r = this.getTexture({
                    text: e.text,
                    style: e.style,
                    resolution: e._resolution,
                    textureStyle: e.textureStyle,
                    autoGenerateMipmaps: e.autoGenerateMipmaps
                });
                this._activeTextures[e_styleKey] = {
                    texture: r,
                    usageCount: 1
                };
                return r;
            }
            decreaseReferenceCount(e) {
                let t = this._activeTextures[e];
                t && (t.usageCount--, t.usageCount === 0 && (this.returnTexture(t.texture), this._activeTextures[e] = null));
            }
            getReferenceCount(e) {
                return this._activeTextures[e]?.usageCount ?? 0;
            }
            _increaseReferenceCount(e) {
                this._activeTextures[e].usageCount++;
            }
            _applyFilters(texture_1, filters) {
                let renderTarget = this._renderer.renderTarget.renderTarget;
                let n = this._renderer.filter.generateFilteredTexture({
                    texture: texture_1,
                    filters
                });
                this._renderer.renderTarget.bind(renderTarget, false);
                return n;
            }
            destroy() {
                for(let e in this._renderer = null, this._activeTextures){
                    if (this._activeTextures[e]) {
                        this.returnTexture(this._activeTextures[e].texture);
                    }
                }
                this._activeTextures = null;
            }
        }
        class nZ extends nQ {
            constructor(e){
                super(e, true);
            }
        }
        nZ.extension = {
            type: [
                v.ExtensionType.CanvasSystem
            ],
            name: "canvasText"
        };
        class nJ extends nQ {
            constructor(e){
                super(e, false);
            }
        }
        nJ.extension = {
            type: [
                v.ExtensionType.WebGLSystem,
                v.ExtensionType.WebGPUSystem
            ],
            name: "canvasText"
        };
        v.extensions.add(nZ);
        v.extensions.add(nJ);
        v.extensions.add(nj);
        class n0 extends nw {
            constructor(...e){
                const t = nD(e, "Text");
                super(t, n$.TextStyle);
                this.renderPipeId = "text";
                if (t.textureStyle) {
                    this.textureStyle = t.textureStyle instanceof nC.TextureStyle ? t.textureStyle : new nC.TextureStyle(t.textureStyle);
                }
                this.autoGenerateMipmaps = t.autoGenerateMipmaps ?? eV.TextureSource.defaultOptions.autoGenerateMipmaps;
            }
            updateBounds() {
                let _bounds = this._bounds;
                let _anchor = this._anchor;
                let r = 0;
                let n = 0;
                if (this._style.trim) {
                    let { frame, canvasAndContext } = nV.getCanvasAndContext({
                        text: this.text,
                        style: this._style,
                        resolution: 1
                    });
                    nV.returnCanvasAndContext(canvasAndContext);
                    r = frame.width;
                    n = frame.height;
                } else {
                    let e = nL.CanvasTextMetrics.measureText(this._text, this._style);
                    r = e.width;
                    n = e.height;
                }
                _bounds.minX = -_anchor._x * r;
                _bounds.maxX = _bounds.minX + r;
                _bounds.minY = -_anchor._y * n;
                _bounds.maxY = _bounds.minY + n;
            }
        }
        class n3 extends rY {
            resolveQueueItem(e, t) {
                if (e instanceof r$.Container) {
                    this.resolveContainerQueueItem(e, t);
                } else if (e instanceof eV.TextureSource || e instanceof G.Texture) {
                    t.push(e.source);
                } else if (e instanceof rK.GraphicsContext) {
                    t.push(e);
                }
                return null;
            }
            resolveContainerQueueItem(e, t) {
                if (e instanceof rR.Sprite || e instanceof nM || e instanceof nt) {
                    t.push(e.texture.source);
                } else if (e instanceof n0) {
                    t.push(e);
                } else if (e instanceof rj.Graphics) {
                    t.push(e.context);
                } else if (e instanceof nr.AnimatedSprite) {
                    e.textures.forEach((e)=>{
                        if (e.source) {
                            t.push(e.source);
                        } else {
                            t.push(e.texture.source);
                        }
                    });
                }
            }
            resolveGraphicsContextQueueItem(e) {
                this.renderer.graphicsContext.getGpuContext(e);
                let { instructions } = e;
                for (let e of instructions){
                    if (e.action === "texture") {
                        let { image } = e.data;
                        return image.source;
                    } else if (e.action === "fill") {
                        let { texture } = e.data.style;
                        return texture.source;
                    }
                }
                return null;
            }
        }
        var n2 = e.i(562140);
        var n1 = e.i(791526);
        var n8 = rj;
        var n4 = e.i(471272);
        class n6 extends n8.Graphics {
            destroy() {
                if (this.context.customShader) {
                    this.context.customShader.destroy();
                }
                super.destroy();
            }
        }
        class n5 {
            constructor(e){
                this._renderer = e;
                this._managedBitmapTexts = new nh.GCManagedHash({
                    renderer: e,
                    type: "renderable",
                    priority: -2,
                    name: "bitmapText"
                });
            }
            validateRenderable(e) {
                let t = this._getGpuBitmapText(e);
                return this._renderer.renderPipes.graphics.validateRenderable(t);
            }
            addRenderable(e, t) {
                let r = this._getGpuBitmapText(e);
                n7(e, r);
                if (e._didTextUpdate) {
                    e._didTextUpdate = false;
                    this._updateContext(e, r);
                }
                this._renderer.renderPipes.graphics.addRenderable(r, t);
                if (r.context.customShader) {
                    this._updateDistanceField(e);
                }
            }
            updateRenderable(e) {
                let t = this._getGpuBitmapText(e);
                n7(e, t);
                this._renderer.renderPipes.graphics.updateRenderable(t);
                if (t.context.customShader) {
                    this._updateDistanceField(e);
                }
            }
            _updateContext(e, t) {
                let { context } = t;
                let n = n1.BitmapFontManager.getFont(e.text, e._style);
                context.clear();
                if (n.distanceField.type !== "none") {
                    let e = this.getSdfShader();
                    if (e && !context.customShader) {
                        context.customShader = e;
                    }
                }
                let i = nL.CanvasTextMetrics.graphemeSegmenter(e.text);
                let e__style = e._style;
                let n_baseLineOffset = n.baseLineOffset;
                let s = n4.getBitmapTextLayout(i, e__style, n, true);
                let a_padding = e__style.padding;
                let s_scale = s.scale;
                let s_width = s.width;
                let d = s.height + s.offsetY;
                if (e__style._stroke) {
                    s_width += e__style._stroke.width / s_scale;
                    d += e__style._stroke.width / s_scale;
                }
                context.translate(-e._anchor._x * s_width - a_padding, -e._anchor._y * d - a_padding).scale(s_scale, s_scale);
                let h = n.applyFillAsTint ? e__style._fill.color : 16777215;
                let fontSize = n.fontMetrics.fontSize;
                let n_lineHeight = n.lineHeight;
                if (e__style.lineHeight) {
                    fontSize = e__style.fontSize / s_scale;
                    n_lineHeight = e__style.lineHeight / s_scale;
                }
                let m = (n_lineHeight - fontSize) / 2;
                if (m - n.baseLineOffset < 0) {
                    m = 0;
                }
                for(let e = 0; e < s.lines.length; e++){
                    let line = s.lines[e];
                    for(let e = 0; e < line.charPositions.length; e++){
                        let i = line.chars[e];
                        let a = n.chars[i];
                        if (a?.texture) {
                            let n = a.texture;
                            context.texture(n, h, Math.round(line.charPositions[e] + a.xOffset), Math.round(n_baseLineOffset + a.yOffset + m), n.orig.width, n.orig.height);
                        }
                    }
                    n_baseLineOffset += n_lineHeight;
                }
            }
            _getGpuBitmapText(e) {
                return e._gpuData[this._renderer.uid] || this.initGpuText(e);
            }
            initGpuText(e) {
                let t = new n6;
                e._gpuData[this._renderer.uid] = t;
                this._updateContext(e, t);
                this._managedBitmapTexts.add(e);
                return t;
            }
            _updateDistanceField(e) {
                let context = this._getGpuBitmapText(e).context;
                let fontFamily = e._style.fontFamily;
                let n = ec.Cache.get(`${fontFamily}-bitmap`);
                let { a: a_1, b, c: c_1, d } = e.groupTransform;
                let l = (Math.abs(Math.sqrt(a_1 * a_1 + b * b)) + Math.abs(Math.sqrt(c_1 * c_1 + d * d))) / 2;
                let u = n.baseRenderedFontSize / e._style.fontSize;
                let c = l * n.distanceField.range * (1 / u);
                context.customShader.resources.localUniforms.uniforms.uDistance = c;
            }
            destroy() {
                this._managedBitmapTexts.destroy();
                this._renderer = null;
                this._managedBitmapTexts = null;
            }
        }
        function n7(e, t) {
            t.groupTransform = e.groupTransform;
            t.groupColorAlpha = e.groupColorAlpha;
            t.groupColor = e.groupColor;
            t.groupBlendMode = e.groupBlendMode;
            t.globalDisplayStatus = e.globalDisplayStatus;
            t.groupTransform = e.groupTransform;
            t.localDisplayStatus = e.localDisplayStatus;
            t.groupAlpha = e.groupAlpha;
            t._roundPixels = e._roundPixels;
        }
        class n9 extends n5 {
            getSdfShader() {
                return null;
            }
        }
        n9.extension = {
            type: [
                v.ExtensionType.CanvasPipes
            ],
            name: "bitmapText"
        };
        var ie = e.i(815343);
        var it = e.i(229972);
        var ir = e.i(403976);
        var ii = ng;
        let ia = {
            name: "local-uniform-msdf-bit",
            vertex: {
                header: `
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32,
                uRound:f32,
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,
                main: `
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,
                end: `
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `
            },
            fragment: {
                header: `
            struct LocalUniforms {
                uColor:vec4<f32>,
                uTransformMatrix:mat3x3<f32>,
                uDistance: f32
            }

            @group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
         `,
                main: `
            outColor = vec4<f32>(calculateMSDFAlpha(outColor, vColor, localUniforms.uDistance));
        `
            }
        };
        let io = {
            name: "local-uniform-msdf-bit",
            vertex: {
                header: `
            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,
                main: `
            vColor *= uColor;
            modelMatrix *= uTransformMatrix;
        `,
                end: `
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `
            },
            fragment: {
                header: `
            uniform float uDistance;
         `,
                main: `
            outColor = vec4(calculateMSDFAlpha(outColor, vColor, uDistance));
        `
            }
        };
        let is = {
            name: "msdf-bit",
            fragment: {
                header: `
            fn calculateMSDFAlpha(msdfColor:vec4<f32>, shapeColor:vec4<f32>, distance:f32) -> f32 {

                // MSDF
                var median = msdfColor.r + msdfColor.g + msdfColor.b -
                    min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                    max(msdfColor.r, max(msdfColor.g, msdfColor.b));

                // SDF
                median = min(median, msdfColor.a);

                var screenPxDistance = distance * (median - 0.5);
                var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                var luma: f32 = dot(shapeColor.rgb, vec3<f32>(0.299, 0.587, 0.114));
                var gamma: f32 = mix(1.0, 1.0 / 2.2, luma);
                var coverage: f32 = pow(shapeColor.a * alpha, gamma);

                return coverage;

            }
        `
            }
        };
        let il = {
            name: "msdf-bit",
            fragment: {
                header: `
            float calculateMSDFAlpha(vec4 msdfColor, vec4 shapeColor, float distance) {

                // MSDF
                float median = msdfColor.r + msdfColor.g + msdfColor.b -
                                min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
                                max(msdfColor.r, max(msdfColor.g, msdfColor.b));

                // SDF
                median = min(median, msdfColor.a);

                float screenPxDistance = distance * (median - 0.5);
                float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);

                if (median < 0.01) {
                    alpha = 0.0;
                } else if (median > 0.99) {
                    alpha = 1.0;
                }

                // Gamma correction for coverage-like alpha
                float luma = dot(shapeColor.rgb, vec3(0.299, 0.587, 0.114));
                float gamma = mix(1.0, 1.0 / 2.2, luma);
                float coverage = pow(shapeColor.a * alpha, gamma);

                return coverage;
            }
        `
            }
        };
        class iu extends ii.Shader {
            constructor(e){
                const localUniforms = new C.UniformGroup({
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
                        value: new tC.Matrix,
                        type: "mat3x3<f32>"
                    },
                    uDistance: {
                        value: 4,
                        type: "f32"
                    },
                    uRound: {
                        value: 0,
                        type: "f32"
                    }
                });
                c ??= np.compileHighShaderGpuProgram({
                    name: "sdf-shader",
                    bits: [
                        ie.colorBit,
                        it.generateTextureBatchBit(e),
                        ia,
                        is,
                        nm.roundPixelsBit
                    ]
                });
                d ??= np.compileHighShaderGlProgram({
                    name: "sdf-shader",
                    bits: [
                        ie.colorBitGl,
                        it.generateTextureBatchBitGl(e),
                        io,
                        il,
                        nm.roundPixelsBitGl
                    ]
                });
                super({
                    glProgram: d,
                    gpuProgram: c,
                    resources: {
                        localUniforms,
                        batchSamplers: ir.getBatchSamplersUniformGroup(e)
                    }
                });
            }
        }
        class ic extends n5 {
            getSdfShader() {
                return new iu(this._renderer.limits.maxBatchableTextures);
            }
        }
        ic.extension = {
            type: [
                v.ExtensionType.WebGLPipes,
                v.ExtensionType.WebGPUPipes
            ],
            name: "bitmapText"
        };
        v.extensions.add(n9);
        v.extensions.add(ic);
        class id extends nw {
            constructor(...e){
                var t;
                const r = nD(e, "BitmapText");
                r.style ?? (r.style = r.style || {});
                (t = r.style).fill ?? (t.fill = 16777215);
                super(r, n$.TextStyle);
                this.renderPipeId = "bitmapText";
            }
            _onTouch(e) {
                for(let t in this._gcLastUsed = e, this._gpuData){
                    this._gpuData[t]?._onTouch(e);
                }
            }
            updateBounds() {
                let _bounds = this._bounds;
                let _anchor = this._anchor;
                let r = n1.BitmapFontManager.measureText(this.text, this._style);
                let r_scale = r.scale;
                let i = r.offsetY * r_scale;
                let a = r.width * r_scale;
                let o = r.height * r_scale;
                let _stroke = this._style._stroke;
                if (_stroke) {
                    a += _stroke.width;
                    o += _stroke.width;
                }
                _bounds.minX = -_anchor._x * a;
                _bounds.maxX = _bounds.minX + a;
                _bounds.minY = -_anchor._y * (o + i);
                _bounds.maxY = _bounds.minY + o;
            }
            set resolution(e) {
                if (e !== null) {
                    n2.warn("[BitmapText] dynamically updating the resolution is not supported. Resolution should be managed by the BitmapFont.");
                }
            }
            get resolution() {
                return this._resolution;
            }
        }
        var ih = n$;
        function ip(e) {
            let e__stroke = e._stroke;
            let e__fill = e._fill;
            let n = eN.Color.shared.setValue(e__fill.color).setAlpha(e__fill.alpha ?? 1).toHexa();
            let i = [
                `color: ${n}`,
                `font-size: ${e.fontSize}px`,
                `font-family: ${e.fontFamily}`,
                `font-weight: ${e.fontWeight}`,
                `font-style: ${e.fontStyle}`,
                `font-variant: ${e.fontVariant}`,
                `letter-spacing: ${e.letterSpacing}px`,
                `text-align: ${e.align}`,
                `padding: ${e.padding}px`,
                `white-space: ${e.whiteSpace === "pre" && e.wordWrap ? "pre-wrap" : e.whiteSpace}`,
                ...e.lineHeight ? [
                    `line-height: ${e.lineHeight}px`
                ] : [],
                ...e.wordWrap ? [
                    `word-break: ${e.breakWords ? "break-word" : "normal"}`,
                    `max-width: ${e.wordWrapWidth}px`
                ] : [],
                ...e__stroke ? [
                    stroke(e__stroke)
                ] : [],
                ...e.dropShadow ? [
                    im(e.dropShadow)
                ] : [],
                ...e.cssOverrides
            ].join(";");
            let a = [
                `div { ${i} }`
            ];
            ((e, t)=>{
                for(let r in e){
                    let n = e[r];
                    let i = [];
                    for(let e in n){
                        if (i_[e]) {
                            i.push(i_[e](n[e]));
                        } else if (ib[e]) {
                            i.push(ib[e].replace("{{VALUE}}", n[e]));
                        }
                    }
                    t.push(`${r} { ${i.join(";")} }`);
                }
            })(e.tagStyles, a);
            return a.join(" ");
        }
        function im(e) {
            let t = {
                ...e
            };
            let r = eN.Color.shared.setValue(t.color).setAlpha(t.alpha ?? 1).toHexa();
            let n = Math.round(Math.cos(t.angle) * t.distance);
            let i = Math.round(Math.sin(t.angle) * t.distance);
            let a = `${n}px ${i}px`;
            if (t.blur > 0) {
                return `text-shadow: ${a} ${t.blur}px ${r}`;
            }
            return `text-shadow: ${a} ${r}`;
        }
        function stroke(e) {
            let t = eN.Color.shared.setValue(e.color).setAlpha(e.alpha ?? 1).toHexa();
            return `-webkit-text-stroke-width: ${e.width}px;-webkit-text-stroke-color: ${t};text-stroke-width: ${e.width}px;text-stroke-color: ${t};paint-order: stroke`;
        }
        let ib = {
            fontSize: "font-size: {{VALUE}}px",
            fontFamily: "font-family: {{VALUE}}",
            fontWeight: "font-weight: {{VALUE}}",
            fontStyle: "font-style: {{VALUE}}",
            fontVariant: "font-variant: {{VALUE}}",
            letterSpacing: "letter-spacing: {{VALUE}}px",
            align: "text-align: {{VALUE}}",
            padding: "padding: {{VALUE}}px",
            whiteSpace: "white-space: {{VALUE}}",
            lineHeight: "line-height: {{VALUE}}px",
            wordWrapWidth: "max-width: {{VALUE}}px"
        };
        let i_ = {
            fill: (e)=>`color: ${eN.Color.shared.setValue(e).toHexa()}`,
            breakWords: (e)=>`word-break: ${e ? "break-all" : "normal"}`,
            stroke,
            dropShadow: (e)=>{
                if (e === true) {
                    return im(n$.TextStyle.defaultDropShadow);
                }
                if (e && typeof e === "object") {
                    return im({
                        ...n$.TextStyle.defaultDropShadow,
                        ...e
                    });
                }
                return "";
            }
        };
        class ix extends ih.TextStyle {
            constructor(e = {}){
                super(e);
                this._cssOverrides = [];
                this.cssOverrides = e.cssOverrides ?? [];
                this.tagStyles = e.tagStyles ?? {};
            }
            get tagStyles() {
                return this._tagStyles;
            }
            set tagStyles(e) {
                if (this._tagStyles !== e) {
                    this._tagStyles = e ?? {};
                    this.update();
                }
            }
            set cssOverrides(e) {
                this._cssOverrides = e instanceof Array ? e : [
                    e
                ];
                this.update();
            }
            get cssOverrides() {
                return this._cssOverrides;
            }
            update() {
                this._cssStyle = null;
                super.update();
            }
            clone() {
                return new ix({
                    align: this.align,
                    breakWords: this.breakWords,
                    dropShadow: this.dropShadow ? {
                        ...this.dropShadow
                    } : null,
                    fill: this._fill,
                    fontFamily: this.fontFamily,
                    fontSize: this.fontSize,
                    fontStyle: this.fontStyle,
                    fontVariant: this.fontVariant,
                    fontWeight: this.fontWeight,
                    letterSpacing: this.letterSpacing,
                    lineHeight: this.lineHeight,
                    padding: this.padding,
                    stroke: this._stroke,
                    whiteSpace: this.whiteSpace,
                    wordWrap: this.wordWrap,
                    wordWrapWidth: this.wordWrapWidth,
                    cssOverrides: this.cssOverrides,
                    tagStyles: {
                        ...this.tagStyles
                    }
                });
            }
            get cssStyle() {
                if (!this._cssStyle) {
                    this._cssStyle = ip(this);
                }
                return this._cssStyle;
            }
            addOverride(...e) {
                let t = e.filter((e)=>!this.cssOverrides.includes(e));
                if (t.length > 0) {
                    this.cssOverrides.push(...t);
                    this.update();
                }
            }
            removeOverride(...e) {
                let t = e.filter((e)=>this.cssOverrides.includes(e));
                if (t.length > 0) {
                    this.cssOverrides = this.cssOverrides.filter((e)=>!t.includes(e));
                    this.update();
                }
            }
            set fill(e) {
                if (typeof e !== "string" && typeof e !== "number") {
                    n2.warn("[HTMLTextStyle] only color fill is not supported by HTMLText");
                }
                super.fill = e;
            }
            set stroke(e) {
                if (e && typeof e !== "string" && typeof e !== "number") {
                    n2.warn("[HTMLTextStyle] only color stroke is not supported by HTMLText");
                }
                super.stroke = e;
            }
        }
        let iT = "http://www.w3.org/2000/svg";
        let iy = "http://www.w3.org/1999/xhtml";
        class iS {
            constructor(){
                this.svgRoot = document.createElementNS(iT, "svg");
                this.foreignObject = document.createElementNS(iT, "foreignObject");
                this.domElement = document.createElementNS(iy, "div");
                this.styleElement = document.createElementNS(iy, "style");
                const { foreignObject, svgRoot, styleElement, domElement } = this;
                foreignObject.setAttribute("width", "10000");
                foreignObject.setAttribute("height", "10000");
                foreignObject.style.overflow = "hidden";
                svgRoot.appendChild(foreignObject);
                foreignObject.appendChild(styleElement);
                foreignObject.appendChild(domElement);
                this.image = eq.DOMAdapter.get().createImage();
            }
            destroy() {
                this.svgRoot.remove();
                this.foreignObject.remove();
                this.styleElement.remove();
                this.domElement.remove();
                this.image.src = "";
                this.image.remove();
                this.svgRoot = null;
                this.foreignObject = null;
                this.styleElement = null;
                this.domElement = null;
                this.image = null;
                this.canvasAndContext = null;
            }
        }
        function iv(e, t, r, n) {
            if (!n) {
                n = h || (h = new iS);
            }
            let { domElement, styleElement, svgRoot } = n;
            domElement.innerHTML = `<style>${t.cssStyle};</style><div style='padding:0'>${e}</div>`;
            domElement.setAttribute("style", "transform-origin: top left; display: inline-block");
            if (r) {
                styleElement.textContent = r;
            }
            document.body.appendChild(svgRoot);
            let domElement_scrollWidth = domElement.scrollWidth;
            let domElement_scrollHeight = domElement.scrollHeight;
            svgRoot.remove();
            if (t.dropShadow) {
                let { distance, angle, blur } = t.dropShadow;
                let i = Math.abs(Math.round(Math.cos(angle) * distance));
                let a = Math.abs(Math.round(Math.sin(angle) * distance));
                domElement_scrollWidth += i + blur;
                domElement_scrollHeight += a + blur;
            }
            let u = 2 * t.padding;
            return {
                width: domElement_scrollWidth - u,
                height: domElement_scrollHeight - u
            };
        }
        var iR = nW;
        class iE extends iR.BatchableSprite {
            constructor(){
                super(...arguments);
                this.generatingTexture = false;
                this.currentKey = "--";
            }
            destroy() {
                this.texturePromise = null;
                this.generatingTexture = false;
                this.currentKey = "--";
                super.destroy();
            }
        }
        class iA {
            constructor(e){
                this._renderer = e;
                e.runners.resolutionChange.add(this);
                this._managedTexts = new nh.GCManagedHash({
                    renderer: e,
                    type: "renderable",
                    onUnload: this.onTextUnload.bind(this),
                    name: "htmlText"
                });
            }
            resolutionChange() {
                for(let e in this._managedTexts.items){
                    let t = this._managedTexts.items[e];
                    if (t?._autoResolution) {
                        t.onViewUpdate();
                    }
                }
            }
            validateRenderable(e) {
                let t = this._getGpuText(e);
                let e_styleKey = e.styleKey;
                return t.currentKey !== e_styleKey;
            }
            addRenderable(e, t) {
                let r = this._getGpuText(e);
                if (e._didTextUpdate) {
                    let t = e._autoResolution ? this._renderer.resolution : e.resolution;
                    if (r.currentKey !== e.styleKey || e.resolution !== t) {
                        this._updateGpuText(e).catch((e)=>{
                            console.error(e);
                        });
                    }
                    e._didTextUpdate = false;
                    nz(r, e);
                }
                this._renderer.renderPipes.batch.addToBatch(r, t);
            }
            updateRenderable(e) {
                let t = this._getGpuText(e);
                t._batcher.updateElement(t);
            }
            async _updateGpuText(e) {
                e._didTextUpdate = false;
                let t = this._getGpuText(e);
                if (t.generatingTexture) {
                    return;
                }
                let t_texturePromise = t.texturePromise;
                t.texturePromise = null;
                t.generatingTexture = true;
                e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution;
                let n = this._renderer.htmlText.getTexturePromise(e);
                if (t_texturePromise) {
                    n = n.finally(()=>{
                        this._renderer.htmlText.decreaseReferenceCount(t.currentKey);
                        this._renderer.htmlText.returnTexturePromise(t_texturePromise);
                    });
                }
                t.texturePromise = n;
                t.currentKey = e.styleKey;
                t.texture = await n;
                let i = e.renderGroup || e.parentRenderGroup;
                if (i) {
                    i.structureDidChange = true;
                }
                t.generatingTexture = false;
                nz(t, e);
            }
            _getGpuText(e) {
                return e._gpuData[this._renderer.uid] || this.initGpuText(e);
            }
            initGpuText(e) {
                let t = new iE;
                t.renderable = e;
                t.transform = e.groupTransform;
                t.texture = G.Texture.EMPTY;
                t.bounds = {
                    minX: 0,
                    maxX: 1,
                    minY: 0,
                    maxY: 0
                };
                t.roundPixels = this._renderer._roundPixels | e._roundPixels;
                e._resolution = e._autoResolution ? this._renderer.resolution : e.resolution;
                e._gpuData[this._renderer.uid] = t;
                this._managedTexts.add(e);
                return t;
            }
            onTextUnload(e) {
                let t = e._gpuData[this._renderer.uid];
                if (!t) {
                    return;
                }
                let { htmlText } = this._renderer;
                if (htmlText.getReferenceCount(t.currentKey) === null) {
                    htmlText.returnTexturePromise(t.texturePromise);
                } else {
                    htmlText.decreaseReferenceCount(t.currentKey);
                }
            }
            destroy() {
                this._managedTexts.destroy();
                this._renderer = null;
            }
        }
        iA.extension = {
            type: [
                v.ExtensionType.WebGLPipes,
                v.ExtensionType.WebGPUPipes,
                v.ExtensionType.CanvasPipes
            ],
            name: "htmlText"
        };
        var iM = e.i(849609);
        var iC = e.i(765480);
        function iG(e, t) {
            let t_fontFamily = t.fontFamily;
            let n = [];
            let i = {};
            let a = e.match(/font-family:([^;"\s]+)/g);
            function o(e) {
                if (!i[e]) {
                    n.push(e);
                    i[e] = true;
                }
            }
            if (Array.isArray(t_fontFamily)) {
                for(let e = 0; e < t_fontFamily.length; e++){
                    o(t_fontFamily[e]);
                }
            } else {
                o(t_fontFamily);
            }
            for(let e in a && a.forEach((e)=>{
                o(e.split(":")[1].trim());
            }), t.tagStyles){
                o(t.tagStyles[e].fontFamily);
            }
            return n;
        }
        async function iw(e) {
            let t = await eq.DOMAdapter.get().fetch(e);
            let r = await t.blob();
            let n = new FileReader;
            return await new Promise((resolve, reject)=>{
                n.onloadend = ()=>resolve(n.result);
                n.onerror = reject;
                n.readAsDataURL(r);
            });
        }
        async function iD(e, t) {
            let r = await iw(t);
            return `@font-face {
        font-family: "${e.fontFamily}";
        font-weight: ${e.fontWeight};
        font-style: ${e.fontStyle};
        src: url('${r}');
    }`;
        }
        let iP = new Map;
        async function iO(e) {
            let t = e.filter((e)=>ec.Cache.has(`${e}-and-url`)).map((fontFamily)=>{
                if (!iP.has(fontFamily)) {
                    let { entries } = ec.Cache.get(`${fontFamily}-and-url`);
                    let r = [];
                    entries.forEach((t)=>{
                        let t_url = t.url;
                        let i = t.faces.map((e)=>({
                                weight: e.weight,
                                style: e.style
                            }));
                        r.push(...i.map((t)=>iD({
                                fontWeight: t.weight,
                                fontStyle: t.style,
                                fontFamily
                            }, t_url)));
                    });
                    iP.set(fontFamily, Promise.all(r).then((e)=>e.join("\n")));
                }
                return iP.get(fontFamily);
            });
            return (await Promise.all(t)).join("\n");
        }
        function iB(e, t, r, n, i) {
            let { domElement, styleElement, svgRoot } = i;
            domElement.innerHTML = `<style>${t.cssStyle}</style><div style='padding:0;'>${e}</div>`;
            domElement.setAttribute("style", `transform: scale(${r});transform-origin: top left; display: inline-block`);
            styleElement.textContent = n;
            let { width, height } = i.image;
            svgRoot.setAttribute("width", width.toString());
            svgRoot.setAttribute("height", height.toString());
            return new XMLSerializer().serializeToString(svgRoot);
        }
        function iF(e, t) {
            let r = nP.CanvasPool.getOptimalCanvasAndContext(e.width, e.height, t);
            let { context } = r;
            context.clearRect(0, 0, e.width, e.height);
            context.drawImage(e, 0, 0);
            return r;
        }
        function iI(e, t, r) {
            return new Promise(async (resolve)=>{
                if (r) {
                    await new Promise((resolvePromise)=>setTimeout(resolvePromise, 100));
                }
                e.onload = ()=>{
                    resolve();
                };
                e.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(t)}`;
                e.crossOrigin = "anonymous";
            });
        }
        class iU {
            constructor(e){
                this._activeTextures = {};
                this._renderer = e;
                this._createCanvas = e.type === rc.RendererType.WEBGPU;
            }
            getTexture(e) {
                return this.getTexturePromise(e);
            }
            getManagedTexture(e) {
                let e_styleKey = e.styleKey;
                if (this._activeTextures[e_styleKey]) {
                    this._increaseReferenceCount(e_styleKey);
                    return this._activeTextures[e_styleKey].promise;
                }
                let promise = this._buildTexturePromise(e).then((e)=>{
                    this._activeTextures[e_styleKey].texture = e;
                    return e;
                });
                this._activeTextures[e_styleKey] = {
                    texture: null,
                    promise,
                    usageCount: 1
                };
                return promise;
            }
            getReferenceCount(e) {
                return this._activeTextures[e]?.usageCount ?? null;
            }
            _increaseReferenceCount(e) {
                this._activeTextures[e].usageCount++;
            }
            decreaseReferenceCount(e) {
                let t = this._activeTextures[e];
                t && (t.usageCount--, t.usageCount === 0 && (t.texture ? this._cleanUp(t.texture) : t.promise.then((e)=>{
                    t.texture = e;
                    this._cleanUp(t.texture);
                }).catch(()=>{
                    n2.warn("HTMLTextSystem: Failed to clean texture");
                }), this._activeTextures[e] = null));
            }
            getTexturePromise(e) {
                return this._buildTexturePromise(e);
            }
            async _buildTexturePromise(e) {
                let t;
                let { text, style, resolution, textureStyle, autoGenerateMipmaps } = e;
                let s = iC.BigPool.get(iS);
                let l = iG(text, style);
                let u = await iO(l);
                let c = iv(text, style, u, s);
                let d = Math.ceil(Math.ceil(Math.max(1, c.width) + 2 * style.padding) * resolution);
                let h = Math.ceil(Math.ceil(Math.max(1, c.height) + 2 * style.padding) * resolution);
                let s_image = s.image;
                s_image.width = (0 | d) + 2;
                s_image.height = (0 | h) + 2;
                let f = iB(text, style, resolution, u, s);
                await iI(s_image, f, iM.isSafari() && l.length > 0);
                if (this._createCanvas) {
                    t = iF(s_image, resolution);
                }
                let m = nK.getPo2TextureFromSource(t ? t.canvas : s_image, s_image.width - 2, s_image.height - 2, resolution, autoGenerateMipmaps);
                if (textureStyle) {
                    m.source.style = textureStyle;
                }
                if (this._createCanvas) {
                    this._renderer.texture.initSource(m.source);
                    nP.CanvasPool.returnCanvasAndContext(t);
                }
                iC.BigPool.return(s);
                return m;
            }
            returnTexturePromise(e) {
                e.then((e)=>{
                    this._cleanUp(e);
                }).catch(()=>{
                    n2.warn("HTMLTextSystem: Failed to clean texture");
                });
            }
            _cleanUp(e) {
                ru.TexturePool.returnTexture(e, true);
                e.source.resource = null;
                e.source.uploadMethodId = "unknown";
            }
            destroy() {
                for(let e in this._renderer = null, this._activeTextures){
                    if (this._activeTextures[e]) {
                        this.returnTexturePromise(this._activeTextures[e].promise);
                    }
                }
                this._activeTextures = null;
            }
        }
        iU.extension = {
            type: [
                v.ExtensionType.WebGLSystem,
                v.ExtensionType.WebGPUSystem,
                v.ExtensionType.CanvasSystem
            ],
            name: "htmlText"
        };
        v.extensions.add(iU);
        v.extensions.add(iA);
        class iL extends nw {
            constructor(...e){
                const t = nD(e, "HtmlText");
                super(t, ix);
                this.renderPipeId = "htmlText";
                if (t.textureStyle) {
                    this.textureStyle = t.textureStyle instanceof nC.TextureStyle ? t.textureStyle : new nC.TextureStyle(t.textureStyle);
                }
                this.autoGenerateMipmaps = t.autoGenerateMipmaps ?? eV.TextureSource.defaultOptions.autoGenerateMipmaps;
            }
            updateBounds() {
                let _bounds = this._bounds;
                let _anchor = this._anchor;
                let { width, height } = iv(this.text, this._style);
                _bounds.minX = -_anchor._x * width;
                _bounds.maxX = _bounds.minX + width;
                _bounds.minY = -_anchor._y * height;
                _bounds.maxY = _bounds.minY + height;
            }
            get text() {
                return this._text;
            }
            set text(e) {
                let t = this._sanitiseText(e.toString());
                super.text = t;
            }
            _sanitiseText(e) {
                return this._removeInvalidHtmlTags(e.replace(/<br>/gi, "<br/>").replace(/<hr>/gi, "<hr/>").replace(/&nbsp;/gi, "&#160;"));
            }
            _removeInvalidHtmlTags(e) {
                return e.replace(/<[^>]*?(?=<|$)/g, "");
            }
        }
        class iN extends n3 {
            uploadQueueItem(e) {
                if (e instanceof eV.TextureSource) {
                    this.uploadTextureSource(e);
                } else if (e instanceof n0) {
                    this.uploadText(e);
                } else if (e instanceof iL) {
                    this.uploadHTMLText(e);
                } else if (e instanceof id) {
                    this.uploadBitmapText(e);
                } else if (e instanceof rK.GraphicsContext) {
                    this.uploadGraphicsContext(e);
                }
            }
            uploadTextureSource(e) {
                this.renderer.texture.initSource(e);
            }
            uploadText(e) {
                this.renderer.renderPipes.text.initGpuText(e);
            }
            uploadBitmapText(e) {
                this.renderer.renderPipes.bitmapText.initGpuText(e);
            }
            uploadHTMLText(e) {
                this.renderer.renderPipes.htmlText.initGpuText(e);
            }
            uploadGraphicsContext(e) {
                this.renderer.graphicsContext.getGpuContext(e);
                let { instructions } = e;
                for (let e of instructions){
                    if (e.action === "texture") {
                        let { image } = e.data;
                        this.uploadTextureSource(image.source);
                    } else if (e.action === "fill") {
                        let { texture } = e.data.style;
                        this.uploadTextureSource(texture.source);
                    }
                }
                return null;
            }
        }
        class iX extends iN {
            destroy() {
                super.destroy();
                clearTimeout(this.timeout);
                this.renderer = null;
                this.queue = null;
                this.resolves = null;
            }
        }
        iX.extension = {
            type: [
                v.ExtensionType.WebGLSystem,
                v.ExtensionType.WebGPUSystem
            ],
            name: "prepare"
        };
        var ik = e.i(275957);
        var iH = e.i(740905);
        var iV = e.i(272589);
        var i$ = e.i(387862);
        var iq = e.i(666258);
        var iz = e.i(754287);
        var iW = e.i(550027);
        var iY = e.i(497256);
        var ij = e.i(430160);
        var iK = e.i(50644);
        var iQ = e.i(933261);
        var iZ = e.i(310828);
        var iJ = e.i(751360);
        var i0 = e.i(204528);
        var i3 = e.i(223349);
        var i2 = e.i(948180);
        var i1 = e.i(232391);
        var i8 = e.i(560370);
        var i4 = e.i(843822);
        var i6 = e.i(210677);
        var i5 = e.i(949998);
        var i7 = e.i(674636);
        var i9 = e.i(375564);
        var ae = e.i(542553);
        var at = e.i(475105);
        var ar = e.i(638209);
        var an = e.i(64645);
        var ai = e.i(304767);
        var aa = e.i(872502);
        var ao = e.i(198418);
        var as = e.i(489496);
        var al = e.i(232376);
        var au = e.i(564816);
        var ac = e.i(149566);
        var ad = e.i(735741);
        var ah = e.i(638082);
        var ap = e.i(16354);
        var af = e.i(215393);
        var am = e.i(84327);
        var ag = e.i(207841);
        var ab = e.i(110323);
        var a_ = e.i(296853);
        var ax = e.i(700631);
        var aT = e.i(63146);
        var ay = e.i(220892);
        var aS = e.i(204126);
        var av = e.i(768339);
        var aR = e.i(6948);
        var aE = e.i(871602);
        var aA = e.i(262609);
        var aM = e.i(270143);
        var aC = e.i(945168);
        var aG = e.i(489405);
        var aw = e.i(403204);
        var aD = e.i(322183);
        var aP = e.i(915907);
        var aO = e.i(529002);
        var aB = e.i(435573);
        var aF = e.i(459980);
        var aI = e.i(962768);
        var aU = e.i(739983);
        var aL = e.i(235523);
        var aN = e.i(428993);
        var aX = e.i(261095);
        var ak = e.i(794604);
        var aH = e.i(510091);
        var aV = e.i(178375);
        var a$ = e.i(426832);
        var aq = e.i(788987);
        var az = e.i(293592);
        var aW = e.i(135617);
        let aY = {
            float: 1,
            vec2: 2,
            vec3: 3,
            vec4: 4,
            int: 1,
            ivec2: 2,
            ivec3: 3,
            ivec4: 4,
            uint: 1,
            uvec2: 2,
            uvec3: 3,
            uvec4: 4,
            bool: 1,
            bvec2: 2,
            bvec3: 3,
            bvec4: 4,
            mat2: 4,
            mat3: 9,
            mat4: 16,
            sampler2D: 1
        };
        var aj = e.i(196932);
        var aK = e.i(398250);
        var aQ = e.i(994564);
        var aZ = e.i(840976);
        var aJ = e.i(640338);
        var a0 = e.i(420640);
        var a3 = e.i(879238);
        var a2 = e.i(448197);
        var a1 = e.i(109636);
        var a8 = e.i(200815);
        var a4 = e.i(163281);
        var a6 = e.i(444533);
        var a5 = e.i(485552);
        var a7 = e.i(500378);
        var a9 = e.i(61003);
        var oe = e.i(701993);
        var ot = e.i(378977);
        var or = e.i(800477);
        var on = e.i(629057);
        var oi = e.i(657280);
        var oa = e.i(534501);
        var oo = e.i(570966);
        var os = e.i(883926);
        var ol = e.i(999885);
        var ou = e.i(408321);
        var oc = e.i(111456);
        var od = e.i(923217);
        var oh = e.i(29542);
        var op = e.i(633840);
        var of = e.i(454710);
        var om = e.i(910120);
        var og = e.i(245665);
        var ob = e.i(29400);
        var o_ = e.i(23295);
        var ox = e.i(602250);
        var oT = e.i(564115);
        var oy = e.i(470227);
        var oS = e.i(630739);
        var ov = e.i(952222);
        var oR = e.i(301177);
        var oE = e.i(771690);
        var oA = e.i(942816);
        var oM = e.i(216248);
        var oC = e.i(500030);
        var oG = e.i(989776);
        var ow = e.i(465806);
        var oD = e.i(13472);
        var oP = e.i(411454);
        var oO = e.i(187925);
        var oB = e.i(637531);
        var oF = e.i(107465);
        var oI = e.i(714427);
        var oU = e.i(905072);
        var oL = e.i(71203);
        var oN = e.i(324086);
        var oX = e.i(349139);
        var ok = e.i(221845);
        var oH = e.i(649308);
        var oV = e.i(908565);
        var o$ = e.i(67473);
        var oq = e.i(333962);
        var oz = e.i(955419);
        var oW = e.i(594908);
        var oY = e.i(192897);
        var oj = e.i(507938);
        var oK = e.i(693398);
        var oQ = e.i(563541);
        var oZ = e.i(661226);
        var oJ = e.i(282313);
        var o0 = e.i(548306);
        let o3 = {
            POINTS: "point-list",
            LINES: "line-list",
            LINE_STRIP: "line-strip",
            TRIANGLES: "triangle-list",
            TRIANGLE_STRIP: "triangle-strip"
        };
        let o2 = new Proxy(o3, {
            get: (e, t)=>{
                rd.deprecation(rd.v8_0_0, `DRAW_MODES.${t} is deprecated, use '${o3[t]}' instead`);
                return e[t];
            }
        });
        var o1 = e.i(81846);
        var o8 = e.i(398013);
        var o4 = e.i(434367);
        var o6 = e.i(72131);
        var o5 = e.i(955424);
        var o7 = e.i(706848);
        var o9 = e.i(60064);
        var se = e.i(593642);
        var st = e.i(638095);
        var sr = e.i(798299);
        var sn = e.i(257445);
        var si = e.i(722909);
        var sa = e.i(189530);
        var so = e.i(627760);
        var ss = e.i(902504);
        var sl = e.i(609506);
        var su = e.i(422537);
        var sc = e.i(643781);
        var sd = e.i(165255);
        var sh = e.i(589627);
        var sp = e.i(164868);
        var sf = e.i(497544);
        var sm = e.i(896704);
        x = sg || {};
        x.CLAMP = "clamp-to-edge";
        x.REPEAT = "repeat";
        x.MIRRORED_REPEAT = "mirror-repeat";
        var sg = x;
        let sb = new Proxy(sg, {
            get: (e, t)=>{
                rd.deprecation(rd.v8_0_0, `DRAW_MODES.${t} is deprecated, use '${sg[t]}' instead`);
                return e[t];
            }
        });
        T = s_ || {};
        T.NEAREST = "nearest";
        T.LINEAR = "linear";
        var s_ = T;
        let sx = new Proxy(s_, {
            get: (e, t)=>{
                rd.deprecation(rd.v8_0_0, `DRAW_MODES.${t} is deprecated, use '${s_[t]}' instead`);
                return e[t];
            }
        });
        var sT = e.i(263524);
        var sy = e.i(733705);
        var sS = eV;
        class sv extends sS.TextureSource {
            constructor(e){
                const { faces, ...rest } = e;
                sv._validateFaces(faces);
                const n = faces.right;
                const i = n.resolution;
                const a = n.format;
                const alphaMode = n.alphaMode;
                const s = [
                    "resolution",
                    "format",
                    "alphaMode",
                    "dimensions",
                    "viewDimension"
                ].filter((e)=>rest[e] !== undefined);
                for (const e of (s.length && n2.warn(`[CubeTextureSource] Ignoring option(s) [${s.join(", ")}]; these are derived from face sources.`), super({
                    ...rest,
                    resource: faces,
                    width: n.width,
                    height: n.height,
                    dimensions: "2d",
                    viewDimension: "cube",
                    arrayLayerCount: 6,
                    resolution: i,
                    format: a,
                    alphaMode
                }), this.uploadMethodId = "cube", this.faces = faces, Object.keys(faces))){
                    const r = faces[e];
                    r.on("update", this._onFaceUpdate, this);
                    r.on("resize", this._onFaceResize, this);
                    r.on("unload", this._onFaceUpdate, this);
                }
            }
            destroy() {
                let faces = this.faces;
                if (faces) {
                    for (let t of Object.keys(faces)){
                        let r = faces[t];
                        r.off("update", this._onFaceUpdate, this);
                        r.off("resize", this._onFaceResize, this);
                        r.off("unload", this._onFaceUpdate, this);
                    }
                }
                super.destroy();
            }
            _onFaceUpdate() {
                this.emit("update", this);
            }
            _onFaceResize(e) {
                sv._validateFaces(this.faces);
                this.resize(e.width, e.height, e.resolution);
            }
            static _validateFaces(e) {
                if (!e.right || !e.left || !e.top || !e.bottom || !e.front || !e.back) {
                    throw Error("[CubeTextureSource] Requires { left, right, top, bottom, front, back } faces.");
                }
                let e_right = e.right;
                let t_pixelWidth = e_right.pixelWidth;
                let t_pixelHeight = e_right.pixelHeight;
                let t_format = e_right.format;
                let t_alphaMode = e_right.alphaMode;
                let t_resolution = e_right.resolution;
                for (let t of Object.keys(e)){
                    let s = e[t];
                    if (s.pixelWidth !== t_pixelWidth || s.pixelHeight !== t_pixelHeight) {
                        throw Error(`[CubeTextureSource] Face '${String(t)}' has a different size. All faces must match.`);
                    }
                    if (s.format !== t_format) {
                        throw Error(`[CubeTextureSource] Face '${String(t)}' has a different format. All faces must match.`);
                    }
                    if (s.alphaMode !== t_alphaMode) {
                        throw Error(`[CubeTextureSource] Face '${String(t)}' has a different alphaMode. All faces must match.`);
                    }
                    if (s.resolution !== t_resolution) {
                        throw Error(`[CubeTextureSource] Face '${String(t)}' has a different resolution. All faces must match.`);
                    }
                }
            }
        }
        let sR = [
            "left",
            "right",
            "top",
            "bottom",
            "front",
            "back"
        ];
        class sE extends sT.default {
            constructor(e){
                super();
                this.uid = sy.uid("cubeTexture");
                this.destroyed = false;
                const { label, source } = e;
                this.label = label;
                this.source = source;
                this.source.label = this.label ?? this.source.label;
            }
            static from(e, t = false) {
                if (e instanceof sv) {
                    return new sE({
                        source: e
                    });
                }
                let { faces, ...rest } = e;
                let i = null;
                let a = sR.every((e)=>typeof faces[e] === "string");
                if (!t && a) {
                    let e;
                    let t;
                    let a;
                    let o;
                    e = rest ? {
                        ...rest
                    } : {};
                    delete e.label;
                    a = (t = Object.keys(e).sort()).length ? `|${t.map((t)=>`${t}=${String(e[t])}`).join("&")}` : "";
                    o = sR.map((e)=>faces[e]).join(",");
                    i = `cube:${o}${a}`;
                    if (ec.Cache.has(i)) {
                        return ec.Cache.get(i);
                    }
                }
                let o = (e)=>{
                    if (e.isTexture) {
                        return e;
                    }
                    return G.Texture.from(e);
                };
                let faces_1 = {};
                for (let e of sR){
                    faces_1[e] = o(faces[e]).source;
                }
                let l = new sE({
                    source: new sv({
                        ...rest,
                        faces: faces_1
                    }),
                    label: rest.label
                });
                if (i) {
                    ec.Cache.set(i, l);
                    l.once("destroy", ()=>{
                        if (ec.Cache.has(i)) {
                            ec.Cache.remove(i);
                        }
                    });
                }
                return l;
            }
            destroy(e = false) {
                if (!this.destroyed) {
                    this.destroyed = true;
                    if (e) {
                        this.source.destroy();
                    }
                    this.emit("destroy", this);
                    this.removeAllListeners();
                }
            }
        }
        var sA = e.i(662188);
        var sM = e.i(292203);
        var sC = e.i(338228);
        var sG = e.i(173156);
        var sw = eV;
        let sD = Object.create(null);
        let sP = Object.create(null);
        class sO extends sw.TextureSource {
            constructor({ resource, renderer, label, width, height }){
                if (!resource) {
                    resource = ((e)=>{
                        let t;
                        if (e.type === rc.RendererType.WEBGPU) {
                            if (!sP[t = e.uid]) {
                                sP[t] = e.gpu.device.createTexture({
                                    label: "ExternalSource placeholder",
                                    size: {
                                        width: 1,
                                        height: 1
                                    },
                                    format: "rgba8unorm",
                                    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
                                });
                            }
                            return sP[e.uid];
                        }
                        if (!sD[e.uid]) {
                            let t = e.gl;
                            let r = t.createTexture();
                            t.bindTexture(t.TEXTURE_2D, r);
                            t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
                            sD[e.uid] = r;
                        }
                        return sD[e.uid];
                    })(renderer);
                }
                if (!width) {
                    width = width ?? resource?.width ?? 1;
                }
                if (!height) {
                    height = height ?? resource?.height ?? 1;
                }
                super({
                    resource,
                    width,
                    height,
                    label,
                    autoGarbageCollect: false
                });
                this._renderer = renderer;
                this._initGpuData(resource);
            }
            static test(e) {
                return globalThis.GPUTexture && e instanceof GPUTexture || globalThis.WebGLTexture && e instanceof WebGLTexture;
            }
            _validateTexture(e) {
                let _renderer = this._renderer;
                let r = !!_renderer.gpu;
                let n = globalThis.GPUTexture && e instanceof GPUTexture;
                let i = globalThis.WebGLTexture && e instanceof WebGLTexture;
                if (r && i) {
                    throw Error("Cannot use WebGLTexture with a WebGPU renderer");
                }
                if (!r && n) {
                    throw Error("Cannot use GPUTexture with a WebGL renderer");
                }
                if (!r) {
                    let r = _renderer.gl;
                    if (r && !r.isTexture(e)) {
                        throw Error("WebGLTexture does not belong to this renderer's WebGL context");
                    }
                }
            }
            _initGpuData(e) {
                let _renderer = this._renderer;
                this._validateTexture(e);
                if (_renderer.gpu) {
                    this._gpuData[_renderer.uid] = new oX.GPUTextureGpuData(e);
                } else {
                    this._gpuData[_renderer.uid] = new a9.GlTexture(e);
                }
            }
            updateGPUTexture(e, t, r) {
                let _renderer = this._renderer;
                let i = this._gpuData[_renderer.uid];
                this.resource = e;
                if (_renderer.gpu) {
                    this._validateTexture(e);
                    if (i.gpuTexture !== e) {
                        i.gpuTexture = e;
                        i.textureView = null;
                        let t = _renderer.texture;
                        if (t?._bindGroupHash) {
                            t._bindGroupHash[this.uid] = null;
                        }
                    }
                    let a = t ?? e.width;
                    let o = r ?? e.height;
                    this.resize(a, o);
                } else {
                    this._validateTexture(e);
                    i.texture = e;
                    if (t !== undefined && r !== undefined) {
                        this.resize(t, r);
                    }
                }
                this.emit("update", this);
            }
            destroy() {
                let _renderer = this._renderer;
                delete this._gpuData[_renderer.uid];
                super.destroy();
            }
        }
        var sB = e.i(24880);
        var sF = e.i(613514);
        var sI = e.i(947084);
        var sU = e.i(818642);
        var sL = e.i(251783);
        var sN = e.i(379412);
        var sX = e.i(235569);
        var sk = e.i(777207);
        var sH = "varying vec2 vUV;\nvarying vec4 vColor;\n\nuniform sampler2D uTexture;\n\nvoid main(void){\n    vec4 color = texture2D(uTexture, vUV) * vColor;\n    gl_FragColor = color;\n}";
        var sV = "attribute vec2 aVertex;\nattribute vec2 aUV;\nattribute vec4 aColor;\n\nattribute vec2 aPosition;\nattribute float aRotation;\n\nuniform mat3 uTranslationMatrix;\nuniform float uRound;\nuniform vec2 uResolution;\nuniform vec4 uColor;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\n\nvec2 roundPixels(vec2 position, vec2 targetSize)\n{       \n    return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n}\n\nvoid main(void){\n    float cosRotation = cos(aRotation);\n    float sinRotation = sin(aRotation);\n    float x = aVertex.x * cosRotation - aVertex.y * sinRotation;\n    float y = aVertex.x * sinRotation + aVertex.y * cosRotation;\n\n    vec2 v = vec2(x, y);\n    v = v + aPosition;\n\n    gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    if(uRound == 1.0)\n    {\n        gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n    }\n\n    vUV = aUV;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;\n}\n";
        var s$ = "\nstruct ParticleUniforms {\n  uTranslationMatrix:mat3x3<f32>,\n  uColor:vec4<f32>,\n  uRound:f32,\n  uResolution:vec2<f32>,\n};\n\nfn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>\n{\n  return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n}\n\n@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;\n\n@group(1) @binding(0) var uTexture: texture_2d<f32>;\n@group(1) @binding(1) var uSampler : sampler;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) color : vec4<f32>,\n  };\n@vertex\nfn mainVertex(\n  @location(0) aVertex: vec2<f32>,\n  @location(1) aPosition: vec2<f32>,\n  @location(2) aUV: vec2<f32>,\n  @location(3) aColor: vec4<f32>,\n  @location(4) aRotation: f32,\n) -> VSOutput {\n  \n   let v = vec2(\n       aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),\n       aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)\n   ) + aPosition;\n\n   var position = vec4((uniforms.uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n   if(uniforms.uRound == 1.0) {\n       position = vec4(roundPixels(position.xy, uniforms.uResolution), position.zw);\n   }\n\n    let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;\n\n  return VSOutput(\n   position,\n   aUV,\n   vColor,\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) color: vec4<f32>,\n  @builtin(position) position: vec4<f32>,\n) -> @location(0) vec4<f32> {\n\n    var sample = textureSample(uTexture, uSampler, uv) * color;\n   \n    return sample;\n}";
        var sq = e.i(654713);
        var sz = e.i(55742);
        var sW = e.i(256924);
        var sY = e.i(873469);
        var sj = e.i(555925);
        var sK = e.i(779427);
        var sQ = e.i(710158);
        var sZ = e.i(426307);
        var sJ = e.i(786234);
        var s0 = e.i(519821);
        var s3 = e.i(316272);
        var s2 = e.i(929953);
        var s1 = e.i(247016);
        var s8 = e.i(86245);
        var s4 = tX;
        class s6 extends s4.ViewContainer {
            constructor(render_1){
                if (typeof render_1 === "function") {
                    render_1 = {
                        render: render_1
                    };
                }
                const { render, ...rest } = render_1;
                super({
                    label: "RenderContainer",
                    ...rest
                });
                this.renderPipeId = "customRender";
                this.batched = false;
                if (render) {
                    this.render = render;
                }
                this.containsPoint = render_1.containsPoint ?? (()=>false);
                this.addBounds = render_1.addBounds ?? (()=>false);
            }
            updateBounds() {
                this._bounds.clear();
                this.addBounds(this._bounds);
            }
            render(e) {}
        }
        var s5 = e.i(629041);
        var s7 = e.i(492884);
        var s9 = e.i(292844);
        var le = e.i(544996);
        var lt = e.i(624539);
        var lr = e.i(50946);
        var ln = e.i(317624);
        var li = e.i(729317);
        var la = e.i(350585);
        var lo = e.i(636892);
        var ls = e.i(988559);
        var ll = e.i(914316);
        var lu = e.i(329936);
        var lc = e.i(402936);
        var ld = e.i(13814);
        var lh = e.i(674130);
        var lp = e.i(882825);
        var lf = e.i(104312);
        var lm = e.i(682581);
        var lg = e.i(121570);
        var lb = e.i(898006);
        var l_ = e.i(225839);
        var lx = e.i(930005);
        var lT = e.i(625533);
        var ly = e.i(53116);
        var lS = e.i(912667);
        var lv = e.i(816359);
        var lR = e.i(769047);
        var lE = e.i(455660);
        var lA = e.i(419905);
        var lM = e.i(336966);
        var lC = e.i(234118);
        var lG = e.i(815770);
        var lw = e.i(115321);
        var lD = e.i(551370);
        var lP = e.i(121402);
        class lO {
            constructor(){
                this._gradients = [];
                this._nextId = 0;
            }
            addStyle(e) {
                if (!(e.fill instanceof lA.FillGradient)) {
                    return null;
                }
                let id_1 = `pixi-grad-${this._nextId++}`;
                this._gradients.push({
                    id: id_1,
                    gradient: e.fill,
                    textureSpace: e.textureSpace ?? "local"
                });
                return `url(#${id_1})`;
            }
            build() {
                if (this._gradients.length === 0) {
                    return "";
                }
                let e = [
                    "<defs>"
                ];
                for (let { id, gradient, textureSpace } of this._gradients){
                    let i = textureSpace === "global" ? "userSpaceOnUse" : "objectBoundingBox";
                    let a = gradient.colorStops.map((e)=>{
                        let t = eN.Color.shared.setValue(e.color).toHex();
                        return `<stop offset="${e.offset}" stop-color="${t}"/>`;
                    }).join("");
                    if (gradient.type === "radial") {
                        let n = gradient.outerCenter?.x ?? 0.5;
                        let o = gradient.outerCenter?.y ?? 0.5;
                        let s = gradient.outerRadius ?? 0.5;
                        let l = gradient.center?.x ?? n;
                        let u = gradient.center?.y ?? o;
                        e.push(`<radialGradient id="${id}" gradientUnits="${i}" cx="${n}" cy="${o}" r="${s}" fx="${l}" fy="${u}">`, a, "</radialGradient>");
                    } else {
                        let n = gradient.start?.x ?? 0;
                        let o = gradient.start?.y ?? 0;
                        let s = gradient.end?.x ?? 1;
                        let l = gradient.end?.y ?? 0;
                        e.push(`<linearGradient id="${id}" gradientUnits="${i}" x1="${n}" y1="${o}" x2="${s}" y2="${l}">`, a, "</linearGradient>");
                    }
                }
                e.push("</defs>");
                return e.join("");
            }
        }
        let lB = 2 * Math.PI;
        let lF = new Set([
            "regularPoly",
            "roundPoly",
            "roundShape",
            "filletRect",
            "chamferRect",
            "arcTo"
        ]);
        function lI(e, t = 2, r = false) {
            if (e.instructions.some((e)=>lF.has(e.action))) {
                var n;
                var i;
                var a;
                var o;
                const s = e;
                const l = t;
                const u = r;
                let c = s.shapePath.shapePrimitives;
                let d = [];
                for (let e of c){
                    let t = e.shape;
                    let r = e.transform;
                    switch(t.type){
                        case "polygon":
                            d.push(lH(t.points, t.closePath, r, l));
                            break;
                        case "circle":
                            d.push(lN(t.x, t.y, t.radius, t.radius, r, l, u));
                            break;
                        case "ellipse":
                            d.push(lN(t.x, t.y, t.halfWidth, t.halfHeight, r, l, u));
                            break;
                        case "rectangle":
                            d.push(lX(t.x, t.y, t.width, t.height, r, l));
                            break;
                        case "roundedRectangle":
                            d.push(lk(t.x, t.y, t.width, t.height, t.radius, r, l, u));
                    }
                }
                return d.join("");
            }
            let c = [];
            let d = false;
            for(let s = 0; s < e.instructions.length; s++){
                let instruction = e.instructions[s];
                let u = instruction.data;
                switch(instruction.action){
                    case "moveTo":
                        c.push(`M${lL(u[0], u[1], null, t)}`);
                        d = true;
                        break;
                    case "lineTo":
                        c.push(`L${lL(u[0], u[1], null, t)}`);
                        d = true;
                        break;
                    case "quadraticCurveTo":
                        c.push(`Q${lL(u[0], u[1], null, t)} ${lL(u[2], u[3], null, t)}`);
                        d = true;
                        break;
                    case "bezierCurveTo":
                        c.push(`C${lL(u[0], u[1], null, t)} ${lL(u[2], u[3], null, t)} ${lL(u[4], u[5], null, t)}`);
                        d = true;
                        break;
                    case "arcToSvg":
                        c.push(`A${lU(u[0], t)} ${lU(u[1], t)} ${lU(u[2], t)} ${u[3]} ${u[4]} ${lL(u[5], u[6], null, t)}`);
                        d = true;
                        break;
                    case "closePath":
                        c.push("Z");
                        d = false;
                        break;
                    case "arc":
                        c.push(((e, t, r, n, i, a, o, s, l = false)=>{
                            let u = i - n;
                            a ? u > 0 && (u -= lB) : u < 0 && (u += lB);
                            if (Math.abs(u) >= lB - 0.000001) {
                                return lN(e, t, r, r, null, s, l);
                            }
                            if (l) {
                                let i = [];
                                for(let a = 0; a <= 32; a++){
                                    let l = n + a / 32 * u;
                                    let c = e + r * Math.cos(l);
                                    let d = t + r * Math.sin(l);
                                    let h = a === 0 ? o ? "L" : "M" : "L";
                                    i.push(`${h}${lU(c, s)} ${lU(d, s)}`);
                                }
                                return i.join("");
                            }
                            let c = e + r * Math.cos(n);
                            let d = t + r * Math.sin(n);
                            let h = e + r * Math.cos(i);
                            let p = t + r * Math.sin(i);
                            let f = +(Math.abs(u) > Math.PI);
                            return `${o ? "L" : "M"}${lU(c, s)} ${lU(d, s)}A${lU(r, s)} ${lU(r, s)} 0 ${f} ${+!a} ${lU(h, s)} ${lU(p, s)}`;
                        })(u[0], u[1], u[2], u[3], u[4], !!u[5], d, t, r));
                        d = !((e, t, r)=>{
                            let n = t - e;
                            r ? n > 0 && (n -= lB) : n < 0 && (n += lB);
                            return Math.abs(n) >= lB - 0.000001;
                        })(u[3], u[4], !!u[5]);
                        break;
                    case "rect":
                        c.push(lX(u[0], u[1], u[2], u[3], u[4], t));
                        d = false;
                        break;
                    case "circle":
                        c.push(lN(u[0], u[1], u[2], u[2], u[3], t, r));
                        d = false;
                        break;
                    case "ellipse":
                        c.push(lN(u[0], u[1], u[2], u[3], u[4], t, r));
                        d = false;
                        break;
                    case "roundRect":
                        c.push(lk(u[0], u[1], u[2], u[3], u[4] ?? 0, u[5], t, r));
                        d = false;
                        break;
                    case "poly":
                        c.push(lH(u[0], u[1] ?? true, u[2], t));
                        d = !(u[1] ?? true);
                        break;
                    case "addPath":
                        c.push((n = u[0], i = u[1], a = t, o = r, !i || i.isIdentity() ? lI(n, a, o) : lI(n.clone(true).transform(i), a, o)));
                        d = true;
                }
            }
            return c.join("");
        }
        function lU(e, t) {
            return parseFloat(e.toFixed(t)).toString();
        }
        function lL(e, t, r, n) {
            if (r && !r.isIdentity()) {
                let i = r.a * e + r.c * t + r.tx;
                let a = r.b * e + r.d * t + r.ty;
                return `${lU(i, n)} ${lU(a, n)}`;
            }
            return `${lU(e, n)} ${lU(t, n)}`;
        }
        function lN(e, t, r, n, i, a, o = false) {
            let s = i && !i.isIdentity() ? i : null;
            if (!s && !o) {
                return `M${lU(e - r, a)} ${lU(t, a)}A${lU(r, a)} ${lU(n, a)} 0 1 1 ${lU(e + r, a)} ${lU(t, a)}A${lU(r, a)} ${lU(n, a)} 0 1 1 ${lU(e - r, a)} ${lU(t, a)}Z`;
            }
            let l = [];
            for(let i = 0; i < 64; i++){
                let o = i / 64 * lB;
                let u = e + r * Math.cos(o);
                let c = t + n * Math.sin(o);
                l.push(`${i === 0 ? "M" : "L"}${lL(u, c, s, a)}`);
            }
            l.push("Z");
            return l.join("");
        }
        function lX(e, t, r, n, i, a) {
            return `M${lL(e, t, i, a)}L${lL(e + r, t, i, a)}L${lL(e + r, t + n, i, a)}L${lL(e, t + n, i, a)}Z`;
        }
        function lk(e, t, r, n, i, a, o, s = false) {
            let l = a && !a.isIdentity() ? a : null;
            if (i <= 0) {
                return lX(e, t, r, n, l, o);
            }
            i = Math.min(i, Math.min(r, n) / 2);
            if (l || s) {
                let a = [];
                let s = [
                    [
                        e + r - i,
                        t + i,
                        -Math.PI / 2
                    ],
                    [
                        e + r - i,
                        t + n - i,
                        0
                    ],
                    [
                        e + i,
                        t + n - i,
                        Math.PI / 2
                    ],
                    [
                        e + i,
                        t + i,
                        Math.PI
                    ]
                ];
                let u = true;
                for(let e = 0; e < s.length; e++){
                    let [t, r, n] = s[e];
                    for(let e = 0; e <= 8; e++){
                        let s = n + e / 8 * (Math.PI / 2);
                        let c = t + i * Math.cos(s);
                        let d = r + i * Math.sin(s);
                        a.push(`${u ? "M" : "L"}${lL(c, d, l, o)}`);
                        u = false;
                    }
                }
                a.push("Z");
                return a.join("");
            }
            return `M${lU(e + i, o)} ${lU(t, o)}L${lU(e + r - i, o)} ${lU(t, o)}A${lU(i, o)} ${lU(i, o)} 0 0 1 ${lU(e + r, o)} ${lU(t + i, o)}L${lU(e + r, o)} ${lU(t + n - i, o)}A${lU(i, o)} ${lU(i, o)} 0 0 1 ${lU(e + r - i, o)} ${lU(t + n, o)}L${lU(e + i, o)} ${lU(t + n, o)}A${lU(i, o)} ${lU(i, o)} 0 0 1 ${lU(e, o)} ${lU(t + n - i, o)}L${lU(e, o)} ${lU(t + i, o)}A${lU(i, o)} ${lU(i, o)} 0 0 1 ${lU(e + i, o)} ${lU(t, o)}Z`;
        }
        function lH(e, t, r, n) {
            if (e.length === 0) {
                return "";
            }
            let i = [];
            if (typeof e[0] === "number") {
                i.push(`M${lL(e[0], e[1], r, n)}`);
                for(let t = 2; t < e.length; t += 2){
                    i.push(`L${lL(e[t], e[t + 1], r, n)}`);
                }
            } else {
                i.push(`M${lL(e[0].x, e[0].y, r, n)}`);
                for(let t = 1; t < e.length; t++){
                    i.push(`L${lL(e[t].x, e[t].y, r, n)}`);
                }
            }
            if (t) {
                i.push("Z");
            }
            return i.join("");
        }
        function lV(e, t) {
            let r = t.addStyle(e);
            let n = [];
            if (r) {
                n.push(`fill="${r}"`);
            } else {
                n.push(`fill="${eN.Color.shared.setValue(e.color).toHex()}"`);
            }
            if (e.alpha < 1) {
                n.push(`fill-opacity="${e.alpha}"`);
            }
            return n.join(" ");
        }
        function l$(e, t) {
            let r = t.addStyle(e);
            let n = [];
            n.push('fill="none"');
            if (r) {
                n.push(`stroke="${r}"`);
            } else {
                n.push(`stroke="${eN.Color.shared.setValue(e.color).toHex()}"`);
            }
            n.push(`stroke-width="${e.width}"`);
            if (e.cap !== "butt") {
                n.push(`stroke-linecap="${e.cap}"`);
            }
            if (e.join !== "miter") {
                n.push(`stroke-linejoin="${e.join}"`);
            } else if (e.miterLimit !== 10) {
                n.push(`stroke-miterlimit="${e.miterLimit}"`);
            }
            if (e.alpha < 1) {
                n.push(`stroke-opacity="${e.alpha}"`);
            }
            return n.join(" ");
        }
        var lq = e.i(388850);
        var lz = e.i(523994);
        var lW = e.i(380762);
        var lY = e.i(437324);
        var lj = e.i(569176);
        var lK = e.i(591069);
        var lQ = e.i(898512);
        var lZ = e.i(470618);
        var lJ = e.i(967030);
        var l0 = e.i(73517);
        var l3 = e.i(12746);
        var l2 = e.i(762562);
        var l1 = e.i(728207);
        var l8 = e.i(752046);
        var l4 = r$;
        let l6 = class e extends l4.Container {
            constructor(t = {}){
                t = {
                    ...e.defaultOptions,
                    ...t
                };
                super();
                this.renderLayerChildren = [];
                this.sortableChildren = t.sortableChildren;
                this.sortFunction = t.sortFunction;
            }
            attach(...e) {
                for(let t = 0; t < e.length; t++){
                    let r = e[t];
                    if (r.parentRenderLayer) {
                        if (r.parentRenderLayer === this) {
                            continue;
                        }
                        r.parentRenderLayer.detach(r);
                    }
                    this.renderLayerChildren.push(r);
                    r.parentRenderLayer = this;
                    let n = this.renderGroup || this.parentRenderGroup;
                    if (n) {
                        n.structureDidChange = true;
                    }
                }
                return e[0];
            }
            detach(...e) {
                for(let t = 0; t < e.length; t++){
                    let r = e[t];
                    let n = this.renderLayerChildren.indexOf(r);
                    if (-1 !== n) {
                        this.renderLayerChildren.splice(n, 1);
                    }
                    r.parentRenderLayer = null;
                    let i = this.renderGroup || this.parentRenderGroup;
                    if (i) {
                        i.structureDidChange = true;
                    }
                }
                return e[0];
            }
            detachAll() {
                let renderLayerChildren = this.renderLayerChildren;
                for(let t = 0; t < renderLayerChildren.length; t++){
                    renderLayerChildren[t].parentRenderLayer = null;
                }
                this.renderLayerChildren.length = 0;
            }
            collectRenderables(e, t, r) {
                let renderLayerChildren = this.renderLayerChildren;
                let n_length = renderLayerChildren.length;
                if (this.sortableChildren) {
                    this.sortRenderLayerChildren();
                }
                for(let r = 0; r < n_length; r++){
                    if (!renderLayerChildren[r].parent) {
                        n2.warn("Container must be added to both layer and scene graph. Layers only handle render order - the scene graph is required for transforms (addChild)", renderLayerChildren[r]);
                    }
                    renderLayerChildren[r].collectRenderables(e, t, this);
                }
            }
            sortRenderLayerChildren() {
                this.renderLayerChildren.sort(this.sortFunction);
            }
            _getGlobalBoundsRecursive(e, t, r) {
                if (!e) {
                    return;
                }
                let renderLayerChildren = this.renderLayerChildren;
                for(let e = 0; e < renderLayerChildren.length; e++){
                    renderLayerChildren[e]._getGlobalBoundsRecursive(true, t, this);
                }
            }
            getFastGlobalBounds(e, t) {
                return super.getFastGlobalBounds(e, t);
            }
            addChild() {
                throw Error("RenderLayer.addChild() is not available. Please use RenderLayer.attach()");
            }
            removeChild() {
                throw Error("RenderLayer.removeChild() is not available. Please use RenderLayer.detach()");
            }
            removeChildren(e, t) {
                throw Error("RenderLayer.removeChildren() is not available. Please use RenderLayer.detach()");
            }
            removeChildAt(e) {
                throw Error("RenderLayer.removeChildAt() is not available");
            }
            getChildAt(e) {
                throw Error("RenderLayer.getChildAt() is not available");
            }
            setChildIndex(e, t) {
                throw Error("RenderLayer.setChildIndex() is not available");
            }
            getChildIndex(e) {
                throw Error("RenderLayer.getChildIndex() is not available");
            }
            addChildAt(e, t) {
                throw Error("RenderLayer.addChildAt() is not available");
            }
            swapChildren(e, t) {
                throw Error("RenderLayer.swapChildren() is not available");
            }
            reparentChild() {
                throw Error("RenderLayer.reparentChild() is not available with the render layer");
            }
            reparentChildAt(e, t) {
                throw Error("RenderLayer.reparentChildAt() is not available with the render layer");
            }
        };
        l6.defaultOptions = {
            sortableChildren: false,
            sortFunction: (e, t)=>e.zIndex - t.zIndex
        };
        let l5 = class e extends r8 {
            constructor(...e){
                super({});
                let t = e[0] ?? {};
                if (typeof t === "number") {
                    rd.deprecation(rd.v8_0_0, "PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead");
                    t = {
                        width: t,
                        height: e[1],
                        verticesX: e[2],
                        verticesY: e[3]
                    };
                }
                this.build(t);
            }
            build(t) {
                t = {
                    ...e.defaultOptions,
                    ...t
                };
                this.verticesX = this.verticesX ?? t.verticesX;
                this.verticesY = this.verticesY ?? t.verticesY;
                this.width = this.width ?? t.width;
                this.height = this.height ?? t.height;
                let r = this.verticesX * this.verticesY;
                let n = [];
                let i = [];
                let a = [];
                let o = this.verticesX - 1;
                let s = this.verticesY - 1;
                let l = this.width / o;
                let u = this.height / s;
                for(let e = 0; e < r; e++){
                    let t = e % this.verticesX;
                    let r = e / this.verticesX | 0;
                    n.push(t * l, r * u);
                    i.push(t / o, r / s);
                }
                let c = o * s;
                for(let e = 0; e < c; e++){
                    let t = e % o;
                    let r = e / o | 0;
                    let n = r * this.verticesX + t;
                    let i = r * this.verticesX + t + 1;
                    let s = (r + 1) * this.verticesX + t;
                    let l = (r + 1) * this.verticesX + t + 1;
                    a.push(n, i, s, i, l, s);
                }
                this.buffers[0].data = new Float32Array(n);
                this.buffers[1].data = new Float32Array(i);
                this.indexBuffer.data = new Uint32Array(a);
                this.buffers[0].update();
                this.buffers[1].update();
                this.indexBuffer.update();
            }
        };
        l5.defaultOptions = {
            width: 100,
            height: 100,
            verticesX: 10,
            verticesY: 10
        };
        let l7 = l5;
        function l9(e, t, r, n) {
            let i = r.buffers[0];
            let i_data = i.data;
            let { verticesX, verticesY } = r;
            let l = e / (verticesX - 1);
            let u = t / (verticesY - 1);
            let c = 0;
            let d = n[0];
            let h = n[1];
            let p = n[2];
            let f = n[3];
            let m = n[4];
            let g = n[5];
            let b = n[6];
            let _ = n[7];
            let x = n[8];
            for(let e = 0; e < i_data.length; e += 2){
                let t = c % verticesX * l;
                let r = (c / verticesX | 0) * u;
                let n = d * t + h * r + p;
                let i = f * t + m * r + g;
                let s = b * t + _ * r + x;
                i_data[e] = n / s;
                i_data[e + 1] = i / s;
                c++;
            }
            i.update();
        }
        function ue(e, t) {
            let r = t[0];
            let n = t[1];
            let i = t[2];
            let a = t[3];
            let o = t[4];
            let s = t[5];
            let l = t[6];
            let u = t[7];
            let c = t[8];
            e[0] = o * c - s * u;
            e[1] = i * u - n * c;
            e[2] = n * s - i * o;
            e[3] = s * l - a * c;
            e[4] = r * c - i * l;
            e[5] = i * a - r * s;
            e[6] = a * u - o * l;
            e[7] = n * l - r * u;
            e[8] = r * o - n * a;
            return e;
        }
        function ut(e, t, r) {
            let n = t[0];
            let i = t[1];
            let a = t[2];
            let o = t[3];
            let s = t[4];
            let l = t[5];
            let u = t[6];
            let c = t[7];
            let d = t[8];
            let h = r[0];
            let p = r[1];
            let f = r[2];
            let m = r[3];
            let g = r[4];
            let b = r[5];
            let _ = r[6];
            let x = r[7];
            let T = r[8];
            e[0] = h * n + p * o + f * u;
            e[1] = h * i + p * s + f * c;
            e[2] = h * a + p * l + f * d;
            e[3] = m * n + g * o + b * u;
            e[4] = m * i + g * s + b * c;
            e[5] = m * a + g * l + b * d;
            e[6] = _ * n + x * o + T * u;
            e[7] = _ * i + x * s + T * c;
            e[8] = _ * a + x * l + T * d;
            return e;
        }
        let ur = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        let un = [
            0,
            0,
            0
        ];
        let ui = [
            0,
            0,
            0
        ];
        function ua(e, t, r, n, i, a, o, s, l) {
            let u;
            let c;
            let d;
            ur[0] = t;
            ur[1] = n;
            ur[2] = a;
            ur[3] = r;
            ur[4] = i;
            ur[5] = o;
            ur[6] = 1;
            ur[7] = 1;
            ur[8] = 1;
            let h = ue(e, ur);
            ui[0] = s;
            ui[1] = l;
            ui[2] = 1;
            u = ui[0];
            c = ui[1];
            d = ui[2];
            un[0] = h[0] * u + h[1] * c + h[2] * d;
            un[1] = h[3] * u + h[4] * c + h[5] * d;
            un[2] = h[6] * u + h[7] * c + h[8] * d;
            let p = un;
            e[0] = p[0];
            e[1] = 0;
            e[2] = 0;
            e[3] = 0;
            e[4] = p[1];
            e[5] = 0;
            e[6] = 0;
            e[7] = 0;
            e[8] = p[2];
            return ut(e, e, ur);
        }
        let uo = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        let us = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        function ul(e, t, r, n, i, a, o, s, l, u, c, d, h, p, f, m, g) {
            let b = ua(uo, t, r, a, o, u, c, p, f);
            let _ = ua(us, n, i, s, l, d, h, m, g);
            return ut(e, ue(b, b), _);
        }
        class uu extends l7 {
            constructor(e){
                super(e);
                this._projectionMatrix = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
                const { width, height } = e;
                this.corners = [
                    0,
                    0,
                    width,
                    0,
                    width,
                    height,
                    0,
                    height
                ];
            }
            setCorners(e, t, r, n, i, a, o, s) {
                let corners = this.corners;
                corners[0] = e;
                corners[1] = t;
                corners[2] = r;
                corners[3] = n;
                corners[4] = i;
                corners[5] = a;
                corners[6] = o;
                corners[7] = s;
                this.updateProjection();
            }
            updateProjection() {
                let { width, height } = this;
                let corners = this.corners;
                let n = ul(this._projectionMatrix, 0, 0, corners[0], corners[1], width, 0, corners[2], corners[3], width, height, corners[4], corners[5], 0, height, corners[6], corners[7]);
                l9(width, height, this, n);
            }
        }
        let uc = class e extends nt {
            constructor(t){
                const { texture, verticesX, verticesY, ...rest } = t = {
                    ...e.defaultOptions,
                    ...t
                };
                const o = new uu(ln.definedProps({
                    width: texture.width,
                    height: texture.height,
                    verticesX,
                    verticesY
                }));
                super(ln.definedProps({
                    ...rest,
                    geometry: o
                }));
                this._texture = texture;
                this.geometry.setCorners(t.x0, t.y0, t.x1, t.y1, t.x2, t.y2, t.x3, t.y3);
            }
            textureUpdated() {
                let geometry = this.geometry;
                if (!geometry) {
                    return;
                }
                let { width, height } = this.texture;
                if (geometry.width !== width || geometry.height !== height) {
                    geometry.width = width;
                    geometry.height = height;
                    geometry.updateProjection();
                }
            }
            set texture(e) {
                if (this._texture !== e) {
                    super.texture = e;
                    this.textureUpdated();
                }
            }
            get texture() {
                return this._texture;
            }
            setCorners(e, t, r, n, i, a, o, s) {
                this.geometry.setCorners(e, t, r, n, i, a, o, s);
            }
        };
        uc.defaultOptions = {
            texture: G.Texture.WHITE,
            verticesX: 10,
            verticesY: 10,
            x0: 0,
            y0: 0,
            x1: 100,
            y1: 0,
            x2: 100,
            y2: 100,
            x3: 0,
            y3: 100
        };
        let ud = class e extends r8 {
            constructor(t){
                const { width, points, textureScale } = {
                    ...e.defaultOptions,
                    ...t
                };
                super({
                    positions: new Float32Array(4 * points.length),
                    uvs: new Float32Array(4 * points.length),
                    indices: new Uint32Array((points.length - 1) * 6)
                });
                this.points = points;
                this._width = width;
                this.textureScale = textureScale;
                this._build();
            }
            get width() {
                return this._width;
            }
            _build() {
                let points = this.points;
                if (!points) {
                    return;
                }
                let t = this.getBuffer("aPosition");
                let r = this.getBuffer("aUV");
                let n = this.getIndex();
                if (points.length < 1) {
                    return;
                }
                if (t.data.length / 4 !== points.length) {
                    t.data = new Float32Array(4 * points.length);
                    r.data = new Float32Array(4 * points.length);
                    n.data = new Uint16Array((points.length - 1) * 6);
                }
                let r_data = r.data;
                let n_data = n.data;
                r_data[0] = 0;
                r_data[1] = 0;
                r_data[2] = 0;
                r_data[3] = 1;
                let o = 0;
                let s = points[0];
                let l = this._width * this.textureScale;
                let e_length = points.length;
                for(let t = 0; t < e_length; t++){
                    let r = 4 * t;
                    if (this.textureScale > 0) {
                        let r = s.x - points[t].x;
                        let n = s.y - points[t].y;
                        let i = Math.sqrt(r * r + n * n);
                        s = points[t];
                        o += i / l;
                    } else {
                        o = t / (e_length - 1);
                    }
                    r_data[r] = o;
                    r_data[r + 1] = 0;
                    r_data[r + 2] = o;
                    r_data[r + 3] = 1;
                }
                let c = 0;
                for(let e = 0; e < e_length - 1; e++){
                    let t = 2 * e;
                    n_data[c++] = t;
                    n_data[c++] = t + 1;
                    n_data[c++] = t + 2;
                    n_data[c++] = t + 2;
                    n_data[c++] = t + 1;
                    n_data[c++] = t + 3;
                }
                r.update();
                n.update();
                this.updateVertices();
            }
            updateVertices() {
                let e;
                let points = this.points;
                if (points.length < 1) {
                    return;
                }
                let r = points[0];
                let n = 0;
                let i = 0;
                let data = this.buffers[0].data;
                let t_length = points.length;
                let s = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
                for(let l = 0; l < t_length; l++){
                    let u = points[l];
                    let c = 4 * l;
                    i = -((e = l < points.length - 1 ? points[l + 1] : u).x - r.x);
                    n = e.y - r.y;
                    let d = (1 - l / (t_length - 1)) * 10;
                    if (d > 1) {
                        d = 1;
                    }
                    let h = Math.sqrt(n * n + i * i);
                    if (h < 0.000001) {
                        n = 0;
                        i = 0;
                    } else {
                        n /= h;
                        i /= h;
                        n *= s;
                        i *= s;
                    }
                    data[c] = u.x + n;
                    data[c + 1] = u.y + i;
                    data[c + 2] = u.x - n;
                    data[c + 3] = u.y - i;
                    r = u;
                }
                this.buffers[0].update();
            }
            update() {
                if (this.textureScale > 0) {
                    this._build();
                } else {
                    this.updateVertices();
                }
            }
        };
        ud.defaultOptions = {
            width: 200,
            points: [],
            textureScale: 0
        };
        let uh = class e extends nt {
            constructor(t){
                const { width, texture, points, textureScale, ...rest } = {
                    ...e.defaultOptions,
                    ...t
                };
                const s = new ud(ln.definedProps({
                    width: width ?? texture.height,
                    points,
                    textureScale
                }));
                if (textureScale > 0) {
                    texture.source.style.addressMode = "repeat";
                }
                super(ln.definedProps({
                    ...rest,
                    texture,
                    geometry: s
                }));
                this.autoUpdate = true;
                this.onRender = this._render;
            }
            _render() {
                let geometry = this.geometry;
                if (this.autoUpdate || geometry._width !== this.texture.height) {
                    geometry._width = this.texture.height;
                    geometry.update();
                }
            }
        };
        uh.defaultOptions = {
            textureScale: 0
        };
        var up = e.i(727453);
        var uf = e.i(129249);
        class um {
            execute(e, t) {
                let e_renderer = e.renderer;
                let activeContext = e_renderer.canvasContext.activeContext;
                let t_particleChildren = t.particleChildren;
                let t_texture = t.texture;
                activeContext.save();
                e_renderer.canvasContext.setContextTransform(t.worldTransform, t.roundPixels);
                e_renderer.canvasContext.setBlendMode(t.groupBlendMode);
                let o = (t.groupColorAlpha >>> 24 & 255) / 255 * (e_renderer.filter?.alphaMultiplier ?? 1);
                for(let e = 0; e < t_particleChildren.length; e++){
                    let particleChild = t_particleChildren[e];
                    let r = particleChild.texture || t_texture;
                    if (!r?.source?.resource) {
                        continue;
                    }
                    let s = particleChild.color;
                    let l = (s >>> 24 & 255) / 255 * o;
                    if (l <= 0) {
                        continue;
                    }
                    let u = 16777215 & s;
                    let c = ((255 & u) << 16) + (65280 & u) + (u >> 16 & 255);
                    let d = r.source.resource;
                    if (c !== 16777215) {
                        d = na.canvasUtils.getTintedCanvas({
                            texture: r
                        }, c);
                    }
                    let h = r.frame;
                    let p = r.source.resolution;
                    let f = h.x * p;
                    let m = h.y * p;
                    let g = h.width * p;
                    let b = h.height * p;
                    activeContext.globalAlpha = l;
                    let _ = -particleChild.anchorX * h.width;
                    let x = -particleChild.anchorY * h.height;
                    if (particleChild.rotation !== 0 || particleChild.scaleX !== 1 || particleChild.scaleY !== 1) {
                        activeContext.save();
                        activeContext.translate(particleChild.x, particleChild.y);
                        activeContext.rotate(particleChild.rotation);
                        activeContext.scale(particleChild.scaleX, particleChild.scaleY);
                        activeContext.drawImage(d, f, m, g, b, _, x, h.width, h.height);
                        activeContext.restore();
                    } else {
                        activeContext.drawImage(d, f, m, g, b, particleChild.x + _, particleChild.y + x, h.width, h.height);
                    }
                }
                activeContext.restore();
            }
        }
        var ug = e.i(565557);
        function ub(e, t = null) {
            let r = 6 * e;
            r > 65535 ? t || (t = new Uint32Array(r)) : t || (t = new Uint16Array(r));
            if (t.length !== r) {
                throw Error(`Out buffer length is incorrect, got ${t.length} and expected ${r}`);
            }
            for(let e = 0, n = 0; e < r; e += 6, n += 4){
                t[e + 0] = n + 0;
                t[e + 1] = n + 1;
                t[e + 2] = n + 2;
                t[e + 3] = n + 0;
                t[e + 4] = n + 2;
                t[e + 5] = n + 3;
            }
            return t;
        }
        function u_(e) {
            return {
                dynamicUpdate: ux(e, true),
                staticUpdate: ux(e, false)
            };
        }
        function ux(e, t) {
            let r = [];
            r.push(`

        var index = 0;

        for (let i = 0; i < ps.length; ++i)
        {
            const p = ps[i];

            `);
            let n = 0;
            for(let i in e){
                let a = e[i];
                if (t === a.dynamic) {
                    r.push(`offset = index + ${n}`);
                    r.push(a.code);
                    n += o4.getAttributeInfoFromFormat(a.format).stride / 4;
                }
            }
            r.push(`
            index += stride * 4;
        }
    `);
            r.unshift(`
        var stride = ${n};
    `);
            return Function("ps", "f32v", "u32v", r.join("\n"));
        }
        class uT {
            constructor(e){
                this._size = 0;
                this._generateParticleUpdateCache = {};
                const t = this._size = e.size ?? 1000;
                const r = e.properties;
                let n = 0;
                let i = 0;
                for(const e in r){
                    const t = r[e];
                    const a = o4.getAttributeInfoFromFormat(t.format);
                    if (t.dynamic) {
                        i += a.stride;
                    } else {
                        n += a.stride;
                    }
                }
                this._dynamicStride = i / 4;
                this._staticStride = n / 4;
                this.staticAttributeBuffer = new ug.ViewableBuffer(4 * t * n);
                this.dynamicAttributeBuffer = new ug.ViewableBuffer(4 * t * i);
                this.indexBuffer = ub(t);
                const a = new rQ.Geometry;
                let o = 0;
                let s = 0;
                for(const e in this._staticBuffer = new r0.Buffer({
                    data: new Float32Array(1),
                    label: "static-particle-buffer",
                    shrinkToFit: false,
                    usage: r3.BufferUsage.VERTEX | r3.BufferUsage.COPY_DST
                }), this._dynamicBuffer = new r0.Buffer({
                    data: new Float32Array(1),
                    label: "dynamic-particle-buffer",
                    shrinkToFit: false,
                    usage: r3.BufferUsage.VERTEX | r3.BufferUsage.COPY_DST
                }), r){
                    const t = r[e];
                    const n = o4.getAttributeInfoFromFormat(t.format);
                    if (t.dynamic) {
                        a.addAttribute(t.attributeName, {
                            buffer: this._dynamicBuffer,
                            stride: 4 * this._dynamicStride,
                            offset: 4 * o,
                            format: t.format
                        });
                        o += n.size;
                    } else {
                        a.addAttribute(t.attributeName, {
                            buffer: this._staticBuffer,
                            stride: 4 * this._staticStride,
                            offset: 4 * s,
                            format: t.format
                        });
                        s += n.size;
                    }
                }
                a.addIndex(this.indexBuffer);
                const l = this.getParticleUpdate(r);
                this._dynamicUpload = l.dynamicUpdate;
                this._staticUpload = l.staticUpdate;
                this.geometry = a;
            }
            getParticleUpdate(e) {
                let t = ((e)=>{
                    let t = [];
                    for(let r in e){
                        let n = e[r];
                        t.push(r, n.code, n.dynamic ? "d" : "s");
                    }
                    return t.join("_");
                })(e);
                if (!this._generateParticleUpdateCache[t]) {
                    this._generateParticleUpdateCache[t] = this.generateParticleUpdate(e);
                }
                return this._generateParticleUpdateCache[t];
            }
            generateParticleUpdate(e) {
                return u_(e);
            }
            update(e, t) {
                if (e.length > this._size) {
                    t = true;
                    this._size = Math.max(e.length, 1.5 * this._size | 0);
                    this.staticAttributeBuffer = new ug.ViewableBuffer(this._size * this._staticStride * 16);
                    this.dynamicAttributeBuffer = new ug.ViewableBuffer(this._size * this._dynamicStride * 16);
                    this.indexBuffer = ub(this._size);
                    this.geometry.indexBuffer.setDataWithSize(this.indexBuffer, this.indexBuffer.byteLength, true);
                }
                let dynamicAttributeBuffer = this.dynamicAttributeBuffer;
                this._dynamicUpload(e, dynamicAttributeBuffer.float32View, dynamicAttributeBuffer.uint32View);
                this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View, e.length * this._dynamicStride * 4, true);
                if (t) {
                    let t = this.staticAttributeBuffer;
                    this._staticUpload(e, t.float32View, t.uint32View);
                    this._staticBuffer.setDataWithSize(t.float32View, e.length * this._staticStride * 4, true);
                }
            }
            destroy() {
                this._staticBuffer.destroy();
                this._dynamicBuffer.destroy();
                this.geometry.destroy();
            }
        }
        var uy = ng;
        class uS extends uy.Shader {
            constructor(){
                super({
                    glProgram: A.GlProgram.from({
                        vertex: sV,
                        fragment: sH
                    }),
                    gpuProgram: M.GpuProgram.from({
                        fragment: {
                            source: s$,
                            entryPoint: "mainFragment"
                        },
                        vertex: {
                            source: s$,
                            entryPoint: "mainVertex"
                        }
                    }),
                    resources: {
                        uTexture: G.Texture.WHITE.source,
                        uSampler: new nC.TextureStyle({}),
                        uniforms: {
                            uTranslationMatrix: {
                                value: new tC.Matrix,
                                type: "mat3x3<f32>"
                            },
                            uColor: {
                                value: new eN.Color(16777215),
                                type: "vec4<f32>"
                            },
                            uRound: {
                                value: 1,
                                type: "f32"
                            },
                            uResolution: {
                                value: [
                                    0,
                                    0
                                ],
                                type: "vec2<f32>"
                            }
                        }
                    }
                });
            }
        }
        class uv {
            constructor(e, t){
                this.state = rZ.State.for2d();
                this.localUniforms = new C.UniformGroup({
                    uTranslationMatrix: {
                        value: new tC.Matrix,
                        type: "mat3x3<f32>"
                    },
                    uColor: {
                        value: new Float32Array(4),
                        type: "vec4<f32>"
                    },
                    uRound: {
                        value: 1,
                        type: "f32"
                    },
                    uResolution: {
                        value: [
                            0,
                            0
                        ],
                        type: "vec2<f32>"
                    }
                });
                this.renderer = e;
                this.adaptor = t;
                this.defaultShader = new uS;
                this.state = rZ.State.for2d();
                this._managedContainers = new nh.GCManagedHash({
                    renderer: e,
                    type: "renderable",
                    name: "particleContainer"
                });
            }
            validateRenderable(e) {
                return false;
            }
            addRenderable(e, t) {
                this.renderer.renderPipes.batch.break(t);
                t.add(e);
            }
            getBuffers(e) {
                return e._gpuData[this.renderer.uid] || this._initBuffer(e);
            }
            _initBuffer(e) {
                e._gpuData[this.renderer.uid] = new uT({
                    size: e.particleChildren.length,
                    properties: e._properties
                });
                this._managedContainers.add(e);
                return e._gpuData[this.renderer.uid];
            }
            updateRenderable(e) {}
            execute(e) {
                let e_particleChildren = e.particleChildren;
                if (e_particleChildren.length === 0) {
                    return;
                }
                let renderer = this.renderer;
                let n = this.getBuffers(e);
                if (!e.texture) {
                    e.texture = e_particleChildren[0].texture;
                }
                let state = this.state;
                n.update(e_particleChildren, e._childrenDirty);
                e._childrenDirty = false;
                state.blendMode = r6.getAdjustedBlendModeBlend(e.groupBlendMode, e.texture._source);
                let uniforms = this.localUniforms.uniforms;
                let a_uTranslationMatrix = uniforms.uTranslationMatrix;
                e.worldTransform.copyTo(a_uTranslationMatrix);
                let globalUniformData = renderer.globalUniforms.globalUniformData;
                a_uTranslationMatrix.tx -= globalUniformData.offset.x;
                a_uTranslationMatrix.ty -= globalUniformData.offset.y;
                a_uTranslationMatrix.prepend(globalUniformData.projectionMatrix);
                uniforms.uResolution = globalUniformData.resolution;
                uniforms.uRound = renderer._roundPixels | e._roundPixels;
                r5.color32BitToUniform(e.groupColorAlpha, uniforms.uColor, 0);
                this.adaptor.execute(this, e);
            }
            destroy() {
                this._managedContainers.destroy();
                this.renderer = null;
                if (this.defaultShader) {
                    this.defaultShader.destroy();
                    this.defaultShader = null;
                }
            }
        }
        uv.extension = {
            type: [
                v.ExtensionType.CanvasPipes
            ],
            name: "particle"
        };
        class uR extends uv {
            constructor(e){
                super(e, new um);
            }
        }
        uR.extension = {
            type: [
                v.ExtensionType.CanvasPipes
            ],
            name: "particle"
        };
        class uE {
            execute(e, t) {
                let e_state = e.state;
                let e_renderer = e.renderer;
                let i = t.shader || e.defaultShader;
                i.resources.uTexture = t.texture._source;
                i.resources.uniforms = e.localUniforms;
                let a = e_renderer.gl;
                let o = e.getBuffers(t);
                e_renderer.shader.bind(i);
                e_renderer.state.set(e_state);
                e_renderer.geometry.bind(o.geometry, i.glProgram);
                let s = o.geometry.indexBuffer.data.BYTES_PER_ELEMENT === 2 ? a.UNSIGNED_SHORT : a.UNSIGNED_INT;
                a.drawElements(a.TRIANGLES, 6 * t.particleChildren.length, s, 0);
            }
        }
        class uA extends uv {
            constructor(e){
                super(e, new uE);
            }
        }
        uA.extension = {
            type: [
                v.ExtensionType.WebGLPipes
            ],
            name: "particle"
        };
        class uM {
            execute(e, t) {
                let e_renderer = e.renderer;
                let n = t.shader || e.defaultShader;
                n.groups[0] = e_renderer.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms, true);
                n.groups[1] = e_renderer.texture.getTextureBindGroup(t.texture);
                let e_state = e.state;
                let a = e.getBuffers(t);
                e_renderer.encoder.draw({
                    geometry: a.geometry,
                    shader: t.shader || e.defaultShader,
                    state: e_state,
                    size: 6 * t.particleChildren.length
                });
            }
        }
        class uC extends uv {
            constructor(e){
                super(e, new uM);
            }
        }
        uC.extension = {
            type: [
                v.ExtensionType.WebGPUPipes
            ],
            name: "particle"
        };
        let uG = class e {
            constructor(t){
                if (t instanceof G.Texture) {
                    this.texture = t;
                    le.assignWithIgnore(this, e.defaultOptions, {});
                } else {
                    const r = {
                        ...e.defaultOptions,
                        ...t
                    };
                    le.assignWithIgnore(this, r, {});
                }
            }
            get alpha() {
                return this._alpha;
            }
            set alpha(e) {
                this._alpha = Math.min(Math.max(e, 0), 1);
                this._updateColor();
            }
            get tint() {
                return no.bgr2rgb(this._tint);
            }
            set tint(e) {
                this._tint = eN.Color.shared.setValue(e ?? 16777215).toBgrNumber();
                this._updateColor();
            }
            _updateColor() {
                this.color = this._tint + (255 * this._alpha << 24);
            }
        };
        uG.defaultOptions = {
            anchorX: 0,
            anchorY: 0,
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            tint: 16777215,
            alpha: 1
        };
        var uw = tX;
        let uD = {
            vertex: {
                attributeName: "aVertex",
                format: "float32x2",
                code: `
            const texture = p.texture;
            const sx = p.scaleX;
            const sy = p.scaleY;
            const ax = p.anchorX;
            const ay = p.anchorY;
            const trim = texture.trim;
            const orig = texture.orig;

            if (trim)
            {
                w1 = trim.x - (ax * orig.width);
                w0 = w1 + trim.width;

                h1 = trim.y - (ay * orig.height);
                h0 = h1 + trim.height;
            }
            else
            {
                w1 = -ax * (orig.width);
                w0 = w1 + orig.width;

                h1 = -ay * (orig.height);
                h0 = h1 + orig.height;
            }

            f32v[offset] = w1 * sx;
            f32v[offset + 1] = h1 * sy;

            f32v[offset + stride] = w0 * sx;
            f32v[offset + stride + 1] = h1 * sy;

            f32v[offset + (stride * 2)] = w0 * sx;
            f32v[offset + (stride * 2) + 1] = h0 * sy;

            f32v[offset + (stride * 3)] = w1 * sx;
            f32v[offset + (stride * 3) + 1] = h0 * sy;
        `,
                dynamic: false
            },
            position: {
                attributeName: "aPosition",
                format: "float32x2",
                code: `
            var x = p.x;
            var y = p.y;

            f32v[offset] = x;
            f32v[offset + 1] = y;

            f32v[offset + stride] = x;
            f32v[offset + stride + 1] = y;

            f32v[offset + (stride * 2)] = x;
            f32v[offset + (stride * 2) + 1] = y;

            f32v[offset + (stride * 3)] = x;
            f32v[offset + (stride * 3) + 1] = y;
        `,
                dynamic: true
            },
            rotation: {
                attributeName: "aRotation",
                format: "float32",
                code: `
            var rotation = p.rotation;

            f32v[offset] = rotation;
            f32v[offset + stride] = rotation;
            f32v[offset + (stride * 2)] = rotation;
            f32v[offset + (stride * 3)] = rotation;
        `,
                dynamic: false
            },
            uvs: {
                attributeName: "aUV",
                format: "float32x2",
                code: `
            var uvs = p.texture.uvs;

            f32v[offset] = uvs.x0;
            f32v[offset + 1] = uvs.y0;

            f32v[offset + stride] = uvs.x1;
            f32v[offset + stride + 1] = uvs.y1;

            f32v[offset + (stride * 2)] = uvs.x2;
            f32v[offset + (stride * 2) + 1] = uvs.y2;

            f32v[offset + (stride * 3)] = uvs.x3;
            f32v[offset + (stride * 3) + 1] = uvs.y3;
        `,
                dynamic: false
            },
            color: {
                attributeName: "aColor",
                format: "unorm8x4",
                code: `
            const c = p.color;

            u32v[offset] = c;
            u32v[offset + stride] = c;
            u32v[offset + (stride * 2)] = c;
            u32v[offset + (stride * 3)] = c;
        `,
                dynamic: false
            }
        };
        v.extensions.add(uA);
        v.extensions.add(uC);
        v.extensions.add(uR);
        let uP = new tw.Bounds(0, 0, 0, 0);
        let uO = class e extends uw.ViewContainer {
            constructor(t = {}){
                const { dynamicProperties, shader, roundPixels, texture, particles, ...rest } = t = {
                    ...e.defaultOptions,
                    ...t,
                    dynamicProperties: {
                        ...e.defaultOptions.dynamicProperties,
                        ...t?.dynamicProperties
                    }
                };
                for(const e in super({
                    label: "ParticleContainer",
                    ...rest
                }), this.renderPipeId = "particle", this.batched = false, this._childrenDirty = false, this.texture = texture || null, this.shader = shader, this._properties = {}, uD){
                    const t = uD[e];
                    const dynamic = dynamicProperties[e];
                    this._properties[e] = {
                        ...t,
                        dynamic
                    };
                }
                this.allowChildren = true;
                this.roundPixels = roundPixels ?? false;
                this.particleChildren = particles ?? [];
            }
            addParticle(...e) {
                for(let t = 0; t < e.length; t++){
                    this.particleChildren.push(e[t]);
                }
                this.onViewUpdate();
                return e[0];
            }
            removeParticle(...e) {
                let t = false;
                for(let r = 0; r < e.length; r++){
                    let n = this.particleChildren.indexOf(e[r]);
                    if (n > -1) {
                        this.particleChildren.splice(n, 1);
                        t = true;
                    }
                }
                if (t) {
                    this.onViewUpdate();
                }
                return e[0];
            }
            update() {
                this._childrenDirty = true;
            }
            onViewUpdate() {
                this._childrenDirty = true;
                super.onViewUpdate();
            }
            get bounds() {
                return uP;
            }
            updateBounds() {}
            destroy(e = false) {
                super.destroy(e);
                if (typeof e === "boolean" ? e : e?.texture) {
                    let t = typeof e === "boolean" ? e : e?.textureSource;
                    let r = this.texture ?? this.particleChildren[0]?.texture;
                    if (r) {
                        r.destroy(t);
                    }
                }
                this.texture = null;
                this.shader?.destroy();
            }
            removeParticles(e, t) {
                e ??= 0;
                t ??= this.particleChildren.length;
                let r = this.particleChildren.splice(e, t - e);
                this.onViewUpdate();
                return r;
            }
            removeParticleAt(e) {
                let t = this.particleChildren.splice(e, 1);
                this.onViewUpdate();
                return t[0];
            }
            addParticleAt(e, t) {
                this.particleChildren.splice(t, 0, e);
                this.onViewUpdate();
                return e;
            }
            addChild() {
                throw Error("ParticleContainer.addChild() is not available. Please use ParticleContainer.addParticle()");
            }
            removeChild() {
                throw Error("ParticleContainer.removeChild() is not available. Please use ParticleContainer.removeParticle()");
            }
            removeChildren(e, t) {
                throw Error("ParticleContainer.removeChildren() is not available. Please use ParticleContainer.removeParticles()");
            }
            removeChildAt(e) {
                throw Error("ParticleContainer.removeChildAt() is not available. Please use ParticleContainer.removeParticleAt()");
            }
            getChildAt(e) {
                throw Error("ParticleContainer.getChildAt() is not available. Please use ParticleContainer.getParticleAt()");
            }
            setChildIndex(e, t) {
                throw Error("ParticleContainer.setChildIndex() is not available. Please use ParticleContainer.setParticleIndex()");
            }
            getChildIndex(e) {
                throw Error("ParticleContainer.getChildIndex() is not available. Please use ParticleContainer.getParticleIndex()");
            }
            addChildAt(e, t) {
                throw Error("ParticleContainer.addChildAt() is not available. Please use ParticleContainer.addParticleAt()");
            }
            swapChildren(e, t) {
                throw Error("ParticleContainer.swapChildren() is not available. Please use ParticleContainer.swapParticles()");
            }
            reparentChild() {
                throw Error("ParticleContainer.reparentChild() is not available with the particle container");
            }
            reparentChildAt(e, t) {
                throw Error("ParticleContainer.reparentChildAt() is not available with the particle container");
            }
        };
        uO.defaultOptions = {
            dynamicProperties: {
                vertex: false,
                position: true,
                rotation: false,
                uvs: false,
                color: false
            },
            roundPixels: false
        };
        class uB {
            constructor(e){
                this._renderer = e;
            }
            validateRenderable(e) {
                return false;
            }
            addRenderable(e, t) {
                this._renderer.renderPipes.batch.break(t);
                t.add(e);
            }
            updateRenderable(e) {}
            execute(e) {
                let _renderer = this._renderer;
                let t_canvasContext = _renderer.canvasContext;
                let r_activeContext = t_canvasContext.activeContext;
                r_activeContext.save();
                let e_groupTransform = e.groupTransform;
                let a = _renderer._roundPixels | e._roundPixels;
                t_canvasContext.setContextTransform(e_groupTransform, a === 1);
                t_canvasContext.setBlendMode(e.groupBlendMode);
                let o = _renderer.globalUniforms.globalUniformData?.worldColor ?? 4294967295;
                let e_groupColorAlpha = e.groupColorAlpha;
                let l = (o >>> 24 & 255) / 255 * ((e_groupColorAlpha >>> 24 & 255) / 255) * (_renderer.filter?.alphaMultiplier ?? 1);
                if (l <= 0) {
                    return void r_activeContext.restore();
                }
                r_activeContext.globalAlpha = l;
                let u = no.bgr2rgb(ns.multiplyHexColors(16777215 & e_groupColorAlpha, 16777215 & o));
                let e_texture = e.texture;
                let d = na.canvasUtils.getCanvasSource(e_texture);
                if (!d) {
                    return void r_activeContext.restore();
                }
                let r_smoothProperty = t_canvasContext.smoothProperty;
                let p = e_texture.source.style.scaleMode !== "nearest";
                if (r_activeContext[r_smoothProperty] !== p) {
                    r_activeContext[r_smoothProperty] = p;
                }
                let f = u !== 16777215 || e_texture.rotate !== 0;
                let m = f ? na.canvasUtils.getTintedCanvas({
                    texture: e_texture
                }, u) : d;
                let { leftWidth, topHeight, rightWidth, bottomHeight, width, height } = e;
                let S = leftWidth + rightWidth;
                let v = topHeight + bottomHeight;
                let R = Math.min(S > width ? width / S : 1, v > height ? height / v : 1, 1);
                let E = leftWidth * R;
                let A = rightWidth * R;
                let M = topHeight * R;
                let C = bottomHeight * R;
                let G = Math.max(0, width - E - A);
                let w = Math.max(0, height - M - C);
                let e_anchor = e.anchor;
                let P = e_texture.source._resolution ?? e_texture.source.resolution ?? 1;
                let O = e_texture.frame.x * P;
                let B = e_texture.frame.y * P;
                let F = -e_anchor.x * width;
                let I = -e_anchor.y * height;
                let U = leftWidth * P;
                let L = topHeight * P;
                let N = rightWidth * P;
                let X = bottomHeight * P;
                let k = e_texture.frame.width * P;
                let H = e_texture.frame.height * P;
                if (f) {
                    O = 0;
                    B = 0;
                    k = m.width;
                    H = m.height;
                }
                r_activeContext.drawImage(m, O, B, U, L, F, I, E, M);
                r_activeContext.drawImage(m, O + U, B, k - U - N, L, F + E, I, G, M);
                r_activeContext.drawImage(m, O + k - N, B, N, L, F + width - A, I, A, M);
                r_activeContext.drawImage(m, O, B + L, U, H - L - X, F, I + M, E, w);
                r_activeContext.drawImage(m, O + U, B + L, k - U - N, H - L - X, F + E, I + M, G, w);
                r_activeContext.drawImage(m, O + k - N, B + L, N, H - L - X, F + width - A, I + M, A, w);
                r_activeContext.drawImage(m, O, B + H - X, U, X, F, I + height - C, E, C);
                r_activeContext.drawImage(m, O + U, B + H - X, k - U - N, X, F + E, I + height - C, G, C);
                r_activeContext.drawImage(m, O + k - N, B + H - X, N, X, F + width - A, I + height - C, A, C);
                r_activeContext.restore();
            }
            destroy() {
                this._renderer = null;
            }
        }
        uB.extension = {
            type: [
                v.ExtensionType.CanvasPipes
            ],
            name: "nineSliceSprite"
        };
        let uF = class e extends l7 {
            constructor(t = {}){
                super({
                    width: (t = {
                        ...e.defaultOptions,
                        ...t
                    }).width,
                    height: t.height,
                    verticesX: 4,
                    verticesY: 4
                });
                this._trimX = 0;
                this._trimY = 0;
                this._trimWidth = t.originalWidth ?? e.defaultOptions.originalWidth;
                this._trimHeight = t.originalHeight ?? e.defaultOptions.originalHeight;
                this.update(t);
            }
            update(e) {
                this.width = e.width ?? this.width;
                this.height = e.height ?? this.height;
                this._originalWidth = e.originalWidth ?? this._originalWidth;
                this._originalHeight = e.originalHeight ?? this._originalHeight;
                this._leftWidth = e.leftWidth ?? this._leftWidth;
                this._rightWidth = e.rightWidth ?? this._rightWidth;
                this._topHeight = e.topHeight ?? this._topHeight;
                this._bottomHeight = e.bottomHeight ?? this._bottomHeight;
                this._anchorX = e.anchor?.x;
                this._anchorY = e.anchor?.y;
                if (e.trim !== undefined) {
                    this._trimX = e.trim?.x ?? 0;
                    this._trimY = e.trim?.y ?? 0;
                    this._trimWidth = e.trim?.width ?? this._originalWidth;
                    this._trimHeight = e.trim?.height ?? this._originalHeight;
                } else {
                    this._trimWidth = this._originalWidth;
                    this._trimHeight = this._originalHeight;
                }
                this.updateUvs();
                this.updatePositions();
            }
            updatePositions() {
                let positions = this.positions;
                let { width, height, _leftWidth, _rightWidth, _topHeight, _bottomHeight, _anchorX, _anchorY } = this;
                let u = _leftWidth + _rightWidth;
                let c = _topHeight + _bottomHeight;
                let d = Math.min(width > u ? 1 : width / u, height > c ? 1 : height / c);
                let h = _anchorX * width;
                let p = _anchorY * height;
                positions[0] = positions[8] = positions[16] = positions[24] = -h;
                positions[2] = positions[10] = positions[18] = positions[26] = _leftWidth * d - h;
                positions[4] = positions[12] = positions[20] = positions[28] = width - _rightWidth * d - h;
                positions[6] = positions[14] = positions[22] = positions[30] = width - h;
                positions[1] = positions[3] = positions[5] = positions[7] = -p;
                positions[9] = positions[11] = positions[13] = positions[15] = _topHeight * d - p;
                positions[17] = positions[19] = positions[21] = positions[23] = height - _bottomHeight * d - p;
                positions[25] = positions[27] = positions[29] = positions[31] = height - p;
                this.getBuffer("aPosition").update();
            }
            updateUvs() {
                let uvs = this.uvs;
                let _originalWidth = this._originalWidth;
                let _originalHeight = this._originalHeight;
                let n = this._trimX / _originalWidth;
                let i = this._trimY / _originalHeight;
                let a = (this._trimX + this._trimWidth) / _originalWidth;
                let o = (this._trimY + this._trimHeight) / _originalHeight;
                uvs[0] = uvs[8] = uvs[16] = uvs[24] = n;
                uvs[1] = uvs[3] = uvs[5] = uvs[7] = i;
                uvs[6] = uvs[14] = uvs[22] = uvs[30] = a;
                uvs[25] = uvs[27] = uvs[29] = uvs[31] = o;
                let s = 1 / _originalWidth;
                let l = 1 / _originalHeight;
                uvs[2] = uvs[10] = uvs[18] = uvs[26] = n + s * this._leftWidth;
                uvs[9] = uvs[11] = uvs[13] = uvs[15] = i + l * this._topHeight;
                uvs[4] = uvs[12] = uvs[20] = uvs[28] = a - s * this._rightWidth;
                uvs[17] = uvs[19] = uvs[21] = uvs[23] = o - l * this._bottomHeight;
                this.getBuffer("aUV").update();
            }
        };
        uF.defaultOptions = {
            width: 100,
            height: 100,
            leftWidth: 10,
            topHeight: 10,
            rightWidth: 10,
            bottomHeight: 10,
            originalWidth: 100,
            originalHeight: 100
        };
        var uI = tX;
        class uU extends r7 {
            constructor(){
                super();
                this.geometry = new uF;
            }
            destroy() {
                this.geometry.destroy();
            }
        }
        class uL {
            constructor(e){
                this._renderer = e;
                this._managedSprites = new nh.GCManagedHash({
                    renderer: e,
                    type: "renderable",
                    name: "nineSliceSprite"
                });
            }
            addRenderable(e, t) {
                let r = this._getGpuSprite(e);
                if (e.didViewUpdate) {
                    this._updateBatchableSprite(e, r);
                }
                this._renderer.renderPipes.batch.addToBatch(r, t);
            }
            updateRenderable(e) {
                let t = this._getGpuSprite(e);
                if (e.didViewUpdate) {
                    this._updateBatchableSprite(e, t);
                }
                t._batcher.updateElement(t);
            }
            validateRenderable(e) {
                let t = this._getGpuSprite(e);
                return !t._batcher.checkAndUpdateTexture(t, e._texture);
            }
            _updateBatchableSprite(e, t) {
                t.geometry.update(e);
                t.setTexture(e._texture);
            }
            _getGpuSprite(e) {
                return e._gpuData[this._renderer.uid] || this._initGPUSprite(e);
            }
            _initGPUSprite(e) {
                let t = e._gpuData[this._renderer.uid] = new uU;
                t.renderable = e;
                t.transform = e.groupTransform;
                t.texture = e._texture;
                t.roundPixels = this._renderer._roundPixels | e._roundPixels;
                this._managedSprites.add(e);
                if (!e.didViewUpdate) {
                    this._updateBatchableSprite(e, t);
                }
                return t;
            }
            destroy() {
                this._managedSprites.destroy();
                this._renderer = null;
            }
        }
        uL.extension = {
            type: [
                v.ExtensionType.WebGLPipes,
                v.ExtensionType.WebGPUPipes
            ],
            name: "nineSliceSprite"
        };
        v.extensions.add(uB);
        v.extensions.add(uL);
        let uN = class e extends uI.ViewContainer {
            constructor(t){
                if (t instanceof G.Texture) {
                    t = {
                        texture: t
                    };
                }
                const { width, height, anchor, leftWidth, rightWidth, topHeight, bottomHeight, texture, roundPixels, ...rest } = t;
                super({
                    label: "NineSliceSprite",
                    ...rest
                });
                this.renderPipeId = "nineSliceSprite";
                this.batched = true;
                this._leftWidth = leftWidth ?? texture?.defaultBorders?.left ?? uF.defaultOptions.leftWidth;
                this._topHeight = topHeight ?? texture?.defaultBorders?.top ?? uF.defaultOptions.topHeight;
                this._rightWidth = rightWidth ?? texture?.defaultBorders?.right ?? uF.defaultOptions.rightWidth;
                this._bottomHeight = bottomHeight ?? texture?.defaultBorders?.bottom ?? uF.defaultOptions.bottomHeight;
                this._width = width ?? texture.width ?? uF.defaultOptions.width;
                this._height = height ?? texture.height ?? uF.defaultOptions.height;
                this.allowChildren = false;
                this.texture = texture ?? e.defaultOptions.texture;
                this.roundPixels = roundPixels ?? false;
                this._anchor = new rL.ObservablePoint({
                    _onUpdate: ()=>{
                        this.onViewUpdate();
                    }
                });
                if (anchor) {
                    this.anchor = anchor;
                } else if (this.texture.defaultAnchor) {
                    this.anchor = this.texture.defaultAnchor;
                }
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
                return this._width;
            }
            set width(e) {
                this._width = e;
                this.onViewUpdate();
            }
            get height() {
                return this._height;
            }
            set height(e) {
                this._height = e;
                this.onViewUpdate();
            }
            setSize(e, t) {
                if (typeof e === "object") {
                    t = e.height ?? e.width;
                    e = e.width;
                }
                this._width = e;
                this._height = t ?? e;
                this.onViewUpdate();
            }
            getSize(e) {
                if (!e) {
                    e = {};
                }
                e.width = this._width;
                e.height = this._height;
                return e;
            }
            get leftWidth() {
                return this._leftWidth;
            }
            set leftWidth(e) {
                this._leftWidth = e;
                this.onViewUpdate();
            }
            get topHeight() {
                return this._topHeight;
            }
            set topHeight(e) {
                this._topHeight = e;
                this.onViewUpdate();
            }
            get rightWidth() {
                return this._rightWidth;
            }
            set rightWidth(e) {
                this._rightWidth = e;
                this.onViewUpdate();
            }
            get bottomHeight() {
                return this._bottomHeight;
            }
            set bottomHeight(e) {
                this._bottomHeight = e;
                this.onViewUpdate();
            }
            get texture() {
                return this._texture;
            }
            set texture(e) {
                if (!e) {
                    e = G.Texture.EMPTY;
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
                    this.onViewUpdate();
                }
            }
            get originalWidth() {
                return this._texture.width;
            }
            get originalHeight() {
                return this._texture.height;
            }
            get trim() {
                return this._texture.trim ?? null;
            }
            destroy(e) {
                super.destroy(e);
                if (typeof e === "boolean" ? e : e?.texture) {
                    let t = typeof e === "boolean" ? e : e?.textureSource;
                    this._texture.destroy(t);
                }
                this._texture = null;
            }
            updateBounds() {
                let _bounds = this._bounds;
                let _anchor = this._anchor;
                let _width = this._width;
                let _height = this._height;
                _bounds.minX = -_anchor._x * _width;
                _bounds.maxX = _bounds.minX + _width;
                _bounds.minY = -_anchor._y * _height;
                _bounds.maxY = _bounds.minY + _height;
            }
        };
        uN.defaultOptions = {
            texture: G.Texture.EMPTY
        };
        let uX = uN;
        var uk = e.i(751559);
        var uH = e.i(383361);
        var uV = e.i(847357);
        var u$ = e.i(506758);
        var uq = e.i(725794);
        var uz = e.i(121658);
        var uW = e.i(610606);
        var uY = e.i(952196);
        function uj(e) {
            let { text, style, chars } = e;
            let i = n1.BitmapFontManager.getFont(text, style);
            let a = nL.CanvasTextMetrics.graphemeSegmenter(text);
            let o = n4.getBitmapTextLayout(a, style, i, true);
            let o_scale = o.scale;
            let l = [];
            let u = [];
            let c = [];
            let d = style.lineHeight ? style.lineHeight : i.lineHeight * o_scale;
            let h = 0;
            for (let e of o.lines){
                if (e.chars.length === 0) {
                    continue;
                }
                let t = new r$.Container({
                    label: "line"
                });
                t.y = h;
                c.push(t);
                let a = new r$.Container({
                    label: "word"
                });
                let o = 0;
                for(let c = 0; c < e.chars.length; c++){
                    let d;
                    let char = e.chars[c];
                    if (!char || !i.chars[char]) {
                        continue;
                    }
                    let p = char === " ";
                    let f = c === e.chars.length - 1;
                    if (chars.length > 0) {
                        d = chars.shift();
                        d.text = char;
                        d.style = style;
                        d.label = `char-${char}`;
                        d.x = e.charPositions[c] * o_scale - e.charPositions[o] * o_scale;
                    } else {
                        d = new id({
                            text: char,
                            style,
                            label: `char-${char}`,
                            x: e.charPositions[c] * o_scale - e.charPositions[o] * o_scale
                        });
                    }
                    if (!p) {
                        l.push(d);
                        a.addChild(d);
                    }
                    if ((p || f) && a.children.length > 0) {
                        a.x = e.charPositions[o] * o_scale;
                        u.push(a);
                        t.addChild(a);
                        a = new r$.Container({
                            label: "word"
                        });
                        o = c + 1;
                    }
                }
                h += d;
            }
            return {
                chars: l,
                lines: c,
                words: u
            };
        }
        var uK = e.i(624433);
        var uQ = r$;
        class uZ extends uQ.Container {
            constructor(e){
                const { text, style, autoSplit, lineAnchor, wordAnchor, charAnchor, ...rest } = e;
                super(rest);
                this._dirty = false;
                this._canReuseChars = false;
                this.chars = [];
                this.words = [];
                this.lines = [];
                this._originalText = text;
                this._autoSplit = autoSplit;
                this._lineAnchor = lineAnchor;
                this._wordAnchor = wordAnchor;
                this._charAnchor = charAnchor;
                this.style = style;
            }
            split() {
                let e = this.splitFn();
                this.chars = e.chars;
                this.words = e.words;
                this.lines = e.lines;
                this.addChild(...this.lines);
                this.charAnchor = this._charAnchor;
                this.wordAnchor = this._wordAnchor;
                this.lineAnchor = this._lineAnchor;
                this._dirty = false;
                this._canReuseChars = true;
            }
            get text() {
                return this._originalText;
            }
            set text(e) {
                this._originalText = e;
                this.lines.forEach((e)=>e.destroy({
                        children: true
                    }));
                this.lines.length = 0;
                this.words.length = 0;
                this.chars.length = 0;
                this._canReuseChars = false;
                this.onTextUpdate();
            }
            _setOrigin(e, t, r) {
                let n;
                n = typeof e === "number" ? {
                    x: e,
                    y: e
                } : {
                    x: e.x,
                    y: e.y
                };
                t.forEach((e)=>{
                    let t = e.getLocalBounds();
                    let r = t.minX + t.width * n.x;
                    let i = t.minY + t.height * n.y;
                    e.origin.set(r, i);
                });
                this[r] = e;
            }
            get lineAnchor() {
                return this._lineAnchor;
            }
            set lineAnchor(e) {
                this._setOrigin(e, this.lines, "_lineAnchor");
            }
            get wordAnchor() {
                return this._wordAnchor;
            }
            set wordAnchor(e) {
                this._setOrigin(e, this.words, "_wordAnchor");
            }
            get charAnchor() {
                return this._charAnchor;
            }
            set charAnchor(e) {
                this._setOrigin(e, this.chars, "_charAnchor");
            }
            get style() {
                return this._style;
            }
            set style(e) {
                if (!e) {
                    e = {};
                }
                this._style = new n$.TextStyle(e);
                this.styleChanged();
            }
            styleChanged() {
                this.words.forEach((e)=>e.destroy());
                this.words.length = 0;
                this.lines.forEach((e)=>e.destroy());
                this.lines.length = 0;
                this._canReuseChars = true;
                this.onTextUpdate();
            }
            onTextUpdate() {
                this._dirty = true;
                if (this._autoSplit) {
                    this.split();
                }
            }
            destroy(e) {
                super.destroy(e);
                this.chars = [];
                this.words = [];
                this.lines = [];
                if (typeof e === "boolean" ? e : e?.style) {
                    this._style.destroy(e);
                }
                this._style = null;
                this._originalText = "";
            }
        }
        let uJ = class e extends uZ {
            constructor(t){
                var r;
                const n = {
                    ...e.defaultOptions,
                    ...t
                };
                n.style ?? (n.style = {});
                (r = n.style).fill ?? (r.fill = 16777215);
                super(n);
            }
            static from(t, r) {
                let n = {
                    ...e.defaultOptions,
                    ...r,
                    text: t.text,
                    style: new n$.TextStyle(t.style)
                };
                if (t.style.tagStyles) {
                    n2.warn("[SplitBitmapText] Tag styles are not supported for SplitBitmapText. They will be ignored.");
                    t.style._tagStyles = undefined;
                }
                let i = new e({
                    ...n
                });
                let t_anchor = t.anchor;
                if (t_anchor.x !== 0 || t_anchor.y !== 0) {
                    i.pivot.set(i.width * t_anchor.x, i.height * t_anchor.y);
                }
                return i;
            }
            splitFn() {
                return uj({
                    text: this._originalText,
                    style: this._style,
                    chars: this._canReuseChars ? this.chars : []
                });
            }
        };
        function u0(e, t, r) {
            switch(e){
                case "center":
                    return (r - t) / 2;
                case "right":
                    return r - t;
                default:
                    return 0;
            }
        }
        function u3(e) {
            return e === "\r" || e === "\n" || e === "\r\n";
        }
        uJ.defaultOptions = {
            autoSplit: true,
            lineAnchor: 0,
            wordAnchor: 0,
            charAnchor: 0
        };
        let u2 = /^\s*$/;
        function u1(e) {
            let t;
            let r;
            let n;
            let line;
            let a;
            let o;
            let { text, style, chars } = e;
            let c = nL.CanvasTextMetrics.measureText(text, style);
            if (c.runsByLine && c.runsByLine.length > 0) {
                return ((e, t, r, text_1)=>{
                    let { runsByLine } = e;
                    let t_align = t.align;
                    let o = e.lineWidths.reduce((acc, lineWidth)=>Math.max(acc, lineWidth), 0);
                    let s = 0;
                    let l = 0;
                    if (t.trim) {
                        let { frame, canvasAndContext } = nV.getCanvasAndContext({
                            text: text_1,
                            style: t,
                            resolution: 1
                        });
                        nV.returnCanvasAndContext(canvasAndContext);
                        s = -frame.x;
                        l = -frame.y;
                    }
                    let u = [];
                    let c = [];
                    let d = [];
                    let h = 0;
                    let p = 0;
                    runsByLine.forEach((n, f)=>{
                        let m = new r$.Container({
                            label: `line-${f}`
                        });
                        m.y = h + l;
                        c.push(m);
                        let g = e.lineWidths[f];
                        let b = u0(t_align, g, o);
                        let _ = new r$.Container({
                            label: "word"
                        });
                        for (let e of (_.x = b + s, n)){
                            let t = e.style;
                            let n = t._fill?.fill;
                            let i = t._stroke?.fill;
                            let a = n instanceof lA.FillGradient;
                            let o = i instanceof lA.FillGradient;
                            let l = a || o;
                            let c = a && n.textureSpace === "local" || o && i.textureSpace === "local";
                            let h = nL.CanvasTextMetrics.graphemeSegmenter(e.text);
                            let f = t.clone();
                            f.align = "left";
                            f.wordWrap = false;
                            if (f.trim) {
                                f.trim = false;
                            }
                            f.tagStyles = undefined;
                            f._lineHeight = 0;
                            let g = nL.CanvasTextMetrics._context;
                            g.font = f._fontString;
                            if (nL.CanvasTextMetrics.experimentalLetterSpacingSupported) {
                                g.letterSpacing = "0px";
                                g.textLetterSpacing = "0px";
                            }
                            let x = e.text;
                            let T = g.measureText(x).width;
                            let y = b;
                            let S = T;
                            let v = nL.CanvasTextMetrics.measureFont(f._fontString);
                            let R = t.lineHeight || v.fontSize;
                            let E = c ? {
                                width: S,
                                height: R
                            } : null;
                            for (let e of h){
                                let n = (x = x.slice(e.length)).length > 0 ? g.measureText(x).width : 0;
                                let i = T - n;
                                if ((T = n, !u3(e)) && i !== 0) {
                                    if (e === " ") {
                                        if (_.children.length > 0) {
                                            d.push(_);
                                            m.addChild(_);
                                        }
                                        b += i + t.letterSpacing;
                                        _ = new r$.Container({
                                            label: "word"
                                        });
                                        _.x = b + s;
                                    } else {
                                        let n;
                                        let a = f;
                                        if (l) {
                                            a = f.clone();
                                            if (c) {
                                                a._gradientOffset = {
                                                    x: -(b - y),
                                                    y: 0
                                                };
                                                a._gradientBounds = E;
                                            } else {
                                                a._gradientOffset = {
                                                    x: -(b - y),
                                                    y: 0
                                                };
                                            }
                                        }
                                        if (p < r.length) {
                                            n = r[p++];
                                            n.text = e;
                                            n.style = a;
                                            n.setFromMatrix(tC.Matrix.IDENTITY);
                                            n.x = b - _.x + s;
                                        } else {
                                            n = new n0({
                                                text: e,
                                                style: a,
                                                x: b - _.x + s
                                            });
                                        }
                                        u.push(n);
                                        _.addChild(n);
                                        b += i + t.letterSpacing;
                                    }
                                }
                            }
                        }
                        if (_.children.length > 0) {
                            d.push(_);
                            m.addChild(_);
                        }
                        if (t_align === "justify" && t.wordWrap && f < runsByLine.length - 1) {
                            let e = m.children;
                            let t = e.length - 1;
                            if (t > 0) {
                                let r = (o - g) / t;
                                for(let t = 1; t < e.length; t++){
                                    e[t].x += t * r;
                                }
                            }
                        }
                        let x = e.lineHeights?.[f] ?? e.lineHeight;
                        h += x;
                    });
                    return {
                        chars: u,
                        lines: c,
                        words: d
                    };
                })(c, style, chars, text);
            }
            t = nL.CanvasTextMetrics.graphemeSegmenter(text);
            r = [];
            n = c.lines[0];
            line = "";
            a = [];
            o = 0;
            t.forEach((e)=>{
                let t = u2.test(e);
                let s = u3(e);
                let l = line.length === 0 && t;
                if (!t || s || !l || n && n.startsWith(e)) {
                    if (!s) {
                        line += e;
                    }
                    a.push(e);
                    if (line.length >= n.length) {
                        r.push({
                            line,
                            chars: a
                        });
                        a = [];
                        line = "";
                        o++;
                        n = c.lines[o];
                    }
                }
            });
            let d = r;
            let style_align = style.align;
            let p = c.lineWidths.reduce((acc, lineWidth)=>Math.max(acc, lineWidth), 0);
            let f = style._fill?.fill;
            let m = style._stroke?.fill;
            let g = f instanceof lA.FillGradient;
            let b = m instanceof lA.FillGradient;
            let _ = g || b;
            let x = g && f.textureSpace === "local" || b && m.textureSpace === "local";
            let c_width = c.width;
            let c_height = c.height;
            let S = style.clone();
            S.align = "left";
            let v = 0;
            let R = 0;
            if (S.trim) {
                let { frame, canvasAndContext } = nV.getCanvasAndContext({
                    text,
                    style,
                    resolution: 1
                });
                nV.returnCanvasAndContext(canvasAndContext);
                v = -frame.x;
                R = -frame.y;
                S.trim = false;
            }
            let E = [];
            let A = [];
            let M = [];
            let C = 0;
            let G = 0;
            let w = x ? {
                width: c_width,
                height: c_height
            } : null;
            d.forEach((e, t)=>{
                let r = new r$.Container({
                    label: `line-${t}`
                });
                r.y = C + R;
                A.push(r);
                let n = c.lineWidths[t];
                let i = u0(style_align, n, p);
                let a = new r$.Container({
                    label: "word"
                });
                a.x = i + v;
                let _context = nL.CanvasTextMetrics._context;
                _context.font = S._fontString;
                if (nL.CanvasTextMetrics.experimentalLetterSpacingSupported) {
                    _context.letterSpacing = "0px";
                    _context.textLetterSpacing = "0px";
                }
                let e_line = e.line;
                let width = _context.measureText(e_line).width;
                e.chars.forEach((e)=>{
                    if (u3(e)) {
                        return;
                    }
                    let t = (e_line = e_line.slice(e.length)).length > 0 ? _context.measureText(e_line).width : 0;
                    let n = width - t;
                    width = t;
                    if (n !== 0) {
                        if (e === " ") {
                            if (a.children.length > 0) {
                                M.push(a);
                                r.addChild(a);
                            }
                            i += n + style.letterSpacing;
                            a = new r$.Container({
                                label: "word"
                            });
                            a.x = i + v;
                        } else {
                            let t;
                            let r = S;
                            if (_) {
                                r = S.clone();
                                r._gradientOffset = {
                                    x: -i,
                                    y: -C
                                };
                                if (w) {
                                    r._gradientBounds = w;
                                }
                            }
                            if (G < chars.length) {
                                t = chars[G++];
                                t.text = e;
                                t.style = r;
                                t.setFromMatrix(tC.Matrix.IDENTITY);
                                t.x = i - a.x + v;
                            } else {
                                t = new n0({
                                    text: e,
                                    style: r,
                                    x: i - a.x + v
                                });
                            }
                            E.push(t);
                            a.addChild(t);
                            i += n + style.letterSpacing;
                        }
                    }
                });
                if (a.children.length > 0) {
                    M.push(a);
                    r.addChild(a);
                }
                if (style_align === "justify" && style.wordWrap && t < d.length - 1) {
                    let e = r.children;
                    let t = e.length - 1;
                    if (t > 0) {
                        let r = (p - n) / t;
                        for(let t = 1; t < e.length; t++){
                            e[t].x += t * r;
                        }
                    }
                }
                C += c.lineHeight;
            });
            return {
                chars: E,
                lines: A,
                words: M
            };
        }
        let u8 = class e extends uZ {
            constructor(t){
                super({
                    ...e.defaultOptions,
                    ...t
                });
            }
            static from(t, r) {
                let n = {
                    ...e.defaultOptions,
                    ...r,
                    text: t.text,
                    style: new n$.TextStyle(t.style)
                };
                let i = new e({
                    ...n
                });
                let t_anchor = t.anchor;
                if (t_anchor.x !== 0 || t_anchor.y !== 0) {
                    i.pivot.set(i.width * t_anchor.x, i.height * t_anchor.y);
                }
                return i;
            }
            splitFn() {
                return u1({
                    text: this._originalText,
                    style: this._style,
                    chars: this._canReuseChars ? this.chars : []
                });
            }
        };
        u8.defaultOptions = {
            autoSplit: true,
            lineAnchor: 0,
            wordAnchor: 0,
            charAnchor: 0
        };
        var u4 = e.i(841940);
        var u6 = e.i(473471);
        var u5 = e.i(742495);
        var u7 = e.i(926766);
        let u9 = [
            "align",
            "breakWords",
            "cssOverrides",
            "fontVariant",
            "fontWeight",
            "leading",
            "letterSpacing",
            "lineHeight",
            "padding",
            "textBaseline",
            "trim",
            "whiteSpace",
            "wordWrap",
            "wordWrapWidth",
            "fontFamily",
            "fontStyle",
            "fontSize"
        ];
        function ce(e, t, r) {
            if (e) {
                t[r++] = e.color;
                t[r++] = e.alpha;
                t[r++] = e.fill?.styleKey;
            }
            return r;
        }
        var ct = e.i(707676);
        var cr = e.i(392695);
        var cn = e.i(724923);
        var ci = e.i(298948);
        var ca = e.i(688073);
        var co = e.i(737880);
        var cs = e.i(176684);
        var cl = e.i(287358);
        var cu = e.i(113281);
        var cc = e.i(463337);
        async function cd(e, t, r = 200) {
            let n = await t.extract.base64(e);
            if (t.type !== rc.RendererType.CANVAS) {
                await t.encoder.commandFinished;
            }
            console.log(`logging texture ${e.source.width}px ${e.source.height}px`);
            console.log("%c ", `font-size: 1px; padding: ${r}px 300px; background: url(${n}) no-repeat; background-size: contain;`);
        }
        let ch = [
            "#000080",
            "#228B22",
            "#8B0000",
            "#4169E1",
            "#008080",
            "#800000",
            "#9400D3",
            "#FF8C00",
            "#556B2F",
            "#8B008B"
        ];
        let cp = 0;
        var cf = e.i(506721);
        var cm = e.i(5321);
        var cg = e.i(609932);
        var cb = e.i(808662);
        var c_ = e.i(800476);
        var cx = e.i(456659);
        e.s([
            "AbstractBitmapFont",
            ()=>uH.AbstractBitmapFont,
            "AbstractBitmapTextPipe",
            0,
            n5,
            "AbstractRenderer",
            ()=>sp.AbstractRenderer,
            "AbstractSplitText",
            0,
            uZ,
            "AbstractText",
            0,
            nw,
            "AbstractTextSystem",
            0,
            nQ,
            "AccessibilitySystem",
            ()=>R.AccessibilitySystem,
            "AlphaFilter",
            0,
            rl,
            "AlphaMask",
            ()=>i7.AlphaMask,
            "AlphaMaskPipe",
            ()=>i9.AlphaMaskPipe,
            "AnimatedSprite",
            ()=>nr.AnimatedSprite,
            "Application",
            ()=>ea.Application,
            "ApplicationInitHook",
            ()=>cc.ApplicationInitHook,
            "Assets",
            ()=>el.Assets,
            "AssetsClass",
            ()=>el.AssetsClass,
            "BLEND_TO_NPM",
            ()=>sh.BLEND_TO_NPM,
            "BREAKING_SPACES",
            ()=>u5.BREAKING_SPACES,
            "BREAKING_SPACES_SET",
            ()=>u5.BREAKING_SPACES_SET,
            "BREAK_AFTER_CHARS",
            ()=>u5.BREAK_AFTER_CHARS,
            "BREAK_AFTER_CHARS_SET",
            ()=>u5.BREAK_AFTER_CHARS_SET,
            "BUFFER_TYPE",
            ()=>a_.BUFFER_TYPE,
            "BackgroundLoader",
            ()=>eu.BackgroundLoader,
            "BackgroundSystem",
            ()=>oY.BackgroundSystem,
            "Batch",
            ()=>iW.Batch,
            "BatchGeometry",
            ()=>ij.BatchGeometry,
            "BatchTextureArray",
            ()=>iK.BatchTextureArray,
            "BatchableGraphics",
            ()=>lp.BatchableGraphics,
            "BatchableHTMLText",
            0,
            iE,
            "BatchableMesh",
            0,
            r7,
            "BatchableSprite",
            ()=>nW.BatchableSprite,
            "BatchableText",
            0,
            nY,
            "Batcher",
            ()=>iW.Batcher,
            "BatcherPipe",
            ()=>iY.BatcherPipe,
            "BigPool",
            ()=>iC.BigPool,
            "BindGroup",
            ()=>r4.BindGroup,
            "BindGroupSystem",
            ()=>op.BindGroupSystem,
            "BitmapFont",
            ()=>uW.BitmapFont,
            "BitmapFontManager",
            ()=>n1.BitmapFontManager,
            "BitmapText",
            0,
            id,
            "BitmapTextGraphics",
            0,
            n6,
            "BitmapTextPipe",
            0,
            ic,
            "BlendModeFilter",
            0,
            B,
            "BlendModePipe",
            ()=>oj.BlendModePipe,
            "BlurFilter",
            0,
            ry,
            "BlurFilterPass",
            0,
            rT,
            "Bounds",
            ()=>tw.Bounds,
            "BrowserAdapter",
            ()=>t$.BrowserAdapter,
            "Buffer",
            ()=>r0.Buffer,
            "BufferImageSource",
            ()=>sC.BufferImageSource,
            "BufferResource",
            ()=>oK.BufferResource,
            "BufferUsage",
            ()=>r3.BufferUsage,
            "CLEAR",
            ()=>ay.CLEAR,
            "COLLAPSIBLE_SPACES",
            ()=>u5.COLLAPSIBLE_SPACES,
            "COLLAPSIBLE_SPACES_SET",
            ()=>u5.COLLAPSIBLE_SPACES_SET,
            "Cache",
            ()=>ec.Cache,
            "CanvasBatchAdaptor",
            ()=>ik.CanvasBatchAdaptor,
            "CanvasBitmapTextPipe",
            0,
            n9,
            "CanvasColorMaskPipe",
            ()=>ae.CanvasColorMaskPipe,
            "CanvasContextSystem",
            ()=>ac.CanvasContextSystem,
            "CanvasFilterSystem",
            ()=>ro.CanvasFilterSystem,
            "CanvasGraphicsAdaptor",
            ()=>ll.CanvasGraphicsAdaptor,
            "CanvasGraphicsContextSystem",
            ()=>lu.CanvasGraphicsContextSystem,
            "CanvasGraphicsPipe",
            ()=>lc.CanvasGraphicsPipe,
            "CanvasLimitsSystem",
            ()=>ad.CanvasLimitsSystem,
            "CanvasNineSliceSpritePipe",
            0,
            uB,
            "CanvasObserver",
            ()=>tL.CanvasObserver,
            "CanvasParticleContainerAdaptor",
            0,
            um,
            "CanvasParticleContainerPipe",
            0,
            uR,
            "CanvasPool",
            ()=>nP.CanvasPool,
            "CanvasPoolClass",
            ()=>nP.CanvasPoolClass,
            "CanvasRenderTargetAdaptor",
            ()=>ap.CanvasRenderTargetAdaptor,
            "CanvasRenderTargetSystem",
            ()=>af.CanvasRenderTargetSystem,
            "CanvasRenderer",
            ()=>ah.CanvasRenderer,
            "CanvasRendererTextSystem",
            0,
            nZ,
            "CanvasSource",
            ()=>sG.CanvasSource,
            "CanvasStencilMaskPipe",
            ()=>ao.CanvasStencilMaskPipe,
            "CanvasTextGenerator",
            0,
            nV,
            "CanvasTextMetrics",
            ()=>nL.CanvasTextMetrics,
            "CanvasTextPipe",
            0,
            nj,
            "CanvasTextSystem",
            0,
            nJ,
            "CanvasTextureSystem",
            ()=>am.CanvasTextureSystem,
            "CanvasTilingSpritePipe",
            0,
            nd,
            "Circle",
            ()=>rX.Circle,
            "Color",
            ()=>eN.Color,
            "ColorBlend",
            0,
            L,
            "ColorBurnBlend",
            0,
            N,
            "ColorDodgeBlend",
            0,
            X,
            "ColorMask",
            ()=>at.ColorMask,
            "ColorMaskPipe",
            ()=>ar.ColorMaskPipe,
            "ColorMatrixFilter",
            0,
            rv,
            "CompressedSource",
            0,
            e$,
            "Container",
            ()=>r$.Container,
            "CubeTexture",
            0,
            sE,
            "CubeTextureSource",
            0,
            sv,
            "Culler",
            0,
            tF,
            "CullerPlugin",
            0,
            tI,
            "CustomRenderPipe",
            ()=>s8.CustomRenderPipe,
            "D3D10_RESOURCE_DIMENSION",
            0,
            D3D10_RESOURCE_DIMENSION,
            "D3DFMT",
            0,
            D3DFMT,
            "DATA_URI",
            ()=>cs.DATA_URI,
            "DDS",
            0,
            tt,
            "DEG_TO_RAD",
            ()=>rF.DEG_TO_RAD,
            "DEPRECATED_SCALE_MODES",
            0,
            s_,
            "DEPRECATED_WRAP_MODES",
            0,
            sg,
            "DOMAdapter",
            ()=>eq.DOMAdapter,
            "DOMContainer",
            0,
            tk,
            "DOMPipe",
            ()=>tH.DOMPipe,
            "DRAW_MODES",
            0,
            o2,
            "DXGI_FORMAT",
            0,
            DXGI_FORMAT,
            "DXGI_TO_TEXTURE_FORMAT",
            0,
            te,
            "DarkenBlend",
            0,
            k,
            "DefaultBatcher",
            ()=>iQ.DefaultBatcher,
            "DefaultShader",
            ()=>iZ.DefaultShader,
            "DifferenceBlend",
            0,
            H,
            "DisplacementFilter",
            0,
            rA,
            "DivideBlend",
            0,
            V,
            "DynamicBitmapFont",
            ()=>uY.DynamicBitmapFont,
            "Ellipse",
            ()=>rk.Ellipse,
            "EventBoundary",
            ()=>tz.EventBoundary,
            "EventEmitter",
            ()=>sT.default,
            "EventSystem",
            ()=>tW.EventSystem,
            "EventsTicker",
            ()=>tY.EventsTicker,
            "ExclusionBlend",
            0,
            $,
            "ExtensionType",
            ()=>v.ExtensionType,
            "ExternalSource",
            0,
            sO,
            "ExtractSystem",
            ()=>oZ.ExtractSystem,
            "FOURCC_TO_TEXTURE_FORMAT",
            0,
            e9,
            "FederatedContainer",
            ()=>tK.FederatedContainer,
            "FederatedEvent",
            ()=>tj.FederatedEvent,
            "FederatedMouseEvent",
            ()=>tQ.FederatedMouseEvent,
            "FederatedPointerEvent",
            ()=>tZ.FederatedPointerEvent,
            "FederatedWheelEvent",
            ()=>tJ.FederatedWheelEvent,
            "FillGradient",
            ()=>lA.FillGradient,
            "FillPattern",
            ()=>lM.FillPattern,
            "Filter",
            ()=>w.Filter,
            "FilterEffect",
            ()=>rw.FilterEffect,
            "FilterPipe",
            ()=>rD.FilterPipe,
            "FilterSystem",
            ()=>rP.FilterSystem,
            "FontStylePromiseCache",
            0,
            iP,
            "GAUSSIAN_VALUES",
            0,
            rf,
            "GCManagedHash",
            ()=>nh.GCManagedHash,
            "GCSystem",
            ()=>o0.GCSystem,
            "GL_FORMATS",
            ()=>a7.GL_FORMATS,
            "GL_INTERNAL_FORMAT",
            0,
            ta,
            "GL_TARGETS",
            ()=>a7.GL_TARGETS,
            "GL_TYPES",
            ()=>a7.GL_TYPES,
            "GL_WRAP_MODES",
            ()=>a7.GL_WRAP_MODES,
            "GPUTextureGpuData",
            ()=>oX.GPUTextureGpuData,
            "GenerateTextureSystem",
            ()=>oJ.GenerateTextureSystem,
            "Geometry",
            ()=>rQ.Geometry,
            "GlBackBufferSystem",
            ()=>aE.GlBackBufferSystem,
            "GlBatchAdaptor",
            ()=>iH.GlBatchAdaptor,
            "GlBuffer",
            ()=>ax.GlBuffer,
            "GlBufferSystem",
            ()=>aT.GlBufferSystem,
            "GlColorMaskSystem",
            ()=>aA.GlColorMaskSystem,
            "GlContextSystem",
            ()=>aS.GlContextSystem,
            "GlEncoderSystem",
            ()=>aM.GlEncoderSystem,
            "GlGeometryGpuData",
            ()=>av.GlGeometryGpuData,
            "GlGeometrySystem",
            ()=>av.GlGeometrySystem,
            "GlGraphicsAdaptor",
            ()=>ld.GlGraphicsAdaptor,
            "GlLimitsSystem",
            ()=>aC.GlLimitsSystem,
            "GlMeshAdaptor",
            ()=>up.GlMeshAdaptor,
            "GlParticleContainerAdaptor",
            0,
            uE,
            "GlParticleContainerPipe",
            0,
            uA,
            "GlProgram",
            ()=>A.GlProgram,
            "GlProgramData",
            ()=>aF.GlProgramData,
            "GlRenderTarget",
            ()=>aG.GlRenderTarget,
            "GlRenderTargetAdaptor",
            ()=>aP.GlRenderTargetAdaptor,
            "GlRenderTargetSystem",
            ()=>aO.GlRenderTargetSystem,
            "GlShaderSystem",
            ()=>aI.GlShaderSystem,
            "GlStateSystem",
            ()=>a6.GlStateSystem,
            "GlStencilSystem",
            ()=>aw.GlStencilSystem,
            "GlTexture",
            ()=>a9.GlTexture,
            "GlTextureSystem",
            ()=>oe.GlTextureSystem,
            "GlUboSystem",
            ()=>aD.GlUboSystem,
            "GlUniformGroupSystem",
            ()=>aU.GlUniformGroupSystem,
            "GlobalResourceRegistry",
            ()=>cg.GlobalResourceRegistry,
            "GlobalUniformSystem",
            ()=>o9.GlobalUniformSystem,
            "GpuBatchAdaptor",
            ()=>iz.GpuBatchAdaptor,
            "GpuBlendModesToPixi",
            ()=>oU.GpuBlendModesToPixi,
            "GpuBufferData",
            ()=>of.GpuBufferData,
            "GpuBufferSystem",
            ()=>of.GpuBufferSystem,
            "GpuColorMaskSystem",
            ()=>og.GpuColorMaskSystem,
            "GpuDeviceSystem",
            ()=>ob.GpuDeviceSystem,
            "GpuEncoderSystem",
            ()=>o_.GpuEncoderSystem,
            "GpuGraphicsAdaptor",
            ()=>lh.GpuGraphicsAdaptor,
            "GpuGraphicsContext",
            ()=>lC.GpuGraphicsContext,
            "GpuLimitsSystem",
            ()=>ox.GpuLimitsSystem,
            "GpuMeshAdapter",
            ()=>uf.GpuMeshAdapter,
            "GpuMipmapGenerator",
            ()=>oz.GpuMipmapGenerator,
            "GpuParticleContainerAdaptor",
            0,
            uM,
            "GpuParticleContainerPipe",
            0,
            uC,
            "GpuProgram",
            ()=>M.GpuProgram,
            "GpuRenderTarget",
            ()=>oE.GpuRenderTarget,
            "GpuRenderTargetAdaptor",
            ()=>oA.GpuRenderTargetAdaptor,
            "GpuRenderTargetSystem",
            ()=>oM.GpuRenderTargetSystem,
            "GpuShaderSystem",
            ()=>oC.GpuShaderSystem,
            "GpuStateSystem",
            ()=>oL.GpuStateSystem,
            "GpuStencilModesToPixi",
            ()=>oN.GpuStencilModesToPixi,
            "GpuStencilSystem",
            ()=>oT.GpuStencilSystem,
            "GpuTextureSystem",
            ()=>oX.GpuTextureSystem,
            "GpuUboSystem",
            ()=>oy.GpuUboSystem,
            "GpuUniformBatchPipe",
            ()=>oS.GpuUniformBatchPipe,
            "Graphics",
            ()=>rj.Graphics,
            "GraphicsContext",
            ()=>rK.GraphicsContext,
            "GraphicsContextRenderData",
            ()=>lC.GraphicsContextRenderData,
            "GraphicsContextSystem",
            ()=>lC.GraphicsContextSystem,
            "GraphicsGpuData",
            ()=>lG.GraphicsGpuData,
            "GraphicsPath",
            ()=>lw.GraphicsPath,
            "GraphicsPipe",
            ()=>lG.GraphicsPipe,
            "HTMLText",
            0,
            iL,
            "HTMLTextPipe",
            0,
            iA,
            "HTMLTextRenderData",
            0,
            iS,
            "HTMLTextStyle",
            0,
            ix,
            "HTMLTextSystem",
            0,
            iU,
            "HardLightBlend",
            0,
            q,
            "HardMixBlend",
            0,
            z,
            "HelloSystem",
            ()=>sd.HelloSystem,
            "IGLUniformData",
            ()=>aF.IGLUniformData,
            "ImageSource",
            ()=>sB.ImageSource,
            "InstructionSet",
            ()=>o7.InstructionSet,
            "KTX",
            0,
            tl,
            "LightenBlend",
            0,
            W,
            "LinearBurnBlend",
            0,
            Y,
            "LinearDodgeBlend",
            0,
            j,
            "LinearLightBlend",
            0,
            K,
            "Loader",
            ()=>eT.Loader,
            "LoaderParserPriority",
            ()=>ey.LoaderParserPriority,
            "LuminosityBlend",
            0,
            Q,
            "MaskEffectManager",
            ()=>an.MaskEffectManager,
            "MaskEffectManagerClass",
            ()=>an.MaskEffectManagerClass,
            "MaskFilter",
            ()=>rO.MaskFilter,
            "Matrix",
            ()=>tC.Matrix,
            "Mesh",
            0,
            nt,
            "MeshGeometry",
            0,
            r8,
            "MeshGpuData",
            0,
            r9,
            "MeshPipe",
            0,
            ne,
            "MeshPlane",
            0,
            class extends nt {
                constructor(e){
                    const { texture, verticesX, verticesY, ...rest } = e;
                    const a = new l7(ln.definedProps({
                        width: texture.width,
                        height: texture.height,
                        verticesX,
                        verticesY
                    }));
                    super(ln.definedProps({
                        ...rest,
                        geometry: a,
                        texture
                    }));
                    this.texture = texture;
                    this.autoResize = true;
                }
                textureUpdated() {
                    let geometry = this.geometry;
                    let { width, height } = this.texture;
                    if (this.autoResize && (geometry.width !== width || geometry.height !== height)) {
                        geometry.width = width;
                        geometry.height = height;
                        geometry.build({});
                    }
                }
                set texture(e) {
                    this._texture?.off("update", this.textureUpdated, this);
                    super.texture = e;
                    e.on("update", this.textureUpdated, this);
                    this.textureUpdated();
                }
                get texture() {
                    return this._texture;
                }
                destroy(e) {
                    this.texture.off("update", this.textureUpdated, this);
                    super.destroy(e);
                }
            },
            "MeshRope",
            0,
            uh,
            "MeshSimple",
            0,
            class extends nt {
                constructor(e){
                    const { texture, vertices, uvs, indices, topology, ...rest } = e;
                    const s = new r8(ln.definedProps({
                        positions: vertices,
                        uvs,
                        indices,
                        topology
                    }));
                    super(ln.definedProps({
                        ...rest,
                        texture,
                        geometry: s
                    }));
                    this.autoUpdate = true;
                    this.onRender = this._render;
                }
                get vertices() {
                    return this.geometry.getBuffer("aPosition").data;
                }
                set vertices(e) {
                    this.geometry.getBuffer("aPosition").data = e;
                }
                _render() {
                    if (this.autoUpdate) {
                        this.geometry.getBuffer("aPosition").update();
                    }
                }
            },
            "NEWLINES",
            ()=>u5.NEWLINES,
            "NEWLINES_SET",
            ()=>u5.NEWLINES_SET,
            "NEWLINE_MATCH_REGEX",
            ()=>u5.NEWLINE_MATCH_REGEX,
            "NEWLINE_SPLIT_REGEX",
            ()=>u5.NEWLINE_SPLIT_REGEX,
            "NOOP",
            ()=>cf.NOOP,
            "NegationBlend",
            0,
            Z,
            "NineSliceGeometry",
            0,
            uF,
            "NineSlicePlane",
            0,
            class extends uX {
                constructor(...e){
                    let t = e[0];
                    if (t instanceof G.Texture) {
                        rd.deprecation(rd.v8_0_0, "NineSlicePlane now uses the options object {texture, leftWidth, rightWidth, topHeight, bottomHeight}");
                        t = {
                            texture: t,
                            leftWidth: e[1],
                            topHeight: e[2],
                            rightWidth: e[3],
                            bottomHeight: e[4]
                        };
                    }
                    rd.deprecation(rd.v8_0_0, "NineSlicePlane is deprecated. Use NineSliceSprite instead.");
                    super(t);
                }
            },
            "NineSliceSprite",
            0,
            uX,
            "NineSliceSpriteGpuData",
            0,
            uU,
            "NineSliceSpritePipe",
            0,
            uL,
            "NoiseFilter",
            0,
            rC,
            "ObservablePoint",
            ()=>rL.ObservablePoint,
            "OverlayBlend",
            0,
            J,
            "PI_2",
            ()=>rF.PI_2,
            "Particle",
            0,
            uG,
            "ParticleBuffer",
            0,
            uT,
            "ParticleContainer",
            0,
            uO,
            "ParticleContainerPipe",
            0,
            uv,
            "ParticleShader",
            0,
            uS,
            "PassthroughFilter",
            ()=>rG.PassthroughFilter,
            "PerspectiveMesh",
            0,
            uc,
            "PerspectivePlaneGeometry",
            0,
            uu,
            "PinLightBlend",
            0,
            ee,
            "PipelineSystem",
            ()=>ov.PipelineSystem,
            "PlaneGeometry",
            0,
            l7,
            "Point",
            ()=>tN.Point,
            "Polygon",
            ()=>rH.Polygon,
            "Pool",
            ()=>cb.Pool,
            "PoolGroupClass",
            ()=>iC.PoolGroupClass,
            "PrepareBase",
            0,
            rY,
            "PrepareQueue",
            0,
            n3,
            "PrepareSystem",
            0,
            iX,
            "PrepareUpload",
            0,
            iN,
            "QuadGeometry",
            0,
            nT,
            "RAD_TO_DEG",
            ()=>rF.RAD_TO_DEG,
            "Rectangle",
            ()=>tG.Rectangle,
            "RenderContainer",
            0,
            s6,
            "RenderGroup",
            ()=>s5.RenderGroup,
            "RenderGroupPipe",
            ()=>s7.RenderGroupPipe,
            "RenderGroupSystem",
            ()=>s9.RenderGroupSystem,
            "RenderLayer",
            0,
            l6,
            "RenderTarget",
            ()=>st.RenderTarget,
            "RenderTargetSystem",
            ()=>sr.RenderTargetSystem,
            "RenderTexture",
            ()=>sM.RenderTexture,
            "RenderableGCSystem",
            ()=>sA.RenderableGCSystem,
            "RendererInitHook",
            ()=>cc.RendererInitHook,
            "RendererType",
            ()=>rc.RendererType,
            "ResizePlugin",
            ()=>eo.ResizePlugin,
            "Resolver",
            ()=>eP.Resolver,
            "RopeGeometry",
            0,
            ud,
            "RoundedRectangle",
            ()=>rV.RoundedRectangle,
            "SCALE_MODES",
            0,
            sx,
            "STENCIL_MODES",
            ()=>sh.STENCIL_MODES,
            "SVGDefsCollector",
            0,
            lO,
            "SVGParser",
            ()=>lj.SVGParser,
            "SaturationBlend",
            0,
            et,
            "SchedulerSystem",
            ()=>sn.SchedulerSystem,
            "ScissorMask",
            0,
            class {
                constructor(e){
                    this.priority = 0;
                    this.pipe = "scissorMask";
                    this.mask = e;
                    this.mask.renderable = false;
                    this.mask.measurable = false;
                }
                addBounds(e, t) {
                    ai.addMaskBounds(this.mask, e, t);
                }
                addLocalBounds(e, t) {
                    aa.addMaskLocalBounds(this.mask, e, t);
                }
                containsPoint(e, t) {
                    return t(this.mask, e);
                }
                reset() {
                    if (this.mask !== null) {
                        this.mask.measurable = true;
                        this.mask = null;
                    }
                }
                destroy() {
                    this.reset();
                }
            },
            "SdfShader",
            0,
            iu,
            "Shader",
            ()=>ng.Shader,
            "ShaderStage",
            ()=>si.ShaderStage,
            "ShapePath",
            ()=>lP.ShapePath,
            "SharedRenderPipes",
            ()=>sf.SharedRenderPipes,
            "SharedSystems",
            ()=>sf.SharedSystems,
            "SoftLightBlend",
            0,
            er,
            "SplitBitmapText",
            0,
            uJ,
            "SplitText",
            0,
            u8,
            "Sprite",
            ()=>rR.Sprite,
            "SpritePipe",
            ()=>uk.SpritePipe,
            "Spritesheet",
            ()=>ct.Spritesheet,
            "State",
            ()=>rZ.State,
            "StencilMask",
            ()=>as.StencilMask,
            "StencilMaskPipe",
            ()=>al.StencilMaskPipe,
            "SubtractBlend",
            0,
            en,
            "SystemRunner",
            ()=>sm.SystemRunner,
            "TEXTURE_FORMAT_BLOCK_SIZE",
            0,
            tr,
            "Text",
            0,
            n0,
            "TextStyle",
            ()=>n$.TextStyle,
            "Texture",
            ()=>G.Texture,
            "TextureGCSystem",
            ()=>sI.TextureGCSystem,
            "TextureMatrix",
            ()=>sU.TextureMatrix,
            "TexturePool",
            ()=>ru.TexturePool,
            "TexturePoolClass",
            ()=>ru.TexturePoolClass,
            "TextureSource",
            ()=>eV.TextureSource,
            "TextureStyle",
            ()=>nC.TextureStyle,
            "TextureUvs",
            0,
            class {
                constructor(){
                    this.x0 = 0;
                    this.y0 = 0;
                    this.x1 = 1;
                    this.y1 = 0;
                    this.x2 = 1;
                    this.y2 = 1;
                    this.x3 = 0;
                    this.y3 = 1;
                    this.uvsFloat32 = new Float32Array(8);
                }
                set(e, t, r) {
                    let t_width = t.width;
                    let t_height = t.height;
                    if (r) {
                        let t = e.width / 2 / t_width;
                        let a = e.height / 2 / t_height;
                        let o = e.x / t_width + t;
                        let s = e.y / t_height + a;
                        r = rB.groupD8.add(r, rB.groupD8.NW);
                        this.x0 = o + t * rB.groupD8.uX(r);
                        this.y0 = s + a * rB.groupD8.uY(r);
                        r = rB.groupD8.add(r, 2);
                        this.x1 = o + t * rB.groupD8.uX(r);
                        this.y1 = s + a * rB.groupD8.uY(r);
                        r = rB.groupD8.add(r, 2);
                        this.x2 = o + t * rB.groupD8.uX(r);
                        this.y2 = s + a * rB.groupD8.uY(r);
                        r = rB.groupD8.add(r, 2);
                        this.x3 = o + t * rB.groupD8.uX(r);
                        this.y3 = s + a * rB.groupD8.uY(r);
                    } else {
                        this.x0 = e.x / t_width;
                        this.y0 = e.y / t_height;
                        this.x1 = (e.x + e.width) / t_width;
                        this.y1 = e.y / t_height;
                        this.x2 = (e.x + e.width) / t_width;
                        this.y2 = (e.y + e.height) / t_height;
                        this.x3 = e.x / t_width;
                        this.y3 = (e.y + e.height) / t_height;
                    }
                    this.uvsFloat32[0] = this.x0;
                    this.uvsFloat32[1] = this.y0;
                    this.uvsFloat32[2] = this.x1;
                    this.uvsFloat32[3] = this.y1;
                    this.uvsFloat32[4] = this.x2;
                    this.uvsFloat32[5] = this.y2;
                    this.uvsFloat32[6] = this.x3;
                    this.uvsFloat32[7] = this.y3;
                }
                toString() {
                    return `[pixi.js/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
                }
            },
            "Ticker",
            ()=>rz.Ticker,
            "TickerListener",
            ()=>cn.TickerListener,
            "TickerPlugin",
            ()=>es.TickerPlugin,
            "TilingSprite",
            0,
            nM,
            "TilingSpriteGpuData",
            0,
            nE,
            "TilingSpritePipe",
            0,
            nA,
            "TilingSpriteShader",
            0,
            nx,
            "Transform",
            0,
            nn,
            "Triangle",
            0,
            class e {
                constructor(e = 0, t = 0, r = 0, n = 0, i = 0, a = 0){
                    this.type = "triangle";
                    this.x = e;
                    this.y = t;
                    this.x2 = r;
                    this.y2 = n;
                    this.x3 = i;
                    this.y3 = a;
                }
                contains(e, t) {
                    let r = (this.x - this.x3) * (t - this.y3) - (this.y - this.y3) * (e - this.x3);
                    let n = (this.x2 - this.x) * (t - this.y) - (this.y2 - this.y) * (e - this.x);
                    if (r < 0 != n < 0 && r !== 0 && n !== 0) {
                        return false;
                    }
                    let i = (this.x3 - this.x2) * (t - this.y2) - (this.y3 - this.y2) * (e - this.x2);
                    return i === 0 || i < 0 == r + n <= 0;
                }
                strokeContains(e, t, r, n = 0.5) {
                    let i = r / 2;
                    let a = i * i;
                    let { x, x2, x3, y, y2, y3 } = this;
                    return !!(rU.squaredDistanceToLineSegment(e, t, x, y, x2, y3) <= a || rU.squaredDistanceToLineSegment(e, t, x2, y2, x3, y3) <= a || rU.squaredDistanceToLineSegment(e, t, x3, y3, x, y) <= a);
                }
                clone() {
                    return new e(this.x, this.y, this.x2, this.y2, this.x3, this.y3);
                }
                copyFrom(e) {
                    this.x = e.x;
                    this.y = e.y;
                    this.x2 = e.x2;
                    this.y2 = e.y2;
                    this.x3 = e.x3;
                    this.y3 = e.y3;
                    return this;
                }
                copyTo(e) {
                    e.copyFrom(this);
                    return e;
                }
                getBounds(e) {
                    if (!e) {
                        e = new tG.Rectangle;
                    }
                    let t = Math.min(this.x, this.x2, this.x3);
                    let r = Math.max(this.x, this.x2, this.x3);
                    let n = Math.min(this.y, this.y2, this.y3);
                    let i = Math.max(this.y, this.y2, this.y3);
                    e.x = t;
                    e.y = n;
                    e.width = r - t;
                    e.height = i - n;
                    return e;
                }
            },
            "UNIFORM_TO_ARRAY_SETTERS",
            ()=>a4.UNIFORM_TO_ARRAY_SETTERS,
            "UNIFORM_TO_SINGLE_SETTERS",
            ()=>a4.UNIFORM_TO_SINGLE_SETTERS,
            "UNIFORM_TYPES_MAP",
            ()=>sa.UNIFORM_TYPES_MAP,
            "UNIFORM_TYPES_VALUES",
            ()=>sa.UNIFORM_TYPES_VALUES,
            "UPDATE_BLEND",
            ()=>r$.UPDATE_BLEND,
            "UPDATE_COLOR",
            ()=>r$.UPDATE_COLOR,
            "UPDATE_PRIORITY",
            ()=>rq.UPDATE_PRIORITY,
            "UPDATE_TRANSFORM",
            ()=>r$.UPDATE_TRANSFORM,
            "UPDATE_VISIBLE",
            ()=>r$.UPDATE_VISIBLE,
            "UboBatch",
            ()=>om.UboBatch,
            "UboSystem",
            ()=>so.UboSystem,
            "UniformGroup",
            ()=>C.UniformGroup,
            "VERSION",
            ()=>cs.VERSION,
            "VideoSource",
            ()=>sF.VideoSource,
            "ViewContainer",
            ()=>tX.ViewContainer,
            "ViewSystem",
            ()=>sk.ViewSystem,
            "ViewableBuffer",
            ()=>ug.ViewableBuffer,
            "VividLightBlend",
            0,
            ei,
            "WGSL_ALIGN_SIZE_DATA",
            ()=>oG.WGSL_ALIGN_SIZE_DATA,
            "WGSL_TO_STD40_SIZE",
            ()=>a3.WGSL_TO_STD40_SIZE,
            "WRAP_MODES",
            0,
            sb,
            "WebGLRenderer",
            ()=>oh.WebGLRenderer,
            "WebGPURenderer",
            ()=>oW.WebGPURenderer,
            "WebWorkerAdapter",
            0,
            {
                createCanvas: (e, t)=>new OffscreenCanvas(e ?? 0, t ?? 0),
                createImage: ()=>new Image,
                getCanvasRenderingContext2D: ()=>OffscreenCanvasRenderingContext2D,
                getWebGLRenderingContext: ()=>WebGLRenderingContext,
                getNavigator: ()=>navigator,
                getBaseUrl: ()=>globalThis.location.href,
                getFontFaceSet: ()=>globalThis.fonts,
                fetch: (e, t)=>fetch(e, t),
                parseXML: (e)=>new tq.DOMParser().parseFromString(e, "text/xml")
            },
            "WorkerManager",
            ()=>eG.WorkerManager,
            "accessibilityTarget",
            ()=>E.accessibilityTarget,
            "addBits",
            ()=>i0.addBits,
            "addMaskBounds",
            ()=>ai.addMaskBounds,
            "addMaskLocalBounds",
            ()=>aa.addMaskLocalBounds,
            "addProgramDefines",
            ()=>aK.addProgramDefines,
            "alphaFrag",
            0,
            t0,
            "alphaWgsl",
            0,
            t3,
            "appendSVGPath",
            ()=>lZ.appendSVGPath,
            "applyMatrix",
            0,
            nS,
            "applyProjectiveTransformationToPlane",
            0,
            l9,
            "applyStyleParams",
            ()=>oo.applyStyleParams,
            "assignWithIgnore",
            ()=>le.assignWithIgnore,
            "autoDetectEnvironment",
            ()=>tV.autoDetectEnvironment,
            "autoDetectRenderer",
            ()=>au.autoDetectRenderer,
            "autoDetectSource",
            ()=>sN.autoDetectSource,
            "basisTranscoderUrls",
            0,
            e0,
            "bgr2rgb",
            ()=>no.bgr2rgb,
            "bitmapFontCachePlugin",
            ()=>uz.bitmapFontCachePlugin,
            "bitmapFontTextParser",
            ()=>uV.bitmapFontTextParser,
            "bitmapFontXMLParser",
            ()=>u$.bitmapFontXMLParser,
            "bitmapFontXMLStringParser",
            ()=>uq.bitmapFontXMLStringParser,
            "bitmapTextSplit",
            0,
            uj,
            "blendTemplateFrag",
            0,
            D,
            "blendTemplateVert",
            0,
            P,
            "blendTemplateWgsl",
            0,
            O,
            "blockDataMap",
            ()=>oH.blockDataMap,
            "blurTemplateWgsl",
            0,
            t2,
            "boundsPool",
            ()=>sW.boundsPool,
            "browserExt",
            ()=>y.browserExt,
            "buildAdaptiveBezier",
            ()=>lf.buildAdaptiveBezier,
            "buildAdaptiveQuadratic",
            ()=>lm.buildAdaptiveQuadratic,
            "buildArc",
            ()=>lg.buildArc,
            "buildArcTo",
            ()=>lb.buildArcTo,
            "buildArcToSvg",
            ()=>l_.buildArcToSvg,
            "buildCircle",
            ()=>lx.buildCircle,
            "buildContextBatches",
            ()=>lJ.buildContextBatches,
            "buildEllipse",
            ()=>lx.buildEllipse,
            "buildGeometryFromPath",
            0,
            (path)=>{
                if (path instanceof lw.GraphicsPath) {
                    path = {
                        path,
                        textureMatrix: null,
                        out: null
                    };
                }
                let t = [];
                let r = [];
                let n = [];
                let shapePath = path.path.shapePath;
                let e_textureMatrix = path.textureMatrix;
                shapePath.shapePrimitives.forEach(({ shape, transform })=>{
                    let n_length = n.length;
                    let s = t.length / 2;
                    let l = [];
                    let u = lJ.shapeBuilders[shape.type];
                    u.build(shape, l);
                    if (transform) {
                        o5.transformVertices(l, transform);
                    }
                    u.triangulate(l, t, 2, s, n, n_length);
                    let c = r.length / 2;
                    if (e_textureMatrix) {
                        if (transform) {
                            e_textureMatrix.append(transform.clone().invert());
                        }
                        o1.buildUvs(t, 2, s, r, c, 2, t.length / 2 - s, e_textureMatrix);
                    } else {
                        o1.buildSimpleUvs(r, c, 2, t.length / 2 - s);
                    }
                });
                let e_out = path.out;
                if (e_out) {
                    e_out.positions = new Float32Array(t);
                    e_out.uvs = new Float32Array(r);
                    e_out.indices = new Uint32Array(n);
                    return e_out;
                }
                return new r8({
                    positions: new Float32Array(t),
                    uvs: new Float32Array(r),
                    indices: new Uint32Array(n)
                });
            },
            "buildLine",
            ()=>lT.buildLine,
            "buildPixelLine",
            ()=>ly.buildPixelLine,
            "buildPolygon",
            ()=>lS.buildPolygon,
            "buildRectangle",
            ()=>lv.buildRectangle,
            "buildRoundedRectangle",
            ()=>lx.buildRoundedRectangle,
            "buildSVGFillAttributes",
            0,
            lV,
            "buildSVGPath",
            0,
            lI,
            "buildSVGStrokeAttributes",
            0,
            l$,
            "buildSimpleUvs",
            ()=>o1.buildSimpleUvs,
            "buildTriangle",
            ()=>lR.buildTriangle,
            "buildUvs",
            ()=>o1.buildUvs,
            "cacheAsTextureMixin",
            ()=>sY.cacheAsTextureMixin,
            "cacheTextureArray",
            ()=>ed.cacheTextureArray,
            "calculatePathArea",
            ()=>lZ.calculatePathArea,
            "calculateProjection",
            ()=>oR.calculateProjection,
            "canUseNewCanvasBlendModes",
            ()=>ag.canUseNewCanvasBlendModes,
            "canvasTextSplit",
            0,
            u1,
            "canvasUtils",
            ()=>na.canvasUtils,
            "checkChildrenDidChange",
            ()=>lt.checkChildrenDidChange,
            "checkDataUrl",
            ()=>eO.checkDataUrl,
            "checkExtension",
            ()=>eB.checkExtension,
            "checkForNestedPattern",
            ()=>lQ.checkForNestedPattern,
            "checkMaxIfStatementsInShader",
            ()=>iV.checkMaxIfStatementsInShader,
            "childrenHelperMixin",
            ()=>sj.childrenHelperMixin,
            "cleanArray",
            ()=>cl.cleanArray,
            "cleanHash",
            ()=>cl.cleanHash,
            "clearList",
            ()=>lr.clearList,
            "closePointEps",
            ()=>lE.closePointEps,
            "collapseNewlines",
            ()=>u5.collapseNewlines,
            "collapseSpaces",
            ()=>u5.collapseSpaces,
            "collectAllRenderables",
            0,
            (e, t, r)=>{
                rd.deprecation("8.7.0", "Please use container.collectRenderables instead.");
                let n = r.renderPipes ? r : r.batch.renderer;
                return e.collectRenderables(t, n, null);
            },
            "collectRenderablesMixin",
            ()=>sK.collectRenderablesMixin,
            "color32BitToUniform",
            ()=>r5.color32BitToUniform,
            "colorBit",
            ()=>ie.colorBit,
            "colorBitGl",
            ()=>ie.colorBitGl,
            "colorMatrixFilterFrag",
            0,
            t1,
            "colorMatrixFilterWgsl",
            0,
            t8,
            "colorToUniform",
            ()=>r5.colorToUniform,
            "compareModeToGlCompare",
            ()=>od.compareModeToGlCompare,
            "compileHighShader",
            ()=>iJ.compileHighShader,
            "compileHighShaderGl",
            ()=>iJ.compileHighShaderGl,
            "compileHighShaderGlProgram",
            ()=>np.compileHighShaderGlProgram,
            "compileHighShaderGpuProgram",
            ()=>np.compileHighShaderGpuProgram,
            "compileHooks",
            ()=>i3.compileHooks,
            "compileInputs",
            ()=>i2.compileInputs,
            "compileOutputs",
            ()=>i1.compileOutputs,
            "compileShader",
            ()=>aL.compileShader,
            "compute2DProjection",
            0,
            ul,
            "convertFormatIfRequired",
            0,
            (e)=>{
                let e_format = e.format;
                if (t_[e_format]) {
                    let r = t_[e_format].convertFunction;
                    let n = e.resource;
                    for(let e = 0; e < n.length; e++){
                        n[e] = r(n[e]);
                    }
                    e.format = t_[e_format].convertedFormat;
                }
            },
            "convertToList",
            ()=>eF.convertToList,
            "copySearchParams",
            ()=>eI.copySearchParams,
            "createGlUploadCubeTextureResource",
            ()=>on.createGlUploadCubeTextureResource,
            "createGpuUploadCubeTextureResource",
            ()=>oV.createGpuUploadCubeTextureResource,
            "createIdFromString",
            ()=>sX.createIdFromString,
            "createIndicesForQuads",
            0,
            ub,
            "createLevelBuffers",
            0,
            (e, t)=>{
                let r = e.getNumImages();
                let n = e.getNumLevels(0);
                if (!e.startTranscoding()) {
                    throw Error("startTranscoding failed");
                }
                let i = [];
                for(let a = 0; a < n; ++a){
                    for(let n = 0; n < r; ++n){
                        let r = new Uint8Array(e.getImageTranscodedSizeInBytes(n, a, t));
                        if (!e.transcodeImage(r, n, a, t, 1, 0)) {
                            throw Error("transcodeImage failed");
                        }
                        i.push(r);
                    }
                }
                return i;
            },
            "createLevelBuffersFromKTX",
            0,
            (e)=>{
                let t = [];
                for(let r = 0; r < e.numLevels; r++){
                    let n = e.getImageData(r, 0, 0);
                    let i = new Uint8Array(n.byteLength);
                    i.set(n);
                    t.push(i);
                }
                return t;
            },
            "createStringVariations",
            ()=>eU.createStringVariations,
            "createTexture",
            ()=>eC.createTexture,
            "createUboElementsSTD40",
            ()=>a3.createUboElementsSTD40,
            "createUboElementsWGSL",
            ()=>oG.createUboElementsWGSL,
            "createUboSyncFunction",
            ()=>ss.createUboSyncFunction,
            "createUboSyncFunctionSTD40",
            ()=>a2.createUboSyncFunctionSTD40,
            "createUboSyncFunctionWGSL",
            ()=>ow.createUboSyncFunctionWGSL,
            "crossOrigin",
            ()=>eM.crossOrigin,
            "cullingMixin",
            ()=>tU.cullingMixin,
            "curveEps",
            ()=>lE.curveEps,
            "defaultFilterVert",
            ()=>t4.default,
            "defaultValue",
            ()=>aN.defaultValue,
            "definedProps",
            ()=>ln.definedProps,
            "deprecation",
            ()=>rd.deprecation,
            "detectAvif",
            ()=>eh.detectAvif,
            "detectBasis",
            0,
            eH,
            "detectCompressed",
            0,
            tM,
            "detectDefaults",
            ()=>ep.detectDefaults,
            "detectMp4",
            ()=>ef.detectMp4,
            "detectOgv",
            ()=>em.detectOgv,
            "detectVideoAlphaMode",
            ()=>ci.detectVideoAlphaMode,
            "detectWebm",
            ()=>eg.detectWebm,
            "detectWebp",
            ()=>eb.detectWebp,
            "determineCrossOrigin",
            ()=>eM.determineCrossOrigin,
            "displacementFrag",
            0,
            t6,
            "displacementVert",
            0,
            t5,
            "displacementWgsl",
            0,
            t7,
            "earcut",
            ()=>cx.earcut,
            "effectsMixin",
            ()=>sQ.effectsMixin,
            "ensureAttributes",
            ()=>aX.ensureAttributes,
            "ensureIsBuffer",
            ()=>o8.ensureIsBuffer,
            "ensurePrecision",
            ()=>aQ.ensurePrecision,
            "ensureTextOptions",
            0,
            nD,
            "executeInstructions",
            ()=>li.executeInstructions,
            "extensions",
            ()=>v.extensions,
            "extractAttributesFromGlProgram",
            ()=>ak.extractAttributesFromGlProgram,
            "extractAttributesFromGpuProgram",
            ()=>oD.extractAttributesFromGpuProgram,
            "extractFontFamilies",
            0,
            iG,
            "extractStructAndGroups",
            ()=>oP.extractStructAndGroups,
            "extractSubpaths",
            ()=>lZ.extractSubpaths,
            "extractSvgUrlId",
            ()=>lK.extractSvgUrlId,
            "fastCopy",
            ()=>oQ.fastCopy,
            "findMixin",
            ()=>sZ.findMixin,
            "fontStringFromTextStyle",
            ()=>nN.fontStringFromTextStyle,
            "formatShader",
            0,
            (e)=>{
                let t = e.split(/([\n{}])/g).map((e)=>e.trim()).filter((e)=>e.length);
                let r = "";
                return t.map((e)=>{
                    let t = r + e;
                    if (e === "{") {
                        r += "    ";
                    } else if (e === "}") {
                        t = (r = r.substr(0, r.length - 4)) + e;
                    }
                    return t;
                }).join("\n");
            },
            "fragmentGPUTemplate",
            ()=>i4.fragmentGPUTemplate,
            "fragmentGlTemplate",
            ()=>i4.fragmentGlTemplate,
            "generateArraySyncSTD40",
            ()=>a1.generateArraySyncSTD40,
            "generateArraySyncWGSL",
            ()=>oO.generateArraySyncWGSL,
            "generateBlurFragSource",
            0,
            rm,
            "generateBlurGlProgram",
            0,
            r_,
            "generateBlurProgram",
            0,
            rx,
            "generateBlurVertSource",
            0,
            rb,
            "generateGPULayout",
            0,
            (e)=>{
                let t = [];
                let binding = 0;
                for(let n = 0; n < e; n++){
                    t[binding] = {
                        texture: {
                            sampleType: "float",
                            viewDimension: "2d",
                            multisampled: false
                        },
                        binding,
                        visibility: GPUShaderStage.FRAGMENT
                    };
                    t[++binding] = {
                        sampler: {
                            type: "filtering"
                        },
                        binding,
                        visibility: GPUShaderStage.FRAGMENT
                    };
                    binding++;
                }
                return t;
            },
            "generateGpuLayoutGroups",
            ()=>oB.generateGpuLayoutGroups,
            "generateLayout",
            0,
            (e)=>{
                let t = {};
                let r = 0;
                for(let n = 0; n < e; n++){
                    t[`textureSource${n + 1}`] = r++;
                    t[`textureSampler${n + 1}`] = r++;
                }
                return t;
            },
            "generateLayoutHash",
            ()=>oF.generateLayoutHash,
            "generateParticleUpdateFunction",
            0,
            u_,
            "generateProgram",
            ()=>aH.generateProgram,
            "generateShaderSyncCode",
            ()=>aB.generateShaderSyncCode,
            "generateTextStyleKey",
            0,
            (e)=>{
                let t;
                let r;
                let n;
                let i;
                let a;
                let o;
                let s = [];
                let l = 0;
                for(let t = 0; t < u9.length; t++){
                    let r = `_${u9[t]}`;
                    s[l++] = e[r];
                }
                l = ce(e._fill, s, l);
                t = e._stroke;
                r = s;
                n = l;
                if (t) {
                    n = ce(t, r, n);
                    r[n++] = t.width;
                    r[n++] = t.alignment;
                    r[n++] = t.cap;
                    r[n++] = t.join;
                    r[n++] = t.miterLimit;
                }
                l = n;
                i = e.dropShadow;
                a = s;
                o = l;
                if (i) {
                    a[o++] = i.alpha;
                    a[o++] = i.angle;
                    a[o++] = i.blur;
                    a[o++] = i.distance;
                    a[o++] = eN.Color.shared.setValue(i.color).toNumber();
                }
                l = o;
                l = ((e, t, r)=>{
                    if (!e) {
                        return r;
                    }
                    for (let n of e){
                        t[r++] = n.uid;
                    }
                    return r;
                })(e.filters, s, l);
                return s.join("-");
            },
            "generateTextureBatchBit",
            ()=>it.generateTextureBatchBit,
            "generateTextureBatchBitGl",
            ()=>it.generateTextureBatchBitGl,
            "generateTextureMatrix",
            ()=>l3.generateTextureMatrix,
            "generateUniformsSync",
            ()=>a8.generateUniformsSync,
            "getAdjustedBlendModeBlend",
            ()=>r6.getAdjustedBlendModeBlend,
            "getAttributeInfoFromFormat",
            ()=>o4.getAttributeInfoFromFormat,
            "getBatchSamplersUniformGroup",
            ()=>ir.getBatchSamplersUniformGroup,
            "getBitmapTextLayout",
            ()=>n4.getBitmapTextLayout,
            "getCanvasBoundingBox",
            0,
            nU,
            "getCanvasFillStyle",
            ()=>nX.getCanvasFillStyle,
            "getCanvasTexture",
            ()=>sL.getCanvasTexture,
            "getCharacterGroups",
            ()=>u5.getCharacterGroups,
            "getDefaultUniformValue",
            ()=>sl.getDefaultUniformValue,
            "getFastGlobalBounds",
            0,
            (e, t)=>{
                rd.deprecation("8.7.0", "Use container.getFastGlobalBounds() instead");
                return e.getFastGlobalBounds(true, t);
            },
            "getFastGlobalBoundsMixin",
            ()=>sJ.getFastGlobalBoundsMixin,
            "getFillInstructionData",
            ()=>lQ.getFillInstructionData,
            "getFontCss",
            0,
            iO,
            "getFontFamilyName",
            ()=>eR.getFontFamilyName,
            "getGeometryBounds",
            ()=>o6.getGeometryBounds,
            "getGlTypeFromFormat",
            ()=>aR.getGlTypeFromFormat,
            "getGlobalBounds",
            ()=>tD.getGlobalBounds,
            "getGlobalMixin",
            ()=>no.getGlobalMixin,
            "getGlobalRenderableBounds",
            ()=>sz.getGlobalRenderableBounds,
            "getLocalBounds",
            ()=>sq.getLocalBounds,
            "getMaxFragmentPrecision",
            ()=>aV.getMaxFragmentPrecision,
            "getMaxMiterRatio",
            ()=>l2.getMaxMiterRatio,
            "getMaxTexturesPerBatch",
            ()=>i$.getMaxTexturesPerBatch,
            "getOrientationOfPoints",
            ()=>l1.getOrientationOfPoints,
            "getPlainText",
            ()=>u6.getPlainText,
            "getPo2TextureFromSource",
            ()=>nK.getPo2TextureFromSource,
            "getResolutionOfUrl",
            ()=>eQ.getResolutionOfUrl,
            "getSVGUrl",
            0,
            iB,
            "getSupportedCompressedTextureFormats",
            0,
            eY,
            "getSupportedGPUCompressedTextureFormats",
            0,
            eW,
            "getSupportedGlCompressedTextureFormats",
            0,
            ez,
            "getSupportedTextureFormats",
            0,
            eK,
            "getTemporaryCanvasFromImage",
            0,
            iF,
            "getTestContext",
            ()=>a$.getTestContext,
            "getTextureBatchBindGroup",
            ()=>iq.getTextureBatchBindGroup,
            "getTextureDefaultMatrix",
            0,
            (e, t)=>{
                let { width, height } = e.frame;
                t.scale(1 / width, 1 / height);
                return t;
            },
            "getTextureFormatFromKTXTexture",
            0,
            (e)=>{
                if (e.classId === 2) {
                    return tv(e.vkFormat);
                }
                return ty(e.glInternalformat);
            },
            "getUboData",
            ()=>aq.getUboData,
            "getUniformData",
            ()=>az.getUniformData,
            "getUrlExtension",
            ()=>eP.getUrlExtension,
            "glFormatToGPUFormat",
            0,
            ty,
            "glUploadBufferImageResource",
            ()=>ot.glUploadBufferImageResource,
            "glUploadCompressedTextureResource",
            ()=>or.glUploadCompressedTextureResource,
            "glUploadImageResource",
            ()=>oi.glUploadImageResource,
            "glUploadVideoResource",
            ()=>oa.glUploadVideoResource,
            "globalUniformsBit",
            ()=>i6.globalUniformsBit,
            "globalUniformsBitGl",
            ()=>i6.globalUniformsBitGl,
            "globalUniformsUBOBitGl",
            ()=>i6.globalUniformsUBOBitGl,
            "gpuFormatToBasisTranscoderFormat",
            0,
            (e)=>{
                let t = e8[e];
                if (t) {
                    return t;
                }
                throw Error(`Unsupported transcoderFormat: ${e}`);
            },
            "gpuFormatToKTXBasisTranscoderFormat",
            0,
            (e)=>{
                let t = tR[e];
                if (t) {
                    return t;
                }
                throw Error(`Unsupported transcoderFormat: ${e}`);
            },
            "gpuUploadBufferImageResource",
            ()=>ok.gpuUploadBufferImageResource,
            "gpuUploadCompressedTextureResource",
            ()=>oH.gpuUploadCompressedTextureResource,
            "gpuUploadImageResource",
            ()=>o$.gpuUploadImageResource,
            "gpuUploadVideoResource",
            ()=>oq.gpuUploadVideoResource,
            "graphicsContextToSvg",
            0,
            (e, t = 2)=>{
                let r = e instanceof rK.GraphicsContext ? e : e.context;
                let n = new lO;
                let i = [];
                let r_instructions = r.instructions;
                let o = 0;
                while(o < r_instructions.length){
                    let e = r_instructions[o];
                    switch(e.action){
                        case "fill":
                            {
                                let r = !!e.data.hole;
                                let a = r ? lI(e.data.path, t) + lI(e.data.hole, t, true) : lI(e.data.path, t);
                                let o = lV(e.data.style, n);
                                let s = r ? ' fill-rule="evenodd"' : "";
                                i.push(`<path d="${a}" ${o}${s}/>`);
                                break;
                            }
                        case "stroke":
                            {
                                let r = lI(e.data.path, t);
                                if (e.data.hole) {
                                    r += lI(e.data.hole, t, true);
                                }
                                let a = l$(e.data.style, n);
                                i.push(`<path d="${r}" ${a}/>`);
                            }
                    }
                    o++;
                }
                let r_bounds = r.bounds;
                let l = parseFloat(r_bounds.minX.toFixed(t));
                let u = parseFloat(r_bounds.minY.toFixed(t));
                let c = parseFloat((r_bounds.maxX - r_bounds.minX).toFixed(t));
                let d = parseFloat((r_bounds.maxY - r_bounds.minY).toFixed(t));
                let h = n.build();
                let p = i.join("");
                return `<svg xmlns="http://www.w3.org/2000/svg" width="${c}" height="${d}" viewBox="${l} ${u} ${c} ${d}">${h}${p}</svg>`;
            },
            "groupD8",
            ()=>rB.groupD8,
            "hasCachedCanvasTexture",
            ()=>sL.hasCachedCanvasTexture,
            "hasTagMarkup",
            ()=>u6.hasTagMarkup,
            "hasTagStyles",
            ()=>u6.hasTagStyles,
            "hslWgsl",
            0,
            "fn getLuminosity(c: vec3<f32>) -> f32 {\n  return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;\n}\n\nfn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32> {\n  let d: f32 = lum - getLuminosity(c);\n  let newColor: vec3<f32> = c.rgb + vec3<f32>(d, d, d);\n\n  // clip back into legal range\n  let newLum: f32 = getLuminosity(newColor);\n  let cMin: f32 = min(newColor.r, min(newColor.g, newColor.b));\n  let cMax: f32 = max(newColor.r, max(newColor.g, newColor.b));\n\n  let t1: f32 = newLum / (newLum - cMin);\n  let t2: f32 = (1.0 - newLum) / (cMax - newLum);\n\n  let finalColor = mix(vec3<f32>(newLum, newLum, newLum), newColor, select(select(1.0, t2, cMax > 1.0), t1, cMin < 0.0));\n\n  return finalColor;\n}\n\nfn getSaturation(c: vec3<f32>) -> f32 {\n  return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));\n}\n\n// Set saturation if color components are sorted in ascending order.\nfn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32> {\n  var result: vec3<f32>;\n  if (cSorted.z > cSorted.x) {\n    let newY = (((cSorted.y - cSorted.x) * s) / (cSorted.z - cSorted.x));\n    result = vec3<f32>(0.0, newY, s);\n  } else {\n    result = vec3<f32>(0.0, 0.0, 0.0);\n  }\n  return vec3<f32>(result.x, result.y, result.z);\n}\n\nfn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32> {\n    var result: vec3<f32> = c;\n\n    if (c.r <= c.g && c.r <= c.b) {\n        if (c.g <= c.b) {\n            result = setSaturationMinMidMax(result, s);\n        } else {\n            var temp: vec3<f32> = vec3<f32>(result.r, result.b, result.g);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.r, temp.b, temp.g);\n        }\n    } else if (c.g <= c.r && c.g <= c.b) {\n        if (c.r <= c.b) {\n            var temp: vec3<f32> = vec3<f32>(result.g, result.r, result.b);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.g, temp.r, temp.b);\n        } else {\n            var temp: vec3<f32> = vec3<f32>(result.g, result.b, result.r);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.g, temp.b, temp.r);\n        }\n    } else {\n        if (c.r <= c.g) {\n            var temp: vec3<f32> = vec3<f32>(result.b, result.r, result.g);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.b, temp.r, temp.g);\n        } else {\n            var temp: vec3<f32> = vec3<f32>(result.b, result.g, result.r);\n            temp = setSaturationMinMidMax(temp, s);\n            result = vec3<f32>(temp.b, temp.g, temp.r);\n        }\n    }\n\n    return result;\n}",
            "hslgl",
            0,
            I,
            "hslgpu",
            0,
            U,
            "injectBits",
            ()=>i8.injectBits,
            "insertVersion",
            ()=>aZ.insertVersion,
            "isBreakAfterChar",
            ()=>u5.isBreakAfterChar,
            "isBreakingSpace",
            ()=>u5.isBreakingSpace,
            "isCanvasFilterCapable",
            ()=>ro.isCanvasFilterCapable,
            "isCollapsibleSpace",
            ()=>u5.isCollapsibleSpace,
            "isMobile",
            ()=>ca.isMobile,
            "isNewline",
            ()=>u5.isNewline,
            "isPow2",
            ()=>rI.isPow2,
            "isRenderingToScreen",
            ()=>se.isRenderingToScreen,
            "isSafari",
            ()=>iM.isSafari,
            "isSingleItem",
            ()=>eL.isSingleItem,
            "isWebGLSupported",
            ()=>eX.isWebGLSupported,
            "isWebGPUSupported",
            ()=>ek.isWebGPUSupported,
            "ktxTranscoderUrls",
            0,
            tp,
            "loadBasis",
            0,
            e1,
            "loadBasisOnWorker",
            0,
            e2,
            "loadBitmapFont",
            ()=>uz.loadBitmapFont,
            "loadDDS",
            0,
            ti,
            "loadEnvironmentExtensions",
            ()=>tV.loadEnvironmentExtensions,
            "loadFontAsBase64",
            0,
            iw,
            "loadFontCSS",
            0,
            iD,
            "loadImageBitmap",
            ()=>eA.loadImageBitmap,
            "loadJson",
            ()=>eS.loadJson,
            "loadKTX",
            0,
            tc,
            "loadKTX2",
            0,
            tb,
            "loadKTX2onWorker",
            0,
            tg,
            "loadSVGImage",
            0,
            iI,
            "loadSvg",
            ()=>eE.loadSvg,
            "loadTextures",
            ()=>eA.loadTextures,
            "loadTxt",
            ()=>ev.loadTxt,
            "loadVideoTextures",
            ()=>eM.loadVideoTextures,
            "loadWebFont",
            ()=>eR.loadWebFont,
            "localUniformBit",
            ()=>nf.localUniformBit,
            "localUniformBitGl",
            ()=>nf.localUniformBitGl,
            "localUniformBitGroup2",
            ()=>nf.localUniformBitGroup2,
            "localUniformMSDFBit",
            0,
            ia,
            "localUniformMSDFBitGl",
            0,
            io,
            "log2",
            ()=>rI.log2,
            "logDebugTexture",
            0,
            cd,
            "logProgramError",
            ()=>aW.logProgramError,
            "logRenderGroupScene",
            0,
            function e(t, r = 0, n = {
                index: 0,
                color: "#000000"
            }) {
                let i = "";
                for(let e = 0; e < r; e++){
                    i += "    ";
                }
                console.log(`%c ${i}- ${n.index}: ${t.root.label} worldX:${t.worldTransform.tx}`, `color:${n.color}; font-weight:bold;`);
                r++;
                for(let index = 0; index < t.renderGroupChildren.length; index++){
                    e(t.renderGroupChildren[index], r, {
                        ...n,
                        index
                    });
                }
            },
            "logScene",
            0,
            function e(t, r = 0, n = {
                color: "#000000"
            }) {
                if (t.renderGroup) {
                    n.color = ch[cp++];
                }
                let i = "";
                for(let e = 0; e < r; e++){
                    i += "    ";
                }
                let t_label = t.label;
                if (!t_label && t instanceof rR.Sprite) {
                    t_label = `sprite:${t.texture.label}`;
                }
                let o = `%c ${i}|- ${t_label} (worldX:${t.worldTransform.tx}, relativeRenderX:${t.relativeGroupTransform.tx}, renderX:${t.groupTransform.tx}, localX:${t.x})`;
                if (t.renderGroup) {
                    o += " (RenderGroup)";
                }
                if (t.filters) {
                    o += "(*filters)";
                }
                console.log(o, `color:${n.color}; font-weight:bold;`);
                r++;
                for(let i = 0; i < t.children.length; i++){
                    e(t.children[i], r, {
                        ...n
                    });
                }
            },
            "mSDFBit",
            0,
            is,
            "mSDFBitGl",
            0,
            il,
            "mapCanvasBlendModesToPixi",
            ()=>ab.mapCanvasBlendModesToPixi,
            "mapFormatToGlFormat",
            ()=>os.mapFormatToGlFormat,
            "mapFormatToGlInternalFormat",
            ()=>ol.mapFormatToGlInternalFormat,
            "mapFormatToGlType",
            ()=>ou.mapFormatToGlType,
            "mapGlToVertexFormat",
            ()=>aj.mapGlToVertexFormat,
            "mapSize",
            0,
            (e)=>aY[e],
            "mapType",
            ()=>aj.mapType,
            "mapViewDimensionToGlTarget",
            ()=>oc.mapViewDimensionToGlTarget,
            "mapWebGLBlendModesToPixi",
            ()=>a5.mapWebGLBlendModesToPixi,
            "maskFrag",
            ()=>rn.default,
            "maskVert",
            ()=>ri.default,
            "maskWgsl",
            ()=>ra.default,
            "matrixPool",
            ()=>sW.matrixPool,
            "measureHtmlText",
            0,
            iv,
            "measureMixin",
            ()=>s0.measureMixin,
            "measureTaggedText",
            ()=>u4.measureTaggedText,
            "migrateFragmentFromV7toV8",
            0,
            (e)=>{
                e = e.replaceAll("texture2D", "texture").replaceAll("gl_FragColor", "finalColor").replaceAll("varying", "in");
                return e = `
        out vec4 finalColor;
    ${e}
    `;
            },
            "mipmapScaleModeToGlFilter",
            ()=>od.mipmapScaleModeToGlFilter,
            "multiplyColors",
            ()=>la.multiplyColors,
            "multiplyHexColors",
            ()=>ns.multiplyHexColors,
            "nextPow2",
            ()=>rI.nextPow2,
            "noiseFrag",
            0,
            t9,
            "noiseWgsl",
            0,
            re,
            "nonCompressedFormats",
            0,
            ej,
            "normalizeExtensionPriority",
            ()=>v.normalizeExtensionPriority,
            "onRenderMixin",
            ()=>s3.onRenderMixin,
            "parseDDS",
            0,
            tn,
            "parseFunctionBody",
            0,
            (e)=>{
                let t = e.toString();
                let r = t.indexOf("{");
                let n = t.lastIndexOf("}");
                if (-1 === r || -1 === n) {
                    throw Error("getFunctionBody: No body found in function definition");
                }
                return t.slice(r + 1, n).trim();
            },
            "parseKTX",
            0,
            tu,
            "parseSVGDefinitions",
            ()=>lq.parseSVGDefinitions,
            "parseSVGFloatAttribute",
            ()=>lz.parseSVGFloatAttribute,
            "parseSVGPath",
            ()=>lW.parseSVGPath,
            "parseSVGStyle",
            ()=>lY.parseSVGStyle,
            "parseTaggedText",
            ()=>u6.parseTaggedText,
            "particleData",
            0,
            uD,
            "particlesFrag",
            0,
            sH,
            "particlesVert",
            0,
            sV,
            "particlesWgsl",
            0,
            s$,
            "passthroughFrag",
            ()=>rt.default,
            "passthroughWgsl",
            ()=>rr.default,
            "path",
            ()=>cm.path,
            "pointInTriangle",
            0,
            rN,
            "preloadVideo",
            ()=>eM.preloadVideo,
            "removeItems",
            ()=>cu.removeItems,
            "removeStructAndGroupDuplicates",
            ()=>oI.removeStructAndGroupDuplicates,
            "resetUids",
            ()=>sy.resetUids,
            "resolveCharacters",
            ()=>uK.resolveCharacters,
            "resolveCompressedTextureUrl",
            0,
            tA,
            "resolveJsonUrl",
            ()=>ew.resolveJsonUrl,
            "resolveTextureUrl",
            ()=>eD.resolveTextureUrl,
            "resourceToTexture",
            ()=>sN.resourceToTexture,
            "roundPixelsBit",
            ()=>nm.roundPixelsBit,
            "roundPixelsBitGl",
            ()=>nm.roundPixelsBitGl,
            "roundedShapeArc",
            ()=>lD.roundedShapeArc,
            "roundedShapeQuadraticCurve",
            ()=>lD.roundedShapeQuadraticCurve,
            "sayHello",
            ()=>c_.sayHello,
            "scaleModeToGlFilter",
            ()=>od.scaleModeToGlFilter,
            "setBasisTranscoderPath",
            0,
            (e)=>{
                Object.assign(e0, e);
            },
            "setKTXTranscoderPath",
            0,
            (e)=>{
                Object.assign(tp, e);
            },
            "setPositions",
            0,
            ny,
            "setProgramName",
            ()=>aJ.setProgramName,
            "setUvs",
            0,
            nv,
            "shapeBuilders",
            ()=>lJ.shapeBuilders,
            "sortMixin",
            ()=>s2.sortMixin,
            "spritesheetAsset",
            ()=>cr.spritesheetAsset,
            "squaredDistanceToLineSegment",
            ()=>rU.squaredDistanceToLineSegment,
            "stripVersion",
            ()=>a0.stripVersion,
            "styleAttributes",
            ()=>lY.styleAttributes,
            "testImageFormat",
            ()=>e_.testImageFormat,
            "testVideoFormat",
            ()=>ex.testVideoFormat,
            "textStyleToCSS",
            0,
            ip,
            "textureBit",
            ()=>i5.textureBit,
            "textureBitGl",
            ()=>i5.textureBitGl,
            "textureFrom",
            ()=>sN.textureFrom,
            "tilingBit",
            0,
            nb,
            "tilingBitGl",
            0,
            n_,
            "toFillStyle",
            ()=>l0.toFillStyle,
            "toLocalGlobalMixin",
            ()=>s1.toLocalGlobalMixin,
            "toStrokeStyle",
            ()=>l0.toStrokeStyle,
            "tokenize",
            ()=>u5.tokenize,
            "tokenizeTaggedRuns",
            ()=>u4.tokenizeTaggedRuns,
            "transformVertices",
            ()=>o5.transformVertices,
            "triangulateWithHoles",
            ()=>l8.triangulateWithHoles,
            "trimRight",
            ()=>u5.trimRight,
            "uboSyncFunctionsSTD40",
            ()=>su.uboSyncFunctionsSTD40,
            "uboSyncFunctionsWGSL",
            ()=>su.uboSyncFunctionsWGSL,
            "uid",
            ()=>sy.uid,
            "uniformParsers",
            ()=>sc.uniformParsers,
            "unpremultiplyAlpha",
            0,
            (e)=>{
                if (e instanceof Uint8ClampedArray) {
                    e = new Uint8Array(e.buffer);
                }
                let e_length = e.length;
                for(let r = 0; r < e_length; r += 4){
                    let t = e[r + 3];
                    if (t !== 0) {
                        let n = 255.001 / t;
                        e[r] = e[r] * n + 0.5;
                        e[r + 1] = e[r + 1] * n + 0.5;
                        e[r + 2] = e[r + 2] * n + 0.5;
                    }
                }
            },
            "unsafeEvalSupported",
            ()=>co.unsafeEvalSupported,
            "updateLocalTransform",
            0,
            (e, t)=>{
                let t__scale = t._scale;
                let t__pivot = t._pivot;
                let t__position = t._position;
                let a = t__scale._x;
                let o = t__scale._y;
                let s = t__pivot._x;
                let l = t__pivot._y;
                e.a = t._cx * a;
                e.b = t._sx * a;
                e.c = t._cy * o;
                e.d = t._sy * o;
                e.tx = t__position._x - (s * e.a + l * e.c);
                e.ty = t__position._y - (s * e.b + l * e.d);
            },
            "updateQuadBounds",
            ()=>nq.updateQuadBounds,
            "updateRenderGroupTransform",
            ()=>lo.updateRenderGroupTransform,
            "updateRenderGroupTransforms",
            ()=>lo.updateRenderGroupTransforms,
            "updateTextBounds",
            0,
            nz,
            "updateTransformAndChildren",
            ()=>lo.updateTransformAndChildren,
            "updateTransformBackwards",
            ()=>tD.updateTransformBackwards,
            "updateWorldTransform",
            0,
            (e, t, r)=>{
                let n = e.a;
                let i = e.b;
                let a = e.c;
                let o = e.d;
                let s = e.tx;
                let l = e.ty;
                let u = t.a;
                let c = t.b;
                let d = t.c;
                let h = t.d;
                r.a = n * u + i * d;
                r.b = n * c + i * h;
                r.c = a * u + o * d;
                r.d = a * c + o * h;
                r.tx = s * u + l * d + t.tx;
                r.ty = s * c + l * h + t.ty;
            },
            "v8_0_0",
            ()=>rd.v8_0_0,
            "v8_3_4",
            ()=>rd.v8_3_4,
            "validFormats",
            0,
            tE,
            "validateRenderables",
            ()=>ls.validateRenderables,
            "vertexGPUTemplate",
            ()=>i4.vertexGPUTemplate,
            "vertexGlTemplate",
            ()=>i4.vertexGlTemplate,
            "vkFormatToGPUFormat",
            0,
            tv,
            "warn",
            ()=>n2.warn,
            "webworkerExt",
            ()=>S.webworkerExt,
            "wordWrap",
            ()=>u7.wordWrap,
            "wordWrapTaggedLines",
            ()=>u4.wordWrapTaggedLines,
            "wrapModeToGlAddress",
            ()=>od.wrapModeToGlAddress
        ], 129782);
    }
]);
