// Recovered from 2uise9_bjpye1.js. Runtime module IDs: 60727.
// This factory requires the original Turbopack runtime context.
export default (t, e, r) => {
  "use strict";

  var n = t.e && t.e.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      default: t
    };
  };
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.Track = void 0;
  var o = n(t.r(322517)),
    i = t.r(945075),
    a = t.r(375776),
    s = n(t.r(190262)),
    u = n(t.r(979424));
  function p(t, e) {
    i.Facade.call(this, t, e);
  }
  r.Track = p, o.default(p, i.Facade);
  var c = p.prototype;
  c.action = function () {
    return "track";
  }, c.type = c.action, c.event = i.Facade.field("event"), c.value = i.Facade.proxy("properties.value"), c.category = i.Facade.proxy("properties.category"), c.id = i.Facade.proxy("properties.id"), c.productId = function () {
    return this.proxy("properties.product_id") || this.proxy("properties.productId");
  }, c.promotionId = function () {
    return this.proxy("properties.promotion_id") || this.proxy("properties.promotionId");
  }, c.cartId = function () {
    return this.proxy("properties.cart_id") || this.proxy("properties.cartId");
  }, c.checkoutId = function () {
    return this.proxy("properties.checkout_id") || this.proxy("properties.checkoutId");
  }, c.paymentId = function () {
    return this.proxy("properties.payment_id") || this.proxy("properties.paymentId");
  }, c.couponId = function () {
    return this.proxy("properties.coupon_id") || this.proxy("properties.couponId");
  }, c.wishlistId = function () {
    return this.proxy("properties.wishlist_id") || this.proxy("properties.wishlistId");
  }, c.reviewId = function () {
    return this.proxy("properties.review_id") || this.proxy("properties.reviewId");
  }, c.orderId = function () {
    return this.proxy("properties.id") || this.proxy("properties.order_id") || this.proxy("properties.orderId");
  }, c.sku = i.Facade.proxy("properties.sku"), c.tax = i.Facade.proxy("properties.tax"), c.name = i.Facade.proxy("properties.name"), c.price = i.Facade.proxy("properties.price"), c.total = i.Facade.proxy("properties.total"), c.repeat = i.Facade.proxy("properties.repeat"), c.coupon = i.Facade.proxy("properties.coupon"), c.shipping = i.Facade.proxy("properties.shipping"), c.discount = i.Facade.proxy("properties.discount"), c.shippingMethod = function () {
    return this.proxy("properties.shipping_method") || this.proxy("properties.shippingMethod");
  }, c.paymentMethod = function () {
    return this.proxy("properties.payment_method") || this.proxy("properties.paymentMethod");
  }, c.description = i.Facade.proxy("properties.description"), c.plan = i.Facade.proxy("properties.plan"), c.subtotal = function () {
    var t = u.default(this.properties(), "subtotal"),
      e = this.total() || this.revenue();
    if (t) return t;
    if (!e) return 0;
    if (this.total()) {
      var r = this.tax();
      r && (e -= r), (r = this.shipping()) && (e -= r), (r = this.discount()) && (e += r);
    }
    return e;
  }, c.products = function () {
    var t = this.properties(),
      e = u.default(t, "products");
    return Array.isArray(e) ? e.filter(function (t) {
      return null !== t;
    }) : [];
  }, c.quantity = function () {
    return (this.obj.properties || {}).quantity || 1;
  }, c.currency = function () {
    return (this.obj.properties || {}).currency || "USD";
  }, c.referrer = function () {
    return this.proxy("context.referrer.url") || this.proxy("context.page.referrer") || this.proxy("properties.referrer");
  }, c.query = i.Facade.proxy("options.query"), c.properties = function (t) {
    var e = this.field("properties") || {};
    for (var r in t = t || {}) if (Object.prototype.hasOwnProperty.call(t, r)) {
      var n = null == this[r] ? this.proxy("properties." + r) : this[r]();
      if (null == n) continue;
      e[t[r]] = n, delete e[r];
    }
    return e;
  }, c.username = function () {
    return this.proxy("traits.username") || this.proxy("properties.username") || this.userId() || this.sessionId();
  }, c.email = function () {
    var t = this.proxy("traits.email") || this.proxy("properties.email") || this.proxy("options.traits.email");
    if (t) return t;
    var e = this.userId();
    if (s.default(e)) return e;
  }, c.revenue = function () {
    var t = this.proxy("properties.revenue"),
      e = this.event();
    return !t && e && e.match(/^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i) && (t = this.proxy("properties.total")), function (t) {
      if (t && ("number" == typeof t || "string" == typeof t && !isNaN(t = parseFloat(t = t.replace(/\$/g, ""))))) return t;
    }(t);
  }, c.cents = function () {
    var t = this.revenue();
    return "number" != typeof t ? this.value() || 0 : 100 * t;
  }, c.identify = function () {
    var t = this.json();
    return t.traits = this.traits(), new a.Identify(t, this.opts);
  };
};
