"use strict";
exports.__esModule = true;
exports.groupBYSKU = void 0;
function groupBYSKU(products) {
    return products === null || products === void 0 ? void 0 : products.reduce(function (accumulator, currentProduct) {
        var sku = currentProduct.meta.sku;
        if (!accumulator[sku]) {
            accumulator[sku] = [];
        }
        accumulator[sku].push(currentProduct);
        return accumulator;
    }, {});
}
exports.groupBYSKU = groupBYSKU;
