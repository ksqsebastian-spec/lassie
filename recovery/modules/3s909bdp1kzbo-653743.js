// Recovered from 3s909bdp1kzbo.js. Runtime module IDs: 653743.
// This factory requires the original Turbopack runtime context.
export default (e, t, r) => {
  "use strict";

  function n(e, t) {
    return void 0 === t && (t = Object), t && "function" == typeof t.freeze ? t.freeze(e) : e;
  }
  var i = n({
      HTML: "text/html",
      isHTML: function (e) {
        return e === i.HTML;
      },
      XML_APPLICATION: "application/xml",
      XML_TEXT: "text/xml",
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      XML_SVG_IMAGE: "image/svg+xml"
    }),
    a = n({
      HTML: "http://www.w3.org/1999/xhtml",
      isHTML: function (e) {
        return e === a.HTML;
      },
      SVG: "http://www.w3.org/2000/svg",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/"
    });
  r.assign = function (e, t) {
    if (null === e || "object" != typeof e) throw TypeError("target is not an object");
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e;
  }, r.find = function (e, t, r) {
    if (void 0 === r && (r = Array.prototype), e && "function" == typeof r.find) return r.find.call(e, t);
    for (var n = 0; n < e.length; n++) if (Object.prototype.hasOwnProperty.call(e, n)) {
      var i = e[n];
      if (t.call(void 0, i, n, e)) return i;
    }
  }, r.freeze = n, r.MIME_TYPE = i, r.NAMESPACE = a;
};
