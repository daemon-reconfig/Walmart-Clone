"use strict";
exports.__esModule = true;
var skeleton_1 = require("@/components/ui/skeleton");
function loading() {
    return (React.createElement("div", { className: "p-10" },
        React.createElement("h1", { className: "text-3xl font-bold mb-2" }, "Scraping Results"),
        React.createElement("h2", { className: "mb-5 text-gray-400" }, "We wont be long..."),
        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" },
            React.createElement(skeleton_1.Skeleton, { className: "w- [300px] h-[400px]" }),
            React.createElement(skeleton_1.Skeleton, { className: "w- [300px] h-[400px)" }),
            React.createElement(skeleton_1.Skeleton, { className: "w- [300px] h-[400px]" }),
            React.createElement(skeleton_1.Skeleton, { className: "w- [300px] h-[400px)" }),
            React.createElement(skeleton_1.Skeleton, { className: "w- [300px] h-[400px)" }),
            React.createElement(skeleton_1.Skeleton, { className: "w- [300px] h-[400px)" }),
            React.createElement(skeleton_1.Skeleton, { className: "w- [300px] h-[400px]" }),
            React.createElement(skeleton_1.Skeleton, { className: "w- [300px] h-[400px)" }))));
}
exports["default"] = loading;
