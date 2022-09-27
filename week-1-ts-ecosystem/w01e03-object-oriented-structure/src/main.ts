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
import { CartItem } from "./CartItem";

const auctionProd_1 = new CartItem<"Auction">({
  id: "1",
  name: "Auction product 1",
  price: {
    value: 100,
    currency: "PLN",
  },
  amount: 1,
  unit: "kg",
  category: "Auction",
});

const auctionProd_2 = new CartItem<"Auction">({
  id: "2",
  name: "Auction product 1",
  price: {
    value: 100,
    currency: "PLN",
  },
  amount: 1,
  unit: "kg",
  category: "Auction",
});

const freeProd_1 = new CartItem<"Free">({
  id: "21",
  name: "Auction product 2",
  price: {
    value: 100,
    currency: "PLN",
  },
  amount: 1,
  unit: "kg",
  category: "Free",
});

const shopNowProd_1 = new CartItem<"ShopNow">({
  id: "3",
  name: "Auction product 2",
  price: {
    value: 100,
    currency: "PLN",
  },
  amount: 1,
  unit: "kg",
  category: "ShopNow",
});

const auctionCart = new Cart<"Auction">();
auctionCart.addProduct(auctionProd_1);
auctionCart.addProduct(auctionProd_2);

console.log("All products:", auctionCart.getAllProducts());
console.log("Products count:", auctionCart.getProductCount());
console.log("Total price:", auctionCart.getTotalPrice());

auctionCart.removeProductById("2");
console.log("After remove item with id 2:", auctionCart.getAllProducts());

console.log("Product by id 1:", auctionCart.getProductById("1"));
// auctionCart.addProduct(auctionProd_2); // restricted by type

const freeCart = new Cart<"Free">();
freeCart.addProduct(freeProd_1);

const shopNow = new Cart<"ShopNow">();
shopNow.addProduct(shopNowProd_1);
// shopNow.addProduct(auctionProd_2); // restricted by type
// shopNow.addProduct(freeProd_1); // restricted by type
