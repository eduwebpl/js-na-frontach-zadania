import { ShopFactory} from"./ShopFactory"
import {ProductType} from "./type";

const backPack = ShopFactory.createNewProduct(({name: "Backpack",type: ProductType.BUY_NOW, price: 1000}))
const wallet = ShopFactory.createNewProduct(({name: "Wallet",type: ProductType.BUY_NOW, price: 1000}))

const book = ShopFactory.createNewProduct(({name: "Book",type: ProductType.GIVE_FOR_FREE, price: null}))
const shoes = ShopFactory.createNewProduct(({name: "Shoes",type: ProductType.GIVE_FOR_FREE, price: null}))

const bike = ShopFactory.createNewProduct(({name: "Bike",type: ProductType.AUCTION,price: 300}))
const car = ShopFactory.createNewProduct(({name: "Car",type: ProductType.AUCTION, price: 100000}))


const  BuyNowShoppingCard = new ShopFactory<ProductType.BUY_NOW>()
const  AuctionShoppingCard = new ShopFactory<ProductType.AUCTION>()
const  GetFreeShoppingCard = new ShopFactory<ProductType.GIVE_FOR_FREE>()


BuyNowShoppingCard.addProduct(backPack,3)
BuyNowShoppingCard.addProduct(wallet,4)

AuctionShoppingCard.addProduct(bike,2)
AuctionShoppingCard.addProduct(car,5)

GetFreeShoppingCard.addProduct(book,4)
GetFreeShoppingCard.addProduct(shoes,5)

 //  IMPOSSIBLE !
// BuyNowShoppingCard.addProduct(book,5)

let myAllBuyNowProducts;
 myAllBuyNowProducts = BuyNowShoppingCard.getShopCartProducts()
const allBuyNowProductsPrices = BuyNowShoppingCard.getAllProductsPrice()

console.log("myAllProducts", myAllBuyNowProducts)
console.log("allPrices", allBuyNowProductsPrices)

BuyNowShoppingCard.updateShopCartProduct(backPack.id,{name:"Elegancki update", amount: 5000, price: 500})
const updatedProduct = BuyNowShoppingCard.getProduct(backPack.id)
console.log("updatedProduct", updatedProduct)

BuyNowShoppingCard.deleteProduct(backPack.id)
myAllBuyNowProducts = BuyNowShoppingCard.getShopCartProducts()
console.log("myAllProducts", myAllBuyNowProducts)

const LengthAllProducts = BuyNowShoppingCard.getLengthAllProducts()
console.log("LengthAllProducts", LengthAllProducts)


