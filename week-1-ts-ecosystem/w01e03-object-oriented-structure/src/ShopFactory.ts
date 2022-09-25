import { ProductCart, ProductType,CreateNewProductType, UpdateProductData} from "./type";

export class ShopFactory<Type extends ProductType> {
    #shopCartProducts: ProductCart<Type>[] = []

    static createNewProduct<Type extends ProductType>(product: CreateNewProductType<Type>): ProductCart<Type> {
        const  calculation = Math.random()
        const splitCalculation = String(calculation).split(".")[1]
        const productID = Number(splitCalculation);
        return  {
            ...product,
            amount: 1,
            id: Number(productID)
        }
    }
    public getShopCartProducts(): ProductCart<Type>[]  {
        return this.#shopCartProducts
    }
    public getLengthAllProducts(): number {
        const allProducts  = this.getShopCartProducts()
        return allProducts.length ? allProducts.length : 0
    }
    public getAllProductsPrice(): number {
        return this.#shopCartProducts.map(({price,amount})=> {
            return price && amount ? price  * amount : 0;
        }).reduce((prev,nex
        ) => prev + nex, 0);
    }
    public getProduct(id: number): ProductCart<Type> |  undefined {
        return  this.#shopCartProducts.find(p => p.id === id)
    }
    addProduct(product: ProductCart<Type>, amount:number = 1): void {
        this.#shopCartProducts.push({
            ...product,
            amount,
        })

    }
    updateShopCartProduct(productID: ProductCart<Type>["id"], productData: UpdateProductData<Type>): void {
        this.#shopCartProducts = this.#shopCartProducts.map(product => {
            if (product.id === productID) {
                return {
                    ...product,
                    ...productData
                }
            }
            return product;
        })
    }
    deleteProduct(id: ProductCart<Type>["id"]): void {
        this.#shopCartProducts = this.#shopCartProducts.filter(p => p.id !== id)}
}
