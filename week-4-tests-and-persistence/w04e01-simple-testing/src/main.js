import { AppView } from './app/app.view.js'
import { divider } from './app/divider.js'

const app = new AppView(divider)
app.welcomeBanner()
app
  .askForInputs()
  .then((code) => {
    process.exit(code)
  })
  .catch((err) => {
    console.error(err?.message)
    process.exit(1)
  })
