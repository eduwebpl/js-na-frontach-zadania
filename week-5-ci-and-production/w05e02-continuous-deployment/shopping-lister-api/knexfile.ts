// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/database/shopping-list-dev.sqlite3',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
    pool: {
      afterCreate: (knex, cb) => knex.run('PRAGMA foreign_keys = ON', cb),
    },
  },
  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/database/shopping-list-production.sqlite3',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    pool: {
      afterCreate: (knex, cb) => knex.run('PRAGMA foreign_keys = ON', cb),
    },
  },
};
