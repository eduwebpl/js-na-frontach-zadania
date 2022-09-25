import { ProductType,vinylRecord} from "./type";


export type ProductCart<Type extends ProductType> = {
    id: number,
    type: Type,
    name: string,
    amount:  number,
    price?:   number
}

