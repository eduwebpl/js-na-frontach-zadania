import inquirer from 'inquirer'

export class AppView {
  #divideFn

  constructor(divideFn) {
    this.#divideFn = divideFn
  }

  welcomeBanner() {
    console.log(`
    ____  _       _     __             ___    ____  ____ 
   / __ \\(_)   __(_)___/ /__  _____   /   |  / __ \\/ __ \\
  / / / / / | / / / __  / _ \\/ ___/  / /| | / /_/ / /_/ /
 / /_/ / /| |/ / / /_/ /  __/ /     / ___ |/ ____/ ____/ 
/_____/_/ |___/_/\\__,_/\\___/_/     /_/  |_/_/   /_/`)
  }

  askForInputs() {
    const type = 'input'
    const validate = (v) => this.#numberValidator(v)
    const filter = Number
    return inquirer
      .prompt([
        {
          name: 'a',
          message: 'Type first number a=',
          type,
          validate,
          filter,
        },
        {
          name: 'b',
          message: 'Type second number b=',
          type,
          validate,
          filter,
        },
      ])
      .then(({ a, b }) => {
        const result = this.#divideFn(a, b)
        console.log('Result of your division:', result)
        return this.#askToContinue()
      })
  }

  #askToContinue() {
    return inquirer
      .prompt([
        {
          name: 'answer',
          message: 'Do you wish to continue?',
          type: 'confirm',
          default: true,
        },
      ])
      .then(({ answer }) => {
        if (answer) {
          return this.askForInputs()
        }
        return 0
      })
  }

  #numberValidator(value) {
    const checkNaN = Number.isNaN(Number(value))
    return checkNaN ? 'Please enter a valid number!' : true
  }
}
