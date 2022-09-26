import inquirer from 'inquirer'
import { readFileSync, writeFileSync } from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { faker } from '@faker-js/faker/locale/pl'

const filename = fileURLToPath(import.meta.url)
const direcotryName = dirname(filename)
const fileName = path.join(direcotryName, '../persistent-data/cart-items.json')

type FreeItem = {
  id: string
  name: string
  amount: number
}

type BuyNowItem = {
  id: string
  name: string
  amount: number
  price: number
}
type AuctionItem = {
  id: string
  name: string
  amount: number
  price: number
}

type CartItemsPersistance = {
  forFree: FreeItem[]
  buyNow: BuyNowItem[]
  auctions: AuctionItem[]
}

const loadProductsData = (): CartItemsPersistance => {
  const data = readFileSync(fileName).toString()
  return JSON.parse(data)
}

const saveProductsData = (data: CartItemsPersistance): CartItemsPersistance => {
  const newData = JSON.stringify(data, null, 2)
  writeFileSync(fileName, newData)
  return data
}

const saveProduct = (
  type: 'auctions' | 'buyNow' | 'forFree',
  data: { price?: number; name?: string; amount?: number }
) => {
  const savedData = loadProductsData()
  switch (type) {
    case 'forFree':
      savedData.forFree.push({
        name: data.name ?? faker.commerce.product(),
        id: faker.datatype.uuid(),
        amount: data.amount ?? faker.datatype.number({ min: 10, max: 500 }),
      })
      break
    default:
      savedData[type].push({
        name: data.name ?? faker.commerce.product(),
        id: faker.datatype.uuid(),
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

const removeProductsData = (productIds: string[]) => {
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

const start = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Co chcesz zrobić?',
        name: 'action',
        choices: [
          {
            name: 'Wygenerować produkty',
            value: 'create',
          },
          {
            name: 'Usunąć produkty',
            value: 'remove',
          },
          {
            name: 'Kończymy',
            value: 'quit',
          },
        ],
      },
    ])
    .then((answers: { action: 'create' | 'remove' | 'quit' }) => {
      if (answers.action === 'create') {
        generateData()
      } else if (answers.action === 'remove') {
        removeProducts()
      }
    })
}

const removeProducts = () => {
  const savedData = loadProductsData()
  const mapProductToChoice = (
    product: FreeItem | BuyNowItem | AuctionItem
  ) => ({ name: `${product.name} - ${product.id}`, value: product.id })

  inquirer
    .prompt([
      {
        type: 'checkbox',
        message: 'Select toppings',
        name: 'productToRemove',
        choices: [
          new inquirer.Separator(' = Free Products = '),
          ...savedData.forFree.map(mapProductToChoice),
          new inquirer.Separator(' = Auction Products = '),
          ...savedData.auctions.map(mapProductToChoice),
          new inquirer.Separator(' = Buy Now Prodcts ='),
          ...savedData.buyNow.map(mapProductToChoice),
        ],
      },
    ])
    .then((answers: { productToRemove: string[] }) => {
      removeProductsData(answers.productToRemove)
      start()
    })
}

const generateData = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Jaki produkt chcesz dodać?',
        name: 'type',
        choices: [
          {
            name: '"Kup Teraz" - buyNow',
            value: 'buyNow',
          },
          {
            name: '"Za darmo" - forFree',
            value: 'forFree',
          },
          {
            name: '"Aukcja" - auction',
            value: 'auction',
          },
        ],
      },
      {
        type: 'confirm',
        message: 'Czy wygenerować produkt z danymi fikcyjnymi?',
        name: 'fake',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Podaj nazwę produktu',
        when(answers) {
          return !answers.fake
        },
        validate(input: string) {
          if (!input.length) {
            return 'Value can not be empty'
          }

          return true
        },
      },
      {
        type: 'input',
        name: 'amount',
        message: 'Podaj ilość',
        when(answers) {
          return !answers.fake
        },
        validate(input) {
          const amount = Number(input)
          if (!Number.isInteger(amount)) {
            return 'Please provide integer value'
          }

          if (amount > 8) {
            return 'You can generate max 8 items'
          }

          return true
        },
      },
      {
        type: 'input',
        name: 'price',
        message: 'Podaj cenę jednostkową',
        when(answers) {
          return !answers.fake && answers.type !== 'forFree'
        },
        validate(input) {
          const amount = Number(input)
          if (Number.isNaN(amount)) {
            return 'Please provide valid number'
          }

          return true
        },
      },
      {
        type: 'input',
        name: 'fakeItemsAmount',
        message: 'Ile produktów z fikcyjnymi danym wygenerować?',
        when(answers) {
          return answers.fake
        },
        validate(input) {
          const amount = Number(input)
          if (!Number.isInteger(amount)) {
            return 'Please provide integer value'
          }

          return true
        },
      },
      {
        type: 'confirm',
        message: 'Czy wygenerować kolejny produkt?',
        name: 'genearteAgain',
      },
    ])
    .then(
      async (answers: {
        name: string
        price: string
        amount: string
        fakeItemsAmount: number
        type: 'auctions' | 'buyNow' | 'forFree'
        genearteAgain: boolean
      }) => {
        const { type } = answers
        const amountOfItemsToAdd = answers.fakeItemsAmount || 1
        for (let i = 0; i <= amountOfItemsToAdd; i++) {
          saveProduct(type, {
            name: answers.name,
            amount: Number(answers.amount),
            price: Number(answers.price),
          })
        }
        if (answers.genearteAgain) {
          generateData()
        } else {
          start()
        }
      }
    )
}

start()
