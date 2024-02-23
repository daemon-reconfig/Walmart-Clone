"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var badge_1 = require("./ui/badge");
function Product(_a) {
    var _b;
    var product = _a.product;
    return (react_1["default"].createElement(link_1["default"], { href: {
            pathname: "/product",
            query: { url: product.url }
        }, className: 'flex flex-col relative border rounded-md h-full p-5' },
        react_1["default"].createElement(image_1["default"], { src: product.image, alt: product.title, width: 200, height: 200, className: "mx-auto" }),
        react_1["default"].createElement("p", { className: 'text-xl font-bold' }, (_b = product.price) === null || _b === void 0 ? void 0 :
            _b.currency,
            product.price.price),
        product.badge && (react_1["default"].createElement(badge_1.Badge, { className: 'w-fit absolute top-2 right-2' }, product.badge)),
        react_1["default"].createElement(badge_1.Badge, { className: 'w-fit absolute top-2 right-2' }, product.badge),
        react_1["default"].createElement("p", { className: 'font-light' }, product.title),
        product.rating && (react_1["default"].createElement("p", { className: 'text-yellow-500 text-sm' },
            product.rating.rating,
            "\u2605",
            react_1["default"].createElement("span", { className: "text-gray-400 ml-2" },
                "(",
                product.rating.count,
                ")")))));
}
exports["default"] = Product;
