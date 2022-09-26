import { program } from 'commander'
import { Cart, ProductTypes } from './shared/Cart'
import {
  AuctionProduct,
  BuyNowProduct,
  FreeProduct,
  Product,
} from './shared/Products'
import { loadProductsData, removeProductsData, saveProduct } from './utils'

program.option('--persistence', 'saves data to json file')

program.parse()

const options = program.opts()
console.log('🚀 ~ file: showcase-demo.ts ~ line 16 ~ options', options)

class PersistantCart<
  ProductType extends ProductTypes
> extends Cart<ProductType> {
  #persistenceKey: 'auctions' | 'buyNow' | 'forFree'
  #products = new Map<string, Product>()
  constructor(persistenceKey: 'auctions' | 'buyNow' | 'forFree') {
    super()
    this.#persistenceKey = persistenceKey
    const savedData = loadProductsData()
    switch (persistenceKey) {
      case 'auctions':
        savedData[persistenceKey].forEach((product) => {
          super.addProduct(
            new AuctionProduct(
              product.id,
              product.name,
              product.amount,
              product.price
            ) as ProductType
          )
        })
        break
      case 'buyNow':
        savedData[persistenceKey].forEach((product) => {
          super.addProduct(
            new BuyNowProduct(
              product.id,
              product.name,
              product.amount,
              product.price
            ) as ProductType
          )
        })
        break
      case 'forFree':
        savedData[persistenceKey].forEach((product) => {
          super.addProduct(
            new FreeProduct(
              product.id,
              product.name,
              product.amount
            ) as ProductType
          )
        })
        break
    }
  }

  #updatePersistence() {
    const productsToremove = this.products.map((product) => product.id)
    removeProductsData(productsToremove)
    this.products.forEach((product) => {
      saveProduct(this.#persistenceKey, { ...product })
    })
  }

  addProduct(product: ProductType) {
    super.addProduct(product)
    this.#updatePersistence()
  }

  updateProduct(product: ProductType) {
    super.updateProduct(product)
    this.#updatePersistence()
  }

  removeProduct(id: string) {
    super.removeProduct(id)
    this.#updatePersistence()
  }
}

const AuctionCart = new PersistantCart<AuctionProduct>('auctions')

console.log(AuctionCart.products)
