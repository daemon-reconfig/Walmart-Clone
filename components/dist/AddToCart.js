"use client";
"use strict";
exports.__esModule = true;
var store_1 = require("@/store");
function AddToCart(_a) {
    var product = _a.product;
    var _b = store_1.useCartStore(function (state) { return [
        state.cart,
        state.addToCart,
    ]; }), cart = _b[0], addToCart = _b[1];
    console.log(cart);
    var howManyInCart = cart.filter(function (item) { return item.meta.sku === product.meta.sku; }).length;
    console.log(howManyInCart);
    if (howManyInCart > 0) {
        React.createElement("div", { className: "flex space-x-5 items-center" },
            React.createElement("p", null, "-"),
            React.createElement("span", null, howManyInCart));
    }
    return (React.createElement("div", null, "AddToCart"));
}
exports["default"] = AddToCart;
