"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopFactory = void 0;
class ShopFactory {
    constructor() {
        _ShopFactory_shopCardProducts.set(this, []);
    }
    static createNewProduct(product) {
        // Of course, an ID generator should be used here, such as uuid
        const calculation = Math.random();
        const splitCalculation = String(calculation).split(".")[1];
        const productID = Number(splitCalculation);
        return Object.assign(Object.assign({}, product), { amount: 1, id: Number(productID) });
    }
    getShopCardProducts() {
        return __classPrivateFieldGet(this, _ShopFactory_shopCardProducts, "f");
    }
    getLengthAllProducts() {
        const allProducts = this.getShopCardProducts();
        return allProducts.length ? allProducts.length : 0;
    }
    getAllProductsPrice() {
        return __classPrivateFieldGet(this, _ShopFactory_shopCardProducts, "f").map(({ price, amount }) => {
            return price && amount ? price * amount : 0;
        }).reduce((prev, nex) => prev + nex, 0);
    }
    getShoCardProduct(id) {
        return __classPrivateFieldGet(this, _ShopFactory_shopCardProducts, "f").find(p => p.id === id);
    }
    addProductToShopCard(product, amount = 1) {
        __classPrivateFieldGet(this, _ShopFactory_shopCardProducts, "f").push(Object.assign(Object.assign({}, product), { amount }));
    }
    updateShopCardProduct(productID, productData) {
        __classPrivateFieldSet(this, _ShopFactory_shopCardProducts, __classPrivateFieldGet(this, _ShopFactory_shopCardProducts, "f").map(product => {
            if (product.id === productID) {
                return Object.assign(Object.assign({}, product), productData);
            }
            return product;
        }), "f");
    }
    deleteProduct(id) {
        __classPrivateFieldSet(this, _ShopFactory_shopCardProducts, __classPrivateFieldGet(this, _ShopFactory_shopCardProducts, "f").filter(p => p.id !== id), "f");
    }
}
exports.ShopFactory = ShopFactory;
_ShopFactory_shopCardProducts = new WeakMap();
