"use strict";
exports.__esModule = true;
exports.getCartTotal = void 0;
function getCartTotal(products) {
    var _a, _b;
    var total = products.reduce(function (accumulator, currentProduct) { return accumulator + currentProduct.price; }, 0);
    return (((_a = products[0]) === null || _a === void 0 ? void 0 : _a.currency) ? (_b = products[0]) === null || _b === void 0 ? void 0 : _b.currency : "USD") + " " + total.toFixed(2);
}
exports.getCartTotal = getCartTotal;
