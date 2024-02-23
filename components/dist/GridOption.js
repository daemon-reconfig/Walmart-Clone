"use strict";
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var image_1 = require("next/image");
var link_1 = require("next/link");
function GridOption(_a) {
    var title = _a.title, className = _a.className, image = _a.image;
    return (React.createElement(link_1["default"], { href: {
            pathname: "/search",
            query: { q: title }
        }, className: utils_1.cn("grid-option relative", className) },
        React.createElement("h2", { className: "text-xl font-bold" }, title),
        image && (React.createElement(image_1["default"], { src: image, alt: title, fill: true, className: "object-cover opacity-20 rounded-md" }))));
}
exports["default"] = GridOption;
