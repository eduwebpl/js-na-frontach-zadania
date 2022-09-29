import inquirer from 'inquirer'

export type ActionTypes = 'remove' | 'add' | 'update' | 'display' | 'otherCart'
export type CartType = 'buyNow' | 'forFree' | 'auctions'

export const chooseAction = (
  choosenCart: CartType,
  callback: (
    cartType: CartType,
    answers: {
      actionType: ActionTypes
    }
  ) => void
) =>
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Co chcesz zrobić?',
        name: 'actionType',
        choices: [
          {
            name: 'Usunąć produkt',
            value: 'remove',
          },
          {
            name: 'Dodać produkt',
            value: 'add',
          },
          {
            name: 'Zaktualizować produkt',
            value: 'update',
          },
          {
            name: 'Wyświetlić koszyk',
            value: 'display',
          },
          {
            name: 'Wybierz inny koszyk',
            value: 'otherCart',
          },
        ],
      },
    ])
    .then((anwsers) => callback(choosenCart, anwsers))
