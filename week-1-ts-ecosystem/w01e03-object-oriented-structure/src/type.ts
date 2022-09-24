import * as Path from "path";

export enum ProductType {
    BUY_NOW = "BUY_NOW",
    AUCTION = "AUCTION",
    GIVE_FOR_FREE = "GIVE_FOR_FREE",
}


export type ProductCart<Type extends ProductType> = {
    id: number,
    type: Type,
    name: string,
    amount:  number,
    price:  Type extends ProductType.GIVE_FOR_FREE ? undefined : number;
}

export const vinylRecord: ProductCart<ProductType.BUY_NOW> = {
    id:1,
    type: ProductType.BUY_NOW,
    name: "Gunse's Rosess",
    amount: 1,
    price: 100
}

export const course: ProductCart<ProductType.AUCTION> = {
    id:1,
    type: ProductType.AUCTION,
    name: "javascript on the front end",
    amount: 1,
    price: 1500
}

export const kindHeart: ProductCart<ProductType.GIVE_FOR_FREE> = {
    id:1,
    type: ProductType.GIVE_FOR_FREE,
    name: "kindHeart",
    amount: 1,
    price: undefined
}

export type UpdateProductData<Type extends ProductType> =  Omit<Partial<ProductCart<Type>>, "id">
