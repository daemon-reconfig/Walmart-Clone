"use strict";
exports.__esModule = true;
var skeleton_1 = require("@/components/ui/skeleton");
function Loading() {
    return (React.createElement("div", { className: "p-10 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center space-x-4 mx-auto space-y-4 19:space-y-8" },
        React.createElement("div", { className: "flex spacex-4" },
            React.createElement("div", { className: "hidden 1g:inline space-y-4" },
                React.createElement(skeleton_1.Skeleton, { className: "u-[100px] h-[108px) rounded-md" }),
                React.createElement(skeleton_1.Skeleton, { className: "w- [100px] h-[100px] rounded-ed" }),
                React.createElement(skeleton_1.Skeleton, { className: "w-[100px] h-[100px] rounded-md" })),
            React.createElement(skeleton_1.Skeleton, { className: "inline lgihidden w-1200px) h-(200px) rounded-ed" }),
            React.createElement(skeleton_1.Skeleton, { className: "hidden tg:inline lg:w-[400px) 19:h-[300px] rounded-ed" })),
        React.createElement("div", { className: "w-[400px) h-1500px) sm:w-1520px) sm:h-[780px] rounded-nd space-y-2 border p-2 animate-pulse" },
            React.createElement(skeleton_1.Skeleton, { className: "w-1380px] h-[40px] smtw-[508px] rounded-ad" }),
            React.createElement(skeleton_1.Skeleton, { className: "w- [380px] h-[40px ) sm:w-[300px) rounded-ed" }),
            React.createElement(skeleton_1.Skeleton, { className: "w-[388px] h-(385px] sm:h-[650px] sm:w-[500px] rounded-md" }))));
}
exports["default"] = Loading;
