import { program } from 'commander'
import { loadProductsData, removeProductsData, saveProduct } from './utils'
import {
  ActionTypes,
  CartType,
  chooseAction,
} from './showcaseActions/chooseAction'
import { chooseCart } from './showcaseActions/chooseCart'
import { Cart, ProductTypes } from './shared/Cart'
import { AuctionProduct, BuyNowProduct, FreeProduct } from './shared/Products'
import Table from 'cli-table'

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0')
program.option('--persistence', 'saves data to json file')

program.parse()

const options = program.opts()
console.log('🚀 ~ file: showcase-demo.ts ~ line 16 ~ options', options)

class PersistantCart<
  ProductType extends ProductTypes
> extends Cart<ProductType> {
  #persistenceKey: 'auctions' | 'buyNow' | 'forFree'
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
const BuyNowCart = new PersistantCart<BuyNowProduct>('buyNow')
const FreeCart = new PersistantCart<FreeProduct>('forFree')

const start = () =>
  chooseCart(({ cartType }) => {
    if (cartType === 'quit') {
      return
    }

    return chooseAction(cartType, handleAction)
  })

const displayCart = (cart: CartType) => {
  let table: Table
  switch (cart) {
    case 'forFree':
      table = new Table({ head: ['Name', 'Amount'] })
      table.push(
        ...FreeCart.products.map((product) => [product.name, product.amount])
      )
      break
    case 'buyNow':
      table = new Table({ head: ['Name', 'Amount', 'Price'] })
      table.push(
        ...BuyNowCart.products.map((product) => [
          product.name,
          product.amount,
          product.price,
        ])
      )
      break
    case 'auctions':
      table = new Table({ head: ['Name', 'Amount', 'Price'] })
      table.push(
        ...AuctionCart.products.map((product) => [
          product.name,
          product.amount,
          product.price,
        ])
      )
  }
  console.log(table.toString())
}

const handleAction = (
  cartType: CartType,
  action: { actionType: ActionTypes }
) => {
  switch (action.actionType) {
    case 'display':
      displayCart(cartType)
      return chooseAction(cartType, handleAction)
    case 'otherCart':
      return start()
  }
}

start()
