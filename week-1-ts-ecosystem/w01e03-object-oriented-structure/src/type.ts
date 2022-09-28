export enum ProductType {
    BUY_NOW = "BUY_NOW",
    AUCTION = "AUCTION",
    GIVE_FOR_FREE = "GIVE_FOR_FREE",
}
export type ProductCart<Type extends ProductType> = {
    id: string,
    type: Type,
    name: string,
    amount:  number,
    price:  Type extends ProductType.GIVE_FOR_FREE ?  null: number
}

export type CreateNewProductType<Type extends ProductType> = Omit<ProductCart<Type>,"amount" | "id">
export type UpdateProductData<Type extends ProductType> =  Omit<ProductCart<Type>, "id" | "name" | "type">
