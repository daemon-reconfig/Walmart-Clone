"use client";
"use strict";
exports.__esModule = true;
var getCartTotal_1 = require("@/lib/getCartTotal");
var groupBYSKU_1 = require("@/lib/groupBYSKU");
var store_1 = require("@/store");
var image_1 = require("next/image");
var AddToCart_1 = require("./AddToCart");
var button_1 = require("./ui/button");
function Basket() {
    var cart = store_1.useCartStore(function (state) { return state.cart; });
    var grouped = groupBYSKU_1.groupBYSKU(cart);
    var basketTotal = getCartTotal_1.getCartTotal(cart);
    return (React.createElement("div", { className: 'max-w-7xl mx-auto' },
        React.createElement("ul", { className: 'space-y-5 divide-y-2' }, Object.keys(grouped).map(function (sku) {
            var item = grouped[sku][0];
            var total = getCartTotal_1.getCartTotal(grouped[sku]);
            return (React.createElement("li", { key: sku, className: 'p-5 my-2 flex items-center justify-between' },
                item.images[0] && (React.createElement(image_1["default"], { src: item.images[0], alt: item.title, width: 100, height: 100 })),
                React.createElement("div", { className: 'flex space-x-4 pl-4' },
                    React.createElement("div", null,
                        React.createElement("p", { className: 'linne-clamp-1 font-bold' }, item.title),
                        React.createElement("div", { dangerouslySetInnerHTML: { __html: item.description }, className: 'line-clamp-1 font-light text-sm mt-2' })),
                    React.createElement("div", { className: 'flex flex-col border rounded-md p-5' },
                        React.createElement(AddToCart_1["default"], { product: item }),
                        React.createElement("p", { className: 'mt-4 font-bold text-right' }, total)))));
        })),
        React.createElement("div", { className: 'flex flex-col justify-end p-5' },
            React.createElement("p", { className: 'font-bold text-right text-walmart mb-5' },
                "Total: ",
                basketTotal),
            React.createElement(button_1.Button, { className: 'mt-5 h-20 bg-walmart hover:bg-walmart/50 text-slate-50' }, "Checkout"))));
}
exports["default"] = Basket;
