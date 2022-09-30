import inquirer from 'inquirer'
import { AuctionItem, BuyNowItem, FreeItem } from './persistent.types'
import { loadProductsData, removeProductsData, saveProduct } from './utils'

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
            value: 'auctions',
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

          if (amount > 8) {
            return 'Max 8'
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
        const {
          type,
          name,
          price: priceAsString,
          amount: amountAsString,
        } = answers
        const price = priceAsString ? Number(priceAsString) : undefined
        const amount = amountAsString ? Number(amountAsString) : undefined
        const amountOfItemsToAdd = answers.fakeItemsAmount || 1
        for (let i = 0; i < amountOfItemsToAdd; i++) {
          saveProduct(type, {
            name,
            amount,
            price,
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
