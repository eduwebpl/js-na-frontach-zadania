import inquirer from 'inquirer'

export type ActionTypes = 'remove' | 'add' | 'update' | 'display' | 'otherCart'
export type CartType = 'buyNow' | 'forFree' | 'auctions'

export const removeItems = (
  options: { name: string; value: string }[],
  callback: (answers: { productIdsToRemove: string[] }) => void
) =>
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Co chcesz zrobić?',
        name: 'productIdsToRemove',
        choices: [options],
      },
    ])
    .then((anwsers) => callback(anwsers))
