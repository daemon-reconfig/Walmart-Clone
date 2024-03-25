"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var Walmart_Logo_White_png_1 = require("../assets/Images/Walmart Logo White.png");
var lucide_react_1 = require("lucide-react");
var navigation_1 = require("next/navigation");
var store_1 = require("@/store");
var getCartTotal_1 = require("@/lib/getCartTotal");
function Header() {
    var router = navigation_1.useRouter();
    var cart = store_1.useCartStore(function (state) { return state.cart; });
    var total = getCartTotal_1.getCartTotal(cart);
    var handleSubmit = function (e) {
        e.preventDefault();
        var inputE = e.currentTarget.elements.input;
        var input = inputE.value;
        router.push("/search?q=" + input);
        console.log({ input: input });
    };
    return (React.createElement("header", { className: "flex flex-col md:flex-row bg-walmart px-10 py-7 space-x-5 items-center" },
        React.createElement(link_1["default"], { href: "/", className: "mb-5 md:mb-0" },
            React.createElement(image_1["default"], { src: Walmart_Logo_White_png_1["default"], alt: "Walmart Logo", width: 150, height: 150 })),
        React.createElement("form", { onSubmit: handleSubmit, className: "flex items-center bg-white rounded-full w-full flex-1 " },
            React.createElement("input", { type: "text", name: "input", placeholder: "Search", className: "flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black" }),
            React.createElement("button", { type: "submit" },
                React.createElement(lucide_react_1.Search, { className: "rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" }))),
        React.createElement("div", { className: "flex space-x-5 mt-5 md:mt-5" },
            React.createElement(link_1["default"], { href: "/", className: "hidden xl:flex text-white font-bold item-center space-x-2 text-sm" },
                React.createElement(lucide_react_1.Grid2X2, { size: 20 }),
                React.createElement("p", null, "Department")),
            React.createElement(link_1["default"], { href: "/", className: "hidden xl:flex text-white font-bold item-center space-x-2 text-sm" },
                React.createElement(lucide_react_1.LayoutGrid, { size: 20 }),
                React.createElement("p", null, "Services")),
            React.createElement(link_1["default"], { href: "/", className: "flex text-white font-bold item-center space-x-2 text-sm" },
                React.createElement(lucide_react_1.Heart, { size: 20 }),
                React.createElement("div", null,
                    React.createElement("p", { className: "text-xs font-extralight" }, "Reorder"),
                    React.createElement("p", null, "My Items"))),
            React.createElement(link_1["default"], { href: "/", className: "flex text-white font-bold item-center space-x-2 text-sm" },
                React.createElement(lucide_react_1.User, { size: 20 }),
                React.createElement("div", null,
                    React.createElement("p", { className: "text-xs font-extralight" }, "Sign In"),
                    React.createElement("p", null, "Account"))),
            React.createElement(link_1["default"], { href: "/basket", className: "flex text-white font-bold item-center space-x-2 text-sm" },
                React.createElement(lucide_react_1.ShoppingCart, { size: 20 }),
                React.createElement("div", null,
                    React.createElement("p", { className: "text-xs font-extralight" }, cart.length > 0 ? cart.length + " items" : "No items"),
                    React.createElement("p", null, cart.length > 0 ? "" + total : "0"))))));
}
exports["default"] = Header;
