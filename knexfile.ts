import * as knex from 'knex';

export const development: knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: './src/database/cars.db',
  },
  useNullAsDefault: true,
  migrations: {
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
};

export const db = knex(development);
