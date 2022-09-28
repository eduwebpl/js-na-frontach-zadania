import { db, dbConnection } from './connection.js'

const RECORD_PER_QUERY_LIMIT = 100

export function createRepository(repositoryName) {
  let collectionChain = db?.chain?.get(repositoryName)
  dbConnection.once('db:ready', (db) => {
    collectionChain = db.chain.get(repositoryName)
  })
  return {
    get chain() {
      if (!collectionChain) {
        throw new Error(`DB Collection "${repositoryName}" is not present`)
      }
      return collectionChain
    },
    find({ where = {}, skip = 0, limit = RECORD_PER_QUERY_LIMIT } = {}) {
      throwIfNotNumeric(skip, 'skip')
      throwIfNotNumeric(limit, 'limit')
      const query = this.chain.filter(where)
      return {
        records: query.drop(skip).take(limit).value(),
        total: query.value().length,
      }
    },
    findOne(where = {}) {
      return this.chain.find(where).value()
    },
  }
}

function throwIfNotNumeric(value, fieldName) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new Error(`"${fieldName}" must be a numeric, not NaN value`)
  }
}
