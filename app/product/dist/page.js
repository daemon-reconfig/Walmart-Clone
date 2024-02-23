"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fetchProduct_1 = require("@/lib/fetchProduct");
var navigation_1 = require("next/navigation");
var image_1 = require("next/image");
var carousel_1 = require("@/components/ui/carousel");
var badge_1 = require("@/components/ui/badge");
var table_1 = require("@/components/ui/table");
var AddToCart_1 = require("@/components/AddToCart");
function ProductPage(_a) {
    var url = _a.searchParams.url;
    return __awaiter(this, void 0, void 0, function () {
        var product;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetchProduct_1["default"](url)];
                case 1:
                    product = _b.sent();
                    if (!product)
                        return [2 /*return*/, navigation_1.notFound()];
                    return [2 /*return*/, (React.createElement("div", { className: "p-4 lg:p-10 flex flex-col lg:flex-row w-full" },
                            React.createElement("div", { className: "hidden lg:inline space-y-4" }, product.images.map(function (image, i) { return (React.createElement(image_1["default"], { key: image, src: image, alt: product.title + " " + i, width: 90, height: 90, className: "border rounded-sm" })); })),
                            React.createElement(carousel_1.Carousel, { opts: {
                                    loop: true
                                }, className: "w-3/5 mb-10 lg:mb-0 lg:w-1/4 self-start flex items-center max-w-xl mx-auto lg:mx-20" },
                                React.createElement(carousel_1.CarouselContent, null, product.images.map(function (image, i) { return (React.createElement(carousel_1.CarouselItem, { key: i },
                                    React.createElement("div", { className: "p-1" },
                                        React.createElement("div", { className: "flex aspect-square items-center justify-center p-2 relative" },
                                            React.createElement(image_1["default"], { key: image, src: image, alt: product.title + " " + i, width: 400, height: 400 }))))); })),
                                React.createElement(carousel_1.CarouselPrevious, null),
                                React.createElement(carousel_1.CarouselNext, null)),
                            React.createElement("div", { className: "flex-1 border rounded-md w-full p-5 space-y-5" },
                                React.createElement("h1", { className: "text-3xl font-bold" }, product.title),
                                React.createElement("div", { className: "space-x-2" }, product.breadcrumbs.map(function (breadcrumb, i) { return (React.createElement(badge_1.Badge, { key: breadcrumb + i, className: breadcrumb, variant: "outline" }, breadcrumb)); })),
                                React.createElement("div", { dangerouslySetInnerHTML: { __html: product.description }, className: "py-5" }),
                                product.price && (React.createElement("p", { className: "text-yellow-500 text-sm" },
                                    product.rating.rating,
                                    "\u2605",
                                    React.createElement("span", { className: "text-gray-400 ml-2" },
                                        "(",
                                        product.rating.count,
                                        ")"))),
                                React.createElement("p", { className: "text-2xl font-bold mt-2" }, product === null || product === void 0 ? void 0 :
                                    product.currency,
                                    " ",
                                    product.price),
                                React.createElement(AddToCart_1["default"], { product: product }),
                                React.createElement("hr", null),
                                React.createElement("h3", { className: "font-bold text-xl pt-10" }, "Specifications"),
                                React.createElement(table_1.Table, null,
                                    React.createElement(table_1.TableHeader, null,
                                        React.createElement(table_1.TableRow, null,
                                            React.createElement(table_1.TableHead, { className: "" }, "Specification"),
                                            React.createElement(table_1.TableHead, null, "Value"))),
                                    React.createElement(table_1.TableBody, null, product.specifications.map(function (spec) { return (React.createElement(table_1.TableRow, { key: spec.key },
                                        React.createElement(table_1.TableCell, { className: "font-bold" }, spec.key),
                                        React.createElement(table_1.TableCell, null, spec.value))); }))))))];
            }
        });
    });
}
exports["default"] = ProductPage;
