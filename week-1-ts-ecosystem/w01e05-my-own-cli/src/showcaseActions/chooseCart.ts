import inquirer from 'inquirer'

export const chooseCart = (
  callback: (answers: {
    cartType: 'buyNow' | 'forFree' | 'auctions' | 'quit'
  }) => void
) =>
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Jaki koszyk chcesz wybrać?',
        name: 'cartType',
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
          {
            name: 'Kończymy',
            value: 'quit',
          },
        ],
      },
    ])
    .then(callback)
