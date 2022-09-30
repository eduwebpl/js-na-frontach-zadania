import { program } from 'commander'
import {
  ActionTypes,
  CartType,
  chooseAction,
} from './showcaseActions/chooseAction'
import { chooseCart } from './showcaseActions/chooseCart'
import {
  AuctionProduct,
  BuyNowProduct,
  FreeProduct,
} from './shared_w01e03/Products'
import Table from 'cli-table'
import { removeItems } from './showcaseActions/removeItems'
import { addItems } from './showcaseActions/addItems'
import { faker } from '@faker-js/faker/locale/pl'
import { logger } from './utils'
import { DataRepository } from './DataRepository'
import { PersistantCart } from './PersistantCart'

program
  .name('demo-showcase')
  .description('CLI for demo showcase')
  .version('0.1.0')
program.option('--persistence', 'saves data to json file')

program.parse()

const options: { persistence: boolean } = program.opts() || {
  persistence: false,
}

logger.info(`Persistence mode is: ${options.persistence}`)

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
        chooseAction(cart, handleAction)
      })
      break
    case 'buyNow':
      options = BuyNowCart.products.map((product) => ({
        name: product.name,
        value: product.id,
      }))
      removeItems(options, ({ productIdsToRemove = [] }) => {
        productIdsToRemove.forEach((id) => BuyNowCart.removeProduct(id))
        chooseAction(cart, handleAction)
      })
      break
    case 'auctions':
      options = AuctionCart.products.map((product) => ({
        name: product.name,
        value: product.id,
      }))
      removeItems(options, ({ productIdsToRemove = [] }) => {
        productIdsToRemove.forEach((id) => AuctionCart.removeProduct(id))
        chooseAction(cart, handleAction)
      })
      break
  }
}

const addProduct = (cart: CartType) => {
  addItems(cart, ({ amount, name, price }) => {
    switch (cart) {
      case 'forFree':
        FreeCart.addProduct(
          new FreeProduct(faker.datatype.uuid(), name, Number(amount))
        )
        break
      case 'buyNow':
        BuyNowCart.addProduct(
          new BuyNowProduct(
            faker.datatype.uuid(),
            name,
            Number(amount),
            Number(price)
          )
        )
        break
      case 'auctions':
        AuctionCart.addProduct(
          new AuctionProduct(
            faker.datatype.uuid(),
            name,
            Number(amount),
            Number(price)
          )
        )
        break
    }
    chooseAction(cart, handleAction)
  })
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
      return removeItem(cartType)
    case 'add':
      return addProduct(cartType)
    case 'otherCart':
      return start()
  }
}

start()
