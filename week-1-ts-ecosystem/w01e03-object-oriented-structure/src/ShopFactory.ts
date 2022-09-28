import { ProductCart, ProductType,CreateNewProductType, UpdateProductData} from "./type";

export class ShopFactory<Type extends ProductType> {
    #shopCardProducts: ProductCart<Type>[] = []

    static createNewProduct<Type extends ProductType>(product: CreateNewProductType<Type>): ProductCart<Type> {
        // Of course, an ID generator should be used here, such as uuid
        const  calculation = Math.random()
        const productID = String(calculation).split(".")[1]
        return  {
            ...product,
            amount: 1,
            id: productID
        }
    }
    public getShopCardProducts(): ProductCart<Type>[]  {
        return this.#shopCardProducts
    }
    public getLengthAllProducts(): number {
        const allProducts  = this.getShopCardProducts()
        return allProducts.length ? allProducts.length : 0
    }
    public getAllProductsPrice(): number {
        return this.#shopCardProducts.map(({price,amount})=> {
            return price && amount ? price  * amount : 0;
        }).reduce((prev,nex
        ) => prev + nex, 0);
    }
    public getShoCardProduct(id: string): ProductCart<Type> |  undefined {
        return  this.#shopCardProducts.find(p => p.id === id)
    }
    addProductToShopCard(product: ProductCart<Type>, amount:number = 1): void {
        this.#shopCardProducts.push({
            ...product,
            amount,
        })

    }
    updateShopCardProduct(productID: ProductCart<Type>["id"], productData: UpdateProductData<Type>): void {
        this.#shopCardProducts = this.#shopCardProducts.map(product => {
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
        this.#shopCardProducts = this.#shopCardProducts.filter(p => p.id !== id)}
}
