import { chain, CollectionChain } from 'lodash';

export class BaseRepository<T> {
  private readonly RECORD_PER_QUERY_LIMIT = 100;
  private chain: CollectionChain<T>;

  constructor(dataCollection: T[] = []) {
    this.chain = chain(dataCollection);
  }

  find({ where = {}, skip = 0, limit = this.RECORD_PER_QUERY_LIMIT } = {}) {
    throwIfNotNumeric(skip, 'skip');
    throwIfNotNumeric(limit, 'limit');
    const query = this.chain.filter(where);
    return {
      records: query.drop(skip).take(limit).value(),
      total: query.value().length,
    };
  }

  findOne(where = {}) {
    return this.chain.find(where).value();
  }
}

function throwIfNotNumeric(value, fieldName) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new Error(`"${fieldName}" must be a numeric, not NaN value`);
  }
}
