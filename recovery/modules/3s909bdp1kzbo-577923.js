// Recovered from 3s909bdp1kzbo.js. Runtime module IDs: 577923.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  var n = e.r(653743),
    i = n.find,
    a = n.NAMESPACE;
  function o(e) {
    return "" !== e;
  }
  function s(e, t) {
    return e.hasOwnProperty(t) || (e[t] = !0), e;
  }
  function l(e) {
    return e ? Object.keys((e ? e.split(/[\t\n\f\r ]+/).filter(o) : []).reduce(s, {})) : [];
  }
  function u(e, t) {
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  }
  function c(e, t) {
    var r = e.prototype;
    if (!(r instanceof t)) {
      function n() {}
      n.prototype = t.prototype, u(r, n = new n()), e.prototype = r = n;
    }
    r.constructor != e && ("function" != typeof e && console.error("unknown Class:" + e), r.constructor = e);
  }
  var d = {},
    h = d.ELEMENT_NODE = 1,
    p = d.ATTRIBUTE_NODE = 2,
    f = d.TEXT_NODE = 3,
    m = d.CDATA_SECTION_NODE = 4,
    g = d.ENTITY_REFERENCE_NODE = 5,
    b = d.ENTITY_NODE = 6,
    _ = d.PROCESSING_INSTRUCTION_NODE = 7,
    x = d.COMMENT_NODE = 8,
    T = d.DOCUMENT_NODE = 9,
    y = d.DOCUMENT_TYPE_NODE = 10,
    S = d.DOCUMENT_FRAGMENT_NODE = 11,
    v = d.NOTATION_NODE = 12,
    R = {},
    E = {};
  E[1] = "Index size error", R.INDEX_SIZE_ERR = 1, E[2] = "DOMString size error", R.DOMSTRING_SIZE_ERR = 2;
  var A = (E[3] = "Hierarchy request error", R.HIERARCHY_REQUEST_ERR = 3);
  E[4] = "Wrong document", R.WRONG_DOCUMENT_ERR = 4;
  var M = (E[5] = "Invalid character", R.INVALID_CHARACTER_ERR = 5);
  E[6] = "No data allowed", R.NO_DATA_ALLOWED_ERR = 6, E[7] = "No modification allowed", R.NO_MODIFICATION_ALLOWED_ERR = 7;
  var C = (E[8] = "Not found", R.NOT_FOUND_ERR = 8);
  E[9] = "Not supported", R.NOT_SUPPORTED_ERR = 9;
  var G = (E[10] = "Attribute in use", R.INUSE_ATTRIBUTE_ERR = 10),
    w = (E[11] = "Invalid state", R.INVALID_STATE_ERR = 11);
  function D(e, t) {
    if (t instanceof Error) var r = t;else r = this, Error.call(this, E[e]), this.message = E[e], Error.captureStackTrace && Error.captureStackTrace(this, D);
    return r.code = e, t && (this.message = this.message + ": " + t), r;
  }
  function P() {}
  function O(e, t) {
    this._node = e, this._refresh = t, B(this);
  }
  function B(e) {
    var t = e._node._inc || e._node.ownerDocument._inc;
    if (e._inc !== t) {
      var r = e._refresh(e._node);
      if (ex(e, "length", r.length), !e.$$length || r.length < e.$$length) for (var n = r.length; n in e; n++) Object.prototype.hasOwnProperty.call(e, n) && delete e[n];
      u(r, e), e._inc = t;
    }
  }
  function F() {}
  function I(e, t) {
    for (var r = e.length; r--;) if (e[r] === t) return r;
  }
  function U(e, t, r, n) {
    if (n ? t[I(t, n)] = r : t[t.length++] = r, e) {
      r.ownerElement = e;
      var i,
        o,
        s,
        l = e.ownerDocument;
      l && (n && q(l, e, n), i = l, o = e, s = r, i && i._inc++, s.namespaceURI === a.XMLNS && (o._nsMap[s.prefix ? s.localName : ""] = s.value));
    }
  }
  function L(e, t, r) {
    var n = I(t, r);
    if (n >= 0) {
      for (var i = t.length - 1; n < i;) t[n] = t[++n];
      if (t.length = i, e) {
        var a = e.ownerDocument;
        a && (q(a, e, r), r.ownerElement = null);
      }
    } else throw new D(C, Error(e.tagName + "@" + r));
  }
  function N() {}
  function X() {}
  function k(e) {
    return "<" == e && "&lt;" || ">" == e && "&gt;" || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
  }
  function H(e, t) {
    return V(e, null, {
      enter: function (e) {
        return !t(e) || V.STOP;
      }
    }) === V.STOP;
  }
  function V(e, t, r) {
    for (var n = [{
      node: e,
      context: t,
      phase: V.ENTER
    }]; n.length > 0;) {
      var i = n.pop();
      if (i.phase === V.ENTER) {
        var a = r.enter(i.node, i.context);
        if (a === V.STOP) return V.STOP;
        if (n.push({
          node: i.node,
          context: a,
          phase: V.EXIT
        }), null == a) continue;
        for (var o = i.node.lastChild; o;) n.push({
          node: o,
          context: a,
          phase: V.ENTER
        }), o = o.previousSibling;
      } else r.exit && r.exit(i.node, i.context);
    }
  }
  function $() {
    this.ownerDocument = this;
  }
  function q(e, t, r, n) {
    e && e._inc++, r.namespaceURI === a.XMLNS && delete t._nsMap[r.prefix ? r.localName : ""];
  }
  function z(e, t, r) {
    if (e && e._inc) {
      e._inc++;
      var n = t.childNodes;
      if (r) n[n.length++] = r;else {
        for (var i = t.firstChild, a = 0; i;) n[a++] = i, i = i.nextSibling;
        n.length = a, delete n[n.length];
      }
    }
  }
  function W(e, t) {
    var r = t.previousSibling,
      n = t.nextSibling;
    return r ? r.nextSibling = n : e.firstChild = n, n ? n.previousSibling = r : e.lastChild = r, t.parentNode = null, t.previousSibling = null, t.nextSibling = null, z(e.ownerDocument, e), t;
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
    var r = e.childNodes || [];
    if (i(r, j) || Y(t)) return !1;
    var n = i(r, Y);
    return !(t && n && r.indexOf(n) > r.indexOf(t));
  }
  function Z(e, t) {
    var r = e.childNodes || [];
    if (i(r, function (e) {
      return j(e) && e !== t;
    })) return !1;
    var n = i(r, Y);
    return !(t && n && r.indexOf(n) > r.indexOf(t));
  }
  function J(e, t, r) {
    var n = e.childNodes || [],
      a = t.childNodes || [];
    if (t.nodeType === X.DOCUMENT_FRAGMENT_NODE) {
      var o = a.filter(j);
      if (o.length > 1 || i(a, K)) throw new D(A, "More than one element or text in fragment");
      if (1 === o.length && !Z(e, r)) throw new D(A, "Element in fragment can not be inserted before doctype");
    }
    if (j(t) && !Z(e, r)) throw new D(A, "Only one element can be added and only after doctype");
    if (Y(t)) {
      if (i(n, function (e) {
        return Y(e) && e !== r;
      })) throw new D(A, "Only one doctype is allowed");
      var s = i(n, j);
      if (r && n.indexOf(s) < n.indexOf(r)) throw new D(A, "Doctype can only be inserted before an element");
    }
  }
  function ee(e, t, r, n) {
    if (!(e && (e.nodeType === X.DOCUMENT_NODE || e.nodeType === X.DOCUMENT_FRAGMENT_NODE || e.nodeType === X.ELEMENT_NODE))) throw new D(A, "Unexpected parent node type " + e.nodeType);
    if (r && r.parentNode !== e) throw new D(C, "child not in parent");
    if (!(t && (j(t) || K(t) || Y(t) || t.nodeType === X.DOCUMENT_FRAGMENT_NODE || t.nodeType === X.COMMENT_NODE || t.nodeType === X.PROCESSING_INSTRUCTION_NODE)) || Y(t) && e.nodeType !== X.DOCUMENT_NODE) throw new D(A, "Unexpected node type " + t.nodeType + " for parent node type " + e.nodeType);
    e.nodeType === X.DOCUMENT_NODE && (n || function (e, t, r) {
      var n = e.childNodes || [],
        a = t.childNodes || [];
      if (t.nodeType === X.DOCUMENT_FRAGMENT_NODE) {
        var o = a.filter(j);
        if (o.length > 1 || i(a, K)) throw new D(A, "More than one element or text in fragment");
        if (1 === o.length && !Q(e, r)) throw new D(A, "Element in fragment can not be inserted before doctype");
      }
      if (j(t) && !Q(e, r)) throw new D(A, "Only one element can be added and only after doctype");
      if (Y(t)) {
        if (i(n, Y)) throw new D(A, "Only one doctype is allowed");
        var s = i(n, j);
        if (r && n.indexOf(s) < n.indexOf(r)) throw new D(A, "Doctype can only be inserted before an element");
        if (!r && s) throw new D(A, "Doctype can not be appended since element is present");
      }
    })(e, t, r);
    var a = t.parentNode;
    if (a && a.removeChild(t), t.nodeType === S) {
      var o = t.firstChild;
      if (null == o) return t;
      var s = t.lastChild;
    } else o = s = t;
    var l = r ? r.previousSibling : e.lastChild;
    o.previousSibling = l, s.nextSibling = r, l ? l.nextSibling = o : e.firstChild = o, null == r ? e.lastChild = s : r.previousSibling = s;
    do o.parentNode = e, et(o, e.ownerDocument || e); while (o !== s && (o = o.nextSibling));
    return z(e.ownerDocument || e, e), t.nodeType == S && (t.firstChild = t.lastChild = null), t;
  }
  function et(e, t) {
    if (e.ownerDocument !== t) {
      if (e.ownerDocument = t, e.nodeType === h && e.attributes) for (var r = 0; r < e.attributes.length; r++) {
        var n = e.attributes.item(r);
        n && (n.ownerDocument = t);
      }
      for (var i = e.firstChild; i;) et(i, t), i = i.nextSibling;
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
  function ef() {}
  function em(e, t, r) {
    var n = !!r && !!r.requireWellFormed,
      i = [],
      a = 9 == this.nodeType && this.documentElement || this,
      o = a.prefix,
      s = a.namespaceURI;
    if (s && null == o) {
      var o = a.lookupPrefix(s);
      if (null == o) var l = [{
        namespace: s,
        prefix: null
      }];
    }
    return e_(this, i, e, t, l, n), i.join("");
  }
  function eg(e, t, r) {
    var n = e.prefix || "",
      i = e.namespaceURI;
    if (!i || "xml" === n && i === a.XML || i === a.XMLNS) return !1;
    for (var o = r.length; o--;) {
      var s = r[o];
      if (s.prefix === n) return s.namespace !== i;
    }
    return !0;
  }
  function eb(e, t, r) {
    e.push(" ", t, '="', r.replace(/[<>&"\t\n\r]/g, k), '"');
  }
  function e_(e, t, r, n, i, o) {
    i || (i = []), V(e, {
      ns: i,
      isHTML: r
    }, {
      enter: function (e, r) {
        var i = r.ns,
          s = r.isHTML;
        if (n) {
          if (!(e = n(e))) return null;
          if ("string" == typeof e) return t.push(e), null;
        }
        switch (e.nodeType) {
          case h:
            var l,
              u = e.attributes,
              c = u.length,
              d = e.tagName;
            s = a.isHTML(e.namespaceURI) || s;
            var b = d;
            if (!s && !e.prefix && e.namespaceURI) {
              for (var v = 0; v < u.length; v++) if ("xmlns" === u.item(v).name) {
                l = u.item(v).value;
                break;
              }
              if (!l) for (var R = i.length - 1; R >= 0; R--) {
                var E = i[R];
                if ("" === E.prefix && E.namespace === e.namespaceURI) {
                  l = E.namespace;
                  break;
                }
              }
              if (l !== e.namespaceURI) for (var R = i.length - 1; R >= 0; R--) {
                var E = i[R];
                if (E.namespace === e.namespaceURI) {
                  E.prefix && (b = E.prefix + ":" + d);
                  break;
                }
              }
            }
            t.push("<", b);
            for (var A = i.slice(), M = 0; M < c; M++) {
              var C = u.item(M);
              "xmlns" == C.prefix ? A.push({
                prefix: C.localName,
                namespace: C.value
              }) : "xmlns" == C.nodeName && A.push({
                prefix: "",
                namespace: C.value
              });
            }
            for (var M = 0; M < c; M++) {
              var C = u.item(M);
              if (eg(C, s, A)) {
                var G = C.prefix || "",
                  P = C.namespaceURI;
                eb(t, G ? "xmlns:" + G : "xmlns", P), A.push({
                  prefix: G,
                  namespace: P
                });
              }
              var O = n ? n(C) : C;
              O && ("string" == typeof O ? t.push(O) : eb(t, O.name, O.value));
            }
            if (d === b && eg(e, s, A)) {
              var B = e.prefix || "",
                P = e.namespaceURI;
              eb(t, B ? "xmlns:" + B : "xmlns", P), A.push({
                prefix: B,
                namespace: P
              });
            }
            var F = e.firstChild;
            if (!F && (!s || /^(?:meta|link|img|br|hr|input)$/i.test(d))) return t.push("/>"), null;
            if (t.push(">"), s && /^script$/i.test(d)) {
              for (; F;) F.data ? t.push(F.data) : e_(F, t, s, n, A.slice(), o), F = F.nextSibling;
              return t.push("</", d, ">"), null;
            }
            return {
              ns: A,
              isHTML: s,
              tag: b
            };
          case T:
          case S:
            return {
              ns: i.slice(),
              isHTML: s,
              tag: null
            };
          case p:
            return eb(t, e.name, e.value), null;
          case f:
            return t.push(e.data.replace(/[<&>]/g, k)), null;
          case m:
            if (o && -1 !== e.data.indexOf("]]>")) throw new D(w, 'The CDATASection data contains "]]>"');
            return t.push("<![CDATA[", e.data.replace(/]]>/g, "]]]]><![CDATA[>"), "]]>"), null;
          case x:
            if (o && -1 !== e.data.indexOf("-->")) throw new D(w, 'The comment node data contains "-->"');
            return t.push("<!--", e.data, "-->"), null;
          case y:
            if (o) {
              if (e.publicId && !/^("[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%']*"|'[\x20\r\na-zA-Z0-9\-()+,.\/:=?;!*#@$_%'"]*')$/.test(e.publicId)) throw new D(w, "DocumentType publicId is not a valid PubidLiteral");
              if (e.systemId && !/^("[^"]*"|'[^']*')$/.test(e.systemId)) throw new D(w, "DocumentType systemId is not a valid SystemLiteral");
              if (e.internalSubset && -1 !== e.internalSubset.indexOf("]>")) throw new D(w, 'DocumentType internalSubset contains "]>"');
            }
            var I = e.publicId,
              U = e.systemId;
            if (t.push("<!DOCTYPE ", e.name), I) t.push(" PUBLIC ", I), U && "." != U && t.push(" ", U), t.push(">");else if (U && "." != U) t.push(" SYSTEM ", U, ">");else {
              var L = e.internalSubset;
              L && t.push(" [", L, "]"), t.push(">");
            }
            return null;
          case _:
            if (o && -1 !== e.data.indexOf("?>")) throw new D(w, 'The ProcessingInstruction data contains "?>"');
            return t.push("<?", e.target, " ", e.data, "?>"), null;
          case g:
            return t.push("&", e.nodeName, ";"), null;
          default:
            return t.push("??", e.nodeName), null;
        }
      },
      exit: function (e, r) {
        r && r.tag && t.push("</", r.tag, ">");
      }
    });
  }
  function ex(e, t, r) {
    e[t] = r;
  }
  E[12] = "Syntax error", R.SYNTAX_ERR = 12, E[13] = "Invalid modification", R.INVALID_MODIFICATION_ERR = 13, E[14] = "Invalid namespace", R.NAMESPACE_ERR = 14, E[15] = "Invalid access", R.INVALID_ACCESS_ERR = 15, D.prototype = Error.prototype, u(R, D), P.prototype = {
    length: 0,
    item: function (e) {
      return e >= 0 && e < this.length ? this[e] : null;
    },
    toString: function (e, t, r) {
      for (var n = !!r && !!r.requireWellFormed, i = [], a = 0; a < this.length; a++) e_(this[a], i, e, t, null, n);
      return i.join("");
    },
    filter: function (e) {
      return Array.prototype.filter.call(this, e);
    },
    indexOf: function (e) {
      return Array.prototype.indexOf.call(this, e);
    }
  }, O.prototype.item = function (e) {
    return B(this), this[e] || null;
  }, c(O, P), F.prototype = {
    length: 0,
    item: P.prototype.item,
    getNamedItem: function (e) {
      for (var t = this.length; t--;) {
        var r = this[t];
        if (r.nodeName == e) return r;
      }
    },
    setNamedItem: function (e) {
      var t = e.ownerElement;
      if (t && t != this._ownerElement) throw new D(G);
      var r = this.getNamedItem(e.nodeName);
      return U(this._ownerElement, this, e, r), r;
    },
    setNamedItemNS: function (e) {
      var t,
        r = e.ownerElement;
      if (r && r != this._ownerElement) throw new D(G);
      return t = this.getNamedItemNS(e.namespaceURI, e.localName), U(this._ownerElement, this, e, t), t;
    },
    removeNamedItem: function (e) {
      var t = this.getNamedItem(e);
      return L(this._ownerElement, this, t), t;
    },
    removeNamedItemNS: function (e, t) {
      var r = this.getNamedItemNS(e, t);
      return L(this._ownerElement, this, r), r;
    },
    getNamedItemNS: function (e, t) {
      for (var r = this.length; r--;) {
        var n = this[r];
        if (n.localName == t && n.namespaceURI == e) return n;
      }
      return null;
    }
  }, N.prototype = {
    hasFeature: function (e, t) {
      return !0;
    },
    createDocument: function (e, t, r) {
      var n = new $();
      if (n.implementation = this, n.childNodes = new P(), n.doctype = r || null, r && n.appendChild(r), t) {
        var i = n.createElementNS(e, t);
        n.appendChild(i);
      }
      return n;
    },
    createDocumentType: function (e, t, r) {
      var n = new el();
      return n.name = e, n.nodeName = e, n.publicId = t || "", n.systemId = r || "", n;
    }
  }, X.prototype = {
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
    insertBefore: function (e, t) {
      return ee(this, e, t);
    },
    replaceChild: function (e, t) {
      ee(this, e, t, J), t && this.removeChild(t);
    },
    removeChild: function (e) {
      return W(this, e);
    },
    appendChild: function (e) {
      return this.insertBefore(e, null);
    },
    hasChildNodes: function () {
      return null != this.firstChild;
    },
    cloneNode: function (e) {
      return function e(t, r, n) {
        var i;
        return V(r, null, {
          enter: function (r, a) {
            var o = new r.constructor();
            for (var s in r) if (Object.prototype.hasOwnProperty.call(r, s)) {
              var l = r[s];
              "object" != typeof l && l != o[s] && (o[s] = l);
            }
            r.childNodes && (o.childNodes = new P()), o.ownerDocument = t;
            var u = n;
            switch (o.nodeType) {
              case h:
                var c = r.attributes,
                  d = o.attributes = new F(),
                  f = c.length;
                d._ownerElement = o;
                for (var m = 0; m < f; m++) o.setAttributeNode(e(t, c.item(m), !0));
                break;
              case p:
                u = !0;
            }
            return null !== a ? a.appendChild(o) : i = o, u ? o : null;
          }
        }), i;
      }(this.ownerDocument || this, this, e);
    },
    normalize: function () {
      V(this, null, {
        enter: function (e) {
          for (var t = e.firstChild; t;) {
            var r = t.nextSibling;
            null !== r && r.nodeType === f && t.nodeType === f ? (e.removeChild(r), t.appendData(r.data)) : t = r;
          }
          return !0;
        }
      });
    },
    isSupported: function (e, t) {
      return this.ownerDocument.implementation.hasFeature(e, t);
    },
    hasAttributes: function () {
      return this.attributes.length > 0;
    },
    lookupPrefix: function (e) {
      for (var t = this; t;) {
        var r = t._nsMap;
        if (r) {
          for (var n in r) if (Object.prototype.hasOwnProperty.call(r, n) && r[n] === e) return n;
        }
        t = t.nodeType == p ? t.ownerDocument : t.parentNode;
      }
      return null;
    },
    lookupNamespaceURI: function (e) {
      for (var t = this; t;) {
        var r = t._nsMap;
        if (r && Object.prototype.hasOwnProperty.call(r, e)) return r[e];
        t = t.nodeType == p ? t.ownerDocument : t.parentNode;
      }
      return null;
    },
    isDefaultNamespace: function (e) {
      return null == this.lookupPrefix(e);
    }
  }, u(d, X), u(d, X.prototype), V.STOP = Symbol("walkDOM.STOP"), V.ENTER = 0, V.EXIT = 1, $.prototype = {
    nodeName: "#document",
    nodeType: T,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function (e, t) {
      if (e.nodeType == S) {
        for (var r = e.firstChild; r;) {
          var n = r.nextSibling;
          this.insertBefore(r, t), r = n;
        }
        return e;
      }
      return ee(this, e, t), et(e, this), null === this.documentElement && e.nodeType === h && (this.documentElement = e), e;
    },
    removeChild: function (e) {
      return this.documentElement == e && (this.documentElement = null), W(this, e);
    },
    replaceChild: function (e, t) {
      ee(this, e, t, J), et(e, this), t && this.removeChild(t), j(e) && (this.documentElement = e);
    },
    importNode: function (e, t) {
      var r, n, i, a;
      return r = this, n = e, i = t, V(n, null, {
        enter: function (e, t) {
          var n = e.cloneNode(!1);
          return n.ownerDocument = r, n.parentNode = null, null === t ? a = n : t.appendChild(n), e.nodeType === p || i ? n : null;
        }
      }), a;
    },
    getElementById: function (e) {
      var t = null;
      return H(this.documentElement, function (r) {
        if (r.nodeType == h && r.getAttribute("id") == e) return t = r, !0;
      }), t;
    },
    getElementsByClassName: function (e) {
      var t = l(e);
      return new O(this, function (r) {
        var n = [];
        return t.length > 0 && H(r.documentElement, function (i) {
          if (i !== r && i.nodeType === h) {
            var a = i.getAttribute("class");
            if (a) {
              var o = e === a;
              if (!o) {
                var s = l(a);
                o = t.every(function (e) {
                  return s && -1 !== s.indexOf(e);
                });
              }
              o && n.push(i);
            }
          }
        }), n;
      });
    },
    createElement: function (e) {
      var t = new er();
      return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.localName = e, t.childNodes = new P(), (t.attributes = new F())._ownerElement = t, t;
    },
    createDocumentFragment: function () {
      var e = new eh();
      return e.ownerDocument = this, e.childNodes = new P(), e;
    },
    createTextNode: function (e) {
      var t = new ea();
      return t.ownerDocument = this, t.appendData(e), t;
    },
    createComment: function (e) {
      var t = new eo();
      return t.ownerDocument = this, t.appendData(e), t;
    },
    createCDATASection: function (e) {
      if (-1 !== e.indexOf("]]>")) throw new D(M, 'data contains "]]>"');
      var t = new es();
      return t.ownerDocument = this, t.appendData(e), t;
    },
    createProcessingInstruction: function (e, t) {
      var r = new ep();
      return r.ownerDocument = this, r.tagName = r.nodeName = r.target = e, r.nodeValue = r.data = t, r;
    },
    createAttribute: function (e) {
      var t = new en();
      return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, t;
    },
    createEntityReference: function (e) {
      var t = new ed();
      return t.ownerDocument = this, t.nodeName = e, t;
    },
    createElementNS: function (e, t) {
      var r = new er(),
        n = t.split(":"),
        i = r.attributes = new F();
      return r.childNodes = new P(), r.ownerDocument = this, r.nodeName = t, r.tagName = t, r.namespaceURI = e, 2 == n.length ? (r.prefix = n[0], r.localName = n[1]) : r.localName = t, i._ownerElement = r, r;
    },
    createAttributeNS: function (e, t) {
      var r = new en(),
        n = t.split(":");
      return r.ownerDocument = this, r.nodeName = t, r.name = t, r.namespaceURI = e, r.specified = !0, 2 == n.length ? (r.prefix = n[0], r.localName = n[1]) : r.localName = t, r;
    }
  }, c($, X), er.prototype = {
    nodeType: h,
    hasAttribute: function (e) {
      return null != this.getAttributeNode(e);
    },
    getAttribute: function (e) {
      var t = this.getAttributeNode(e);
      return t && t.value || "";
    },
    getAttributeNode: function (e) {
      return this.attributes.getNamedItem(e);
    },
    setAttribute: function (e, t) {
      var r = this.ownerDocument.createAttribute(e);
      r.value = r.nodeValue = "" + t, this.setAttributeNode(r);
    },
    removeAttribute: function (e) {
      var t = this.getAttributeNode(e);
      t && this.removeAttributeNode(t);
    },
    appendChild: function (e) {
      return e.nodeType === S ? this.insertBefore(e, null) : (e.parentNode && e.parentNode.removeChild(e), e.parentNode = this, e.previousSibling = this.lastChild, e.nextSibling = null, e.previousSibling ? e.previousSibling.nextSibling = e : this.firstChild = e, this.lastChild = e, z(this.ownerDocument, this, e), et(e, this.ownerDocument || this), e);
    },
    setAttributeNode: function (e) {
      return this.attributes.setNamedItem(e);
    },
    setAttributeNodeNS: function (e) {
      return this.attributes.setNamedItemNS(e);
    },
    removeAttributeNode: function (e) {
      return this.attributes.removeNamedItem(e.nodeName);
    },
    removeAttributeNS: function (e, t) {
      var r = this.getAttributeNodeNS(e, t);
      r && this.removeAttributeNode(r);
    },
    hasAttributeNS: function (e, t) {
      return null != this.getAttributeNodeNS(e, t);
    },
    getAttributeNS: function (e, t) {
      var r = this.getAttributeNodeNS(e, t);
      return r && r.value || "";
    },
    setAttributeNS: function (e, t, r) {
      var n = this.ownerDocument.createAttributeNS(e, t);
      n.value = n.nodeValue = "" + r, this.setAttributeNode(n);
    },
    getAttributeNodeNS: function (e, t) {
      return this.attributes.getNamedItemNS(e, t);
    },
    getElementsByTagName: function (e) {
      return new O(this, function (t) {
        var r = [];
        return H(t, function (n) {
          n !== t && n.nodeType == h && ("*" === e || n.tagName == e) && r.push(n);
        }), r;
      });
    },
    getElementsByTagNameNS: function (e, t) {
      return new O(this, function (r) {
        var n = [];
        return H(r, function (i) {
          i !== r && i.nodeType === h && ("*" === e || i.namespaceURI === e) && ("*" === t || i.localName == t) && n.push(i);
        }), n;
      });
    }
  }, $.prototype.getElementsByTagName = er.prototype.getElementsByTagName, $.prototype.getElementsByTagNameNS = er.prototype.getElementsByTagNameNS, c(er, X), en.prototype.nodeType = p, c(en, X), ei.prototype = {
    data: "",
    substringData: function (e, t) {
      return this.data.substring(e, e + t);
    },
    appendData: function (e) {
      e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
    },
    insertData: function (e, t) {
      this.replaceData(e, 0, t);
    },
    appendChild: function (e) {
      throw Error(E[A]);
    },
    deleteData: function (e, t) {
      this.replaceData(e, t, "");
    },
    replaceData: function (e, t, r) {
      r = this.data.substring(0, e) + r + this.data.substring(e + t), this.nodeValue = this.data = r, this.length = r.length;
    }
  }, c(ei, X), ea.prototype = {
    nodeName: "#text",
    nodeType: f,
    splitText: function (e) {
      var t = this.data,
        r = t.substring(e);
      t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
      var n = this.ownerDocument.createTextNode(r);
      return this.parentNode && this.parentNode.insertBefore(n, this.nextSibling), n;
    }
  }, c(ea, ei), eo.prototype = {
    nodeName: "#comment",
    nodeType: x
  }, c(eo, ei), es.prototype = {
    nodeName: "#cdata-section",
    nodeType: m
  }, c(es, ei), el.prototype.nodeType = y, c(el, X), eu.prototype.nodeType = v, c(eu, X), ec.prototype.nodeType = b, c(ec, X), ed.prototype.nodeType = g, c(ed, X), eh.prototype.nodeName = "#document-fragment", eh.prototype.nodeType = S, c(eh, X), ep.prototype.nodeType = _, c(ep, X), ef.prototype.serializeToString = function (e, t, r, n) {
    return em.call(e, t, r, n);
  }, X.prototype.toString = em;
  try {
    Object.defineProperty && (Object.defineProperty(O.prototype, "length", {
      get: function () {
        return B(this), this.$$length;
      }
    }), Object.defineProperty(X.prototype, "textContent", {
      get: function () {
        if (this.nodeType === h || this.nodeType === S) {
          var e = [];
          return V(this, null, {
            enter: function (t) {
              return t.nodeType === h || t.nodeType === S || (t.nodeType === _ || t.nodeType === x ? null : void e.push(t.nodeValue));
            }
          }), e.join("");
        }
        return this.nodeValue;
      },
      set: function (e) {
        switch (this.nodeType) {
          case h:
          case S:
            for (; this.firstChild;) this.removeChild(this.firstChild);
            (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
            break;
          default:
            this.data = e, this.value = e, this.nodeValue = e;
        }
      }
    }), ex = function (e, t, r) {
      e["$$" + t] = r;
    });
  } catch (e) {}
  r.DocumentType = el, r.DOMException = D, r.DOMImplementation = N, r.Element = er, r.Node = X, r.NodeList = P, r.walkDOM = V, r.XMLSerializer = ef;
};
