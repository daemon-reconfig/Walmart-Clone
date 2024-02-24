"use client";
"use strict";
exports.__esModule = true;
var store_1 = require("@/store");
var button_1 = require("./ui/button");
var RemoveFromCart_1 = require("./RemoveFromCart");
function AddToCart(_a) {
    var product = _a.product;
    var _b = store_1.useCartStore(function (state) { return [
        state.cart,
        state.addToCart,
    ]; }), cart = _b[0], addToCart = _b[1];
    console.log(cart);
    var howManyInCart = cart.filter(function (item) { return item.meta.sku === product.meta.sku; }).length;
    console.log(howManyInCart);
    var handleAdd = function () {
        addToCart(product);
    };
    if (howManyInCart > 0) {
        return (React.createElement("div", { className: "flex space-x-5 items-center" },
            React.createElement(RemoveFromCart_1["default"], { product: product }),
            React.createElement("span", null, howManyInCart),
            React.createElement(button_1.Button, { className: "bg-walmart hover:bg-walmart/50 text-slate-50", onClick: handleAdd }, "+")));
    }
    return (React.createElement(button_1.Button, { className: "bg-walmart hover:bg-walmart/50 text-slate-50", onClick: handleAdd }, "Add to Cart"));
}
exports["default"] = AddToCart;
