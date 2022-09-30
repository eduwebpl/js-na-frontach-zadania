import inquirer from 'inquirer'

export type ActionTypes = 'remove' | 'add' | 'update' | 'display' | 'otherCart'
export type CartType = 'buyNow' | 'forFree' | 'auctions'

export const addItems = (
  cartType: CartType,
  callback: (answers: { name: string; amount: string; price?: string }) => void
) =>
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Podaj nazwę produktu',
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
          return cartType !== 'forFree'
        },
        validate(input) {
          const amount = Number(input)
          if (Number.isNaN(amount)) {
            return 'Please provide valid number'
          }

          return true
        },
      },
    ])
    .then((anwsers) => callback(anwsers))
