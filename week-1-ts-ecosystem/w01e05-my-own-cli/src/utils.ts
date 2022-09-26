import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { faker } from '@faker-js/faker/locale/pl'
import { CartItemsPersistance } from './shared/persistent.types'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fileName = path.join(__dirname, '../persistent-data/cart-items.json')

export const loadProductsData = (): CartItemsPersistance => {
  const data = readFileSync(fileName).toString()
  return JSON.parse(data)
}

export const saveProductsData = (
  data: CartItemsPersistance
): CartItemsPersistance => {
  const newData = JSON.stringify(data, null, 2)
  writeFileSync(fileName, newData)
  return data
}

export const saveProduct = (
  type: 'auctions' | 'buyNow' | 'forFree',
  data: { id?: string; price?: number; name?: string; amount?: number }
) => {
  const savedData = loadProductsData()
  switch (type) {
    case 'forFree':
      savedData.forFree.push({
        name: data.name ?? faker.commerce.product(),
        id: data.id ?? faker.datatype.uuid(),
        amount: data.amount ?? faker.datatype.number({ min: 10, max: 500 }),
      })
      break
    default:
      savedData[type].push({
        name: data.name ?? faker.commerce.product(),
        id: data.id ?? faker.datatype.uuid(),
        amount: data.amount ?? faker.datatype.number({ min: 10, max: 25 }),
        price:
          data.price ??
          faker.datatype.number({
            min: 10,
            max: 500,
            precision: 0.01,
          }),
      })
  }
  saveProductsData(savedData)
}

export const removeProductsData = (productIds: string[]) => {
  const savedData = loadProductsData()
  savedData.auctions = savedData.auctions.filter(
    (product) => !productIds.includes(product.id)
  )
  savedData.buyNow = savedData.buyNow.filter(
    (product) => !productIds.includes(product.id)
  )
  savedData.forFree = savedData.forFree.filter(
    (product) => !productIds.includes(product.id)
  )
  saveProductsData(savedData)
}
