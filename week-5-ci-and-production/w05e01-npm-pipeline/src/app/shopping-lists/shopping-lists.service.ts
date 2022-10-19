import { v4 } from 'uuid'
import { ShoppingList } from './model/ShoppingList'
import { Product } from './model/Product'

const data: ShoppingList[] = [
  makeFakeList('Shopping #1', [
    makeFakeProduct({
      name: 'SmartPhone',
      quantity: 1,
      value: 2300,
      unit: 'item',
    }),
  ]),
  makeFakeList('Groceries', [
    makeFakeProduct({ name: 'Tomatoes', quantity: 2, value: 6, unit: 'kg' }),
    withStatus(
      makeFakeProduct({
        name: 'Potatoes',
        quantity: 11,
        value: 2.44,
        unit: 'kg',
      }),
      'BOUGHT'
    ),
    makeFakeProduct({
      name: 'Onions',
      quantity: 2,
      value: 3,
      unit: 'kylo',
    }),
  ]),
]

export const shoppingListsService = {
  async getAll(): Promise<readonly ShoppingList[]> {
    return data
  },
  async getOne(id: string): Promise<ShoppingList | undefined> {
    return data.find((sl) => sl.id === id)
  },
}

// Just some "FAKE" helpers here:

function makeFakeList(name: string, products: Product[] = []): ShoppingList {
  return {
    id: v4(),
    name,
    products,
  }
}

function makeFakeProduct({
  name,
  quantity,
  value,
  description,
  unit,
}: Omit<Product, 'id' | 'status' | 'price'>): Product {
  return {
    id: v4(),
    description,
    name,
    quantity,
    value,
    unit,
    get price() {
      return this.quantity * this.value
    },
    status: 'AWAITING',
  }
}

function withStatus(product: Product, status: 'AWAITING' | 'BOUGHT'): Product {
  return { ...product, status }
}
