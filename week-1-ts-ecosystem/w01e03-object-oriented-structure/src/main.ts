import {ProductCart, ProductType, UpdateProductData, vinylRecord} from "./type";


class ShoppingCart<Type extends ProductType> {
    #products: ProductCart<Type>[] = []


    public getProducts(): ProductCart<Type>[]  {
         return this.#products
     }
    public getLengthAllProducts(): number {
        const allProducts  = this.getProducts()
          if(allProducts.length) return allProducts.length
         return 0
     }
        public getProduct(id: number): ProductCart<Type> |  undefined {
         return  this.#products.find(p => p.id === id)
     }
      protected  addProduct(product: ProductCart<Type>): void {
        this.#products.push(product)
      }
    protected  updateProduct(productID: ProductCart<Type>["id"], productData: UpdateProductData<Type>): void {
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
    protected deleteProduct(id: ProductCart<Type>["id"]): void {
    this.#products = this.#products.filter(p => p.id!== id)}
}


 let myAllProducts;
const  VinylShoppingCart = new ShoppingCart<ProductType.BUY_NOW>()
    // VinylShoppingCart.addProduct((vinylRecord))
 myAllProducts = VinylShoppingCart.getProducts()
console.log("myAllProducts", myAllProducts)

// VinylShoppingCart.updateProduct(1,{name:"Elegancki update", amount: 5000, price: 500})
const updatedProduct = VinylShoppingCart.getProduct(1)
console.log("updatedProduct", updatedProduct)

// VinylShoppingCart.deleteProduct(1)
 myAllProducts = VinylShoppingCart.getProducts()
console.log("myAllProducts", myAllProducts)

const LengthAllProducts = VinylShoppingCart.getLengthAllProducts()
console.log("LengthAllProducts", LengthAllProducts)