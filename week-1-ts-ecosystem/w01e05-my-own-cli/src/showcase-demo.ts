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
import { removeItems } from './showcaseActions/removeItems'

program
  .name('demo-showcase')
  .description('CLI for demo showcase')
  .version('0.1.0')
program.option('--persistence', 'saves data to json file')

program.parse()

const options: { persistence: boolean } = program.opts() || {
  persistence: false,
}

type PersistantKey = 'auctions' | 'buyNow' | 'forFree'

class DataRepository<Type extends ProductTypes> {
  #persistenceKey: PersistantKey
  #persistence: boolean
  constructor(persistenceKey: PersistantKey, persistence = false) {
    this.#persistenceKey = persistenceKey
    this.#persistence = persistence
  }

  updatePersistence(products: Type[]) {
    if (!this.#persistence) {
      console.log('Updating json file skipped')
      return
    }
    const productsToremove = products.map((product) => product.id)
    removeProductsData(productsToremove)
    products.forEach((product) => {
      saveProduct(this.#persistenceKey, { ...product })
    })
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

class PersistantCart<
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
    this.#dataRepository.updatePersistence(this.products)
  }

  updateProduct(product: ProductType) {
    super.updateProduct(product)
    this.#dataRepository.updatePersistence(this.products)
  }

  removeProduct(id: string) {
    super.removeProduct(id)
    this.#dataRepository.updatePersistence(this.products)
  }
}

const AuctionsDataRepository = new DataRepository<AuctionProduct>(
  'auctions',
  options.persistence
)
const BuyNowDataRepository = new DataRepository<BuyNowProduct>(
  'buyNow',
  options.persistence
)
const FreeCartRepository = new DataRepository<FreeProduct>(
  'forFree',
  options.persistence
)

const AuctionCart = new PersistantCart<AuctionProduct>(AuctionsDataRepository)
const BuyNowCart = new PersistantCart<BuyNowProduct>(BuyNowDataRepository)
const FreeCart = new PersistantCart<FreeProduct>(FreeCartRepository)

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
        ...FreeCart.products.map((product) => [
          product.name,
          product.amount.toString(),
        ])
      )
      break
    case 'buyNow':
      table = new Table({ head: ['Name', 'Amount', 'Price'] })
      table.push(
        ...BuyNowCart.products.map((product) => [
          product.name,
          product.amount.toString(),
          product.price.toString(),
        ])
      )
      break
    case 'auctions':
      table = new Table({ head: ['Name', 'Amount', 'Price'] })
      table.push(
        ...AuctionCart.products.map((product) => [
          product.name,
          product.amount.toString(),
          product.price.toString(),
        ])
      )
  }
  console.log(table.toString())
}

type ListChoice = { name: string; value: string }

const removeItem = (cart: CartType) => {
  let options: ListChoice[]
  switch (cart) {
    case 'forFree':
      options = FreeCart.products.map((product) => ({
        name: product.name,
        value: product.id,
      }))
      removeItems(options, ({ productIdsToRemove = [] }) => {
        productIdsToRemove.forEach((id) => FreeCart.removeProduct(id))
      })
      break
    case 'buyNow':
      options = BuyNowCart.products.map((product) => ({
        name: product.name,
        value: product.id,
      }))
      removeItems(options, ({ productIdsToRemove = [] }) => {
        productIdsToRemove.forEach((id) => BuyNowCart.removeProduct(id))
      })
      break
    case 'auctions':
      options = AuctionCart.products.map((product) => ({
        name: product.name,
        value: product.id,
      }))
      removeItems(options, ({ productIdsToRemove = [] }) => {
        productIdsToRemove.forEach((id) => AuctionCart.removeProduct(id))
      })
      break
  }
}

const handleAction = (
  cartType: CartType,
  action: { actionType: ActionTypes }
) => {
  switch (action.actionType) {
    case 'display':
      displayCart(cartType)
      return chooseAction(cartType, handleAction)
    case 'remove':
      removeItem(cartType)
      return chooseAction(cartType, handleAction)
    case 'add':
      displayCart(cartType)
      return chooseAction(cartType, handleAction)
    case 'otherCart':
      return start()
  }
}

start()
