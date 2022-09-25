"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ShopFactory_shopCardProducts;
exports.__esModule = true;
exports.ShopFactory = void 0;
var ShopFactory = /** @class */ (function () {
    function ShopFactory() {
        _ShopFactory_shopCardProducts.set(this, []);
    }
    ShopFactory.createNewProduct = function (product) {
        // Of course, an ID generator should be used here, such as uuid
        var calculation = Math.random();
        var splitCalculation = String(calculation).split(".")[1];
        var productID = Number(splitCalculation);
        return __assign(__assign({}, product), { amount: 1, id: Number(productID) });
    };
    ShopFactory.prototype.getShopCardProducts = function () {
        return __classPrivateFieldGet(this, _ShopFactory_shopCardProducts, "f");
    };
    ShopFactory.prototype.getLengthAllProducts = function () {
        var allProducts = this.getShopCardProducts();
        return allProducts.length ? allProducts.length : 0;
    };
    ShopFactory.prototype.getAllProductsPrice = function () {
        return __classPrivateFieldGet(this, _ShopFactory_shopCardProducts, "f").map(function (_a) {
            var price = _a.price, amount = _a.amount;
            return price && amount ? price * amount : 0;
        }).reduce(function (prev, nex) { return prev + nex; }, 0);
    };
    ShopFactory.prototype.getShoCardProduct = function (id) {
        return __classPrivateFieldGet(this, _ShopFactory_shopCardProducts, "f").find(function (p) { return p.id === id; });
    };
    ShopFactory.prototype.addProductToShopCard = function (product, amount) {
        if (amount === void 0) { amount = 1; }
        __classPrivateFieldGet(this, _ShopFactory_shopCardProducts, "f").push(__assign(__assign({}, product), { amount: amount }));
    };
    ShopFactory.prototype.updateShopCardProduct = function (productID, productData) {
        __classPrivateFieldSet(this, _ShopFactory_shopCardProducts, __classPrivateFieldGet(this, _ShopFactory_shopCardProducts, "f").map(function (product) {
            if (product.id === productID) {
                return __assign(__assign({}, product), productData);
            }
            return product;
        }), "f");
    };
    ShopFactory.prototype.deleteProduct = function (id) {
        __classPrivateFieldSet(this, _ShopFactory_shopCardProducts, __classPrivateFieldGet(this, _ShopFactory_shopCardProducts, "f").filter(function (p) { return p.id !== id; }), "f");
    };
    return ShopFactory;
}());
exports.ShopFactory = ShopFactory;
_ShopFactory_shopCardProducts = new WeakMap();
