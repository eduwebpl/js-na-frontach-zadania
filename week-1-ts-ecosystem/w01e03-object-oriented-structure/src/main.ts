/**
 * To tutaj mamy "START" programu.
 *
 * Przygotuj tutaj kawałek kodu potwierdzający poprawność działania koszyka.
 *
 * Np. Utwórz 3 różne koszyki — dodaj do nich różne produkty.
 * Potem wyświetl te produkty.
 * Wykaż, że koszyki mają różne produkty — inną ich ilość etc.
 * Przygotuj koszyki dla każdego rodzaju produktów.
 * - po prostu: wykaż, że przygotowana logika i modele danych — działają :)
 * */

import { Cart } from "./Cart";
import { AuctionProduct, BuyNowProduct, FreeProduct } from "./Products";

type ProductTypes = BuyNowProduct | FreeProduct | AuctionProduct;

const displayProduct = (product: ProductTypes) => {
  console.log(product.toString());
};

const displayCartProducts = (products: ProductTypes[]) => {
  products.forEach(displayProduct);
};

const FreeProductCart = new Cart<FreeProduct>();
const AuctionProductCart = new Cart<AuctionProduct>();
const BuyNowProductCart = new Cart<BuyNowProduct>();

const FreeProduct1 = new FreeProduct("free1", "Free Product 1", 1);
const FreeProduct2 = new FreeProduct("free2", "Free Product 2", 5);

const AuctionProduct1 = new AuctionProduct(
  "auction1",
  "Auction Product 1",
  1,
  21
);
const AuctionProduct2 = new AuctionProduct(
  "auction2",
  "Auction Product 2",
  3,
  23
);

const BuyNowProduct1 = new BuyNowProduct("buy1", "BuyNow Product 1", 5, 44);
const BuyNowProduct2 = new BuyNowProduct("buy2", "BuyNow Product 2", 10, 21);

FreeProductCart.addProduct(FreeProduct1);
FreeProductCart.addProduct(FreeProduct2);

AuctionProductCart.addProduct(AuctionProduct1);
AuctionProductCart.addProduct(AuctionProduct2);
// AuctionProductCart.addProduct(FreeProductCart); // type error

BuyNowProductCart.addProduct(BuyNowProduct1);
BuyNowProductCart.addProduct(BuyNowProduct2);

console.log("Free products cart");
displayCartProducts(FreeProductCart.products);
console.log("Total: ", FreeProductCart.productsSum);

console.log("Buy new products cart");
displayCartProducts(BuyNowProductCart.products);
console.log("Total: ", BuyNowProductCart.productsSum);

console.log("Auction products cart");
displayCartProducts(AuctionProductCart.products);
console.log("Total: ", AuctionProductCart.productsSum);

const UpdatedBuyNowProduct1 = new BuyNowProduct(
  "buy1",
  "BuyNow Product 1 UPDATED",
  5,
  12
);
BuyNowProductCart.updateProduct(UpdatedBuyNowProduct1);
BuyNowProductCart.removeProduct("buy2");

console.log("UPDATED Buy new products cart");
displayCartProducts(BuyNowProductCart.products);
console.log("Total: ", BuyNowProductCart.productsSum);
