import {ProductCart, ProductType, UpdateProductData, vinylRecord} from "./type";


class ShoppingCart<Type extends ProductType> {
    #products: ProductCart<Type>[] = []

        getProducts(): ProductCart<Type>[]  {
         return this.#products
     }

     getProduct(id: number): ProductCart<Type> |  undefined {
         return  this.#products.find(p => p.id === id)
     }
      addProduct(product: ProductCart<Type>): void {
        this.#products.push(product)
      }
      updateProduct(productID: ProductCart<Type>["id"], productData: UpdateProductData<Type>): void {
          this.#products = this.#products.map(product => {
            if (product.id === productID) {
                return {
                    ...product,
                    ...productData
                }
            }
            return product;
        })
      }
}

const  VinylShoppingCart = new ShoppingCart<ProductType.BUY_NOW>()
    VinylShoppingCart.addProduct((vinylRecord))
const myAllProducts = VinylShoppingCart.getProducts()
console.log("myAllProducts", myAllProducts)

VinylShoppingCart.updateProduct(1,{name:"Elegancki update", amount: 5000, price: 500})
const updatedProduct = VinylShoppingCart.getProduct(1)
console.log("updatedProduct", updatedProduct)