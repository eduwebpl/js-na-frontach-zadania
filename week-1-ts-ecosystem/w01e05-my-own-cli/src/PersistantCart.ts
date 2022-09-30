import { DataRepository } from './DataRepository'
import { Cart, ProductTypes } from './shared_w01e03/Cart'

export class PersistantCart<
  ProductType extends ProductTypes
> extends Cart<ProductType> {
  #dataRepository: DataRepository<ProductType>
  constructor(dataRepository: DataRepository<ProductType>) {
    super()
    this.#dataRepository = dataRepository
    this.#dataRepository
      .getProductsFromPersistence()
      ?.forEach((product) => super.addProduct(product))
  }

  addProduct(product: ProductType) {
    super.addProduct(product)
    this.#dataRepository.syncProductsWithPersitence(this.products)
  }

  updateProduct(product: ProductType) {
    super.updateProduct(product)
    this.#dataRepository.syncProductsWithPersitence(this.products)
  }

  removeProduct(id: string) {
    super.removeProduct(id)
    this.#dataRepository.removeProductsFromPersistence([id])
  }
}
