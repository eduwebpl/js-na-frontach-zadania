import inquirer from 'inquirer'

export type ActionTypes = 'remove' | 'add' | 'update' | 'display' | 'otherCart'

export const removeItems = (
  options: { name: string; value: string }[],
  callback: (answers: { productIdsToRemove: string[] }) => void
) =>
  inquirer
    .prompt([
      {
        type: 'checkbox',
        message: 'Który produkt usunąć?',
        name: 'productIdsToRemove',
        choices: [...options],
      },
    ])
    .then((anwsers) => callback(anwsers))
