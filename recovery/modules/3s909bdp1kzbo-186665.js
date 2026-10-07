// Recovered from 3s909bdp1kzbo.js. Runtime module IDs: 186665.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  var n = e.r(653743),
    i = e.r(577923),
    a = e.r(719053),
    o = e.r(283344),
    s = i.DOMImplementation,
    l = n.NAMESPACE,
    u = o.ParseError,
    c = o.XMLReader;
  function d(e) {
    return e.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
  }
  function h(e) {
    this.options = e || {
      locator: {}
    };
  }
  function p() {
    this.cdata = !1;
  }
  function f(e, t) {
    t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
  }
  function m(e) {
    if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
  }
  function g(e, t, r) {
    return "string" == typeof e ? e.substr(t, r) : e.length >= t + r || t ? new java.lang.String(e, t, r) + "" : e;
  }
  function b(e, t) {
    e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t);
  }
  h.prototype.parseFromString = function (e, t) {
    var r = this.options,
      n = new c(),
      i = r.domBuilder || new p(),
      o = r.errorHandler,
      s = r.locator,
      u = r.xmlns || {},
      h = /\/x?html?$/.test(t),
      f = h ? a.HTML_ENTITIES : a.XML_ENTITIES;
    s && i.setDocumentLocator(s), n.errorHandler = function (e, t, r) {
      if (!e) {
        if (t instanceof p) return t;
        e = t;
      }
      var n = {},
        i = e instanceof Function;
      function a(t) {
        var a = e[t];
        !a && i && (a = 2 == e.length ? function (r) {
          e(t, r);
        } : e), n[t] = a && function (e) {
          a("[xmldom " + t + "]	" + e + m(r));
        } || function () {};
      }
      return r = r || {}, a("warning"), a("error"), a("fatalError"), n;
    }(o, i, s), n.domBuilder = r.domBuilder || i, h && (u[""] = l.HTML), u.xml = u.xml || l.XML;
    var g = r.normalizeLineEndings || d;
    return e && "string" == typeof e ? n.parse(g(e), u, f) : n.errorHandler.error("invalid doc source"), i.doc;
  }, p.prototype = {
    startDocument: function () {
      this.doc = new s().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
    },
    startElement: function (e, t, r, n) {
      var i = this.doc,
        a = i.createElementNS(e, r || t),
        o = n.length;
      b(this, a), this.currentElement = a, this.locator && f(this.locator, a);
      for (var s = 0; s < o; s++) {
        var e = n.getURI(s),
          l = n.getValue(s),
          r = n.getQName(s),
          u = i.createAttributeNS(e, r);
        this.locator && f(n.getLocator(s), u), u.value = u.nodeValue = l, a.setAttributeNode(u);
      }
    },
    endElement: function (e, t, r) {
      var n = this.currentElement;
      n.tagName, this.currentElement = n.parentNode;
    },
    startPrefixMapping: function (e, t) {},
    endPrefixMapping: function (e) {},
    processingInstruction: function (e, t) {
      var r = this.doc.createProcessingInstruction(e, t);
      this.locator && f(this.locator, r), b(this, r);
    },
    ignorableWhitespace: function (e, t, r) {},
    characters: function (e, t, r) {
      if (e = g.apply(this, arguments)) {
        if (this.cdata) var n = this.doc.createCDATASection(e);else var n = this.doc.createTextNode(e);
        this.currentElement ? this.currentElement.appendChild(n) : /^\s*$/.test(e) && this.doc.appendChild(n), this.locator && f(this.locator, n);
      }
    },
    skippedEntity: function (e) {},
    endDocument: function () {
      this.doc.normalize();
    },
    setDocumentLocator: function (e) {
      (this.locator = e) && (e.lineNumber = 0);
    },
    comment: function (e, t, r) {
      e = g.apply(this, arguments);
      var n = this.doc.createComment(e);
      this.locator && f(this.locator, n), b(this, n);
    },
    startCDATA: function () {
      this.cdata = !0;
    },
    endCDATA: function () {
      this.cdata = !1;
    },
    startDTD: function (e, t, r) {
      var n = this.doc.implementation;
      if (n && n.createDocumentType) {
        var i = n.createDocumentType(e, t, r);
        this.locator && f(this.locator, i), b(this, i), this.doc.doctype = i;
      }
    },
    warning: function (e) {
      console.warn("[xmldom warning]	" + e, m(this.locator));
    },
    error: function (e) {
      console.error("[xmldom error]	" + e, m(this.locator));
    },
    fatalError: function (e) {
      throw new u(e, this.locator);
    }
  }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (e) {
    p.prototype[e] = function () {
      return null;
    };
  }), r.__DOMHandler = p, r.normalizeLineEndings = d, r.DOMParser = h;
};
