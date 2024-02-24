"use client";
"use strict";
exports.__esModule = true;
var Basket_1 = require("@/components/Basket");
var dialog_1 = require("@/components/ui/dialog");
var navigation_1 = require("next/navigation");
function BasketInterception() {
    var router = navigation_1.useRouter();
    function onDismiss() {
        router.back();
    }
    return (React.createElement(dialog_1.Dialog, { open: true, onOpenChange: function (isOpen) {
            if (!isOpen) {
                onDismiss();
            }
        } },
        React.createElement(dialog_1.DialogContent, { className: "h-4/5 w-full overflow-scroll max-w-3xl bg-slate-50" },
            React.createElement(dialog_1.DialogHeader, null,
                React.createElement(dialog_1.DialogTitle, null, "Basket"),
                React.createElement(dialog_1.DialogDescription, null,
                    React.createElement("p", null, "Contents of your Basket"))),
            React.createElement(Basket_1["default"], null))));
}
exports["default"] = BasketInterception;
