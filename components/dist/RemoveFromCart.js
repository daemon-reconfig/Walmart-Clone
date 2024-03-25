"use client";
"use strict";
exports.__esModule = true;
var store_1 = require("@/store");
var button_1 = require("./ui/button");
function RemoveFromCart(_a) {
    var product = _a.product;
    var removeFromCart = store_1.useCartStore(function (state) { return state.removeFromCart; });
    var handleRemove = function () {
        console.log('remove', product.meta.sku);
        removeFromCart(product);
    };
    var howManyInCart = 0; // Add the declaration of 'howManyInCart' variable
    return (React.createElement("div", null,
        React.createElement(button_1.Button, { className: "bg-walmart hover:bg-walmart/50 text-slate-50", onClick: handleRemove }, "-")));
}
exports["default"] = RemoveFromCart;
