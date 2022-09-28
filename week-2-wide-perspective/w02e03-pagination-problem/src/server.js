import { app } from './app.js'

const PORT = 3330

app.listen(PORT, () => {
  console.log(`Server is up http://localhost:${PORT}`)
})
