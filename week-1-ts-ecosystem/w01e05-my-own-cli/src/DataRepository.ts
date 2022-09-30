import { ProductTypes } from './shared_w01e03/Cart'
import {
  AuctionProduct,
  BuyNowProduct,
  FreeProduct,
} from './shared_w01e03/Products'
import {
  loadProductsData,
  logger,
  removeProductsData,
  saveProduct,
} from './utils'
export type PersistantKey = 'auctions' | 'buyNow' | 'forFree'

export class DataRepository<Type extends ProductTypes> {
  #persistenceKey: PersistantKey
  #persistence: boolean
  constructor(persistenceKey: PersistantKey, persistence = false) {
    this.#persistenceKey = persistenceKey
    this.#persistence = persistence
  }

  syncProductsWithPersitence(products: Type[]) {
    if (!this.#persistence) {
      logger.info('Updating json file skipped')
      return
    }
    const productsToremove = products.map((product) => product.id)
    removeProductsData(productsToremove)

    products.forEach((product) => {
      saveProduct(this.#persistenceKey, {
        id: product.id,
        name: product.name,
        amount: product.amount,
        price: 'price' in product ? product.price : undefined,
      })
    })
  }

  removeProductsFromPersistence(productIdsToRemove: string[]) {
    if (!this.#persistence) {
      logger.info('Updating json file skipped')
      return
    }
    removeProductsData(productIdsToRemove)
  }

  getProductsFromPersistence(): Type[] {
    const savedData = loadProductsData()
    switch (this.#persistenceKey) {
      case 'auctions':
        return savedData[this.#persistenceKey].map(
          (product) =>
            new AuctionProduct(
              product.id,
              product.name,
              product.amount,
              product.price
            ) as Type
        )
      case 'buyNow':
        return savedData[this.#persistenceKey].map(
          (product) =>
            new BuyNowProduct(
              product.id,
              product.name,
              product.amount,
              product.price
            ) as Type
        )
      case 'forFree':
        return savedData[this.#persistenceKey].map(
          (product) =>
            new FreeProduct(product.id, product.name, product.amount) as Type
        )
    }
  }
}
