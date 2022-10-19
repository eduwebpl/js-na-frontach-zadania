import { Product } from './Product'

export interface ShoppingList {
  id: string
  name: string
  products: Product[]
}
