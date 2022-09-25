"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShopFactory_1 = require("./ShopFactory");
const type_1 = require("./type");
const backPack = ShopFactory_1.ShopFactory.createNewProduct(({ name: "Backpack", type: type_1.ProductType.BUY_NOW, price: 1000 }));
const wallet = ShopFactory_1.ShopFactory.createNewProduct(({ name: "Wallet", type: type_1.ProductType.BUY_NOW, price: 1000 }));
const book = ShopFactory_1.ShopFactory.createNewProduct(({ name: "Book", type: type_1.ProductType.GIVE_FOR_FREE, price: null }));
const shoes = ShopFactory_1.ShopFactory.createNewProduct(({ name: "Shoes", type: type_1.ProductType.GIVE_FOR_FREE, price: null }));
const bike = ShopFactory_1.ShopFactory.createNewProduct(({ name: "Bike", type: type_1.ProductType.AUCTION, price: 300 }));
const car = ShopFactory_1.ShopFactory.createNewProduct(({ name: "Car", type: type_1.ProductType.AUCTION, price: 100000 }));
const BuyNowShoppingCard = new ShopFactory_1.ShopFactory();
const AuctionShoppingCard = new ShopFactory_1.ShopFactory();
const GetFreeShoppingCard = new ShopFactory_1.ShopFactory();
BuyNowShoppingCard.addProductToShopCard(backPack);
BuyNowShoppingCard.addProductToShopCard(wallet, 4);
AuctionShoppingCard.addProductToShopCard(bike);
AuctionShoppingCard.addProductToShopCard(car, 5);
GetFreeShoppingCard.addProductToShopCard(book);
GetFreeShoppingCard.addProductToShopCard(shoes, 5);
//  IMPOSSIBLE !
// BuyNowShoppingCard.addProduct(book,5)
let myAllBuyNowProducts;
myAllBuyNowProducts = BuyNowShoppingCard.getShopCardProducts();
const allBuyNowProductsPrices = BuyNowShoppingCard.getAllProductsPrice();
console.log("myAllProducts", myAllBuyNowProducts);
console.log("allPrices", allBuyNowProductsPrices);
//We can only change amount and price in already existing product
BuyNowShoppingCard.updateShopCardProduct(backPack.id, { amount: 5000, price: 500 });
const updatedProduct = BuyNowShoppingCard.getShoCardProduct(backPack.id);
console.log("updatedProduct", updatedProduct);
BuyNowShoppingCard.deleteProduct(backPack.id);
myAllBuyNowProducts = BuyNowShoppingCard.getShopCardProducts();
console.log("myAllProducts", myAllBuyNowProducts);
const LengthAllProducts = BuyNowShoppingCard.getLengthAllProducts();
console.log("LengthAllProducts", LengthAllProducts);
