"use strict";
exports.__esModule = true;
var Basket_1 = require("@/components/Basket");
var lucide_react_1 = require("lucide-react");
function BasketPage() {
    return (React.createElement("div", { className: "w-full p-10 max-w-7xl mx-auto" },
        React.createElement("div", { className: "flex items-center space-x-2" },
            React.createElement(lucide_react_1.ShoppingCartIcon, { className: "w-10 h-10" }),
            React.createElement("h1", { className: "text-3xl font-bold" }, "Your Cart")),
        React.createElement("p", { className: "mt-2 mb-5" }, "Review the itmes in your cart and proceed to checkout when you are ready!"),
        React.createElement(Basket_1["default"], null)));
}
exports["default"] = BasketPage;
