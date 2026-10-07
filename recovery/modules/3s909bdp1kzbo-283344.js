// Recovered from 3s909bdp1kzbo.js. Runtime module IDs: 283344.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  var n = e.r(653743).NAMESPACE,
    i = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a = RegExp("[\\-\\.0-9" + i.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
    o = RegExp("^" + i.source + a.source + "*(?::" + i.source + a.source + "*)?$");
  function s(e, t) {
    this.message = e, this.locator = t, Error.captureStackTrace && Error.captureStackTrace(this, s);
  }
  function l() {}
  function u(e, t) {
    return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
  }
  function c(e, t, r) {
    for (var i = e.tagName, a = null, o = e.length; o--;) {
      var s = e[o],
        l = s.qName,
        u = s.value,
        c = l.indexOf(":");
      if (c > 0) var h = s.prefix = l.slice(0, c),
        p = l.slice(c + 1),
        f = "xmlns" === h && p;else p = l, h = null, f = "xmlns" === l && "";
      s.localName = p, !1 !== f && (null == a && (a = {}, d(r, r = {})), r[f] = a[f] = u, s.uri = n.XMLNS, t.startPrefixMapping(f, u));
    }
    for (var o = e.length; o--;) {
      var h = (s = e[o]).prefix;
      h && ("xml" === h && (s.uri = n.XML), "xmlns" !== h && (s.uri = r[h || ""]));
    }
    var c = i.indexOf(":");
    c > 0 ? (h = e.prefix = i.slice(0, c), p = e.localName = i.slice(c + 1)) : (h = null, p = e.localName = i);
    var m = e.uri = r[h || ""];
    if (t.startElement(m, p, i, e), !e.closed) return e.currentNSMap = r, e.localNSMap = a, !0;
    if (t.endElement(m, p, i), a) for (h in a) Object.prototype.hasOwnProperty.call(a, h) && t.endPrefixMapping(h);
  }
  function d(e, t) {
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  }
  function h() {
    this.attributeNames = {};
  }
  s.prototype = Error(), s.prototype.name = s.name, l.prototype = {
    parse: function (e, t, r) {
      var i = this.domBuilder;
      i.startDocument(), d(t, t = {}), function (e, t, r, i, a) {
        function o(e) {
          var t,
            n = e.slice(1, -1);
          return Object.hasOwnProperty.call(r, n) ? r[n] : "#" === n.charAt(0) ? (t = parseInt(n.substr(1).replace("x", "0x"))) > 65535 ? String.fromCharCode(55296 + ((t -= 65536) >> 10), 56320 + (1023 & t)) : String.fromCharCode(t) : (a.error("entity not found:" + e), e);
        }
        function l(t) {
          if (t > x) {
            var r = e.substring(x, t).replace(/&#?\w+;/g, o);
            g && d(x), i.characters(r, 0, t - x), x = t;
          }
        }
        function d(t, r) {
          for (; t >= f && (r = m.exec(e));) f = (p = r.index) + r[0].length, g.lineNumber++;
          g.columnNumber = t - p + 1;
        }
        for (var p = 0, f = 0, m = /.*(?:\r\n?|\n)|.*$/g, g = i.locator, b = [{
            currentNSMap: t
          }], _ = {}, x = 0;;) {
          try {
            var T = e.indexOf("<", x);
            if (T < 0) {
              if (!e.substr(x).match(/^\s*$/)) {
                var y = i.doc,
                  S = y.createTextNode(e.substr(x));
                y.appendChild(S), i.currentElement = S;
              }
              return;
            }
            switch (T > x && l(T), e.charAt(T + 1)) {
              case "/":
                var v = e.indexOf(">", T + 3),
                  R = e.substring(T + 2, v).replace(/[ \t\n\r]+$/g, ""),
                  E = b.pop();
                v < 0 ? (R = e.substring(T + 2).replace(/[\s<].*/, ""), a.error("end tag name: " + R + " is not complete:" + E.tagName), v = T + 1 + R.length) : R.match(/\s</) && (R = R.replace(/[\s<].*/, ""), a.error("end tag name: " + R + " maybe not complete"), v = T + 1 + R.length);
                var A = E.localNSMap,
                  M = E.tagName == R;
                if (M || E.tagName && E.tagName.toLowerCase() == R.toLowerCase()) {
                  if (i.endElement(E.uri, E.localName, R), A) for (var C in A) Object.prototype.hasOwnProperty.call(A, C) && i.endPrefixMapping(C);
                  M || a.fatalError("end tag name: " + R + " is not match the current start tagName:" + E.tagName);
                } else b.push(E);
                v++;
                break;
              case "?":
                g && d(T), v = function (e, t, r) {
                  var n = e.indexOf("?>", t);
                  if (n) {
                    var i = e.substring(t, n).match(/^<\?(\S*)\s*([\s\S]*?)$/);
                    if (i) return i[0].length, r.processingInstruction(i[1], i[2]), n + 2;
                  }
                  return -1;
                }(e, T, i);
                break;
              case "!":
                g && d(T), v = function (e, t, r, n) {
                  if ("-" === e.charAt(t + 2)) {
                    if ("-" === e.charAt(t + 3)) {
                      var i = e.indexOf("-->", t + 4);
                      if (i > t) return r.comment(e, t + 4, i - t - 4), i + 3;
                      n.error("Unclosed comment");
                    }
                  } else {
                    if ("CDATA[" == e.substr(t + 3, 6)) {
                      var i = e.indexOf("]]>", t + 9);
                      return r.startCDATA(), r.characters(e, t + 9, i - t - 9), r.endCDATA(), i + 3;
                    }
                    var a = function (e, t) {
                        var r,
                          n = [],
                          i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                        for (i.lastIndex = t, i.exec(e); r = i.exec(e);) if (n.push(r), r[1]) return n;
                      }(e, t),
                      o = a.length;
                    if (o > 1 && /!doctype/i.test(a[0][0])) {
                      var s = a[1][0],
                        l = !1,
                        u = !1;
                      o > 3 && (/^public$/i.test(a[2][0]) ? (l = a[3][0], u = o > 4 && a[4][0]) : /^system$/i.test(a[2][0]) && (u = a[3][0]));
                      var c = a[o - 1];
                      return r.startDTD(s, l, u), r.endDTD(), c.index + c[0].length;
                    }
                  }
                  return -1;
                }(e, T, i, a);
                break;
              default:
                g && d(T);
                var G = new h(),
                  w = b[b.length - 1].currentNSMap,
                  v = function (e, t, r, i, a, o) {
                    function s(e, t, n) {
                      r.attributeNames.hasOwnProperty(e) && o.fatalError("Attribute " + e + " redefined"), r.addValue(e, t.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, a), n);
                    }
                    for (var l, u, c = ++t, d = 0;;) {
                      var h = e.charAt(c);
                      switch (h) {
                        case "=":
                          if (1 === d) l = e.slice(t, c), d = 3;else if (2 === d) d = 3;else throw Error("attribute equal must after attrName");
                          break;
                        case "'":
                        case '"':
                          if (3 === d || 1 === d) {
                            if (1 === d && (o.warning('attribute value must after "="'), l = e.slice(t, c)), t = c + 1, (c = e.indexOf(h, t)) > 0) s(l, u = e.slice(t, c), t - 1), d = 5;else throw Error("attribute value no end '" + h + "' match");
                          } else if (4 == d) s(l, u = e.slice(t, c), t), o.warning('attribute "' + l + '" missed start quot(' + h + ")!!"), t = c + 1, d = 5;else throw Error('attribute value must after "="');
                          break;
                        case "/":
                          switch (d) {
                            case 0:
                              r.setTagName(e.slice(t, c));
                            case 5:
                            case 6:
                            case 7:
                              d = 7, r.closed = !0;
                            case 4:
                            case 1:
                              break;
                            case 2:
                              r.closed = !0;
                              break;
                            default:
                              throw Error("attribute invalid close char('/')");
                          }
                          break;
                        case "":
                          return o.error("unexpected end of input"), 0 == d && r.setTagName(e.slice(t, c)), c;
                        case ">":
                          switch (d) {
                            case 0:
                              r.setTagName(e.slice(t, c));
                            case 5:
                            case 6:
                            case 7:
                              break;
                            case 4:
                            case 1:
                              "/" === (u = e.slice(t, c)).slice(-1) && (r.closed = !0, u = u.slice(0, -1));
                            case 2:
                              2 === d && (u = l), 4 == d ? (o.warning('attribute "' + u + '" missed quot(")!'), s(l, u, t)) : (n.isHTML(i[""]) && u.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + u + '" missed value!! "' + u + '" instead!!'), s(u, u, t));
                              break;
                            case 3:
                              throw Error("attribute value missed!!");
                          }
                          return c;
                        case "":
                          h = " ";
                        default:
                          if (h <= " ") switch (d) {
                            case 0:
                              r.setTagName(e.slice(t, c)), d = 6;
                              break;
                            case 1:
                              l = e.slice(t, c), d = 2;
                              break;
                            case 4:
                              var u = e.slice(t, c);
                              o.warning('attribute "' + u + '" missed quot(")!!'), s(l, u, t);
                            case 5:
                              d = 6;
                          } else switch (d) {
                            case 2:
                              r.tagName, n.isHTML(i[""]) && l.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + l + '" missed value!! "' + l + '" instead2!!'), s(l, l, t), t = c, d = 1;
                              break;
                            case 5:
                              o.warning('attribute space is required"' + l + '"!!');
                            case 6:
                              d = 1, t = c;
                              break;
                            case 3:
                              d = 4, t = c;
                              break;
                            case 7:
                              throw Error("elements closed character '/' and '>' must be connected to");
                          }
                      }
                      c++;
                    }
                  }(e, T, G, w, o, a),
                  D = G.length;
                if (!G.closed && function (e, t, r, n) {
                  var i = n[r];
                  return null == i && ((i = e.lastIndexOf("</" + r + ">")) < t && (i = e.lastIndexOf("</" + r)), n[r] = i), i < t;
                }(e, v, G.tagName, _) && (G.closed = !0, r.nbsp || a.warning("unclosed xml attribute")), g && D) {
                  for (var P = u(g, {}), O = 0; O < D; O++) {
                    var B = G[O];
                    d(B.offset), B.locator = u(g, {});
                  }
                  i.locator = P, c(G, i, w) && b.push(G), i.locator = g;
                } else c(G, i, w) && b.push(G);
                n.isHTML(G.uri) && !G.closed ? v = function (e, t, r, n, i) {
                  if (/^(?:script|textarea)$/i.test(r)) {
                    var a = e.indexOf("</" + r + ">", t),
                      o = e.substring(t + 1, a);
                    if (/[&<]/.test(o)) return /^script$/i.test(r) || (o = o.replace(/&#?\w+;/g, n)), i.characters(o, 0, o.length), a;
                  }
                  return t + 1;
                }(e, v, G.tagName, o, i) : v++;
            }
          } catch (e) {
            if (e instanceof s) throw e;
            a.error("element parse error: " + e), v = -1;
          }
          v > x ? x = v : l(Math.max(T, x) + 1);
        }
      }(e, t, r, i, this.errorHandler), i.endDocument();
    }
  }, h.prototype = {
    setTagName: function (e) {
      if (!o.test(e)) throw Error("invalid tagName:" + e);
      this.tagName = e;
    },
    addValue: function (e, t, r) {
      if (!o.test(e)) throw Error("invalid attribute:" + e);
      this.attributeNames[e] = this.length, this[this.length++] = {
        qName: e,
        value: t,
        offset: r
      };
    },
    length: 0,
    getLocalName: function (e) {
      return this[e].localName;
    },
    getLocator: function (e) {
      return this[e].locator;
    },
    getQName: function (e) {
      return this[e].qName;
    },
    getURI: function (e) {
      return this[e].uri;
    },
    getValue: function (e) {
      return this[e].value;
    }
  }, r.XMLReader = l, r.ParseError = s;
};
