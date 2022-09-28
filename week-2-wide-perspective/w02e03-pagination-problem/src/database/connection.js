import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { EventEmitter } from 'node:events'
import { Low, JSONFile } from 'lowdb'
import lodash from 'lodash'

const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, 'db-data.json')
const adapter = new JSONFile(file)

export const db = new Low(adapter)
export const dbConnection = new EventEmitter()

db.read()
  .then(() => {
    db.chain = lodash.chain(db.data)
    dbConnection.emit('db:ready', db)
  })
  .catch((err) => {
    console.error('FATAL Error: cannot connect to DB')
    console.error(err)
  })
