import type { Product } from './Product';

export interface ShoppingList {
  id: number;
  name: string;
  products: Product[];
}
